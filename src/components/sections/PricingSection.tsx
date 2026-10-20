"use client";

import React, { useState } from "react";
import Link from "next/link";
import { LineReveal } from "@/components/common/LineReveal";
import { packages } from "@/data";

interface PlanTier {
  name: string;
  who: string;
  price: number;
  pop: string;
  feats: string[];
}

export default function PricingSection({
  packageKey = "seo-packages",
  title = "Simple, Transparent Pricing",
  sub = "Choose the plan that fits your market. Month to month after onboarding, with every deliverable listed up front.",
}: {
  packageKey?: string;
  title?: string;
  sub?: string;
}) {
  const [isYearly, setIsYearly] = useState(false);
  const pkg = packages[packageKey] || packages["seo-packages"];

  const plans: PlanTier[] = pkg.plans.map((p) => ({
    name: p[0],
    who: p[1],
    price: p[2],
    pop: p[3],
    feats: p[4],
  }));

  return (
    <section className="sec">
      <div className="wrap">
        <div className="shead c">
          <LineReveal lines={title.split("<br>")} />
          <p data-r>{sub}</p>
        </div>

        {/* Billing Toggle */}
        <div className={`tog ${isYearly ? "y" : ""}`}>
          <span
            className="m"
            role="button"
            tabIndex={0}
            onClick={() => setIsYearly(false)}
          >
            Monthly
          </span>
          <button
            className="sw"
            type="button"
            role="switch"
            aria-checked={isYearly}
            aria-label="Toggle yearly billing"
            onClick={() => setIsYearly(!isYearly)}
          />
          <span
            className="yl"
            role="button"
            tabIndex={0}
            onClick={() => setIsYearly(true)}
          >
            Yearly
          </span>
          <span className="off">10% off</span>
        </div>

        {/* Plans Grid */}
        <div className="plans">
          {plans.map((plan, i) => {
            const isPop = plan.pop === "pop";
            const currentPrice = isYearly ? Math.round(plan.price * 0.9) : plan.price;

            return (
              <article
                className={`plan ${isPop ? "pop" : ""}`}
                data-r
                key={i}
              >
                <div className="hd">
                  <div className="t">
                    <h3>{plan.name}</h3>
                    {isPop && <span className="bdg">Popular</span>}
                  </div>
                  <p className="sub">{plan.who}</p>

                  <div className="pr">
                    <sup>$</sup>
                    <b>{currentPrice.toLocaleString()}</b>
                    <small>
                      {isYearly ? "/mo, billed yearly" : "/month"}
                    </small>
                  </div>

                  <Link
                    className={`btn ${isPop ? "acc" : "line"}`}
                    href="/contact-us/"
                  >
                    Select plan
                  </Link>
                </div>

                <div className="ft">
                  <h5>Features:</h5>
                  <ul>
                    {plan.feats.map((feat, fIdx) => (
                      <li key={fIdx}>{feat}</li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        <p className="note" style={{ marginTop: "20px", textAlign: "center" }}>
          Need something custom?{" "}
          <Link href="/contact-us/" style={{ color: "var(--acc)", fontWeight: 600 }}>
            Talk to us
          </Link>{" "}
          about enterprise and multi-brand programs.
        </p>
      </div>
    </section>
  );
}
