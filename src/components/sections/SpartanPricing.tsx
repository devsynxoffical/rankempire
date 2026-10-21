"use client";

import React, { useState } from "react";
import Link from "next/link";

export default function SpartanPricing() {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Local",
      monthly: 799,
      yearly: 719,
      tagline: "Win the map pack in your area.",
      isDark: false,
      features: [
        "Google Business Profile optimization",
        "Up to 10 tracked keywords",
        "4 optimized pages per month",
        "Citation cleanup and building",
      ],
    },
    {
      name: "Growth",
      monthly: 1499,
      yearly: 1349,
      tagline: "Scale traffic across services and locations.",
      isDark: false,
      features: [
        "Everything in Local",
        "Up to 30 tracked keywords",
        "8 optimized or new pages per month",
        "Technical SEO fixes",
      ],
    },
    {
      name: "Empire",
      monthly: 2999,
      yearly: 2699,
      tagline: "Dominate competitive national markets.",
      isDark: true,
      features: [
        "Everything in Growth",
        "Up to 100 tracked keywords",
        "16 optimized or new pages per month",
        "Digital PR campaign",
      ],
    },
  ];

  return (
    <section className="spx" id="pricing" data-price aria-labelledby="spx-h">
      <h2 id="spx-h" className="sr-only">
        SEO pricing
      </h2>

      <div className="pm" aria-hidden="true">
        {Array.from({ length: 8 }).map((_, i) => (
          <React.Fragment key={i}>
            <span>Pricing</span>
            <i></i>
          </React.Fragment>
        ))}
      </div>

      <div className="wrap">
        <div className="row">
          <div className="sw">
            <span>Monthly</span>
            <button
              type="button"
              className="sw-b"
              aria-pressed={isYearly}
              aria-label="Yearly billing"
              onClick={() => setIsYearly(!isYearly)}
            ></button>
            <span>Yearly</span>
            <small>(Save 10%)</small>
            <span className="toggle" hidden>
              <button
                type="button"
                data-v="m"
                className={!isYearly ? "on" : ""}
                onClick={() => setIsYearly(false)}
              ></button>
              <button
                type="button"
                data-v="y"
                className={isYearly ? "on" : ""}
                onClick={() => setIsYearly(true)}
              ></button>
            </span>
          </div>

          <p>
            Flexible SEO plans built to scale with your business. No hidden
            costs, every deliverable listed up front, month to month after a 3
            month onboarding.
          </p>
        </div>

        <div className="pcs">
          {plans.map((p) => {
            const price = isYearly ? p.yearly : p.monthly;
            return (
              <article
                key={p.name}
                className={`pc ${p.isDark ? "dk" : ""}`}
                data-r
              >
                <div className="a1">
                  <h3>{p.name}</h3>
                  <div className="pr">
                    <b>
                      $
                      <span
                        data-m={p.monthly.toLocaleString()}
                        data-y={p.yearly.toLocaleString()}
                      >
                        {price.toLocaleString()}
                      </span>
                    </b>
                    <small>/mo</small>
                  </div>
                  <div
                    className="bl"
                    data-mb="USD, billed monthly"
                    data-yb="USD, billed yearly"
                  >
                    {isYearly ? "USD, billed yearly" : "USD, billed monthly"}
                  </div>
                </div>

                <div className="a2">
                  <p>{p.tagline}</p>
                  <Link className="gs" href="/contact-us/">
                    <i></i>Get started
                  </Link>
                </div>

                <ul>
                  {p.features.map((feat, idx) => (
                    <li key={idx}>{feat}</li>
                  ))}
                </ul>
              </article>
            );
          })}

          {/* Enterprise Card */}
          <article className="pc" data-r>
            <div className="a1">
              <h3>Enterprise</h3>
              <div className="pr">
                <b>Custom</b>
                <small>/quote</small>
              </div>
              <div className="bl">Scoped after a free audit</div>
            </div>

            <div className="a2">
              <p>Multi-location and enterprise programs.</p>
              <Link className="gs" href="/contact-us/">
                <i></i>Talk to us
              </Link>
            </div>

            <ul>
              <li>Unlimited locations</li>
              <li>Custom reporting and BI</li>
              <li>Dedicated SEO team</li>
              <li>Quarterly business reviews</li>
            </ul>
          </article>
        </div>

        <p className="foot2">
          Need a detailed comparison?{" "}
          <Link href="/seo-packages/">Compare all SEO packages</Link>
        </p>
      </div>
    </section>
  );
}
