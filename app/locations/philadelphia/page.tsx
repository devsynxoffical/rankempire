import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/locations__philadelphia/V2';
import Statement from '@/components/pages/locations__philadelphia/Statement';
import Considerations from '@/components/pages/locations__philadelphia/Considerations';
import ServiceAreas from '@/components/pages/locations__philadelphia/ServiceAreas';
import Keywords from '@/components/pages/locations__philadelphia/Keywords';
import Marquee from '@/components/pages/locations__philadelphia/Marquee';
import Industries from '@/components/pages/locations__philadelphia/Industries';
import Services from '@/components/pages/locations__philadelphia/Services';
import Pricing from '@/components/pages/locations__philadelphia/Pricing';
import Faq from '@/components/pages/locations__philadelphia/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__philadelphia/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Philadelphia SEO Company & Philly SEO Services | RankEmpire" },
  description: "Philadelphia SEO company for Philly businesses in Center City, Fishtown, University City, the Main Line and South Jersey. Local SEO and Maps. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/philadelphia/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Philadelphia SEO Company & Philly SEO Services | RankEmpire", description: "Philadelphia SEO company for Philly businesses in Center City, Fishtown, University City, the Main Line and South Jersey. Local SEO and Maps. Free audit.", url: "https://www.rankempire.us/locations/philadelphia/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Philadelphia SEO Company & Philly SEO Services | RankEmpire", description: "Philadelphia SEO company for Philly businesses in Center City, Fishtown, University City, the Main Line and South Jersey. Local SEO and Maps. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Philadelphia\", \"item\": \"https://www.rankempire.us/locations/philadelphia/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Philadelphia\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Philadelphia\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Pennsylvania\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/philadelphia/\", \"description\": \"RankEmpire is an SEO company serving Philadelphia and its suburbs, including Center City, Rittenhouse, Fishtown, Northern Liberties, University City, South Philly, Manayunk, the Main Line, King of Prussia and Cherry Hill. We run local SEO, Google Business Profile optimization, technical SEO and content for Philadelphia businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Philadelphia business target South Jersey and the suburbs too?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only where you work and are licensed. Customers in Cherry Hill, King of Prussia or the Main Line see different map results from Center City. We build service area content for each part of the region you serve and track it with its own rank grid.\"}}, {\"@type\": \"Question\", \"name\": \"Do Philadelphia neighborhood pages help SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They help when they include real local detail: projects, reviews and services in that neighborhood. Pages that only swap the neighborhood name rarely rank, so we build a few strong ones for the areas that bring revenue.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with Philadelphia law firms and medical practices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We build practice area and treatment pages, attorney and provider profiles and FAQ content written with advertising rules in mind, and optimize each office's Google Business Profile.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in Philadelphia?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Neighborhood and suburban searches often move within 60 to 90 days. Competitive Philadelphia terms, such as legal and medical searches, usually take four to six months or longer.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Philadelphia?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/philadelphia" />
        <Statement />
        <SearchSurfaces slug="locations/philadelphia" kind="city" audience="businesses in Philadelphia" city="Philadelphia" kw="philadelphia seo company" question="How much does local SEO cost in Philadelphia?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/philadelphia" />
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
