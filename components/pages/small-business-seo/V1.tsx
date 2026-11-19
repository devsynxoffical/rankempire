export default function V1() {
  return (
    <>
    <link rel="preload" as="image" href="/img/mv-sb-hero.webp" fetchPriority="high" />
    <section className="yh v1" style={{"--a1": "#8c2fe2", "--a2": "#2b55e8"} as React.CSSProperties}>
      <canvas className="grain" aria-hidden="true"></canvas>
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <a href="/seo-services/">
            {"SEO Services"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"Small Business SEO"}
          </span>
        </nav>
        <div className="yh-g">
          {"\n"}
          <div className="yh-l">
            <span className="eyb pill lt" data-r="">
              <i></i>
              {"Small Business SEO"}
            </span>
            <h1 data-r="">
              {"SEO services for small business that bring "}
              <span className="acc">
                {"customers"}
              </span>
              {", not just traffic"}
            </h1>
            <p className="lead" data-r="">
              {"Local SEO, Google Maps, service pages and reviews for small businesses that need calls and bookings. Plans from $599 a month, no long contracts."}
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
              <a className="yh-book" href="/book-a-call/">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="5" width="18" height="16" rx="3" /><path d="M3 10h18M8 3v4M16 3v4" /></svg>
                {"Or book a free strategy call"}
              </a>
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
              <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/mv-sb-hero.webp" aria-label="Small business SEO">
                <source src="/img/mv-sb-hero.mp4" type="video/mp4" />
              </video>
              <div className="yh-ch">
                <span style={{"--i": "0"} as React.CSSProperties}>
                  {"Google Maps and local SEO"}
                </span>
                <span style={{"--i": "1"} as React.CSSProperties}>
                  {"Service and area pages"}
                </span>
                <span style={{"--i": "2"} as React.CSSProperties}>
                  {"Reviews that rank"}
                </span>
                <span style={{"--i": "3"} as React.CSSProperties}>
                  {"Speed and technical fixes"}
                </span>
                <span style={{"--i": "4"} as React.CSSProperties}>
                  {"Leads you can track"}
                </span>
              </div>
              <div className="yh-ring" aria-hidden="true"></div>
            </div>
          </div>
        </div>
        {"\n"}
        <div className="yfacts" data-r="">
          <div style={{"--c": "#ec4e3b"} as React.CSSProperties}>
            <b data-count="6" data-raw="6">
              {"6"}
            </b>
            <span>
              {"Fixes ranked by revenue impact"}
            </span>
          </div>
          <div style={{"--c": "#2b55e8"} as React.CSSProperties}>
            <b data-count="90" data-raw="90">
              {"90"}
            </b>
            <span>
              {"Day roadmap"}
            </span>
          </div>
          <div style={{"--c": "#e37a38"} as React.CSSProperties}>
            <b data-count="1" data-raw="1">
              {"1"}
            </b>
            <span>
              {"Senior strategist per business"}
            </span>
          </div>
          <div style={{"--c": "#4a9f5f"} as React.CSSProperties}>
            <b data-count="0" data-raw="0">
              {"0"}
            </b>
            <span>
              {"Long-term contracts"}
            </span>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
