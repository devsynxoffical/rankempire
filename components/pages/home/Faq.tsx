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
              {"Questions, "}
              <em>
                {"answered."}
              </em>
            </h2>
            <p data-r="">
              {"Pick a question and get a straight answer, the same way we would answer on a call."}
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
                {"45+"}
              </b>
              <span>
                {"industry playbooks"}
              </span>
            </div>
          </div>
        </div>
        {"\n"}
        <div className="fx" id="fx">
          <aside className="fx-l">
            {"\n"}
            <label className="fx-search">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              <input id="fxs" type="search" placeholder="Search questions" aria-label="Search questions" />
            </label>
            {"\n"}
            <div className="fx-tabs" id="fxt">
              <button type="button" className="on" data-c="all">
                {"All"}
                <b>
                  {"12"}
                </b>
              </button>
              <button type="button" className="" data-c="general">
                {"Getting started"}
                <b>
                  {"3"}
                </b>
              </button>
              <button type="button" className="" data-c="pricing">
                {"Pricing"}
                <b>
                  {"3"}
                </b>
              </button>
              <button type="button" className="" data-c="results">
                {"Results"}
                <b>
                  {"3"}
                </b>
              </button>
              <button type="button" className="" data-c="technical">
                {"Technical"}
                <b>
                  {"3"}
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
                {" / 12"}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"How long does SEO take to work?\", \"a\": \"Most clients see early movement in 60 to 90 days and meaningful results in 4 to 6 months. Competitive markets and new websites take longer. We share a realistic timeline after the audit.\", \"t\": [\"Audit first\", \"90-day roadmap\", \"Plain English\"]}, {\"c\": \"general\", \"q\": \"What is included in every RankEmpire plan?\", \"a\": \"An initial audit, a prioritized roadmap, the work itself, monthly reporting in plain English and a live dashboard. You also get a named strategist you can reach directly.\", \"t\": [\"Audit first\", \"90-day roadmap\", \"Plain English\"]}, {\"c\": \"general\", \"q\": \"Do you work with businesses outside the US?\", \"a\": \"Our focus is the US market, but we support international SEO for US companies expanding abroad and for brands entering the US.\", \"t\": [\"Audit first\", \"90-day roadmap\", \"Plain English\"]}, {\"c\": \"pricing\", \"q\": \"Do I have to sign a long contract?\", \"a\": \"No. After a 3 month onboarding period, plans are month to month. You can cancel with 30 days notice.\", \"t\": [\"Month to month\", \"No setup fees\", \"Upgrade anytime\"]}, {\"c\": \"pricing\", \"q\": \"Are there setup fees?\", \"a\": \"No setup fees on standard plans. Custom enterprise programs may include a one-time onboarding project, quoted up front.\", \"t\": [\"Month to month\", \"No setup fees\", \"Upgrade anytime\"]}, {\"c\": \"pricing\", \"q\": \"Can I change plans later?\", \"a\": \"Yes. You can upgrade or downgrade at the start of any month.\", \"t\": [\"Month to month\", \"No setup fees\", \"Upgrade anytime\"]}, {\"c\": \"results\", \"q\": \"Do you guarantee first page rankings?\", \"a\": \"No honest SEO company can guarantee rankings, because Google controls the results. We commit to the work, the transparency and the process that produce results.\", \"t\": [\"Search Console\", \"Monthly report\", \"Calls and leads\"]}, {\"c\": \"results\", \"q\": \"How do you report results?\", \"a\": \"Monthly reports cover rankings, traffic, conversions and the work completed, plus a live dashboard you can check anytime.\", \"t\": [\"Search Console\", \"Monthly report\", \"Calls and leads\"]}, {\"c\": \"results\", \"q\": \"What happens if results stall?\", \"a\": \"We review the data with you, explain what we see and adjust the plan. You will never be left guessing.\", \"t\": [\"Search Console\", \"Monthly report\", \"Calls and leads\"]}, {\"c\": \"technical\", \"q\": \"Do you need access to my website?\", \"a\": \"Yes, editor access to your CMS plus read access to Google Search Console and Analytics. We never need ownership.\", \"t\": [\"Any CMS\", \"Core Web Vitals\", \"Your access, your data\"]}, {\"c\": \"technical\", \"q\": \"Which platforms do you work with?\", \"a\": \"WordPress, Shopify, Webflow, Wix, Squarespace, WooCommerce, BigCommerce, Framer and custom builds.\", \"t\": [\"Any CMS\", \"Core Web Vitals\", \"Your access, your data\"]}, {\"c\": \"technical\", \"q\": \"Will SEO slow down my website?\", \"a\": \"No. Our work usually makes sites faster by removing bloat, compressing images and fixing slow templates.\", \"t\": [\"Any CMS\", \"Core Web Vitals\", \"Your access, your data\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
