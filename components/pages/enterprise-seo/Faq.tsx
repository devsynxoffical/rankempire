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
              {"Enterprise SEO "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Common questions about enterprise SEO."}
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
                {"7"}
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
                  {"7"}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"Do you work with in-house SEO teams?\", \"a\": \"Yes. We often act as an extension of an internal team for technical depth or extra capacity.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can you support security and procurement reviews?\", \"a\": \"Yes. We work with NDAs, access controls and vendor onboarding processes.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What makes enterprise SEO different?\", \"a\": \"Scale and complexity. Enterprise sites have more pages, more templates, more teams and more risk. Strategies focus on changes that apply across page types, automation for monitoring and reporting, and processes that keep many contributors aligned. Communication and stakeholder management often take as much effort as the technical and content work itself.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Which tools are used for enterprise SEO?\", \"a\": \"Enterprise programs typically combine a scalable crawler, log file analysis, Google Search Console data exported through the API, rank tracking across large keyword sets and a business intelligence tool for reporting. Platforms such as Botify, Lumar, Conductor or seoClarity are common, though the right stack depends on your site and existing systems.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How do you get SEO work prioritized by engineering?\", \"a\": \"By framing it in the same terms as other product work. That means clear problem statements, affected page types, estimated impact on traffic or revenue, effort estimates and acceptance criteria. Working within existing sprint processes, rather than sending ad hoc requests, makes it far easier for engineering leaders to schedule SEO tasks.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can enterprise SEO work alongside our in house team?\", \"a\": \"Yes, and that is common. Many large companies have internal SEO staff who own day to day work. An external partner can add specialist skills, extra capacity for audits or migrations, an outside perspective on priorities and support for building business cases. Responsibilities should be defined clearly at the start.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How do you manage SEO risk during large migrations?\", \"a\": \"Through detailed planning and testing. That includes full URL mapping, redirect testing in staging, crawl comparisons between old and new sites, checks on canonicals and structured data, and close monitoring after launch. Large migrations are often phased by section so issues can be found and fixed before the whole site moves.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
