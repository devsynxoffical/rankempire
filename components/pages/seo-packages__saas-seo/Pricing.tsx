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
              {"Seed"}
            </h3>
            <p className="who">
              {"Early-stage SaaS"}
            </p>
            {"\n"}
            <a className="btn dk" href="/contact-us/?plan=seed">
              {"Request a quote"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Keyword and competitor research"}
              </li>
              <li>
                {"4 bottom-funnel pages per month"}
              </li>
              <li>
                {"Technical SEO review"}
              </li>
              <li>
                {"Signup tracking setup"}
              </li>
            </ul>
          </article>
          <article className="plan pop" data-r="">
            <span className="lbl">
              {"Most popular"}
            </span>
            <h3>
              {"Series"}
            </h3>
            <p className="who">
              {"Growth-stage SaaS"}
            </p>
            {"\n"}
            <a className="btn ac" href="/contact-us/?plan=series">
              {"Request a quote"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Everything in Seed"}
              </li>
              <li>
                {"8 pages or articles per month"}
              </li>
              <li>
                {"Comparison and alternative pages"}
              </li>
              <li>
                {"Link building"}
              </li>
              <li>
                {"Pipeline reporting"}
              </li>
            </ul>
          </article>
          <article className="plan" data-r="">
            <span className="lbl">
              {"Plan"}
            </span>
            <h3>
              {"Category leader"}
            </h3>
            <p className="who">
              {"Established SaaS"}
            </p>
            {"\n"}
            <a className="btn dk" href="/contact-us/?plan=category-leader">
              {"Request a quote"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Everything in Series"}
              </li>
              <li>
                {"Programmatic integration pages"}
              </li>
              <li>
                {"Digital PR"}
              </li>
              <li>
                {"International SEO support"}
              </li>
              <li>
                {"Dedicated content lead"}
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
