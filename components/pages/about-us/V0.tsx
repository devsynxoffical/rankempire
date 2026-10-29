export default function V0() {
  return (
    <>
    <link rel="preload" as="image" href="/img/m-desk.jpg" fetchPriority="high" />
    <section className="yh v0" style={{"--a1": "#ec4e3b", "--a2": "#e37a38"} as React.CSSProperties}>
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
            {"About Us"}
          </span>
        </nav>
        <div className="yh-g">
          {"\n"}
          <div className="yh-l">
            <span className="eyb pill lt" data-r="">
              <i></i>
              {"About RankEmpire"}
            </span>
            <h1 data-r="">
              {"We build search "}
              <span className="acc">
                {"empires"}
              </span>
              {" for ambitious businesses"}
            </h1>
            <p className="lead" data-r="">
              {"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies that want rankings to become a lasting asset."}
            </p>
            {"\n"}
            <div className="yh-cta" data-r="">
              <form className="audit" action="/contact-us/" role="search" aria-label="Free SEO audit">
                <svg className="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                <label className="sr-only" htmlFor="au-140197698539824">
                  {"Your website"}
                </label>
                <input id="au-140197698539824" name="site" type="text" inputMode="url" placeholder="Enter your website" autoComplete="url" />
                <button className="btn ac" type="submit">
                  {"Get my free audit"}
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                    <path d="M5 12h14M13 6l6 6-6 6" />
                  </svg>
                </button>
              </form>
              <div className="ticks lt">
                <span>
                  {"Free audit in 2 business days"}
                </span>
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
              <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/m-desk.jpg" aria-label="About RankEmpire">
                <source src="/img/m-desk.mp4" type="video/mp4" />
              </video>
              <div className="yh-ch">
                <span style={{"--i": "0"} as React.CSSProperties}>
                  {"Audit first"}
                </span>
                <span style={{"--i": "1"} as React.CSSProperties}>
                  {"Plain English"}
                </span>
                <span style={{"--i": "2"} as React.CSSProperties}>
                  {"You own it"}
                </span>
                <span style={{"--i": "3"} as React.CSSProperties}>
                  {"Built to last"}
                </span>
              </div>
              <div className="yh-ring" aria-hidden="true"></div>
            </div>
          </div>
        </div>
        {"\n"}
        <div className="yfacts" data-r="">
          <div style={{"--c": "#ec4e3b"} as React.CSSProperties}>
            <b data-count="45" data-raw="45">
              {"45"}
            </b>
            <span>
              {"Industry playbooks"}
            </span>
          </div>
          <div style={{"--c": "#2b55e8"} as React.CSSProperties}>
            <b data-count="17" data-raw="17">
              {"17"}
            </b>
            <span>
              {"US metros"}
            </span>
          </div>
          <div style={{"--c": "#e37a38"} as React.CSSProperties}>
            <b data-count="11" data-raw="11">
              {"11"}
            </b>
            <span>
              {"Free SEO tools"}
            </span>
          </div>
          <div style={{"--c": "#4a9f5f"} as React.CSSProperties}>
            <b data-count="0" data-raw="0">
              {"0"}
            </b>
            <span>
              {"Lock-in contracts"}
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
