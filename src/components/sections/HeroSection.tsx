"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/common/Icons";

export function BigWord({ word = "RANKINGS" }: { word?: string }) {
  const letters = Array.from(word);
  return (
    <div className="bigword" aria-hidden="true">
      {letters.map((char, i) => (
        <span
          key={i}
          style={{
            animationDelay: `${0.15 + i * 0.06}s`,
          }}
        >
          {char}
        </span>
      ))}
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="hero">
      <div className="top" data-r>
        <span>&copy;2026</span>
        <span>SEO AGENCY</span>
      </div>

      <h1 className="sr-only">
        RankEmpire, the SEO agency for local businesses, e-commerce and SaaS
      </h1>

      <BigWord word="RANKINGS" />

      <div className="band">
        <div className="bg">
          <Image
            src="/img/hero.webp"
            alt=""
            fill
            priority
            style={{ objectFit: "cover", objectPosition: "50% 35%" }}
          />
        </div>

        <div className="in">
          <div className="stats">
            <div data-r>
              <b>
                <span data-count="45">45</span>+
              </b>
              <em>Industries served</em>
            </div>
            <div data-r style={{ "--d": "0.08s" } as React.CSSProperties}>
              <b>
                <span data-count="17">17</span> cities
              </b>
              <em>Local SEO hubs across the US</em>
            </div>
            <div data-r style={{ "--d": "0.16s" } as React.CSSProperties}>
              <b>
                <span data-count="11">11</span> free tools
              </b>
              <em>To check your SEO today</em>
            </div>
          </div>

          <div className="low">
            <div data-r>
              <p>
                Technical SEO, local search, content and link building, built into one
                program that turns rankings into calls, leads and revenue.
              </p>
              <div className="bts">
                <Link className="btn wh" href="/contact-us/">
                  Get a free audit
                  <ArrowIcon />
                </Link>
                <Link className="btn ol" href="/seo-packages/">
                  View SEO packages
                  <ArrowIcon />
                </Link>
              </div>
            </div>

            <div className="tags" data-r style={{ "--d": "0.1s" } as React.CSSProperties}>
              <div>
                <span className="pill">Map pack rankings</span>
              </div>
              <div>
                <span className="pill">Technical SEO and site speed</span>
              </div>
              <div>
                <span className="pill">Content and links</span>
                <span className="pill">Revenue reporting</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
