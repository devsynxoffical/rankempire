"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // 1. Reveal on scroll
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.05 }
    );

    document.querySelectorAll("[data-r], .chart, [data-vis]").forEach((el) => {
      io.observe(el);
    });

    document.querySelectorAll("[data-stagger]").forEach((g) => {
      [...g.children].forEach((c, i) => {
        c.setAttribute("data-r", "");
        (c as HTMLElement).style.setProperty("--d", (i % 8) * 0.06 + "s");
        io.observe(c);
      });
    });

    // Word split
    document.querySelectorAll("[data-split]").forEach((el) => {
      if (el.classList.contains("split-w")) return;
      let i = 0;
      const walk = (n: Node) => {
        [...n.childNodes].forEach((ch) => {
          if (ch.nodeType === 3 && ch.textContent) {
            const f = document.createDocumentFragment();
            ch.textContent.split(/(\s+)/).forEach((w) => {
              if (!w) return;
              if (/^\s+$/.test(w)) {
                f.appendChild(document.createTextNode(w));
              } else {
                const s = document.createElement("span");
                s.className = "w";
                s.style.setProperty("--d", i++ * 0.045 + "s");
                s.textContent = w;
                f.appendChild(s);
              }
            });
            ch.replaceWith(f);
          } else if (ch.nodeType === 1) {
            walk(ch);
          }
        });
      };
      walk(el);
      el.classList.add("split-w");
      requestAnimationFrame(() => {
        requestAnimationFrame(() => el.classList.add("in"));
      });
    });

    // SVG chart path length
    document.querySelectorAll<SVGPathElement>(".chart .ln").forEach((p) => {
      try {
        p.style.setProperty("--len", String(Math.ceil(p.getTotalLength())));
      } catch (e) {}
    });

    // 2. Animated counters
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          const el = e.target as HTMLElement;
          const endStr = el.dataset.count;
          if (!endStr) return;
          const end = parseFloat(endStr);
          const dec = (endStr.split(".")[1] || "").length;
          const pre = el.dataset.pre || "";
          const suf = el.dataset.suf || "";
          if (RM) {
            el.textContent =
              pre +
              end.toLocaleString("en-US", { minimumFractionDigits: dec }) +
              suf;
            return;
          }
          const t0 = performance.now();
          const D = 1600;
          const st = (t: number) => {
            const k = Math.max(0, Math.min(1, (t - t0) / D));
            const v = end * (1 - Math.pow(1 - k, 3));
            el.textContent =
              pre +
              v.toLocaleString("en-US", {
                minimumFractionDigits: dec,
                maximumFractionDigits: dec,
              }) +
              suf;
            if (k < 1) requestAnimationFrame(st);
          };
          requestAnimationFrame(st);
        });
      },
      { threshold: 0.3 }
    );
    document.querySelectorAll("[data-count]").forEach((el) => cio.observe(el));

    // 3. 7x7 Local Map Rank Grid (.grid9) simulation
    const gridIntervals: NodeJS.Timeout[] = [];
    document.querySelectorAll(".grid9").forEach((g) => {
      const cells = [...g.querySelectorAll("i")];
      if (cells.length === 0) return;
      const paint = () => {
        cells.forEach((c, i) => {
          const x = (i % 7) - 3;
          const y = Math.floor(i / 7) - 3;
          const d = Math.hypot(x, y);
          const r = Math.max(1, Math.round(1 + d * 1.1 + Math.random() * 1.6));
          c.textContent = r > 9 ? "9+" : String(r);
          c.className = r <= 3 ? "t1" : r <= 5 ? "t2" : r <= 7 ? "t3" : "t4";
        });
      };
      paint();
      if (!RM) {
        const interval = setInterval(() => {
          const rect = g.getBoundingClientRect();
          if (rect.top < window.innerHeight && rect.bottom > 0) {
            paint();
          }
        }, 3200);
        gridIntervals.push(interval);
      }
    });

    // 4. Tabs
    document.querySelectorAll("[data-tabs]").forEach((w) => {
      const bs = [...w.querySelectorAll<HTMLButtonElement>(".tabs button")];
      const ps = [...w.querySelectorAll(".tpanel")];
      bs.forEach((b, i) => {
        b.onclick = () => {
          bs.forEach((x) => {
            x.classList.toggle("on", x === b);
            x.setAttribute("aria-selected", String(x === b));
          });
          ps.forEach((p, k) => p.classList.toggle("on", k === i));
        };
      });
    });

    // 5. Pricing toggle
    document.querySelectorAll("[data-price]").forEach((w) => {
      const bs = [...w.querySelectorAll<HTMLButtonElement>(".toggle button")];
      bs.forEach((b) => {
        b.onclick = () => {
          const y = b.dataset.v === "y";
          bs.forEach((x) => {
            x.classList.toggle("on", x === b);
            x.setAttribute("aria-pressed", String(x === b));
          });
          w.querySelectorAll<HTMLElement>("[data-m]").forEach((el) => {
            el.textContent = (y ? el.dataset.y : el.dataset.m) || "";
          });
          w.querySelectorAll<HTMLElement>(".bill").forEach((el) => {
            el.textContent = (y ? el.dataset.yb : el.dataset.mb) || "";
          });
        };
      });
    });

    // 6. FAQ Accordion
    document.querySelectorAll(".faqs").forEach((w) => {
      const qs = [...w.querySelectorAll(".fq")];
      qs.forEach((q) => {
        const btn = q.querySelector("button");
        if (!btn) return;
        btn.onclick = () => {
          const isOpen = q.classList.contains("on");
          qs.forEach((x) => {
            x.classList.remove("on");
            x.querySelector("button")?.setAttribute("aria-expanded", "false");
          });
          if (!isOpen) {
            q.classList.add("on");
            btn.setAttribute("aria-expanded", "true");
          }
        };
      });
    });

    // 7. Scroll scenes: Header shadow, Trust parallax, Giant wordmark parallax
    const hdr = document.querySelector(".hdr");
    const trust = document.querySelector(".trust") as HTMLElement | null;
    const cols = [...document.querySelectorAll<HTMLElement>(".trust .tcol")];
    const giant = document.querySelector(".giant") as HTMLElement | null;

    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        ticking = false;
        const y = window.scrollY;
        const vh = window.innerHeight;
        if (hdr) hdr.classList.toggle("sc", y > 8);

        if (trust && window.innerWidth > 1024 && !RM) {
          const r = trust.getBoundingClientRect();
          if (r.bottom > 0 && r.top < vh) {
            const p = Math.max(0, Math.min(1, -r.top / (trust.offsetHeight - vh)));
            cols.forEach((c, i) => {
              const H = c.offsetHeight;
              const from = vh * (i ? 1.35 : 1.05);
              const to = -H + vh * (i ? 0.05 : 0.15);
              const factor = Math.max(0, Math.min(1, p * (i ? 1.1 : 1)));
              c.style.transform = `translate3d(0, ${(from + (to - from) * factor).toFixed(1)}px, 0)`;
            });
          }
        }

        if (giant) {
          const r = giant.getBoundingClientRect();
          if (r.top < vh) {
            const p = Math.max(0, Math.min(1, (vh - r.top) / (r.height + vh * 0.3)));
            giant.style.setProperty("--gy", ((1 - p) * 40).toFixed(1) + "%");
          }
        }
      });
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    onScroll();

    return () => {
      io.disconnect();
      cio.disconnect();
      gridIntervals.forEach(clearInterval);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [pathname]);

  return null;
}
