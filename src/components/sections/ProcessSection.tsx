import React from "react";

export interface ProcessStep {
  title: string;
  desc: string;
  vis?: React.ReactNode;
}

const DEFAULT_STEPS: ProcessStep[] = [
  {
    title: "Audit",
    desc: "We crawl your site, study your market and competitors and find exactly what is holding rankings back.",
    vis: (
      <div className="prog" style={{ "--w": "72%" } as React.CSSProperties}>
        <i></i>
      </div>
    ),
  },
  {
    title: "Roadmap",
    desc: "Every fix, page and link is ranked by revenue impact into a 90-day plan before any work begins.",
    vis: (
      <div className="chk">
        <span>Fix canonical tags</span>
        <span>Build 6 service pages</span>
        <span>Optimize GBP categories</span>
      </div>
    ),
  },
  {
    title: "Execute",
    desc: "Specialists ship technical fixes, content and links, and every task is visible in your dashboard.",
    vis: (
      <div className="bars" style={{ height: "80px" }}>
        {[30, 44, 52, 70, 88, 100].map((h, j) => (
          <i
            key={j}
            style={{ "--h": `${h}%` } as React.CSSProperties}
            className={j > 2 ? "a" : ""}
          ></i>
        ))}
      </div>
    ),
  },
  {
    title: "Compound",
    desc: "We track rankings, calls and revenue, double down on what works and cut what does not.",
    vis: (
      <div
        style={{
          fontFamily: "var(--fd)",
          fontSize: "34px",
          fontWeight: 600,
          letterSpacing: "-.03em",
        }}
      >
        +<span data-count="212">212</span>%
      </div>
    ),
  },
];

export default function ProcessSection({
  steps = DEFAULT_STEPS,
  title = "Audit. Roadmap. Execute. Compound.",
  sub = "A disciplined process that removes guesswork and builds rankings that last.",
}: {
  steps?: ProcessStep[];
  title?: string;
  sub?: string;
}) {
  const displaySteps = steps.slice(0, 4);

  return (
    <section className="sec alt">
      <div className="wrap">
        <div className="sh c" data-r>
          <span className="eyb">How it works</span>
          <h2 className="h2">{title}</h2>
          <p>{sub}</p>
        </div>

        <div className="steps4" data-stagger>
          {displaySteps.map((st, i) => {
            const fallbackVis = DEFAULT_STEPS[i]?.vis || null;
            return (
              <div className="card st4" key={i}>
                <span className="badge">0{i + 1}</span>
                <div className="mini" data-vis>
                  {st.vis || fallbackVis}
                </div>
                <h3>{st.title}</h3>
                <p>{st.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
