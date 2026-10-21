import React from "react";
import Image from "next/image";
import { QuoteIcon } from "@/components/common/Icons";
import { trustItems } from "@/data";

export default function TrustSection() {
  const t0 = trustItems[0] || {
    title: "David K., Owner",
    desc: "RankEmpire took our plumbing company from nowhere on the map to top three in every neighborhood we service.",
    bold: "Calls doubled in six months.",
    badge: "Plumbing contractor, Dallas",
  };
  const t1 = trustItems[1] || {
    title: "Elena R., Head of Growth",
    desc: "The technical audit uncovered crawl issues that our dev team had missed for two years.",
    bold: "Organic revenue is up 140% year on year.",
    badge: "E-commerce home brand",
  };
  const t2 = trustItems[2] || {
    title: "Marcus T., VP Marketing",
    desc: "Most SEO agencies send bloated reports full of vanity numbers. RankEmpire tracks demos and pipeline.",
    bold: "Zero fluff, great execution.",
    badge: "B2B SaaS, Austin",
  };
  const t3 = trustItems[3] || {
    title: "Sarah L., Managing Partner",
    desc: "Our firm needed local visibility without paying astronomical PPC click prices.",
    bold: "We now rank in the map pack for our highest value practice areas.",
    badge: "Law firm, Phoenix",
  };

  const renderCard = (t: typeof t0) => (
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
          <small>{t.badge}</small>
        </span>
      </div>
    </div>
  );

  return (
    <section className="trust" aria-labelledby="trust-h">
      <div className="pin">
        <div className="bg">
          <Image
            src="/img/fill.webp"
            alt=""
            fill
            sizes="100vw"
            loading="lazy"
            style={{ objectFit: "cover", opacity: 0.9 }}
          />
        </div>

        <div className="ttl">
          <div data-r>
            <h2 id="trust-h">
              Built on
              <br />
              <span className="acc">Trust.</span>
            </h2>
            <p>
              Real feedback from business owners and marketing leaders who rely on
              RankEmpire for organic growth.
            </p>
          </div>
        </div>

        <div className="tcol a">
          {renderCard(t0)}
          {renderCard(t1)}
        </div>

        <div className="tcol b">
          {renderCard(t2)}
          {renderCard(t3)}
        </div>
      </div>
    </section>
  );
}
