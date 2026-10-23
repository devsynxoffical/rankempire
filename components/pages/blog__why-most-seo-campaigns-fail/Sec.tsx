export default function Sec() {
  return (
    <section className="sec" style={{paddingTop: "50px"} as React.CSSProperties}>
      <div className="wrap art" style={{maxWidth: "1100px"} as React.CSSProperties}>
        <aside className="toc" aria-label="Table of contents">
          <b>
            {"In this article"}
          </b>
          <a href="#s1">
            {"1. Content before foundation"}
          </a>
          <a href="#s2">
            {"2. Targeting keywords without intent"}
          </a>
          <a href="#s3">
            {"3. One page trying to rank for everything"}
          </a>
          <a href="#s4">
            {"4. Measuring the wrong thing"}
          </a>
          <a href="#s5">
            {"5. Quitting at month four"}
          </a>
          <a href="#s6">
            {"The fix"}
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
            {"Most SEO campaigns do not fail because SEO stopped working. They fail because the work is done in the wrong order, measured with the wrong numbers or abandoned right before it starts paying off."}
          </p>
          {"\n"}
          <h2 id="s1">
            {"1. Content before foundation"}
          </h2>
          <p>
            {"Publishing articles on a site that Google struggles to crawl is like stocking shelves in a store with a locked front door. If key pages are blocked, slow, duplicated or buried six clicks deep, new content will not perform. Fix crawlability, indexation and internal linking first."}
          </p>
          {"\n"}
          <h2 id="s2">
            {"2. Targeting keywords without intent"}
          </h2>
          <p>
            {"A keyword with high volume is useless if the people searching it do not want what you sell. Every target should be checked against the current results page: if Google shows guides and you have a sales page, you are fighting the algorithm instead of working with it."}
          </p>
          {"\n"}
          <h2 id="s3">
            {"3. One page trying to rank for everything"}
          </h2>
          <p>
            {"Service pages that list ten services rarely rank for any of them. Each meaningful service, location and audience deserves its own page with a clear job. This is also how you avoid keyword cannibalization, where several of your own pages compete for the same search."}
          </p>
          {"\n"}
          <h2 id="s4">
            {"4. Measuring the wrong thing"}
          </h2>
          <p>
            {"Rankings and traffic are leading indicators, not outcomes. Track calls, form submissions, booked appointments and revenue from organic search. When the report connects to money, decisions get easier."}
          </p>
          {"\n"}
          <h2 id="s5">
            {"5. Quitting at month four"}
          </h2>
          <p>
            {"SEO compounds. Months one to three are mostly fixes and foundations, months four to six bring the first meaningful movement and the real returns usually show after that. Most campaigns that fail are stopped just before the curve bends."}
          </p>
          {"\n"}
          <h2 id="s6">
            {"The fix"}
          </h2>
          <p>
            {"Audit first, prioritize by impact, build pages with one clear job, earn real authority and measure revenue. It is not glamorous, but it is how rankings become an asset instead of an expense."}
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
