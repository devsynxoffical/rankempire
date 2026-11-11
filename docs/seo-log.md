# RankEmpire SEO log

Running record of SEO, AEO and GEO work on www.rankempire.us: what was done, the data behind it, and what comes next. Newest entries first. Only verified work is logged as done.

## Baseline (Google Search Console, 1 Oct to 8 Nov 2026)

| Metric | Value |
| --- | --- |
| Impressions | 23,609 (about 3,000 a day since 4 Nov) |
| Clicks | 5 (1 from the USA) |
| Average position | 84 |
| Queries with impressions | 3,085 (96% of impressions at positions 51 to 100) |
| Indexed pages | 131 of 131 |
| GA4 | Installed 2026-11-10 (G-LJCCYX956M); data starts from this date |

## 2026-11-11 (daily session)

Data (Search Console, latest day 9 Nov): 3,398 impressions and 1 click on 9 Nov; 3,320 queries (+235 since 10 Nov). Striking distance: "seo for car wash and detailing shops" (p13), "seo for movers phoenix" (p9), "affordable seo audit brooklyn" (p24). Changes from 10 Nov are not in the data yet (2-day lag).

- Guides added to 6 core service pages that had none: /local-seo/, /seo-packages/local-seo/, /seo-packages/ecommerce-seo/, /enterprise-seo/, /technical-seo/, /link-building/.
- Cannibalization fix: /local-seo/ now targets local and Google Maps SEO services ("map seo service"), while /seo-packages/local-seo/ targets packages, pricing and plans. Both were showing for "local seo packages" at about p97.
- Titles: Local SEO Services & Google Maps SEO; Local SEO Packages & Pricing Plans; Ecommerce SEO Packages & Pricing; Enterprise SEO Services & Packages; Technical SEO Services & Technical SEO Audit; Link Building Services: White Hat Backlinks.
- /seo-for-auto-detailing/: new "SEO for car washes and detail shops" section for the p13 query.
- scripts/lastmod.mjs now also tracks guide and answer text changes per page (content/lastmod-hashes.json), so guide-only edits update the sitemap date (backlog item closed).

## 2026-11-10 (session 2)

- `/seo-company/` retargeted to "seo company", the largest generic query (1,394 impressions, best position 26, all landing on city pages). New title "SEO Company & SEO Agency in the USA", new description and intro line, and a 6-section guide (what an SEO company does, company vs agency vs consultant, near me, cost, how to choose, timelines).
- `/locations/` hub: title targets "seo companies in usa" queries; description corrected from "11 more cities" to the real count.
- Analytics groundwork: GA4 loads once `ga4` is set in `content/site.json`. Lead actions (form submits, WhatsApp, book a call, phone, email) fire GA4 events and Meta Pixel Lead, Contact and Schedule events.
- Started this log.

## 2026-11-10 (session 1)

- Guides on 10 free tool pages; tool titles aligned to searched phrases.
- New post: /blog/seo-keywords-by-industry/.
- "How to choose the best SEO company in [city]" sections on 6 cities; "best dental SEO company" on dentists.
- 26 URLs submitted to the Indexing API; sitemaps resubmitted.

## 2026-11-09

- Guides on 25 indexed pages (13 cities, 12 industries); 18 zero-impression industry pages retitled.
- 40 URLs submitted; all 130 pages confirmed indexed.

## 2026-11-06

- New pages: Brooklyn, Tampa, Nashville, /book-a-call/, 2 blog posts.
- Metadata retargeted on 27 pages; alt text, price consistency, home page image weight; booking calendar and WhatsApp button.

## Backlog (highest impact first)

1. **Off-site authority** (needs owner accounts): Clutch, DesignRush, GoodFirms, UpCity, BrightLocal agency directory, Bing Places, Apple Business Connect, Google Business Profile for RankEmpire; expert quote platforms (Qwoted, Featured.com); list the free tools on Product Hunt, AlternativeTo and SaaSHub.
2. **GA4 key events:** owner to mark generate_lead, whatsapp_click and book_call_click as key events in GA4 Admin (needs owner access).
3. **"Near me" queries** (seo agency near me, best position 14; seo services near me; seo firms near me): strengthen city pages and the /seo-company/ guide as data comes in.
4. **Remaining pages without a guide:** content SEO, GEO, keyword research, competitor analysis, off-page SEO, on-page SEO, B2B, SaaS, ecommerce SEO, Google Business Profile SEO, SEO packages hub.
5. **Stylesheet split:** site.css is 287 KB on every page.
7. **Real client case study** once the details of the work behind a verified result are shared.
8. **OpenSEO credits** for search volume data on new targets.
