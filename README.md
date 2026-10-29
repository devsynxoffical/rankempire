# RankEmpire on Next.js

Next.js 15 (App Router) + React 19 + TypeScript. One route file per page, one component file per section.

## Run

```bash
npm install
npm run dev          # http://localhost:3000
npm run build && npm start
```

## Structure

```
app/
  layout.tsx                 fonts, stylesheet, loader logic, Lenis + site scripts
  page.tsx                   home
  <slug>/page.tsx            every other page (112 routes), metadata + JSON-LD per page
  not-found.tsx              404
  sitemap.ts                 sitemap.xml
components/
  layout/                    SkipLink, Preloader, Header (active prop), MobileMenu, Footer
  sections/                  sections shared by several pages (Robo, Faq, Founder, MoreResults, Related, Trust...)
  pages/<slug>/              the sections of that page (Hero, InDepth, WhyItMatters, Deliverables, Monthly,
                             Process, WhoItIsFor, Comparison, Pricing, Faq, Related...)
public/
  assets/site.css            all styles
  assets/site.js, v3.js      all animations and interactions (loader, 3D hero, word fill, cursor, tabs,
                             rank grid, founder light, FAQ chat, robo, timeline, counters, footer)
  assets/tools.js            free SEO tools
  img/                       3D renders, motion loops (mp4 + poster), photos
content/routes.json          list of routes (used by the sitemaps and the SEO scripts)
content/lastmod.json         last-changed date per route (npm run lastmod), used for sitemap <lastmod>
content/posts.json           blog post metadata; content/posts/<slug>.md is the article body
content/industries.json      industries + categories, content/cities.json cities + nearby cities (related links)
content/site.json            company, founder and social profile URLs (footer, Organization/Person schema)
scripts/                     SEO tooling, see below
```

Links are plain anchors on purpose: every page is a full document so the loader and the scroll animations
start fresh on each page, exactly as on the static site.

## Static export

Uncomment `output: 'export'` in `next.config.mjs`, run `npm run build`, upload the `out/` folder anywhere.

## SEO tooling

| Command | What it does |
| --- | --- |
| `npm run lastmod` | Rewrites `content/lastmod.json` from git history. Run before every deploy so `/sitemap.xml` reports true change dates. |
| `npm run posts` | Builds every blog post from `content/posts/<slug>.md` + `content/posts.json` into `app/blog/<slug>/page.tsx` and its body component. Adding a post = one Markdown file + one JSON entry + the route in `content/routes.json`. |
| `npm run related` | Regenerates the "Keep exploring" related-links section on every industry, city and service page (hub-and-spoke internal linking). |
| `npm run answers` | Applies `content/answers.json`: the Quick Answer block (with Speakable schema) after the hero of every service, industry and city page, per-page meta descriptions, and founder/contactPoint on the Organization schema. |
| `npm run socials` | Fill the URLs in `content/site.json` first; this injects them as `sameAs` into the Organization schema on every page. The footer and Person schema read the same file. |
| `npm run indexnow` | Submits all routes (or the paths you pass) to IndexNow for Bing and partners. |
| `npm run gsc -- status \| sitemaps \| inspect` | Search Console: list sitemaps, submit the sitemap index, or run URL Inspection on every route into `reports/gsc-coverage-<date>.csv`. Needs `.secrets/gsc-service-account.json` (gitignored) and the service account added as a user on the property. |

Sitemaps: `/sitemap.xml` is an index of `/sitemap-core.xml`, `/sitemap-industries.xml`, `/sitemap-locations.xml` and `/sitemap-content.xml`. The blog has an RSS feed at `/blog/feed.xml`. `/llms.txt` is a plain-text site summary for AI assistants, generated from the content JSON files.
