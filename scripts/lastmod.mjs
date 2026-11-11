// Writes content/lastmod.json: the date each route's content last changed. Run `npm run lastmod`
// before deploying so sitemap <lastmod> is truthful.
// A route's date is the latest of (a) the last git commit touching its page file or section
// components and (b) the last time its entry in content/guides.json or content/answers.json changed.
// (b) is tracked with content hashes in content/lastmod-hashes.json, because those shared JSON files
// change for many pages at once and their git date alone would mark every page as modified.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { createHash } from 'node:crypto';

const today = new Date().toISOString().slice(0, 10);
const routes = JSON.parse(readFileSync('content/routes.json', 'utf8'));
const read = (f) => JSON.parse(readFileSync(f, 'utf8'));
const fromHead = (f) => { try { return JSON.parse(execSync(`git show HEAD:${f}`, { encoding: 'utf8' })); } catch { return {}; } };
const hashOf = (g, a, slug) => createHash('sha1').update(JSON.stringify([g[slug] || null, a[slug] || null])).digest('hex').slice(0, 12);

const guides = read('content/guides.json');
const answers = read('content/answers.json');
const HASHES = 'content/lastmod-hashes.json';
let store = existsSync(HASHES) ? read(HASHES) : null;
if (!store) {
  // First run: baseline from the last commit so uncommitted guide/answer edits still count as changes.
  const g0 = fromHead('content/guides.json'), a0 = fromHead('content/answers.json');
  store = Object.fromEntries(routes.map((s) => [s, { hash: hashOf(g0, a0, s), date: '' }]));
}

const out = {};
for (const slug of routes) {
  const key = slug === '' ? 'home' : slug.replace(/\//g, '__');
  const paths = [slug === '' ? 'app/page.tsx' : `app/${slug}/page.tsx`, `components/pages/${key}`].filter(existsSync);
  let date = '';
  try {
    date = execSync(`git log -1 --format=%cs -- ${paths.map((p) => JSON.stringify(p)).join(' ')}`, { encoding: 'utf8' }).trim();
  } catch {}
  const h = hashOf(guides, answers, slug);
  const prev = store[slug];
  if (!prev || prev.hash !== h) store[slug] = { hash: h, date: today };
  const contentDate = store[slug].date || '';
  out[slug] = [date, contentDate].filter(Boolean).sort().pop() || today;
}
writeFileSync('content/lastmod.json', JSON.stringify(out, null, 1) + '\n');
writeFileSync(HASHES, JSON.stringify(store, null, 1) + '\n');
console.log(`lastmod.json written for ${routes.length} routes`);
