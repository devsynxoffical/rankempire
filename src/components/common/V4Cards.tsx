import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowIcon, SearchIcon, ShieldIcon, TargetIcon, ChartIcon, PinIcon, SparkIcon, UsersIcon } from "@/components/common/Icons";
import AuditForm from "@/components/common/AuditForm";

export const PAL = ["#ec4e3b", "#2b55e8", "#e37a38", "#4a9f5f", "#8c2fe2", "#e0a800"];
export const col = (i: number) => PAL[i % PAL.length];

export function XHeader({
  eyb,
  h2,
  sub,
  c = false,
  light = false,
}: {
  eyb: string;
  h2: string;
  sub?: string;
  c?: boolean;
  light?: boolean;
}) {
  return (
    <div className={`xh${c ? " c" : ""}${light ? " lt" : ""}`} data-r>
      <span className="xe">
        <i></i>
        {eyb}
      </span>
      <h2 className="h2" dangerouslySetInnerHTML={{ __html: h2 }} />
      {sub && <p>{sub}</p>}
    </div>
  );
}

export function getVideoForService(serviceOrImg: string): { video: string; poster: string } | null {
  const s = serviceOrImg.toLowerCase();
  if (s.includes("local") || s.includes("google-business") || s.includes("map")) {
    return { video: "/img/m-local.mp4", poster: "/img/m-local.jpg" };
  }
  if (s.includes("tech") || s.includes("speed") || s.includes("crawl")) {
    return { video: "/img/m-tech.mp4", poster: "/img/m-tech.jpg" };
  }
  if (s.includes("content") || s.includes("page-seo") || s.includes("copy")) {
    return { video: "/img/m-content.mp4", poster: "/img/m-content.jpg" };
  }
  if (s.includes("aeo") || s.includes("geo") || s.includes("ai")) {
    return { video: "/img/m-ai.mp4", poster: "/img/m-ai.jpg" };
  }
  if (
    s.includes("audit") ||
    s.includes("strat") ||
    s.includes("keyword") ||
    s.includes("competitor") ||
    s.includes("consult")
  ) {
    return { video: "/img/m-strat.mp4", poster: "/img/m-strat.jpg" };
  }
  if (
    s.includes("ecommerce") ||
    s.includes("saas") ||
    s.includes("b2b") ||
    s.includes("growth") ||
    s.includes("link") ||
    s.includes("national") ||
    s.includes("enterprise")
  ) {
    return { video: "/img/m-growth.mp4", poster: "/img/m-growth.jpg" };
  }
  return { video: "/img/m-desk.mp4", poster: "/img/m-desk.jpg" };
}

export function XHero({
  crumbs,
  pill,
  h1,
  lead,
  img,
  alt = "",
  chips = [],
  facts = [],
  extra,
}: {
  crumbs: { label: string; href: string }[];
  pill: string;
  h1: string;
  lead: string;
  img: string;
  alt?: string;
  chips?: string[];
  facts?: [string, string][];
  extra?: React.ReactNode;
}) {
  const videoData = getVideoForService(img || alt || pill);
  const imgSrc = img.startsWith("/") ? img : `/img/${img.replace(/^img\//, "")}`;

  return (
    <section className="yh">
      <canvas className="grain" aria-hidden="true" />
      <div className="wrap">
        <nav className="crumb" aria-label="Breadcrumb">
          {crumbs.map((c, i) => (
            <React.Fragment key={i}>
              {i > 0 && <span className="sep">/</span>}
              {i === crumbs.length - 1 ? (
                <span aria-current="page">{c.label}</span>
              ) : (
                <Link href={c.href}>{c.label}</Link>
              )}
            </React.Fragment>
          ))}
        </nav>

        <div className="yh-g">
          <div className="yh-l">
            <span className="eyb pill lt" data-r>
              <i />
              {pill}
            </span>
            <h1 data-r dangerouslySetInnerHTML={{ __html: h1 }} />
            <p className="lead" data-r>
              {lead}
            </p>
            <div className="yh-cta" data-r>
              <AuditForm />
              <div className="ticks lt">
                <span>Free audit in 2 business days</span>
                <span>Month to month</span>
                <span>Plain-English reporting</span>
              </div>
            </div>
          </div>

          <div className="yh-v" data-r="s">
            <div className="yh-m">
              {videoData ? (
                <video
                  className="mv3d"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={videoData.poster}
                  aria-label={alt || "SEO"}
                >
                  <source src={videoData.video} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={imgSrc}
                  alt={alt || "SEO"}
                  width={600}
                  height={550}
                  priority
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              )}
              {chips.length > 0 && (
                <div className="yh-ch">
                  {chips.slice(0, 5).map((ch, i) => (
                    <span key={i} style={{ ["--i" as string]: i }}>
                      {ch}
                    </span>
                  ))}
                </div>
              )}
              <div className="yh-ring" aria-hidden="true" />
            </div>
            {extra}
          </div>
        </div>

        {facts.length > 0 && (
          <div className="yfacts" data-r>
            {facts.map(([val, label], i) => {
              const rawVal = val.replace(/[^0-9.]/g, "");
              return (
                <div key={i} style={{ ["--c" as string]: col(i) }}>
                  <b data-count={rawVal || val} data-raw={val}>
                    {val}
                  </b>
                  <span>{label}</span>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
}

export function XOverview({
  eyb = "Overview",
  h2,
  paras = [],
  facts = [],
  img = "v3-desk.webp",
  alt = "",
  id = "what",
}: {
  eyb?: string;
  h2: string;
  paras: string[];
  facts?: [string, string][];
  img?: string;
  alt?: string;
  id?: string;
}) {
  const videoData = getVideoForService(img || alt || eyb || h2);
  const imgSrc = img.startsWith("/") ? img : `/img/${img.replace(/^img\//, "")}`;

  return (
    <section className="x xov" id={id}>
      <div className="wrap">
        <div className="xov-g">
          <div>
            <XHeader eyb={eyb} h2={h2} />
            <div className="xprose" data-r>
              {paras.map((p, i) => (
                <p
                  key={i}
                  className={i === 0 && p.length < 260 ? "lede" : ""}
                >
                  {p}
                </p>
              ))}
            </div>
          </div>

          <div className="xov-v" data-r="s">
            <div className="xim">
              {videoData ? (
                <video
                  className="mv3d"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="metadata"
                  poster={videoData.poster}
                  aria-label={alt || "Overview"}
                >
                  <source src={videoData.video} type="video/mp4" />
                </video>
              ) : (
                <Image
                  src={imgSrc}
                  alt={alt || "Overview"}
                  width={560}
                  height={480}
                  loading="lazy"
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                />
              )}
            </div>
            {facts.length > 0 && (
              <div className="xglance">
                <b className="t">At a glance</b>
                <ul>
                  {facts.map(([f, l], i) => (
                    <li key={i} style={{ ["--c" as string]: col(i) }}>
                      <b>{f}</b>
                      <span>{l}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function XFeatures({
  eyb = "Why it matters",
  h2,
  items,
  sub,
  id = "why",
  num = true,
}: {
  eyb?: string;
  h2: string;
  items: [string, string][];
  sub?: string;
  id?: string;
  num?: boolean;
}) {
  const nClass = `n${Math.min(items.length, 4)}`;

  return (
    <section className="x xfeat" id={id}>
      <div className="wrap">
        <XHeader eyb={eyb} h2={h2} sub={sub} />
        <div className={`xf-g ${nClass}`}>
          {items.map(([title, desc], i) => (
            <article key={i} className="xf" style={{ "--c": col(i) } as React.CSSProperties} data-r>
              {num && <span className="n">0{i + 1}</span>}
              <h3>{title}</h3>
              <p>{desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function XBento({
  eyb = "Deliverables",
  h2,
  items,
  img = "s-local.webp",
  title,
  sub,
  id = "included",
}: {
  eyb?: string;
  h2: string;
  items: [string, string][];
  img?: string;
  title: string;
  sub?: string;
  id?: string;
}) {
  const imgSrc = img.startsWith("/") ? img : `/img/${img.replace(/^img\//, "")}`;
  const nn = items.length;
  const r = (4 + nn) % 4;

  const getSpan = (i: number) => {
    if (r === 2 && i >= nn - 2) return " s2";
    if (r === 1 && i === nn - 1) return " s4";
    if (r === 3 && i === nn - 1) return " s2";
    return "";
  };

  const getIcon = (i: number) => {
    switch (i % 6) {
      case 0:
        return <TargetIcon />;
      case 1:
        return <ChartIcon />;
      case 2:
        return <PinIcon />;
      case 3:
        return <ShieldIcon />;
      case 4:
        return <UsersIcon />;
      default:
        return <SparkIcon />;
    }
  };

  return (
    <section className="x xbento" id={id}>
      <div className="wrap">
        <XHeader eyb={eyb} h2={h2} sub={sub} />
        <div className="xb-g">
          <article className="xb big" data-r>
            <Image
              src={imgSrc}
              alt=""
              width={560}
              height={480}
              loading="lazy"
              style={{ objectFit: "cover", width: "100%", height: "100%" }}
            />
            <div className="ov">
              <span className="k">{items.length} deliverables</span>
              <h3>{title}</h3>
            </div>
          </article>
          {items.map(([t, d], i) => (
            <article
              key={i}
              className={`xb${getSpan(i)}`}
              style={{ "--c": col(i) } as React.CSSProperties}
              data-r
            >
              <span className="ic">{getIcon(i)}</span>
              <span className="no">{String(i + 1).padStart(2, "0")}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function XMonthly({
  eyb = "Every month",
  h2 = "What you get each month",
  items,
  sub = "What you get every month, visible in your dashboard.",
  id = "monthly",
}: {
  eyb?: string;
  h2?: string;
  items: [string, string][];
  sub?: string;
  id?: string;
}) {
  const lab = ["Week 1", "Week 2", "Week 3", "Week 4", "Ongoing", "Ongoing", "Ongoing", "Ongoing"];

  const getIcon = (i: number) => {
    switch (i % 4) {
      case 0:
        return <ChartIcon />;
      case 1:
        return <TargetIcon />;
      case 2:
        return <PinIcon />;
      default:
        return <SparkIcon />;
    }
  };

  return (
    <section className="x xmonth" id={id}>
      <div className="wrap">
        <XHeader eyb={eyb} h2={h2} sub={sub} light />
        <div className="xm-g">
          {items.map(([t, d], i) => (
            <article key={i} className="xm" style={{ "--c": col(i) } as React.CSSProperties} data-r>
              <span className="wk">{lab[i] || "Every month"}</span>
              <span className="ic">{getIcon(i)}</span>
              <h3>{t}</h3>
              <p>{d}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function XSteps({
  eyb = "Process",
  h2,
  steps,
  sub = "A clear plan, owned by one senior strategist, reviewed with you every month.",
  id = "process",
  note,
}: {
  eyb?: string;
  h2: string;
  steps: [string, string][];
  sub?: string;
  id?: string;
  note?: string;
}) {
  return (
    <section className="x xsteps" id={id}>
      <div className="wrap">
        <div className="xs-g">
          <div className="xs-l">
            <XHeader eyb={eyb} h2={h2} sub={sub} />
            <div data-r>
              <Link className="btn ac" href="/contact-us/">
                Start with a free audit
                <ArrowIcon />
              </Link>
            </div>
          </div>
          <div>
            <ol className="xtl">
              {steps.map(([t, d], i) => (
                <li key={i} data-r style={{ "--c": col(i) } as React.CSSProperties}>
                  <span className="dot">{i + 1}</span>
                  <div>
                    <small>Step 0{i + 1}</small>
                    <h3>{t}</h3>
                    <p>{d}</p>
                  </div>
                </li>
              ))}
            </ol>
            {note && (
              <div className="note" style={{ marginTop: 22 }}>
                <ShieldIcon />
                <span>{note}</span>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export function XFit({
  eyb = "Who it is for",
  h2,
  items,
  best,
  id = "fit",
}: {
  eyb?: string;
  h2: string;
  items: string[];
  best?: string[];
  id?: string;
}) {
  return (
    <section className="x xfit" id={id}>
      <div className="wrap">
        <div className="xfit-p">
          <div className="l">
            <XHeader eyb={eyb} h2={h2} light />
            {best && best.length > 0 && (
              <div className="best">
                <b>Best fit</b>
                {best.slice(0, 4).map((x, i) => (
                  <span key={i}>{x}</span>
                ))}
              </div>
            )}
          </div>
          <ul className="xchk">
            {items.map((x, i) => (
              <li key={i} data-r>
                {x}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export function XComparison({
  h2,
  cols = ["Local SEO", "Google Ads"],
  rows = [],
  id = "compare",
}: {
  h2: string;
  cols?: [string, string];
  rows: [string, string, string][];
  id?: string;
}) {
  return (
    <section className="x xcomp" id={id}>
      <div className="wrap">
        <XHeader eyb="Comparison" h2={h2} c />
        <div className="xc-g">
          <div className="xc us" data-r>
            <div className="hd">
              <b>{cols[0]}</b>
              <em>Compounds over time</em>
            </div>
            <ul>
              {rows.map(([x, y], i) => (
                <li key={i}>
                  <small>{x}</small>
                  <span>{y}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="vs" aria-hidden="true">
            vs
          </div>
          <div className="xc them" data-r>
            <div className="hd">
              <b>{cols[1]}</b>
              <em>Stops when spend stops</em>
            </div>
            <ul>
              {rows.map(([x, _, z], i) => (
                <li key={i}>
                  <small>{x}</small>
                  <span>{z}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export function XChips({
  eyb = "Related searches",
  h2,
  chips = [],
  sub = "The searches and subtopics this work is built around.",
  id = "topics",
  links,
}: {
  eyb?: string;
  h2: string;
  chips?: string[];
  sub?: string;
  id?: string;
  links?: [string, string][];
}) {
  return (
    <section className="x xchips" id={id}>
      <div className="wrap">
        <div className="xch-p">
          <XHeader eyb={eyb} h2={h2} sub={sub} light />
          <div className="cl" data-r>
            {links && links.length > 0
              ? links.map(([text, href], i) => (
                  <Link key={i} href={href}>
                    {text}
                  </Link>
                ))
              : chips.map((x, i) => <span key={i}>{x}</span>)}
          </div>
        </div>
      </div>
    </section>
  );
}

export function XSearch({
  eyb = "Keyword targets",
  h2,
  items,
  sub = "Examples of high-intent searches we build pages and profiles around.",
  id = "searches",
}: {
  eyb?: string;
  h2: string;
  items: [string, string][];
  sub?: string;
  id?: string;
}) {
  const toneCol: Record<string, string> = {
    Local: "#2b55e8",
    Urgent: "#e37a38",
    Commercial: "#ec4e3b",
    Research: "#4a9f5f",
    Informational: "#4a9f5f",
    Transactional: "#8c2fe2",
    Comparison: "#8c2fe2",
  };

  return (
    <section className="x xsearch" id={id}>
      <div className="wrap">
        <div className="xq-g2">
          <div>
            <XHeader eyb={eyb} h2={h2} sub={sub} />
          </div>
          <div className="xq-l">
            {items.map(([q, intent], i) => (
              <div key={i} className="xq" data-r>
                <span className="g">
                  <SearchIcon />
                </span>
                <span className="q">{q}</span>
                <em
                  style={{
                    "--c": toneCol[intent] || col(i),
                  } as React.CSSProperties}
                >
                  {intent}
                </em>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function XLinks({
  eyb = "Services",
  h2,
  items,
  sub,
  id = "services",
  cta = "Learn more",
}: {
  eyb?: string;
  h2: string;
  items: { href: string; icon?: React.ReactNode; title: string; desc: string }[];
  sub?: string;
  id?: string;
  cta?: string;
}) {
  return (
    <section className="x xlinks" id={id}>
      <div className="wrap">
        <XHeader eyb={eyb} h2={h2} sub={sub} />
        <div className="xl-g">
          {items.map((it, i) => (
            <Link
              key={i}
              className="xl"
              href={it.href}
              style={{ "--c": col(i) } as React.CSSProperties}
              data-r
            >
              <span className="ic">{it.icon || <TargetIcon />}</span>
              <h3>{it.title}</h3>
              <p>{it.desc}</p>
              <span className="go">
                {cta} <ArrowIcon />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export function XImageCards({
  eyb = "Industries",
  h2,
  items,
  id = "industries",
}: {
  eyb?: string;
  h2: string;
  items: { href: string; img: string; title: string; desc: string }[];
  id?: string;
}) {
  return (
    <section className="x ximg" id={id}>
      <div className="wrap">
        <XHeader eyb={eyb} h2={h2} />
        <div className="xi-g">
          {items.map((it, i) => {
            const imgSrc = it.img.startsWith("/") ? it.img : `/img/${it.img.replace(/^img\//, "")}`;
            return (
              <Link key={i} className="xi" href={it.href} data-r>
                <Image
                  src={imgSrc}
                  alt=""
                  width={350}
                  height={450}
                  loading="lazy"
                  style={{ objectFit: "cover" }}
                />
                <div className="ov">
                  <h3>{it.title}</h3>
                  <p>{it.desc}</p>
                  <span className="go">
                    Learn more <ArrowIcon />
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function XPricing({
  h2 = "Transparent SEO pricing",
  sub = "Included in every plan at the depth your market requires.",
  id = "pricing",
}: {
  h2?: string;
  sub?: string;
  id?: string;
}) {
  return (
    <section className="x xprice" id={id}>
      <div className="wrap">
        <XHeader eyb="Pricing" h2={h2} sub={sub} c />
        <div className="xp-g">
          <article className="xp" data-r>
            <h3>Local</h3>
            <p className="who">Single-location businesses</p>
            <div className="pr">
              <b>$799</b>
              <small>/ month</small>
            </div>
            <ul>
              <li>Google Business Profile optimization</li>
              <li>Up to 10 tracked keywords</li>
              <li>4 optimized pages per month</li>
              <li>Citation cleanup and building</li>
              <li>Monthly report and call</li>
            </ul>
            <Link className="btn dk" href="/contact-us/">
              Get started
              <ArrowIcon />
            </Link>
          </article>

          <article className="xp pop" data-r>
            <span className="tagp">Most popular</span>
            <h3>Growth</h3>
            <p className="who">Growing businesses and multi-location brands</p>
            <div className="pr">
              <b>$1,499</b>
              <small>/ month</small>
            </div>
            <ul>
              <li>Everything in Local</li>
              <li>Up to 30 tracked keywords</li>
              <li>8 optimized or new pages per month</li>
              <li>Technical SEO fixes</li>
              <li>Monthly link building</li>
              <li>Live ranking dashboard</li>
            </ul>
            <Link className="btn ac" href="/contact-us/">
              Get started
              <ArrowIcon />
            </Link>
          </article>

          <article className="xp" data-r>
            <h3>Empire</h3>
            <p className="who">Competitive markets and national brands</p>
            <div className="pr">
              <b>$2,999</b>
              <small>/ month</small>
            </div>
            <ul>
              <li>Everything in Growth</li>
              <li>Up to 100 tracked keywords</li>
              <li>16 optimized or new pages per month</li>
              <li>Digital PR campaign</li>
              <li>Dedicated strategist</li>
              <li>Quarterly roadmap workshop</li>
            </ul>
            <Link className="btn dk" href="/contact-us/">
              Get started
              <ArrowIcon />
            </Link>
          </article>
        </div>
        <p className="xp-n">
          Month to month after a 3 month onboarding.{" "}
          <Link className="tlink" href="/seo-packages/">
            Compare all SEO packages
          </Link>
        </p>
      </div>
    </section>
  );
}

export function XRelated({
  title = "Related services and resources",
  items,
}: {
  title?: string;
  items: { href: string; label: string }[];
}) {
  return (
    <section className="x xrel">
      <div className="wrap">
        <XHeader eyb="Keep exploring" h2={title} />
        <div className="xr-g" data-r>
          {items.map((it, i) => (
            <Link
              key={i}
              href={it.href}
              style={{ "--c": col(i) } as React.CSSProperties}
            >
              <span>{it.label}</span>
              <ArrowIcon />
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
