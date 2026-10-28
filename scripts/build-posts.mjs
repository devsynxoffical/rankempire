// Generates a blog post route + body component from content/posts/<slug>.md and content/posts.json.
// Usage: node scripts/build-posts.mjs            (all posts)
//        node scripts/build-posts.mjs <slug>     (one post)
// Markdown subset: ## h2, ### h3, paragraphs, - lists, 1. lists, > quotes, | tables |,
// ![alt](src "caption") figures, :::kt ... ::: key-number tiles (value|label per line),
// inline [text](href) links and **bold**. A "## FAQ" section with "### Question" + answer
// paragraphs is also emitted as FAQPage schema.
import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'node:fs';

const posts = JSON.parse(readFileSync('content/posts.json', 'utf8'));
const only = process.argv[2];

const slugify = (s) => s.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
const jsStr = (s) => JSON.stringify(s);

function inline(text) {
  // returns JSX children string
  const parts = [];
  const re = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0, m;
  while ((m = re.exec(text))) {
    if (m.index > last) parts.push(`{${jsStr(text.slice(last, m.index))}}`);
    if (m[1]) parts.push(`<a href=${jsStr(m[2])}>${inline(m[1])}</a>`);
    else parts.push(`<strong>${inline(m[3])}</strong>`);
    last = m.index + m[0].length;
  }
  if (last < text.length) parts.push(`{${jsStr(text.slice(last))}}`);
  return parts.join('');
}
const plain = (t) => t.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1').replace(/\*\*/g, '');

function parse(md) {
  const lines = md.replace(/\r/g, '').split('\n');
  const blocks = []; const toc = []; const faq = []; let words = 0; let inFaq = false; let lastQ = null;
  let i = 0;
  const count = (t) => { words += plain(t).split(/\s+/).filter(Boolean).length; };
  while (i < lines.length) {
    const l = lines[i];
    if (!l.trim()) { i++; continue; }
    if (l.startsWith('## ')) { const t = l.slice(3).trim(); const id = slugify(t); toc.push({ id, t }); inFaq = /^faq/i.test(t); blocks.push(`<h2 id=${jsStr(id)}>${inline(t)}</h2>`); count(t); i++; continue; }
    if (l.startsWith('### ')) { const t = l.slice(4).trim(); blocks.push(`<h3>${inline(t)}</h3>`); count(t); if (inFaq) { lastQ = plain(t); } i++; continue; }
    if (l.startsWith(':::kt')) { i++; const tiles = []; while (i < lines.length && !lines[i].startsWith(':::')) { const [v, lab] = lines[i].split('|'); if (v) tiles.push(`<div><b>${inline(v.trim())}</b><span>${inline((lab || '').trim())}</span></div>`); i++; } i++; blocks.push(`<div className="kt">${tiles.join('')}</div>`); continue; }
    if (l.startsWith('![')) { const m = l.match(/^!\[([^\]]*)\]\(([^ )]+)(?: "([^"]*)")?\)/); if (m) { blocks.push(`<figure><img src=${jsStr(m[2])} alt=${jsStr(m[1])} loading="lazy" />${m[3] ? `<figcaption>${inline(m[3])}</figcaption>` : ''}</figure>`); if (m[3]) count(m[3]); } i++; continue; }
    if (l.startsWith('> ')) { const ps = []; while (i < lines.length && lines[i].startsWith('> ')) { ps.push(lines[i].slice(2)); i++; } const t = ps.join(' '); count(t); blocks.push(`<blockquote><p>${inline(t)}</p></blockquote>`); continue; }
    if (l.startsWith('|')) { const rows = []; while (i < lines.length && lines[i].startsWith('|')) { rows.push(lines[i]); i++; } const cells = (r) => r.split('|').slice(1, -1).map((c) => c.trim()); const head = cells(rows[0]); const body = rows.slice(2).map(cells); body.forEach((r) => r.forEach(count)); head.forEach(count); blocks.push(`<div className="tbl-wrap"><table><thead><tr>${head.map((h) => `<th>${inline(h)}</th>`).join('')}</tr></thead><tbody>${body.map((r) => `<tr>${r.map((c) => `<td>${inline(c)}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`); continue; }
    if (/^- /.test(l) || /^\d+\. /.test(l)) { const ol = /^\d+\. /.test(l); const items = []; while (i < lines.length && (/^- /.test(lines[i]) || /^\d+\. /.test(lines[i]))) { items.push(lines[i].replace(/^(- |\d+\. )/, '')); i++; } items.forEach(count); blocks.push(`<${ol ? 'ol' : 'ul'}>${items.map((t) => `<li>${inline(t)}</li>`).join('')}</${ol ? 'ol' : 'ul'}>`); continue; }
    // paragraph
    const ps = []; while (i < lines.length && lines[i].trim() && !/^(## |### |- |\d+\. |> |\||!\[|:::)/.test(lines[i])) { ps.push(lines[i].trim()); i++; }
    const t = ps.join(' '); count(t); blocks.push(`<p>${inline(t)}</p>`);
    if (inFaq && lastQ) { faq.push({ q: lastQ, a: plain(t) }); lastQ = null; }
  }
  return { blocks, toc, faq, words };
}

function build(post) {
  const mdPath = `content/posts/${post.slug}.md`;
  if (!existsSync(mdPath)) { console.log('skip (no md):', post.slug); return; }
  const { blocks, toc, faq, words } = parse(readFileSync(mdPath, 'utf8'));
  const key = `blog__${post.slug}`;
  mkdirSync(`components/pages/${key}`, { recursive: true });
  mkdirSync(`app/blog/${post.slug}`, { recursive: true });
  const body = `// Generated from content/posts/${post.slug}.md by scripts/build-posts.mjs. Edit the Markdown, not this file.
import AuthorCard from '@/components/blog/AuthorCard';

export const WORDS = ${words};
export const FAQ = ${JSON.stringify(faq)};

export default function Body() {
  return (
    <section className="sec" style={{ paddingTop: '50px' }}>
      <div className="wrap art" style={{ maxWidth: '1100px' }}>
        <aside className="toc" aria-label="Table of contents">
          <b>In this article</b>
${toc.map((t) => `          <a href="#${t.id}">${inline(t.t)}</a>`).join('\n')}
          <div className="tc">
            <strong>Need help?</strong>
            <p>Get a free SEO audit with a prioritized 90-day plan.</p>
            <a className="btn ac sm" href="/contact-us/">
              Get my audit
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </aside>
        <article className="prose" data-r="">
${blocks.map((b) => '          ' + b).join('\n')}
          <AuthorCard />
        </article>
      </div>
    </section>
  );
}
`;
  writeFileSync(`components/pages/${key}/Body.tsx`, body);
  const page = `// Generated by scripts/build-posts.mjs from content/posts.json and content/posts/${post.slug}.md.
import type { Metadata } from 'next';
import posts from '@/content/posts.json';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PostHero from '@/components/blog/PostHero';
import PostSchema from '@/components/blog/PostSchema';
import MorePosts from '@/components/blog/MorePosts';
import Body, { WORDS, FAQ } from '@/components/pages/${key}/Body';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

const post = posts.find((p) => p.slug === ${jsStr(post.slug)})!;
const URL = \`https://www.rankempire.us/blog/\${post.slug}/\`;

export const metadata: Metadata = {
  title: post.metaTitle,
  description: post.description,
  alternates: { canonical: URL, types: { 'application/rss+xml': 'https://www.rankempire.us/blog/feed.xml' } },
  robots: 'index,follow,max-image-preview:large,max-snippet:-1',
  openGraph: { type: 'article', siteName: 'RankEmpire', locale: 'en_US', title: post.metaTitle, description: post.description, url: URL, publishedTime: post.published, modifiedTime: post.modified, authors: ['https://www.rankempire.us/our-team/'], section: post.category, images: [{ url: \`https://www.rankempire.us\${post.image}\`, alt: post.imageAlt }] },
  twitter: { card: 'summary_large_image', title: post.metaTitle, description: post.description, images: [\`https://www.rankempire.us\${post.image}\`] },
};

export default function Page() {
  return (
    <>
      <PostSchema post={post} wordCount={WORDS} faq={FAQ} />
      <SkipLink />
      <Preloader />
      <Header active="" />
      <MobileMenu />
      <main id="main">
        <PostHero post={post} />
        <Body />
        <MorePosts exclude={post.slug} />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
`;
  writeFileSync(`app/blog/${post.slug}/page.tsx`, page);
  console.log(`built ${post.slug}: ${words} words, ${toc.length} sections, ${faq.length} FAQ`);
}

for (const p of posts) if (!only || p.slug === only) build(p);
