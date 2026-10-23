export default function Hero() {
  return (
    <section className="yh">
      <canvas className="grain" aria-hidden="true"></canvas>
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"Case Studies"}
          </span>
        </nav>
        <div className="yh-g">
          {"\n"}
          <div className="yh-l">
            <span className="eyb pill lt" data-r="">
              <i></i>
              {"SEO results"}
            </span>
            <h1 data-r="">
              {"Case studies and "}
              <span className="acc">
                {"proven playbooks"}
              </span>
            </h1>
            <p className="lead" data-r="">
              {"How we run SEO programs for local businesses, online stores and practices. Verified client results published with permission."}
            </p>
            {"\n"}
            <div className="yh-cta" data-r="">
              <form className="audit" action="/contact-us/" role="search" aria-label="Free SEO audit">
                <svg className="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                <label className="sr-only" htmlFor="au-140460949779248">
                  {"Your website"}
                </label>
                <input id="au-140460949779248" name="site" type="text" inputMode="url" placeholder="Enter your website, e.g. yourbusiness.com" autoComplete="url" />
                <button className="btn ac" type="submit">
                  {"Get my free audit"}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
              <div className="ticks lt">
                {"span>Free audit in 2 business days"}
                <span>
                  {"Month to month"}
                </span>
                <span>
                  {"Plain-English reporting"}
                </span>
              </div>
            </div>
          </div>
          {"\n"}
          <div className="yh-v" data-r="s">
            <div className="yh-m">
              <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/m-growth.jpg" aria-label="SEO results">
                <source src="/img/m-growth.mp4" type="video/mp4" />
              </video>
              <div className="yh-ch">
                <span style={{"--i": "0"} as React.CSSProperties}>
                  {"42.1K clicks"}
                </span>
                <span style={{"--i": "1"} as React.CSSProperties}>
                  {"240K impressions"}
                </span>
                <span style={{"--i": "2"} as React.CSSProperties}>
                  {"17.6% CTR"}
                </span>
                <span style={{"--i": "3"} as React.CSSProperties}>
                  {"9.04K clicks"}
                </span>
                <span style={{"--i": "4"} as React.CSSProperties}>
                  {"25.4K clicks"}
                </span>
              </div>
              <div className="yh-ring" aria-hidden="true"></div>
            </div>
          </div>
        </div>
        {"\n"}
        <div className="yfacts" data-r="">
          <div style={{"--c": "#ec4e3b"} as React.CSSProperties}>
            <b data-count="3" data-raw="3">
              {"3"}
            </b>
            <span>
              {"Verified Search Console reports"}
            </span>
          </div>
          <div style={{"--c": "#2b55e8"} as React.CSSProperties}>
            <b data-count="42.1" data-raw="42.1">
              {"42.1"}
            </b>
            <span>
              {"K clicks, 6 months"}
            </span>
          </div>
          <div style={{"--c": "#e37a38"} as React.CSSProperties}>
            <b data-count="26.9" data-raw="26.9">
              {"26.9"}
            </b>
            <span>
              {"% CTR, 28 days"}
            </span>
          </div>
          <div style={{"--c": "#4a9f5f"} as React.CSSProperties}>
            <b data-count="4" data-raw="4">
              {"4"}
            </b>
            <span>
              {"Playbooks"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
