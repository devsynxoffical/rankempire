// Google Indexing API: send URL_UPDATED notifications.
// The service account must be an OWNER of the Search Console property for www.rankempire.us.
//   GINDEX_SA=.secrets/indexer-sa.json node scripts/gindex.mjs [url ...]   # no urls = every route in content/routes.json
// Default quota is about 200 URLs per day.
import fs from 'node:fs';
import crypto from 'node:crypto';

const SA = JSON.parse(fs.readFileSync(process.env.GINDEX_SA || '.secrets/indexer-sa.json', 'utf8'));
const BASE = 'https://www.rankempire.us';
const b64 = (o) => Buffer.from(typeof o === 'string' ? o : JSON.stringify(o)).toString('base64url');

async function token() {
  const now = Math.floor(Date.now() / 1000);
  const unsigned = `${b64({ alg: 'RS256', typ: 'JWT' })}.${b64({ iss: SA.client_email, scope: 'https://www.googleapis.com/auth/indexing https://www.googleapis.com/auth/webmasters', aud: SA.token_uri, iat: now, exp: now + 3600 })}`;
  const sig = crypto.sign('RSA-SHA256', Buffer.from(unsigned), SA.private_key).toString('base64url');
  const r = await fetch(SA.token_uri, { method: 'POST', headers: { 'content-type': 'application/x-www-form-urlencoded' }, body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${unsigned}.${sig}` });
  const j = await r.json();
  if (!j.access_token) throw new Error('token: ' + JSON.stringify(j));
  return j.access_token;
}

function allUrls() {
  const routes = JSON.parse(fs.readFileSync('content/routes.json', 'utf8'));
  const list = Array.isArray(routes) ? routes : Object.keys(routes);
  return list.map((r) => (typeof r === 'string' ? r : r.path || r.route)).filter(Boolean)
    .map((p) => (p.startsWith('http') ? p : BASE + (p.startsWith('/') ? p : '/' + p)))
    .map((u) => (u.endsWith('/') || /\.[a-z]+$/.test(u) ? u : u + '/'));
}

const urls = process.argv.slice(2).length ? process.argv.slice(2) : allUrls();
const t = await token();
let ok = 0, fail = 0;
for (const url of urls) {
  const r = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', { method: 'POST', headers: { authorization: `Bearer ${t}`, 'content-type': 'application/json' }, body: JSON.stringify({ url, type: 'URL_UPDATED' }) });
  const j = await r.json();
  if (r.ok) { ok++; console.log('ok  ', url); }
  else { fail++; console.log('FAIL', r.status, url, j.error?.message?.slice(0, 160)); if (r.status === 403 || r.status === 429) break; }
}
console.log(`sent ${ok} ok, ${fail} failed`);
