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
              {"SEO for limousine companies: "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Questions limousine companies ask before hiring an SEO company."}
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
                {"6"}
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
                  {"6"}
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
                {" / 6"}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"How can a limo company compete with rideshare apps in search?\", \"a\": \"By targeting the bookings apps do not serve well: weddings, proms, corporate accounts, airport meet-and-greet and group travel. Pages for each occasion with clear rates, plus strong reviews, win those searches.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Should we publish our hourly rates?\", \"a\": \"Yes, as starting rates with minimum hours per vehicle type. Riders compare quickly, and published rates filter inquiries and give search engines and AI assistants specific numbers to show.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do airport pages really help?\", \"a\": \"Airport transfers are the most frequent limo searches. A page per airport with flat rates, pickup instructions and flight tracking ranks for those searches and converts well because the intent is immediate.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How do we rank in more than one city?\", \"a\": \"Set an accurate service area on the Google Business Profile, publish genuine service area pages with local venues and hotels, and earn reviews from riders in those cities. One profile per real garage location if you have several.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How long does SEO take for limousine companies?\", \"a\": \"Map pack and airport searches often move within 60 to 90 days. Wedding and corporate searches take four to six months, since they depend on content depth and venue partnerships.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What does SEO for limousine companies cost?\", \"a\": \"Local plans start at $599 per month for one location. Operators covering several cities or airports usually need the Pro plan. We recommend a plan after a free audit.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
