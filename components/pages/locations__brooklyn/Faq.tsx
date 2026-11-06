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
              {"SEO in Brooklyn: "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Questions Brooklyn business owners ask before hiring an SEO company."}
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
                {"5"}
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
                  {"5"}
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
                {" / 5"}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"Should a Brooklyn business target Brooklyn or New York City keywords?\", \"a\": \"Start with Brooklyn and your neighborhood. Citywide NYC terms are dominated by Manhattan firms and national brands, while Brooklyn and neighborhood searches have local competitors and customers who are already nearby. Once those rank, we expand to wider NYC terms where it makes commercial sense.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How small is the local search radius in Brooklyn?\", \"a\": \"Often just a few blocks for walk-in categories like cafes, salons and dentists, and wider for service businesses that travel. We measure it with a rank grid around your address so you can see exactly where you appear and where you drop off.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do I need separate pages for Williamsburg, Park Slope and other neighborhoods?\", \"a\": \"Only for neighborhoods you genuinely serve with something specific to say. A page per neighborhood with swapped names rarely ranks. Pages that mention real landmarks, transit, projects you completed there and reviews from those customers do.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can you help a Brooklyn business reach customers who search in other languages?\", \"a\": \"Yes. If your staff serves Spanish, Russian, Chinese or Yiddish speaking customers, we build properly written pages and profile details for those audiences instead of automatic translations, which often ranks with far less competition.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How much does local SEO cost in Brooklyn?\", \"a\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
