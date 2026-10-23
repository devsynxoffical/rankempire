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
            {"SaaS SEO Packages"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"SaaS SEO Packages"}
        </span>
        <h1 data-r="" style={{maxWidth: "900px", marginLeft: "auto", marginRight: "auto"} as React.CSSProperties}>
          {"SaaS SEO packages that build "}
          <span className="acc">
            {"pipeline"}
          </span>
        </h1>
        <p className="lead" data-r="" style={{margin: "0 auto"} as React.CSSProperties}>
          {"Plans for B2B software companies that want trials, demos and signups from organic search."}
        </p>
      </div>
    </section>
  );
}
