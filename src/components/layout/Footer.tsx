'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { BRAND_NAME, BRAND_EMAIL } from '@/data';

export default function Footer() {
  const [clock, setClock] = useState('00:00:00');
  const [nlEmail, setNlEmail] = useState('');
  const [nlSubmitted, setNlSubmitted] = useState(false);

  const footerRef = useRef<HTMLElement>(null);
  const fwRef = useRef<HTMLDivElement>(null);
  const fstartRef = useRef<HTMLAnchorElement>(null);

  // Live ET Clock
  useEffect(() => {
    const formatter = new Intl.DateTimeFormat('en-US', {
      timeZone: 'America/New_York',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: false,
    });

    const updateTime = () => {
      setClock(formatter.format(new Date()));
    };

    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  // Responsive font size fit for 'Start ranking'
  useEffect(() => {
    const fw = fwRef.current;
    const st = fstartRef.current;
    if (!fw || !st) return;

    const fit = () => {
      fw.style.fontSize = '100px';
      const cs = getComputedStyle(st);
      const arr = st.querySelector('.arr');
      const arrWidth = arr ? arr.getBoundingClientRect().width : 60;
      const av =
        st.clientWidth -
        parseFloat(cs.paddingLeft || '0') -
        parseFloat(cs.paddingRight || '0') -
        arrWidth -
        30;
      if (fw.scrollWidth > 0 && av > 0) {
        fw.style.fontSize = `${Math.floor((100 * av) / fw.scrollWidth * 0.98)}px`;
      }
    };

    fit();
    if (typeof document !== 'undefined' && document.fonts) {
      document.fonts.ready.then(fit);
    }
    window.addEventListener('resize', fit);
    return () => window.removeEventListener('resize', fit);
  }, []);

  // Pointer move spotlight on footer
  useEffect(() => {
    const f = footerRef.current;
    if (!f) return;

    let mx = 0;
    let my = 0;
    let ticking = false;

    const paint = () => {
      ticking = false;
      const r = f.getBoundingClientRect();
      f.style.setProperty('--mx', `${mx - r.left}px`);
      f.style.setProperty('--my', `${my - r.top}px`);
    };

    const onPointerMove = (e: PointerEvent) => {
      mx = e.clientX;
      my = e.clientY;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(paint);
      }
    };

    f.addEventListener('pointermove', onPointerMove);
    return () => f.removeEventListener('pointermove', onPointerMove);
  }, []);

  const handleBackToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const v = nlEmail.trim();
    if (!v) return;
    setNlSubmitted(true);
    window.location.href = `mailto:${BRAND_EMAIL}?subject=${encodeURIComponent(
      'Newsletter signup'
    )}&body=${encodeURIComponent('Please subscribe ' + v)}`;
  };

  const startRankingText = 'Start ranking';

  return (
    <footer ref={footerRef} className="foot" id="foot">
      <Link ref={fstartRef} className="fstart" href="/contact-us" id="fstart">
        <div ref={fwRef} className="fw" id="fw">
          {startRankingText.split('').map((char, index) =>
            char === ' ' ? ' ' : <span key={index}>{char}</span>
          )}
        </div>
        <svg className="arr" viewBox="0 0 100 100" aria-hidden="true">
          <path d="M30 70 L70 30 M40 30 H70 V60" />
        </svg>
      </Link>

      <div className="fg">
        <div className="fbr">
          <div>
            <div className="mk">
              RE<sup>&reg;</sup>
            </div>
            <div className="ico">
              <Link href="/" aria-label="Home">
                &#10033;
              </Link>
              <Link href="/seo-services" aria-label="Services">
                &#9673;
              </Link>
              <Link href="/seo-tools" aria-label="Free tools">
                &lt;/&gt;
              </Link>
            </div>
          </div>
          <div>
            <h4>SEO, answer engines and AI search, built around calls and revenue.</h4>
            <div className="cp">
              &copy; 2026 {BRAND_NAME}. All rights reserved.{' '}
              <Link href="/privacy-policy">Privacy</Link> &middot;{' '}
              <Link href="/terms">Terms</Link>
            </div>
          </div>
        </div>

        <nav className="flk" aria-label="Footer">
          <Link href="/seo-services">
            Services <i>&#8599;</i>
          </Link>
          <Link href="/industries">
            Industries <i>&#8599;</i>
          </Link>
          <Link href="/case-studies">
            Results <i>&#8599;</i>
          </Link>
          <Link href="/seo-packages">
            Pricing <i>&#8599;</i>
          </Link>
          <Link href="/seo-tools">
            Free tools <i>&#8599;</i>
          </Link>
          <Link href="/contact-us">
            Contact <i>&#8599;</i>
          </Link>
        </nav>

        <div className="ffl">
          <span className="fh">Follow us</span>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            X/Twitter
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            Instagram
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            LinkedIn
          </a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
            YouTube
          </a>
        </div>

        <div className="fnl">
          <div className="gh" aria-hidden="true">
            Stay ahead
          </div>
          <img className="env" src="/img/envelope.webp" alt="" loading="lazy" />
          <div className="nb">
            <span className="fh">Newsletter</span>
            <p>One practical SEO tip a month, written by the team doing the work. No spam.</p>
          </div>
          <form id="nl" onSubmit={handleNewsletterSubmit}>
            <input
              id="nl-e"
              type="email"
              placeholder="Your email"
              aria-label="Email"
              required
              value={nlEmail}
              onChange={(e) => setNlEmail(e.target.value)}
            />
            <button type="submit">{nlSubmitted ? 'Thanks!' : 'Subscribe'}</button>
          </form>
        </div>
      </div>

      <div className="freach">
        <div>
          <span className="fh">Reach out</span>
          <a className="femail" href={`mailto:${BRAND_EMAIL}`}>
            {BRAND_EMAIL}
          </a>
        </div>
        <div className="fmeta">
          <span>rankempire.us</span>
          <span>
            Remote &middot; US business hours &middot; <b data-clock>{clock}</b> ET
          </span>
          <button type="button" id="ftop" onClick={handleBackToTop}>
            Back to top &uarr;
          </button>
        </div>
      </div>
    </footer>
  );
}
