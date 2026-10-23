export default function Faq() {
  return (
    <section className="fxs" id="faq" aria-labelledby="fx-h">
      <div className="wrap">
        {"\n"}
        <div className="fx-head">
          <div>
            <span className="eyb pill" data-r="">
              <i></i>
              {"FAQ"}
            </span>
            <h2 id="fx-h" className="h2" data-r="">
              {"SaaS SEO "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Common questions about SaaS SEO."}
            </p>
          </div>
          {"\n"}
          <div className="fx-stats" data-r="">
            <div>
              <b>
                {"2 days"}
              </b>
              <span>
                {"to your free audit"}
              </span>
            </div>
            <div>
              <b>
                {"<24h"}
              </b>
              <span>
                {"reply time"}
              </span>
            </div>
            <div>
              <b>
                {"8"}
              </b>
              <span>
                {"questions answered"}
              </span>
            </div>
          </div>
        </div>
        {"\n"}
        <div className="fx" id="fx">
          <aside className="fx-l">
            <label className="fx-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              <input id="fxs" type="search" placeholder="Search questions" aria-label="Search questions" />
            </label>
            <div className="fx-tabs" id="fxt">
              <button type="button" className="on" data-c="all">
                {"All"}
                <b>
                  {"8"}
                </b>
              </button>
            </div>
            <ol className="fx-list" id="fxl"></ol>
            <div className="fx-empty" id="fxe">
              {"No match. Ask it below and we will answer."}
            </div>
          </aside>
          {"\n"}
          <div className="fx-r">
            <div className="fx-top">
              <span className="fx-av">
                {"RE"}
              </span>
              <div>
                <b>
                  {"RankEmpire"}
                </b>
                <small>
                  {"Usually replies within a day"}
                </small>
              </div>
              <span className="fx-ct" id="fxc">
                <em>
                  {"01"}
                </em>
                {" / 8"}
              </span>
              <div className="fx-nav">
                <button type="button" id="fxp" aria-label="Previous question">
                  {"←"}
                </button>
                <button type="button" id="fxn" aria-label="Next question">
                  {"→"}
                </button>
              </div>
            </div>
            {"\n"}
            <div className="fx-chat" id="fxchat" aria-live="polite"></div>
            <div className="fx-rel" id="fxr"></div>
            {"\n"}
            <form className="fx-ask" id="fxa">
              <input id="fxq" placeholder="Ask your own question..." aria-label="Ask your own question" />
              <button type="submit">
                <span>
                  {"Send"}
                </span>
                {" ↗"}
              </button>
            </form>
          </div>
        </div>
        {"\n"}
      </div>
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"Do you write technical SaaS content?\", \"a\": \"Yes. Our writers interview your team and use your product so content is accurate and specific.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How fast can SaaS SEO produce leads?\", \"a\": \"Bottom-funnel pages often generate signups within the first few months, while authority content compounds over 6 to 12 months.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can you work with our in-house content team?\", \"a\": \"Yes. We can lead strategy and technical SEO while your team writes, or the other way around.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Should SaaS companies create comparison and alternative pages?\", \"a\": \"Yes, if they are honest and useful. Buyers searching for alternatives to a competitor are close to a decision, and a clear page explaining differences, ideal use cases and pricing models helps them evaluate. Avoid misleading claims about competitors. Accurate, fair comparisons build more trust and are less likely to create legal or reputational problems.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How is SaaS SEO different from regular SEO?\", \"a\": \"SaaS SEO focuses on software buying journeys, which often involve long evaluation periods, multiple stakeholders and trials. Content needs to explain workflows and use cases, not just describe features. It also deals with technical issues specific to software companies, such as app subdomains, documentation sites, JavaScript frameworks and frequent product changes that leave old pages outdated.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How long does SaaS SEO take to drive signups?\", \"a\": \"Most SaaS companies see meaningful movement after several months, depending on domain authority, competition and how fast content gets published. Bottom of funnel pages, such as integration and comparison pages, often convert sooner than broad educational content. A newer domain in a crowded category should expect a longer ramp than an established one.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Should our docs be indexed by Google?\", \"a\": \"Public documentation often ranks for specific how to and error searches and can attract existing and potential users. Index docs that help people understand or use the product, and keep account specific, staging or internal pages out of the index. Make sure docs link back to the marketing site where relevant.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What metrics should we track for SaaS SEO?\", \"a\": \"Track organic signups, trials or demo requests by landing page, along with assisted conversions where your analytics supports them. Supporting metrics include impressions and clicks in Search Console, rankings for priority terms and indexed page counts. Pageviews alone can be misleading, since educational traffic may convert slowly or not at all.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
