import React from "react";
import { QuoteIcon } from "@/components/common/Icons";

const commitmentsColA = [
  {
    num: "01",
    title: "You own everything",
    desc: "Every page, account, report and piece of content we create belongs to you from day one. If you ever leave, you keep it all.",
    bold: "No lock-in, ever.",
  },
  {
    num: "03",
    title: "No shortcuts",
    desc: "We never buy links from networks, publish spun content or use tactics that put your site at risk of a penalty.",
    bold: "Safe, durable growth.",
  },
  {
    num: "05",
    title: "Audit before action",
    desc: "We never start work without understanding your site, market and competitors first, so time goes where it pays back.",
    bold: "Priorities by impact.",
  },
];

const commitmentsColB = [
  {
    num: "02",
    title: "Reports you can read",
    desc: "Our monthly report explains what we did, what changed and what comes next, in plain English instead of screenshots and jargon.",
    bold: "No vanity metrics.",
  },
  {
    num: "04",
    title: "A real strategist",
    desc: "You get a named strategist who knows your business and answers your messages, not a rotating support queue.",
    bold: "Direct access.",
  },
  {
    num: "06",
    title: "Honest timelines",
    desc: "We tell you how long results should take in your market, including when SEO is not the right channel for your goal.",
    bold: "Straight answers.",
  },
];

export default function TrustSection() {
  const renderCard = (t: {
    num: string;
    title: string;
    desc: string;
    bold: string;
  }) => (
    <div className="tq">
      <div className="ic">
        <QuoteIcon />
      </div>
      <p>
        {t.desc}
        <b>{t.bold}</b>
      </p>
      <div className="by">
        <i>RE</i>
        <span>
          {t.title}
          <small>Commitment {t.num}</small>
        </span>
      </div>
    </div>
  );

  return (
    <section className="trust" id="trust" aria-labelledby="trust-h">
      <div className="pin">
        <div className="bg">
          <img src="/img/testi.webp" alt="" loading="lazy" />
        </div>

        <div className="ttl">
          <div>
            <h2 id="trust-h" className="h2">
              Built on
              <br />
              Trust.
            </h2>
            <p>
              Six commitments every RankEmpire client gets in writing, from the
              first call to the last report.
            </p>
          </div>
        </div>

        <div className="tcol a">
          {commitmentsColA.map((c) => (
            <React.Fragment key={c.num}>{renderCard(c)}</React.Fragment>
          ))}
        </div>

        <div className="tcol b">
          {commitmentsColB.map((c) => (
            <React.Fragment key={c.num}>{renderCard(c)}</React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
