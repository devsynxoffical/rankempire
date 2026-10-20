import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/common/PageHero";
import { BRAND_EMAIL } from "@/data";

export const metadata: Metadata = {
  title: "Privacy Policy | RankEmpire",
  description: "Privacy Policy for the RankEmpire website and free SEO diagnostics tools.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  const sections = [
    [
      "Information we collect",
      "We collect the information you choose to send us, such as your name, email address, website and message when you contact us or subscribe. Our free SEO tools run in your browser and do not send the content you paste to our servers.",
    ],
    [
      "How we use information",
      "We use your information to respond to enquiries, provide our services and send newsletters you have subscribed to. We never sell your personal information.",
    ],
    [
      "Cookies and analytics",
      "We may use privacy-friendly analytics to understand how visitors use the site. You can block cookies in your browser settings.",
    ],
    [
      "Your rights",
      `You can ask us to access, correct or delete your personal information at any time by emailing ${BRAND_EMAIL}.`,
    ],
    [
      "Contact",
      `Questions about this policy can be sent to ${BRAND_EMAIL}.`,
    ],
  ];

  return (
    <>
      <PageHero
        crumbs={[
          { href: "/", label: "Home" },
          { href: "/privacy-policy/", label: "Privacy Policy" },
        ]}
        h1="Privacy <em>Policy</em>"
        sub="How we handle data, maintain client confidentiality and protect visitor privacy."
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
