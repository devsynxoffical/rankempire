export default function WhoItIsFor() {
  return (
    <section className="x xfit" id="fit">
      <div className="wrap">
        <div className="xfit-p">
          <div className="l">
            <div className="xh lt" data-r="">
              <span className="xe">
                <i></i>
                {"Who it is for"}
              </span>
              <h2 className="h2">
                {"Signs you need technical SEO"}
              </h2>
            </div>
            <div className="best">
              <b>
                {"Best fit"}
              </b>
              <span>
                {"Sites with pages that will not index"}
              </span>
              <span>
                {"Large sites with crawl budget issues"}
              </span>
              <span>
                {"Teams planning a redesign or migration"}
              </span>
              <span>
                {"Websites with slow mobile performance"}
              </span>
            </div>
            <div className="yfit-m" data-r="">
              <div className="m">
                <svg viewBox="0 0 120 70">
                  <path className="t" d="M10 65 A50 50 0 0 1 110 65" />
                  <path className="v" d="M10 65 A50 50 0 0 1 110 65" />
                </svg>
                <b data-fitn="">
                  {"5"}
                </b>
                <span>
                  {"signs checked"}
                </span>
              </div>
              <p>
                {"If two or more apply, this service pays for itself."}
              </p>
            </div>
          </div>
          <ul className="xchk ychk" data-fit="">
            <li data-r="" style={{"--i": "0"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"Search Console reports many pages as crawled or discovered but not indexed"}
              </span>
            </li>
            <li data-r="" style={{"--i": "1"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"Traffic dropped sharply after a redesign, migration or platform change"}
              </span>
            </li>
            <li data-r="" style={{"--i": "2"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"Your site relies heavily on JavaScript to load main content"}
              </span>
            </li>
            <li data-r="" style={{"--i": "3"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"Core Web Vitals reports show poor scores on mobile pages"}
              </span>
            </li>
            <li data-r="" style={{"--i": "4"} as React.CSSProperties}>
              <span className="ck"></span>
              <span>
                {"Crawls reveal redirect chains, broken internal links or duplicate titles"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
