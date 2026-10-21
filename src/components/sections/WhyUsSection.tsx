import React from "react";
import Link from "next/link";
import {
  ArrowIcon,
  SearchIcon,
  UsersIcon,
  ChartIcon,
  ShieldIcon,
} from "@/components/common/Icons";

export default function WhyUsSection() {
  return (
    <section className="sec">
      <div className="wrap fwrap" style={{ alignItems: "start" }}>
        <div className="side" data-r>
          <span className="eyb">Why RankEmpire</span>
          <h2 className="h2" style={{ margin: "14px 0 16px" }}>
            An SEO company built around revenue, not reports.
          </h2>
          <p className="lead" style={{ fontSize: "17px" }}>
            What you can expect when you work with us, and why our clients stay.
          </p>

          <ul className="wlist">
            <li>Month to month after onboarding</li>
            <li>You own every page, account and report</li>
            <li>One named strategist, direct access</li>
            <li>Live dashboard plus a monthly call</li>
          </ul>

          <div style={{ marginTop: "26px" }}>
            <Link className="btn dk" href="/contact-us/">
              Book a free strategy call
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div>
          <div className="wgrid" data-stagger>
            <div className="wcard">
              <span className="ic">
                <SearchIcon />
              </span>
              <h3>Audit before action</h3>
              <p>
                Every engagement starts with a full audit of your website, Google
                Business Profile, backlinks and competitors. We only start work
                once we know where the biggest gains are, so your budget goes to the
                fixes and pages that move revenue first.
              </p>
            </div>

            <div className="wcard">
              <span className="ic">
                <UsersIcon />
              </span>
              <h3>One team for the whole search channel</h3>
              <p>
                Technical SEO, content, link building and local SEO are handled by
                specialists who work together on your account. There is no
                handoff between agencies and no gap where work falls through.
              </p>
            </div>

            <div className="wcard">
              <span className="ic">
                <ChartIcon />
              </span>
              <h3>Transparent reporting in plain English</h3>
              <p>
                You get a live dashboard and a monthly report that explains what we
                did, what changed and what comes next. We report on calls, leads
                and revenue from organic search, not vanity metrics.
              </p>
            </div>

            <div className="wcard">
              <span className="ic">
                <ShieldIcon />
              </span>
              <h3>Safe, durable tactics</h3>
              <p>
                We follow Google&apos;s search essentials. No private blog
                networks, no spun content and no fake reviews. The rankings we
                build are designed to survive algorithm updates.
              </p>
            </div>
          </div>

          <p className="wmore">
            <Link href="/seo-company/">Learn more about our SEO company</Link> or{" "}
            <Link href="/about-us/">read our story</Link>.
          </p>
        </div>
      </div>
    </section>
  );
}
