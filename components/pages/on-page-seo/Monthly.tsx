export default function Monthly() {
  return (
    <section className="x xmonth" id="monthly">
      <div className="wrap">
        <div className="xh lt" data-r="">
          <span className="xe">
            <i></i>
            {"Every month"}
          </span>
          <h2 className="h2">
            {"What you get each month"}
          </h2>
          <p>
            {"What you get every month, visible in your dashboard."}
          </p>
        </div>
        <div className="xm-g">
          <article className="xm" style={{"--c": "#ec4e3b"} as React.CSSProperties} data-r="">
            <span className="wk">
              {"Week 1"}
            </span>
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7" />
              </svg>
            </span>
            <h3>
              {"Intent matched page rewrites"}
            </h3>
            <p>
              {"We compare your page against current top results for its target query, then restructure and rewrite content to fit the expected format and fill gaps searchers care about."}
            </p>
          </article>
          <article className="xm" style={{"--c": "#2b55e8"} as React.CSSProperties} data-r="">
            <span className="wk">
              {"Week 2"}
            </span>
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M10 14a4 4 0 0 0 5.7 0l3-3a4 4 0 0 0-5.7-5.7l-1 1M14 10a4 4 0 0 0-5.7 0l-3 3a4 4 0 0 0 5.7 5.7l1-1" />
              </svg>
            </span>
            <h3>
              {"Title and meta testing"}
            </h3>
            <p>
              {"We write specific, accurate titles and descriptions for priority pages, then review Search Console click data after changes to refine what earns the most clicks."}
            </p>
          </article>
          <article className="xm" style={{"--c": "#e37a38"} as React.CSSProperties} data-r="">
            <span className="wk">
              {"Week 3"}
            </span>
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
            </span>
            <h3>
              {"Keyword cannibalization fixes"}
            </h3>
            <p>
              {"We find pages competing for the same terms and resolve the overlap by merging, redirecting or refocusing content, so each query has one clear page to rank."}
            </p>
          </article>
          <article className="xm" style={{"--c": "#4a9f5f"} as React.CSSProperties} data-r="">
            <span className="wk">
              {"Week 4"}
            </span>
            <span className="ic">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <circle cx="12" cy="12" r="3" />
                <path d="M19 12a7 7 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a7 7 0 0 0-2-1.2L14 3h-4l-.5 2.6a7 7 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A7 7 0 0 0 5 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a7 7 0 0 0 2 1.2L10 21h4l.5-2.6a7 7 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6c.1-.4.1-.8.1-1.2Z" />
              </svg>
            </span>
            <h3>
              {"Internal link mapping"}
            </h3>
            <p>
              {"We add contextual links from related pages to your priority pages using descriptive anchor text, helping both search engines and visitors find your most important content."}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
