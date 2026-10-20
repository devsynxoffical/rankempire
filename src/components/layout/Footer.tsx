"use client";

import React, { useState } from "react";
import Link from "next/link";
import { BrandMark, ArrowIcon, MailIcon, ClockIcon, PinIcon } from "@/components/common/Icons";
import {
  BRAND_NAME,
  BRAND_EMAIL,
  services,
  serviceOrderCore,
  packages,
  tools,
  locations,
} from "@/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    window.location.href = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(
      "Newsletter signup"
    )}&body=${encodeURIComponent("Please add " + email + " to the RankEmpire newsletter.")}`;
    setSubmitted(true);
    setEmail("");
  };

  return (
    <footer className="foot">
      <div className="tp">
        <div>
          <Link className="logo" href="/" style={{ color: "#fff" }}>
            <BrandMark />
            {BRAND_NAME}
          </Link>
          <p>
            RankEmpire is an SEO agency for local businesses, e-commerce brands and SaaS
            companies, building rankings that compound into calls, leads and revenue.
          </p>
        </div>

        <div className="news">
          <h5>Subscribe to our newsletter</h5>
          <form onSubmit={handleNewsletter}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={submitted ? "Thanks! Check your email" : "Enter your email"}
              aria-label="Email address"
              required
            />
            <button className="btn acc sm" type="submit">
              Subscribe
              <ArrowIcon />
            </button>
          </form>
          <small>One practical SEO tip a month. No spam.</small>
        </div>
      </div>

      <div className="fcols">
        {/* Main pages */}
        <div>
          <h6>Main pages</h6>
          <Link href="/">Home</Link>
          <Link href="/seo-company/">SEO Company</Link>
          <Link href="/seo-services/">SEO Services</Link>
          <Link href="/about-us/">About Us</Link>
          <Link href="/our-team/">Our Team</Link>
          <Link href="/case-studies/">Case Studies</Link>
          <Link href="/blog/">SEO Blog</Link>
          <Link href="/contact-us/">Contact Us</Link>
        </div>

        {/* Services */}
        <div>
          <h6>Services</h6>
          {serviceOrderCore.slice(0, 4).concat(["link-building", "content-seo"]).map((slug) => (
            <Link key={slug} href={`/${slug}/`}>
              {services[slug]?.name || slug}
            </Link>
          ))}
        </div>

        {/* Packages */}
        <div>
          <h6>Packages</h6>
          {Object.entries(packages).map(([slug, pkg]) => (
            <Link key={slug} href={`/${slug}/`}>
              {pkg.name}
            </Link>
          ))}
          <Link href="/seo-consulting/">SEO Consulting</Link>
          <Link href="/keyword-research/">Keyword Research</Link>
        </div>

        {/* Free tools */}
        <div>
          <h6>Free tools</h6>
          {tools.slice(0, 8).map((tool) => (
            <Link key={tool.slug} href={`/seo-tools/${tool.slug}/`}>
              {tool.name}
            </Link>
          ))}
        </div>

        {/* Popular cities */}
        <div>
          <h6>Popular cities</h6>
          {locations.slice(0, 8).map((loc) => (
            <Link key={loc.slug} href={`/locations/${loc.slug}/`}>
              {loc.name}
            </Link>
          ))}
        </div>

        {/* Contact info */}
        <div className="ct">
          <h6>Have a question?</h6>
          <a href={`mailto:${BRAND_EMAIL}`}>
            <MailIcon />
            <span>
              {BRAND_EMAIL}
              <small>We reply within one business day</small>
            </span>
          </a>
          <Link href="/contact-us/">
            <ClockIcon />
            <span>
              Mon to Fri, 9am to 6pm ET
              <small>Book a free strategy call</small>
            </span>
          </Link>
          <Link href="/locations/">
            <PinIcon />
            <span>
              Serving clients across the US
              <small>See all locations</small>
            </span>
          </Link>
        </div>
      </div>

      <div className="giant" aria-hidden="true">
        {BRAND_NAME}
      </div>

      <div className="fbot">
        <span>&copy; 2026 {BRAND_NAME}. All rights reserved.</span>
        <span>
          <Link href="/privacy-policy/">Privacy Policy</Link> &nbsp;&middot;&nbsp;{" "}
          <Link href="/terms/">Terms</Link> &nbsp;&middot;&nbsp;{" "}
          <Link href="/sitemap.xml">Sitemap</Link>
        </span>
      </div>
    </footer>
  );
}
