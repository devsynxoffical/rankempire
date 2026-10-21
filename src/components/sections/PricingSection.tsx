"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/common/Icons";
import { packages } from "@/data";

export default function PricingSection({
  title = "Simple, transparent SEO pricing",
  sub = "Month to month after a 3 month onboarding. Every deliverable listed up front.",
  eyb = "Pricing",
  packageKey,
}: {
  title?: string;
  sub?: string;
  eyb?: string;
  packageKey?: string;
}) {
  const [isYearly, setIsYearly] = useState(false);
  const pkgData =
    (packageKey && packages[packageKey]) ||
    packages["seo-packages"] ||
    Object.values(packages)[0];
  const plans = pkgData?.plans || [];

  return (
    <section className="sec" id="pricing" data-price>
      <div className="wrap" style={{ textAlign: "center" }}>
        <div className="sh c" data-r>
          <span className="eyb">{eyb}</span>
          <h2 className="h2">{title}</h2>
          <p>{sub}</p>
        </div>

        <div className="toggle" role="group" aria-label="Billing period">
          <button
            type="button"
            className={!isYearly ? "on" : ""}
            aria-pressed={!isYearly}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </button>
          <button
            type="button"
            className={isYearly ? "on" : ""}
            aria-pressed={isYearly}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </button>
        </div>

        <p className="save">Save 10% with yearly billing</p>

        <div className="plans">
          {plans.map(([name, who, price, pop, feats], idx) => {
            const yearlyPrice = Math.round(price * 0.9);
            const isPopular = pop === "pop";
            const currentPrice = isYearly ? yearlyPrice : price;
            const savings = (price - yearlyPrice) * 12;

            return (
              <article
                key={idx}
                className={`plan ${isPopular ? "pop" : ""}`}
                data-r
              >
                <span className="lbl">{isPopular ? "Most popular" : "Plan"}</span>
                <h3>{name}</h3>
                <p className="who">{who}</p>

                <div className="pr">
                  <b>${currentPrice.toLocaleString("en-US")}</b>
                  <small>/ month</small>
                </div>

                <div className="bill">
                  {isYearly
                    ? `Billed yearly, save $${savings.toLocaleString("en-US")}`
                    : "Billed monthly"}
                </div>

                <Link
                  className={`btn ${isPopular ? "ac" : "dk"}`}
                  href="/contact-us/"
                >
                  Get started
                  <ArrowIcon />
                </Link>

                <ul>
                  {feats.map((feat, fIdx) => (
                    <li key={fIdx}>{feat}</li>
                  ))}
                </ul>
              </article>
            );
          })}
        </div>

        <p style={{ marginTop: "22px", color: "var(--mute)", fontSize: "14.5px" }}>
          Need multi-location or enterprise SEO?{" "}
          <Link className="tlink" href="/contact-us/">
            Get a custom quote
          </Link>
        </p>
      </div>
    </section>
  );
}
