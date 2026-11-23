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
          {"This SEO checker is free, with no trial and no sign-up. Paste a page's source code and it scores the page from 0 to 100 across 14 on-page checks, with a fix for every issue it finds. It runs in your browser, so nothing is stored."}
        </p>
      </div>
    </section>
  );
}
