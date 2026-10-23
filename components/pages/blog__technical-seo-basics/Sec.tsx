export default function Sec() {
  return (
    <section className="sec" style={{paddingTop: "50px"} as React.CSSProperties}>
      <div className="wrap art" style={{maxWidth: "1100px"} as React.CSSProperties}>
        <aside className="toc" aria-label="Table of contents">
          <b>
            {"In this article"}
          </b>
          <a href="#s1">
            {"1. Can Google find your pages?"}
          </a>
          <a href="#s2">
            {"2. Are you blocking anything by accident?"}
          </a>
          <a href="#s3">
            {"3. Is each page unique?"}
          </a>
          <a href="#s4">
            {"4. Is the site fast on phones?"}
          </a>
          <a href="#s5">
            {"5. Does Google understand what you are?"}
          </a>
          <a href="#s6">
            {"When to get help"}
          </a>
          <div className="tc">
            <strong>
              {"Need help?"}
            </strong>
            <p>
              {"Get a free SEO audit from our team."}
            </p>
            <a className="btn ac sm" href="/contact-us/">
              {"Get my audit"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </aside>
        <article className="prose" data-r="">
          <p>
            {"Technical SEO sounds intimidating, but the core ideas are simple: Google needs to find your pages, understand them and load them quickly. Here is what to check."}
          </p>
          {"\n"}
          <h2 id="s1">
            {"1. Can Google find your pages?"}
          </h2>
          <p>
            {"Every important page should be linked from somewhere on your site and listed in your XML sitemap. Pages nobody links to, called orphan pages, are hard for Google to discover. Use our "}
            <a href="/seo-tools/sitemap-checker/">
              {"Sitemap Checker"}
            </a>
            {" to review your sitemap."}
          </p>
          {"\n"}
          <h2 id="s2">
            {"2. Are you blocking anything by accident?"}
          </h2>
          <p>
            {"Your robots.txt file tells crawlers what they may visit. One wrong line can block an entire section. Test important URLs with our "}
            <a href="/seo-tools/robots-txt-checker/">
              {"Robots.txt Checker"}
            </a>
            {"."}
          </p>
          {"\n"}
          <h2 id="s3">
            {"3. Is each page unique?"}
          </h2>
          <p>
            {"Duplicate pages split ranking signals. Use canonical tags to point duplicates to the main version and give each page a unique title and description. Our "}
            <a href="/seo-tools/meta-tag-checker/">
              {"Meta Tag Checker"}
            </a>
            {" shows these quickly."}
          </p>
          {"\n"}
          <h2 id="s4">
            {"4. Is the site fast on phones?"}
          </h2>
          <p>
            {"Google evaluates the mobile version of your site first. Large images, heavy scripts and slow hosting hurt both rankings and conversions. Compress images, use modern formats and remove scripts you do not need."}
          </p>
          {"\n"}
          <h2 id="s5">
            {"5. Does Google understand what you are?"}
          </h2>
          <p>
            {"Structured data, or schema markup, labels your business, services, products, reviews and FAQs in a format search engines read directly. It can unlock rich results. Validate yours with our "}
            <a href="/seo-tools/schema-checker/">
              {"Schema Checker"}
            </a>
            {"."}
          </p>
          {"\n"}
          <h2 id="s6">
            {"When to get help"}
          </h2>
          <p>
            {"If pages will not index, traffic dropped after a redesign or your site is slow despite fixes, it is time for a professional "}
            <a href="/technical-seo/">
              {"technical SEO"}
            </a>
            {" review."}
          </p>
          <div className="card" style={{marginTop: "40px", display: "flex", gap: "16px", alignItems: "center"} as React.CSSProperties}>
            <svg style={{width: "48px", height: "48px", flex: "none"} as React.CSSProperties} viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" fill="#0b0b0c" />
              <path d="M7 21.5 6 11l5 4 5-7.5 5 7.5 5-4-1 10.5Z" fill="#ff3d2e" />
              <rect x="7" y="23" width="18" height="2.6" fill="#fff" />
            </svg>
            <div>
              <b style={{color: "var(--ink)"} as React.CSSProperties}>
                {"RankEmpire team"}
              </b>
              <p style={{margin: "0"} as React.CSSProperties}>
                {"Strategists, technical specialists and writers who run SEO programs for US businesses."}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
