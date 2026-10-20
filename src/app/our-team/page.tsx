import React from "react";
import type { Metadata } from "next";
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
            {team.map((t, i) => {
              const initials = t.name
                .split(" ")
                .map((n) => n[0])
                .join("");

              return (
                <div
                  className="box"
                  data-r
                  style={
                    {
                      "--d": `${i * 0.08}s`,
                      display: "flex",
                      flexDirection: "column",
                      gap: "14px",
                      padding: "32px 28px",
                    } as React.CSSProperties
                  }
                  key={t.id}
                >
                  <div
                    style={{
                      width: "52px",
                      height: "52px",
                      borderRadius: "14px",
                      background: "rgba(255, 92, 0, 0.1)",
                      border: "1px solid rgba(255, 92, 0, 0.22)",
                      color: "var(--acc)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      fontSize: "19px",
                      fontWeight: 700,
                      letterSpacing: "0.5px",
                    }}
                  >
                    {initials}
                  </div>
                  <div>
                    <h3 style={{ fontSize: "21px", fontWeight: 600 }}>{t.name}</h3>
                    <p
                      style={{
                        color: "var(--acc)",
                        fontWeight: 600,
                        fontSize: "14px",
                        marginTop: "4px",
                      }}
                    >
                      {t.role}
                    </p>
                  </div>
                  <p style={{ color: "var(--mute)", fontSize: "14.5px", lineHeight: 1.6 }}>{t.bio}</p>
                </div>
              );
            })}
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
