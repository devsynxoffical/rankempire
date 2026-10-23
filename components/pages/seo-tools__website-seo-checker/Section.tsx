export default function Section() {
  return (
    <section style={{paddingBottom: "clamp(60px,7vw,100px)"} as React.CSSProperties}>
      <div className="wrap" style={{maxWidth: "1060px"} as React.CSSProperties}>
        <div className="tool xtool" data-tool="audit" data-name="Website SEO Checker" data-r="">
          <div className="form">
            <label>
              {"Page URL (optional, for your reference)"}
              <input id="t-url" placeholder="https://example.com/page" />
            </label>
            {"\n"}
            <label>
              {"Page HTML source"}
              <textarea id="t-html" placeholder="Open your page, press Ctrl+U (Cmd+Option+U on Mac), copy everything and paste it here."></textarea>
            </label>
            {"\n"}
            <div className="row">
              <button className="btn ac" id="t-run" type="button">
                {"Analyze page"}
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
