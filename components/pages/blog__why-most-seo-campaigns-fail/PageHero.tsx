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
            {"Why Most SEO Campaigns Fail in the First 6 Months"}
          </span>
        </nav>
        <span className="eyb pill" data-r="">
          <i></i>
          {"SEO Strategy"}
        </span>
        <h1 data-r="">
          {"Why Most SEO Campaigns Fail in the First 6 Months"}
        </h1>
        <p className="lead" data-r="">
          {"It is rarely the budget. It is the order of operations. Here are the mistakes that stall SEO before it has a chance to work."}
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
