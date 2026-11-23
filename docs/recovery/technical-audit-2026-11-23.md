# Technical audit, www.rankempire.us (23 Nov 2026)

All checks run directly against the live site (Hostinger) and Google Search Console APIs for this property. Raw data: live crawl of all 150 sitemap URLs, URL Inspection API for all 150, Search Console 24 Oct-20 Nov, mobile Lighthouse on 6 templates.

| Check | Result | Status |
| --- | --- | --- |
| Google indexing | 141 of 150 indexed. Discovered, not indexed (6): /locations/washington-dc/, /locations/fort-worth/, /blog/what-does-an-seo-company-do/, /blog/best-seo-company-in-the-usa/, /shopify-seo/, /local-citation-building/. Unknown to Google (3): /locations/columbus/, /small-business-seo/, /blog/who-is-the-best-local-seo-company/. No "crawled - not indexed", no excluded pages. | Mostly OK; 9 newest pages waiting |
| Canonical tags | All 150 pages self-referencing; Google chose the same canonical on every inspected page; ?utm and /index.html variants canonicalize to the clean URL | OK |
| Robots and noindex | robots.txt allows all crawlers (incl. AI crawlers); every page index,follow; no X-Robots-Tag; URL Inspection: robots allowed, fetch successful | OK |
| Sitemap | Index + 4 child sitemaps, all 200, application/xml; 150 URLs = exactly the 150 live pages; no duplicates, all 200, all self-canonical, none noindex | OK |
| Internal links | 0 broken internal links; every page reachable through normal HTML links; weakest: /seo-for-property-management/ (3 linking pages), /competitor-seo-analysis/ (4), /national-seo/, /off-page-seo/, /seo-for-insurance/, /seo-for-photographers/, /seo-for-veterinarians/, /seo-for-mass-tort-lawyers/, /seo-for-car-accident-lawyers/ (5) | OK; a few pages thinly linked |
| Rendering | Static HTML: main content, headings and links are in the server HTML (no JavaScript needed); all pages have one H1 and a unique title | OK |
| Redirects / duplicates by URL | http, non-www and missing slash 301 to https://www.../; wrong case 404; /index.html returns 200 but canonicalizes to / | OK (minor: /index.html could 301) |
| Duplicate content | No near-duplicate pages. Highest overlap (unique text, 5-word shingles): SEO audit tool ~ website SEO checker 0.36, score checker ~ website checker 0.33, ecommerce vs SaaS packages 0.29; city pairs max 0.26 | OK; tool pages overlap |
| Page quality | City, industry and package pages: about 50% of body text is shared template text (appears on 30%+ of pages); the rest is page-specific. 35 indexed pages had 0 impressions in 28 days | Main weakness |
| Mobile and speed (Lighthouse mobile) | Home 51 (LCP 3.7 s, TBT 4.3 s, main-thread 11 s: style/layout 3.1 s, scripts); Chicago 69 (TBT 0.8 s); Plumbers 85; SERP checker 95; blog post 95; Shopify SEO 90. CLS 0 everywhere; SEO 100, accessibility 95-96 | Home page slow on phones |
| Search performance (24 Oct-20 Nov) | 63,008 impressions, 9 clicks, CTR 0.01%, 115 pages with impressions; top pages: New York 6,510 impr pos 85.2; Phoenix 5,186 / 78.3; SERP checker 4,387 / 78.9; backlink checker 3,729 / 90.8; Chicago 3,557 / 83.0 | Positions too low for clicks |

## Conclusion

Crawling, indexing directives, canonicals, sitemaps, rendering and internal linking are technically sound. They are not why the site ranks at positions 75-85. The causes are authority (spam-heavy backlink profile, no business listings), template-heavy city and industry pages, and a slow home page on phones.

## Recommended fixes (in order)

1. Home page mobile speed: cut main-thread work (heavy animations, 287 KB site.css on every page, large DOM).
2. Page quality: replace shared template blocks on the highest-impression city pages (New York, Phoenix, Chicago, Dallas, Houston, Austin) with city-specific content (local market data, real examples), one page at a time, respecting the 21-day rule.
3. Tool overlap: give the SEO audit tool, website SEO checker and score checker clearly different purposes and copy.
4. Add links to the 9 thinly linked pages from related hub pages.
5. 301 /index.html to /.
