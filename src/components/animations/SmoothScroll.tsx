"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesk = () => window.innerWidth > 980;
    const cl = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));

    // 1. Initialize Lenis Smooth Scroll
    let lenis: Lenis | null = null;
    let animationFrameId: number;

    // Forward declare frame
    let frameFunc = () => {};

    if (!RM) {
      lenis = new Lenis({
        duration: 1.15,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        smoothWheel: true,
      });
      lenisRef.current = lenis;
      (window as unknown as { lenis: Lenis }).lenis = lenis;

      const raf = (time: number) => {
        lenis?.raf(time);
        frameFunc();
        animationFrameId = requestAnimationFrame(raf);
      };
      animationFrameId = requestAnimationFrame(raf);
    }

    // 2. BigWord Background Fitting (bwFit)
    const bws = Array.from(document.querySelectorAll<HTMLElement>(".bigword"));
    const bwFit = () => {
      bws.forEach((el) => {
        const W = el.clientWidth;
        const H = el.clientHeight;
        Array.from(el.children).forEach((s) => {
          const span = s as HTMLElement;
          span.style.backgroundSize = `${W}px ${H}px`;
          span.style.backgroundPosition = `${-span.offsetLeft}px ${-span.offsetTop}px`;
        });
      });
    };
    bwFit();
    if (document.fonts) {
      document.fonts.ready.then(bwFit);
    }
    const tFit1 = setTimeout(bwFit, 120);
    const tFit2 = setTimeout(bwFit, 450);

    // 3. Line reveals [data-lines]
    document.querySelectorAll<HTMLElement>("[data-lines]").forEach((el) => {
      if (el.classList.contains("lines-init") || el.querySelector(".ln")) return;
      el.classList.add("lines-init", "lines");
      el.innerHTML = el.innerHTML
        .split(/<br\s*\/?>/)
        .map((l, i) => `<span class="ln"><span style="--d:${i * 0.08}s">${l}</span></span>`)
        .join("");
      el.setAttribute("data-r", "l");
    });

    // 4. Stagger containers [data-stagger]
    document.querySelectorAll<HTMLElement>("[data-stagger]").forEach((container) => {
      Array.from(container.children).forEach((child, i) => {
        const el = child as HTMLElement;
        if (!el.hasAttribute("data-r")) {
          el.setAttribute("data-r", "");
          el.style.setProperty("--d", `${(i % 6) * 0.08}s`);
        }
      });
    });

    // 5. Reveal Observer [data-r]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -4% 0px" }
    );
    document.querySelectorAll<HTMLElement>("[data-r]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight * 0.96) {
        el.classList.add("in");
      } else {
        io.observe(el);
      }
    });

    // 6. Word reveal [.wrev]
    const wrevElements = Array.from(document.querySelectorAll<HTMLElement>(".wrev")).map((el) => {
      let nodes = Array.from(el.querySelectorAll<HTMLElement>(".w"));
      if (nodes.length === 0) {
        const walk = (node: Node) => {
          Array.from(node.childNodes).forEach((ch) => {
            if (ch.nodeType === 3) {
              const frag = document.createDocumentFragment();
              (ch.textContent || "").split(/(\s+)/).forEach((w) => {
                if (!w) return;
                if (/^\s+$/.test(w)) {
                  frag.appendChild(document.createTextNode(w));
                } else {
                  const s = document.createElement("span");
                  s.className = "w";
                  s.textContent = w;
                  frag.appendChild(s);
                  nodes.push(s);
                }
              });
              ch.replaceWith(frag);
            } else if (ch.nodeType === 1) {
              walk(ch);
            }
          });
        };
        walk(el);
      }
      return { el, ws: nodes, last: -1 };
    });

    // 7. Counters [data-count]
    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          cio.unobserve(entry.target);
          const el = entry.target as HTMLElement;
          const end = parseFloat(el.dataset.count || "0");
          const suf = el.dataset.suf || "";
          const pre = el.dataset.pre || "";
          const dur = 1400;
          const t0 = performance.now();
          const step = (t: number) => {
            const k = cl((t - t0) / dur);
            const val = end * (1 - Math.pow(1 - k, 3));
            el.textContent = pre + (end % 1 ? val.toFixed(1) : Math.round(val).toLocaleString()) + suf;
            if (k < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        });
      },
      { threshold: 0.6 }
    );
    document.querySelectorAll<HTMLElement>("[data-count]").forEach((el) => cio.observe(el));

    // 8. Sticky Service Accordion Setup
    const svcw = document.querySelector<HTMLElement>(".svcw");
    const svs = Array.from(document.querySelectorAll<HTMLElement>(".svcw .sv"));
    let svOn = -1;
    let svPin = false;

    const setSv = (index: number) => {
      if (index === svOn) return;
      svOn = index;
      svs.forEach((s, k) => s.classList.toggle("on", k === index));
    };

    const svLayout = () => {
      if (!svcw) return;
      const list = svcw.querySelector<HTMLElement>(".svcs");
      if (!list) return;
      svcw.style.height = "";
      list.style.position = "";
      list.style.top = "";

      if (!isDesk() || RM) {
        svPin = false;
        if (svOn < 0) setSv(0);
        return;
      }
      const prev = svOn;
      setSv(0);
      const h = list.offsetHeight;
      if (h < window.innerHeight - 40) {
        svPin = true;
        svcw.style.height = `${h + svs.length * window.innerHeight * 0.42}px`;
        list.style.position = "sticky";
        list.style.top = `${Math.max(80, (window.innerHeight - h) / 2)}px`;
      } else {
        svPin = false;
      }
      if (prev >= 0) setSv(prev);
    };

    if (svcw) {
      setSv(0);
      svLayout();
    }

    svs.forEach((s, i) => {
      const row = s.querySelector(".row");
      if (!row) return;
      row.addEventListener("click", (e) => {
        if ((e.target as HTMLElement).closest("a")) return;
        if (svPin && lenis && svcw) {
          const r = svcw.getBoundingClientRect();
          const span = svcw.offsetHeight - window.innerHeight;
          lenis.scrollTo(window.scrollY + r.top + (span * (i + 0.5)) / svs.length);
        } else {
          setSv(i === svOn && !svPin ? -1 : i);
        }
      });
    });

    // 9. Frame Update Loop
    const nav = document.querySelector<HTMLElement>(".nav");
    let lastY = window.scrollY;

    const navTick = (y: number) => {
      if (!nav) return;
      nav.classList.toggle("solid", y > 40);
      if (document.body.classList.contains("mopen")) return;
      nav.classList.toggle("hide", y > lastY && y > 400);
      lastY = y;
    };

    const band = document.querySelector<HTMLElement>(".band .bg");
    const bigw = document.querySelector<HTMLElement>(".bigword");
    const proc = document.querySelector<HTMLElement>(".proc");
    const pcs = Array.from(document.querySelectorAll<HTMLElement>(".proc .pc"));
    const works = Array.from(document.querySelectorAll<HTMLElement>(".wk"));
    const trust = document.querySelector<HTMLElement>(".trust");
    const cols = Array.from(document.querySelectorAll<HTMLElement>(".trust .tcol"));
    const giant = document.querySelector<HTMLElement>(".giant");
    const phi = Array.from(document.querySelectorAll<HTMLElement>(".phimg img"));

    const frame = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;
      navTick(y);

      // Hero band parallax
      if (band && band.parentElement) {
        const r = band.parentElement.getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh) {
          band.style.transform = `translate3d(0, ${(r.top * -0.12).toFixed(1)}px, 0)`;
        }
      }

      // Bigword subtle parallax & scale
      if (bigw && y < vh * 1.2) {
        bigw.style.transform = `translate3d(0, ${(y * 0.18).toFixed(1)}px, 0) scale(${(1 - y * 0.00012).toFixed(4)})`;
      }

      // Word reveal lighting
      wrevElements.forEach((o) => {
        const r = o.el.getBoundingClientRect();
        if (r.top > vh || r.bottom < 0) return;
        const p = cl((vh * 0.85 - r.top) / (r.height + vh * 0.45));
        const n = Math.round(p * o.ws.length);
        if (n !== o.last) {
          o.ws.forEach((w, i) => w.classList.toggle("on", i < n));
          o.last = n;
        }
      });

      // Pinned Process Cards
      if (proc && isDesk() && !RM) {
        const r = proc.getBoundingClientRect();
        const p = cl(-r.top / (proc.offsetHeight - vh));
        pcs.forEach((c, i) => {
          const k = cl((p - 0.04 - i * 0.17) / 0.3);
          const e = 1 - Math.pow(1 - k, 3);
          c.style.setProperty("--y", `${((1 - e) * (vh * 0.9) + (1 - e) * i * 40).toFixed(1)}px`);
        });
      }

      // Sticky service active sync
      if (svPin && svcw) {
        const r = svcw.getBoundingClientRect();
        const span = svcw.offsetHeight - vh;
        const p = cl(-r.top / span);
        setSv(Math.min(svs.length - 1, Math.floor(p * svs.length * 0.999)));
      }

      // Stacking playbook cards
      if (works.length && isDesk()) {
        works.forEach((w, i) => {
          const nx = works[i + 1];
          const c = w.firstElementChild as HTMLElement | null;
          if (!c) return;
          if (!nx) {
            c.style.transform = "";
            c.style.filter = "";
            return;
          }
          const r = nx.getBoundingClientRect();
          const top = parseFloat(getComputedStyle(nx).top) || 110;
          const k = cl(1 - (r.top - top) / (vh * 0.8));
          c.style.transform = `scale(${(1 - k * 0.06).toFixed(4)})`;
          c.style.filter = k > 0 ? `brightness(${(1 - k * 0.12).toFixed(3)})` : "";
        });
      }

      // Dual-column trust parallax
      if (trust && isDesk() && !RM) {
        const r = trust.getBoundingClientRect();
        const p = cl(-r.top / (trust.offsetHeight - vh));
        cols.forEach((c, i) => {
          const H = c.offsetHeight;
          const sp = i ? 1.1 : 1;
          const from = vh * (i ? 1.35 : 1.05);
          const to = -H + vh * (i ? 0.05 : 0.15);
          c.style.transform = `translate3d(0, ${(from + (to - from) * cl(p * sp)).toFixed(1)}px, 0)`;
        });
      }

      // Giant watermark
      if (giant) {
        const r = giant.getBoundingClientRect();
        const p = cl((vh - r.top) / (r.height + vh * 0.3));
        giant.style.setProperty("--gy", `${((1 - p) * 40).toFixed(1)}%`);
      }

      // Inner page hero image parallax
      phi.forEach((im) => {
        if (!im.parentElement) return;
        const r = im.parentElement.getBoundingClientRect();
        if (r.bottom < 0 || r.top > vh) return;
        im.style.transform = `translate3d(0, ${(-(1 - (r.top + r.height) / (vh + r.height)) * 15).toFixed(2)}%, 0)`;
      });
    };

    frameFunc = frame;

    let tick = false;
    const req = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(() => {
          tick = false;
          frame();
        });
      }
    };

    window.addEventListener("scroll", req, { passive: true });
    window.addEventListener("resize", () => {
      bwFit();
      svLayout();
      req();
    });

    if (lenis) {
      lenis.on("scroll", req);
    }
    frame();

    // 10. Anchor link smooth scroll
    const handleAnchorClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a[href^="#"]');
      if (!target) return;
      const href = target.getAttribute("href");
      if (!href || href.length < 2) return;
      const el = document.querySelector(href);
      if (!el) return;
      e.preventDefault();
      lenis ? lenis.scrollTo(el as HTMLElement, { offset: -90 }) : el.scrollIntoView({ behavior: "smooth" });
    };
    document.addEventListener("click", handleAnchorClick);

    return () => {
      clearTimeout(tFit1);
      clearTimeout(tFit2);
      if (animationFrameId) cancelAnimationFrame(animationFrameId);
      window.removeEventListener("scroll", req);
      document.removeEventListener("click", handleAnchorClick);
      io.disconnect();
      cio.disconnect();
      if (lenis) {
        lenis.destroy();
        lenisRef.current = null;
      }
    };
  }, [pathname]);

  return <>{children}</>;
}
