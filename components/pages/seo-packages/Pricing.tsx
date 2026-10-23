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
              {"Local"}
            </h3>
            <p className="who">
              {"Single-location businesses"}
            </p>
            {"\n"}
            <div className="pr">
              <b>
                {"$"}
                <span data-m="799" data-y="719">
                  {"799"}
                </span>
              </b>
              <small>
                {"/ month"}
              </small>
            </div>
            <div className="bill" data-mb="Billed monthly" data-yb="Billed yearly, save $960">
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
                {"Google Business Profile optimization"}
              </li>
              <li>
                {"Up to 10 tracked keywords"}
              </li>
              <li>
                {"4 optimized pages per month"}
              </li>
              <li>
                {"Citation cleanup and building"}
              </li>
              <li>
                {"Monthly report and call"}
              </li>
            </ul>
          </article>
          <article className="plan pop" data-r="">
            <span className="lbl">
              {"Most popular"}
            </span>
            <h3>
              {"Growth"}
            </h3>
            <p className="who">
              {"Growing businesses and multi-location brands"}
            </p>
            {"\n"}
            <div className="pr">
              <b>
                {"$"}
                <span data-m="1,499" data-y="1,349">
                  {"1,499"}
                </span>
              </b>
              <small>
                {"/ month"}
              </small>
            </div>
            <div className="bill" data-mb="Billed monthly" data-yb="Billed yearly, save $1,800">
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
                {"Everything in Local"}
              </li>
              <li>
                {"Up to 30 tracked keywords"}
              </li>
              <li>
                {"8 optimized or new pages per month"}
              </li>
              <li>
                {"Technical SEO fixes"}
              </li>
              <li>
                {"Monthly link building"}
              </li>
              <li>
                {"Live ranking dashboard"}
              </li>
            </ul>
          </article>
          <article className="plan" data-r="">
            <span className="lbl">
              {"Plan"}
            </span>
            <h3>
              {"Empire"}
            </h3>
            <p className="who">
              {"Competitive markets and national brands"}
            </p>
            {"\n"}
            <div className="pr">
              <b>
                {"$"}
                <span data-m="2,999" data-y="2,699">
                  {"2,999"}
                </span>
              </b>
              <small>
                {"/ month"}
              </small>
            </div>
            <div className="bill" data-mb="Billed monthly" data-yb="Billed yearly, save $3,600">
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
                {"Everything in Growth"}
              </li>
              <li>
                {"Up to 100 tracked keywords"}
              </li>
              <li>
                {"16 optimized or new pages per month"}
              </li>
              <li>
                {"Digital PR campaign"}
              </li>
              <li>
                {"Dedicated strategist"}
              </li>
              <li>
                {"Quarterly roadmap workshop"}
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
