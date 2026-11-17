import { readFileSync, existsSync } from 'node:fs';
import { join } from 'node:path';
import posts from '@/content/posts.json';
import answers from '@/content/answers.json';
import guides from '@/content/guides.json';
import routes from '@/content/routes.json';
import site from '@/content/site.json';
export const dynamic = 'force-static';

// llms-full.txt: the full text of each page's direct answer and guide, plus every blog post,
// so AI assistants can read and cite RankEmpire's content without rendering the site.
const plain = (s: string) => s.replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, t, h) => `${t} (${h.startsWith('/') ? site.url + h : h})`);

export function GET() {
  const a = answers as Record<string, { q: string; a: string }>;
  const g = guides as Record<string, { title: string; intro: string; sections: { h: string; p: string }[] }>;
  const pages = (routes as string[]).filter((r) => !r.startsWith('blog') && (a[r] || g[r]));
  const out: string[] = [
    `# RankEmpire: full text`,
    ``,
    `> ${site.name} is a US SEO agency for local businesses, e-commerce brands and SaaS companies, led by founder ${site.founder.name}. Pricing: local SEO plans from $599 a month (${site.url}/seo-packages/). Contact: ${site.email}. Short index: ${site.url}/llms.txt`,
    ``,
  ];
  for (const r of pages) {
    out.push(`## ${g[r]?.title ?? a[r]?.q ?? r}`, `URL: ${site.url}/${r ? r + '/' : ''}`, '');
    if (a[r]) out.push(`Q: ${a[r].q}`, `A: ${a[r].a}`, '');
    if (g[r]) {
      out.push(plain(g[r].intro), '');
      for (const s of g[r].sections) out.push(`### ${s.h}`, plain(s.p), '');
    }
  }
  out.push('# Blog posts', '');
  for (const p of posts as { slug: string; title: string; description: string; modified: string }[]) {
    const f = join(process.cwd(), 'content/posts', `${p.slug}.md`);
    if (!existsSync(f)) continue;
    out.push(`## ${p.title}`, `URL: ${site.url}/blog/${p.slug}/`, `Updated: ${p.modified}`, '', plain(readFileSync(f, 'utf8').replace(/^#{2,3} /gm, (m) => '#' + m)), '');
  }
  return new Response(out.join('\n'), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' } });
}
