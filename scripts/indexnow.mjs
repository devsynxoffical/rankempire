// Submits every route (or the URLs passed as arguments) to IndexNow (Bing, Yandex, Seznam, Naver...).
//   node scripts/indexnow.mjs                      # all routes
//   node scripts/indexnow.mjs /blog/new-post/      # specific paths
// The key lives in content/indexnow-key.txt and is served at https://www.rankempire.us/<key>.txt
import { readFileSync } from 'node:fs';

const key = readFileSync('content/indexnow-key.txt', 'utf8').trim();
const host = 'www.rankempire.us';
const args = process.argv.slice(2);
const routes = JSON.parse(readFileSync('content/routes.json', 'utf8'));
const urls = (args.length ? args : routes.map((s) => `/${s ? s + '/' : ''}`)).map((p) => `https://${host}${p.startsWith('/') ? p : '/' + p}`);

for (let i = 0; i < urls.length; i += 10000) {
  const batch = urls.slice(i, i + 10000);
  const r = await fetch('https://api.indexnow.org/indexnow', {
    method: 'POST', headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: batch }),
  });
  console.log(`IndexNow: ${batch.length} URLs -> HTTP ${r.status} ${r.status === 200 || r.status === 202 ? 'accepted' : await r.text()}`);
}
