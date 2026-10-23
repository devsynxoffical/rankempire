export default function Rankgrid() {
  return (
    <section className="rg" id="rankgrid" aria-labelledby="rg-h">
      <div className="wrap">
        <div className="rg-g">
          {"\n"}
          <div className="rg-l">
            <div className="xh" data-r="">
              <span className="xe">
                <i></i>
                {"Local rank grid"}
              </span>
              <h2 className="h2">
                {"See exactly where you rank, street by street."}
              </h2>
              <p>
                {"We track the map pack from 121 points across your service area, not just from your office. Pick a keyword, drag the slider and watch the grid turn green."}
              </p>
            </div>
            {"\n"}
            <div className="rg-kw" role="group" aria-label="Keyword">
              <button type="button" className="on" data-k="0">
                {"dumpster rental near me"}
              </button>
              <button type="button" className="" data-k="1">
                {"roll off dumpster"}
              </button>
              <button type="button" className="" data-k="2">
                {"junk removal charleston"}
              </button>
            </div>
            {"\n"}
            <div className="rg-sl">
              <span>
                {"Before"}
              </span>
              <input type="range" min="0" max="100" defaultValue="100" id="rg-range" aria-label="Before and after" />
              <span>
                {"After"}
              </span>
            </div>
            {"\n"}
            <div className="rg-st">
              <div style={{"--c": "var(--grn)"} as React.CSSProperties}>
                <b id="rg-top3">
                  {"0"}
                </b>
                <span>
                  {"points in top 3"}
                </span>
              </div>
              <div style={{"--c": "var(--blu)"} as React.CSSProperties}>
                <b id="rg-avg">
                  {"0"}
                </b>
                <span>
                  {"average position"}
                </span>
              </div>
              <div style={{"--c": "var(--red)"} as React.CSSProperties}>
                <b id="rg-win">
                  {"0%"}
                </b>
                <span>
                  {"of the area won"}
                </span>
              </div>
            </div>
            {"\n"}
            <div data-r="">
              <a className="btn ac" href="/local-seo/">
                {"Explore local SEO"}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
          </div>
          {"\n"}
          <div className="rg-map" data-r="s">
            <img src="/img/mapbase.webp" alt="" loading="lazy" />
            <div className="rg-grid" id="rg-grid">
              <i style={{"--r": "0", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "0", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "1", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "2", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "3", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "4", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "5", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "6", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "7", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "8", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "9", "--c": "10"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "0"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "1"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "2"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "3"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "4"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "5"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "6"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "7"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "8"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "9"} as React.CSSProperties}></i>
              <i style={{"--r": "10", "--c": "10"} as React.CSSProperties}></i>
            </div>
            <div className="rg-tip" id="rg-tip" hidden></div>
            <div className="rg-leg">
              <span>
                <i style={{background: "#3ec36a"} as React.CSSProperties}></i>
                {"1 to 3"}
              </span>
              <span>
                <i style={{background: "#b9e35a"} as React.CSSProperties}></i>
                {"4 to 6"}
              </span>
              <span>
                <i style={{background: "#f4c542"} as React.CSSProperties}></i>
                {"7 to 10"}
              </span>
              <span>
                <i style={{background: "#ec4e3b"} as React.CSSProperties}></i>
                {"11+"}
              </span>
            </div>
            <div className="rg-pin" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M12 21s7-6.2 7-12a7 7 0 0 0-14 0c0 5.8 7 12 7 12Z" />
                <circle cx="12" cy="9" r="2.5" />
              </svg>
              <b>
                {"Your business"}
              </b>
            </div>
          </div>
          {"\n"}
        </div>
      </div>
      <script dangerouslySetInnerHTML={{ __html: "window.RGDATA=[{\"k\": \"dumpster rental near me\", \"after\": [[3, 4, 4, 4, 4, 4, 3, 2, 2, 2, 2], [4, 4, 4, 4, 4, 3, 2, 2, 2, 2, 2], [4, 4, 4, 3, 2, 2, 2, 2, 2, 2, 4], [5, 1, 3, 2, 2, 2, 2, 2, 2, 2, 4], [5, 4, 3, 2, 1, 1, 2, 2, 1, 2, 3], [5, 5, 1, 2, 1, 2, 1, 2, 1, 2, 4], [3, 6, 2, 3, 1, 1, 1, 2, 2, 4, 4], [5, 5, 5, 4, 4, 4, 3, 3, 2, 5, 4], [5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 7], [5, 5, 5, 5, 6, 5, 7, 6, 7, 8, 7], [5, 5, 5, 5, 5, 7, 6, 6, 6, 8, 9]], \"before\": [[12, 14, 15, 13, 11, 9, 8, 9, 11, 14, 16], [11, 12, 13, 12, 9, 8, 7, 8, 10, 13, 15], [10, 11, 11, 9, 8, 7, 7, 8, 9, 12, 16], [13, 9, 10, 8, 7, 6, 6, 7, 8, 11, 15], [12, 10, 9, 7, 6, 5, 6, 7, 6, 10, 14], [14, 12, 8, 7, 5, 6, 5, 7, 6, 10, 15], [11, 15, 9, 8, 6, 5, 5, 7, 8, 13, 16], [16, 15, 14, 12, 11, 10, 9, 10, 8, 15, 17], [18, 17, 16, 15, 15, 14, 12, 14, 15, 16, 20], [19, 18, 17, 16, 17, 15, 18, 17, 18, 20, 20], [20, 19, 18, 17, 16, 19, 18, 18, 19, 20, 20]]}, {\"k\": \"roll off dumpster\", \"after\": [[2, 2, 3, 3, 3, 3, 2, 2, 1, 2, 2], [2, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2], [3, 3, 3, 2, 2, 2, 1, 1, 2, 2, 3], [4, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3], [4, 3, 2, 2, 1, 1, 1, 1, 1, 2, 3], [4, 4, 1, 2, 1, 1, 1, 2, 1, 2, 3], [3, 4, 2, 2, 1, 1, 1, 2, 2, 3, 3], [4, 4, 4, 3, 3, 3, 2, 3, 2, 4, 3], [5, 5, 4, 4, 4, 4, 3, 4, 4, 4, 6], [5, 5, 5, 5, 5, 4, 6, 5, 6, 7, 6], [5, 5, 5, 5, 5, 6, 5, 5, 5, 7, 8]], \"before\": [[9, 11, 12, 11, 9, 8, 7, 8, 9, 12, 14], [9, 10, 11, 10, 8, 7, 6, 7, 8, 11, 13], [8, 9, 9, 8, 7, 6, 6, 7, 8, 10, 13], [11, 8, 8, 7, 6, 5, 5, 6, 7, 9, 12], [10, 9, 8, 6, 5, 4, 5, 6, 5, 8, 12], [12, 10, 7, 6, 4, 5, 4, 6, 5, 8, 13], [9, 13, 8, 7, 5, 4, 4, 6, 7, 11, 14], [14, 13, 12, 10, 9, 8, 7, 8, 7, 13, 15], [16, 15, 14, 13, 13, 12, 10, 12, 13, 14, 18], [17, 16, 15, 14, 15, 13, 16, 15, 16, 18, 18], [18, 17, 16, 15, 14, 17, 16, 16, 17, 18, 18]]}, {\"k\": \"junk removal charleston\", \"after\": [[3, 3, 3, 4, 4, 4, 3, 2, 2, 3, 3], [3, 3, 4, 4, 4, 3, 2, 2, 2, 3, 3], [4, 4, 4, 3, 3, 2, 2, 2, 2, 3, 4], [5, 2, 3, 3, 2, 2, 2, 2, 2, 3, 4], [5, 4, 3, 2, 1, 1, 2, 2, 2, 3, 4], [5, 5, 2, 2, 1, 2, 1, 2, 1, 3, 4], [4, 6, 3, 3, 2, 1, 1, 2, 2, 4, 4], [5, 5, 5, 4, 4, 4, 3, 3, 3, 5, 5], [6, 6, 5, 5, 5, 5, 4, 5, 5, 5, 7], [6, 6, 6, 5, 6, 5, 7, 6, 7, 8, 8], [6, 6, 6, 6, 6, 7, 6, 6, 6, 8, 9]], \"before\": [[13, 15, 16, 14, 12, 10, 9, 10, 12, 15, 17], [12, 13, 14, 13, 10, 9, 8, 9, 11, 14, 16], [11, 12, 12, 10, 9, 8, 8, 9, 10, 13, 17], [14, 10, 11, 9, 8, 7, 7, 8, 9, 12, 16], [13, 11, 10, 8, 7, 6, 7, 8, 7, 11, 15], [15, 13, 9, 8, 6, 7, 6, 8, 7, 11, 16], [12, 16, 10, 9, 7, 6, 6, 8, 9, 14, 17], [17, 16, 15, 13, 12, 11, 10, 11, 9, 16, 18], [19, 18, 17, 16, 16, 15, 13, 15, 16, 17, 20], [20, 19, 18, 17, 18, 16, 19, 18, 19, 20, 20], [20, 20, 19, 18, 17, 20, 19, 19, 20, 20, 20]]}]" }} />
    </section>
  );
}
