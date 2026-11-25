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
              {"SEO in Kansas City: "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Questions Kansas City business owners ask before hiring an SEO company."}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"Do you offer Johnson County SEO?\", \"a\": \"Yes. We plan pages, Google Business Profile service areas and reviews for Overland Park, Olathe, Lenexa, Shawnee, Leawood and the other Johnson County cities you serve.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Should my Kansas City business target both Missouri and Kansas?\", \"a\": \"Only where you work and are licensed. Customers in Overland Park see different map results from customers in Lee's Summit. If you serve both states, we build separate service area content and track each side with its own rank grid.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can a business rank in Overland Park and Olathe?\", \"a\": \"Yes, with service area pages that show real work there, reviews from local customers and an accurate Google Business Profile service area. Johnson County suburbs are competitive, so local proof matters more than citywide keywords.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Does storm season affect local SEO in Kansas City?\", \"a\": \"For roofing, restoration, gutters and tree service, yes. Searches rise sharply after hail and severe storms. Content published before spring has time to rank when demand peaks.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How long does SEO take in Kansas City?\", \"a\": \"Suburban and long-tail searches often move within 60 to 90 days. Competitive Kansas City terms usually take four to six months.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How much does local SEO cost in Kansas City?\", \"a\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
