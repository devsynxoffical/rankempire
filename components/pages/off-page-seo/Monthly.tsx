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
              {"Digital PR pitches"}
            </h3>
            <p>
              {"We develop story angles from your data, expertise or company news and pitch them to relevant journalists and editors, aiming for coverage that includes a mention or link."}
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
              {"Brand mention reclamation"}
            </h3>
            <p>
              {"We find sites that mention your business without linking and request a link where appropriate, turning existing recognition into stronger signals for search engines. These requests have a high chance of success."}
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
              {"Citation and review signals"}
            </h3>
            <p>
              {"For local clients, we maintain consistent listings across directories and support review generation, which form part of the off-page picture for map rankings. Consistency here supports the trust Google places in your listing."}
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
              {"Toxic link review"}
            </h3>
            <p>
              {"We assess your backlink profile for manipulative or spammy patterns and advise on cleanup steps, including disavow files only where there is a genuine risk."}
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
