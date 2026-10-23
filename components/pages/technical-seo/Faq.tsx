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
              {"Technical SEO "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Common questions about technical SEO."}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"Do you need access to our developers?\", \"a\": \"It helps. We can implement directly on most CMS platforms or provide developer-ready tickets for your team.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What tools do you use?\", \"a\": \"Screaming Frog, Sitebulb, Google Search Console, PageSpeed Insights, Lighthouse and server log analysis.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can you help with a site migration?\", \"a\": \"Yes. Migrations are one of the highest-risk moments for SEO and we plan redirects and checks before launch.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How often should a technical SEO audit be done?\", \"a\": \"A full technical audit once or twice a year suits most sites, with lighter monthly crawls to catch new problems. Run an additional audit before and after any major change, such as a redesign, migration, platform switch or URL restructure. Large e-commerce and SaaS sites that deploy frequently benefit from continuous monitoring.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do Core Web Vitals affect rankings?\", \"a\": \"Google uses page experience signals, including Core Web Vitals, as part of its ranking systems, but relevance and content quality carry more weight. Strong vitals will not rescue a page that does not answer the query. Poor performance can still hurt user engagement and conversions, so improving it is worthwhile for both visitors and search.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Can Google index JavaScript websites?\", \"a\": \"Google can render JavaScript, but it adds complexity and can delay indexing. Problems arise when key content or links load only after user interaction, or when rendering fails. Server side rendering or static generation for important pages reduces the risk. Test with the URL Inspection tool in Search Console to see what Google actually renders.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What is crawl budget and should I worry about it?\", \"a\": \"Crawl budget is the number of URLs a search engine is willing and able to crawl on your site in a given period. Small sites with a few hundred pages rarely need to think about it. Large stores and sites with many filters, parameters or generated pages should manage it to keep important pages crawled regularly.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Do you implement technical fixes or just recommend them?\", \"a\": \"Both options are available. Some clients have in house developers who prefer detailed tickets, while others want us to make changes directly in their CMS or codebase. For platforms like WordPress and Shopify, we can implement many fixes ourselves. For custom stacks, we usually work alongside your engineering team.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
