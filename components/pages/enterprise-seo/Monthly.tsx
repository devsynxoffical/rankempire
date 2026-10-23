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
              {"Template level optimization"}
            </h3>
            <p>
              {"We analyze performance by page type and recommend changes to templates, such as titles, internal link modules and structured data, that improve thousands of pages with one implementation."}
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
              {"Business cases for engineering"}
            </h3>
            <p>
              {"We write prioritized requirements with expected benefits, effort estimates and acceptance criteria, formatted for your team's sprint process, so SEO work can compete fairly for development resources."}
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
              {"Release monitoring and alerts"}
            </h3>
            <p>
              {"We set up automated checks for robots rules, canonicals, status codes and rendering on key templates, so regressions are caught quickly after deployments instead of weeks later."}
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
              {"Governance and training"}
            </h3>
            <p>
              {"We document SEO standards for content, product and regional teams, and run training sessions so search considerations are built into everyday workflows, not added at the end."}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
