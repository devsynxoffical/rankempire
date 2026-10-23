export default function PageHero() {
  return (
    <section className="ph" style={{paddingBottom: "30px"} as React.CSSProperties}>
      <div className="bgd"></div>
      <div className="wrap" style={{maxWidth: "980px"} as React.CSSProperties}>
        <nav className="crumb" aria-label="Breadcrumb">
          <a href="/">
            {"Home"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <a href="/blog/">
            {"Blog"}
          </a>
          <span className="sep">
            {"/"}
          </span>
          <span aria-current="page">
            {"The Local SEO Checklist for Service Businesses"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"Local SEO"}
        </span>
        <h1 data-r="">
          {"The Local SEO Checklist for Service Businesses"}
        </h1>
        <p className="lead" data-r="">
          {"A practical checklist to win the Google map pack: profile, citations, reviews, pages and links, in the order that matters."}
        </p>
        <p style={{marginTop: "18px", fontSize: "14px", color: "var(--mute)"} as React.CSSProperties} data-r="">
          {"By the RankEmpire team · "}
          <time dateTime="2026-10-01">
            {"October 1, 2026"}
          </time>
          {" · 3 min read"}
        </p>
      </div>
    </section>
  );
}
