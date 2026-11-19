import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import ProofStrip from '@/components/sections/ProofStrip';
import OrgSchema from '@/components/seo/OrgSchema';
import DeepGuide from '@/components/sections/DeepGuide';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/small-business-seo/V1';
import Statement from '@/components/pages/small-business-seo/Statement';
import InDepth from '@/components/pages/small-business-seo/InDepth';
import WhyItMatters from '@/components/pages/small-business-seo/WhyItMatters';
import Deliverables from '@/components/pages/small-business-seo/Deliverables';
import Marquee from '@/components/pages/small-business-seo/Marquee';
import Monthly from '@/components/pages/small-business-seo/Monthly';
import Process from '@/components/pages/small-business-seo/Process';
import WhoItIsFor from '@/components/pages/small-business-seo/WhoItIsFor';
import Comparison from '@/components/pages/small-business-seo/Comparison';
import Pricing from '@/components/pages/small-business-seo/Pricing';
import Faq from '@/components/pages/small-business-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/small-business-seo/Related';
import Robo from '@/components/sections/Robo';
import BookCall from '@/components/sections/BookCall';

export const metadata: Metadata = {
  title: { absolute: "SEO Services for Small Business: Local SEO Plans | RankEmpire" },
  description: "SEO services for small business: Google Maps, service pages and reviews that bring calls and leads. Plans from $599/mo, month to month. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/small-business-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Services for Small Business: Local SEO Plans | RankEmpire", description: "SEO services for small business: Google Maps, service pages and reviews that bring calls and leads. Plans from $599/mo, month to month. Free audit.", url: "https://www.rankempire.us/small-business-seo/", images: ["https://www.rankempire.us/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Services for Small Business: Local SEO Plans | RankEmpire", description: "SEO services for small business: Google Maps, service pages and reviews that bring calls and leads. Plans from $599/mo, month to month. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Small Business SEO\", \"item\": \"https://www.rankempire.us/small-business-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services for small business\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Small businesses\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/small-business-seo/\", \"offers\": {\"@type\": \"Offer\", \"price\": \"599\", \"priceCurrency\": \"USD\", \"description\": \"Local SEO plan from $599 per month\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How much does SEO cost for a small business?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most small businesses spend $500 to $2,500 a month. RankEmpire's local plans start at $599 a month and are month to month after a three-month onboarding.\"}}, {\"@type\": \"Question\", \"name\": \"How long does small business SEO take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map pack and long-tail searches often move within 60 to 90 days; competitive terms take four to six months. Impressions in Search Console rise first, then rankings, then calls.\"}}, {\"@type\": \"Question\", \"name\": \"Is SEO worth it for a small business?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes when customers search for what you sell. A few extra jobs or patients a month usually cover a local plan. It is a poor fit if nobody searches for your service or you need leads this week.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need a Google Business Profile?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, for any business that serves customers locally. It decides most map pack results and it is free.\"}}, {\"@type\": \"Question\", \"name\": \"Can I do small business SEO myself?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The basics, yes: a complete profile, review requests and one page per service. An agency helps when time is short or the market is competitive.\"}}, {\"@type\": \"Question\", \"name\": \"What do you need from me to start?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Access to your website, Google Business Profile and Search Console, a list of your services and areas, and 30 minutes for a kick-off call.\"}}, {\"@type\": \"Question\", \"name\": \"Do you lock small businesses into contracts?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. After a three-month onboarding, plans are month to month with 30 days' notice.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="small-business-seo" />
        <ProofStrip context="Small business SEO" />
        <Statement />
        <SearchSurfaces slug="small-business-seo" kind="service" audience="small businesses" kw="seo services for small business" question="How much does SEO cost for a small business?" />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
        <DeepGuide slug="small-business-seo" />
        <Pricing />
        <BookCall title="Book a free small business SEO call" />
        <Faq />
        <Pmq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
