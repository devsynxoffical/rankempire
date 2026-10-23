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
content/routes.json          list of routes (used by the sitemap)
```

Links are plain anchors on purpose: every page is a full document so the loader and the scroll animations
start fresh on each page, exactly as on the static site.

## Static export

Uncomment `output: 'export'` in `next.config.mjs`, run `npm run build`, upload the `out/` folder anywhere.
