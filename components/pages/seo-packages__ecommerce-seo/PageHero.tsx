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
            {"E-commerce SEO Packages"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"E-commerce SEO Packages"}
        </span>
        <h1 data-r="" style={{maxWidth: "900px", marginLeft: "auto", marginRight: "auto"} as React.CSSProperties}>
          {"E-commerce SEO packages built for "}
          <span className="acc">
            {"revenue"}
          </span>
        </h1>
        <p className="lead" data-r="" style={{margin: "0 auto"} as React.CSSProperties}>
          {"Plans for Shopify, WooCommerce and custom stores that want organic sales to carry more of the load."}
        </p>
      </div>
    </section>
  );
}
