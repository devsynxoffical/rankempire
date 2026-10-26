export default function V1() {
  return (
    <section className="yh v1" style={{"--a1": "#4a9f5f", "--a2": "#1fa3c9"} as React.CSSProperties}>
      <canvas className="grain" aria-hidden="true"></canvas>
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <a href="/industries/">
            {"Industries"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"SEO for Bakeries"}
          </span>
        </nav>
        <div className="yh-g">
          {"\n"}
          <div className="yh-l">
            <span className="eyb pill lt" data-r="">
              <i></i>
              {"Food and Hospitality"}
            </span>
            <h1 data-r="">
              {"SEO for "}
              <span className="acc">
                {"Bakeries"}
              </span>
            </h1>
            <p className="lead" data-r="">
              {"More calls, bookings and qualified leads for your bakery, from customers already searching for what you do."}
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
              <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/m-local.jpg" aria-label="Food and Hospitality">
                <source src="/img/m-local.mp4" type="video/mp4" />
              </video>
              <div className="yh-ch">
                <span style={{"--i": "0"} as React.CSSProperties}>
                  {"bakery open now near me"}
                </span>
                <span style={{"--i": "1"} as React.CSSProperties}>
                  {"custom birthday cake near me"}
                </span>
                <span style={{"--i": "2"} as React.CSSProperties}>
                  {"gluten free bakery"}
                </span>
                <span style={{"--i": "3"} as React.CSSProperties}>
                  {"wedding cake tasting appointment"}
                </span>
                <span style={{"--i": "4"} as React.CSSProperties}>
                  {"how far in advance order custom cake"}
                </span>
              </div>
              <div className="yh-ring" aria-hidden="true"></div>
            </div>
          </div>
        </div>
        {"\n"}
        <div className="yfacts" data-r="">
          <div style={{"--c": "#ec4e3b"} as React.CSSProperties}>
            <b data-count="8" data-raw="8">
              {"8"}
            </b>
            <span>
              {"High-intent searches mapped"}
            </span>
          </div>
          <div style={{"--c": "#2b55e8"} as React.CSSProperties}>
            <b data-count="3" data-raw="3">
              {"3"}
            </b>
            <span>
              {"Top map pack target"}
            </span>
          </div>
          <div style={{"--c": "#e37a38"} as React.CSSProperties}>
            <b data-count="90" data-raw="90">
              {"90"}
            </b>
            <span>
              {"Days to early movement"}
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
