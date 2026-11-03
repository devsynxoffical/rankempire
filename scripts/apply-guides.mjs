// Inserts <DeepGuide slug=.../> on every page that has an entry in content/guides.json,
// before the pricing section (or the FAQ, or the proof loop). Idempotent.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
const guides = JSON.parse(readFileSync('content/guides.json', 'utf8'));
let added = 0;
for (const slug of Object.keys(guides)) {
  const f = `app/${slug}/page.tsx`;
  if (!existsSync(f)) { console.log('missing', f); continue; }
  let s = readFileSync(f, 'utf8');
  if (s.includes('<DeepGuide ')) continue;
  s = s.replace("import Footer from '@/components/layout/Footer';", "import Footer from '@/components/layout/Footer';\nimport DeepGuide from '@/components/sections/DeepGuide';");
  const a = [/( *)<Pricing \/>\n/, /( *)<Faq \/>\n/, /( *)<Pmq \/>\n/].find((re) => re.test(s));
  if (!a) { console.log('no anchor', f); continue; }
  s = s.replace(a, (m, ind) => `${ind}<DeepGuide slug=${JSON.stringify(slug)} />\n${m}`);
  writeFileSync(f, s); added++;
}
console.log(`guides inserted: ${added}`);
