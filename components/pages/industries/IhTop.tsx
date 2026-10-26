export default function IhTop() {
  return (
    <section className="x ih-top">
      <div className="wrap">
        <div className="ih-bar">
          <label className="filter">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <circle cx="11" cy="11" r="7" />
              <path d="m20 20-4-4" />
            </svg>
            <span className="sr-only">
              {"Search industries"}
            </span>
            <input type="search" placeholder="Search your industry, e.g. dentists" data-filter="#indlist" />
          </label>
          <nav className="ih-jump" aria-label="Categories">
            <a href="#home-services" style={{"--c": "#ec4e3b"} as React.CSSProperties}>
              <i></i>
              {"Home Services"}
              <b>
                {"14"}
              </b>
            </a>
            <a href="#medical-and-health" style={{"--c": "#2b55e8"} as React.CSSProperties}>
              <i></i>
              {"Medical and Health"}
              <b>
                {"7"}
              </b>
            </a>
            <a href="#legal" style={{"--c": "#e37a38"} as React.CSSProperties}>
              <i></i>
              {"Legal"}
              <b>
                {"2"}
              </b>
            </a>
            <a href="#automotive" style={{"--c": "#4a9f5f"} as React.CSSProperties}>
              <i></i>
              {"Automotive"}
              <b>
                {"3"}
              </b>
            </a>
            <a href="#food-and-hospitality" style={{"--c": "#8c2fe2"} as React.CSSProperties}>
              <i></i>
              {"Food and Hospitality"}
              <b>
                {"6"}
              </b>
            </a>
            <a href="#professional-services" style={{"--c": "#e0a800"} as React.CSSProperties}>
              <i></i>
              {"Professional Services"}
              <b>
                {"5"}
              </b>
            </a>
            <a href="#real-estate-and-property" style={{"--c": "#ec4e3b"} as React.CSSProperties}>
              <i></i>
              {"Real Estate and Property"}
              <b>
                {"3"}
              </b>
            </a>
            <a href="#beauty-fitness-and-lifestyle" style={{"--c": "#2b55e8"} as React.CSSProperties}>
              <i></i>
              {"Beauty, Fitness and Lifestyle"}
              <b>
                {"5"}
              </b>
            </a>
          </nav>
        </div>
      </div>
    </section>
  );
}
