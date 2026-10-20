import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/common/Icons";
import { LineReveal } from "@/components/common/LineReveal";
import { playbooks } from "@/data";

export default function PlaybooksSection({
  title = "Playbooks That Deliver Results",
  sub = "A closer look at how we run SEO programs for the businesses we serve most.",
}: {
  title?: string;
  sub?: string;
}) {
  return (
    <section className="sec">
      <div className="wrap">
        <div className="shead c">
          <LineReveal lines={title.split("<br>")} />
          <p data-r>{sub}</p>
        </div>

        <div className="works">
          {playbooks.map((p, i) => (
            <div className="wk" key={i}>
              <article className="card">
                <div className="l">
                  <h3>{p.t}</h3>
                  <p>{p.desc}</p>
                  <div className="kv">
                    <small>Best for:</small>
                    <span>{p.best}</span>
                  </div>
                  <div className="kv">
                    <small>Services:</small>
                    {p.svcs.map((svc, sIdx) => (
                      <span key={sIdx}>{svc}</span>
                    ))}
                  </div>
                  <Link className="btn acc" href="/case-studies/">
                    See the playbook
                    <ArrowIcon />
                  </Link>
                </div>

                <div className="r">
                  <span className="tag">Playbook 0{i + 1}</span>
                  <Image
                    src={`/img/${p.img}.webp`}
                    alt={p.t}
                    fill
                    sizes="(max-width: 980px) 100vw, 50vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </article>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
