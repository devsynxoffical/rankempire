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
        <div className="toggle" role="group" aria-label="Billing period">
          <button type="button" className="on" data-v="m" aria-pressed="true">
            {"Monthly"}
          </button>
          <button type="button" data-v="y" aria-pressed="false">
            {"Yearly"}
          </button>
        </div>
        <p className="save">
          {"Save 10% with yearly billing"}
        </p>
        {"\n"}
        <div className="plans">
          <article className="plan" data-r="">
            <span className="lbl">
              {"Plan"}
            </span>
            <h3>
              {"Starter"}
            </h3>
            <p className="who">
              {"One location, one service area"}
            </p>
            {"\n"}
            <div className="pr">
              <b>
                {"$"}
                <span data-m="599" data-y="539">
                  {"599"}
                </span>
              </b>
              <small>
                {"/ month"}
              </small>
            </div>
            <div className="bill" data-mb="Billed monthly" data-yb="Billed yearly, save $720">
              {"Billed monthly"}
            </div>
            {"\n"}
            <a className="btn dk" href="/contact-us/">
              {"Get started"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Google Business Profile setup and optimization"}
              </li>
              <li>
                {"Top 40 citations"}
              </li>
              <li>
                {"Review request system"}
              </li>
              <li>
                {"2 location or service pages per month"}
              </li>
              <li>
                {"Rank grid report"}
              </li>
            </ul>
          </article>
          <article className="plan pop" data-r="">
            <span className="lbl">
              {"Most popular"}
            </span>
            <h3>
              {"Pro"}
            </h3>
            <p className="who">
              {"Up to three locations"}
            </p>
            {"\n"}
            <div className="pr">
              <b>
                {"$"}
                <span data-m="1,199" data-y="1,079">
                  {"1,199"}
                </span>
              </b>
              <small>
                {"/ month"}
              </small>
            </div>
            <div className="bill" data-mb="Billed monthly" data-yb="Billed yearly, save $1,440">
              {"Billed monthly"}
            </div>
            {"\n"}
            <a className="btn ac" href="/contact-us/">
              {"Get started"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Everything in Starter"}
              </li>
              <li>
                {"Weekly Google posts"}
              </li>
              <li>
                {"4 local pages per month"}
              </li>
              <li>
                {"Local link building"}
              </li>
              <li>
                {"Review response management"}
              </li>
              <li>
                {"Competitor map pack tracking"}
              </li>
            </ul>
          </article>
          <article className="plan" data-r="">
            <span className="lbl">
              {"Plan"}
            </span>
            <h3>
              {"Multi-location"}
            </h3>
            <p className="who">
              {"Four or more locations"}
            </p>
            {"\n"}
            <div className="pr">
              <b>
                {"$"}
                <span data-m="2,199" data-y="1,979">
                  {"2,199"}
                </span>
              </b>
              <small>
                {"/ month"}
              </small>
            </div>
            <div className="bill" data-mb="Billed monthly" data-yb="Billed yearly, save $2,640">
              {"Billed monthly"}
            </div>
            {"\n"}
            <a className="btn dk" href="/contact-us/">
              {"Get started"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
            <ul>
              <li>
                {"Everything in Pro"}
              </li>
              <li>
                {"Per-location profiles and pages"}
              </li>
              <li>
                {"Store locator SEO"}
              </li>
              <li>
                {"Centralized review dashboard"}
              </li>
              <li>
                {"Dedicated local strategist"}
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
