export default function Robo() {
  return (
    <section className="robo" id="robo" aria-label="Talk to us">
      {"\n"}
      <div className="rl">
        <img src="/img/robot.webp" alt="RankEmpire robot" id="robot" loading="lazy" />
      </div>
      {"\n"}
      <div className="rm">
        <h2>
          {"We rank"}
          <br />
          {"with"}
          <br />
          {"Robots."}
          <span className="stk">
            <span>
              {"Let's Talk"}
            </span>
          </span>
        </h2>
        <a href="/contact-us/">
          {"Talk with us "}
          <i>
            {"→"}
          </i>
        </a>
        <div className="sp"></div>
      </div>
      {"\n"}
      <div className="rr">
        <p>
          {"We're a small team of strategists, technical specialists and AI nerds, blending SEO, answer engines and automation so your pages turn into calls, not just rankings."}
        </p>
      </div>
      {"\n"}
    </section>
  );
}
