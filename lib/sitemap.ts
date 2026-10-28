import routes from '@/content/routes.json';
import lastmod from '@/content/lastmod.json';

export const SITE = 'https://www.rankempire.us';

export type Group = 'core' | 'industries' | 'locations' | 'content';

export function groupOf(slug: string): Group {
  if (slug.startsWith('seo-for-')) return 'industries';
  if (slug.startsWith('locations/')) return 'locations';
  if (slug.startsWith('blog/') || slug.startsWith('seo-tools/')) return 'content';
  return 'core';
}

export function urlOf(slug: string): string {
  return `${SITE}/${slug ? slug + '/' : ''}`;
}

export function entries(group: Group) {
  return (routes as string[])
    .filter((s) => groupOf(s) === group)
    .map((s) => ({ loc: urlOf(s), lastmod: (lastmod as Record<string, string>)[s] }));
}

const esc = (s: string) => s.replace(/&/g, '&amp;');

export function urlset(group: Group): string {
  const body = entries(group)
    .map((e) => `  <url>\n    <loc>${esc(e.loc)}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n  </url>`)
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</urlset>\n`;
}

export function sitemapIndex(): string {
  const groups: Group[] = ['core', 'industries', 'locations', 'content'];
  const body = groups
    .map((g) => {
      const latest = entries(g).map((e) => e.lastmod).sort().pop();
      return `  <sitemap>\n    <loc>${SITE}/sitemap-${g}.xml</loc>\n    <lastmod>${latest}</lastmod>\n  </sitemap>`;
    })
    .join('\n');
  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${body}\n</sitemapindex>\n`;
}

export const xmlResponse = (xml: string) =>
  new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
