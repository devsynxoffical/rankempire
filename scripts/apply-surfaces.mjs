// Places the SEO / AEO / GEO / AGO section (components/sections/SearchSurfaces.tsx) on every
// industry, city, service and hub page, with page-specific props: audience, a real search from the
// page's own keyword section, and a real customer question. Idempotent: re-run after adding pages.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const industries = JSON.parse(readFileSync('content/industries.json', 'utf8'));
const cities = JSON.parse(readFileSync('content/cities.json', 'utf8'));
const answers = JSON.parse(readFileSync('content/answers.json', 'utf8'));

const lit = (s) => [...s.matchAll(/\{"((?:[^"\\]|\\.)*)"\}/g)].map((m) => JSON.parse(`"${m[1]}"`));
const lowerName = (n) => n.split(' ').map((w) => (/^[A-Z]{2,}s?$/.test(w) ? w : w.toLowerCase())).join(' ').replace(/ & /g, ' and ');
const isQuestion = (q) => /^(how|what|why|when|which|who|do|does|is|are|should|can)\b/i.test(q);

function searchesOf(key, file) {
  const p = `components/pages/${key}/${file}.tsx`;
  if (!existsSync(p)) return [];
  const s = readFileSync(p, 'utf8');
  return [...s.matchAll(/<span className="q">\s*\{"((?:[^"\\]|\\.)*)"\}/g)].map((m) => JSON.parse(`"${m[1]}"`));
}

const SERVICES = {
  'seo-services': ['seo services for small business'], 'local-seo': ['local seo services'], 'google-business-profile-seo': ['google business profile optimization service'],
  'ecommerce-seo': ['ecommerce seo agency'], 'saas-seo': ['saas seo agency'], 'b2b-seo': ['b2b seo agency'], 'technical-seo': ['technical seo audit'],
  'seo-audit': ['free seo audit'], 'aeo': ['answer engine optimization agency'], 'geo': ['generative engine optimization agency'],
  'content-seo': ['seo content writing services'], 'link-building': ['link building services'], 'keyword-research': ['keyword research services'],
  'on-page-seo': ['on page seo services'], 'off-page-seo': ['off page seo services'], 'competitor-seo-analysis': ['competitor seo analysis'],
  'national-seo': ['national seo company'], 'enterprise-seo': ['enterprise seo agency'], 'international-seo': ['international seo agency'],
  'seo-consulting': ['seo consultant'], 'seo-company': ['seo company'],
};
const HUBS = {
  'industries': ['seo for small business', 'Does SEO work for my industry?'],
  'locations': ['local seo company near me', 'Do I need a local SEO company in my city?'],
  'seo-packages': ['seo packages', 'How much does SEO cost per month?'],
  'seo-packages/local-seo': ['local seo packages', 'How much does local SEO cost per month?'],
  'seo-packages/ecommerce-seo': ['ecommerce seo packages', 'How much does ecommerce SEO cost?'],
  'seo-packages/saas-seo': ['saas seo pricing', 'How much does SaaS SEO cost?'],
  'about-us': ['seo agency', 'How do I choose an SEO agency?'],
  'case-studies': ['seo results case study', 'How long does SEO take to show results?'],
};

const targets = [];
for (const i of industries) {
  const qs = searchesOf(i.slug, 'Searches');
  const kw = qs[0] || `seo for ${lowerName(i.name)}`;
  const question = qs.find(isQuestion) || qs.find((q) => /cost|price|how|vs/.test(q)) || qs[1] || answers[i.slug]?.q;
  targets.push({ slug: i.slug, page: `app/${i.slug}/page.tsx`, props: { kind: 'industry', audience: lowerName(i.name), kw, question } });
}
for (const c of cities) {
  const qs = searchesOf(`locations__${c.slug}`, 'Keywords');
  targets.push({ slug: `locations/${c.slug}`, page: `app/locations/${c.slug}/page.tsx`, props: { kind: 'city', audience: `businesses in ${c.name}`, city: c.name, kw: qs[0] || `seo company ${c.name.toLowerCase()}`, question: `How much does local SEO cost in ${c.name}?` } });
}
for (const [slug, [kw]] of Object.entries(SERVICES)) {
  targets.push({ slug, page: `app/${slug}/page.tsx`, props: { kind: 'service', audience: 'your business', kw, question: answers[slug]?.q || `What is ${slug.replace(/-/g, ' ')}?` } });
}
for (const [slug, [kw, question]] of Object.entries(HUBS)) {
  targets.push({ slug, page: `app/${slug}/page.tsx`, props: { kind: 'hub', audience: 'your business', kw, question } });
}

let added = 0, updated = 0, missing = [];
for (const t of targets) {
  if (!existsSync(t.page)) { missing.push(t.page); continue; }
  let s = readFileSync(t.page, 'utf8');
  const attrs = Object.entries({ slug: t.slug, ...t.props }).map(([k, v]) => `${k}=${JSON.stringify(v)}`).join(' ');
  const tag = `<SearchSurfaces ${attrs} />`;
  if (s.includes('<SearchSurfaces ')) {
    const n = s.replace(/<SearchSurfaces [^\n]*\/>/, tag);
    if (n !== s) { s = n; updated++; }
  } else {
    s = s.replace("import Footer from '@/components/layout/Footer';", "import Footer from '@/components/layout/Footer';\nimport SearchSurfaces from '@/components/sections/SearchSurfaces';");
    const anchors = [/( *)<Statement \/>\n/, /( *)<QuickAnswer [^\n]*\/>\n/, /( *)<V\d \/>\n/, /( *)<PageHero \/>\n/];
    const a = anchors.find((re) => re.test(s));
    if (!a) { missing.push(t.page + ' (no anchor)'); continue; }
    s = s.replace(a, (m, ind) => `${m}${ind}${tag}\n`);
    added++;
  }
  writeFileSync(t.page, s);
}
console.log(`surfaces section: ${added} added, ${updated} updated, ${targets.length} targets`);
if (missing.length) console.log('skipped:', missing);
