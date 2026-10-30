// Applies content/answers.json to the service, industry and city pages:
//  - inserts <QuickAnswer slug=.../> right after the hero
//  - replaces the meta description (title/openGraph/twitter) when the entry has one
//  - adds founder + contactPoint to the Organization JSON-LD on every page (idempotent)
import { readFileSync, writeFileSync, globSync } from 'node:fs';

const answers = JSON.parse(readFileSync('content/answers.json', 'utf8'));
const site = JSON.parse(readFileSync('content/site.json', 'utf8'));
let qa = 0, desc = 0, org = 0;

for (const f of globSync('app/**/page.tsx')) {
  const slug = f === 'app/page.tsx' ? '' : f.slice(4, -9);
  let s = readFileSync(f, 'utf8'); const before = s;
  const entry = answers[slug];
  if (entry) {
    if (!s.includes('QuickAnswer')) {
      s = s.replace("import Footer from '@/components/layout/Footer';", "import Footer from '@/components/layout/Footer';\nimport QuickAnswer from '@/components/seo/QuickAnswer';");
      s = s.replace(/(        <V\d \/>\n)/, `$1        <QuickAnswer slug=${JSON.stringify(slug)} />\n`);
      if (s.includes('<QuickAnswer')) qa++; else console.log('no hero match', f);
    }
    if (entry.description) {
      const old = s.match(/description: "([^"]+)"/)[1];
      if (old !== entry.description) { s = s.split(old).join(entry.description); desc++; }
    }
  }
  // Organization enrichment: strip any previous founder/contactPoint, then insert once after the name
  const strip = /, \\"founder\\": \{[^}]*\}, \\"contactPoint\\": \{[^}]*\}/g;
  const add = `, \\"founder\\": {\\"@type\\": \\"Person\\", \\"@id\\": \\"${site.url}/our-team/#gaurav\\", \\"name\\": \\"${site.founder.name}\\"}, \\"contactPoint\\": {\\"@type\\": \\"ContactPoint\\", \\"contactType\\": \\"sales\\", \\"email\\": \\"${site.email}\\", \\"availableLanguage\\": \\"en\\", \\"areaServed\\": \\"US\\"}`;
  const nameRe = /(\\"@type\\": \\"ProfessionalService\\", \\"@id\\": \\"https:\/\/www\.rankempire\.us\/#org\\", \\"name\\": \\"RankEmpire\\")/;
  if (nameRe.test(s)) { const n = s.replace(strip, '').replace(nameRe, `$1${add}`); if (n !== s) { s = n; org++; } }
  if (s !== before) writeFileSync(f, s);
}
console.log(`quick answers inserted: ${qa}, descriptions replaced: ${desc}, organization enriched: ${org}`);
