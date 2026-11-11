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

## 2026-11-11 (Bing Webmaster)

Bing data (Webmaster API): rankempire.us verified; 0 crawl issues, 0 robots blocks, 0 crawl errors; 80 pages crawled but only 1 in Bing's index; 0 Bing impressions. Sitemaps last read by Bing around 3-4 Nov with stale counts (124 URLs).

- Resubmitted all 5 sitemaps to Bing (SubmitFeed).
- Submitted the 100 highest-priority URLs through the Bing URL Submission API (daily quota used: 100/100; 1,900 left this month).
- Submitted all 131 URLs to IndexNow (HTTP 202 accepted; key file /c10d4dfaf7d7fd1399c84c083b9a859e.txt is live).
- scripts/indexnow.mjs now uses curl so it works through the session proxy.
- Daily sessions now also submit changed URLs to IndexNow and Bing, and report Bing's index count.

## 2026-11-11 (session 2)

Indexing audit (URL Inspection API, all 131 URLs): 130 "Submitted and indexed", 0 canonical mismatches, 129 rich-result PASS. 1 page /seo-for-tutors/ "Discovered - currently not indexed" (no unique guide, 7 internal links, old title pattern).
Technical audit (built site): 0 broken internal links, 0 duplicate titles/descriptions, 1 H1 per page, canonicals on all pages, 0 schema errors.

- Query-gap titles/descriptions on 18 impression-heavy pages: Phoenix (+Arizona), Austin (+Texas), Dallas (+Firm), NYC/Chicago/Houston/San Diego/Miami descriptions (+search engine optimization, local SEO, experts), 5 tool titles (+online, tool), Electricians (+Electrical Contractor), Accountants (+Accounting Firm), Dentists (+SEO for Dentists), Auto Detailing (+Detailers, Car Wash), Cleaning (+Carpet Cleaning).
- Guides on /geo/, /content-seo/, /keyword-research/, /on-page-seo/.
- /seo-for-tutors/: new guide, new title, links from the daycares guide and the keyword post (new tutoring keyword list; post now covers 15 industries).
- Competitor check (NYC): agencies use borough pages (Manhattan) and small-business angles; Manhattan page added to backlog pending data.

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
4. **Remaining pages without a guide:** competitor analysis, off-page SEO, B2B, SaaS, ecommerce SEO, Google Business Profile SEO, SEO packages hub.
5. **Manhattan page:** competitors rank borough pages; build only if Manhattan queries appear in Search Console.
6. **Recheck /seo-for-tutors/ indexing** after resubmission.
7. **Stylesheet split:** site.css is 287 KB on every page.
8. **Real client case study** once the details of the work behind a verified result are shared.
9. **Bing:** submit the remaining 31 URLs through the Bing API on 12 Nov; watch Bing InIndex (1 on 11 Nov); add RankEmpire to Bing Places.
10. **OpenSEO credits** for search volume data on new targets.
