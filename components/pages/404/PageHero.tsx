export default function PageHero() {
  return (
    <section className="ph" style={{minHeight: "60vh", textAlign: "center"} as React.CSSProperties}>
      <div className="bgd"></div>
      <div className="wrap">
        <span className="eyb pill">
          <i></i>
          {"Error 404"}
        </span>
        <h1 style={{fontSize: "clamp(60px,10vw,140px)"} as React.CSSProperties}>
          {"404"}
        </h1>
        <p className="lead" style={{margin: "0 auto 26px"} as React.CSSProperties}>
          {"This page lost its ranking. It may have moved or never existed."}
        </p>
        <div style={{display: "flex", gap: "10px", justifyContent: "center", flexWrap: "wrap"} as React.CSSProperties}>
          <a className="btn dk" href="/">
            {"Back to home"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
          <a className="btn ln" href="/seo-tools/">
            {"Try our free tools"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
