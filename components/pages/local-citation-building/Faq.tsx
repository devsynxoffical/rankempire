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
              {"Local Citation Building "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Common questions about local citation building."}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"What are local citations?\", \"a\": \"Local citations are online mentions of your business name, address and phone number on directories, maps, social platforms and data aggregators such as Google Business Profile, Apple Business Connect, Bing Places, Yelp and the BBB.\", \"t\": [\"Hand-checked listings\", \"Free citation audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do citations still matter for local SEO?\", \"a\": \"Yes, but as a foundation. Consistent citations help Google and AI assistants trust your details. Quality and accuracy matter far more than the number of listings.\", \"t\": [\"Hand-checked listings\", \"Free citation audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How many citations does a local business need?\", \"a\": \"Most local businesses need 30 to 60 accurate citations: the core platforms, the main data aggregators and the directories for their industry and city. Hundreds of low-quality listings add little.\", \"t\": [\"Hand-checked listings\", \"Free citation audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How long does citation building take?\", \"a\": \"Core listings are usually fixed in 2 to 4 weeks. Some directories take weeks to publish or update, so a full cleanup takes 6 to 12 weeks.\", \"t\": [\"Hand-checked listings\", \"Free citation audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What is NAP consistency?\", \"a\": \"NAP stands for name, address and phone number. Consistency means these details match exactly across your website and every listing.\", \"t\": [\"Hand-checked listings\", \"Free citation audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do you remove duplicate listings?\", \"a\": \"Yes. We find duplicate profiles on Google, Yelp, Bing and other directories and merge or remove them through each platform's process.\", \"t\": [\"Hand-checked listings\", \"Free citation audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do I keep the listings if I stop?\", \"a\": \"Yes. Listings are created under your business with logins handed over to you, so they stay live if you stop working with us.\", \"t\": [\"Hand-checked listings\", \"Free citation audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
