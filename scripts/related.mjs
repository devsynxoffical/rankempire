// Generates the "Keep exploring" related-links section for every industry, city and service page
// (hub-and-spoke internal linking). Re-run after adding an industry, city, service or blog post.
import { readFileSync, writeFileSync, existsSync } from 'node:fs';

const industries = JSON.parse(readFileSync('content/industries.json', 'utf8'));
const cities = JSON.parse(readFileSync('content/cities.json', 'utf8'));
const posts = JSON.parse(readFileSync('content/posts.json', 'utf8'));
const post = (slug) => { const p = posts.find((x) => x.slug === slug); return { href: `/blog/${slug}/`, label: `Guide: ${p.title.split(/[:?]/)[0]}` }; };
const ind = (slug) => { const i = industries.find((x) => x.slug === slug); return { href: `/${slug}/`, label: `SEO for ${i.name}` }; };
const city = (slug) => { const c = cities.find((x) => x.slug === slug); return { href: `/locations/${slug}/`, label: `SEO Company in ${c.name}` }; };

const SERVICE_LABEL = {
  'aeo': 'Answer Engine Optimization', 'geo': 'Generative Engine Optimization', 'b2b-seo': 'B2B SEO', 'competitor-seo-analysis': 'Competitor SEO Analysis',
  'content-seo': 'Content SEO', 'ecommerce-seo': 'E-commerce SEO', 'enterprise-seo': 'Enterprise SEO', 'google-business-profile-seo': 'Google Business Profile SEO',
  'international-seo': 'International SEO', 'keyword-research': 'Keyword Research', 'link-building': 'Link Building', 'local-seo': 'Local SEO', 'national-seo': 'National SEO',
  'off-page-seo': 'Off-Page SEO', 'on-page-seo': 'On-Page SEO', 'saas-seo': 'SaaS SEO', 'seo-audit': 'SEO Audit', 'seo-company': 'SEO Company', 'seo-consulting': 'SEO Consulting',
  'seo-services': 'All SEO Services', 'technical-seo': 'Technical SEO', 'seo-packages': 'SEO Packages and Pricing', 'seo-packages/local-seo': 'Local SEO Packages',
  'seo-packages/ecommerce-seo': 'E-commerce SEO Packages', 'seo-packages/saas-seo': 'SaaS SEO Packages', 'about-us': 'About RankEmpire', 'industries': 'All 45 Industries', 'case-studies': 'Verified Results', 'locations': 'All 17 Locations',
};
const svc = (slug) => ({ href: `/${slug}/`, label: SERVICE_LABEL[slug] });
const SERVICES = {
  'aeo': [['geo', 'content-seo', 'technical-seo', 'seo-audit'], ['aeo-vs-geo-vs-seo', 'technical-seo-basics']],
  'geo': [['aeo', 'content-seo', 'link-building', 'seo-services'], ['aeo-vs-geo-vs-seo', 'why-most-seo-campaigns-fail']],
  'b2b-seo': [['saas-seo', 'content-seo', 'link-building', 'keyword-research'], ['why-most-seo-campaigns-fail', 'aeo-vs-geo-vs-seo']],
  'competitor-seo-analysis': [['keyword-research', 'seo-audit', 'link-building', 'content-seo'], ['why-most-seo-campaigns-fail', 'technical-seo-basics']],
  'content-seo': [['keyword-research', 'on-page-seo', 'aeo', 'link-building'], ['aeo-vs-geo-vs-seo', 'why-most-seo-campaigns-fail']],
  'ecommerce-seo': [['technical-seo', 'content-seo', 'keyword-research', 'seo-packages/ecommerce-seo'], ['technical-seo-basics', 'why-most-seo-campaigns-fail']],
  'enterprise-seo': [['technical-seo', 'national-seo', 'international-seo', 'seo-consulting'], ['technical-seo-basics', 'why-most-seo-campaigns-fail']],
  'google-business-profile-seo': [['local-seo', 'seo-packages/local-seo', 'link-building', 'seo-audit'], ['google-business-profile-optimization-checklist', 'local-seo-90-day-roadmap']],
  'international-seo': [['enterprise-seo', 'technical-seo', 'national-seo', 'content-seo'], ['technical-seo-basics', 'why-most-seo-campaigns-fail']],
  'keyword-research': [['content-seo', 'competitor-seo-analysis', 'on-page-seo', 'seo-audit'], ['why-most-seo-campaigns-fail', 'aeo-vs-geo-vs-seo']],
  'link-building': [['off-page-seo', 'content-seo', 'geo', 'competitor-seo-analysis'], ['why-most-seo-campaigns-fail', 'local-seo-90-day-roadmap']],
  'local-seo': [['google-business-profile-seo', 'seo-packages/local-seo', 'link-building', 'seo-audit'], ['local-seo-90-day-roadmap', 'google-business-profile-optimization-checklist']],
  'national-seo': [['enterprise-seo', 'content-seo', 'link-building', 'technical-seo'], ['why-most-seo-campaigns-fail', 'aeo-vs-geo-vs-seo']],
  'off-page-seo': [['link-building', 'geo', 'content-seo', 'competitor-seo-analysis'], ['why-most-seo-campaigns-fail', 'aeo-vs-geo-vs-seo']],
  'on-page-seo': [['technical-seo', 'content-seo', 'keyword-research', 'aeo'], ['technical-seo-basics', 'aeo-vs-geo-vs-seo']],
  'saas-seo': [['b2b-seo', 'content-seo', 'technical-seo', 'seo-packages/saas-seo'], ['why-most-seo-campaigns-fail', 'aeo-vs-geo-vs-seo']],
  'seo-audit': [['technical-seo', 'seo-services', 'competitor-seo-analysis', 'seo-packages'], ['technical-seo-basics', 'how-much-does-seo-cost']],
  'seo-company': [['seo-services', 'seo-packages', 'local-seo', 'about-us'], ['how-much-does-seo-cost', 'why-most-seo-campaigns-fail']],
  'seo-consulting': [['seo-audit', 'enterprise-seo', 'seo-company', 'seo-packages'], ['how-much-does-seo-cost', 'why-most-seo-campaigns-fail']],
  'seo-services': [['local-seo', 'ecommerce-seo', 'saas-seo', 'technical-seo'], ['how-much-does-seo-cost', 'aeo-vs-geo-vs-seo']],
  'technical-seo': [['seo-audit', 'on-page-seo', 'enterprise-seo', 'ecommerce-seo'], ['technical-seo-basics', 'aeo-vs-geo-vs-seo']],
};
const INDUSTRY_POST = { 'home-services': 'local-seo-90-day-roadmap', 'medical-and-health': 'local-seo-checklist', 'legal': 'local-seo-90-day-roadmap', 'automotive': 'local-seo-checklist', 'food-and-hospitality': 'local-seo-checklist', 'professional-services': 'why-most-seo-campaigns-fail', 'real-estate-and-property': 'local-seo-90-day-roadmap', 'beauty-fitness-and-lifestyle': 'local-seo-checklist' };

function write(key, title, items, pagePath) {
  const file = `components/pages/${key}/Related.tsx`;
  const src = `// Generated by scripts/related.mjs (hub-and-spoke internal links). Do not edit by hand.
import RelatedLinks from '@/components/sections/RelatedLinks';

export default function Related() {
  return <RelatedLinks title=${JSON.stringify(title)} items={${JSON.stringify(items)}} />;
}
`;
  writeFileSync(file, src);
  // make sure the page renders it
  let page = readFileSync(pagePath, 'utf8');
  if (!page.includes('/Related\'')) {
    page = page.replace("import Robo from '@/components/sections/Robo';", `import Related from '@/components/pages/${key}/Related';\nimport Robo from '@/components/sections/Robo';`);
    page = page.replace('        <Robo />', '        <Related />\n        <Robo />');
    writeFileSync(pagePath, page);
  }
}

let n = 0;
industries.forEach((it, i) => {
  const sib = industries.filter((x) => x.category === it.category && x.slug !== it.slug);
  const picks = []; for (let k = 0; k < 4 && sib.length; k++) picks.push(sib[(i + k) % sib.length]);
  const items = [...new Set(picks.map((p) => p.slug))].map(ind);
  items.push(city(cities[(i * 2) % cities.length].slug), city(cities[(i * 2 + 1) % cities.length].slug));
  items.push(post(INDUSTRY_POST[it.category]), post(i % 2 ? 'how-much-does-seo-cost' : 'google-business-profile-optimization-checklist'));
  write(it.slug, `Related industries, cities and guides`, items.slice(0, 8), `app/${it.slug}/page.tsx`); n++;
});
cities.forEach((c, i) => {
  const items = c.nearby.map(city);
  items.push(ind(industries[(i * 3) % industries.length].slug), ind(industries[(i * 3 + 7) % industries.length].slug));
  items.push(post('local-seo-90-day-roadmap'), post(i % 2 ? 'google-business-profile-optimization-checklist' : 'how-much-does-seo-cost'));
  write(`locations__${c.slug}`, `Other cities, industries and guides`, items, `app/locations/${c.slug}/page.tsx`); n++;
});
for (const [slug, [svcs, ps]] of Object.entries(SERVICES)) {
  const items = [...svcs.map(svc), ...ps.map(post), { href: '/industries/', label: 'Industry playbooks' }, { href: '/case-studies/', label: 'Verified client results' }];
  if (!existsSync(`app/${slug}/page.tsx`)) { console.log('missing page', slug); continue; }
  write(slug, 'Related services, guides and results', items, `app/${slug}/page.tsx`); n++;
}
console.log(`related links written for ${n} pages`);
