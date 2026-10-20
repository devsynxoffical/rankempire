import React from "react";
import Image from "next/image";
import { UsersIcon, BulbIcon, ShieldIcon } from "@/components/common/Icons";
import { LineReveal } from "@/components/common/LineReveal";

export default function ValuesSection() {
  const values = [
    {
      icon: <UsersIcon className="ic" />,
      title: "Collaboration",
      desc: "SEO touches your website, content, reviews and sales team. We work closely with the people who know your customers best, so every page sounds like you and converts like it should.",
      delay: "0.0s",
    },
    {
      icon: <BulbIcon className="ic" />,
      title: "Clarity",
      desc: "Every recommendation comes with a reason, an expected impact and a priority. You always know what we are doing, why we are doing it and what it should change.",
      delay: "0.08s",
    },
    {
      icon: <ShieldIcon className="ic" />,
      title: "Integrity",
      desc: "No link schemes, no fake reviews, no spun content and no guaranteed rankings. We build growth that survives every algorithm update.",
      delay: "0.16s",
    },
  ];

  return (
    <section className="sec">
      <div className="wrap">
        <div className="shead">
          <LineReveal lines={["Our Values"]} />
          <p data-r>
            Principles that shape every campaign,
            <br />
            from the first audit to the hundredth report
          </p>
        </div>

        <div className="vals">
          <div className="im" data-r="s">
            <Image
              src="/img/team.webp"
              alt="RankEmpire SEO specialists collaborating"
              width={600}
              height={400}
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
          </div>

          {values.map((v, i) => (
            <div
              className="val"
              data-r
              key={i}
              style={{ "--d": v.delay } as React.CSSProperties}
            >
              <div className="ic">{v.icon}</div>
              <h4>{v.title}</h4>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
