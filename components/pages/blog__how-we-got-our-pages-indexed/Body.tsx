// Generated from content/posts/how-we-got-our-pages-indexed.md by scripts/build-posts.mjs. Edit the Markdown, not this file.
import AuthorCard from '@/components/blog/AuthorCard';

export const WORDS = 944;
export const FAQ = [{"q":"How long does it take Google to index a new website?","a":"Small, well-linked sites are often indexed within days. Larger new sites with little authority can wait weeks or months for most pages. Fixing duplicates, internal links and sitemaps, then requesting indexing, usually shortens that from months to weeks."},{"q":"Why are my pages \"Discovered, currently not indexed\"?","a":"Google found the URL but decided crawling it was not worth the effort yet. Common causes are low site authority, thin or duplicated content, weak internal linking and too many similar pages. Improve those, then resubmit the sitemap."},{"q":"Does the Google Indexing API work for normal pages?","a":"Google officially supports it only for job postings and livestream pages. It often speeds up crawling for other pages, but it does not guarantee indexing or rankings. Fixing page quality and internal links matters more."},{"q":"Why do I have impressions but no clicks?","a":"Impressions at positions 50 to 100 mean Google shows your page deep in the results, where almost nobody scrolls. Clicks start when pages reach the first page, which usually requires links and mentions from other sites on top of good on-page SEO."}];

export default function Body() {
  return (
    <section className="sec" style={{ paddingTop: '50px' }}>
      <div className="wrap art" style={{ maxWidth: '1100px' }}>
        <aside className="toc" aria-label="Table of contents">
          <b>In this article</b>
          <a href="#the-starting-point">{"The starting point"}</a>
          <a href="#step-1-fix-what-tells-google-a-page-is-low-value">{"Step 1: Fix what tells Google a page is low value"}</a>
          <a href="#step-2-split-the-sitemap-and-keep-dates-honest">{"Step 2: Split the sitemap and keep dates honest"}</a>
          <a href="#step-3-build-internal-links-like-a-hub-and-spoke">{"Step 3: Build internal links like a hub and spoke"}</a>
          <a href="#step-4-give-every-page-something-worth-indexing">{"Step 4: Give every page something worth indexing"}</a>
          <a href="#step-5-structured-data-on-every-page">{"Step 5: Structured data on every page"}</a>
          <a href="#step-6-submit-inspect-and-request">{"Step 6: Submit, inspect and request"}</a>
          <a href="#what-has-not-worked-yet">{"What has not worked yet"}</a>
          <a href="#what-to-copy-for-your-own-site">{"What to copy for your own site"}</a>
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
          <p>{"RankEmpire went from 17 indexed pages to 123 of 124, and from 6 Google impressions a day to 2,021 a day in eight days. This case study shows exactly what we changed, in the order we changed it, with the real numbers from our own Google Search Console. Nothing here is a mockup or an estimate, and the parts that have not worked yet are included too."}</p>
          <figure><img src="/img/b-indexing-case.webp" alt="Line chart of daily Google impressions for rankempire.us rising from 6 on 27 October to 2,021 on 3 November 2026" loading="lazy" /><figcaption>{"Daily impressions from Google Search Console, 27 October to 3 November 2026"}</figcaption></figure>
          <h2 id="the-starting-point">{"The starting point"}</h2>
          <p>{"The site launched with 124 pages: service pages, 51 industry pages, 17 city pages, free SEO tools and a blog. Google had indexed 17 of them. The rest sat in Search Console as \"Discovered, currently not indexed\" or \"Crawled, currently not indexed\", which is the most common state for a new site with little authority."}</p>
          <div className="kt"><div><b>{"17 → 123"}</b><span>{"Pages indexed out of 124"}</span></div><div><b>{"6 → 2,021"}</b><span>{"Daily Google impressions, 27 Oct to 3 Nov"}</span></div><div><b>{"8,334"}</b><span>{"Impressions in the last 28 days"}</span></div></div>
          <h2 id="step-1-fix-what-tells-google-a-page-is-low-value">{"Step 1: Fix what tells Google a page is low value"}</h2>
          <p>{"Before asking Google to crawl more, we removed the reasons it might skip a page:"}</p>
          <ul><li><strong>{"Doubled brand names in titles."}</strong>{" A layout template added \"| RankEmpire\" to titles that already ended with it. We switched every page to an absolute title."}</li><li><strong>{"Near-duplicate sections."}</strong>{" Several service pages shared the same intro blocks. The one page that stayed unindexed longest, International SEO, was fixed by giving it a distinct long-form guide and more internal links."}</li><li><strong>{"Price contradictions."}</strong>{" Some pages said local plans start at $799 while the pricing card on the same page said $599. We made every mention consistent."}</li></ul>
          <h2 id="step-2-split-the-sitemap-and-keep-dates-honest">{"Step 2: Split the sitemap and keep dates honest"}</h2>
          <p>{"One large sitemap became a sitemap index with four children: core pages (36), industries (51), locations (17) and content (20). Each URL carries a real last-modified date that changes only when the page changes. Split sitemaps make it obvious in Search Console which group is lagging, and honest dates give Google a reason to recrawl what actually changed."}</p>
          <h2 id="step-3-build-internal-links-like-a-hub-and-spoke">{"Step 3: Build internal links like a hub and spoke"}</h2>
          <p>{"Orphan and weakly linked pages are the first ones Google ignores. We generated a related-links block for 92 pages: every industry page links to related industries, two cities and two guides; every city links to nearby cities; every service links to sibling services and posts. Blog posts link to the industry and city pages they mention. The weakest pages went from 3 internal links to 5 or more."}</p>
          <h2 id="step-4-give-every-page-something-worth-indexing">{"Step 4: Give every page something worth indexing"}</h2>
          <p>{"Thin pages rarely get indexed. We added three things to the pages with impressions:"}</p>
          <ol><li><strong>{"A direct answer block"}</strong>{" near the top, answering the question the page targets in two or three sentences."}</li><li><strong>{"A long-form guide"}</strong>{" written for the exact searches Search Console showed for that page."}</li><li><strong>{"Real proof"}</strong>{", linking to verified Search Console reports on our "}<a href="/case-studies/">{"case studies"}</a>{" page."}</li></ol>
          <h2 id="step-5-structured-data-on-every-page">{"Step 5: Structured data on every page"}</h2>
          <p>{"Every page now carries Organization data, a breadcrumb trail and, where relevant, Service, FAQPage, BlogPosting or WebApplication markup. Our checker reports zero errors across all pages. Structured data does not force indexing, but it removes ambiguity about what each page is."}</p>
          <h2 id="step-6-submit-inspect-and-request">{"Step 6: Submit, inspect and request"}</h2>
          <p>{"We resubmitted the sitemaps, ran URL Inspection on every route to find what was still excluded, and sent all 124 URLs through Google's Indexing API, plus IndexNow for Bing. Indexing moved from 17 pages to 123 of 124 in the weeks that followed, and impressions climbed from 6 to 2,021 a day within eight days of the push."}</p>
          <h2 id="what-has-not-worked-yet">{"What has not worked yet"}</h2>
          <p>{"Impressions are not clicks. Over the last 28 days the site earned 8,334 impressions and 2 clicks, at an average position of 84. Google now knows what every page is about, but it does not yet trust the site enough to rank it on page one. That trust comes from links and mentions on other sites, which no amount of on-page work replaces. Our next phase is earning those links, as described in our "}<a href="/link-building/">{"link building"}</a>{" approach."}</p>
          <h2 id="what-to-copy-for-your-own-site">{"What to copy for your own site"}</h2>
          <ul><li>{"Check Search Console's Pages report first and fix duplicates and thin pages before submitting anything."}</li><li>{"Split large sitemaps by page type and keep last-modified dates honest."}</li><li>{"Make sure every important page has at least five internal links from relevant pages."}</li><li>{"Add a direct answer, specific details and real proof to each page you want indexed."}</li><li>{"Validate structured data with a "}<a href="/seo-tools/schema-checker/">{"schema checker"}</a>{" and a "}<a href="/seo-tools/sitemap-checker/">{"sitemap checker"}</a>{"."}</li><li>{"Expect impressions to move weeks before clicks."}</li></ul>
          <p>{"If your pages are stuck in \"Discovered, currently not indexed\", our "}<a href="/seo-audit/">{"free SEO audit"}</a>{" includes the same indexing review we ran here."}</p>
          <h2 id="faq">{"FAQ"}</h2>
          <h3>{"How long does it take Google to index a new website?"}</h3>
          <p>{"Small, well-linked sites are often indexed within days. Larger new sites with little authority can wait weeks or months for most pages. Fixing duplicates, internal links and sitemaps, then requesting indexing, usually shortens that from months to weeks."}</p>
          <h3>{"Why are my pages \"Discovered, currently not indexed\"?"}</h3>
          <p>{"Google found the URL but decided crawling it was not worth the effort yet. Common causes are low site authority, thin or duplicated content, weak internal linking and too many similar pages. Improve those, then resubmit the sitemap."}</p>
          <h3>{"Does the Google Indexing API work for normal pages?"}</h3>
          <p>{"Google officially supports it only for job postings and livestream pages. It often speeds up crawling for other pages, but it does not guarantee indexing or rankings. Fixing page quality and internal links matters more."}</p>
          <h3>{"Why do I have impressions but no clicks?"}</h3>
          <p>{"Impressions at positions 50 to 100 mean Google shows your page deep in the results, where almost nobody scrolls. Clicks start when pages reach the first page, which usually requires links and mentions from other sites on top of good on-page SEO."}</p>
          <AuthorCard />
        </article>
      </div>
    </section>
  );
}
