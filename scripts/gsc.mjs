// Google Search Console helper (no dependencies). Needs a service-account JSON that has been
// added as a user (Full) on the Search Console property.
//   GSC_SA=.secrets/gsc-service-account.json node scripts/gsc.mjs sitemaps   # submit the sitemap index + children
//   GSC_SA=... node scripts/gsc.mjs status                                     # list submitted sitemaps and errors
//   GSC_SA=... node scripts/gsc.mjs inspect [limit]                           # URL Inspection for every route -> reports/gsc-coverage-<date>.csv
// GSC_SITE defaults to the domain property "sc-domain:rankempire.us"; use "https://www.rankempire.us/" for a URL-prefix property.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { createSign } from 'node:crypto';

const SA_PATH = process.env.GSC_SA || '.secrets/gsc-service-account.json';
const SITE = process.env.GSC_SITE || 'sc-domain:rankempire.us';
const ORIGIN = 'https://www.rankempire.us';
const cmd = process.argv[2] || 'status';

const sa = JSON.parse(readFileSync(SA_PATH, 'utf8'));
const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');

async function token() {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: sa.client_email, scope: 'https://www.googleapis.com/auth/webmasters', aud: sa.token_uri, iat: now, exp: now + 3600 })}`;
  const sig = createSign('RSA-SHA256').update(unsigned).sign(sa.private_key).toString('base64url');
  const r = await fetch(sa.token_uri, { method: 'POST', headers: { 'Content-Type': 'application/x-www-form-urlencoded' }, body: new URLSearchParams({ grant_type: 'urn:ietf:params:oauth:grant-type:jwt-bearer', assertion: `${unsigned}.${sig}` }) });
  const j = await r.json();
  if (!j.access_token) throw new Error('token error: ' + JSON.stringify(j));
  return j.access_token;
}

const tk = await token();
const api = async (url, init = {}) => {
  const r = await fetch(url, { ...init, headers: { Authorization: `Bearer ${tk}`, 'Content-Type': 'application/json', ...(init.headers || {}) } });
  const text = await r.text();
  if (!r.ok) throw new Error(`${r.status} ${url}\n${text}`);
  return text ? JSON.parse(text) : {};
};
const enc = encodeURIComponent;

if (cmd === 'sitemaps') {
  for (const f of ['sitemap.xml', 'sitemap-core.xml', 'sitemap-industries.xml', 'sitemap-locations.xml', 'sitemap-content.xml']) {
    await api(`https://www.googleapis.com/webmasters/v3/sites/${enc(SITE)}/sitemaps/${enc(`${ORIGIN}/${f}`)}`, { method: 'PUT' });
    console.log('submitted', f);
  }
} else if (cmd === 'status') {
  const j = await api(`https://www.googleapis.com/webmasters/v3/sites/${enc(SITE)}/sitemaps`);
  for (const s of j.sitemap || []) console.log(s.path, '| last submitted', s.lastSubmitted, '| last downloaded', s.lastDownloaded, '| errors', s.errors, '| warnings', s.warnings, '| urls', (s.contents || []).map((c) => c.submitted).join(','), '| indexed', (s.contents || []).map((c) => c.indexed).join(','));
  if (!j.sitemap) console.log('no sitemaps submitted yet (or the service account is not a user on the property)');
} else if (cmd === 'inspect') {
  const routes = JSON.parse(readFileSync('content/routes.json', 'utf8'));
  const limit = parseInt(process.argv[3] || '2000', 10);
  const rows = [['url', 'verdict', 'coverageState', 'indexingState', 'robotsTxtState', 'lastCrawlTime', 'googleCanonical', 'userCanonical', 'mobileUsability', 'richResults']];
  for (const s of routes.slice(0, limit)) {
    const url = `${ORIGIN}/${s ? s + '/' : ''}`;
    try {
      const j = await api('https://searchconsole.googleapis.com/v1/urlInspection/index:inspect', { method: 'POST', body: JSON.stringify({ inspectionUrl: url, siteUrl: SITE }) });
      const r = j.inspectionResult || {}; const i = r.indexStatusResult || {};
      rows.push([url, i.verdict, i.coverageState, i.indexingState, i.robotsTxtState, i.lastCrawlTime, i.googleCanonical, i.userCanonical, r.mobileUsabilityResult?.verdict, r.richResultsResult?.verdict].map((v) => v ?? ''));
      console.log(i.verdict?.padEnd(8), (i.coverageState || '').padEnd(42), url);
    } catch (e) { rows.push([url, 'ERROR', String(e.message).split('\n')[0]]); console.log('ERROR', url, String(e.message).split('\n')[0]); }
    await new Promise((r) => setTimeout(r, 350)); // stay well under the 600 req/min quota
  }
  mkdirSync('reports', { recursive: true });
  const out = `reports/gsc-coverage-${new Date().toISOString().slice(0, 10)}.csv`;
  writeFileSync(out, rows.map((r) => r.map((c) => `"${String(c).replace(/"/g, '""')}"`).join(',')).join('\n') + '\n');
  const counts = rows.slice(1).reduce((a, r) => ((a[r[2] || r[1]] = (a[r[2] || r[1]] || 0) + 1), a), {});
  console.log('\nsummary:', counts, '\nwritten', out);
} else {
  console.log('unknown command. Use: sitemaps | status | inspect [limit]');
}
