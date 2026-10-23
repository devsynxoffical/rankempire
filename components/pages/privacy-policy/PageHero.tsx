export default function PageHero() {
  return (
    <section className="ph">
      <div className="bgd"></div>
      <div className="wrap" style={{maxWidth: "860px"} as React.CSSProperties}>
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"Privacy Policy"}
          </span>
        </nav>
        <h1 data-r="">
          {"Privacy Policy"}
        </h1>
        <p className="lead" data-r="">
          {"Last updated October 2026"}
        </p>
      </div>
    </section>
  );
}
