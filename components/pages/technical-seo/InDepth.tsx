export default function InDepth() {
  return (
    <section className="x yp flip" id="what">
      <div className="wrap">
        <div className="yp-g">
          <div className="yp-l">
            <div className="xh" data-r="">
              <span className="xe">
                <i></i>
                {"In depth"}
              </span>
              <h2 className="h2">
                {"What is technical SEO?"}
              </h2>
            </div>
            <p className="yp-lede" data-words="">
              {"Technical SEO is the work of making sure search engines can crawl, render, index and understand a website efficiently."}
            </p>
            <div className="yp-body">
              <p data-r="" style={{"--d": "0.0s"} as React.CSSProperties}>
                {"It covers site architecture, XML sitemaps, robots.txt, canonical tags, redirects, status codes, page speed, "}
                <mark>
                  {"Core Web Vitals"}
                </mark>
                {", mobile usability, structured data and JavaScript rendering. Technical SEO does not create new content. It removes the barriers that stop good content from being found and ranked. A site with excellent pages can still underperform if "}
                <mark>
                  {"Google"}
                </mark>
                {" wastes time on duplicate URLs, hits redirect loops or cannot render key content."}
              </p>
              <div className="yp-more" hidden>
                <p>
                  {"Technical issues often appear after changes, such as a redesign, a platform migration, a new plugin or a developer deploying a staging robots.txt to production. They also build up slowly on large sites as filters, tags and old pages multiply. Technical SEO combines crawler tools like Screaming Frog with "}
                  <mark>
                    {"Google"}
                  </mark>
                  {" "}
                  <mark>
                    {"Search Console"}
                  </mark>
                  {" data and server logs to find these problems, then turns them into specific tickets your developers can implement. For e-commerce and SaaS sites with many templates, this work often deserves the first share of the budget."}
                </p>
              </div>
              <button type="button" className="yp-tg" data-more="">
                {"Read more "}
                <i>
                  {"+"}
                </i>
              </button>
            </div>
          </div>
          {"\n"}
          <div className="yp-r">
            <div className="yp-stick">
              <div className="yp-m">
                <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/m-growth.jpg" aria-label="What is technical SEO?">
                  <source src="/img/m-growth.mp4" type="video/mp4" />
                </video>
                <div className="yp-ring"></div>
              </div>
              <div className="yp-ks">
                <div className="yk" style={{"--c": "#ec4e3b", "--i": "0"} as React.CSSProperties}>
                  <b>
                    {"6"}
                  </b>
                  <span>
                    {"Core deliverables"}
                  </span>
                </div>
                <div className="yk" style={{"--c": "#2b55e8", "--i": "1"} as React.CSSProperties}>
                  <b>
                    {"Monthly"}
                  </b>
                  <span>
                    {"Report and call"}
                  </span>
                </div>
                <div className="yk" style={{"--c": "#e37a38", "--i": "2"} as React.CSSProperties}>
                  <b>
                    {"Live"}
                  </b>
                  <span>
                    {"Dashboard"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
