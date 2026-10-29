import posts from '@/content/posts.json';
import industries from '@/content/industries.json';
import cities from '@/content/cities.json';
import answers from '@/content/answers.json';
import site from '@/content/site.json';
export const dynamic = 'force-static';

// llms.txt: a plain-text map of the site for AI assistants and crawlers (https://llmstxt.org).
export function GET() {
  const a = answers as Record<string, { q: string; a: string }>;
  const line = (slug: string, label: string) => `- [${label}](${site.url}/${slug}/)${a[slug] ? `: ${a[slug].a.split('. ')[0]}.` : ''}`;
  const services = ['seo-services', 'local-seo', 'google-business-profile-seo', 'ecommerce-seo', 'saas-seo', 'b2b-seo', 'technical-seo', 'seo-audit', 'aeo', 'geo', 'content-seo', 'link-building', 'keyword-research', 'on-page-seo', 'off-page-seo', 'competitor-seo-analysis', 'national-seo', 'enterprise-seo', 'international-seo', 'seo-consulting', 'seo-company'];
  const NAMES: Record<string, string> = { 'seo-services': 'All SEO services', 'local-seo': 'Local SEO', 'google-business-profile-seo': 'Google Business Profile SEO', 'ecommerce-seo': 'E-commerce SEO', 'saas-seo': 'SaaS SEO', 'b2b-seo': 'B2B SEO', 'technical-seo': 'Technical SEO', 'seo-audit': 'SEO audit', 'aeo': 'Answer Engine Optimization (AEO)', 'geo': 'Generative Engine Optimization (GEO)', 'content-seo': 'Content SEO', 'link-building': 'Link building', 'keyword-research': 'Keyword research', 'on-page-seo': 'On-page SEO', 'off-page-seo': 'Off-page SEO', 'competitor-seo-analysis': 'Competitor SEO analysis', 'national-seo': 'National SEO', 'enterprise-seo': 'Enterprise SEO', 'international-seo': 'International SEO', 'seo-consulting': 'SEO consulting', 'seo-company': 'About the SEO company' };
  const label = (s: string) => NAMES[s] || s;
  const txt = `# RankEmpire

> ${site.name} is a US SEO agency for local businesses, e-commerce brands and SaaS companies, led by founder ${site.founder.name}. It runs search engine optimization (SEO), answer engine optimization (AEO) and generative engine optimization (GEO) as one program: a free audit, a 90-day roadmap, one senior strategist per account, month-to-month plans after onboarding, and results published from Google Search Console.

Contact: ${site.email}. Website: ${site.url}. Results: ${site.url}/case-studies/ (verified Search Console reports). Pricing: ${site.url}/seo-packages/.

## Services
${services.map((s) => `- [${label(s)}](${site.url}/${s}/): ${a[s]?.a ?? ''}`).join('\n')}

## Industry playbooks (45)
${industries.map((i) => line(i.slug, `SEO for ${i.name}`)).join('\n')}

## Locations (17 US metros)
${cities.map((c) => line(`locations/${c.slug}`, `SEO company in ${c.name}, ${c.state}`)).join('\n')}

## Guides
${posts.map((p) => `- [${p.title}](${site.url}/blog/${p.slug}/): ${p.description}`).join('\n')}

## Free SEO tools
- [All tools](${site.url}/seo-tools/): eleven browser-based checkers for audits, meta tags, schema, sitemaps, robots.txt, keywords, rankings and backlinks. Nothing is sent to a server.

## Company
- [About](${site.url}/about-us/)
- [Team and founder](${site.url}/our-team/)
- [Contact and free audit](${site.url}/contact-us/)

## Optional
- [Sitemap index](${site.url}/sitemap.xml)
- [Blog RSS](${site.url}/blog/feed.xml)
`;
  return new Response(txt, { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
