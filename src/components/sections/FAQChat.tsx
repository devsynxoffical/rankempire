'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';

interface FAQItem {
  c: 'general' | 'pricing' | 'results' | 'technical';
  q: string;
  a: string;
  t: string[];
}

const FAQ_DATA: FAQItem[] = [
  {
    c: 'general',
    q: 'How long does SEO take to work?',
    a: 'Most clients see early movement in 60 to 90 days and meaningful results in 4 to 6 months. Competitive markets and new websites take longer. We share a realistic timeline after the audit.',
    t: ['Audit first', '90-day roadmap', 'Plain English'],
  },
  {
    c: 'general',
    q: 'What is included in every RankEmpire plan?',
    a: 'An initial audit, a prioritized roadmap, the work itself, monthly reporting in plain English and a live dashboard. You also get a named strategist you can reach directly.',
    t: ['Audit first', '90-day roadmap', 'Plain English'],
  },
  {
    c: 'general',
    q: 'Do you work with businesses outside the US?',
    a: 'Our focus is the US market, but we support international SEO for US companies expanding abroad and for brands entering the US.',
    t: ['Audit first', '90-day roadmap', 'Plain English'],
  },
  {
    c: 'pricing',
    q: 'Do I have to sign a long contract?',
    a: 'No. After a 3 month onboarding period, plans are month to month. You can cancel with 30 days notice.',
    t: ['Month to month', 'No setup fees', 'Upgrade anytime'],
  },
  {
    c: 'pricing',
    q: 'Are there setup fees?',
    a: 'No setup fees on standard plans. Custom enterprise programs may include a one-time onboarding project, quoted up front.',
    t: ['Month to month', 'No setup fees', 'Upgrade anytime'],
  },
  {
    c: 'pricing',
    q: 'Can I change plans later?',
    a: 'Yes. You can upgrade or downgrade at the start of any month.',
    t: ['Month to month', 'No setup fees', 'Upgrade anytime'],
  },
  {
    c: 'results',
    q: 'Do you guarantee first page rankings?',
    a: 'No honest SEO company can guarantee rankings, because Google controls the results. We commit to the work, the transparency and the process that produce results.',
    t: ['Search Console', 'Monthly report', 'Calls and leads'],
  },
  {
    c: 'results',
    q: 'How do you report results?',
    a: 'Monthly reports cover rankings, traffic, conversions and the work completed, plus a live dashboard you can check anytime.',
    t: ['Search Console', 'Monthly report', 'Calls and leads'],
  },
  {
    c: 'results',
    q: 'What happens if results stall?',
    a: 'We review the data with you, explain what we see and adjust the plan. You will never be left guessing.',
    t: ['Search Console', 'Monthly report', 'Calls and leads'],
  },
  {
    c: 'technical',
    q: 'Do you need access to my website?',
    a: 'Yes, editor access to your CMS plus read access to Google Search Console and Analytics. We never need ownership.',
    t: ['Any CMS', 'Core Web Vitals', 'Your access, your data'],
  },
  {
    c: 'technical',
    q: 'Which platforms do you work with?',
    a: 'WordPress, Shopify, Webflow, Wix, Squarespace, WooCommerce, BigCommerce, Framer and custom builds.',
    t: ['Any CMS', 'Core Web Vitals', 'Your access, your data'],
  },
  {
    c: 'technical',
    q: 'Will SEO slow down my website?',
    a: 'No. Our work usually makes sites faster by removing bloat, compressing images and fixing slow templates.',
    t: ['Any CMS', 'Core Web Vitals', 'Your access, your data'],
  },
];

const CATEGORIES = [
  { id: 'all', label: 'All', count: 12 },
  { id: 'general', label: 'Getting started', count: 3 },
  { id: 'pricing', label: 'Pricing', count: 3 },
  { id: 'results', label: 'Results', count: 3 },
  { id: 'technical', label: 'Technical', count: 3 },
] as const;

export default function FAQChat() {
  const [activeCat, setActiveCat] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [displayedText, setDisplayedText] = useState<string>('');
  const [isTypingDots, setIsTypingDots] = useState<boolean>(false);
  const [tagsVisible, setTagsVisible] = useState<boolean>(false);
  const [customQuestion, setCustomQuestion] = useState<string>('');
  const [customSubmitted, setCustomSubmitted] = useState<string | null>(null);

  const containerRef = useRef<HTMLDivElement>(null);
  const tokenRef = useRef<number>(0);
  const listRef = useRef<HTMLOListElement>(null);

  // Filtered indices based on category & search
  const filteredIndices = FAQ_DATA.map((item, idx) => {
    const matchesCat = activeCat === 'all' || item.c === activeCat;
    const matchesSearch =
      !searchQuery ||
      (item.q + ' ' + item.a).toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch ? idx : -1;
  }).filter((idx) => idx !== -1);

  // Animate chat response
  const triggerAnswer = useCallback((index: number) => {
    tokenRef.current += 1;
    const currentToken = tokenRef.current;
    setCurrentIndex(index);
    setCustomSubmitted(null);
    setIsTypingDots(true);
    setDisplayedText('');
    setTagsVisible(false);

    const fullAnswer = FAQ_DATA[index].a;
    const words = fullAnswer.split(' ');

    const wait = (ms: number) => new Promise((res) => setTimeout(res, ms));

    (async () => {
      await wait(350);
      if (tokenRef.current !== currentToken) return;
      setIsTypingDots(false);

      for (let i = 1; i <= words.length; i++) {
        if (tokenRef.current !== currentToken) return;
        setDisplayedText(words.slice(0, i).join(' '));
        await wait(14);
      }

      if (tokenRef.current !== currentToken) return;
      setTagsVisible(true);
    })();
  }, []);

  // Intersection observer trigger first answer
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let started = false;

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !started) {
          started = true;
          triggerAnswer(0);
          observer.disconnect();
        }
      },
      { threshold: 0.25 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [triggerAnswer]);

  const handleSelectQuestion = (idx: number, scrollList = false) => {
    triggerAnswer(idx);
    if (scrollList && listRef.current) {
      const btn = listRef.current.querySelector(`[data-i="${idx}"]`) as HTMLElement;
      if (btn) {
        listRef.current.scrollTo({
          top: btn.offsetTop - listRef.current.offsetTop - 60,
          behavior: 'smooth',
        });
      }
    }
  };

  const handleStep = (delta: number) => {
    if (!filteredIndices.length) return;
    const pos = filteredIndices.indexOf(currentIndex);
    const nextIdx =
      filteredIndices[(pos + delta + filteredIndices.length) % filteredIndices.length];
    handleSelectQuestion(nextIdx, true);
  };

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const q = customQuestion.trim();
    if (!q) return;

    tokenRef.current += 1;
    setCustomSubmitted(q);
    setIsTypingDots(false);
    setDisplayedText(
      'Good question. Opening your email so it reaches us directly, we reply within a day.'
    );
    setTagsVisible(false);

    setTimeout(() => {
      window.location.href = `mailto:hello@rankempire.com?subject=${encodeURIComponent(
        'Question from the website'
      )}&body=${encodeURIComponent(q)}`;
    }, 700);

    setCustomQuestion('');
  };

  const currentItem = FAQ_DATA[currentIndex];

  // Related questions
  const relatedIndices = FAQ_DATA.map((_, idx) => idx)
    .filter((idx) => idx !== currentIndex && FAQ_DATA[idx].c === currentItem.c)
    .slice(0, 2);
  if (relatedIndices.length < 2) {
    relatedIndices.push((currentIndex + 1) % FAQ_DATA.length);
  }

  return (
    <section className="fxs" id="faq" aria-labelledby="fx-h">
      <div className="wrap">
        <div className="fx-head">
          <div>
            <span className="eyb pill" data-r>
              <i />
              FAQ
            </span>
            <h2 id="fx-h" className="h2" data-r>
              Questions, <em>answered.</em>
            </h2>
            <p data-r>
              Pick a question and get a straight answer, the same way we would answer on a call.
            </p>
          </div>
          <div className="fx-stats" data-r>
            <div>
              <b>2 days</b>
              <span>to your free audit</span>
            </div>
            <div>
              <b>&lt;24h</b>
              <span>reply time</span>
            </div>
            <div>
              <b>45+</b>
              <span>industry playbooks</span>
            </div>
          </div>
        </div>

        <div className="fx" id="fx" ref={containerRef}>
          <aside className="fx-l">
            <label className="fx-search">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <circle cx="11" cy="11" r="7" />
                <path d="m20 20-4-4" />
              </svg>
              <input
                id="fxs"
                type="search"
                placeholder="Search questions"
                aria-label="Search questions"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </label>

            <div className="fx-tabs" id="fxt">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  className={activeCat === cat.id ? 'on' : ''}
                  onClick={() => setActiveCat(cat.id)}
                >
                  {cat.label}
                  <b>{cat.count}</b>
                </button>
              ))}
            </div>

            <ol className="fx-list" id="fxl" ref={listRef}>
              {FAQ_DATA.map((item, i) => {
                const isHidden = !filteredIndices.includes(i);
                return (
                  <li
                    key={i}
                    data-c={item.c}
                    className={isHidden ? 'hide' : ''}
                  >
                    <button
                      type="button"
                      data-i={i}
                      className={currentIndex === i && !customSubmitted ? 'on' : ''}
                      onClick={() => handleSelectQuestion(i)}
                    >
                      <span className="n">{String(i + 1).padStart(2, '0')}</span>
                      <span>{item.q}</span>
                      <i>&rarr;</i>
                    </button>
                  </li>
                );
              })}
            </ol>

            <div className={`fx-empty ${filteredIndices.length === 0 ? 'on' : ''}`} id="fxe">
              No match. Ask it below and we will answer.
            </div>
          </aside>

          <div className="fx-r">
            <div className="fx-top">
              <span className="fx-av">RE</span>
              <div>
                <b>RankEmpire</b>
                <small>Usually replies within a day</small>
              </div>
              <span className="fx-ct" id="fxc">
                <em>{String(currentIndex + 1).padStart(2, '0')}</em> / {FAQ_DATA.length}
              </span>
              <div className="fx-nav">
                <button
                  type="button"
                  id="fxp"
                  aria-label="Previous question"
                  onClick={() => handleStep(-1)}
                >
                  &larr;
                </button>
                <button
                  type="button"
                  id="fxn"
                  aria-label="Next question"
                  onClick={() => handleStep(1)}
                >
                  &rarr;
                </button>
              </div>
            </div>

            <div className="fx-chat" id="fxchat" aria-live="polite">
              <div className="fx-m u">
                {customSubmitted ? customSubmitted : currentItem.q}
              </div>

              <div className="fx-m b">
                <span className="who">RankEmpire team</span>
                {isTypingDots ? (
                  <span className="fx-dots">
                    <i />
                    <i />
                    <i />
                  </span>
                ) : (
                  <span>{displayedText}</span>
                )}
                {tagsVisible && !customSubmitted && (
                  <div className="tg on">
                    {currentItem.t.map((tag, tIdx) => (
                      <span key={tIdx}>{tag}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="fx-rel" id="fxr">
              {!customSubmitted &&
                relatedIndices.map((k, n) => (
                  <button
                    key={k}
                    type="button"
                    data-i={k}
                    style={{ animationDelay: `${n * 0.08}s` }}
                    onClick={() => handleSelectQuestion(k, true)}
                  >
                    {FAQ_DATA[k].q}
                  </button>
                ))}
            </div>

            <form className="fx-ask" id="fxa" onSubmit={handleCustomSubmit}>
              <input
                id="fxq"
                placeholder="Ask your own question..."
                aria-label="Ask your own question"
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
              />
              <button type="submit">
                <span>Send</span> &#8599;
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
