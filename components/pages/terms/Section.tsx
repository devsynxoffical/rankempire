export default function Section() {
  return (
    <section style={{paddingBottom: "100px"} as React.CSSProperties}>
      <div className="wrap" style={{maxWidth: "860px"} as React.CSSProperties}>
        <div className="prose" data-r="">
          <h2>
            {"Use of this website"}
          </h2>
          <p>
            {"The content on this website is provided for general information. By using the site you agree to these terms."}
          </p>
          <h2>
            {"Free tools"}
          </h2>
          <p>
            {"Our free SEO tools are provided as is, without warranty. Results are estimates and should be checked before making business decisions."}
          </p>
          <h2>
            {"Services"}
          </h2>
          <p>
            {"Client engagements are governed by a separate written agreement that sets out scope, fees and terms."}
          </p>
          <h2>
            {"Intellectual property"}
          </h2>
          <p>
            {"The design, text and graphics on this website belong to RankEmpire unless stated otherwise."}
          </p>
          <h2>
            {"Contact"}
          </h2>
          <p>
            {"Questions about these terms can be sent to hello@rankempire.com."}
          </p>
        </div>
      </div>
    </section>
  );
}
