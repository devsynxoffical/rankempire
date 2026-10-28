Technical SEO sounds intimidating, but the core ideas are simple: Google needs to find your pages, understand them and load them quickly. You do not need to be a developer to check whether that is happening. Here are the seven checks we run first on every new client site, in plain English, with a free tool for each.

## 1. Can Google find your pages?

Every important page should be linked from somewhere on your site and listed in your XML sitemap. Pages nobody links to, called orphan pages, are hard for Google to discover and easy for it to forget. A sitemap is the list of URLs you want indexed; it should contain only pages that return a 200 status and have no canonical pointing elsewhere.

- Check that your sitemap exists (usually at /sitemap.xml) and is referenced in robots.txt.
- Make sure it lists only live, indexable pages, with an accurate last-modified date.
- Submit it in Google Search Console and watch the "Pages" report for anything excluded.

Use our free [sitemap checker](/seo-tools/sitemap-checker/) to count URLs, spot duplicates and catch format errors.

## 2. Are you blocking anything by accident?

Your robots.txt file tells crawlers what they may visit. One wrong line can block an entire section of the site, or every AI crawler that might have cited you. Common accidents include a leftover "Disallow: /" from a staging site, blocked CSS and JavaScript folders, and blocked image directories.

Test your important URLs, and the user agents that matter (Googlebot, Bingbot, GPTBot, PerplexityBot), with the free [robots.txt checker](/seo-tools/robots-txt-checker/).

## 3. Is each page unique and indexable?

Duplicate pages split ranking signals. The same product under three URLs, http and https versions, www and non-www, trailing slash and no trailing slash, and tracking parameters all create copies. Use canonical tags to point every duplicate to the main version, and give each page a unique title and description.

- Pick one domain version and redirect the others to it with a 301.
- Add a self-referencing canonical tag on every page.
- Check that no important page carries a "noindex" tag by mistake, a frequent leftover from launches.

Our [meta tag checker](/seo-tools/meta-tag-checker/) shows the title, description, canonical and robots tags for any page in one view.

## 4. Is the site fast on phones?

Google evaluates the mobile version of your site first, and its Core Web Vitals measure how fast the main content appears (Largest Contentful Paint), how quickly the page responds to taps (Interaction to Next Paint) and whether things jump around while loading (Cumulative Layout Shift). Large images, heavy scripts and slow hosting hurt both rankings and conversions.

The fixes with the biggest payoff, in order:

1. Compress images and serve modern formats (WebP or AVIF), sized for the screen they appear on.
2. Remove scripts you do not need. Every tracking pixel and chat widget costs time.
3. Load fonts from your own domain and limit them to two families.
4. Use a content delivery network and decent hosting. Cheap shared hosting is a common ceiling.
5. Set explicit width and height on images and embeds so the layout does not shift.

Check your real-user scores in the Core Web Vitals report in Search Console, which reflects what visitors actually experience rather than a lab test.

## 5. Does Google understand what you are?

Structured data, or schema markup, labels your business, services, products, reviews, articles and FAQs in a format search engines read directly. It can unlock rich results and it helps answer engines and AI assistants understand who you are and what you offer, which is a growing part of [answer engine optimization](/aeo/).

The minimum for a business site:

- Organization or LocalBusiness, with your name, logo, contact details and links to your social profiles.
- Service for each service page, and Product for products.
- Article with a named author and dates on every blog post.
- BreadcrumbList so Google shows your site structure in results.

Validate yours with our free [schema checker](/seo-tools/schema-checker/), and fix errors before adding more types.

## 6. Is the site structure shallow and linked?

Google and visitors should reach any important page in three clicks or fewer from the homepage. Deep pages get crawled less and rank worse. Internal links also tell Google which pages matter most: the pages you link to from the navigation, the homepage and the body of other pages are the ones that get crawled first and ranked highest.

- Link every service page from the homepage and the main navigation.
- Link related pages to each other in the body text, with descriptive anchor text rather than "click here".
- Keep the navigation focused on the pages that matter rather than listing everything.
- Fix broken links and redirect chains, which waste crawl budget and leak authority.

## 7. Has anything been lost in a migration or redesign?

Traffic drops after a redesign are almost always technical: URLs changed without redirects, pages were dropped, canonical or noindex tags were copied from staging, or the new site is slower. Before any redesign, export every URL that gets traffic from Search Console and map each one to its new address. After launch, crawl the new site and compare.

If the drop has already happened, the recovery is the same list in reverse: restore redirects, remove stray noindex tags, re-submit the sitemap and watch the Pages report recover over a few weeks.

## When to get help

If pages will not index, traffic dropped after a redesign, or your site is slow despite the fixes above, it is time for a professional [technical SEO audit](/technical-seo/). We start every program with one because the foundation decides what every later piece of work can achieve, which is also the first lesson in [why most SEO campaigns fail](/blog/why-most-seo-campaigns-fail/). You can [request a free audit](/contact-us/) and get a prioritized list within two business days.

## FAQ

### What is the difference between crawling and indexing?

Crawling is Google visiting a page and reading it. Indexing is Google deciding to store it and make it eligible to appear in results. A page can be crawled and still excluded from the index if it is a duplicate, thin, blocked by a noindex tag, or judged not useful enough.

### How do I know if Google has indexed my page?

Use the URL Inspection tool in Google Search Console. It shows whether the page is indexed, when it was last crawled, the canonical Google chose, and any blocking issues. The Pages report lists every excluded URL with the reason.

### Does site speed really affect rankings?

Yes, through Core Web Vitals, and it affects conversions even more. The ranking effect is modest between two fast sites but significant when a site fails the thresholds on mobile.

### How often should I run a technical audit?

A full audit once a year, or after any redesign, platform change or migration. Monthly, check the Pages and Core Web Vitals reports in Search Console for anything new.
