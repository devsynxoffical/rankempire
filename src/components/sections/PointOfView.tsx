"use client";

import React, { useState } from "react";
import Link from "next/link";

interface Discipline {
  title: string;
  slug: string;
  img: string;
  desc: string;
  cap: string;
}

const disciplines: Discipline[] = [
  {
    title: "Strategy",
    slug: "seo-audit",
    img: "/img/v3-strat.webp",
    desc: "Audits, keyword research and a 90-day roadmap ranked by revenue impact before anything ships.",
    cap: "Positioning, keyword maps and roadmap architecture before a single page goes live.",
  },
  {
    title: "Technical SEO",
    slug: "technical-seo",
    img: "/img/s-tech.webp",
    desc: "Crawling, indexing, Core Web Vitals and structured data fixed at the template level.",
    cap: "Speed, crawl budget and schema fixed where it matters: the templates.",
  },
  {
    title: "Local SEO",
    slug: "local-seo",
    img: "/img/s-local.webp",
    desc: "Google Business Profile, reviews, citations and city pages that win the map pack.",
    cap: "Map pack visibility tracked street by street across your service area.",
  },
  {
    title: "Content",
    slug: "content-seo",
    img: "/img/s-content.webp",
    desc: "Topic clusters and service pages written by specialists for the searches that convert.",
    cap: "Pages written for real searches, reviewed by subject experts.",
  },
  {
    title: "Link building",
    slug: "link-building",
    img: "/img/s-links.webp",
    desc: "Editorial links from relevant, real websites. No networks, no shortcuts.",
    cap: "Authority earned through outreach, digital PR and genuine partnerships.",
  },
];

const keywords = [
  "Technical SEO",
  "Local SEO",
  "Google Business Profile",
  "Content SEO",
  "Link Building",
  "E-commerce SEO",
  "SaaS SEO",
  "Keyword Research",
  "Schema Markup",
  "Core Web Vitals",
];

export default function PointOfView() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="pov" aria-labelledby="pov-h">
      <div className="box">
        <span className="pl d">Our point of view</span>

        <h2 id="pov-h" className="st" data-words>
          <span className="w">Most</span> <span className="w">SEO</span>{" "}
          <span className="w">agencies</span> <span className="w">sell</span>{" "}
          <span className="w">reports.</span> <span className="w">We</span>{" "}
          <span className="w">sell</span> <span className="w">rankings.</span>{" "}
          <em>
            <span className="w">Every</span> <span className="w">page</span>{" "}
            <span className="w">we</span> <span className="w">publish</span>{" "}
            <span className="w">has</span> <span className="w">a</span>{" "}
            <span className="w">keyword</span>{" "}
            <span className="w">attached,</span>
          </em>{" "}
          <span className="w">and</span> <span className="w">every</span>{" "}
          <span className="w">keyword</span> <span className="w">feeds</span>{" "}
          <span className="w">the</span> <span className="w">next</span>{" "}
          <span className="w">decision.</span> <span className="w">That</span>{" "}
          <span className="w">loop</span> <span className="w">is</span>{" "}
          <span className="w">the</span> <span className="w">entire</span>{" "}
          <span className="w">company.</span>
        </h2>

        <div className="tm">
          <div className="av">
            <img src="/img/t1.webp" alt="" loading="lazy" />
            <img src="/img/t2.webp" alt="" loading="lazy" />
            <img src="/img/t3.webp" alt="" loading="lazy" />
            <img src="/img/t4.webp" alt="" loading="lazy" />
          </div>
          <p>
            A senior team on every account. No hand-offs, no black boxes, no
            40-page reports that say nothing.
          </p>
        </div>

        <div className="svx" data-ptabs>
          <div>
            <span className="pl d">Five disciplines, one growth system</span>
            <h3>Where should your next ranking come from?</h3>
            <div className="tl" role="tablist" aria-label="SEO disciplines">
              {disciplines.map((d, i) => (
                <React.Fragment key={d.title}>
                  <button
                    type="button"
                    className={activeTab === i ? "on" : ""}
                    aria-selected={activeTab === i}
                    role="tab"
                    data-i={i}
                    onClick={() => setActiveTab(i)}
                  >
                    <small>0{i + 1}</small>
                    {d.title}
                  </button>
                  <p className={`tp ${activeTab === i ? "on" : ""}`}>
                    {d.desc}{" "}
                    <Link href={`/${d.slug}/`}>
                      Explore {d.title.toLowerCase()}
                    </Link>
                  </p>
                </React.Fragment>
              ))}
            </div>
          </div>

          <div>
            <div className="pim">
              {disciplines.map((d, i) => (
                <img
                  key={d.title}
                  className={activeTab === i ? "on" : ""}
                  src={d.img}
                  alt={`${d.title} work at RankEmpire`}
                  loading="lazy"
                />
              ))}
            </div>
            <p className="cap" data-cap>
              {disciplines[activeTab].cap}
            </p>
          </div>
        </div>

        <div className="kmq" aria-hidden="true">
          <div className="t">
            {[...keywords, ...keywords].map((kw, i) => (
              <span key={i}>{kw}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
