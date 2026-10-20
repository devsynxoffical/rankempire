import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import PageHero from "@/components/common/PageHero";
import ValuesSection from "@/components/sections/ValuesSection";
import CTASection from "@/components/sections/CTASection";
import { ArrowIcon } from "@/components/common/Icons";
import { team, BRAND_EMAIL } from "@/data";

export const metadata: Metadata = {
  title: "Our Team: SEO Strategists, Engineers and Writers | RankEmpire",
  description:
    "Meet the RankEmpire team of SEO strategists, technical specialists and content writers who run every client program.",
  alternates: {
    canonical: "/our-team/",
  },
};

export default function OurTeamPage() {
  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/our-team/", label: "Our Team" },
        ]}
        h1="Meet the team behind your <em>rankings</em>"
        sub="Strategists, technical specialists and writers who do the work themselves. No outsourcing chains, no anonymous account managers."
        primaryBtn={{ href: "/contact-us/", label: "Work with us" }}
        secondaryBtn={{ href: "/about-us/", label: "About RankEmpire" }}
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div className="g4">
            {team.map((t, i) => (
              <div data-r style={{ "--d": `${i * 0.08}s` } as React.CSSProperties} key={t.id}>
                <div style={{ borderRadius: "24px", overflow: "hidden", aspectRatio: "3/4", marginBottom: "16px", position: "relative" }}>
                  <Image
                    src={`/img/${t.id}.webp`}
                    alt={t.name}
                    fill
                    sizes="(max-width: 980px) 100vw, 25vw"
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <h3 style={{ fontSize: "22px", fontWeight: 600 }}>{t.name}</h3>
                <p style={{ color: "var(--acc)", fontWeight: 600, fontSize: "14.5px", margin: "2px 0 8px" }}>
                  {t.role}
                </p>
                <p style={{ color: "var(--mute)", fontSize: "15px" }}>{t.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <ValuesSection />

      {/* Careers Banner */}
      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap">
          <div
            className="box dk"
            data-r
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "30px",
              flexWrap: "wrap",
              padding: "40px",
            }}
          >
            <div>
              <h3 style={{ fontSize: "32px" }}>Join RankEmpire</h3>
              <p>We hire people who love solving search problems and explaining them clearly.</p>
            </div>
            <a className="btn acc" href={`mailto:${BRAND_EMAIL}?subject=Careers`}>
              Send your portfolio
              <ArrowIcon />
            </a>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
