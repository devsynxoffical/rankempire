"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/common/Icons";
import { FAQItem } from "@/data";

export default function FAQSection({
  items,
  title = "SEO company FAQ",
  sub = "Straight answers about SEO and how we work.",
  eyb = "FAQ",
  hid = "faq",
}: {
  items: (FAQItem | [string, string])[];
  title?: string;
  sub?: string;
  eyb?: string;
  hid?: string;
  tabs?: boolean;
}) {
  const [openIdx, setOpenIdx] = useState<number>(0);

  const normalizedItems: { q: string; a: string }[] = items.map((it) => {
    if (Array.isArray(it)) {
      return { q: it[0], a: it[1] };
    }
    return { q: it.q, a: it.a };
  });

  const toggle = (idx: number) => {
    setOpenIdx((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <section className="sec" id={hid}>
      <div className="wrap fwrap">
        <div className="side" data-r>
          <span className="eyb">{eyb}</span>
          <h2 className="h2" style={{ margin: "14px 0 16px" }}>
            {title}
          </h2>
          <p style={{ color: "var(--mute)", marginBottom: "24px" }}>{sub}</p>

          <div className="card" style={{ padding: "20px" }}>
            <b style={{ fontFamily: "var(--fd)", fontSize: "18px" }}>
              Still have a question?
            </b>
            <p style={{ margin: "6px 0 14px" }}>
              Talk to a strategist. We reply within one business day.
            </p>
            <Link className="btn dk sm" href="/contact-us/">
              Contact us
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="faqs" data-r>
          {normalizedItems.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div key={idx} className={`fq ${isOpen ? "on" : ""}`}>
                <button
                  type="button"
                  aria-expanded={isOpen}
                  onClick={() => toggle(idx)}
                >
                  <span>{item.q}</span>
                  <i className="pm" aria-hidden="true"></i>
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
