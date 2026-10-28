// Generated from content/posts/technical-seo-basics.md by scripts/build-posts.mjs. Edit the Markdown, not this file.
import AuthorCard from '@/components/blog/AuthorCard';

export const WORDS = 1139;
export const FAQ = [{"q":"What is the difference between crawling and indexing?","a":"Crawling is Google visiting a page and reading it. Indexing is Google deciding to store it and make it eligible to appear in results. A page can be crawled and still excluded from the index if it is a duplicate, thin, blocked by a noindex tag, or judged not useful enough."},{"q":"How do I know if Google has indexed my page?","a":"Use the URL Inspection tool in Google Search Console. It shows whether the page is indexed, when it was last crawled, the canonical Google chose, and any blocking issues. The Pages report lists every excluded URL with the reason."},{"q":"Does site speed really affect rankings?","a":"Yes, through Core Web Vitals, and it affects conversions even more. The ranking effect is modest between two fast sites but significant when a site fails the thresholds on mobile."},{"q":"How often should I run a technical audit?","a":"A full audit once a year, or after any redesign, platform change or migration. Monthly, check the Pages and Core Web Vitals reports in Search Console for anything new."}];

export default function Body() {
  return (
    <section className="sec" style={{ paddingTop: '50px' }}>
      <div className="wrap art" style={{ maxWidth: '1100px' }}>
        <aside className="toc" aria-label="Table of contents">
          <b>In this article</b>
          <a href="#1-can-google-find-your-pages">{"1. Can Google find your pages?"}</a>
          <a href="#2-are-you-blocking-anything-by-accident">{"2. Are you blocking anything by accident?"}</a>
          <a href="#3-is-each-page-unique-and-indexable">{"3. Is each page unique and indexable?"}</a>
          <a href="#4-is-the-site-fast-on-phones">{"4. Is the site fast on phones?"}</a>
          <a href="#5-does-google-understand-what-you-are">{"5. Does Google understand what you are?"}</a>
          <a href="#6-is-the-site-structure-shallow-and-linked">{"6. Is the site structure shallow and linked?"}</a>
          <a href="#7-has-anything-been-lost-in-a-migration-or-redesign">{"7. Has anything been lost in a migration or redesign?"}</a>
          <a href="#when-to-get-help">{"When to get help"}</a>
          <a href="#faq">{"FAQ"}</a>
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
          <p>{"Technical SEO sounds intimidating, but the core ideas are simple: Google needs to find your pages, understand them and load them quickly. You do not need to be a developer to check whether that is happening. Here are the seven checks we run first on every new client site, in plain English, with a free tool for each."}</p>
          <h2 id="1-can-google-find-your-pages">{"1. Can Google find your pages?"}</h2>
          <p>{"Every important page should be linked from somewhere on your site and listed in your XML sitemap. Pages nobody links to, called orphan pages, are hard for Google to discover and easy for it to forget. A sitemap is the list of URLs you want indexed; it should contain only pages that return a 200 status and have no canonical pointing elsewhere."}</p>
          <ul><li>{"Check that your sitemap exists (usually at /sitemap.xml) and is referenced in robots.txt."}</li><li>{"Make sure it lists only live, indexable pages, with an accurate last-modified date."}</li><li>{"Submit it in Google Search Console and watch the \"Pages\" report for anything excluded."}</li></ul>
          <p>{"Use our free "}<a href="/seo-tools/sitemap-checker/">{"sitemap checker"}</a>{" to count URLs, spot duplicates and catch format errors."}</p>
          <h2 id="2-are-you-blocking-anything-by-accident">{"2. Are you blocking anything by accident?"}</h2>
          <p>{"Your robots.txt file tells crawlers what they may visit. One wrong line can block an entire section of the site, or every AI crawler that might have cited you. Common accidents include a leftover \"Disallow: /\" from a staging site, blocked CSS and JavaScript folders, and blocked image directories."}</p>
          <p>{"Test your important URLs, and the user agents that matter (Googlebot, Bingbot, GPTBot, PerplexityBot), with the free "}<a href="/seo-tools/robots-txt-checker/">{"robots.txt checker"}</a>{"."}</p>
          <h2 id="3-is-each-page-unique-and-indexable">{"3. Is each page unique and indexable?"}</h2>
          <p>{"Duplicate pages split ranking signals. The same product under three URLs, http and https versions, www and non-www, trailing slash and no trailing slash, and tracking parameters all create copies. Use canonical tags to point every duplicate to the main version, and give each page a unique title and description."}</p>
          <ul><li>{"Pick one domain version and redirect the others to it with a 301."}</li><li>{"Add a self-referencing canonical tag on every page."}</li><li>{"Check that no important page carries a \"noindex\" tag by mistake, a frequent leftover from launches."}</li></ul>
          <p>{"Our "}<a href="/seo-tools/meta-tag-checker/">{"meta tag checker"}</a>{" shows the title, description, canonical and robots tags for any page in one view."}</p>
          <h2 id="4-is-the-site-fast-on-phones">{"4. Is the site fast on phones?"}</h2>
          <p>{"Google evaluates the mobile version of your site first, and its Core Web Vitals measure how fast the main content appears (Largest Contentful Paint), how quickly the page responds to taps (Interaction to Next Paint) and whether things jump around while loading (Cumulative Layout Shift). Large images, heavy scripts and slow hosting hurt both rankings and conversions."}</p>
          <p>{"The fixes with the biggest payoff, in order:"}</p>
          <ol><li>{"Compress images and serve modern formats (WebP or AVIF), sized for the screen they appear on."}</li><li>{"Remove scripts you do not need. Every tracking pixel and chat widget costs time."}</li><li>{"Load fonts from your own domain and limit them to two families."}</li><li>{"Use a content delivery network and decent hosting. Cheap shared hosting is a common ceiling."}</li><li>{"Set explicit width and height on images and embeds so the layout does not shift."}</li></ol>
          <p>{"Check your real-user scores in the Core Web Vitals report in Search Console, which reflects what visitors actually experience rather than a lab test."}</p>
          <h2 id="5-does-google-understand-what-you-are">{"5. Does Google understand what you are?"}</h2>
          <p>{"Structured data, or schema markup, labels your business, services, products, reviews, articles and FAQs in a format search engines read directly. It can unlock rich results and it helps answer engines and AI assistants understand who you are and what you offer, which is a growing part of "}<a href="/aeo/">{"answer engine optimization"}</a>{"."}</p>
          <p>{"The minimum for a business site:"}</p>
          <ul><li>{"Organization or LocalBusiness, with your name, logo, contact details and links to your social profiles."}</li><li>{"Service for each service page, and Product for products."}</li><li>{"Article with a named author and dates on every blog post."}</li><li>{"BreadcrumbList so Google shows your site structure in results."}</li></ul>
          <p>{"Validate yours with our free "}<a href="/seo-tools/schema-checker/">{"schema checker"}</a>{", and fix errors before adding more types."}</p>
          <h2 id="6-is-the-site-structure-shallow-and-linked">{"6. Is the site structure shallow and linked?"}</h2>
          <p>{"Google and visitors should reach any important page in three clicks or fewer from the homepage. Deep pages get crawled less and rank worse. Internal links also tell Google which pages matter most: the pages you link to from the navigation, the homepage and the body of other pages are the ones that get crawled first and ranked highest."}</p>
          <ul><li>{"Link every service page from the homepage and the main navigation."}</li><li>{"Link related pages to each other in the body text, with descriptive anchor text rather than \"click here\"."}</li><li>{"Keep the navigation focused on the pages that matter rather than listing everything."}</li><li>{"Fix broken links and redirect chains, which waste crawl budget and leak authority."}</li></ul>
          <h2 id="7-has-anything-been-lost-in-a-migration-or-redesign">{"7. Has anything been lost in a migration or redesign?"}</h2>
          <p>{"Traffic drops after a redesign are almost always technical: URLs changed without redirects, pages were dropped, canonical or noindex tags were copied from staging, or the new site is slower. Before any redesign, export every URL that gets traffic from Search Console and map each one to its new address. After launch, crawl the new site and compare."}</p>
          <p>{"If the drop has already happened, the recovery is the same list in reverse: restore redirects, remove stray noindex tags, re-submit the sitemap and watch the Pages report recover over a few weeks."}</p>
          <h2 id="when-to-get-help">{"When to get help"}</h2>
          <p>{"If pages will not index, traffic dropped after a redesign, or your site is slow despite the fixes above, it is time for a professional "}<a href="/technical-seo/">{"technical SEO audit"}</a>{". We start every program with one because the foundation decides what every later piece of work can achieve, which is also the first lesson in "}<a href="/blog/why-most-seo-campaigns-fail/">{"why most SEO campaigns fail"}</a>{". You can "}<a href="/contact-us/">{"request a free audit"}</a>{" and get a prioritized list within two business days."}</p>
          <h2 id="faq">{"FAQ"}</h2>
          <h3>{"What is the difference between crawling and indexing?"}</h3>
          <p>{"Crawling is Google visiting a page and reading it. Indexing is Google deciding to store it and make it eligible to appear in results. A page can be crawled and still excluded from the index if it is a duplicate, thin, blocked by a noindex tag, or judged not useful enough."}</p>
          <h3>{"How do I know if Google has indexed my page?"}</h3>
          <p>{"Use the URL Inspection tool in Google Search Console. It shows whether the page is indexed, when it was last crawled, the canonical Google chose, and any blocking issues. The Pages report lists every excluded URL with the reason."}</p>
          <h3>{"Does site speed really affect rankings?"}</h3>
          <p>{"Yes, through Core Web Vitals, and it affects conversions even more. The ranking effect is modest between two fast sites but significant when a site fails the thresholds on mobile."}</p>
          <h3>{"How often should I run a technical audit?"}</h3>
          <p>{"A full audit once a year, or after any redesign, platform change or migration. Monthly, check the Pages and Core Web Vitals reports in Search Console for anything new."}</p>
          <AuthorCard />
        </article>
      </div>
    </section>
  );
}
