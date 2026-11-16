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
import V2 from '@/components/pages/locations__milwaukee/V2';
import Statement from '@/components/pages/locations__milwaukee/Statement';
import Considerations from '@/components/pages/locations__milwaukee/Considerations';
import ServiceAreas from '@/components/pages/locations__milwaukee/ServiceAreas';
import Keywords from '@/components/pages/locations__milwaukee/Keywords';
import Marquee from '@/components/pages/locations__milwaukee/Marquee';
import Industries from '@/components/pages/locations__milwaukee/Industries';
import Services from '@/components/pages/locations__milwaukee/Services';
import Pricing from '@/components/pages/locations__milwaukee/Pricing';
import Faq from '@/components/pages/locations__milwaukee/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__milwaukee/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Milwaukee SEO Company & SEO Agency, WI | RankEmpire" },
  description: "Milwaukee SEO company for Wisconsin businesses in the Third Ward, Bay View, Wauwatosa, Brookfield and Waukesha. Local SEO, Maps and AI search. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/milwaukee/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Milwaukee SEO Company & SEO Agency, WI | RankEmpire", description: "Milwaukee SEO company for Wisconsin businesses in the Third Ward, Bay View, Wauwatosa, Brookfield and Waukesha. Local SEO, Maps and AI search. Free audit.", url: "https://www.rankempire.us/locations/milwaukee/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Milwaukee SEO Company & SEO Agency, WI | RankEmpire", description: "Milwaukee SEO company for Wisconsin businesses in the Third Ward, Bay View, Wauwatosa, Brookfield and Waukesha. Local SEO, Maps and AI search. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Milwaukee\", \"item\": \"https://www.rankempire.us/locations/milwaukee/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Milwaukee\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Milwaukee\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Wisconsin\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/milwaukee/\", \"description\": \"RankEmpire is an SEO company serving Milwaukee and southeast Wisconsin, including Downtown, the Third Ward, Bay View, the East Side, Walker's Point, Wauwatosa, Brookfield, West Allis, Waukesha and Mequon. We run local SEO, Google Business Profile optimization, technical SEO and content for Milwaukee businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Milwaukee business target the suburbs too?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you serve them, yes. Wauwatosa, Brookfield, Waukesha and Mequon have their own map results. We build service area content for the places you work and track each with its own rank grid.\"}}, {\"@type\": \"Question\", \"name\": \"How does winter affect local SEO in Milwaukee?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For heating, roofing, snow removal and plumbing companies, searches rise sharply as temperatures drop. Publishing seasonal pages in late summer and early fall gives them time to rank before demand peaks.\"}}, {\"@type\": \"Question\", \"name\": \"Can SEO help Milwaukee manufacturers and B2B companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with a different focus than local SEO. Capability pages, certifications, case studies and technical content help buyers and engineers find and shortlist you.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take in Milwaukee?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Suburban and long-tail searches often move within 60 to 90 days. Competitive Milwaukee terms usually take four to six months.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Milwaukee?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/milwaukee" />
        <Statement />
        <SearchSurfaces slug="locations/milwaukee" kind="city" audience="businesses in Milwaukee" city="Milwaukee" kw="seo company milwaukee" question="How much does local SEO cost in Milwaukee?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/milwaukee" />
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
