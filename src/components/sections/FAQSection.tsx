"use client";

import React, { useState } from "react";
import { LineReveal } from "@/components/common/LineReveal";
import { FAQItem } from "@/data";

export default function FAQSection({
  items,
  tabs = true,
  title = "Frequently Asked Questions",
  sub = "Straight answers about how RankEmpire works",
}: {
  items: FAQItem[] | [string, string][];
  tabs?: boolean;
  title?: string;
  sub?: string;
}) {
  const isCategorized = tabs && items.length > 0 && typeof (items[0] as FAQItem).cat === "string";

  // Extract unique categories
  const categories = isCategorized
    ? Array.from(new Set((items as FAQItem[]).map((it) => it.cat)))
    : [];

  const [activeCat, setActiveCat] = useState<string>(categories[0] || "");
  const [openIdx, setOpenIdx] = useState<number>(0);

  // Filter items by category if tabs enabled
  const displayedItems = isCategorized
    ? (items as FAQItem[]).filter((it) => it.cat === activeCat)
    : (items as [string, string][]).map((it) => ({
        cat: "general",
        q: it[0],
        a: it[1],
      }));

  const handleToggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <section className="sec faqw">
      <div className="wrap">
        <div className="shead c">
          <LineReveal lines={title.split("<br>")} />
          <p data-r>{sub}</p>
        </div>

        {/* Tab switcher */}
        {isCategorized && (
          <div className="ftabs">
            {categories.map((cat) => (
              <button
                type="button"
                key={cat}
                className={activeCat === cat ? "on" : ""}
                onClick={() => {
                  setActiveCat(cat);
                  setOpenIdx(0);
                }}
              >
                {cat.charAt(0).toUpperCase() + cat.slice(1)}
              </button>
            ))}
          </div>
        )}

        {/* Accordion Questions */}
        <div className="faqs">
          {displayedItems.map((item, i) => {
            const isOpen = openIdx === i;
            return (
              <div className={`fq ${isOpen ? "on" : ""}`} key={i}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => handleToggle(i)}
                >
                  <span>{item.q}</span>
                  <i className="pm"></i>
                </button>
                <div className="a">
                  <div>
                    <p>{item.a}</p>
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
