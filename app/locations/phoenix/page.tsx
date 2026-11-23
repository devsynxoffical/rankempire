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
import V0 from '@/components/pages/locations__phoenix/V0';
import Statement from '@/components/pages/locations__phoenix/Statement';
import Considerations from '@/components/pages/locations__phoenix/Considerations';
import ServiceAreas from '@/components/pages/locations__phoenix/ServiceAreas';
import Keywords from '@/components/pages/locations__phoenix/Keywords';
import Marquee from '@/components/pages/locations__phoenix/Marquee';
import Industries from '@/components/pages/locations__phoenix/Industries';
import Services from '@/components/pages/locations__phoenix/Services';
import Pricing from '@/components/pages/locations__phoenix/Pricing';
import Faq from '@/components/pages/locations__phoenix/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__phoenix/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Phoenix SEO Company for Local Businesses | RankEmpire" },
  description: "Phoenix SEO company for Valley businesses. Rank in Google Maps and AI search across Scottsdale, Mesa and Tempe. Plans from $599 a month.",
  alternates: { canonical: "https://www.rankempire.us/locations/phoenix/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Phoenix SEO Company for Local Businesses | RankEmpire", description: "Phoenix SEO company for Valley businesses. Rank in Google Maps and AI search across Scottsdale, Mesa and Tempe. Plans from $599 a month.", url: "https://www.rankempire.us/locations/phoenix/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "Phoenix SEO Company for Local Businesses | RankEmpire", description: "Phoenix SEO company for Valley businesses. Rank in Google Maps and AI search across Scottsdale, Mesa and Tempe. Plans from $599 a month." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Phoenix\", \"item\": \"https://www.rankempire.us/locations/phoenix/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Phoenix\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Phoenix\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Arizona\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/phoenix/\", \"description\": \"RankEmpire is an SEO company serving Phoenix and the Valley of the Sun, including Scottsdale, Tempe, Mesa, Chandler, Gilbert and Glendale. We run local SEO, Google Business Profile optimization, technical SEO and content for Phoenix businesses, with a free audit, a 90-day roadmap, one senior strategist per account and results reported from Google Search Console.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How much does SEO cost in Phoenix?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 a month for one location.\"}}, {\"@type\": \"Question\", \"name\": \"Do you serve the whole Valley?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, including Scottsdale, Mesa, Tempe, Chandler, Gilbert and Glendale.\"}}, {\"@type\": \"Question\", \"name\": \"Which Phoenix businesses benefit most from local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Home services, medical, legal and real estate, where buyers search on Maps and call the first few results.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/phoenix" />
        <Statement />
        <SearchSurfaces slug="locations/phoenix" kind="city" audience="businesses in Phoenix" city="Phoenix" kw="seo company phoenix" question="How much does local SEO cost in Phoenix?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <DeepGuide slug="locations/phoenix" />
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
