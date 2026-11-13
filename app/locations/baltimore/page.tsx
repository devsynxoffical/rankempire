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
import V2 from '@/components/pages/locations__baltimore/V2';
import Statement from '@/components/pages/locations__baltimore/Statement';
import Considerations from '@/components/pages/locations__baltimore/Considerations';
import ServiceAreas from '@/components/pages/locations__baltimore/ServiceAreas';
import Keywords from '@/components/pages/locations__baltimore/Keywords';
import Marquee from '@/components/pages/locations__baltimore/Marquee';
import Industries from '@/components/pages/locations__baltimore/Industries';
import Services from '@/components/pages/locations__baltimore/Services';
import Pricing from '@/components/pages/locations__baltimore/Pricing';
import Faq from '@/components/pages/locations__baltimore/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__baltimore/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Baltimore SEO Company & SEO Agency, MD | RankEmpire" },
  description: "Baltimore SEO company for businesses in Fells Point, Canton, Federal Hill, Towson, Columbia and Annapolis. Local SEO, Maps and AI search. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/baltimore/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Baltimore SEO Company & SEO Agency, MD | RankEmpire", description: "Baltimore SEO company for businesses in Fells Point, Canton, Federal Hill, Towson, Columbia and Annapolis. Local SEO, Maps and AI search. Free audit.", url: "https://www.rankempire.us/locations/baltimore/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Baltimore SEO Company & SEO Agency, MD | RankEmpire", description: "Baltimore SEO company for businesses in Fells Point, Canton, Federal Hill, Towson, Columbia and Annapolis. Local SEO, Maps and AI search. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Baltimore\", \"item\": \"https://www.rankempire.us/locations/baltimore/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Baltimore\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Baltimore\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Maryland\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/baltimore/\", \"description\": \"RankEmpire is an SEO company serving Baltimore and central Maryland, including the Inner Harbor, Fells Point, Canton, Federal Hill, Hampden, Towson, Columbia, Ellicott City and Annapolis. We run local SEO, Google Business Profile optimization, technical SEO and content for Baltimore businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Baltimore business target the suburbs too?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you serve them, yes. Towson, Columbia, Ellicott City and Annapolis are separate markets with their own map results. We build service area content for the places you actually work and track each with its own rank grid.\"}}, {\"@type\": \"Question\", \"name\": \"Do Baltimore neighborhood pages help SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They help when they contain real local detail: projects, reviews and services in that neighborhood. Pages that only swap the neighborhood name rarely rank. We build a few strong ones for the areas that bring revenue.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with Baltimore healthcare and dental practices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We build treatment and service pages, provider profiles and local pages written with medical advertising rules in mind, and optimize each location's Google Business Profile.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in Baltimore?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Neighborhood and suburban searches often move within 60 to 90 days. Competitive Baltimore terms, such as legal and medical searches, usually take four to six months.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Baltimore?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/baltimore" />
        <Statement />
        <SearchSurfaces slug="locations/baltimore" kind="city" audience="businesses in Baltimore" city="Baltimore" kw="baltimore seo company" question="How much does local SEO cost in Baltimore?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/baltimore" />
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
