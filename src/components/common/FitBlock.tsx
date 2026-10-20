import React from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/common/Icons";

export default function FitBlock({
  title,
  items,
  sideTitle = "Not sure where to start?",
  sideText = "Book a free strategy call. We will review your site and tell you honestly which service will move the needle first.",
  btnLabel = "Book a free strategy call",
}: {
  title: string;
  items: string[];
  sideTitle?: string;
  sideText?: string;
  btnLabel?: string;
}) {
  return (
    <section className="sec" style={{ paddingTop: 0 }}>
      <div className="wrap split">
        <div className="sticky">
          <span className="eyb">Who it is for</span>
          <h2 className="h2" data-lines>
            {title}
          </h2>
        </div>

        <div>
          <ul className="checks" data-stagger>
            {items.map((it, i) => (
              <li key={i}>{it}</li>
            ))}
          </ul>

          <div className="box dk" style={{ marginTop: "28px" }} data-r>
            <h3>{sideTitle}</h3>
            <p>{sideText}</p>
            <div style={{ marginTop: "20px" }}>
              <Link className="btn acc" href="/contact-us/">
                {btnLabel}
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
