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
            {"Keyword Rank Checker"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"Free SEO tool"}
        </span>
        <h1 data-r="">
          {"Free "}
          <span className="acc">
            {"Keyword Rank Checker"}
          </span>
        </h1>
        <p className="lead" data-r="">
          {"Check where your website ranks in Google for any keyword. Search the keyword, paste the result URLs and this free rank checker shows your position and the competitors above you. To track rankings over time, check again each week or use Google Search Console."}
        </p>
      </div>
    </section>
  );
}
