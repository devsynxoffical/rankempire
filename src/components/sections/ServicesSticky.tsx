"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/common/Icons";
import { LineReveal } from "@/components/common/LineReveal";
import { services, serviceOrderCore } from "@/data";

export default function ServicesSticky({
  serviceKeys = serviceOrderCore,
  title = "What we offer / Service",
  sub = "End to end SEO to build, grow and protect your rankings.",
}: {
  serviceKeys?: string[];
  title?: string;
  sub?: string;
}) {
  return (
    <section className="sec" style={{ paddingBottom: 0 }}>
      <div className="wrap">
        <div className="shead c">
          <LineReveal lines={title.split("<br>")} />
          <p data-r>{sub}</p>
        </div>
      </div>

      <div className="svcw">
        <div className="svcs">
          {serviceKeys.map((key, i) => {
            const s = services[key];
            if (!s) return null;
            const chips = s.chips || s.inc.slice(0, 3).map((x) => x[0]);

            return (
              <div className={`sv ${i === 0 ? "on" : ""}`} key={key}>
                <div className="bgi">
                  <Image
                    src={`/img/${s.img}.webp`}
                    alt=""
                    fill
                    sizes="100vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>

                <div className="row">
                  <span className="num">0{i + 1}</span>
                  <div className="ti">
                    <small>{s.group === "core" ? "Core service" : "SEO service"}</small>
                    <h3>{s.name}</h3>
                  </div>
                  <Link
                    className="btn acc sm"
                    href={`/${key}/`}
                    onClick={(e) => e.stopPropagation()}
                  >
                    Explore service
                    <ArrowIcon />
                  </Link>
                </div>

                <div className="body">
                  <div>
                    <div className="bin">
                      <div className="pic">
                        <Image
                          src={`/img/${s.img}.webp`}
                          alt={s.name}
                          width={320}
                          height={400}
                          style={{ objectFit: "cover", width: "100%", height: "100%" }}
                        />
                      </div>
                      <div className="meta">
                        <b>
                          {s.inc.length}
                          <span>core deliverables</span>
                        </b>
                        <p>{s.sub}</p>
                        <div className="chips">
                          {chips.map((chip, cIdx) => (
                            <Link
                              key={cIdx}
                              href={`/${key}/`}
                              onClick={(e) => e.stopPropagation()}
                            >
                              {chip}
                            </Link>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
