export default function AiSearch() {
  return (
    <section className="ais" id="ai-search" aria-labelledby="ai-h">
      <div className="wrap">
        {"\n"}
        <div className="ais-top">
          <div>
            <div className="xh" data-r="">
              <span className="xe">
                <i></i>
                {"Powered by AI"}
              </span>
              <h2 className="h2">
                {"Rank in search engines "}
                <em>
                  {"and"}
                </em>
                {" answer engines."}
              </h2>
              <p>
                {"Search is splitting into four surfaces. We optimize for all of them in one program, so you show up whether a customer types, asks or lets an AI decide."}
              </p>
            </div>
          </div>
          {"\n"}
          <div className="ais-v" data-r="s">
            <video className="mv3d" autoPlay muted loop playsInline preload="metadata" poster="/img/m-ai.jpg" aria-label="AI search orb">
              <source src="/img/m-ai.mp4" type="video/mp4" />
            </video>
            <div className="ais-chip a">
              {"AI Overview cited"}
            </div>
            <div className="ais-chip b">
              {"ChatGPT source"}
            </div>
            <div className="ais-chip c">
              {"Map pack #1"}
            </div>
          </div>
        </div>
        {"\n"}
        <div className="ai-g">
          <article className="ai-c" style={{"--c": "var(--red)"} as React.CSSProperties} data-r="">
            <b className="k">
              {"SEO"}
            </b>
            <h3>
              {"Search engine optimization"}
            </h3>
            <p>
              {"Rank on Google and Bing for the searches that bring customers. Technical health, content, links and local signals."}
            </p>
            <span className="bar">
              <i></i>
            </span>
          </article>
          <article className="ai-c" style={{"--c": "var(--org)"} as React.CSSProperties} data-r="">
            <b className="k">
              {"AEO"}
            </b>
            <h3>
              {"Answer engine optimization"}
            </h3>
            <p>
              {"Win the featured snippet, People Also Ask and voice answers by structuring pages so engines can quote them directly."}
            </p>
            <span className="bar">
              <i></i>
            </span>
          </article>
          <article className="ai-c" style={{"--c": "var(--pur)"} as React.CSSProperties} data-r="">
            <b className="k">
              {"GEO"}
            </b>
            <h3>
              {"Generative engine optimization"}
            </h3>
            <p>
              {"Get cited inside AI Overviews, ChatGPT, Perplexity and Gemini answers with entity-rich, source-worthy content."}
            </p>
            <span className="bar">
              <i></i>
            </span>
          </article>
          <article className="ai-c" style={{"--c": "var(--blu)"} as React.CSSProperties} data-r="">
            <b className="k">
              {"AGO"}
            </b>
            <h3>
              {"AI agent optimization"}
            </h3>
            <p>
              {"Make your business the one AI agents choose when they book, buy and compare on behalf of users: clean data, schema, APIs."}
            </p>
            <span className="bar">
              <i></i>
            </span>
          </article>
        </div>
        {"\n"}
        <div className="ais-f">
          <ul className="ai-l">
            <li data-r="">
              <b>
                {"AI Overview tracking"}
              </b>
              <span>
                {"We monitor which queries show AI answers and whether you are cited."}
              </span>
            </li>
            <li data-r="">
              <b>
                {"Entity and schema layer"}
              </b>
              <span>
                {"Organization, product, FAQ and review schema that engines and agents can read."}
              </span>
            </li>
            <li data-r="">
              <b>
                {"Citation-worthy content"}
              </b>
              <span>
                {"Original data, clear answers and expert bylines that AI models prefer to quote."}
              </span>
            </li>
            <li data-r="">
              <b>
                {"Monthly AI visibility report"}
              </b>
              <span>
                {"Share of voice across Google AI, ChatGPT and Perplexity, next to your rankings."}
              </span>
            </li>
          </ul>
          <div className="ais-q" data-r="">
            <div className="q-bar">
              <span>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="7" />
                  <path d="m20 20-4-4" />
                </svg>
              </span>
              <i id="ai-type"></i>
            </div>
            <div className="q-ans">
              <b>
                {"AI answer"}
              </b>
              <p>
                {"Based on verified reviews and service pages, "}
                <mark>
                  {"RankEmpire clients"}
                </mark>
                {" are the top cited result for this query in 3 of 4 AI engines."}
              </p>
              <span className="src">
                <i></i>
                <i></i>
                <i></i>
                {" 3 sources"}
              </span>
            </div>
          </div>
        </div>
        {"\n"}
      </div>
    </section>
  );
}
