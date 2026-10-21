"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { ArrowIcon, GlobeIcon } from "@/components/common/Icons";

export default function CTASection({
  title = "Ready to grow your organic traffic?",
  sub = "Get a free SEO audit with a prioritized 90-day plan. No contracts, no pressure.",
}: {
  title?: string;
  sub?: string;
}) {
  const router = useRouter();
  const [site, setSite] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const query = site.trim();
    if (!query) return;
    router.push(`/contact-us/?site=${encodeURIComponent(query)}`);
  };

  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="ctap" data-r>
          <span
            className="eyb pill"
            style={{
              background: "#151517",
              borderColor: "#26262a",
              color: "#d4d4d8",
            }}
          >
            <i></i>Free SEO audit
          </span>
          <h2 className="h2">{title}</h2>
          <p>{sub}</p>

          <form
            className="audit"
            onSubmit={handleSubmit}
            role="search"
            aria-label="Free SEO audit"
          >
            <GlobeIcon className="g" />
            <label className="sr-only" htmlFor="cta-site-input">
              Your website
            </label>
            <input
              id="cta-site-input"
              name="site"
              type="text"
              inputMode="url"
              value={site}
              onChange={(e) => setSite(e.target.value)}
              placeholder="Enter your website, e.g. yourbusiness.com"
              autoComplete="url"
            />
            <button className="btn ac" type="submit">
              Get my free audit
              <ArrowIcon />
            </button>
          </form>

          <div className="ticks">
            <span>Delivered in 2 business days</span>
            <span>No contract required</span>
            <span>Real people, not a PDF generator</span>
          </div>
        </div>
      </div>
    </section>
  );
}
