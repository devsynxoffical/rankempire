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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"pricing\", \"q\": \"How much do SEO services cost in the USA?\", \"a\": \"Local SEO plans start at $599 a month for one location, $1,199 for up to three locations and $2,199 for four or more. National and ecommerce SEO are quoted after an audit.\", \"t\": [\"Audit first\", \"90-day roadmap\", \"Plain English\"]}, {\"c\": \"technical\", \"q\": \"What is the difference between SEO, AEO and GEO?\", \"a\": \"SEO ranks your pages in search results. AEO (answer engine optimization) structures content so it is chosen as a direct answer. GEO (generative engine optimization) helps AI tools like ChatGPT cite your business.\", \"t\": [\"Audit first\", \"90-day roadmap\", \"Plain English\"]}, {\"c\": \"results\", \"q\": \"How long does SEO take to work?\", \"a\": \"Most sites see movement in Search Console within 4 to 12 weeks, and stronger results over 6 to 12 months, depending on competition and the site's starting point.\", \"t\": [\"Audit first\", \"90-day roadmap\", \"Plain English\"]}, {\"c\": \"results\", \"q\": \"Do you show real results?\", \"a\": \"Yes. The homepage shows live Search Console reports from client accounts, shared with permission, with clicks, impressions, CTR and position.\", \"t\": [\"Audit first\", \"90-day roadmap\", \"Plain English\"]}, {\"c\": \"general\", \"q\": \"Do you work with businesses across the US?\", \"a\": \"Yes. We work with local, multi-location and national businesses across the US, with city pages for markets like Dallas, Houston, Chicago and Phoenix.\", \"t\": [\"Audit first\", \"90-day roadmap\", \"Plain English\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
