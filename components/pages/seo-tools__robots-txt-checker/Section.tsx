export default function Section() {
  return (
    <section style={{paddingBottom: "clamp(60px,7vw,100px)"} as React.CSSProperties}>
      <div className="wrap" style={{maxWidth: "1060px"} as React.CSSProperties}>
        <div className="tool xtool" data-tool="robots" data-name="Robots.txt Checker" data-r="">
          <div className="form">
            <label>
              {"robots.txt content"}
              <textarea id="t-html" placeholder="Open yoursite.com/robots.txt, copy all and paste it here."></textarea>
            </label>
            {"\n"}
            <div className="two">
              <label>
                {"URL path to test"}
                <input id="t-path" defaultValue="/blog/my-post/" />
              </label>
              <label>
                {"User agent"}
                <select id="t-ua">
                  <option>
                    {"Googlebot"}
                  </option>
                  <option>
                    {"Bingbot"}
                  </option>
                  <option>
                    {"GPTBot"}
                  </option>
                  <option>
                    {"*"}
                  </option>
                </select>
              </label>
            </div>
            {"\n"}
            <div className="row">
              <button className="btn ac" id="t-run" type="button">
                {"Test URL"}
              </button>
              <button className="btn ln" id="t-demo" type="button">
                {"Try a sample"}
              </button>
            </div>
          </div>
          <div className="out" id="t-out" aria-live="polite"></div>
        </div>
        <div className="note" style={{marginTop: "16px"} as React.CSSProperties}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M12 3 4 6v6c0 5 3.5 8 8 9 4.5-1 8-4 8-9V6Z" />
            <path d="m9 12 2 2 4-4" />
          </svg>
          <span>
            {"Free and private: this tool runs entirely in your browser. Want experts to review everything? "}
            <a className="tlink" href="/seo-audit/">
              {"Get a professional SEO audit"}
            </a>
          </span>
        </div>
      </div>
    </section>
  );
}
