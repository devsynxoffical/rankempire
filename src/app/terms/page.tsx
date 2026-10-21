import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms and Conditions | RankEmpire",
  description: "Terms and Conditions for the RankEmpire website.",
  alternates: {
    canonical: "/terms/",
  },
};

export default function TermsPage() {
  return (
    <main id="main">
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Terms and Conditions</span>
          </nav>
          <h1 data-r>Terms and Conditions</h1>
          <p className="lead" data-r>
            Last updated October 2026
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 100 }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="prose" data-r>
            <h2>Use of this website</h2>
            <p>
              The content on this website is provided for general information.
              By using the site you agree to these terms.
            </p>
            <h2>Free tools</h2>
            <p>
              Our free SEO tools are provided as is, without warranty. Results
              are estimates and should be checked before making business
              decisions.
            </p>
            <h2>Services</h2>
            <p>
              Client engagements are governed by a separate written agreement
              that sets out scope, fees and terms.
            </p>
            <h2>Intellectual property</h2>
            <p>
              The design, text and graphics on this website belong to RankEmpire
              unless stated otherwise.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about these terms can be sent to{" "}
              <a href="mailto:hello@rankempire.com">hello@rankempire.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
