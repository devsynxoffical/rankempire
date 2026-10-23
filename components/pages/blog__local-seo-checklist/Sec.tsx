export default function Sec() {
  return (
    <section className="sec" style={{paddingTop: "50px"} as React.CSSProperties}>
      <div className="wrap art" style={{maxWidth: "1100px"} as React.CSSProperties}>
        <aside className="toc" aria-label="Table of contents">
          <b>
            {"In this article"}
          </b>
          <a href="#s1">
            {"Google Business Profile"}
          </a>
          <a href="#s2">
            {"Consistency across the web"}
          </a>
          <a href="#s3">
            {"Reviews"}
          </a>
          <a href="#s4">
            {"Location and service pages"}
          </a>
          <a href="#s5">
            {"Local links"}
          </a>
          <a href="#s6">
            {"Track the right way"}
          </a>
          <div className="tc">
            <strong>
              {"Need help?"}
            </strong>
            <p>
              {"Get a free SEO audit from our team."}
            </p>
            <a className="btn ac sm" href="/contact-us/">
              {"Get my audit"}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </a>
          </div>
        </aside>
        <article className="prose" data-r="">
          <p>
            {"The map pack is where local customers decide who to call. This checklist covers the work that moves map rankings, in the order we do it for clients."}
          </p>
          {"\n"}
          <h2 id="s1">
            {"Google Business Profile"}
          </h2>
          <ul>
            <li>
              {"Choose the most specific primary category that matches your main service."}
            </li>
            <li>
              {"Add every service you offer with a short description."}
            </li>
            <li>
              {"Upload real photos of your team, vehicles, location and work every month."}
            </li>
            <li>
              {"Post at least weekly: offers, projects, tips and updates."}
            </li>
            <li>
              {"Answer common questions in the Q&A section before customers ask."}
            </li>
          </ul>
          {"\n"}
          <h2 id="s2">
            {"Consistency across the web"}
          </h2>
          <p>
            {"Your business name, address and phone number should match exactly across your website, Google, Apple Maps, Bing, Yelp, Facebook and industry directories. Inconsistent listings confuse both customers and search engines."}
          </p>
          {"\n"}
          <h2 id="s3">
            {"Reviews"}
          </h2>
          <ul>
            <li>
              {"Ask every happy customer, with a direct link, at the moment of satisfaction."}
            </li>
            <li>
              {"Respond to every review within a few days, positive or negative."}
            </li>
            <li>
              {"Never buy reviews or offer incentives that break platform rules."}
            </li>
          </ul>
          {"\n"}
          <h2 id="s4">
            {"Location and service pages"}
          </h2>
          <p>
            {"Create a page for each core service and each important area you serve. Include real details: projects completed nearby, local regulations, travel times and photos. Avoid copying the same page and swapping city names."}
          </p>
          {"\n"}
          <h2 id="s5">
            {"Local links"}
          </h2>
          <p>
            {"Sponsor local teams and events, join your chamber of commerce, partner with complementary businesses and pitch local news stories. Local links are a strong prominence signal that most competitors ignore."}
          </p>
          {"\n"}
          <h2 id="s6">
            {"Track the right way"}
          </h2>
          <p>
            {"Map rankings change by location. Use a grid-based rank tracker to see visibility across your whole service area, not just at your office."}
          </p>
          <div className="card" style={{marginTop: "40px", display: "flex", gap: "16px", alignItems: "center"} as React.CSSProperties}>
            <svg style={{width: "48px", height: "48px", flex: "none"} as React.CSSProperties} viewBox="0 0 32 32" aria-hidden="true">
              <rect width="32" height="32" fill="#0b0b0c" />
              <path d="M7 21.5 6 11l5 4 5-7.5 5 7.5 5-4-1 10.5Z" fill="#ff3d2e" />
              <rect x="7" y="23" width="18" height="2.6" fill="#fff" />
            </svg>
            <div>
              <b style={{color: "var(--ink)"} as React.CSSProperties}>
                {"RankEmpire team"}
              </b>
              <p style={{margin: "0"} as React.CSSProperties}>
                {"Strategists, technical specialists and writers who run SEO programs for US businesses."}
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
