import React from "react";

export default function IntroSection({
  items = ["Local", "National", "E-commerce", "SaaS"],
  text = "We do not chase vanity metrics. Every campaign starts with an audit, gets a roadmap ranked by revenue impact and is executed by specialists until the numbers that matter actually move: calls, leads and sales.",
}: {
  items?: string[];
  text?: string;
}) {
  const words = text.split(/\s+/).filter(Boolean);

  return (
    <section className="wrap intro">
      <ul data-r>
        {items.map((it, idx) => (
          <li key={idx}>{it}</li>
        ))}
      </ul>
      <p className="wrev" suppressHydrationWarning>
        {words.map((w, i) => (
          <React.Fragment key={i}>
            <span className="w">{w}</span>{" "}
          </React.Fragment>
        ))}
      </p>
    </section>
  );
}
