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
              {"SEO in Nashville: "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Questions Nashville business owners ask before hiring an SEO company."}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"Should my Nashville business target tourists or locals?\", \"a\": \"It depends on your category. Restaurants, tours and transportation often earn most of their traffic from visitors searching on their phones. Home services, medical practices and professional services depend on residents. We build the plan around the audience that brings revenue.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Is SEO in Nashville harder for medical practices?\", \"a\": \"It can be. Nashville is a major healthcare center with well-funded competitors, so medical practices need strong provider pages, treatment content, credentials and reviews. Specialty and neighborhood searches are usually the fastest place to start.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Should I target Franklin, Brentwood and Murfreesboro separately?\", \"a\": \"If you serve them, yes. These suburbs have their own searches and often thinner competition than downtown. Each page needs real local detail, such as projects, reviews and the services offered there, not just a swapped city name.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can you run a free SEO audit for my Nashville business?\", \"a\": \"Yes. The free audit covers technical health, Google Business Profile, local rankings across your service area, content and competitors, and comes with a prioritized plan in two business days.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How much does local SEO cost in Nashville?\", \"a\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
