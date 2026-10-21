"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/common/Icons";
import { industries } from "@/data";

const CATEGORIES = [
  "Home Services",
  "Medical and Health",
  "Legal",
  "Automotive",
  "Food and Hospitality",
  "Professional Services",
  "Real Estate and Property",
  "Beauty and Fitness",
];

const CAT_IMAGES: Record<string, string> = {
  "Home Services": "/img/i-home.webp",
  "Medical and Health": "/img/i-med.webp",
  "Legal": "/img/i-legal.webp",
  "Automotive": "/img/i-auto.webp",
  "Food and Hospitality": "/img/i-food.webp",
  "Professional Services": "/img/i-pro.webp",
  "Real Estate and Property": "/img/i-realestate.webp",
  "Beauty and Fitness": "/img/i-beauty.webp",
};

export default function IndustriesTabs() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section className="sec tint">
      <div className="wrap" data-tabs>
        <div className="shr">
          <div className="sh" data-r>
            <span className="eyb">Industries</span>
            <h2 className="h2">SEO built for how your industry searches.</h2>
            <p>
              45 industry strategies, each with its own keywords, page types and
              local signals.
            </p>
          </div>
          <div data-r>
            <Link className="btn ln" href="/industries/">
              All industries
              <ArrowIcon />
            </Link>
          </div>
        </div>

        {/* Tab Buttons */}
        <div className="tabs" role="tablist" data-r style={{ marginBottom: "22px" }}>
          {CATEGORIES.map((cat, idx) => (
            <button
              key={cat}
              type="button"
              role="tab"
              className={activeTab === idx ? "on" : ""}
              aria-selected={activeTab === idx}
              onClick={() => setActiveTab(idx)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tab Panels */}
        <div data-r>
          {CATEGORIES.map((cat, idx) => {
            const list = industries.filter(
              (ind) =>
                ind.cat === cat ||
                (cat === "Beauty and Fitness" &&
                  ind.cat === "Beauty, Fitness and Lifestyle")
            );
            const imgSrc = CAT_IMAGES[cat] || "/img/i-home.webp";

            return (
              <div
                key={cat}
                className={`tpanel ${activeTab === idx ? "on" : ""}`}
                role="tabpanel"
              >
                <div className="ipan">
                  <div className="ipic">
                    <Image
                      src={imgSrc}
                      alt={`${cat} businesses`}
                      fill
                      loading="lazy"
                      sizes="(max-width: 768px) 100vw, 360px"
                      style={{ objectFit: "cover" }}
                    />
                    <div className="ipo">
                      <span>{list.length} industries</span>
                      <b>{cat}</b>
                    </div>
                  </div>
                  <div className="chips">
                    {list.map((ind) => (
                      <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
                        SEO for {ind.name}
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
