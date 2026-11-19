// Google Indexing API: send URL_UPDATED notifications.
// The service account must be an OWNER of the Search Console property for www.rankempire.us.
//   GINDEX_SA=.secrets/indexer-sa.json node scripts/gindex.mjs [url ...]   # no urls = every route in content/routes.json
// Owner limits (19 Nov 2026): no requests before PAUSE_UNTIL, then at most DAILY_CAP URLs in any rolling 24 hours.
// Every sent URL is logged in docs/indexing-api-log.csv, which the cap counts. URLs must be given explicitly.
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

const PAUSE_UNTIL = '2026-11-25';
const DAILY_CAP = 20;
const LOG = 'docs/indexing-api-log.csv';
const today = new Date(Date.now() + 5 * 3600e3).toISOString().slice(0, 10); // Pakistan time (UTC+5)
if (today < PAUSE_UNTIL) { console.log(`Indexing API paused by the owner until ${PAUSE_UNTIL} (today ${today}). Nothing sent.`); process.exit(0); }
let urls = process.argv.slice(2);
if (!urls.length) { console.log('Give the URLs explicitly (no bulk submissions). Nothing sent.'); process.exit(0); }
if (!fs.existsSync(LOG)) fs.writeFileSync(LOG, 'sent_utc,url,result\n');
const since = Date.now() - 24 * 3600e3;
const sent24 = fs.readFileSync(LOG, 'utf8').split('\n').slice(1).filter((l) => l.endsWith(',ok') && Date.parse(l.split(',')[0]) > since).length;
const room = Math.max(0, DAILY_CAP - sent24);
if (urls.length > room) { console.log(`Cap ${DAILY_CAP} per 24 hours: ${sent24} sent in the last 24 hours, sending ${room} of ${urls.length}.`); urls = urls.slice(0, room); }
if (!urls.length) { console.log('24-hour cap reached. Nothing sent.'); process.exit(0); }
const t = await token();
let ok = 0, fail = 0;
for (const url of urls) {
  const r = await fetch('https://indexing.googleapis.com/v3/urlNotifications:publish', { method: 'POST', headers: { authorization: `Bearer ${t}`, 'content-type': 'application/json' }, body: JSON.stringify({ url, type: 'URL_UPDATED' }) });
  const j = await r.json();
  fs.appendFileSync(LOG, `${new Date().toISOString()},${url},${r.ok ? 'ok' : 'fail ' + r.status}\n`);
  if (r.ok) { ok++; console.log('ok  ', url); }
  else { fail++; console.log('FAIL', r.status, url, j.error?.message?.slice(0, 160)); if (r.status === 403 || r.status === 429) break; }
}
console.log(`sent ${ok} ok, ${fail} failed`);
