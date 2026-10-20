import type { Metadata } from "next";
import { Anton, Urbanist } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/animations/SmoothScroll";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { BRAND_NAME, SITE_URL } from "@/data";

const anton = Anton({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-anton",
  display: "swap",
});

const urbanist = Urbanist({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-urbanist",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RankEmpire | SEO Agency for Local, E-commerce and SaaS Growth",
    template: `%s | ${BRAND_NAME}`,
  },
  description:
    "RankEmpire is an SEO agency that builds rankings that compound: local SEO, technical SEO, content, link building and Google Business Profile optimization for US businesses.",
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: "/img/favicon.svg",
  },
  openGraph: {
    type: "website",
    siteName: BRAND_NAME,
    title: "RankEmpire | SEO Agency for Local, E-commerce and SaaS Growth",
    description:
      "RankEmpire is an SEO agency that builds rankings that compound: local SEO, technical SEO, content, link building and Google Business Profile optimization for US businesses.",
    url: SITE_URL,
    images: [
      {
        url: "/img/hero.webp",
        width: 1200,
        height: 630,
        alt: "RankEmpire SEO Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const orgSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: BRAND_NAME,
    url: SITE_URL,
    email: "hello@rankempire.com",
    logo: `${SITE_URL}/img/logo.png`,
    description:
      "RankEmpire is an SEO agency for local businesses, e-commerce brands and SaaS companies.",
  };

  const webSiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: BRAND_NAME,
    url: SITE_URL,
  };

  return (
    <html lang="en" className={`${anton.variable} ${urbanist.variable}`}>
      <head>
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
        <SmoothScroll>
          <Navbar />
          <main>{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
