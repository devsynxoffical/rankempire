export default function MoreResults() {
  const caseStudies = [
    {
      id: "case-progenius",
      num: "01",
      name: "Progenius Students",
      eyebrow: "Verified client result · Case 01",
      title: "Progenius Students: 26.9% CTR in 28 Days",
      description: "Google Search Console report for Progenius Students: 9.04K clicks, 33.6K impressions, 26.9% CTR, 6.1 avg. position over 28 days.",
      clicksCount: "9.04",
      clicksNum: "9.04",
      clicksSuffix: "K",
      clicksLabel: "Total clicks from Google",
      impressionsCount: "33.6",
      impressionsNum: "33.6",
      impressionsSuffix: "K",
      impressionsLabel: "Total impressions",
      ctrCount: "26.9",
      ctrNum: "26.9",
      ctrSuffix: "%",
      ctrLabel: "Average click-through rate",
      posCount: "6.1",
      posNum: "6.1",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["Progenius Students", "Search type: Web", "28 days, Sep to Oct 2026"],
      image: "/img/r-gsc2.webp",
      alt: "Google Search Console report for Progenius Students: 9.04K clicks, 33.6K impressions, 26.9% CTR, 6.1 avg. position",
      width: 2137,
      height: 793,
      badgeA: {
        title: "26.9% CTR",
        subtitle: "28-day sustained average"
      },
      badgeB: {
        title: "Avg. position 6.1",
        subtitle: "top page 1 rankings"
      }
    },
    {
      id: "case-education",
      num: "02",
      name: "Education website",
      eyebrow: "Verified client result · Case 02",
      title: "Education Platform: 25.4K Clicks in 3 Months",
      description: "Google Search Console report for Education website: 25.4K clicks, 130K impressions, 19.5% CTR, 7.5 avg. position over 3 months.",
      clicksCount: "25.4",
      clicksNum: "25.4",
      clicksSuffix: "K",
      clicksLabel: "Total clicks from Google",
      impressionsCount: "130",
      impressionsNum: "130",
      impressionsSuffix: "K",
      impressionsLabel: "Total impressions",
      ctrCount: "19.5",
      ctrNum: "19.5",
      ctrSuffix: "%",
      ctrLabel: "Average click-through rate",
      posCount: "7.5",
      posNum: "7.5",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["Education website", "Search type: Web", "3 months, Jul to Oct 2026"],
      image: "/img/r-gsc3.webp",
      alt: "Google Search Console report for Education website: 25.4K clicks, 130K impressions, 19.5% CTR, 7.5 avg. position",
      width: 2134,
      height: 805,
      badgeA: {
        title: "19.5% CTR",
        subtitle: "high-conversion intent"
      },
      badgeB: {
        title: "Avg. position 7.5",
        subtitle: "top 10 rankings"
      }
    },
    {
      id: "case-publisher",
      num: "03",
      name: "Publisher network",
      eyebrow: "Verified client result · Case 03",
      title: "Publisher Network: 3.45M Clicks & 421M Impressions",
      description: "Google Search Console report for Publisher network: 3.45M clicks, 421M impressions, 0.8% CTR, 14.4 avg. position over 3 months.",
      clicksCount: "3.45",
      clicksNum: "3.45",
      clicksSuffix: "M",
      clicksLabel: "Total clicks from Google",
      impressionsCount: "421",
      impressionsNum: "421",
      impressionsSuffix: "M",
      impressionsLabel: "Total impressions",
      ctrCount: "0.8",
      ctrNum: "0.8",
      ctrSuffix: "%",
      ctrLabel: "Average click-through rate",
      posCount: "14.4",
      posNum: "14.4",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["Publisher network", "Search type: Web & Discover", "3 months performance"],
      image: "/img/r-gsc9.webp",
      alt: "Google Search Console report for Publisher network: 3.45M clicks, 421M impressions, 0.8% CTR, 14.4 avg. position",
      width: 1200,
      height: 540,
      badgeA: {
        title: "3.45M Clicks",
        subtitle: "massive quarterly reach"
      },
      badgeB: {
        title: "421M Impressions",
        subtitle: "high-volume media reach"
      }
    },
    {
      id: "case-agency-france",
      num: "04",
      name: "Digital agency, France",
      eyebrow: "Verified client result · Case 04",
      title: "Digital Agency France: 15.6K Clicks & 5.52M Impressions",
      description: "Google Search Console report for Digital agency, France: 15.6K clicks, 5.52M impressions, 0.3% CTR, 16.6 avg. position over 28 days.",
      clicksCount: "15.6",
      clicksNum: "15.6",
      clicksSuffix: "K",
      clicksLabel: "Total clicks from Google",
      impressionsCount: "5.52",
      impressionsNum: "5.52",
      impressionsSuffix: "M",
      impressionsLabel: "Total impressions",
      ctrCount: "0.3",
      ctrNum: "0.3",
      ctrSuffix: "%",
      ctrLabel: "Average click-through rate",
      posCount: "16.6",
      posNum: "16.6",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["Digital agency, France", "International SEO", "28 days performance"],
      image: "/img/r-gsc5.webp",
      alt: "Google Search Console report for Digital agency, France: 15.6K clicks, 5.52M impressions, 0.3% CTR, 16.6 avg. position",
      width: 1200,
      height: 440,
      badgeA: {
        title: "15.6K Clicks",
        subtitle: "European inbound traffic"
      },
      badgeB: {
        title: "5.52M Impressions",
        subtitle: "regional French footprint"
      }
    },
    {
      id: "case-saas-blog",
      num: "05",
      name: "SaaS analytics blog",
      eyebrow: "Verified client result · Case 05",
      title: "SaaS Analytics Blog: 11.5K Clicks & 314K Impressions",
      description: "Google Search Console report for SaaS analytics blog: 11.5K clicks, 314K impressions, 3.7% CTR, 23.2 avg. position over 3 months.",
      clicksCount: "11.5",
      clicksNum: "11.5",
      clicksSuffix: "K",
      clicksLabel: "Total clicks from Google",
      impressionsCount: "314",
      impressionsNum: "314",
      impressionsSuffix: "K",
      impressionsLabel: "Total impressions",
      ctrCount: "3.7",
      ctrNum: "3.7",
      ctrSuffix: "%",
      ctrLabel: "Average click-through rate",
      posCount: "23.2",
      posNum: "23.2",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["SaaS analytics blog", "Product-Led SEO", "3 months performance"],
      image: "/img/r-gsc4.webp",
      alt: "Google Search Console report for SaaS analytics blog: 11.5K clicks, 314K impressions, 3.7% CTR, 23.2 avg. position",
      width: 1200,
      height: 522,
      badgeA: {
        title: "3.7% CTR",
        subtitle: "product-led search traffic"
      },
      badgeB: {
        title: "11.5K Clicks",
        subtitle: "pipeline of trial users"
      }
    },
    {
      id: "case-home-services",
      num: "06",
      name: "Home services company",
      eyebrow: "Verified client result · Case 06",
      title: "Home Services Company: 5.85K Clicks & 822K Impressions",
      description: "Google Search Console report for Home services company: 5.85K clicks, 822K impressions, 0.7% CTR, 33.4 avg. position over 3 months.",
      clicksCount: "5.85",
      clicksNum: "5.85",
      clicksSuffix: "K",
      clicksLabel: "Total clicks from Google",
      impressionsCount: "822",
      impressionsNum: "822",
      impressionsSuffix: "K",
      impressionsLabel: "Total impressions",
      ctrCount: "0.7",
      ctrNum: "0.7",
      ctrSuffix: "%",
      ctrLabel: "Average click-through rate",
      posCount: "33.4",
      posNum: "33.4",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["Home services company", "Local & Service Area SEO", "3 months performance"],
      image: "/img/r-gsc7.webp",
      alt: "Google Search Console report for Home services company: 5.85K clicks, 822K impressions, 0.7% CTR, 33.4 avg. position",
      width: 1200,
      height: 459,
      badgeA: {
        title: "5.85K Clicks",
        subtitle: "local service inquiries"
      },
      badgeB: {
        title: "822K Impressions",
        subtitle: "suburban market footprint"
      }
    },
    {
      id: "case-seo-consultant",
      num: "07",
      name: "SEO consultant site",
      eyebrow: "Verified client result · Case 07",
      title: "SEO Consultant Site: 7.37M Impressions Over 16 Months",
      description: "Google Search Console report for SEO consultant site: 5.21K clicks, 7.37M impressions, 0.1% CTR, 34.5 avg. position over 16 months.",
      clicksCount: "5.21",
      clicksNum: "5.21",
      clicksSuffix: "K",
      clicksLabel: "Total clicks from Google",
      impressionsCount: "7.37",
      impressionsNum: "7.37",
      impressionsSuffix: "M",
      impressionsLabel: "Total impressions",
      ctrCount: "0.1",
      ctrNum: "0.1",
      ctrSuffix: "%",
      ctrLabel: "Average click-through rate",
      posCount: "34.5",
      posNum: "34.5",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["SEO consultant site", "Organic Authority", "16 months historical data"],
      image: "/img/r-gsc8.webp",
      alt: "Google Search Console report for SEO consultant site: 5.21K clicks, 7.37M impressions, 0.1% CTR, 34.5 avg. position",
      width: 1200,
      height: 378,
      badgeA: {
        title: "7.37M Impressions",
        subtitle: "technical authority reach"
      },
      badgeB: {
        title: "16-Month Timeline",
        subtitle: "compound organic equity"
      }
    },
    {
      id: "case-ecommerce",
      num: "08",
      name: "E-commerce store",
      eyebrow: "Verified client result · Case 08",
      title: "E-Commerce Store: 2.26K Clicks in Last 24 Hours",
      description: "Google Search Console report for E-commerce store: 2.26K clicks, 129K impressions, 1.7% CTR, 30 avg. position in 24 hours.",
      clicksCount: "2.26",
      clicksNum: "2.26",
      clicksSuffix: "K",
      clicksLabel: "Total clicks from Google",
      impressionsCount: "129",
      impressionsNum: "129",
      impressionsSuffix: "K",
      impressionsLabel: "Total impressions",
      ctrCount: "1.7",
      ctrNum: "1.7",
      ctrSuffix: "%",
      ctrLabel: "Average click-through rate",
      posCount: "30",
      posNum: "30",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["E-commerce store", "Search type: Web & Shopping", "Last 24 hours snapshot"],
      image: "/img/r-gsc6.webp",
      alt: "Google Search Console report for E-commerce store: 2.26K clicks, 129K impressions, 1.7% CTR, 30 avg. position",
      width: 1200,
      height: 365,
      badgeA: {
        title: "2.26K Clicks / 24h",
        subtitle: "high-velocity buyer orders"
      },
      badgeB: {
        title: "129K Daily Impressions",
        subtitle: "catalog search demand"
      }
    },
    {
      id: "case-b2b-saas",
      num: "09",
      name: "B2B SaaS tool",
      eyebrow: "Verified client result · Case 09",
      title: "B2B SaaS Tool: +47% Clicks & +104% CTR Increase",
      description: "Google Search Console report for B2B SaaS tool: 693 clicks, +47%, 4.1% CTR, +104%, 17.1K impressions, 45.6 avg. position over 3 months vs prior period.",
      clicksCount: "693",
      clicksNum: "693",
      clicksSuffix: "",
      clicksLabel: "Clicks (+47% vs prior period)",
      impressionsCount: "17.1",
      impressionsNum: "17.1",
      impressionsSuffix: "K",
      impressionsLabel: "Total impressions",
      ctrCount: "4.1",
      ctrNum: "4.1",
      ctrSuffix: "%",
      ctrLabel: "CTR (+104% period lift)",
      posCount: "45.6",
      posNum: "45.6",
      posSuffix: "",
      posLabel: "Average position",
      tags: ["B2B SaaS tool", "Comparison: 3 Mo vs Prior", "Verified uplift"],
      image: "/img/r-gsc10.webp",
      alt: "Google Search Console report for B2B SaaS tool: 693 clicks, +47%, 4.1% CTR, +104%, 17.1K impressions, 45.6 avg. position",
      width: 1200,
      height: 399,
      badgeA: {
        title: "+104% CTR Increase",
        subtitle: "metadata & title impact"
      },
      badgeB: {
        title: "+47% Clicks Lift",
        subtitle: "quarter-over-quarter growth"
      }
    }
  ];

  return (
    <section className="mr mr-all" id="more-results" aria-labelledby="mr-h">
      <div className="wrap">
        <div className="xh c" data-r="">
          <span className="xe">
            <i></i>
            {"More verified results"}
          </span>
          <h2 className="h2" id="mr-h">
            {"Straight from Google Search Console."}
          </h2>
          <p>
            {"No mockups and no estimates. These are live performance reports from client accounts, shared with permission."}
          </p>
        </div>

        <div className="mr-tot" data-r="">
          <div>
            <b>{"3.5M+"}</b>
            <span>{"clicks tracked across client accounts"}</span>
          </div>
          <div>
            <b>{"435M+"}</b>
            <span>{"impressions in Search Console"}</span>
          </div>
          <div>
            <b>{"9"}</b>
            <span>{"verified reports published"}</span>
          </div>
          <div>
            <b>{"100%"}</b>
            <span>{"real screenshots, zero mockups"}</span>
          </div>
        </div>

        {/* Quick-jump navigation pills */}
        <div className="cs-nav" data-r="">
          <span className="cs-nav-lbl">{"Jump to verified report"}</span>
          <div className="cs-nav-pills">
            {caseStudies.map((cs) => (
              <a key={cs.id} href={`#${cs.id}`} className="cs-pill">
                <span className="num">{cs.num}</span>
                <span>{cs.name}</span>
              </a>
            ))}
          </div>
        </div>

        {/* 9 Rich Case Studies Cards */}
        <div className="cs-list">
          {caseStudies.map((cs) => (
            <article key={cs.id} id={cs.id} className="cs-card" data-r="">
              <div className="rgrid">
                <div>
                  <span className="eyb pill">
                    <i></i>
                    {cs.eyebrow}
                  </span>
                  <h3 className="h2" style={{margin: "14px 0 12px", fontSize: "clamp(22px, 2.4vw, 32px)"} as React.CSSProperties}>
                    {cs.title}
                  </h3>
                  <p className="lead" style={{fontSize: "16px", lineHeight: "1.6", color: "var(--ink2)"} as React.CSSProperties}>
                    {cs.description}
                  </p>

                  {/* 4 Colored Metric Cards */}
                  <div className="rk" data-stagger="">
                    <div className="k1">
                      <b>
                        <span data-count={cs.clicksCount}>
                          {cs.clicksNum}
                        </span>
                        {cs.clicksSuffix}
                      </b>
                      <span>{cs.clicksLabel}</span>
                    </div>
                    <div className="k2">
                      <b>
                        <span data-count={cs.impressionsCount}>
                          {cs.impressionsNum}
                        </span>
                        {cs.impressionsSuffix}
                      </b>
                      <span>{cs.impressionsLabel}</span>
                    </div>
                    <div className="k3">
                      <b>
                        <span data-count={cs.ctrCount}>
                          {cs.ctrNum}
                        </span>
                        {cs.ctrSuffix}
                      </b>
                      <span>{cs.ctrLabel}</span>
                    </div>
                    <div className="k4">
                      <b>
                        <span data-count={cs.posCount}>
                          {cs.posNum}
                        </span>
                        {cs.posSuffix}
                      </b>
                      <span>{cs.posLabel}</span>
                    </div>
                  </div>

                  {/* Metadata tags */}
                  <div className="rmeta">
                    {cs.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div style={{marginTop: "24px", display: "flex", gap: "10px", flexWrap: "wrap"} as React.CSSProperties}>
                    <a className="btn dk" href="/contact-us/">
                      {"Request a quote"}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                    <a className="btn ln" href="/contact-us/">
                      {"Get results like this"}
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M5 12h14M13 6l6 6-6 6" />
                      </svg>
                    </a>
                  </div>
                </div>

                {/* Search Console Browser Mockup & Floating Badges */}
                <div className="rwrap" data-r="s">
                  <div className="bframe">
                    <div className="bb">
                      <i></i>
                      <i></i>
                      <i></i>
                      <span>{"search.google.com / search-console / performance"}</span>
                      <em className="bb-live">
                        <span className="live-dot"></span>
                        {"Live client data"}
                      </em>
                    </div>
                    <img
                      src={cs.image}
                      alt={cs.alt}
                      loading="lazy"
                      width={cs.width}
                      height={cs.height}
                    />
                  </div>

                  {/* Floating Badge A */}
                  <div className="rbadge a">
                    <span className="g">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <circle cx="12" cy="12" r="9" />
                        <circle cx="12" cy="12" r="5" />
                        <circle cx="12" cy="12" r="1" />
                      </svg>
                    </span>
                    <span>
                      <b>{cs.badgeA.title}</b>
                      {cs.badgeA.subtitle}
                    </span>
                  </div>

                  {/* Floating Badge B */}
                  <div className="rbadge b">
                    <span className="g">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <path d="M4 20V4M4 20h16M8 16l4-5 3 3 5-7" />
                      </svg>
                    </span>
                    <span>
                      <b>{cs.badgeB.title}</b>
                      {cs.badgeB.subtitle}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mr-cta" data-r="" style={{marginTop: "48px"} as React.CSSProperties}>
          <a className="btn ac" href="/contact-us/">
            {"Get results like this"}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
