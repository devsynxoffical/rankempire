import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/seo-for-lawyers/V1';
import Statement from '@/components/pages/seo-for-lawyers/Statement';
import Searches from '@/components/pages/seo-for-lawyers/Searches';
import Challenges from '@/components/pages/seo-for-lawyers/Challenges';
import Pages from '@/components/pages/seo-for-lawyers/Pages';
import Marquee from '@/components/pages/seo-for-lawyers/Marquee';
import Strategy from '@/components/pages/seo-for-lawyers/Strategy';
import Services from '@/components/pages/seo-for-lawyers/Services';
import Cities from '@/components/pages/seo-for-lawyers/Cities';
import Pricing from '@/components/pages/seo-for-lawyers/Pricing';
import Faq from '@/components/pages/seo-for-lawyers/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-lawyers/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Lawyers: More Calls and Customers | RankEmpire",
  description: "SEO for lawyers that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for law firms.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-lawyers/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Lawyers: More Calls and Customers | RankEmpire", description: "SEO for lawyers that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for law firms.", url: "https://www.rankempire.us/seo-for-lawyers/", images: ["https://www.rankempire.us/img/i-legal.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Lawyers: More Calls and Customers | RankEmpire", description: "SEO for lawyers that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for law firms." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Lawyers\", \"item\": \"https://www.rankempire.us/seo-for-lawyers/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Lawyers\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Lawyers\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-lawyers/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we respond to negative reviews from former clients?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, but carefully. Attorney confidentiality rules generally prevent revealing information about a client's matter, even to defend yourself. Keep responses short, professional, and general, and invite the reviewer to contact the office. Several state bars have issued guidance on this, so check yours before replying.\"}}, {\"@type\": \"Question\", \"name\": \"Should we create pages for every city near our office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only where you genuinely serve clients and can add real local information, such as the courthouse, local procedures, or community involvement. Pages that swap city names with identical text rarely help and may look misleading. Focus on the courts and counties where you actually practice.\"}}, {\"@type\": \"Question\", \"name\": \"Can we call ourselves specialists or experts?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many states restrict the word specialist unless the attorney is certified by an approved body. Expert claims can also raise issues. Describe experience factually instead, such as years practicing or types of cases handled, and confirm the rules with your state bar before publishing.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for a law firm?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on the market and practice area. Competitive areas in large cities take longer than niche practices in smaller towns. Most firms see progress build over months as practice pages, reviews, and authority grow together, rather than through any single quick change.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for lawyers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most law firms see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for lawyers cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <Statement />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
        <Pricing />
        <Faq />
        <Pmq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
