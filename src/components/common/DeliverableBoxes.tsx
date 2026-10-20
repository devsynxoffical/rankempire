import React from "react";

export default function DeliverableBoxes({
  items,
}: {
  items: [string, string][];
}) {
  return (
    <div className="g3" data-stagger style={{ marginTop: "32px" }}>
      {items.map(([title, desc], i) => (
        <article className="box" key={i}>
          <span className="n">0{i + 1}</span>
          <h3>{title}</h3>
          <p>{desc}</p>
        </article>
      ))}
    </div>
  );
}
