import React from "react";
import Image from "next/image";
import { LineReveal } from "@/components/common/LineReveal";

interface Step {
  title: string;
  desc: string;
}

const DEFAULT_STEPS: Step[] = [
  {
    title: "Audit",
    desc: "We crawl your site, study your market and competitors and find what is holding rankings back.",
  },
  {
    title: "Strategize",
    desc: "We build a roadmap of pages, fixes and links ranked by revenue impact before any work begins.",
  },
  {
    title: "Execute",
    desc: "Our specialists ship the fixes, content and links, with every task visible in your dashboard.",
  },
  {
    title: "Compound",
    desc: "We track every ranking, call and sale, double down on what works and cut what does not.",
  },
];

export default function ProcessSection({
  steps = DEFAULT_STEPS,
  title = "Our Process",
  sub = "A disciplined four step framework that removes<br>guesswork and builds rankings that last.",
}: {
  steps?: Step[];
  title?: string;
  sub?: string;
}) {
  return (
    <section className="sec dark proc">
      <div className="pin">
        <div className="wrap">
          <div className="shead">
            <LineReveal lines={title.split("<br>")} />
            <p data-r dangerouslySetInnerHTML={{ __html: sub }} />
          </div>

          <div className="pcards">
            {steps.slice(0, 4).map((step, i) => (
              <article className="pc" key={i}>
                <Image
                  src={`/img/p${i + 1}.webp`}
                  alt=""
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  style={{ objectFit: "cover" }}
                />
                <span className="n">0{i + 1}</span>
                <div className="tx">
                  <h3>{step.title}</h3>
                  <p>{step.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
