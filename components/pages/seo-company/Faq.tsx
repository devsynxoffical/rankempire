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
              {"SEO Company "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Common questions about SEO company."}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"What makes RankEmpire different from other SEO companies?\", \"a\": \"We keep the whole job in one team. The people who audit your site are the same people who fix it, write for it and report on it, so nothing gets lost between agencies or freelancers.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do you lock clients into long contracts?\", \"a\": \"No. Plans run month to month after an initial 3 month onboarding period, because SEO needs that long to show direction.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Who owns the work?\", \"a\": \"You do. Every page, account, report and piece of content we create belongs to your business from day one.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How much does an SEO company cost?\", \"a\": \"Pricing depends on scope, competition and how much content or technical work is needed. Local businesses in smaller markets usually need less monthly work than a national e-commerce store or a SaaS company competing for software terms. Ask any agency to show exactly which tasks the retainer covers each month, so you can compare proposals on work delivered rather than headline price.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How long does it take to see results from an SEO company?\", \"a\": \"Technical fixes and on-page improvements can show movement within weeks once Google recrawls the pages. Building authority and ranking for competitive terms usually takes several months of consistent work. The timeline depends on your site's current state, how strong competitors are and how quickly changes get implemented. Be cautious of anyone who promises a specific ranking by a specific date.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can an SEO company guarantee first page rankings?\", \"a\": \"No honest SEO company can guarantee rankings, because Google controls its algorithm and results change constantly. What an agency can commit to is a clear scope of work, transparent reporting and sound methods that follow Google's guidelines. Guarantees are often a warning sign of shortcuts such as low quality link schemes that can lead to penalties.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What should I ask before hiring an SEO company?\", \"a\": \"Ask how they will diagnose your site, what they deliver each month, who does the work, how they build links and how they report results. Request examples of their process and ask what they need from you, such as developer access or approvals. A good agency will also tell you when SEO is not the right channel for a goal.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do I need to sign a long-term SEO contract?\", \"a\": \"Many agencies use month to month agreements or short initial terms. SEO does need several months to show its full effect, so a commitment of at least a few months is reasonable. Make sure the contract states who owns the content, accounts and data created, and what happens to them if you end the engagement.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
