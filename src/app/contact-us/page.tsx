"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowIcon, MailIcon, ClockIcon } from "@/components/common/Icons";

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    website: "",
    service: "",
    budget: "",
    message: "",
  });

  useEffect(() => {
    if (typeof window !== "undefined") {
      const sp = new URLSearchParams(window.location.search);
      const site = sp.get("site");
      if (site) {
        setFormData((prev) => ({ ...prev, website: site }));
      }
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const body = `First Name: ${formData.firstName}\nLast Name: ${formData.lastName}\nWork Email: ${formData.email}\nWebsite: ${formData.website}\nService: ${formData.service || "Not sure yet"}\nMonthly Budget: ${formData.budget || "Not specified"}\n\nGoals / Message:\n${formData.message}`;

    window.location.href = `mailto:hello@rankempire.com?subject=${encodeURIComponent(
      "Free SEO audit request"
    )}&body=${encodeURIComponent(body)}`;
    setSubmitted(true);
  };

  const faqs = [
    {
      q: "How long does SEO take to work?",
      a: "Most clients see early movement in 60 to 90 days and meaningful results in 4 to 6 months. Competitive markets and new websites take longer. We share a realistic timeline after the audit.",
    },
    {
      q: "What is included in every RankEmpire plan?",
      a: "An initial audit, a prioritized roadmap, the work itself, monthly reporting in plain English and a live dashboard. You also get a named strategist you can reach directly.",
    },
    {
      q: "Do you work with businesses outside the US?",
      a: "Our focus is the US market, but we support international SEO for US companies expanding abroad and for brands entering the US.",
    },
    {
      q: "Do I have to sign a long contract?",
      a: "No. After a 3 month onboarding period, plans are month to month. You can cancel with 30 days notice.",
    },
    {
      q: "Are there setup fees?",
      a: "No setup fees on standard plans. Custom enterprise programs may include a one-time onboarding project, quoted up front.",
    },
    {
      q: "Can I change plans later?",
      a: "Yes. You can upgrade or downgrade at the start of any month.",
    },
  ];

  return (
    <>
      <section className="ph">
        <div className="bgd"></div>
        <div className="wrap">
          <nav className="crumb" aria-label="Breadcrumb">
            <Link href="/">Home</Link>
            <span className="sep">/</span>
            <span aria-current="page">Contact Us</span>
          </nav>
          <div className="phg" style={{ alignItems: "start" }}>
            <div>
              <span className="eyb pill" data-r>
                <i></i>Contact
              </span>
              <h1 data-r>
                Get your free <span className="acc">SEO audit</span>
              </h1>
              <p className="lead" data-r>
                Tell us about your business and goals. We reply within one business day with next
                steps and your free audit.
              </p>

              <div className="g2" style={{ marginTop: "30px" }} data-stagger>
                <a className="card" href="mailto:hello@rankempire.com">
                  <span className="ic">
                    <MailIcon />
                  </span>
                  <h3 style={{ fontSize: "17px" }}>hello@rankempire.com</h3>
                  <p>New projects and pricing</p>
                </a>
                <div className="card">
                  <span className="ic">
                    <ClockIcon />
                  </span>
                  <h3 style={{ fontSize: "17px" }}>Mon to Fri, 9am to 6pm ET</h3>
                  <p>Strategy calls by video</p>
                </div>
              </div>

              <div className="ticks">
                <span>Free audit in 2 business days</span>
                <span>No contract required</span>
                <span>Reply within one business day</span>
              </div>
            </div>

            <form
              className={`form card ${submitted ? "sent" : ""}`}
              onSubmit={handleSubmit}
              data-mail="hello@rankempire.com"
              data-subject="Free SEO audit request"
              data-r
              style={{ padding: "clamp(20px,3vw,32px)", boxShadow: "var(--sh2)" }}
            >
              <div className="two">
                <label>
                  First name
                  <input
                    name="First name"
                    autoComplete="given-name"
                    required
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  />
                </label>
                <label>
                  Last name
                  <input
                    name="Last name"
                    autoComplete="family-name"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  />
                </label>
              </div>

              <div className="two">
                <label>
                  Work email
                  <input
                    type="email"
                    name="Email"
                    autoComplete="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </label>
                <label>
                  Website
                  <input
                    id="f-site"
                    name="Website"
                    inputMode="url"
                    placeholder="yourbusiness.com"
                    value={formData.website}
                    onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                  />
                </label>
              </div>

              <label>
                Service you are interested in
                <select
                  name="Service"
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                >
                  <option value="">Select a service</option>
                  <option value="Local SEO">Local SEO</option>
                  <option value="E-commerce SEO">E-commerce SEO</option>
                  <option value="SaaS SEO">SaaS SEO</option>
                  <option value="Technical SEO">Technical SEO</option>
                  <option value="SEO Audit">SEO Audit</option>
                  <option value="Google Business Profile SEO">Google Business Profile SEO</option>
                  <option value="National SEO">National SEO</option>
                  <option value="Enterprise SEO">Enterprise SEO</option>
                  <option value="On-Page SEO">On-Page SEO</option>
                  <option value="Off-Page SEO">Off-Page SEO</option>
                  <option value="Link Building">Link Building</option>
                  <option value="Content SEO">Content SEO</option>
                  <option value="International SEO">International SEO</option>
                  <option value="Keyword Research">Keyword Research</option>
                  <option value="Competitor SEO Analysis">Competitor SEO Analysis</option>
                  <option value="SEO Consulting">SEO Consulting</option>
                  <option value="Not sure yet">Not sure yet</option>
                </select>
              </label>

              <label>
                Monthly budget
                <select
                  name="Budget"
                  value={formData.budget}
                  onChange={(e) => setFormData({ ...formData, budget: e.target.value })}
                >
                  <option value="">Select a range</option>
                  <option value="Under $1,000">Under $1,000</option>
                  <option value="$1,000 to $2,500">$1,000 to $2,500</option>
                  <option value="$2,500 to $5,000">$2,500 to $5,000</option>
                  <option value="$5,000+">$5,000+</option>
                </select>
              </label>

              <label>
                Message
                <textarea
                  id="f-msg"
                  name="Message"
                  placeholder="Tell us about your business, your market and your goals"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                />
              </label>

              <button className="btn ac lg full" type="submit">
                Request my free audit
                <ArrowIcon />
              </button>

              <div className="ok" role="status">
                Your email app has opened with your message. Press send and we will reply within
                one business day.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="sec" id="faq">
        <div className="wrap fwrap">
          <div className="side" data-r>
            <span className="eyb">FAQ</span>
            <h2 className="h2" style={{ margin: "14px 0 16px" }}>
              Frequently asked questions
            </h2>
            <p style={{ color: "var(--mute)", marginBottom: "24px" }}>
              Straight answers about SEO and how we work.
            </p>
            <div className="card" style={{ padding: "20px" }}>
              <b style={{ fontFamily: "var(--fd)", fontSize: "18px" }}>Still have a question?</b>
              <p style={{ margin: "6px 0 14px" }}>
                Talk to a strategist. We reply within one business day.
              </p>
              <a className="btn dk sm" href="mailto:hello@rankempire.com">
                Contact us
                <ArrowIcon />
              </a>
            </div>
          </div>

          <div className="faqs" data-r>
            {faqs.map((faq, i) => (
              <div key={i} className={`fq ${openFaq === i ? "on" : ""}`}>
                <button
                  type="button"
                  aria-expanded={openFaq === i}
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                >
                  <span>{faq.q}</span>
                  <i className="pm" aria-hidden="true" />
                </button>
                <div className="a">
                  <div>
                    <p>{faq.a}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
