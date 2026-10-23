export default function PageHero() {
  return (
    <section className="ph">
      <div className="bgd"></div>
      <div className="wrap" style={{textAlign: "center"} as React.CSSProperties}>
        <nav className="crumb" style={{justifyContent: "center"} as React.CSSProperties} aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <a href="/seo-packages/">
            {"SEO Packages"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"Local SEO Packages"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"Local SEO Packages"}
        </span>
        <h1 data-r="" style={{maxWidth: "900px", marginLeft: "auto", marginRight: "auto"} as React.CSSProperties}>
          {"Local SEO packages that win the "}
          <span className="acc">
            {"map pack"}
          </span>
        </h1>
        <p className="lead" data-r="" style={{margin: "0 auto"} as React.CSSProperties}>
          {"Plans built for service businesses, clinics and multi-location brands that depend on local calls and visits."}
        </p>
      </div>
    </section>
  );
}
