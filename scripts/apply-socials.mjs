// Injects "sameAs" (social profile URLs from content/site.json) into the Organization JSON-LD of every page.
// Safe to re-run: it replaces any existing sameAs. Run after editing content/site.json.
import { readFileSync, writeFileSync } from 'node:fs';
import { globSync } from 'node:fs';

const site = JSON.parse(readFileSync('content/site.json', 'utf8'));
const urls = Object.values(site.socials).filter(Boolean);
const files = globSync('app/**/page.tsx');
let n = 0;
for (const f of files) {
  let s = readFileSync(f, 'utf8');
  const before = s;
  // strip an existing sameAs we added earlier
  s = s.replace(/, \\"sameAs\\": \[[^\]]*\]/g, '');
  if (urls.length) {
    const same = `, \\"sameAs\\": [${urls.map((u) => `\\"${u}\\"`).join(', ')}]`;
    s = s.replace(/(\\"@id\\": \\"https:\/\/www\.rankempire\.us\/#org\\", \\"name\\": \\"RankEmpire\\")/g, `$1${same}`);
  }
  if (s !== before) { writeFileSync(f, s); n++; }
}
console.log(`${urls.length} social URL(s); ${n} page(s) updated`);
