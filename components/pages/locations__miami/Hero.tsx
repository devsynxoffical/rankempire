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
          <a href="/locations/">
            {"Locations"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"SEO Company in Miami"}
          </span>
        </nav>
        <div className="yh-g">
          {"\n"}
          <div className="yh-l">
            <span className="eyb pill lt" data-r="">
              <i></i>
              {"Miami, FL"}
            </span>
            <h1 data-r="">
              {"SEO company in "}
              <span className="acc">
                {"Miami"}
              </span>
            </h1>
            <p className="lead" data-r="">
              {"Local SEO, technical SEO and content for Miami businesses that want more calls, bookings and sales from Google."}
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
              <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/m-local.jpg" aria-label="Miami, FL">
                <source src="/img/m-local.mp4" type="video/mp4" />
              </video>
              <div className="yh-ch">
                <span style={{"--i": "0"} as React.CSSProperties}>
                  {"Brickell"}
                </span>
                <span style={{"--i": "1"} as React.CSSProperties}>
                  {"Wynwood"}
                </span>
                <span style={{"--i": "2"} as React.CSSProperties}>
                  {"Coral Gables"}
                </span>
                <span style={{"--i": "3"} as React.CSSProperties}>
                  {"Miami Beach"}
                </span>
                <span style={{"--i": "4"} as React.CSSProperties}>
                  {"Doral"}
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
              {"Areas covered around Miami"}
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
            <b data-count="799" data-raw="799">
              {"799"}
            </b>
            <span>
              {"Local plans from, per month"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
