export default function Faq() {
  return (
    <section className="fxs" id="faq" aria-labelledby="fx-h">
      <div className="wrap">
        {"\\n"}
        <div className="fx-head">
          <div>
            <span className="eyb pill" data-r="">
              <i></i>
              {"FAQ"}
            </span>
            <h2 id="fx-h" className="h2" data-r="">
              {"Small Business SEO "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Common questions about SEO services for small business."}
            </p>
          </div>
          {"\\n"}
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
                {"7"}
              </b>
              <span>
                {"questions answered"}
              </span>
            </div>
          </div>
        </div>
        {"\\n"}
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
                  {"7"}
                </b>
              </button>
            </div>
            <ol className="fx-list" id="fxl"></ol>
            <div className="fx-empty" id="fxe">
              {"No match. Ask it below and we will answer."}
            </div>
          </aside>
          {"\\n"}
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
                {" / 7"}
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
            {"\\n"}
            <div className="fx-chat" id="fxchat" aria-live="polite"></div>
            <div className="fx-rel" id="fxr"></div>
            {"\\n"}
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
        {"\\n"}
      </div>
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"How much does SEO cost for a small business?\", \"a\": \"Most small businesses spend $500 to $2,500 a month. RankEmpire's local plans start at $599 a month and are month to month after a three-month onboarding.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How long does small business SEO take?\", \"a\": \"Map pack and long-tail searches often move within 60 to 90 days; competitive terms take four to six months. Impressions in Search Console rise first, then rankings, then calls.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Is SEO worth it for a small business?\", \"a\": \"Yes when customers search for what you sell. A few extra jobs or patients a month usually cover a local plan. It is a poor fit if nobody searches for your service or you need leads this week.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do I need a Google Business Profile?\", \"a\": \"Yes, for any business that serves customers locally. It decides most map pack results and it is free.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can I do small business SEO myself?\", \"a\": \"The basics, yes: a complete profile, review requests and one page per service. An agency helps when time is short or the market is competitive.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What do you need from me to start?\", \"a\": \"Access to your website, Google Business Profile and Search Console, a list of your services and areas, and 30 minutes for a kick-off call.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do you lock small businesses into contracts?\", \"a\": \"No. After a three-month onboarding, plans are month to month with 30 days' notice.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
