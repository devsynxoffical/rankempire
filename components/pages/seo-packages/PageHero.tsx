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
          <span aria-current="page">
            {"SEO Packages"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"SEO Packages"}
        </span>
        <h1 data-r="" style={{maxWidth: "900px", marginLeft: "auto", marginRight: "auto"} as React.CSSProperties}>
          {"SEO packages with "}
          <span className="acc">
            {"clear"}
          </span>
          {" pricing"}
        </h1>
        <p className="lead" data-r="" style={{margin: "0 auto"} as React.CSSProperties}>
          {"Monthly plans for every stage. No long contracts after onboarding, no hidden fees and every deliverable listed up front."}
        </p>
      </div>
    </section>
  );
}
