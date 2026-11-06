export default function V2() {
  return (
    <>
    <link rel="preload" as="image" href="/img/m-local.jpg" fetchPriority="high" />
    <section className="yh v2" style={{"--a1": "#1fa3c9", "--a2": "#ec4e3b"} as React.CSSProperties}>
      <canvas className="grain" aria-hidden="true"></canvas>
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <a href="/locations/">
            {"Locations"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"SEO Company in Tampa"}
          </span>
        </nav>
        <div className="yh-g">
          {"\n"}
          <div className="yh-l">
            <span className="eyb pill lt" data-r="">
              <i></i>
              {"Tampa, FL"}
            </span>
            <h1 data-r="">
              <span className="acc">
                {"Tampa"}
              </span>
              {" SEO company"}
            </h1>
            <p className="lead" data-r="">
              {"Tampa SEO services for Tampa Bay businesses that want more calls, bookings and sales from Google, on both sides of the bay."}
            </p>
            {"\n"}
            <div className="yh-cta" data-r="">
              <form className="audit" action="/contact-us/" role="search" aria-label="Free SEO audit">
                <svg className="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                <label className="sr-only" htmlFor="au-229299333953">
                  {"Your website"}
                </label>
                <input id="au-229299333953" name="site" type="text" inputMode="url" placeholder="Enter your website" autoComplete="url" />
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
              <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/m-local.jpg" aria-label="Tampa, FL">
                <source src="/img/m-local.mp4" type="video/mp4" />
              </video>
              <div className="yh-ch">
                <span style={{"--i": "0"} as React.CSSProperties}>
                  {"Downtown Tampa"}
                </span>
                <span style={{"--i": "1"} as React.CSSProperties}>
                  {"South Tampa"}
                </span>
                <span style={{"--i": "2"} as React.CSSProperties}>
                  {"Westshore"}
                </span>
                <span style={{"--i": "3"} as React.CSSProperties}>
                  {"Ybor City"}
                </span>
                <span style={{"--i": "4"} as React.CSSProperties}>
                  {"St. Petersburg"}
                </span>
              </div>
              <div className="yh-ring" aria-hidden="true"></div>
            </div>
          </div>
        </div>
        {"\n"}
        <div className="yfacts" data-r="">
          <div style={{"--c": "#ec4e3b"} as React.CSSProperties}>
            <b data-count="10" data-raw="10">
              {"10"}
            </b>
            <span>
              {"Areas covered around Tampa"}
            </span>
          </div>
          <div style={{"--c": "#2b55e8"} as React.CSSProperties}>
            <b data-count="121" data-raw="121">
              {"121"}
            </b>
            <span>
              {"Point rank grid"}
            </span>
          </div>
          <div style={{"--c": "#e37a38"} as React.CSSProperties}>
            <b data-count="4" data-raw="4">
              {"4"}
            </b>
            <span>
              {"Popular local industries"}
            </span>
          </div>
          <div style={{"--c": "#4a9f5f"} as React.CSSProperties}>
            <b data-count="599" data-raw="599">
              {"599"}
            </b>
            <span>
              {"Local plans from, per month"}
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
