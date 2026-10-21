import React from "react";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | RankEmpire",
  description: "Privacy Policy for the RankEmpire website.",
  alternates: {
    canonical: "/privacy-policy/",
  },
};

export default function PrivacyPolicyPage() {
  return (
    <main id="main">
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Privacy Policy</span>
          </nav>
          <h1 data-r>Privacy Policy</h1>
          <p className="lead" data-r>
            Last updated October 2026
          </p>
        </div>
      </section>

      <section style={{ paddingBottom: 100 }}>
        <div className="wrap" style={{ maxWidth: 860 }}>
          <div className="prose" data-r>
            <h2>Information we collect</h2>
            <p>
              We collect the information you choose to send us, such as your
              name, email address, website and message when you contact us or
              subscribe. Our free SEO tools run in your browser and do not send
              the content you paste to our servers.
            </p>
            <h2>How we use information</h2>
            <p>
              We use your information to respond to enquiries, provide our
              services and send newsletters you subscribed to. We never sell your
              personal information.
            </p>
            <h2>Cookies and analytics</h2>
            <p>
              We may use privacy-friendly analytics to understand how visitors
              use the site. You can block cookies in your browser settings.
            </p>
            <h2>Your rights</h2>
            <p>
              You can ask us to access, correct or delete your personal
              information at any time by emailing{" "}
              <a href="mailto:hello@rankempire.com">hello@rankempire.com</a>.
            </p>
            <h2>Contact</h2>
            <p>
              Questions about this policy can be sent to{" "}
              <a href="mailto:hello@rankempire.com">hello@rankempire.com</a>.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
