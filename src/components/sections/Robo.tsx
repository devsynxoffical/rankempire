'use client';

import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function Robo() {
  const sectionRef = useRef<HTMLElement>(null);
  const robotRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    const ro = sectionRef.current;
    const rb = robotRef.current;
    if (!ro || !rb) return;

    // Intersection observer adds 'in' class
    const io = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          ro.classList.add('in');
          io.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    io.observe(ro);

    // 3D Pointer tilt
    let rx = 0;
    let ry = 0;
    let ticking = false;

    const onPointerMove = (e: PointerEvent) => {
      const r = ro.getBoundingClientRect();
      rx = (e.clientX - r.left) / r.width - 0.5;
      ry = (e.clientY - r.top) / r.height - 0.5;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          ticking = false;
          if (rb) {
            rb.style.transform = `translate(${rx * 24}px, ${ry * 20}px) rotate(${rx * 3}deg)`;
          }
        });
      }
    };

    const onPointerLeave = () => {
      if (rb) {
        rb.style.transform = '';
      }
    };

    ro.addEventListener('pointermove', onPointerMove);
    ro.addEventListener('pointerleave', onPointerLeave);

    return () => {
      io.disconnect();
      ro.removeEventListener('pointermove', onPointerMove);
      ro.removeEventListener('pointerleave', onPointerLeave);
    };
  }, []);

  return (
    <section ref={sectionRef} className="robo" id="robo" aria-label="Talk to us">
      <div className="rl">
        <img
          ref={robotRef}
          src="/img/robot.webp"
          alt="RankEmpire robot"
          id="robot"
          loading="lazy"
        />
      </div>
      <div className="rm">
        <h2>
          We rank
          <br />
          with
          <br />
          Robots.
          <span className="stk">
            <span>Let&apos;s Talk</span>
          </span>
        </h2>
        <Link href="/contact-us">
          Talk with us <i>&rarr;</i>
        </Link>
        <div className="sp" />
      </div>
      <div className="rr">
        <p>
          We&apos;re a small team of strategists, technical specialists and AI nerds,
          blending SEO, answer engines and automation so your pages turn into calls, not
          just rankings.
        </p>
      </div>
    </section>
  );
}
