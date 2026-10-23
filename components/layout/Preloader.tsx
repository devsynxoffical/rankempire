export default function Preloader() {
  return (
    <div className="pre" aria-hidden="true">
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <i></i>
      <div className="pw">
        <div>
          <span style={{animationDelay: "0.550s"} as React.CSSProperties}>
            {"R"}
          </span>
          <span style={{animationDelay: "0.595s"} as React.CSSProperties}>
            {"a"}
          </span>
          <span style={{animationDelay: "0.640s"} as React.CSSProperties}>
            {"n"}
          </span>
          <span style={{animationDelay: "0.685s"} as React.CSSProperties}>
            {"k"}
          </span>
          <span style={{animationDelay: "0.730s"} as React.CSSProperties}>
            {"E"}
          </span>
          <span style={{animationDelay: "0.775s"} as React.CSSProperties}>
            {"m"}
          </span>
          <span style={{animationDelay: "0.820s"} as React.CSSProperties}>
            {"p"}
          </span>
          <span style={{animationDelay: "0.865s"} as React.CSSProperties}>
            {"i"}
          </span>
          <span style={{animationDelay: "0.910s"} as React.CSSProperties}>
            {"r"}
          </span>
          <span style={{animationDelay: "0.955s"} as React.CSSProperties}>
            {"e"}
          </span>
        </div>
      </div>
      <div className="pc">
        {"Loading "}
        <b>
          {"0"}
        </b>
        {"%"}
      </div>
    </div>
  );
}
