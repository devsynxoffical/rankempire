# RankEmpire indexing and impressions playbook

Status on 2026-10-30: Search Console property verified 2026-10-26, 114 pages in the sitemaps (Google fetched all four child sitemaps, 0 errors). Coverage sweep: see `reports/gsc-coverage-<date>.csv` (run `npm run gsc -- inspect`).

Google crawls a new domain slowly until it has reasons to crawl faster. Everything in the codebase that helps is done (sitemap index with real lastmod, hub-and-spoke internal links, trimmed navigation, fresh content with dates, fast pages). What remains is off-site and account work that only the site owner can do. In order of impact:

## 1. Request indexing by hand (10 URLs a day)
Search Console > paste URL > "Request indexing". Priority order:
1. /case-studies/, /local-seo/, /aeo/, /geo/, /seo-audit/, /seo-packages/, /industries/, /locations/, /blog/, /about-us/
2. Every /blog/ post, /ecommerce-seo/, /saas-seo/, /technical-seo/, /contact-us/, /our-team/
3. City pages (Miami, Dallas, Atlanta, Phoenix, Austin, Seattle, Denver first), then industry pages (HVAC, plumbers, roofing, dentists, lawyers, med spas, real estate, restaurants first)
Skip anything the latest coverage CSV marks PASS.

## 2. Bing Webmaster Tools + IndexNow
- Create a Bing Webmaster Tools account and import the site from Search Console (one click, no new verification).
- Submit https://www.rankempire.us/sitemap.xml there.
- Run `npm run indexnow` from a machine with internet access (the key file is already live at /c10d4dfaf7d7fd1399c84c083b9a859e.txt). Bing's index also feeds ChatGPT search, DuckDuckGo and Copilot.

## 3. Links from properties you already control (fastest discovery signal)
The service account shows these verified sites in the same account: devsynx.com, funnelsthatprint.com, contractorleads.us, sevenfigurestudio.us, qualifiedleadsx.com, brandscalinghacks.com. Add a real, visible link to https://www.rankempire.us/ from each (footer "SEO by RankEmpire", a partners page, or a relevant blog mention). Six crawlable links from already-indexed domains is the quickest way to get Googlebot visiting daily.

## 4. Entity profiles (also feeds AEO/GEO)
Create and complete with identical name, description and the website URL, then paste the URLs into `content/site.json` and run `npm run socials`:
- Google Business Profile (category: Internet marketing service / SEO agency), LinkedIn company page, X, Instagram, YouTube
- Crunchbase, Clutch, GoodFirms, DesignRush, G2 (agency listing), Bing Places, Apple Business Connect
- Founder: LinkedIn and X profiles for Gaurav Kapoor, linked from the Person schema (`content/site.json` > founder.sameAs)

## 5. Publish and syndicate
- Share every new post on LinkedIn and X with the canonical link (social links are crawled quickly).
- Submit the RSS feed https://www.rankempire.us/blog/feed.xml to Feedly, Flipboard and any newsletter tool you use.
- Post the two verified Search Console case studies on LinkedIn as native posts linking to /case-studies/.

## 6. Earn the first 10 referring domains
- Guest post on two niche sites per month (home services, dental, legal marketing blogs) with the founder byline.
- Offer the free tools (/seo-tools/) to roundups of free SEO tools.
- Pitch the verified case studies to SEO newsletters; real Search Console data gets cited.
- Join local chamber or industry association directories that list member websites.

## 7. Measure weekly
- `npm run perf` (Search Console clicks, impressions, queries, pages).
- `npm run gsc -- inspect` every two weeks until 100% of core pages and 80%+ of templated pages are PASS.
- Watch "Crawled, currently not indexed": any page that lands there gets a unique content block added (see content/answers.json for the pattern).
