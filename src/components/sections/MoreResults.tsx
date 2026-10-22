import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/common/Icons";

const resultsData = [
  {
    img: "r-gsc2",
    name: "Progenius Students",
    period: "28 days, Sep to Oct 2026",
    metrics: [
      { val: "9.04K", label: "clicks" },
      { val: "33.6K", label: "impressions" },
      { val: "26.9%", label: "CTR" },
      { val: "6.1", label: "avg. position" },
    ],
  },
  {
    img: "r-gsc3",
    name: "Education website",
    period: "3 months, Jul to Oct 2026",
    metrics: [
      { val: "25.4K", label: "clicks" },
      { val: "130K", label: "impressions" },
      { val: "19.5%", label: "CTR" },
      { val: "7.5", label: "avg. position" },
    ],
  },
];

export default function MoreResults() {
  return (
    <section className="mr" id="more-results" aria-labelledby="mr-h">
      <div className="wrap">
        <div className="xh c" data-r>
          <span className="xe">
            <i></i>More verified results
          </span>
          <h2 id="mr-h" className="h2">
            Straight from Google Search Console.
          </h2>
          <p>
            No mockups and no estimates. These are live performance reports from client accounts,
            shared with permission.
          </p>
        </div>

        <div className="mr-g">
          {resultsData.map((r, i) => (
            <figure key={i} className="mr-c" data-r>
              <div className="rsb">
                <i></i>
                <i></i>
                <i></i>
                <span>search.google.com / search-console / performance</span>
                <em>Live client data</em>
              </div>
              <Image
                src={`/img/${r.img}.webp`}
                alt={`Google Search Console report for ${r.name}: ${r.metrics
                  .map((m) => `${m.val} ${m.label}`)
                  .join(", ")}`}
                loading="lazy"
                width={800}
                height={450}
              />
              <figcaption>
                <div>
                  <b>{r.name}</b>
                  <span>{r.period}</span>
                </div>
                <div className="k">
                  {r.metrics.map((m, j) => (
                    <span key={j}>
                      <b>{m.val}</b>
                      {m.label}
                    </span>
                  ))}
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        <div className="mr-cta" data-r>
          <Link className="btn dk" href="/case-studies/">
            See all case studies
            <ArrowIcon />
          </Link>
          <Link className="btn ac" href="/contact-us/">
            Get results like this
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
