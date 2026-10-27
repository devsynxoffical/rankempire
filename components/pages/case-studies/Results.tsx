export default function Results() {
  return (
    <section className="sec results" id="results">
      <div className="wrap rgrid">
        <div data-r="">
          {"\n"}
          <span className="eyb pill">
            <i></i>
            {"Verified client results"}
          </span>
          <h2 className="h2" style={{margin: "16px 0 14px"} as React.CSSProperties}>
            {"Verified result: education website, 6 months."}
          </h2>
          {"\n"}
          <p className="lead" style={{fontSize: "17px"} as React.CSSProperties}>
            {"Real performance data from a client's Google Search Console, last 6 months. No mockups, no estimates, just what Google reports."}
          </p>
          {"\n"}
          <div className="rk" data-stagger="">
            <div className="k1">
              <b>
                <span data-count="42.1">
                  {"42.1"}
                </span>
                {"K"}
              </b>
              <span>
                {"Total clicks from Google"}
              </span>
            </div>
            <div className="k2">
              <b>
                <span data-count="240">
                  {"240"}
                </span>
                {"K"}
              </b>
              <span>
                {"Total impressions"}
              </span>
            </div>
            <div className="k3">
              <b>
                <span data-count="17.6">
                  {"17.6"}
                </span>
                {"%"}
              </b>
              <span>
                {"Average click-through rate"}
              </span>
            </div>
            <div className="k4">
              <b>
                <span data-count="7.5">
                  {"7.5"}
                </span>
              </b>
              <span>
                {"Average position"}
              </span>
            </div>
          </div>
          {"\n"}
          <div className="rmeta">
            <span>
              {"Education website"}
            </span>
            <span>
              {"Search type: Web"}
            </span>
            <span>
              {"Apr to Oct 2026"}
            </span>
          </div>
          {"\n"}
          <div style={{marginTop: "24px", display: "flex", gap: "10px", flexWrap: "wrap"} as React.CSSProperties}>
            <a className="btn dk" href="/contact-us/">
              {"Request a quote"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <a className="btn ln" href="/contact-us/">
              {"Get results like this"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </div>
        {"\n"}
        <div className="rwrap" data-r="s">
          <div className="bframe">
            <div className="bb">
              <i></i>
              <i></i>
              <i></i>
              <span>
                {"search.google.com / search-console / performance"}
              </span>
            </div>
            <img src="/img/r-gsc1.webp" alt="Google Search Console performance report showing 42.1K clicks, 240K impressions, 17.6% average CTR and 7.5 average position over 6 months" loading="lazy" width="1600" height="868" />
          </div>
          {"\n"}
          <div className="rbadge b">
            <span className="g">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7" />
              </svg>
            </span>
            <span>
              <b>
                {"17.6% CTR"}
              </b>
              {"6-month average"}
            </span>
          </div>
          {"\n"}
          <div className="rbadge a">
            <span className="g">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="9" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="12" cy="12" r="1" />
              </svg>
            </span>
            <span>
              <b>
                {"Avg. position 7.5"}
              </b>
              {"first page of Google"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
