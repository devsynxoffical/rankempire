export default function PageHero() {
  return (
    <section className="ph" style={{paddingBottom: "30px"} as React.CSSProperties}>
      <div className="bgd"></div>
      <div className="wrap" style={{maxWidth: "1060px"} as React.CSSProperties}>
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <a href="/seo-tools/">
            {"SEO Tools"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"SEO Score Checker"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"Free SEO tool"}
        </span>
        <h1 data-r="">
          {"Free "}
          <span className="acc">
            {"SEO Score Checker"}
          </span>
        </h1>
        <p className="lead" data-r="">
          {"Get a 0 to 100 SEO score for any page based on 14 on-page checks, with a clear fix for every issue."}
        </p>
      </div>
    </section>
  );
}
