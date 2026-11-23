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
            {"SERP Checker"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"Free SEO tool"}
        </span>
        <h1 data-r="">
          {"Free "}
          <span className="acc">
            {"SERP Checker"}
          </span>
        </h1>
        <p className="lead" data-r="">
          {"A SERP rank checker tool shows how your page appears in Google and where it ranks for a keyword. This free SERP checker previews your title and description at Google's pixel widths on desktop and mobile, and our free keyword rank checker finds your position. Both run in your browser with no sign-up."}
        </p>
      </div>
    </section>
  );
}
