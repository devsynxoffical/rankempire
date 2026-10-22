'use client';

import React, { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

type BackdropType = 'l' | 'o' | 'd';

export default function Founder() {
  const [backdrop, setBackdrop] = useState<BackdropType>('l');
  const [clock, setClock] = useState('12:25');
  const sectionRef = useRef<HTMLElement>(null);

  // Live ET Clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatter = new Intl.DateTimeFormat('en-US', {
          timeZone: 'America/New_York',
          hour: '2-digit',
          minute: '2-digit',
          hour12: false,
        });
        setClock(formatter.format(new Date()));
      } catch {
        // fallback
      }
    };
    updateTime();
    const interval = setInterval(updateTime, 30000);
    return () => clearInterval(interval);
  }, []);

  // Spotlight & Perspective Tilt
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;

    const onPointerEnter = () => {
      document.body.classList.add('in-fd');
    };
    const onPointerLeave = () => {
      document.body.classList.remove('in-fd');
    };
    const onPointerMove = (e: PointerEvent) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width;
      const py = (e.clientY - r.top) / r.height;
      el.style.setProperty('--lx', `${(px * 100).toFixed(1)}%`);
      el.style.setProperty('--ly', `${(py * 100).toFixed(1)}%`);
      const dx = 0.5 - px;
      el.style.setProperty('--sx', `${(dx * 170).toFixed(0)}px`);
      el.style.setProperty('--sk', `${(dx * -22).toFixed(1)}deg`);
    };

    el.addEventListener('pointerenter', onPointerEnter);
    el.addEventListener('pointerleave', onPointerLeave);
    el.addEventListener('pointermove', onPointerMove);

    return () => {
      el.removeEventListener('pointerenter', onPointerEnter);
      el.removeEventListener('pointerleave', onPointerLeave);
      el.removeEventListener('pointermove', onPointerMove);
      document.body.classList.remove('in-fd');
    };
  }, []);

  const handleBackdropClick = (type: BackdropType, e: React.MouseEvent) => {
    e.stopPropagation();
    setBackdrop(type);
  };

  const handleSectionClick = (e: React.MouseEvent) => {
    if ((e.target as HTMLElement).closest('a, button, input')) return;
    const order: BackdropType[] = ['l', 'o', 'd'];
    const nextIdx = (order.indexOf(backdrop) + 1) % 3;
    setBackdrop(order[nextIdx]);
  };

  return (
    <section
      ref={sectionRef}
      className="fd"
      data-bd={backdrop}
      aria-labelledby="fd-h"
      onClick={handleSectionClick}
      style={{ cursor: 'crosshair' }}
    >
      <div className="fd-w">
        <div className="fd-l">
          <h2 id="fd-h">
            SEO strategist
            <br />
            &amp; funnel builder
          </h2>
          <p className="ld">
            I turn searches into booked calls, from the first audit to the ranking that pays for itself.
          </p>
          <div className="bts">
            <Link className="vb" href="/case-studies">
              See my work
              <b>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </b>
            </Link>
            <Link className="vb l" href="/contact-us">
              Book a call
              <b>
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <path d="M7 17 17 7M8 7h9v9" />
                </svg>
              </b>
            </Link>
          </div>
        </div>

        <div className="fd-meta">
          <div>
            <i />
            Available for work &middot; Nov 2026
          </div>
          <div>
            Remote &middot; <span>{clock}</span> ET
          </div>
          <div>45 industry playbooks</div>
        </div>

        <div className="fd-giant" aria-hidden="true">
          GAURAV KAPOOR
        </div>

        <div className="fd-shadow" aria-hidden="true">
          {/* Using img tag to preserve precise CSS sizing/transforms in site.css */}
          <img src="/img/gaurav-shadow.png" alt="" />
        </div>

        <div className="fd-person">
          <img src="/img/gaurav-cut.png" alt="Gaurav Kapoor, founder of RankEmpire" />
        </div>

        <div className="fd-light" aria-hidden="true" />
        <div className="fd-orb" aria-hidden="true">
          <i />
          <span>Light</span>
        </div>

        <div className="fd-hint" aria-hidden="true">
          <i />
          Move the light &middot; click for a new backdrop
        </div>

        <div className="fd-bd" role="group" aria-label="Backdrop">
          Backdrop
          <button
            type="button"
            data-bd="l"
            aria-pressed={backdrop === 'l'}
            style={{ background: '#ece6dc' }}
            aria-label="Sand"
            onClick={(e) => handleBackdropClick('l', e)}
          />
          <button
            type="button"
            data-bd="o"
            aria-pressed={backdrop === 'o'}
            style={{ background: '#ec4e3b' }}
            aria-label="Coral"
            onClick={(e) => handleBackdropClick('o', e)}
          />
          <button
            type="button"
            data-bd="d"
            aria-pressed={backdrop === 'd'}
            style={{ background: '#141416' }}
            aria-label="Dark"
            onClick={(e) => handleBackdropClick('d', e)}
          />
        </div>
      </div>
    </section>
  );
}
