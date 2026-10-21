"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { logos } from "@/data";

export default function HeroSection() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 2D Grain Canvas Effect from RankEmpire v3
  useEffect(() => {
    const cv = canvasRef.current;
    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!cv || RM) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    let w = 0;
    let h = 0;
    let vis = true;
    let last = 0;
    let animationFrameId: number;

    const sz = () => {
      w = cv.width = Math.ceil(cv.offsetWidth / 3);
      h = cv.height = Math.ceil(cv.offsetHeight / 3);
    };
    sz();
    window.addEventListener("resize", sz);

    const observer = new IntersectionObserver((entries) => {
      vis = entries[0]?.isIntersecting ?? true;
    });
    observer.observe(cv);

    let imgData = ctx.createImageData(Math.max(1, w), Math.max(1, h));

    const draw = (t: number) => {
      animationFrameId = requestAnimationFrame(draw);
      if (!vis || t - last < 80) return;
      last = t;

      if (imgData.width !== w || imgData.height !== h) {
        imgData = ctx.createImageData(Math.max(1, w), Math.max(1, h));
      }
      const a = imgData.data;
      for (let i = 0; i < a.length; i += 4) {
        const v = (Math.random() * 255) | 0;
        a[i] = a[i + 1] = a[i + 2] = v;
        a[i + 3] = 255;
      }
      ctx.putImageData(imgData, 0, 0);
    };

    animationFrameId = requestAnimationFrame(draw);

    return () => {
      window.removeEventListener("resize", sz);
      observer.disconnect();
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  const heroLetters = [
    { char: "r", delay: "0.15s" },
    { char: "a", delay: "0.20s" },
    { char: "n", delay: "0.25s" },
    { char: "k", delay: "0.30s" },
    { char: "e", delay: "0.35s" },
    { char: "m", delay: "0.40s" },
    { char: "p", delay: "0.45s" },
    { char: "i", delay: "0.50s" },
    { char: "r", delay: "0.55s" },
    { char: "e", delay: "0.60s" },
  ];

  return (
    <section className="nh" aria-label="Introduction">
      <div className="bgi">
        <img src="/img/v3-hero.webp" alt="" fetchPriority="high" />
      </div>
      <canvas ref={canvasRef} className="grain" aria-hidden="true" />

      <div className="nw">
        <div className="tr1">
          <span>US SEO company &nbsp; 2026&copy;</span>
          <span>
            Free audits this week
            <span className="slots" aria-hidden="true">
              <i></i>
              <i></i>
              <i></i>
              <i></i>
            </span>
            Open
          </span>
        </div>

        <div className="tr2">
          <span>
            <em>01.</em>Technical SEO &amp; site health
          </span>
          <span>
            <em>02.</em>Local SEO &amp; Google Maps
          </span>
          <span>
            <em>03.</em>Content &amp; authority
          </span>
        </div>

        <h1>
          <span className="word" aria-hidden="true">
            {heroLetters.map((item, idx) => (
              <span key={idx} style={{ animationDelay: item.delay }}>
                {item.char}
              </span>
            ))}
          </span>
          <span className="sr-only">
            RankEmpire: SEO company for local, e-commerce and SaaS brands
          </span>
        </h1>

        <span className="script" aria-hidden="true">
          rank higher. grow faster.
        </span>

        <div className="tr3">
          <div></div>
          <div>
            <p>
              We help local businesses, online stores and SaaS brands turn
              Google searches into calls, leads and revenue.
            </p>
            <Link className="btn dk" href="/contact-us/">
              Get a free SEO audit
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M12 5v14M5 12h14" />
              </svg>
            </Link>
          </div>
          <div>
            <div className="proof">
              <div className="av">
                <img src="/img/t1.webp" alt="" loading="lazy" />
                <img src="/img/t2.webp" alt="" loading="lazy" />
                <img src="/img/t3.webp" alt="" loading="lazy" />
                <img src="/img/t4.webp" alt="" loading="lazy" />
                <b>4</b>
              </div>
              <div>
                <small>
                  <span className="dots">&#9679;&#9679;&#9679;&#9679;&#9679;</span>
                  Verified result
                </small>
                <strong>42.1K Google clicks in 6 months</strong>
              </div>
            </div>
          </div>
        </div>

        <div className="tr4">
          <div className="sc">
            <i></i>Scroll to explore
          </div>
          <div className="lgm">
            <div className="t">
              {[...logos, ...logos].map((l, idx) => (
                <span key={idx} className="lg">
                  <svg
                    viewBox="0 0 24 24"
                    role="img"
                    aria-label={`${l.name} logo`}
                  >
                    <path d={l.path} />
                  </svg>
                  {l.name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
