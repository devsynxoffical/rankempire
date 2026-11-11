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

import { execFileSync } from 'node:child_process';
// curl is used instead of fetch so the request honours HTTPS_PROXY in sandboxed environments.
for (let i = 0; i < urls.length; i += 10000) {
  const batch = urls.slice(i, i + 10000);
  const body = JSON.stringify({ host, key, keyLocation: `https://${host}/${key}.txt`, urlList: batch });
  const code = execFileSync('curl', ['-sS', '-m', '60', '-o', '/dev/null', '-w', '%{http_code}', '-X', 'POST',
    '-H', 'Content-Type: application/json; charset=utf-8', 'https://api.indexnow.org/indexnow', '--data-binary', body], { encoding: 'utf8' }).trim();
  console.log(`IndexNow: ${batch.length} URLs -> HTTP ${code} ${code === '200' || code === '202' ? 'accepted' : 'check the key file and host'}`);
}
