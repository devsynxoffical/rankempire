export default function Pricing() {
  return (
    <section className="sec" style={{paddingTop: "0"} as React.CSSProperties} id="pricing" data-price="">
      <div className="wrap" style={{textAlign: "center"} as React.CSSProperties}>
        <div className="sh c" data-r="">
          <span className="eyb">
            {"Plans"}
          </span>
          <h2 className="h2">
            {"Choose your plan"}
          </h2>
          <p>
            {"Every plan includes onboarding, a roadmap, reporting and a dedicated strategist."}
          </p>
        </div>
        {"\n"}
        <div className="plans">
          <article className="plan" data-r="">
            <span className="lbl">
              {"Plan"}
            </span>
            <h3>
              {"Launch"}
            </h3>
            <p className="who">
              {"Stores up to 500 products"}
            </p>
            {"\n"}
            <a className="btn dk" href="/contact-us/?plan=launch">
              {"Request a quote"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Technical store audit"}
              </li>
              <li>
                {"Product schema setup"}
              </li>
              <li>
                {"6 category or product optimizations per month"}
              </li>
              <li>
                {"Monthly revenue report"}
              </li>
            </ul>
          </article>
          <article className="plan pop" data-r="">
            <span className="lbl">
              {"Most popular"}
            </span>
            <h3>
              {"Scale"}
            </h3>
            <p className="who">
              {"Stores up to 5,000 products"}
            </p>
            {"\n"}
            <a className="btn ac" href="/contact-us/?plan=scale">
              {"Request a quote"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Everything in Launch"}
              </li>
              <li>
                {"Faceted navigation control"}
              </li>
              <li>
                {"12 optimizations per month"}
              </li>
              <li>
                {"2 buying guides per month"}
              </li>
              <li>
                {"Link building"}
              </li>
            </ul>
          </article>
          <article className="plan" data-r="">
            <span className="lbl">
              {"Plan"}
            </span>
            <h3>
              {"Enterprise"}
            </h3>
            <p className="who">
              {"Large catalogs and marketplaces"}
            </p>
            {"\n"}
            <a className="btn dk" href="/contact-us/?plan=enterprise">
              {"Request a quote"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Everything in Scale"}
              </li>
              <li>
                {"Template-level technical program"}
              </li>
              <li>
                {"Programmatic category pages"}
              </li>
              <li>
                {"Digital PR"}
              </li>
              <li>
                {"Dedicated SEO lead"}
              </li>
            </ul>
          </article>
        </div>
        <p style={{marginTop: "22px", color: "var(--mute)", fontSize: "14.5px"} as React.CSSProperties}>
          {"Need multi-location or enterprise SEO? "}
          <a className="tlink" href="/contact-us/">
            {"Get a custom quote"}
          </a>
        </p>
      </div>
    </section>
  );
}
