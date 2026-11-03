// Per-page query breakdown from Search Console: which queries each page appears for, with
// position and impressions. Writes reports/gsc-pages-<date>.json and prints the top pages.
//   node scripts/gsc-pages.mjs [days]
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
const rows = [];
for (let start = 0; ; start += 25000) {
  const r = await fetch(`https://www.googleapis.com/webmasters/v3/sites/${encodeURIComponent(SITE)}/searchAnalytics/query`, { method: 'POST', headers: { Authorization: `Bearer ${tk}`, 'Content-Type': 'application/json' }, body: JSON.stringify({ startDate: d(days + 2), endDate: d(1), dimensions: ['page', 'query'], rowLimit: 25000, startRow: start }) });
  const j = await r.json(); const got = j.rows || []; rows.push(...got); if (got.length < 25000) break;
}
const byPage = {};
for (const r of rows) { const p = r.keys[0].replace(SITE, '/'); (byPage[p] ||= []).push({ q: r.keys[1], impr: r.impressions, clicks: r.clicks, pos: Math.round(r.position * 10) / 10 }); }
const summary = Object.entries(byPage).map(([p, qs]) => ({ page: p, impr: qs.reduce((a, b) => a + b.impr, 0), clicks: qs.reduce((a, b) => a + b.clicks, 0), queries: qs.sort((a, b) => b.impr - a.impr) })).sort((a, b) => b.impr - a.impr);
mkdirSync('reports', { recursive: true });
writeFileSync(`reports/gsc-pages-${d(0)}.json`, JSON.stringify(summary, null, 1));
console.log(`${rows.length} page-query rows, ${summary.length} pages`);
for (const s of summary.slice(0, 25)) console.log(String(s.impr).padStart(5), 'impr', String(s.clicks).padStart(2), 'clk', s.page, '|', s.queries.slice(0, 4).map((q) => `${q.q} (${q.pos})`).join('; '));
