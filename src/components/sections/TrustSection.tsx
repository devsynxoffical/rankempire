import React from "react";
import Image from "next/image";
import { QuoteIcon } from "@/components/common/Icons";
import { trustItems } from "@/data";

export default function TrustSection() {
  const colA = trustItems.filter((_, i) => i % 2 === 0);
  const colB = trustItems.filter((_, i) => i % 2 !== 0);

  const renderQuote = (item: (typeof trustItems)[0], idx: number) => (
    <div className="tq" key={idx}>
      <div className="ic">
        <QuoteIcon />
      </div>
      <p>
        {item.desc}
        <b>{item.bold}</b>
      </p>
      <div className="by">
        <i>RE</i>
        <span>
          {item.title}
          <small>{item.badge}</small>
        </span>
      </div>
    </div>
  );

  return (
    <section className="trust">
      <div className="pin">
        <div className="bg">
          <Image
            src="/img/testi.webp"
            alt=""
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className="ttl">
          <div>
            <h2 className="h2">
              Built on
              <br />
              Trust.
            </h2>
            <p>
              Six commitments every RankEmpire client gets in writing, from the first call
              to the last report.
            </p>
          </div>
        </div>

        <div className="tcol a">{colA.map((it, i) => renderQuote(it, i))}</div>
        <div className="tcol b">{colB.map((it, i) => renderQuote(it, i))}</div>
      </div>
    </section>
  );
}
