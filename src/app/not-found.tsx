import React from "react";
import Link from "next/link";
import { ArrowIcon } from "@/components/common/Icons";

export default function NotFound() {
  return (
    <section className="ph" style={{ minHeight: "75vh", display: "flex", alignItems: "center" }}>
      <div className="wrap" style={{ margin: "auto" }}>
        <div className="bigword" style={{ justifyContent: "center", padding: "0 0 10px" }} aria-hidden="true">
          <span>4</span>
          <span>0</span>
          <span>4</span>
        </div>
        <h1 data-r>
          This page lost its <em>ranking</em>
        </h1>
        <p className="sub" data-r>
          The page you are looking for has moved or does not exist.
        </p>
        <div className="bts" style={{ display: "flex", justifyContent: "center", gap: "12px", marginTop: "24px" }}>
          <Link className="btn acc" href="/">
            Back to home
            <ArrowIcon />
          </Link>
          <Link className="btn line" href="/seo-tools/">
            Try our free tools
          </Link>
        </div>
      </div>
    </section>
  );
}
