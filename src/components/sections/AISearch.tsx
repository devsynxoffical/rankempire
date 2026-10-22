"use client";

import React, { useEffect, useState } from "react";
import { SearchIcon } from "@/components/common/Icons";

const aiCards = [
  {
    key: "SEO",
    title: "Search engine optimization",
    desc: "Rank on Google and Bing for the searches that bring customers. Technical health, content, links and local signals.",
    color: "var(--red)",
  },
  {
    key: "AEO",
    title: "Answer engine optimization",
    desc: "Win the featured snippet, People Also Ask and voice answers by structuring pages so engines can quote them directly.",
    color: "var(--org)",
  },
  {
    key: "GEO",
    title: "Generative engine optimization",
    desc: "Get cited inside AI Overviews, ChatGPT, Perplexity and Gemini answers with entity-rich, source-worthy content.",
    color: "var(--pur)",
  },
  {
    key: "AGO",
    title: "AI agent optimization",
    desc: "Make your business the one AI agents choose when they book, buy and compare on behalf of users: clean data, schema, APIs.",
    color: "var(--blu)",
  },
];

const aiFeatures = [
  {
    title: "AI Overview tracking",
    desc: "We monitor which queries show AI answers and whether you are cited.",
  },
  {
    title: "Entity and schema layer",
    desc: "Organization, product, FAQ and review schema that engines and agents can read.",
  },
  {
    title: "Citation-worthy content",
    desc: "Original data, clear answers and expert bylines that AI models prefer to quote.",
  },
  {
    title: "Monthly AI visibility report",
    desc: "Share of voice across Google AI, ChatGPT and Perplexity, next to your rankings.",
  },
];

const sampleQueries = [
  "best dumpster rental near me",
  "which SEO agency should I hire?",
  "top rated dentist open saturday",
  "book a plumber for tomorrow",
];

export default function AISearch() {
  const [typedText, setTypedText] = useState(sampleQueries[0]);

  useEffect(() => {
    let qIdx = 0;
    let charIdx = 0;
    let isDeleting = false;
    let timeoutId: NodeJS.Timeout;

    const tick = () => {
      const currentQuery = sampleQueries[qIdx];

      if (!isDeleting && charIdx < currentQuery.length) {
        charIdx++;
        setTypedText(currentQuery.slice(0, charIdx));
        timeoutId = setTimeout(tick, 55);
      } else if (!isDeleting && charIdx >= currentQuery.length) {
        isDeleting = true;
        timeoutId = setTimeout(tick, 1600);
      } else if (isDeleting && charIdx > 0) {
        charIdx--;
        setTypedText(currentQuery.slice(0, charIdx));
        timeoutId = setTimeout(tick, 22);
      } else {
        isDeleting = false;
        qIdx = (qIdx + 1) % sampleQueries.length;
        timeoutId = setTimeout(tick, 300);
      }
    };

    timeoutId = setTimeout(tick, 600);
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <section className="ais" id="ai-search" aria-labelledby="ai-h">
      <div className="wrap">
        <div className="ais-top">
          <div>
            <div className="xh" data-r>
              <span className="xe">
                <i></i>Powered by AI
              </span>
              <h2 id="ai-h" className="h2">
                Rank in search engines <em>and</em> answer engines.
              </h2>
              <p>
                Search is splitting into four surfaces. We optimize for all of them in one program,
                so you show up whether a customer types, asks or lets an AI decide.
              </p>
            </div>
          </div>

          <div className="ais-v" data-r="s">
            <video
              className="mv3d"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster="/img/m-ai.jpg"
              aria-label="AI search orb"
            >
              <source src="/img/m-ai.mp4" type="video/mp4" />
            </video>
            <div className="ais-chip a">AI Overview cited</div>
            <div className="ais-chip b">ChatGPT source</div>
            <div className="ais-chip c">Map pack #1</div>
          </div>
        </div>

        <div className="ai-g">
          {aiCards.map((c, i) => (
            <article
              key={i}
              className="ai-c"
              style={{ "--c": c.color } as React.CSSProperties}
              data-r
            >
              <b className="k">{c.key}</b>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span className="bar">
                <i></i>
              </span>
            </article>
          ))}
        </div>

        <div className="ais-f">
          <ul className="ai-l">
            {aiFeatures.map((f, i) => (
              <li key={i} data-r>
                <b>{f.title}</b>
                <span>{f.desc}</span>
              </li>
            ))}
          </ul>

          <div className="ais-q" data-r>
            <div className="q-bar">
              <span>
                <SearchIcon />
              </span>
              <i id="ai-type">{typedText}</i>
            </div>
            <div className="q-ans">
              <b>AI answer</b>
              <p>
                Based on verified reviews and service pages, <mark>RankEmpire clients</mark> are the
                top cited result for this query in 3 of 4 AI engines.
              </p>
              <span className="src">
                <i></i>
                <i></i>
                <i></i> 3 sources
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
