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

## 2026-11-22 (12-hour run, 1:17 AM PKT)

Monitoring only: Search Console has no new days (latest 19 Nov, so the 20-21 Nov outage is not in the data yet). Site live on Hostinger (spot checks 200). Bing InIndex 21, 0 crawl issues, quota 73. URL Inspection: /small-business-seo/, Washington DC, Columbus, Sacramento and 2 posts "Discovered - currently not indexed"; Fort Worth and /blog/best-seo-company-in-the-usa/ unknown to Google. No SEO changes. Indexing API: 0 sent (paused until 25 Nov).

## 2026-11-21 (12-hour run, 1:17 PM PKT)

SITE BACK UP on Hostinger (server LiteSpeed, platform hostinger). Live check: all 148 pages 200; http->https, apex->www and missing-slash redirects 301; unknown URL 404; robots.txt, sitemaps, llms.txt, llms-full.txt, IndexNow key and feed served with correct types; long cache on assets; canonical correct. Resubmitted all sitemaps to Google, all 148 URLs to IndexNow and 27 priority URLs to Bing.
Tracking (13-19 Nov vs 6-12 Nov): 23,594 impressions (+19%), 2 clicks, average position 76.1 (up 8.2), 84 pages with impressions, 56 keywords in the top 20. Bing InIndex 21 (was 16). Gains: Chicago "best seo company near me" 10.5; Phoenix "seo company" 23.7; Houston "seo experts near me" 23.3. Search Console data predates the outage (20-21 Nov); its effect will show in 2-3 days.
No SEO changes (data still being measured). Indexing API: 0 sent (paused until 25 Nov).

## 2026-11-21 (12-hour run, 1:17 AM PKT)

SITE DOWN: www.rankempire.us returns HTTP 402 (Vercel x-vercel-error DEPLOYMENT_DISABLED) on all pages checked (/ and /small-business-seo/). The domain still points to Vercel; the Hostinger build is ready on the `hostinger` branch but not yet deployed/connected by the owner. Search Console has no new days (latest 18 Nov). Bing InIndex 16, 0 crawl issues. No SEO changes and no submissions (nothing should be submitted while the site is down). Indexing API: 0 sent.

## 2026-11-20 (12-hour run, 1:17 PM PKT)

Tracking (12-18 Nov vs 5-11 Nov): 22,003 impressions (+11%), 3 clicks, average position 77.0 (up 7.4), 82 pages with impressions, 53 keywords in the top 20. Bing InIndex 16, 0 crawl issues, quota 100.
Gains: Chicago "best seo company near me" 9.7 (page 1, 14 impr); Phoenix "seo company" 22.5 (110 impr); Houston "seo experts near me" 22.8; New York near-me queries 31-36; SERP checker "serp rank checker tool" 14.7; keyword rank checker "online seo rank tracker" 14.5. Drops: keyword rank checker "rank check online" variants (re-test continues).
No SEO change: the moving pages were changed within 21 days and are improving; other candidates are already covered. Indexing API: 0 sent (paused until 25 Nov).

## 2026-11-20 (12-hour run, 1:17 AM PKT)

Monitoring only: Search Console has no new days (latest 17 Nov). Bing InIndex 16 (was 11), 0 crawl issues, quota 93. Indexing API: 0 URLs sent (paused until 25 Nov). No SEO changes.

## 2026-11-19 (12-hour run, 1:17 PM PKT)

Tracking (11-17 Nov vs 4-10 Nov): 21,057 impressions (+1%), 2 clicks, average position 79.5 (up 4.7), 85 pages with impressions, keywords in the top 20: 49 (was 32). Bing InIndex 11, 0 crawl issues.
Gains: "best seo company near me" 20.9 (Chicago), "seo company" 21.7 (Austin), "seo experts near me" 22.8, "search engine optimization near me" 26.4, "seo company near me" 33.2 (New York); /locations/ hub 6-13 for "best seo company usa" queries; serp checker 9-11 for "serp rank checker tool", "serp checker tools". Drops: keyword rank checker "rank check online" variants (still being re-tested by Google; no edits).
Change: guide on /locations/ (see docs/recovery/changes.md).

## 2026-11-19 (owner request: new SEO page with full layout and lead capture)

- New /small-business-seo/ (see docs/recovery/changes.md): Semrush small-business cluster about 25,600 searches/month; targets "seo services for small business" (3,600, KD14) and "local seo for small business" (2,900, KD16). 20 sections including 8 new service-specific motion images, booking calendar and audit form. Only one page built: other candidates had little demand or are covered by existing pages.
- Noted: service-page pricing templates show $799/$1,499/$2,999 while local plans and schema use $599/$1,199/$2,199 (owner decision).

## 2026-11-19 (12-hour run, 1:17 AM PKT)

Tracking (Search Console 10-16 Nov vs 3-9 Nov): 20,239 impressions (-2%), 2 clicks, average position 81.9 (up 2.0), 84 pages with impressions, 32 keywords in the top 20. Bing InIndex 11, 0 crawl issues, quota 81.
Movers up: "seo company" now averages 21.9 (102 impressions, best page Dallas; was about 66-70 on Phoenix); "seo experts near me" 21.3 and "search engine optimization near me" 26.4 (New York); "seo agency for painting service" 33.0 and "painting contractor seo firm" 32.7 (Painters, after the 14 Nov title); "preschool seo company" 29.8 (Daycares); "best seo company near me" 32.2 (Chicago).
Movers down: several "rank checker online" variants on /seo-tools/keyword-rank-checker/ (to 75-90) while others rose ("seo rank check online" 30.8): Google is still testing the page after the 12 and 16 Nov changes, so no further edits now.
Indexing: newly indexed 18 Nov: /seo-for-car-accident-lawyers/, /seo-for-mass-tort-lawyers/, /seo-for-final-expense-insurance/, /blog/how-to-tell-if-seo-is-working/. Still waiting: Columbus, Sacramento, Washington DC, Fort Worth, Kansas City and 3 posts; resubmitted to the Indexing API and Bing.
No page edits this run (recent changes still being measured).

## 2026-11-18 (scheduled session)

Data: Search Console has no new days (latest 15 Nov: 3,214 impressions, position 80.9). Bing: InIndex 11 (was 5 on 17 Nov, 1 on 11 Nov), 0 crawl errors, 0 impressions, quota 81. No new changes: today's sessions already covered the actionable items.

## 2026-11-18 (owner request: MVA, mass tort, final expense and burial insurance pages)

- New agency service pages (owner chose agency pages over consumer lead-gen landers):
  - /seo-for-car-accident-lawyers/ "Car Accident Lawyer SEO & MVA Landing Pages": case-type pages, free case review landers, mobile intake, bar-rule compliance.
  - /seo-for-mass-tort-lawyers/ "Mass Tort Marketing: SEO & Landing Pages": tort hubs, eligibility landers, dated lawsuit updates, cost per qualified claimant.
  - /seo-for-final-expense-insurance/ "Final Expense & Burial Insurance SEO and Lead Pages": one page for both terms (same product), quote landers, cost and no-exam pages, state advertising and consent rules.
- Each has unique hero, statement, challenges, 6 page types, 4-step strategy, 6 FAQs, quick answer, guide and Service/FAQ/Breadcrumb schema. Added to the industries hub (cards and ItemList), industry count 51 to 54 (hub, header, home), cross-linked from personal injury, lawyers and insurance guides.
- Keyword volumes: not available (Semrush exports do not cover these terms; Bing shows almost no volume). Built for business relevance; no volumes claimed.

- Design fix (site-wide): the "Pages every ... website needs" accordion showed its description as white text on a white box on every industry page, because a generic .tp gradient rule also matched it. Fixed with `.ytb .tp,.pov .tp{background:none}` (site.css v47); verified on the new pages and existing ones (e.g. dentists), desktop and mobile. Full-page screenshots also confirmed the new pages' layout; blank areas in full-page captures are only content-visibility skipping off-screen paint, not visible to users.

- Service-specific motion images on the three new pages (owner request): 21 new 3D clips (hero + 6 page types per page) generated with Higgsfield (GPT Image 2.6 stills, Kling 3.0 5-second silent loops) in the site's glossy 3D style, encoded to 720x894 H.264 with WebP posters (public/img/mv-car-*, mv-tort-*, mv-fe-*, about 4.2 MB total); video labels in the page-type section corrected to the new page names.

## 2026-11-18 (SEO, AEO and GEO session)

Baseline: Search Console returns data from 26 Oct 2026 only (21 days, so the 90-day view equals the full history): 43,981 impressions, 8 clicks (page+query data shows 2; the rest are anonymized queries). Daily average position 85.0 (10 Nov) to 80.9 (15 Nov). Positions 4-20: Chicago "best seo company near me" 10.7 (15 impressions), /industries/ "search optimization companies" 11.6, Austin "seo agency near me" 13.0. Bing: InIndex 5.

- New post /blog/how-to-tell-if-seo-is-working/ (Semrush: "how to tell if your seo company is working" 210, KD0; "does seo really work" 210, KD13; "why is my seo not working" 170, KD14; "how to track seo" 880, KD25). Uses RankEmpire's own Search Console numbers as an original example. Linked from the failing-campaigns post, the SEO company post and the SEO audit guide.
- /blog/how-much-does-seo-cost/: FAQs "How much does local SEO cost?" (390, KD28) and "How much should SEO cost for a small business?" ("how much should seo cost" 260, KD26).
- /industries/: title "SEO by Industry: Search Optimization for 51 Industries" and new description ("search optimization companies" position 11.6, "search optimization firm" 10.0).
- Organization schema: ContactPoint telephone (the published WhatsApp number).
- Performance: content-visibility:auto on below-the-fold sections (site.css v46). Local Lighthouse on /seo-for-hvac/: performance 80-84 before, 85-89 after; TBT 180-390 ms before, 70-140 ms after; CLS 0. Scroll, reveal and #guide anchor tests unchanged (mobile and desktop).
- GEO gap needing the owner: the founder has no personal profiles (sameAs) in the Person schema; site email is on rankempire.com while the site is rankempire.us.

## 2026-11-17 (scheduled session)

Data: Search Console added 15 Nov: 3,214 impressions, 0 clicks, daily average position 80.9 (new best; 81.0 on 14 Nov). Last 28 days 43,673 impressions, 2 clicks, 4,087 queries. Striking distance unchanged: /locations/chicago/ "best seo company near me" 15 impressions at 10.7, /industries/ "search optimization companies" at 11.6. Bing: InIndex 5 (was 4), 0 crawl issues, 0 impressions, quota 85.
No new changes: the full SEO/AEO/GEO session earlier today covered the actionable items; the 16-17 Nov changes are not in Search Console data yet.

## 2026-11-17 (SEO, AEO and GEO session)

Baseline: Search Console data ends 14 Nov. Last 28 days 40,464 impressions, 2 clicks (CTR 0.005%), 3,999 queries; daily average position 85.0 (10 Nov) to 81.0 (14 Nov). Index: /seo-for-tutors/, /locations/philadelphia/ and /locations/milwaukee/ indexed (crawled 16 Nov); still not indexed: /locations/washington-dc/, /locations/columbus/, /blog/what-does-an-seo-company-do/, /blog/best-seo-company-in-the-usa/ (discovered), /locations/fort-worth/, /blog/who-is-the-best-local-seo-company/ (unknown, 1 day old). Bing: InIndex 4, 0 impressions.

Root cause of weak rankings (evidence): the backlink profile has no real authority. Semrush: 743 backlinks from 236 domains; 461 are sitewide links from contractorleads.us (owner's site, one anchor); 232 of the other 235 domains are casino sites, "fiverr seo" sites and .xyz/.shop/.site/.online link farms with anchors such as "professional niche edit links for rankempire" (103) and "high quality dofollow backlinks da 50 pa" (87); all 282 non-sister links come from pages with Semrush Authority Score 0. Ahrefs DR 7. Competitors: Thrive DR 80, Victorious DR 78 (6.4K referring domains), M16 DR 44 (1.7K).
Other findings: "seo company" (1,661 impressions) is served by city pages, not /seo-company/ (Phoenix position 70; Austin 22, Dallas 24, Houston 28 for local searchers); city pages sit at positions 25-30 for "seo agency near me"; no harmful cannibalization (generic queries split by searcher location).

- docs/disavow-rankempire.txt: 232 spam domains, for the owner to upload in Search Console (not uploaded).
- GEO/AEO: Quick answer blocks on 99 pages now show "Updated [date]" and "Reviewed by Gaurav Kapoor"; their WebPage schema adds dateModified, author, reviewedBy, publisher, isPartOf and inLanguage.
- GEO: new /llms-full.txt (every page's direct answer and guide plus all blog posts as plain text, about 400 KB); /llms.txt now links to it and shows live counts (29 locations; it said 17).
- AEO vs GEO post: corrected a factual error (blocking Google-Extended does not remove a site from AI Overviews); new section "What Google says about AEO and GEO" with Google sources.
- Sources sections with Google documentation links added to 7 posts.
- New city pages: /locations/kansas-city/ ("seo agency kansas city" 590, KD8) and /locations/sacramento/ ("seo company sacramento" 480, KD16; "sacramento seo companies" 110, KD13).
- Checks: build, tsc, schema (0 errors), no broken links, no duplicate titles or descriptions, mobile.
- Not built: New Jersey page (only one 150-volume keyword from the owner's Ahrefs screenshot; Semrush shows little demand).

## 2026-11-16 (scheduled session + best SEO company posts)

Data: Search Console added 14 Nov: 3,031 impressions, position 81.0 (best daily average so far); last 28 days 40,464 impressions, 2 clicks, 3,999 queries. Bing: InIndex 4, 0 crawl issues, 0 impressions; 44 submissions left today.

- New post /blog/who-is-the-best-local-seo-company/ for owner-supplied Ahrefs keywords: "who is the best local seo company" (200, KD12), "who is the best local seo company in the nation" (150, KD15), "who is google's best local seo company" (200, KD4), "best type of company needing seo" (100, KD2).
- New post /blog/best-seo-company-in-the-usa/: "who is the best seo company" (300, KD36), "who is the best seo company in usa" (200, KD19), "what is the best seo company" (100, KD34), "who is the best seo company in the usa" (80, KD17).
- /blog/how-to-choose-an-seo-company/ retitled "How to Find & Choose the Best SEO Company" for "how to find best seo company" (150, KD19), "how to find the best seo company" (100, KD22), "how to choose best seo company" (100, KD9) instead of a third overlapping post.
- Posts are factual (no invented rankings): Google does not endorse SEO companies; Google Partners covers Ads only. Linked from /seo-company/, /local-seo/ and the choose post.
- /locations/chicago/ description for "best seo company near me" (position 11).
- Not built: UK/London terms (US-only business); "whats the best seo company in nj" (150, KD1) is a candidate for a New Jersey page.

## 2026-11-16 (full audit session)

Data: Search Console still ends 13 Nov (last 28 days 37,446 impressions, 2 clicks). Full indexing audit (URL Inspection API, all 136 URLs): 132 "Submitted and indexed", 4 "Discovered - currently not indexed" (/seo-for-tutors/, /locations/washington-dc/, /locations/columbus/, /blog/what-does-an-seo-company-do/), 0 Google-selected canonical mismatches, rich results PASS on 131. Metadata audit (all built pages): no missing or duplicate titles or descriptions, canonicals and Open Graph on every page, 1 H1 per page, no images without alt. Correction: 26 industry pages had no guide section (the earlier "every page has a guide" note covered only pages with impressions).

- Guides added to 24 industry pages without one, aligned to their Search Console queries: HVAC, real estate, restaurants (incl. catering SEO), cafes, bakeries, barbers, chiropractors, fencing, financial advisors, florists, general contractors, gyms, insurance, photographers, therapists, towing, wedding planners, yoga studios, private jet charter, yacht charter, limousine, exotic car rental, luxury weddings, wedding venues.
- New city pages from Semrush demand: /locations/philadelphia/ (about 2,560 monthly searches across SEO company terms), /locations/milwaukee/ ("seo company milwaukee" 590), /locations/fort-worth/ ("seo company fort worth" 720, KD16). Linked from header, menus, hub, home and nearby cities (New York, Baltimore, Chicago, Columbus, Dallas).
- Metadata rewritten on 34 pages to match real queries (titles and/or descriptions): Austin, dentists, med spas, electricians, accountants, HVAC, roofing, real estate, SERP checker, website SEO checker, keyword research tool, keyword rank checker, national SEO, enterprise SEO, SEO consulting, cafes, flooring, content SEO, on-page SEO, off-page SEO, restaurants, bakeries, chiropractors, insurance, general contractors, therapists, limo, private jet, yacht, exotic car rental, luxury weddings, wedding venues.
- Los Angeles: Santa Clarita and north county section ("santa clarita search engine optimization" position 61).
- Internal links to the 4 unindexed pages and new cities from Baltimore, Chicago, New York, Dallas, gyms and /seo-company/ guides and two blog posts.
- Checks: build, tsc, schema (0 errors), no broken internal links, no duplicate metadata.

## 2026-11-15 (daily session)

Data: Search Console now has 11-13 Nov. Last 28 days: 37,446 impressions (+29% on the 14 Nov pull), 2 clicks, 3,835 queries (+414). 13 Nov had 3,601 impressions, the highest day so far; daily average position improved from 85.0 (10 Nov) to 82.3 (13 Nov). Biggest page gains in average position: San Francisco (+2.5), San Diego (+2.4), keyword research tool (+2.1), keyword rank checker and backlink checker (+1.2), Chicago (+1.1). Best opportunities: /seo-tools/keyword-rank-checker/ for "seo rank online" (90 impressions, position 20) and "check seo ranking" (68, position 21); /seo-tools/seo-score-checker/ for "seo checker free -trial" (34, position 21).
Index: /locations/baltimore/ indexed (crawled 14 Nov). /locations/washington-dc/, /locations/columbus/ and /seo-for-tutors/ "Discovered - currently not indexed"; /blog/what-does-an-seo-company-do/ unknown to Google. Bing: data ends 10 Nov; InIndex 4, 0 impressions; quota back to 100.

- /seo-tools/keyword-rank-checker/: new first guide section "How to check your SEO ranking online" (step-by-step, matches how the tool works).
- /seo-tools/seo-score-checker/: new section "A free SEO checker with no trial or sign-up"; description now leads with "Free SEO checker with no trial or sign-up".
- Checks: build, tsc, schema (0 errors), mobile on both pages.

## 2026-11-14 (scheduled session)

Data: Search Console still ends 10 Nov; Bing data ends 9 Nov (InIndex 4, 0 crawl issues listed, 0 impressions; 2-8 unspecified crawl errors a day on 7-9 Nov with no 4xx/5xx/timeouts). Bing URL quota now 75 a day. URL Inspection: /locations/washington-dc/, /locations/baltimore/, /locations/columbus/, /blog/what-does-an-seo-company-do/ and /seo-for-tutors/ are "URL is unknown to Google" (submitted 13-14 Nov); /seo-packages/, /seo-packages/local-seo/ and /locations/charlotte/ indexed but last crawled 3-6 Nov, before the latest edits. Sitemaps resubmitted.

- /seo-for-cleaning/: new "Carpet cleaning SEO services" section ("carpet cleaning seo services" position 65).
- /seo-for-electricians/: description now leads with "electrician SEO services" and "electrician SEO agency" (both position 72).
- Checks: build, tsc, schema check (0 errors), mobile (no horizontal overflow, 1 H1) on changed pages.

## 2026-11-14 (daily session)

Data: Search Console still ends 10 Nov (no new days published). Last 28 days: 29,000 impressions, 2 clicks. Most pages average positions 78 to 93, so low authority (Ahrefs DR 7) is the main limit; on-page work focused on queries already at positions 40 to 75 and on internal links.

- Contextual internal links with descriptive anchors added in 17 guides, pointing to pages with impressions but few body links: SERP checker (1,387 impressions), SEO consulting (1,046), accountants, electricians, painters, auto detailing, auto repair and cleaning.
- /seo-for-accountants/: new section "Accountant SEO near me" for "accountant seo near me" (107 impressions, position 43).
- /locations/charlotte/: title "Charlotte SEO Company & SEO Expert Services" and new section on hiring a Charlotte SEO expert ("charlotte seo expert" position 53, "charlotte seo company" position 60).
- /seo-for-painters/: title "Painting Company SEO Services for Painting Contractors" ("painting company seo services" position 53).
- /seo-for-auto-detailing/: title "Auto Detailing SEO Company: SEO for Car Detailing" ("auto detailing seo company" position 63; "seo for car detailing" 137 impressions).
- /blog/seo-keywords-by-industry/: accounting firm keyword list (now 16 industries), linking to accountant SEO.

## 2026-11-13 (session 2: Semrush data)

Data: Semrush and Ahrefs exports supplied by the owner (Semrush US: Authority Score 2, 179 keywords all at positions 21-100, 236 referring domains; Ahrefs DR 7). Keyword volumes and KD below are Semrush US.

- New city pages from competitor gap and demand: /locations/washington-dc/ ("dc seo company" 1,600 KD29; "seo services washington dc" 1,300; all three competitors rank top 15 for about 20 DC terms), /locations/baltimore/ ("baltimore seo" 1,000 KD18; "baltimore seo company" 880 KD20; "baltimore seo agency" 590 KD11), /locations/columbus/ ("columbus seo company" 1,900 KD34; "columbus seo agency" 720). Each with its own neighborhoods, considerations, FAQ, guide and schema; linked from header, menus, hub, home and nearby cities (New York, Charlotte, Chicago, Nashville).
- Titles retargeted: /seo-packages/ "SEO Packages & Pricing for Small Business" ("seo packages" 6,600; "seo packages for small business" 2,400 KD4; "monthly seo packages" 1,600 KD4); /seo-packages/local-seo/ "Local SEO Packages & Local SEO Pricing" ("local seo pricing" 2,400 KD7); /seo-tools/ ("free seo tools" 14,800); /seo-tools/website-seo-checker/ "Free SEO Site Checker" ("seo site checker" 3,600 KD19).
- New post /blog/what-does-an-seo-company-do/ for question keywords ("what is seo services" 1,900; "is seo worth it" 1,600; "what is an seo agency" 1,000 KD13; "what does an seo company do" 720; "do i need an seo company" 480 KD7). Linked from /seo-company/ guide, /seo-services/ and /seo-consulting/.
- /blog/how-much-does-seo-cost/: FAQs "Why is SEO so expensive?" (480 KD14) and "How much does an SEO audit cost?" (390 KD13).
- Backlink gap: 5,937 domains link to 2+ competitors but not RankEmpire; listing prospects in docs/link-prospects.md (owner accounts needed).
- Pending: 8 Ahrefs exports after the daily limit resets; more cities with demand (Fort Worth 720 KD16, Kansas City 590 KD8, Sacramento 480 KD16, Milwaukee, Philadelphia).

## 2026-11-13 (daily session)

Data: Search Console has not published new days since the last session (latest still 10 Nov); no new queries to act on. Bing: InIndex rose from 1 to 4; 0 crawl issues; 0 impressions; sampled inner pages (NY, consulting, Manhattan) not crawled by Bing yet. Google index checks: /locations/manhattan/ indexed (crawled 12 Nov); /seo-company/ and /google-business-profile-seo/ indexed (last crawl 5-6 Nov, before the latest edits); /seo-for-tutors/ now "URL is unknown to Google" although live checks pass (200, index,follow, self canonical, in sitemap, not blocked) - resubmitted; owner asked to use Request indexing in Search Console.

- Organization schema (all pages): areaServed now lists the US plus the 21 cities served; hasOfferCatalog with the three published local plans ($599, $1,199, $2,199 per month); ReserveAction pointing to /book-a-call/. Validated: 0 schema errors.
- Guide on /seo-packages/saas-seo/ (last page without one).

## 2026-11-12 (session 2)

Live verification now possible (new environment "SEO client sites" allows www.rankempire.us). Live checks: latest deploy live; rankempire.us -> www 308 single hop; trailing slash 308 single hop; 404 correct; robots, sitemap, llms.txt, IndexNow key 200. Live Lighthouse mobile: Phoenix 80, Electricians 77, Rank Checker 94, SEO Company 81; SEO 100, CLS 0 on all; flagged JPG posters (~66 KB savings) and unused CSS (~50 KB).
Cannibalization: city pages share generic queries ("seo company", "near me") because Google localizes (not harmful); real overlap between the two checker tools.

- New page /locations/manhattan/ (56 impressions on Manhattan queries landing on the NY page; competitors rank Manhattan pages). Unique content, FAQ, guide, schema; linked from header, menus, hub, NY and Brooklyn.
- 12 video poster images converted JPG -> WebP (340 KB -> 203 KB); 648 references in 190 components updated.
- /seo-tools/keyword-rank-checker/ title "Check SEO Rank Online: Free Keyword Rank Checker" for "seo rank online" (p20), "check seo ranking" (p13), "online rank checker tool" (p29).
- Checker tools differentiated: SEO Score Checker vs Website SEO Checker Tool.
- Guides on /b2b-seo/, /saas-seo/, /seo-packages/; NY guide links to Manhattan and Brooklyn; locations hub count corrected.
- Watch list (not built): Santa Monica (35 impr), Tempe (28), Mesa (19), Chandler (13), Glendale (14).

## 2026-11-12 (daily session)

Data: Google 3,421 queries (+101); 10 Nov shows 2,244 impressions (latest day, may still fill in). New contractor queries: "local seo for contractors" (p48), "regional seo for contractors" (p42); "check seo ranking" p13 on the rank checker. Bing: InIndex 1, 0 crawl issues, 0 impressions; quota reset to 100. Index checks: /blog/seo-keywords-by-industry/ indexed (crawled 10 Nov); /seo-for-tutors/ still "Discovered - currently not indexed" (not recrawled yet).

- Bing: submitted the remaining 31 URLs (all 131 now submitted; quota left 69). Sampled inner pages not crawled by Bing yet.
- /blog/seo-for-contractors/: new "Regional SEO for contractors" section and "What is local SEO for contractors?" FAQ; title "SEO for Contractors: Local & Regional SEO Guide".
- Guides on /google-business-profile-seo/, /ecommerce-seo/, /off-page-seo/, /competitor-seo-analysis/.
- /seo-tools/keyword-rank-checker/ description now targets "check SEO ranking".

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

1. **Off-site authority** (needs owner accounts; the current profile is almost entirely spam, see 17 Nov, and docs/disavow-rankempire.txt is ready to upload): Clutch, DesignRush, GoodFirms, UpCity, BrightLocal agency directory, Bing Places, Apple Business Connect, Google Business Profile for RankEmpire; expert quote platforms (Qwoted, Featured.com); list the free tools on Product Hunt, AlternativeTo and SaaSHub.
2. **GA4 key events:** owner to mark generate_lead, whatsapp_click and book_call_click as key events in GA4 Admin (needs owner access).
3. **"Near me" queries** (seo agency near me, best position 14; seo services near me; seo firms near me): strengthen city pages and the /seo-company/ guide as data comes in.
4. **Guides:** all service, city, industry and tool pages have one as of 16 Nov; next is refreshing guides on pages whose impressions stall.
5. **Suburb pages:** watch Santa Monica, Tempe, Mesa, Chandler, Glendale; build only with growing demand.
6. **Recheck indexing** of /seo-for-tutors/ and the 13 Nov pages (DC, Baltimore, Columbus, new post); still unknown to Google on 14 Nov.
7. **Stylesheet split:** site.css is 287 KB on every page.
8. **Real client case study** once the details of the work behind a verified result are shared.
9. **Bing:** all 131 URLs submitted; watch InIndex (1 on 12 Nov) and URL crawl dates; add RankEmpire to Bing Places (owner).
10. **OpenSEO credits** for search volume data on new targets.
