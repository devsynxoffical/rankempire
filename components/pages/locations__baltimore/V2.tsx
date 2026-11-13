export default function V2() {
  return (
    <>
    <link rel="preload" as="image" href="/img/m-local.webp" fetchPriority="high" />
    <section className="yh v2" style={{"--a1": "#5b2bd1", "--a2": "#f08a1c"} as React.CSSProperties}>
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
            {"SEO Company in Baltimore"}
          </span>
        </nav>
        <div className="yh-g">
          {"\n"}
          <div className="yh-l">
            <span className="eyb pill lt" data-r="">
              <i></i>
              {"Baltimore, MD"}
            </span>
            <h1 data-r="">
              <span className="acc">
                {"Baltimore"}
              </span>
              {" SEO company"}
            </h1>
            <p className="lead" data-r="">
              {"Baltimore SEO services for Maryland businesses that want more calls, bookings and patients from Google, neighborhood by neighborhood."}
            </p>
            {"\n"}
            <div className="yh-cta" data-r="">
              <form className="audit" action="/contact-us/" role="search" aria-label="Free SEO audit">
                <svg className="g" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="9" />
                  <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
                </svg>
                <label className="sr-only" htmlFor="au-713274883447">
                  {"Your website"}
                </label>
                <input id="au-713274883447" name="site" type="text" inputMode="url" placeholder="Enter your website" autoComplete="url" />
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
              <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/m-local.webp" aria-label="Baltimore, MD">
                <source src="/img/m-local.mp4" type="video/mp4" />
              </video>
              <div className="yh-ch">
                <span style={{"--i": "0"} as React.CSSProperties}>
                  {"Inner Harbor"}
                </span>
                <span style={{"--i": "1"} as React.CSSProperties}>
                  {"Fells Point"}
                </span>
                <span style={{"--i": "2"} as React.CSSProperties}>
                  {"Canton"}
                </span>
                <span style={{"--i": "3"} as React.CSSProperties}>
                  {"Towson"}
                </span>
                <span style={{"--i": "4"} as React.CSSProperties}>
                  {"Columbia"}
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
              {"Areas covered around Baltimore"}
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
