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
              {"E-commerce SEO "}
              <em>
                {"FAQ"}
              </em>
            </h2>
            <p data-r="">
              {"Common questions about e-commerce SEO."}
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
      <script dangerouslySetInnerHTML={{ __html: "window.FXDATA=[{\"c\": \"general\", \"q\": \"Which platforms do you work with?\", \"a\": \"Shopify, WooCommerce, BigCommerce, Magento and custom builds.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Will SEO changes affect my store design?\", \"a\": \"Most changes are invisible to shoppers. Where copy is added, we design it to fit your layout.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How do you measure e-commerce SEO success?\", \"a\": \"Organic revenue, transactions and conversion rate from organic search, reported monthly.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Which platform is best for e-commerce SEO?\", \"a\": \"Shopify, WooCommerce, BigCommerce and Magento can all rank well when configured correctly. Each has tradeoffs. Shopify has a fixed URL structure and limited control over some files, WooCommerce depends on plugin quality, and Magento needs careful handling of layered navigation. The platform matters less than how categories, filters, duplicates and content are managed on it.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Should I write unique descriptions for every product?\", \"a\": \"Prioritize unique descriptions for your best selling and highest margin products first, especially if your current copy comes from the manufacturer. Many retailers share that same text, which gives search engines little reason to rank your page. For very large catalogs, templates that combine unique attributes with original copy can scale the work sensibly.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"What should I do with out of stock products?\", \"a\": \"If the product will return, keep the page live, mark it out of stock in your structured data and suggest alternatives. If it is permanently discontinued, redirect it to the closest matching product or category when one exists. If nothing relevant exists, a 404 or 410 status is acceptable. Avoid redirecting everything to the homepage.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"Does blog content help an online store rank?\", \"a\": \"Yes, when it targets real questions shoppers ask before buying and links to relevant categories and products. A guide on how to choose a running shoe, for example, can attract searchers who are not ready for a product page yet. Content unrelated to your products rarely helps sales and can dilute the focus of your site.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}, {\"c\": \"general\", \"q\": \"How do I handle product variants for SEO?\", \"a\": \"It depends on whether people search for the variant. If shoppers search for a specific color or size, a separate indexable page may make sense. If not, keep variants on one product page and use selectors or canonical tags to avoid duplicate URLs competing with each other in search results.\", \"t\": [\"Plain English\", \"Free audit\", \"No contracts\"]}];window.FXMAIL=\"hello@rankempire.com\"" }} />
    </section>
  );
}
