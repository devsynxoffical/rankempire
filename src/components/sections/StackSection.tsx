import React from "react";
import { StarSparkIcon } from "@/components/common/Icons";
import { LineReveal } from "@/components/common/LineReveal";
import { stack } from "@/data";

export default function StackSection() {
  const allItems = stack.concat(stack);

  return (
    <section className="stack">
      <div className="wrap">
        <div className="shead">
          <LineReveal lines={["Our Stack"]} />
          <p data-r>
            The platforms and tools we work in every day
            <br />
            Search, analytics, local and e-commerce
          </p>
        </div>
      </div>

      <div className="cards-mq" aria-label="Tools we use">
        <div className="tr">
          {allItems.map((name, i) => (
            <span className="c" key={i}>
              <StarSparkIcon />
              {name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
