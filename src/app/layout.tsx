import type { Metadata, Viewport } from "next";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import ClientAnimations from "@/components/animations/ClientAnimations";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BRAND_NAME, SITE_URL } from "@/data";

export const viewport: Viewport = {
  themeColor: "#f1f1f0",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RankEmpire: SEO Company for Local, E-commerce and SaaS",
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "RankEmpire is an SEO company that grows organic traffic, leads and revenue with technical SEO, local SEO, content and link building. Get a free SEO audit.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/img/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: BRAND_NAME,
    title: "RankEmpire: SEO Company for Local, E-commerce and SaaS",
    description:
      "RankEmpire is an SEO company that grows organic traffic, leads and revenue with technical SEO, local SEO, content and link building. Get a free SEO audit.",
    url: SITE_URL,
    images: [
      {
        url: "/img/team.webp",
        width: 1200,
        height: 630,
        alt: "RankEmpire Senior SEO Specialists",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RankEmpire: SEO Company for Local, E-commerce and SaaS",
    description:
      "RankEmpire is an SEO company that grows organic traffic, leads and revenue with technical SEO, local SEO, content and link building. Get a free SEO audit.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": `${SITE_URL}/#org`,
    name: BRAND_NAME,
    url: SITE_URL,
    email: "hello@rankempire.com",
    logo: `${SITE_URL}/img/favicon.svg`,
    image: `${SITE_URL}/img/team.webp`,
    areaServed: {
      "@type": "Country",
      name: "United States",
    },
    description:
      "RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.",
    knowsAbout: [
      "Search engine optimization",
      "Local SEO",
      "Technical SEO",
      "Link building",
      "Content marketing",
    ],
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: SITE_URL,
  };

  return (
    <html lang="en-US">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Mrs+Saint+Delafield&family=Instrument+Serif&family=Anton&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `try{if(sessionStorage.getItem("re-seen"))document.documentElement.classList.add("seen")}catch(e){}`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(webSiteSchema) }}
        />
      </head>
      <body>
        <a className="skip" href="#main">
          Skip to content
        </a>
        <div className="pre" aria-hidden="true">
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <i></i>
          <div className="pw">
            <div>
              <span style={{ animationDelay: "0.550s" }}>R</span>
              <span style={{ animationDelay: "0.595s" }}>a</span>
              <span style={{ animationDelay: "0.640s" }}>n</span>
              <span style={{ animationDelay: "0.685s" }}>k</span>
              <span style={{ animationDelay: "0.730s" }}>E</span>
              <span style={{ animationDelay: "0.775s" }}>m</span>
              <span style={{ animationDelay: "0.820s" }}>p</span>
              <span style={{ animationDelay: "0.910s" }}>i</span>
              <span style={{ animationDelay: "0.955s" }}>r</span>
              <span style={{ animationDelay: "1.000s" }}>e</span>
            </div>
          </div>
          <div className="pc">
            Loading <b>0</b>%
          </div>
        </div>
        <SmoothScroll>
          <ClientAnimations />
          <Navbar />
          <main id="main">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
