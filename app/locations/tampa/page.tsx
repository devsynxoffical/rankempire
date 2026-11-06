import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import DeepGuide from '@/components/sections/DeepGuide';
import ProofStrip from '@/components/sections/ProofStrip';
import V2 from '@/components/pages/locations__tampa/V2';
import Statement from '@/components/pages/locations__tampa/Statement';
import Considerations from '@/components/pages/locations__tampa/Considerations';
import ServiceAreas from '@/components/pages/locations__tampa/ServiceAreas';
import Keywords from '@/components/pages/locations__tampa/Keywords';
import Marquee from '@/components/pages/locations__tampa/Marquee';
import Industries from '@/components/pages/locations__tampa/Industries';
import Services from '@/components/pages/locations__tampa/Services';
import Pricing from '@/components/pages/locations__tampa/Pricing';
import Faq from '@/components/pages/locations__tampa/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__tampa/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Tampa SEO Company & SEO Agency | RankEmpire" },
  description: "Tampa SEO company for Tampa Bay businesses in South Tampa, Westshore, Brandon, St. Petersburg and Clearwater. Local SEO, Maps and AI search. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/locations/tampa/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Tampa SEO Company & SEO Agency | RankEmpire", description: "Tampa SEO company for Tampa Bay businesses in South Tampa, Westshore, Brandon, St. Petersburg and Clearwater. Local SEO, Maps and AI search. Free audit.", url: "https://www.rankempire.us/locations/tampa/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Tampa SEO Company & SEO Agency | RankEmpire", description: "Tampa SEO company for Tampa Bay businesses in South Tampa, Westshore, Brandon, St. Petersburg and Clearwater. Local SEO, Maps and AI search. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Tampa\", \"item\": \"https://www.rankempire.us/locations/tampa/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Tampa\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Tampa\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Florida\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/tampa/\", \"description\": \"RankEmpire is an SEO company serving Tampa Bay, including Downtown Tampa, South Tampa, Westshore, Ybor City, Brandon, Wesley Chapel, St. Petersburg and Clearwater. We run local SEO, Google Business Profile optimization, technical SEO and content for Tampa businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Tampa business target St. Petersburg and Clearwater too?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only if you genuinely serve them. Google weighs proximity heavily, and customers rarely cross the bay for routine services. If you do serve both sides, we build separate service area content and track each side with its own rank grid.\"}}, {\"@type\": \"Question\", \"name\": \"Does hurricane season affect local SEO in Tampa?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, for roofing, restoration, windows, tree service, generators and insurance. Search demand spikes before and after storms. Publishing preparation and recovery content ahead of the season lets those pages rank before homeowners start searching urgently.\"}}, {\"@type\": \"Question\", \"name\": \"Can a new business rank in growing areas like Wesley Chapel or Riverview?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Often faster than in the urban core. Newer suburbs have fewer established competitors, so a complete Google Business Profile, a few strong service pages and steady reviews from local customers can win the map pack in months.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with Tampa med spas and medical practices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We build treatment pages with pricing context, provider credentials and galleries written with medical compliance in mind, plus local pages for South Tampa, Westshore and the suburbs you serve.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Tampa?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/tampa" />
        <ProofStrip context="Tampa SEO" />
        <Statement />
        <SearchSurfaces slug="locations/tampa" kind="city" audience="businesses in Tampa" city="Tampa" kw="seo company tampa" question="How much does local SEO cost in Tampa?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/tampa" />
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
