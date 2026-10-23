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
              {"Local SEO "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Common questions about local SEO."}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"How long does local SEO take?\", \"a\": \"Many businesses see map pack movement within 60 to 90 days. Competitive markets and new profiles take longer.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can you rank me in a city where I have no address?\", \"a\": \"Google heavily favors proximity for map results, so we focus map work on areas near your locations and use organic location pages to win wider areas.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do you handle multiple locations?\", \"a\": \"Yes. We manage profiles, pages and reporting for multi-location brands with one consistent system.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How long does local SEO take to work?\", \"a\": \"Profile fixes and citation cleanup can affect map visibility within a few weeks, once Google processes the changes. Building reviews, local links and strong location pages takes longer, often several months. Markets with many established competitors, such as personal injury law or HVAC in large metros, generally take more time than smaller towns or niche services.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do I need a physical address for local SEO?\", \"a\": \"You need a real address to verify a Google Business Profile, but service area businesses can hide it and list the areas they serve instead. Virtual offices and coworking addresses often violate Google's guidelines and can lead to suspension. If you serve customers at their location, set up your profile as a service area business.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How do reviews affect local rankings?\", \"a\": \"Google lists reviews as a factor in local prominence. The number, recency and content of reviews, along with your responses, all contribute. Reviews also strongly influence whether searchers call you after seeing your listing. Never buy reviews or offer incentives for them, because that violates Google's policies and can lead to removed reviews or a suspended profile.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can I rank in cities where I do not have an office?\", \"a\": \"Ranking in the map pack outside your verified location is difficult because proximity is a major factor. You can still rank in standard organic results for searches in nearby cities with strong, unique service area pages that show real work and details for each area. Some businesses open legitimate additional locations to compete in the map pack.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What are local citations?\", \"a\": \"Citations are online mentions of your business name, address and phone number on directories, social platforms and data aggregators such as Yelp, Apple Business Connect and Bing Places. Consistent citations help search engines confirm your business details. Inconsistent ones, often caused by moves or old phone numbers, can create confusion and should be corrected.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
