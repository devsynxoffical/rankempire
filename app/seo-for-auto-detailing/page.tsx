import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import ProofStrip from '@/components/sections/ProofStrip';
import DeepGuide from '@/components/sections/DeepGuide';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-auto-detailing/V0';
import Statement from '@/components/pages/seo-for-auto-detailing/Statement';
import Searches from '@/components/pages/seo-for-auto-detailing/Searches';
import Challenges from '@/components/pages/seo-for-auto-detailing/Challenges';
import Pages from '@/components/pages/seo-for-auto-detailing/Pages';
import Marquee from '@/components/pages/seo-for-auto-detailing/Marquee';
import Strategy from '@/components/pages/seo-for-auto-detailing/Strategy';
import Services from '@/components/pages/seo-for-auto-detailing/Services';
import Cities from '@/components/pages/seo-for-auto-detailing/Cities';
import Pricing from '@/components/pages/seo-for-auto-detailing/Pricing';
import Faq from '@/components/pages/seo-for-auto-detailing/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-auto-detailing/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Car Detailing SEO Services for Detailers | RankEmpire" },
  description: "SEO for car detailing businesses and detailers: Google Maps, service and ceramic coating pages, reviews. Local plans from $599/mo. Free audit in 2 days.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-auto-detailing/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Car Detailing SEO Services for Detailers | RankEmpire", description: "SEO for car detailing businesses and detailers: Google Maps, service and ceramic coating pages, reviews. Local plans from $599/mo. Free audit in 2 days.", url: "https://www.rankempire.us/seo-for-auto-detailing/", images: ["https://www.rankempire.us/img/i-auto.webp"] },
  twitter: { card: 'summary_large_image', title: "Car Detailing SEO Services for Detailers | RankEmpire", description: "SEO for car detailing businesses and detailers: Google Maps, service and ceramic coating pages, reviews. Local plans from $599/mo. Free audit in 2 days." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Auto Detailing Businesses\", \"item\": \"https://www.rankempire.us/seo-for-auto-detailing/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Auto Detailing Businesses\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Auto Detailing Businesses\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-auto-detailing/\", \"description\": \"Auto detailing SEO wins local searches for detailing, ceramic coating, paint correction and mobile service. Pages per service with pricing tiers, a photo-heavy Google Business Profile, reviews and area pages for mobile coverage drive bookings. RankEmpire builds the service pages and the review flow that wins the map pack.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"I am a mobile detailer without a shop. Can I still rank on maps?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Google allows service area businesses to hide their address and define the areas they serve. Ranking depends on relevance, reviews, and prominence, so complete the profile carefully, keep photos fresh, and build area pages on your website that show real jobs completed in each neighborhood.\"}}, {\"@type\": \"Question\", \"name\": \"Should I show prices on my website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Showing starting prices or package ranges usually helps, because detailing buyers want a sense of cost before reaching out. Explain what affects the final price, such as vehicle size and paint condition. This filters out mismatched leads and gives Google more specific content to understand your services.\"}}, {\"@type\": \"Question\", \"name\": \"How do I compete with big ceramic coating shops?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Focus on depth and proof. Write detailed pages about your prep process, the products you use, and how you care for coatings over time. Post real job photos with vehicle details. Smaller shops often win local searches through stronger reviews and more personal, specific content.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth blogging about car care?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Targeted articles help when they answer questions buyers actually ask, like how to wash a coated car or how long interior detailing takes. These pieces attract research traffic, show expertise, and give you something useful to link to from review requests and social posts.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for auto detailing businesses?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most auto detailing businesss see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for auto detailing businesses cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-auto-detailing" />
        <ProofStrip context="car detailing SEO" />
        <Statement />
        <SearchSurfaces slug="seo-for-auto-detailing" kind="industry" audience="auto detailing businesses" kw="mobile car detailing near me" question="ceramic coating cost for suv" />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
        <DeepGuide slug="seo-for-auto-detailing" />
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
