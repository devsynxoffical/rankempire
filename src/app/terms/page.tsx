import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import { BRAND_EMAIL } from "@/data";

export const metadata: Metadata = {
  title: "Terms and Conditions | RankEmpire",
  description: "Terms and Conditions for the RankEmpire website.",
  alternates: {
    canonical: "/terms/",
  },
};

export default function TermsPage() {
  const sections = [
    [
      "Use of this website",
      "The content on this website is provided for general information. By using the site you agree to these terms.",
    ],
    [
      "Free tools",
      "Our free SEO tools are provided as is, without warranty. Results are estimates and should be checked before making business decisions.",
    ],
    [
      "Services",
      "Client engagements are governed by a separate written agreement that sets out scope, fees and terms.",
    ],
    [
      "Intellectual property",
      "The design, text and graphics on this website belong to RankEmpire unless stated otherwise.",
    ],
    [
      "Contact",
      `Questions about these terms can be sent to ${BRAND_EMAIL}.`,
    ],
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/terms/", label: "Terms and Conditions" },
        ]}
        h1="Terms and <em>Conditions</em>"
        sub="Website terms of use, service agreements and intellectual property guidelines."
      />

      <section className="sec" style={{ paddingTop: 0 }}>
        <div className="wrap" style={{ maxWidth: "860px" }}>
          <div className="prose">
            {sections.map(([title, desc], i) => (
              <div key={i} style={{ marginBottom: "32px" }}>
                <h2>{title}</h2>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
