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
import V2 from '@/components/pages/locations__manhattan/V2';
import Statement from '@/components/pages/locations__manhattan/Statement';
import Considerations from '@/components/pages/locations__manhattan/Considerations';
import ServiceAreas from '@/components/pages/locations__manhattan/ServiceAreas';
import Keywords from '@/components/pages/locations__manhattan/Keywords';
import Marquee from '@/components/pages/locations__manhattan/Marquee';
import Industries from '@/components/pages/locations__manhattan/Industries';
import Services from '@/components/pages/locations__manhattan/Services';
import Pricing from '@/components/pages/locations__manhattan/Pricing';
import Faq from '@/components/pages/locations__manhattan/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__manhattan/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Manhattan SEO Company & Local SEO Agency | RankEmpire" },
  description: "Manhattan SEO company for businesses in Midtown, FiDi, SoHo, Chelsea and the Upper East and West Sides. Local SEO, Google Maps and AI search. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/manhattan/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Manhattan SEO Company & Local SEO Agency | RankEmpire", description: "Manhattan SEO company for businesses in Midtown, FiDi, SoHo, Chelsea and the Upper East and West Sides. Local SEO, Google Maps and AI search. Free audit.", url: "https://www.rankempire.us/locations/manhattan/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Manhattan SEO Company & Local SEO Agency | RankEmpire", description: "Manhattan SEO company for businesses in Midtown, FiDi, SoHo, Chelsea and the Upper East and West Sides. Local SEO, Google Maps and AI search. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Manhattan\", \"item\": \"https://www.rankempire.us/locations/manhattan/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Manhattan\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Manhattan\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"New York\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/manhattan/\", \"description\": \"RankEmpire is an SEO company serving Manhattan businesses in Midtown, the Financial District, SoHo, Tribeca, Chelsea, Flatiron and the Upper East and West Sides. We run block-level local SEO, Google Business Profile optimization, technical SEO and content, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should a Manhattan business target Manhattan or New York City keywords?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Start with your neighborhood and Manhattan-specific searches, where the people searching are close by and the competition is local. Broad NYC terms are contested by national brands and large agencies; they are worth targeting once your neighborhood visibility is strong. Our New York page covers the citywide approach.\"}}, {\"@type\": \"Question\", \"name\": \"How small is the local search radius in Manhattan?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For walk-in categories such as restaurants, salons, gyms and clinics it can be just a few blocks. We measure it with a rank grid around your address so you can see exactly where you appear and where competitors take over.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need pages for Midtown, SoHo and other neighborhoods?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only where you genuinely serve customers and have something specific to say: projects, clients, landmarks, transit and reviews from that area. Pages that only swap the neighborhood name rarely rank.\"}}, {\"@type\": \"Question\", \"name\": \"How do professional services firms win in Manhattan search?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"With attorney, advisor or consultant profiles that show credentials, practice area or service pages that answer real client questions, reviews within your profession's rules and mentions in industry publications. Map rankings matter, but authority and expertise matter more.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Manhattan?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/manhattan" />
        <Statement />
        <SearchSurfaces slug="locations/manhattan" kind="city" audience="businesses in Manhattan" city="Manhattan" kw="manhattan seo company" question="How much does local SEO cost in Manhattan?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/manhattan" />
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
