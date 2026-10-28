// Writes content/lastmod.json: the last git commit date of each route's page file and its
// section components. Run `npm run lastmod` before deploying so sitemap <lastmod> is truthful.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const routes = JSON.parse(readFileSync('content/routes.json', 'utf8'));
const out = {};
for (const slug of routes) {
  const key = slug === '' ? 'home' : slug.replace(/\//g, '__');
  const paths = [slug === '' ? 'app/page.tsx' : `app/${slug}/page.tsx`, `components/pages/${key}`].filter(existsSync);
  let date = '';
  try {
    date = execSync(`git log -1 --format=%cs -- ${paths.map((p) => JSON.stringify(p)).join(' ')}`, { encoding: 'utf8' }).trim();
  } catch {}
  out[slug] = date || new Date().toISOString().slice(0, 10);
}
writeFileSync('content/lastmod.json', JSON.stringify(out, null, 1) + '\n');
console.log(`lastmod.json written for ${routes.length} routes`);
