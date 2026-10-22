"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, PinIcon } from "@/components/common/Icons";

interface GridItem {
  kw: string;
  after: number[][];
  before: number[][];
}

const GRID_KW: GridItem[] = [
  {
    kw: "dumpster rental near me",
    after: [
      [3, 4, 4, 4, 4, 4, 3, 2, 2, 2, 2],
      [4, 4, 4, 4, 4, 3, 2, 2, 2, 2, 2],
      [4, 4, 4, 3, 2, 2, 2, 2, 2, 2, 4],
      [5, 1, 3, 2, 2, 2, 2, 2, 2, 2, 4],
      [5, 4, 3, 2, 1, 1, 2, 2, 1, 2, 3],
      [5, 5, 1, 2, 1, 2, 1, 2, 1, 2, 4],
      [3, 6, 2, 3, 1, 1, 1, 2, 2, 4, 4],
      [5, 5, 5, 4, 4, 4, 3, 3, 2, 5, 4],
      [5, 5, 5, 5, 5, 5, 4, 5, 5, 5, 7],
      [5, 5, 5, 5, 6, 5, 7, 6, 7, 8, 7],
      [5, 5, 5, 5, 5, 7, 6, 6, 6, 8, 9],
    ],
    before: [
      [12, 14, 15, 13, 11, 9, 8, 9, 11, 14, 16],
      [11, 12, 13, 12, 9, 8, 7, 8, 10, 13, 15],
      [10, 11, 11, 9, 8, 7, 7, 8, 9, 12, 16],
      [13, 9, 10, 8, 7, 6, 6, 7, 8, 11, 15],
      [12, 10, 9, 7, 6, 5, 6, 7, 6, 10, 14],
      [14, 12, 8, 7, 5, 6, 5, 7, 6, 10, 15],
      [11, 15, 9, 8, 6, 5, 5, 7, 8, 13, 16],
      [16, 15, 14, 12, 11, 10, 9, 10, 8, 15, 17],
      [18, 17, 16, 15, 15, 14, 12, 14, 15, 16, 20],
      [19, 18, 17, 16, 17, 15, 18, 17, 18, 20, 20],
      [20, 19, 18, 17, 16, 19, 18, 18, 19, 20, 20],
    ],
  },
  {
    kw: "roll off dumpster",
    after: [
      [2, 2, 3, 3, 3, 3, 2, 2, 1, 2, 2],
      [2, 3, 3, 3, 3, 2, 2, 1, 1, 2, 2],
      [3, 3, 3, 2, 2, 2, 1, 1, 2, 2, 3],
      [4, 2, 2, 2, 1, 1, 1, 2, 2, 2, 3],
      [4, 3, 2, 2, 1, 1, 1, 1, 1, 2, 3],
      [4, 4, 1, 2, 1, 1, 1, 2, 1, 2, 3],
      [3, 4, 2, 2, 1, 1, 1, 2, 2, 3, 3],
      [4, 4, 4, 3, 3, 3, 2, 3, 2, 4, 3],
      [5, 5, 4, 4, 4, 4, 3, 4, 4, 4, 6],
      [5, 5, 5, 5, 5, 4, 6, 5, 6, 7, 6],
      [5, 5, 5, 5, 5, 6, 5, 5, 5, 7, 8],
    ],
    before: [
      [9, 11, 12, 11, 9, 8, 7, 8, 9, 12, 14],
      [9, 10, 11, 10, 8, 7, 6, 7, 8, 11, 13],
      [8, 9, 9, 8, 7, 6, 6, 7, 8, 10, 13],
      [11, 8, 8, 7, 6, 5, 5, 6, 7, 9, 12],
      [10, 9, 8, 6, 5, 4, 5, 6, 5, 8, 12],
      [12, 10, 7, 6, 4, 5, 4, 6, 5, 8, 13],
      [9, 13, 8, 7, 5, 4, 4, 6, 7, 11, 14],
      [14, 13, 12, 10, 9, 8, 7, 8, 7, 13, 15],
      [16, 15, 14, 13, 13, 12, 10, 12, 13, 14, 18],
      [17, 16, 15, 14, 15, 13, 16, 15, 16, 18, 18],
      [18, 17, 16, 15, 14, 17, 16, 16, 17, 18, 18],
    ],
  },
  {
    kw: "junk removal charleston",
    after: [
      [3, 3, 3, 4, 4, 4, 3, 2, 2, 3, 3],
      [3, 3, 4, 4, 4, 3, 2, 2, 2, 3, 3],
      [4, 4, 4, 3, 3, 2, 2, 2, 2, 3, 4],
      [5, 2, 3, 3, 2, 2, 2, 2, 2, 3, 4],
      [5, 4, 3, 2, 1, 1, 2, 2, 2, 3, 4],
      [5, 5, 2, 2, 1, 2, 1, 2, 1, 3, 4],
      [4, 6, 3, 3, 2, 1, 1, 2, 2, 4, 4],
      [5, 5, 5, 4, 4, 4, 3, 3, 3, 5, 5],
      [6, 6, 5, 5, 5, 5, 4, 5, 5, 5, 7],
      [6, 6, 6, 5, 6, 5, 7, 6, 7, 8, 8],
      [6, 6, 6, 6, 6, 7, 6, 6, 6, 8, 9],
    ],
    before: [
      [13, 15, 16, 14, 12, 10, 9, 10, 12, 15, 17],
      [12, 13, 14, 13, 10, 9, 8, 9, 11, 14, 16],
      [11, 12, 12, 10, 9, 8, 8, 9, 10, 13, 17],
      [14, 10, 11, 9, 8, 7, 7, 8, 9, 12, 16],
      [13, 11, 10, 8, 7, 6, 7, 8, 7, 11, 15],
      [15, 13, 9, 8, 6, 7, 6, 8, 7, 11, 16],
      [12, 16, 10, 9, 7, 6, 6, 8, 9, 14, 17],
      [17, 16, 15, 13, 12, 11, 10, 11, 9, 16, 18],
      [19, 18, 17, 16, 16, 15, 13, 15, 16, 17, 20],
      [20, 19, 18, 17, 18, 16, 19, 18, 19, 20, 20],
      [20, 20, 19, 18, 17, 20, 19, 19, 20, 20, 20],
    ],
  },
];

const col = (v: number) =>
  v <= 3 ? "#3ec36a" : v <= 6 ? "#b9e35a" : v <= 10 ? "#f4c542" : "#ec4e3b";

export default function RankGrid() {
  const [activeKw, setActiveKw] = useState(0);
  const [sliderVal, setSliderVal] = useState(100);
  const [tooltip, setTooltip] = useState<{ text: string; x: number; y: number } | null>(null);
  const sectionRef = useRef<HTMLElement | null>(null);
  const mapRef = useRef<HTMLDivElement | null>(null);

  const d = GRID_KW[activeKw];
  const t = sliderVal / 100;

  let top3 = 0;
  let sum = 0;
  const cells: { val: number; strVal: string; bg: string; s: number; r: number; c: number }[] = [];

  for (let r = 0; r < 11; r++) {
    for (let c = 0; c < 11; c++) {
      const b = d.before[r][c];
      const a = d.after[r][c];
      const v = Math.round(b + (a - b) * t);
      const strVal = v > 20 ? "20+" : String(v);
      const bg = col(v);
      const s = v <= 3 ? 1.08 : 1;
      if (v <= 3) top3++;
      sum += v;
      cells.push({ val: v, strVal, bg, s, r, c });
    }
  }

  const avg = (sum / 121).toFixed(1);
  const win = Math.round((top3 / 121) * 100);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    let hasRun = false;
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasRun) {
          hasRun = true;
          io.disconnect();
          const start = performance.now();
          const duration = 1600;
          const animate = (time: number) => {
            const progress = Math.min(1, (time - start) / duration);
            setSliderVal(Math.round(progress * 100));
            if (progress < 1) requestAnimationFrame(animate);
          };
          setTimeout(() => requestAnimationFrame(animate), 300);
        }
      },
      { threshold: 0.3 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  const handlePointerEnter = (e: React.PointerEvent<HTMLElement>, val: number) => {
    if (!mapRef.current) return;
    const cellRect = e.currentTarget.getBoundingClientRect();
    const mapRect = mapRef.current.getBoundingClientRect();
    setTooltip({
      text: `Position #${val} here`,
      x: cellRect.left - mapRect.left + cellRect.width / 2,
      y: cellRect.top - mapRect.top,
    });
  };

  return (
    <section ref={sectionRef} className="rg" id="rankgrid" aria-labelledby="rg-h">
      <div className="wrap">
        <div className="rg-g">
          <div className="rg-l">
            <div className="xh" data-r>
              <span className="xe">
                <i></i>Local rank grid
              </span>
              <h2 id="rg-h" className="h2">
                See exactly where you rank, street by street.
              </h2>
              <p>
                We track the map pack from 121 points across your service area, not just from your
                office. Pick a keyword, drag the slider and watch the grid turn green.
              </p>
            </div>

            <div className="rg-kw" role="group" aria-label="Keyword">
              {GRID_KW.map((k, i) => (
                <button
                  key={i}
                  type="button"
                  className={activeKw === i ? "on" : ""}
                  onClick={() => setActiveKw(i)}
                >
                  {k.kw}
                </button>
              ))}
            </div>

            <div className="rg-sl">
              <span>Before</span>
              <input
                type="range"
                min="0"
                max="100"
                value={sliderVal}
                id="rg-range"
                aria-label="Before and after"
                onChange={(e) => setSliderVal(Number(e.target.value))}
              />
              <span>After</span>
            </div>

            <div className="rg-st">
              <div style={{ "--c": "var(--grn)" } as React.CSSProperties}>
                <b id="rg-top3">{top3}</b>
                <span>points in top 3</span>
              </div>
              <div style={{ "--c": "var(--blu)" } as React.CSSProperties}>
                <b id="rg-avg">{avg}</b>
                <span>average position</span>
              </div>
              <div style={{ "--c": "var(--red)" } as React.CSSProperties}>
                <b id="rg-win">{win}%</b>
                <span>of the area won</span>
              </div>
            </div>

            <div data-r>
              <Link className="btn ac" href="/local-seo/">
                Explore local SEO
                <ArrowIcon />
              </Link>
            </div>
          </div>

          <div ref={mapRef} className="rg-map" data-r="s">
            <Image
              src="/img/mapbase.webp"
              alt="Local service area map"
              loading="lazy"
              width={1000}
              height={700}
            />
            <div className="rg-grid" id="rg-grid">
              {cells.map((cell, i) => (
                <i
                  key={i}
                  style={
                    {
                      "--r": cell.r,
                      "--c": cell.c,
                      "--bgc": cell.bg,
                      "--s": cell.s,
                    } as React.CSSProperties
                  }
                  onPointerEnter={(e) => handlePointerEnter(e, cell.val)}
                  onPointerLeave={() => setTooltip(null)}
                >
                  {cell.strVal}
                </i>
              ))}
            </div>

            {tooltip && (
              <div
                className="rg-tip"
                id="rg-tip"
                style={{
                  left: `${tooltip.x}px`,
                  top: `${tooltip.y}px`,
                  display: "block",
                }}
              >
                {tooltip.text}
              </div>
            )}

            <div className="rg-leg">
              <span>
                <i style={{ background: "#3ec36a" }}></i>1 to 3
              </span>
              <span>
                <i style={{ background: "#b9e35a" }}></i>4 to 6
              </span>
              <span>
                <i style={{ background: "#f4c542" }}></i>7 to 10
              </span>
              <span>
                <i style={{ background: "#ec4e3b" }}></i>11+
              </span>
            </div>

            <div className="rg-pin" aria-hidden="true">
              <PinIcon />
              <b>Your business</b>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
