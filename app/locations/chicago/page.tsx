import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import ProofStrip from '@/components/sections/ProofStrip';
import DeepGuide from '@/components/sections/DeepGuide';
import TopPlan from '@/components/sections/TopPlan';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/locations__chicago/V0';
import Statement from '@/components/pages/locations__chicago/Statement';
import Considerations from '@/components/pages/locations__chicago/Considerations';
import ServiceAreas from '@/components/pages/locations__chicago/ServiceAreas';
import Keywords from '@/components/pages/locations__chicago/Keywords';
import Marquee from '@/components/pages/locations__chicago/Marquee';
import Industries from '@/components/pages/locations__chicago/Industries';
import Services from '@/components/pages/locations__chicago/Services';
import Pricing from '@/components/pages/locations__chicago/Pricing';
import Faq from '@/components/pages/locations__chicago/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__chicago/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Chicago SEO Company for Local Businesses | RankEmpire" },
  description: "Chicago SEO company helping local businesses rank in Google Maps and AI search. Plans from $599 a month with live Search Console reporting.",
  alternates: { canonical: "https://www.rankempire.us/locations/chicago/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Chicago SEO Company for Local Businesses | RankEmpire", description: "Chicago SEO company helping local businesses rank in Google Maps and AI search. Plans from $599 a month with live Search Console reporting.", url: "https://www.rankempire.us/locations/chicago/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Chicago SEO Company for Local Businesses | RankEmpire", description: "Chicago SEO company helping local businesses rank in Google Maps and AI search. Plans from $599 a month with live Search Console reporting." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Chicago\", \"item\": \"https://www.rankempire.us/locations/chicago/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Chicago\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Chicago\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Illinois\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/chicago/\", \"description\": \"RankEmpire is an SEO company serving Chicago and Chicagoland, from the Loop, Lincoln Park and Wicker Park to Naperville, Schaumburg and Evanston. We run local SEO, Google Business Profile optimization, technical SEO and content for Chicago businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How much does SEO cost in Chicago?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 a month for one location.\"}}, {\"@type\": \"Question\", \"name\": \"Do you serve Chicago suburbs?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, including Naperville, Schaumburg, Evanston, Oak Brook and Aurora.\"}}, {\"@type\": \"Question\", \"name\": \"How do I choose the best SEO company near me in Chicago?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Pick one that shows live results, explains a clear 90-day plan and prices openly.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/chicago" />
        <ProofStrip context="Chicago SEO" />
        <Statement />
        <SearchSurfaces slug="locations/chicago" kind="city" audience="businesses in Chicago" city="Chicago" kw="seo company chicago" question="How much does local SEO cost in Chicago?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/chicago" />
        <TopPlan slug="locations/chicago" />
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
