# RankEmpire performance investigation (19 Nov 2026)

Data used: Google Search Console (www.rankempire.us property; data exists only from 26 Oct 2026, so the requested 28-day vs previous 28-day and 3-month vs previous 3-month comparisons are not possible: there is no earlier data), URL Inspection API (all 147 URLs, 18 Nov), Bing Webmaster API, Semrush exports (competitors and backlinks), the built site. GA4 (G-LJCCYX956M) is not readable yet: the Windsor.ai connector only has other properties and the service account has no GA4 access.

## Baseline (26 Oct - 17 Nov, 23 days)

- Impressions 50,308; clicks 8; CTR 0.016%; average position 82.2.
- 94% of impressions are at positions 51+; 73% at 81+. Positions 1-20: 163 impressions (0.3%).
- Impressions by page type: city pages 49%, tools 23%, industry pages 19%, services 6%, blog 0.2% (77 impressions across 17 posts), home page 3 impressions.
- Brand searches ("rankempire"): 0.
- 33 of 147 pages had zero impressions (18 of them indexed for weeks, 15 published 13-18 Nov).
- Index: 136 of 147 indexed (18 Nov). Bing: 11 pages indexed.
- Per-page baseline: docs/recovery/baseline-2026-11-19.csv

## Findings, ranked by business impact

1. **Lead capture is broken by design.** The contact form does not send anything to a server; it opens the visitor's email app (mailto) to hello@rankempire.com. Visitors without a configured email app lose the request silently, while GA4 still records generate_lead, overstating leads. The 111 "Get my free audit" boxes send people to /contact-us/ first (two steps). Not verified: whether hello@rankempire.com (a .com domain, while the site is .us) receives email.
2. **Authority is close to zero, and the backlink profile is spam.** 743 backlinks: 461 from contractorleads.us (one sitewide anchor), and 232 of the other 235 domains are casino sites, "fiverr seo" sites and link farms with paid-link anchors. Every non-sister link comes from a page with Semrush authority 0. Ahrefs DR 7 vs Thrive 80, Victorious 78, M16 44. This is the main reason pages sit at positions 75-90.
3. **The city-page strategy fights the wrong battle.** City pages earn 49% of impressions at average position 83. Competitors do not win cities with city pages: M16 gets 94% of its estimated organic traffic on its home page, ranking #1 for Atlanta terms where its office is; Victorious ranks its home page #1 for San Francisco terms (its home city) and gets 44% of traffic from its blog. City pages bring them 2-7%. RankEmpire has no US office or Google Business Profile, so local results for "seo company [city]" structurally favour others. Adding 12 more city pages this month added crawl load without measurable gains (all 6 newest are unindexed; Boston, Las Vegas, Milwaukee have zero impressions).
4. **The home page and /seo-company/ do not rank for anything.** Home: 3 impressions in 23 days; /seo-company/: 4. Competitors' home pages carry their main commercial terms. Both RankEmpire pages target "SEO company" at once, and Google shows neither.
5. **Free tools target intent they cannot satisfy.** Tools earn 23% of impressions ("free backlink checker", "serp checker online") at position 81-91. These searches expect live data; RankEmpire's tools work by pasting exports or HTML, so they cannot compete with Ahrefs/Semrush and do not lead to client enquiries.
6. **Blog content has no reach yet.** 17 posts, 77 impressions total. With DR 7, informational content will not rank until authority grows; new posts are lower priority than authority and conversion.
7. **Process issues in our own work.**
   - Titles on some pages were changed several times within days (e.g. the keyword rank checker on 12 and 16 Nov), which makes results impossible to attribute and resets Google's testing.
   - The Google Indexing API was used for ordinary pages. Google supports it only for JobPosting and livestream pages; the 8 pages submitted repeatedly are still not indexed. Stop using it.
   - 35 pages were added in four weeks on a site with no authority; most new pages are unindexed or have zero impressions.
8. **Trust signals are thin for a US agency.** No US address, no Google Business Profile, no reviews, an Indian WhatsApp number as the only phone, contact email on a different domain (.com), founder without external profiles in schema, no brand searches. Case studies: their origin should be confirmed by the owner (if results are from other brands, label them clearly).
9. **Technical (lower impact).** Pages are heavy (216-407 KB HTML, 280 KB stylesheet, 190-260 links per page from mega-menu and footer); live mobile Lighthouse performance 65-67. Home H1 text reads "rankempireRankEmpire: SEO company..." because the decorative animated word sits inside the H1. Schema, canonicals, robots, sitemaps and rendering are fine (0 schema errors, 0 broken links).

## What was ineffective so far

- Volume of new pages (35) without authority: little measurable return.
- Repeated metadata edits on the same pages.
- Indexing API submissions for non-job pages.
- New blog posts (77 impressions across 17 posts).

What did help: page-level guides and query-matched titles coincided with average position improving from 85.0 (10 Nov) to 79.1 (16 Nov) and "seo company" moving to position 21.9 on the Dallas page (10-16 Nov).

## Recovery plan (page by page, in order)

| # | Change | URL(s) | Reason | Validation |
|---|---|---|---|---|
| 1 | Contact form fallback: after submit, show WhatsApp (pre-filled with the form details) and booking options | /contact-us/ (and every "free audit" box that leads there) | Leads lost when no email app opens | Done 19 Nov; browser test on mobile and desktop; owner to confirm WhatsApp messages arrive; long term: replace mailto with a real form endpoint (needs owner's form/email service key) |
| 2 | Stop Indexing API use; no new city pages; no title changes on a page within 21 days of the last change | Process (scheduled sessions) | Ineffective and unmeasurable work | Session instructions updated 19 Nov |
| 3 | Authority: disavow spam domains; list on BBB, G2, Clutch, DesignRush, UpCity, Expertise; Google Business Profile with a real address if one exists | Off-site (owner) | Main ranking limit | Ahrefs DR and referring domains monthly; positions of top-20 keywords |
| 4 | Decide one main commercial page for "SEO company / SEO agency": home page (as competitors do) and merge /seo-company/ into it with a 301, or the reverse | / and /seo-company/ | Neither ranks; both target the same term | Impressions for "seo company/agency" on the chosen URL over 4 weeks |
| 5 | Focus on national industry pages already gaining (no location needed): auto detailing, painters, daycares, cleaning, accountants, electricians | /seo-for-auto-detailing/, /seo-for-painters/, /seo-for-daycares/, /seo-for-cleaning/, /seo-for-accountants/, /seo-for-electricians/ | They rank 13-33 for some long-tail terms; no local office needed | Tracker: positions of their top queries every 12 h |
| 6 | Tool pages: add a clear path from each tool to the audit offer; do not chase "free backlink checker" head terms | /seo-tools/* | Intent mismatch, no leads | Click and booking events from tool pages in GA4 (needs GA4 access) |
| 7 | Review 18 long-indexed zero-impression pages at 8 weeks (mid-December): improve, merge or noindex | List in baseline CSV | Weak pages dilute site quality | Impressions by mid-December |
| 8 | GA4 access for measurement | GA4 admin (owner) | Cannot measure conversions | Add Viewer for google-indexer@contractorleads-502510.iam.gserviceaccount.com |
