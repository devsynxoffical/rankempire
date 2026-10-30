// Search Console performance export. GSC_SA/GSC_SITE as in gsc.mjs.
//   node scripts/gsc-perf.mjs [days]   -> prints totals, top queries, top pages; writes reports/gsc-perf-<date>.json
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createSign } from 'node:crypto';
const sa = JSON.parse(readFileSync(process.env.GSC_SA || '.secrets/gsc-service-account.json', 'utf8'));
const SITE = process.env.GSC_SITE || 'https://www.rankempire.us/';
const days = parseInt(process.argv[2] || '28', 10);
const b64 = (o) => Buffer.from(JSON.stringify(o)).toString('base64url');
const now = Math.floor(Date.now() / 1000);
const u = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/webmasters.readonly', aud: sa.token_uri, iat: now, exp: now + 3600 })}`;
const sig = createSign('RSA-SHA256').update(u).sign(sa.private_key).toString('base64url');
const tk = (await (await fetch(sa.token_uri, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${u}.${sig}` }) })).json()).access_token;
const d = (n) => new Date(Date.now() - n * 864e5).toISOString().slice(0, 10);
const q = async (body) => { const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, { method: 'POST', headers: { Authorization: `Bearer ${tk}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ startDate: d(days + 2), endDate: d(2), rowLimit: 500, ...body }) }); return (await r.json()).rows || []; };
const [total, byDate, byQuery, byPage, byCountry, byDevice] = await Promise.all([q({}), q({ dimensions: ['date'] }), q({ dimensions: ['query'] }), q({ dimensions: ['page'] }), q({ dimensions: ['country'], rowLimit: 10 }), q({ dimensions: ['device'] })]);
const f = (r) => `${String(r.clicks).padStart(4)} clicks ${String(r.impressions).padStart(6)} impr  ctr ${(r.ctr * 100).toFixed(1).padStart(5)}%  pos ${r.position.toFixed(1).padStart(5)}`;
console.log(`== last ${days} days (${d(days + 2)} to ${d(2)})`); total.forEach((r) => console.log(f(r)));
console.log('== by date'); byDate.forEach((r) => console.log(r.keys[0], f(r)));
console.log(`== top queries (${byQuery.length})`); byQuery.slice(0, 40).forEach((r) => console.log(f(r), ' ', r.keys[0]));
console.log(`== pages with impressions (${byPage.length})`); byPage.slice(0, 60).forEach((r) => console.log(f(r), ' ', r.keys[0].replace(SITE, '/')));
console.log('== countries'); byCountry.forEach((r) => console.log(f(r), ' ', r.keys[0]));
console.log('== devices'); byDevice.forEach((r) => console.log(f(r), ' ', r.keys[0]));
mkdirSync('reports', { recursive: true });
writeFileSync(`reports/gsc-perf-${d(0)}.json`, JSON.stringify({ days, total, byDate, byQuery, byPage, byCountry, byDevice }, null, 1));
