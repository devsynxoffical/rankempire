"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ClientAnimations() {
  const pathname = usePathname();

  useEffect(() => {
    const $ = (s: string, c: ParentNode = document) =>
      c.querySelector<HTMLElement>(s);
    const $$ = (s: string, c: ParentNode = document) => [
      ...c.querySelectorAll<HTMLElement>(s),
    ];
    const cl = (v: number, a = 0, b = 1) => Math.max(a, Math.min(b, v));
    const RM = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isDesk = () => window.innerWidth > 1024;

    const intervals: (NodeJS.Timeout | number)[] = [];
    const animFrameIds: number[] = [];

    // 1. Opening: first visit per session
    const pre = $(".pre");
    if (pre) {
      let seen = false;
      try {
        seen = !!sessionStorage.getItem("re-seen");
        sessionStorage.setItem("re-seen", "1");
      } catch (e) {}

      if (seen || RM) {
        pre.remove();
      } else {
        const n = $(".pc b", pre);
        const t0 = performance.now();
        const tick = (t: number) => {
          const k = Math.min(1, (t - t0) / 1800);
          if (n) n.textContent = String(Math.round(k * k * (3 - 2 * k) * 100));
          if (k < 1) {
            animFrameIds.push(requestAnimationFrame(tick));
          }
        };
        animFrameIds.push(requestAnimationFrame(tick));
        const toId = setTimeout(() => pre.remove(), 3300);
        intervals.push(toId);
      }
    }

    // 2. Short accents in .ph become script font
    $$(".ph h1 .acc").forEach((a) => {
      const t = a.textContent?.trim() || "";
      if (t.length <= 16 && !/[A-Z]{2}|\d/.test(t)) {
        a.classList.add("scr");
      }
    });

    // 3. Header hide on scroll down, show on scroll up & shadow
    const hdr = $(".hdr");
    let ly = window.scrollY;
    const onScrollHeader = () => {
      const y = window.scrollY;
      if (hdr) {
        hdr.classList.toggle("sc", y > 8);
        if (
          !hdr.querySelector(".mi.op") &&
          !document.body.classList.contains("mopen")
        ) {
          hdr.classList.toggle("hide", y > ly && y > 420);
        }
      }
      ly = y;
    };
    window.addEventListener("scroll", onScrollHeader, { passive: true });

    // 4. Reveal observer for [data-r], .chart, [data-vis]
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: "100px 0px 40px 0px", threshold: 0 }
    );

    const observeOrReveal = (el: HTMLElement, observer: IntersectionObserver) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -50) {
        el.classList.add("in");
      } else {
        observer.observe(el);
      }
    };

    $$("[data-r], .chart, [data-vis]").forEach((el) => observeOrReveal(el, io));

    // Stagger containers
    $$("[data-stagger]").forEach((g) => {
      [...g.children].forEach((c, i) => {
        c.setAttribute("data-r", "");
        (c as HTMLElement).style.setProperty("--d", `${(i % 8) * 0.06}s`);
        observeOrReveal(c as HTMLElement, io);
      });
    });

    // Chart path total length for stroke-dasharray
    $$(".chart .ln").forEach((p) => {
      try {
        const svgPath = p as unknown as SVGPathElement;
        if (typeof svgPath.getTotalLength === "function") {
          p.style.setProperty(
            "--len",
            String(Math.ceil(svgPath.getTotalLength()))
          );
        }
      } catch (e) {}
    });

    // 5. Generic in-view for [data-io] (e.g. .ot .rs, .hw .c.ph, .hw .c.dark)
    const ioDirect = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            ioDirect.unobserve(e.target);
          }
        });
      },
      { rootMargin: "100px 0px 40px 0px", threshold: 0 }
    );
    $$("[data-io]").forEach((el) => observeOrReveal(el, ioDirect));

    // 6. Counters [data-count]
    const startCounter = (el: HTMLElement) => {
      if (el.dataset.counted) return;
      el.dataset.counted = "1";
      const endStr = el.dataset.count || "0";
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
        const k = cl((t - t0) / D);
        const v = end * (1 - Math.pow(1 - k, 3));
        el.textContent =
          pre +
          v.toLocaleString("en-US", {
            minimumFractionDigits: dec,
            maximumFractionDigits: dec,
          }) +
          suf;
        if (k < 1) animFrameIds.push(requestAnimationFrame(st));
      };
      animFrameIds.push(requestAnimationFrame(st));
    };

    const cio = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          cio.unobserve(e.target);
          startCounter(e.target as HTMLElement);
        });
      },
      { rootMargin: "100px 0px 20px 0px", threshold: 0 }
    );
    $$("[data-count]").forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 50 && rect.bottom > -50) {
        startCounter(el);
      } else {
        cio.observe(el);
      }
    });

    // 7. Hero grain canvas
    const cv = $(".nh canvas.grain") as HTMLCanvasElement | null;
    let grainIo: IntersectionObserver | null = null;
    if (cv && !RM) {
      const x = cv.getContext("2d");
      if (x) {
        let w = 0,
          h = 0,
          vis = true,
          last = 0;
        const sz = () => {
          w = cv.width = Math.ceil(cv.offsetWidth / 3);
          h = cv.height = Math.ceil(cv.offsetHeight / 3);
        };
        sz();
        window.addEventListener("resize", sz);
        grainIo = new IntersectionObserver((entries) => {
          vis = entries[0]?.isIntersecting ?? true;
        });
        grainIo.observe(cv);
        let d = x.createImageData(Math.max(1, w), Math.max(1, h));
        const draw = (t: number) => {
          animFrameIds.push(requestAnimationFrame(draw));
          if (!vis || t - last < 80) return;
          last = t;
          if (d.width !== w || d.height !== h) {
            d = x.createImageData(Math.max(1, w), Math.max(1, h));
          }
          const a = d.data;
          for (let i = 0; i < a.length; i += 4) {
            const v = (Math.random() * 255) | 0;
            a[i] = a[i + 1] = a[i + 2] = v;
            a[i + 3] = 255;
          }
          x.putImageData(d, 0, 0);
        };
        animFrameIds.push(requestAnimationFrame(draw));
      }
    }

    // 8. Hero parallax on giant word and background image
    const word = $(".nh .word");
    const bgi = $(".nh .bgi img");
    const onHeroScroll = () => {
      const y = window.scrollY;
      if (y > window.innerHeight * 1.2) return;
      if (word && !RM) word.style.transform = `translateY(${y * 0.18}px)`;
      if (bgi && !RM) bgi.style.transform = `translateY(${y * 0.3}px)`;
    };
    if ((word || bgi) && !RM) {
      window.addEventListener("scroll", onHeroScroll, { passive: true });
    }

    // 9. Dot grid shimmer [data-dots]
    $$("[data-dots]").forEach((g) => {
      const dots = [...g.querySelectorAll("i")];
      if (RM || dots.length === 0) return;
      let n = 26;
      const dotInterval = setInterval(() => {
        if (g.getBoundingClientRect().top > window.innerHeight) return;
        n = n >= 33 ? 18 : n + 1;
        dots.forEach((x, i) => x.classList.toggle("on", i < n));
      }, 420);
      intervals.push(dotInterval);
    });

    // 10. Point-of-view words light up with scroll [data-words]
    $$("[data-words]").forEach((el) => {
      const ws = [...el.querySelectorAll<HTMLElement>(".w")];
      if (ws.length === 0) return;
      const up = () => {
        const r = el.getBoundingClientRect();
        const p = Math.min(
          1,
          Math.max(
            0,
            (window.innerHeight * 0.85 - r.top) /
              (r.height + window.innerHeight * 0.35)
          )
        );
        const k = Math.round(p * ws.length * 1.15);
        ws.forEach((w, i) => w.classList.toggle("lit", i < k));
      };
      if (RM) {
        ws.forEach((w) => w.classList.add("lit"));
      } else {
        window.addEventListener("scroll", up, { passive: true });
        up();
      }
    });

    // 11. Trust section dual column parallax scroll & giant watermark
    const trust = $(".trust");
    const cols = $$(".trust .tcol");
    const giant = $(".giant");

    const frameScrollScenes = () => {
      const y = window.scrollY;
      const vh = window.innerHeight;

      if (trust && isDesk() && !RM) {
        const r = trust.getBoundingClientRect();
        if (r.bottom > 0 && r.top < vh) {
          const p = cl(-r.top / (trust.offsetHeight - vh));
          cols.forEach((c, i) => {
            const H = c.offsetHeight;
            const from = vh * (i ? 1.35 : 1.05);
            const to = -H + vh * (i ? 0.05 : 0.15);
            c.style.transform = `translate3d(0, ${(
              from +
              (to - from) * cl(p * (i ? 1.1 : 1))
            ).toFixed(1)}px, 0)`;
          });
        }
      }

      if (giant) {
        const r = giant.getBoundingClientRect();
        if (r.top < vh) {
          const p = cl((vh - r.top) / (r.height + vh * 0.3));
          giant.style.setProperty("--gy", `${((1 - p) * 40).toFixed(1)}%`);
        }
      }
    };

    let tick = false;
    const reqScrollScenes = () => {
      if (!tick) {
        tick = true;
        requestAnimationFrame(() => {
          tick = false;
          frameScrollScenes();
        });
      }
    };

    window.addEventListener("scroll", reqScrollScenes, { passive: true });
    window.addEventListener("resize", reqScrollScenes);
    frameScrollScenes();

    // 12. Footer clock (Eastern Time)
    const clk = $("[data-clock]");
    if (clk) {
      const f = new Intl.DateTimeFormat("en-US", {
        timeZone: "America/New_York",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      });
      const updateClock = () => {
        clk.textContent = f.format(new Date());
      };
      updateClock();
      const clockInterval = setInterval(updateClock, 1000);
      intervals.push(clockInterval);
    }

    // 13. Map rank grid (.grid9)
    $$(".grid9").forEach((g) => {
      const cells = $$("i", g);
      const paint = () =>
        cells.forEach((c, i) => {
          const x = (i % 7) - 3;
          const y = Math.floor(i / 7) - 3;
          const d = Math.hypot(x, y);
          const r = Math.max(1, Math.round(1 + d * 1.1 + Math.random() * 1.6));
          c.textContent = r > 9 ? "9+" : String(r);
          c.className =
            r <= 3 ? "t1" : r <= 5 ? "t2" : r <= 7 ? "t3" : "t4";
        });
      paint();
      if (!RM) {
        const gridInterval = setInterval(() => {
          if (g.getBoundingClientRect().top < window.innerHeight) paint();
        }, 3200);
        intervals.push(gridInterval);
      }
    });

    // 14. About Us: Mara Voss movable spotlight (--lx, --ly) & backdrop selector
    const mv = $(".mv");
    if (mv) {
      mv.onpointermove = (e) => {
        const r = mv.getBoundingClientRect();
        mv.style.setProperty(
          "--lx",
          (((e.clientX - r.left) / r.width) * 100).toFixed(1) + "%"
        );
        mv.style.setProperty(
          "--ly",
          (((e.clientY - r.top) / r.height) * 100).toFixed(1) + "%"
        );
      };
      const bs = $$(".bd button", mv);
      bs.forEach((b) => {
        b.onclick = () => {
          mv.dataset.bd = b.dataset.bd;
          bs.forEach((x) =>
            x.setAttribute("aria-pressed", String(x === b))
          );
        };
      });
      mv.onclick = (e) => {
        if ((e.target as HTMLElement).closest("a, button")) return;
        const order = ["l", "o", "d"];
        const cur = mv.dataset.bd || "l";
        const nxt = order[(order.indexOf(cur) + 1) % 3];
        const b = bs.find((x) => x.dataset.bd === nxt);
        if (b) b.click();
      };
    }

    // 15. FAQ accordion
    $$(".faqs").forEach((w) => {
      const qs = $$(".fq", w);
      qs.forEach((q) => {
        const btn = $("button", q);
        if (btn) {
          btn.onclick = () => {
            const o = !q.classList.contains("on");
            qs.forEach((x) => {
              x.classList.remove("on");
              const b = $("button", x);
              if (b) b.setAttribute("aria-expanded", "false");
            });
            if (o) {
              q.classList.add("on");
              btn.setAttribute("aria-expanded", "true");
            }
          };
        }
      });
    });

    // 16. Pricing toggle [data-price]
    $$("[data-price]").forEach((w) => {
      const bs = $$(".toggle button", w);
      bs.forEach((b) => {
        b.onclick = () => {
          const y = b.dataset.v === "y";
          bs.forEach((x) => {
            x.classList.toggle("on", x === b);
            x.setAttribute("aria-pressed", String(x === b));
          });
          $$("[data-m]", w).forEach((el) => {
            el.textContent = (y ? el.dataset.y : el.dataset.m) || "";
          });
          $$(".bill", w).forEach((el) => {
            el.textContent = (y ? el.dataset.yb : el.dataset.mb) || "";
          });
        };
      });
    });

    // 17. TOC highlight
    const tl = $$('.toc a[href^="#"]');
    let tio: IntersectionObserver | null = null;
    if (tl.length) {
      const secs = tl
        .map((a) => {
          const href = a.getAttribute("href");
          return href ? $(href) : null;
        })
        .filter(Boolean) as HTMLElement[];
      tio = new IntersectionObserver(
        (es) => {
          es.forEach((e) => {
            if (e.isIntersecting) {
              const id = "#" + e.target.id;
              tl.forEach((a) =>
                a.classList.toggle("on", a.getAttribute("href") === id)
              );
            }
          });
        },
        { rootMargin: "-30% 0px -60% 0px" }
      );
      secs.forEach((s) => tio?.observe(s));
    }

    // 18. Audit forms submit -> /contact-us/?site=...
    $$("form.audit").forEach((f) => {
      f.onsubmit = (e) => {
        e.preventDefault();
        const inp = $("input", f) as HTMLInputElement | null;
        const v = inp?.value.trim() || "";
        if (!v) {
          inp?.focus();
          return;
        }
        window.location.href = `/contact-us/?site=${encodeURIComponent(v)}`;
      };
    });

    // 19. Newsletter forms
    $$("form[data-news]").forEach((f) => {
      f.onsubmit = (e) => {
        e.preventDefault();
        const i = $("input", f) as HTMLInputElement | null;
        if (!i || !i.value.includes("@")) {
          i?.focus();
          return;
        }
        window.location.href = `mailto:${f.dataset.news}?subject=${encodeURIComponent(
          "Newsletter signup"
        )}&body=${encodeURIComponent(
          "Please add " + i.value + " to the RankEmpire newsletter."
        )}`;
        i.value = "";
        i.placeholder = "Thanks, check your email app";
      };
    });

    return () => {
      window.removeEventListener("scroll", onScrollHeader);
      window.removeEventListener("scroll", onHeroScroll);
      window.removeEventListener("scroll", reqScrollScenes);
      window.removeEventListener("resize", reqScrollScenes);
      io.disconnect();
      ioDirect.disconnect();
      cio.disconnect();
      if (grainIo) grainIo.disconnect();
      if (tio) tio.disconnect();
      intervals.forEach((id) => clearInterval(id as number));
      animFrameIds.forEach(cancelAnimationFrame);
    };
  }, [pathname]);

  return null;
}
