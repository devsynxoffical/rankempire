import React from "react";
import { logos } from "@/data";

export default function StackSection() {
  const allLogos = logos.concat(logos);

  return (
    <section className="lmq" aria-label="Platforms we work with">
      <p>
        <b>Built into your stack.</b> We work inside the platforms you already use
      </p>
      <div className="mq">
        <div className="tr">
          {allLogos.map((l, i) => (
            <span
              className="lg"
              key={i}
              style={{ "--c": `#${l.hex}` } as React.CSSProperties}
            >
              <svg viewBox="0 0 24 24" role="img" aria-label={`${l.name} logo`}>
                <path fill={`#${l.hex}`} d={l.path} />
              </svg>
              {l.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
