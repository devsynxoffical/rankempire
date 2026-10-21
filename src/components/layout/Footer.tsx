"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import {
  BRAND_NAME,
  BRAND_EMAIL,
  services,
  serviceOrderCore,
  industries,
  locations,
  tools,
} from "@/data";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [clock, setClock] = useState("09:00:00");

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/New_York",
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    });

    const updateTime = () => {
      setClock(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleNewsletter = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes("@")) return;
    window.location.href = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(
      "Newsletter signup"
    )}&body=${encodeURIComponent(
      "Please add " + email + " to the RankEmpire newsletter."
    )}`;
    setEmail("");
  };

  const footerServices = serviceOrderCore
    .slice(0, 6)
    .concat(["link-building", "content-seo", "seo-consulting"]);

  return (
    <footer className="af">
      <div className="tp1">
        <div className="soc">
          <a href={`mailto:${BRAND_EMAIL}`}>Email</a>
          <Link href="/contact-us/">Contact</Link>
          <Link href="/blog/">Blog</Link>
          <Link href="/seo-tools/">Tools</Link>
        </div>
        <Link className="lo" href="/">
          RankEmpire<sup>&reg;</sup>
        </Link>
        <span className="bur" aria-hidden="true"></span>
      </div>

      <div className="hero2">
        <div className="bw">
          <div className="w" aria-hidden="true">
            RankEmpire<sup>R</sup>
          </div>
          <div className="sf">
            The SEO
            <br />
            Company.
          </div>
        </div>

        <div className="rc">
          <p>We work remotely with businesses across the United States.</p>
          <div className="clk" data-clock>
            {clock}
          </div>
          <div className="tz">
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
            </svg>
            Eastern Time (New York)
          </div>
          <span className="dot" aria-hidden="true"></span>
        </div>
      </div>

      <div className="gr">
        <div className="ln">
          <Link href="/">Home</Link>
          <Link href="/seo-services/">Services</Link>
          <Link href="/industries/">Industries</Link>
          <Link href="/seo-packages/">Pricing</Link>
          <Link href="/case-studies/">Results</Link>
          <Link href="/contact-us/">Contact</Link>
        </div>

        <div className="ln">
          <Link href="/about-us/">About</Link>
          <Link href="/about-us/">Team</Link>
          <Link href="/blog/">Journal</Link>
          <Link href="/privacy-policy/">Privacy Policy</Link>
          <Link href="/terms/">Terms of Service</Link>
          <Link className="m" href="/sitemap.xml">
            Sitemap
          </Link>
        </div>

        <div className="nl">
          <h4>Stay in the Loop</h4>
          <p>
            One practical SEO tip a month, written by the team doing the work.
          </p>
          <small>We respect your inbox. No spam, just useful updates.</small>
          <form onSubmit={handleNewsletter} data-news={BRAND_EMAIL}>
            <input
              type="email"
              placeholder="Your email"
              aria-label="Email address"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <button type="submit" aria-label="Subscribe">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </button>
          </form>
        </div>

        <div className="sl">
          <Link href="/contact-us/">Free SEO audit</Link>
          <a href={`mailto:${BRAND_EMAIL}`}>Email us</a>
          <Link href="/seo-tools/">Free tools</Link>
          <Link href="/locations/">Locations</Link>
          <Link href="/case-studies/">Case studies</Link>
        </div>
      </div>

      <div className="seo">
        <div>
          <h6>SEO services</h6>
          <Link href="/seo-services/">All services</Link>
          {footerServices.map((slug) => (
            <Link key={slug} href={`/${slug}/`}>
              {services[slug]?.name || slug}
            </Link>
          ))}
        </div>

        <div>
          <h6>Industries</h6>
          <Link href="/industries/">All industries</Link>
          {industries.slice(0, 8).map((ind) => (
            <Link key={ind.slug} href={`/seo-for-${ind.slug}/`}>
              {ind.name}
            </Link>
          ))}
        </div>

        <div>
          <h6>Locations</h6>
          <Link href="/locations/">All locations</Link>
          {locations.slice(0, 8).map((c) => (
            <Link key={c.slug} href={`/locations/${c.slug}/`}>
              {c.name}
            </Link>
          ))}
        </div>

        <div>
          <h6>Free SEO tools</h6>
          <Link href="/seo-tools/">All free tools</Link>
          {tools.slice(0, 8).map((t) => (
            <Link key={t.slug} href={`/seo-tools/${t.slug}/`}>
              {t.name}
            </Link>
          ))}
        </div>
      </div>

      <div className="fb">
        <span>&copy; 2026 {BRAND_NAME}. All rights reserved.</span>
        <span>{BRAND_EMAIL}</span>
        <span>Built to rank</span>
      </div>
    </footer>
  );
}
