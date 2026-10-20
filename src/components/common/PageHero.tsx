import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon } from "@/components/common/Icons";

export interface Crumb {
  href: string;
  label: string;
}

export default function PageHero({
  crumbs,
  h1,
  sub,
  img,
  pills,
  left = false,
  primaryBtn = { href: "/contact-us/", label: "Get a free audit" },
  secondaryBtn,
}: {
  crumbs: Crumb[];
  h1: string;
  sub?: string;
  img?: string;
  pills?: string[];
  left?: boolean;
  primaryBtn?: { href: string; label: string };
  secondaryBtn?: { href: string; label: string };
}) {
  return (
    <>
      <section className={`ph wrap ${left ? "l" : ""}`}>
        {/* Breadcrumb nav */}
        <nav className="crumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span aria-hidden="true">&rsaquo;</span>}
              {i === crumbs.length - 1 ? (
                <span>{c.label}</span>
              ) : (
                <Link href={c.href}>{c.label}</Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        <h1 dangerouslySetInnerHTML={{ __html: h1 }} />

        {sub && <p className="sub">{sub}</p>}

        <div className="bts">
          {primaryBtn && (
            <Link className="btn acc" href={primaryBtn.href}>
              {primaryBtn.label}
              <ArrowIcon />
            </Link>
          )}
          {secondaryBtn && (
            <Link className="btn line" href={secondaryBtn.href}>
              {secondaryBtn.label}
              <ArrowIcon />
            </Link>
          )}
        </div>
      </section>

      {/* Hero Image Container */}
      {img && (
        <div className="wrap">
          <div className="phimg">
            <Image
              src={`/img/${img}.webp`}
              alt=""
              fill
              priority
              style={{ objectFit: "cover" }}
            />
            {pills && pills.length > 0 && (
              <div className="ov">
                {pills.map((p, i) => (
                  <span className="pill" key={i}>
                    {p}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
