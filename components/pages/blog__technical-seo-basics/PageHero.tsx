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
            {"Technical SEO Basics Every Business Owner Should Know"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"Technical SEO"}
        </span>
        <h1 data-r="">
          {"Technical SEO Basics Every Business Owner Should Know"}
        </h1>
        <p className="lead" data-r="">
          {"You do not need to be a developer to understand what holds a website back. Five technical basics, explained in plain English."}
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
