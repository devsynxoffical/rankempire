"use client";

import React, { useState, useEffect, useRef } from "react";
import { ArrowIcon } from "@/components/common/Icons";

const SAMPLE_HTML = `<!doctype html><html lang="en"><head><title>Emergency Plumber in Denver | Fast 24/7 Service</title>
<meta name="description" content="Licensed Denver plumbers available 24/7 for leaks, clogs and water heaters. Upfront pricing and 90 minute arrival.">
<link rel="canonical" href="https://example.com/emergency-plumber-denver/"><meta name="viewport" content="width=device-width,initial-scale=1">
<meta property="og:title" content="Emergency Plumber in Denver"><script type="application/ld+json">{"@context":"https://schema.org","@type":"Plumber","name":"Example Plumbing","telephone":"+1-555-0100","address":{"@type":"PostalAddress","addressLocality":"Denver","addressRegion":"CO"}}</script></head>
<body><h1>Emergency Plumber in Denver</h1><h2>Services</h2><p>We fix leaks, clogs and water heaters across Denver and nearby suburbs.</p><img src="van.jpg" alt="Plumbing van in Denver"><img src="team.jpg"><a href="/water-heater-repair/">Water heater repair</a><a href="https://maps.google.com">Find us</a></body></html>`;

const SAMPLES: Record<string, string> = {
  schema: `<script type="application/ld+json">{"@context":"https://schema.org","@type":"LocalBusiness","name":"Example Dental","url":"https://example.com","telephone":"+1-555-0100"}</script>`,
  sitemap: `<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"><url><loc>https://example.com/</loc><lastmod>2026-10-01</lastmod></url><url><loc>https://example.com/services/</loc><lastmod>2026-09-12</lastmod></url><url><loc>http://example.com/blog/?page=2</loc></url><url><loc>https://example.com/services/</loc></url></urlset>`,
  robots: `User-agent: *\nDisallow: /wp-admin/\nAllow: /wp-admin/admin-ajax.php\nDisallow: /*?s=\nDisallow: /cart/\n\nUser-agent: GPTBot\nDisallow: /\n\nSitemap: https://example.com/sitemap.xml`,
  rank: `https://www.yelp.com/search?find_desc=plumber\nhttps://www.angi.com/companylist/plumbing\nhttps://www.example.com/emergency-plumber/\nhttps://www.competitor-plumbing.com/\nhttps://www.homeadvisor.com/plumbers\nhttps://www.example.com/water-heater-repair/`,
  backlink: `https://localnews.com/article-1,Example Plumbing\nhttps://chamber.org/members,example.com\nhttps://blog.homeguide.com/tips,emergency plumber\nhttps://directory.com/listing,Example Plumbing\nhttps://directory.com/listing2,click here\nhttps://partners.example.org/,Example Plumbing Denver`,
};

export default function ToolRunner({
  toolSlug,
  toolType,
}: {
  toolSlug: string;
  toolType: string;
}) {
  const [inputHtml, setInputHtml] = useState("");
  const [domain, setDomain] = useState("example.com");
  const [userAgent, setUserAgent] = useState("Googlebot");
  const [path, setPath] = useState("/");
  const [keyword, setKeyword] = useState("plumber");
  const [city, setCity] = useState("Denver");

  // SERP state
  const [serpTitle, setSerpTitle] = useState("Emergency Plumber in Denver | 24/7 Fast Response");
  const [serpDesc, setSerpDesc] = useState("Licensed Denver plumbers available 24/7 for leaks, clogged drains and water heater repairs. 90-minute arrival and upfront pricing.");
  const [serpUrl, setSerpUrl] = useState("https://www.example.com/emergency-plumber-denver/");

  const [outputHtml, setOutputHtml] = useState<string>("");
  const outRef = useRef<HTMLDivElement>(null);

  const E = (s: string) =>
    String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c] || c));

  const R = (lvl: "ok" | "warn" | "bad", t: string, d: string) =>
    `<div class="res ${lvl}"><i>${lvl === "ok" ? "✓" : lvl === "warn" ? "!" : "×"}</i><div><b>${E(
      t
    )}</b><span>${d}</span></div></div>`;

  const runAudit = (h: string) => {
    const doc = new DOMParser().parseFromString(h, "text/html");
    const res: string[] = [];
    let pts = 0;
    let max = 0;

    const add = (w: number, lvl: "ok" | "warn" | "bad", t: string, msg: string) => {
      max += w;
      if (lvl === "ok") pts += w;
      else if (lvl === "warn") pts += w / 2;
      res.push(R(lvl, t, msg));
    };

    const title = (doc.querySelector("title") || {}).textContent || "";
    const tl = title.trim().length;
    add(
      10,
      !tl ? "bad" : tl < 30 || tl > 60 ? "warn" : "ok",
      "Title tag",
      tl ? `"${E(title.trim())}" (${tl} characters). Aim for 30 to 60.` : "Missing. Every page needs a unique title."
    );

    const md = doc.querySelector('meta[name="description" i]');
    const mdv = md ? md.getAttribute("content") || "" : "";
    add(
      8,
      !mdv ? "bad" : mdv.length < 70 || mdv.length > 160 ? "warn" : "ok",
      "Meta description",
      mdv
        ? `${mdv.length} characters. Aim for 70 to 160.`
        : "Missing. Write a compelling summary to improve click-through rate."
    );

    const h1 = Array.from(doc.querySelectorAll("h1"));
    add(
      10,
      h1.length === 1 ? "ok" : h1.length ? "warn" : "bad",
      "H1 heading",
      h1.length === 1
        ? `"${E(h1[0].textContent?.trim().slice(0, 90) || "")}"`
        : h1.length
        ? `${h1.length} H1 tags found. Use one main heading.`
        : "No H1 found."
    );

    const h2 = doc.querySelectorAll("h2").length;
    add(5, h2 ? "ok" : "warn", "Subheadings", h2 ? `${h2} H2 headings structure the content.` : "No H2 headings. Break content into sections.");

    const can = doc.querySelector('link[rel="canonical"]');
    add(7, can ? "ok" : "warn", "Canonical tag", can ? E(can.getAttribute("href") || "") : "Missing. Add a self-referencing canonical.");

    const rob = doc.querySelector('meta[name="robots" i]');
    const ni = rob && /noindex/i.test(rob.getAttribute("content") || "");
    add(10, ni ? "bad" : "ok", "Indexability", ni ? "This page has a noindex tag and will not appear in search." : "No noindex directive found.");

    const vp = doc.querySelector('meta[name="viewport"]');
    add(6, vp ? "ok" : "bad", "Mobile viewport", vp ? "Viewport tag present." : "Missing viewport tag. Page may not be mobile friendly.");

    const lang = doc.documentElement.getAttribute("lang");
    add(3, lang ? "ok" : "warn", "Language attribute", lang ? `lang="${E(lang)}"` : "Add a lang attribute to the html tag.");

    const imgs = Array.from(doc.querySelectorAll("img"));
    const noalt = imgs.filter((i) => !i.hasAttribute("alt") || !i.getAttribute("alt")?.trim());
    add(7, !imgs.length ? "warn" : noalt.length ? "warn" : "ok", "Image alt text", imgs.length ? `${imgs.length - noalt.length} of ${imgs.length} images have alt text.` : "No images found.");

    const txt = (doc.body ? doc.body.textContent || "" : "").replace(/\s+/g, " ").trim();
    const wc = txt ? txt.split(" ").length : 0;
    add(8, wc >= 300 ? "ok" : wc >= 120 ? "warn" : "bad", "Content length", `${wc} words of visible text. Most ranking pages have 300 or more.`);

    const ld = doc.querySelectorAll('script[type="application/ld+json"]').length;
    add(7, ld ? "ok" : "warn", "Structured data", ld ? `${ld} JSON-LD block(s) found.` : "No JSON-LD schema found.");

    const og = doc.querySelector('meta[property="og:title"]');
    add(4, og ? "ok" : "warn", "Open Graph", og ? "Social preview tags present." : "Add og:title, og:description and og:image.");

    const sc = Math.round((pts / max) * 100);
    const ringCol = sc >= 80 ? "#1f9d55" : sc >= 55 ? "#e8a317" : "#ff4c39";
    const cLen = 2 * Math.PI * 48;
    const ringHtml = `<div class="ring"><svg viewBox="0 0 110 110"><circle cx="55" cy="55" r="48" stroke="#eae0cf" stroke-width="10" fill="none"/><circle cx="55" cy="55" r="48" stroke="${ringCol}" stroke-width="10" fill="none" stroke-linecap="round" stroke-dasharray="${cLen}" stroke-dashoffset="${cLen * (1 - sc / 100)}" style="transition:stroke-dashoffset 1s"/></svg><b>${sc}</b></div>`;

    return (
      `<div class="score">${ringHtml}<div><h3 style="font-size:22px;margin-bottom:4px">SEO score: ${sc}/100</h3><p style="color:var(--mute3)">${
        sc >= 80
          ? "Strong on-page basics. Focus on content depth and links."
          : sc >= 55
          ? "Good start with clear room to improve. Fix the items marked below."
          : "Several important basics are missing. Start with the red items."
      }</p></div></div>` + res.join("")
    );
  };

  const handleRun = () => {
    let result = "";
    const h = inputHtml.trim();

    if (toolType === "audit") {
      result = runAudit(h || SAMPLE_HTML);
    } else if (toolType === "schema") {
      try {
        const json = JSON.parse(h || SAMPLES.schema);
        result = R("ok", "Valid JSON Schema", `Schema parsed cleanly with type: ${json["@type"] || "Schema"}`);
      } catch (err: unknown) {
        result = R("bad", "Invalid JSON-LD", (err as Error).message);
      }
    } else if (toolType === "sitemap") {
      const doc = new DOMParser().parseFromString(h || SAMPLES.sitemap, "application/xml");
      const locs = Array.from(doc.getElementsByTagName("loc")).map((x) => x.textContent || "");
      result = R("ok", "XML Sitemap", `${locs.length} URLs identified.`);
    } else if (toolType === "robots") {
      result = R("ok", `Robots.txt Analysis for ${userAgent}`, `Path ${path} tested.`);
    } else if (toolType === "kw") {
      const ideas = [
        `best ${keyword}`,
        `${keyword} in ${city}`,
        `${keyword} cost`,
        `how to choose ${keyword}`,
        `emergency ${keyword} near me`,
      ];
      result = `<div class="kwlist">${ideas.map((k) => `<div><span>${k}</span><small>Intent</small></div>`).join("")}</div>`;
    }

    setOutputHtml(result);
  };

  useEffect(() => {
    // Run default demo on mount
    handleRun();
  }, [toolType]);

  if (toolType === "serp") {
    return (
      <div className="tool" data-tool="serp">
        <div className="row" style={{ marginBottom: "18px" }}>
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 600 }}>Page Title</label>
            <input
              type="text"
              value={serpTitle}
              onChange={(e) => setSerpTitle(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)" }}
            />
          </div>
          <div>
            <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 600 }}>Destination URL</label>
            <input
              type="text"
              value={serpUrl}
              onChange={(e) => setSerpUrl(e.target.value)}
              style={{ width: "100%", padding: "12px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)" }}
            />
          </div>
        </div>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "6px", fontSize: "14px", fontWeight: 600 }}>Meta Description</label>
          <textarea
            value={serpDesc}
            onChange={(e) => setSerpDesc(e.target.value)}
            style={{ width: "100%", minHeight: "80px", padding: "12px", borderRadius: "10px", background: "var(--bg)", border: "1px solid var(--line)" }}
          />
        </div>

        {/* Live SERP card */}
        <div className="serp">
          <div className="u">
            <i>G</i>
            <span>
              {serpUrl.replace(/^https?:\/\//, "").split("/")[0]}
              <small>{serpUrl}</small>
            </span>
          </div>
          <h3>{serpTitle}</h3>
          <p>{serpDesc}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="tool" data-tool={toolType}>
      <div style={{ marginBottom: "16px" }}>
        <textarea
          placeholder="Paste code or data here..."
          value={inputHtml}
          onChange={(e) => setInputHtml(e.target.value)}
          style={{ width: "100%", minHeight: "160px", padding: "14px", borderRadius: "12px", background: "var(--bg)", border: "1px solid var(--line)" }}
        />
      </div>

      <div style={{ display: "flex", gap: "10px", flexWrap: "wrap", marginBottom: "20px" }}>
        <button
          className="btn acc"
          type="button"
          onClick={handleRun}
        >
          Run Analysis
          <ArrowIcon />
        </button>
        <button
          className="btn line"
          type="button"
          onClick={() => {
            setInputHtml(SAMPLES[toolType] || SAMPLE_HTML);
          }}
        >
          Load Sample
        </button>
      </div>

      {outputHtml && (
        <div
          ref={outRef}
          className="out"
          dangerouslySetInnerHTML={{ __html: outputHtml }}
        />
      )}
    </div>
  );
}
