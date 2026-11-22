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
import V1 from '@/components/pages/local-citation-building/V1';
import Statement from '@/components/pages/local-citation-building/Statement';
import InDepth from '@/components/pages/local-citation-building/InDepth';
import WhyItMatters from '@/components/pages/local-citation-building/WhyItMatters';
import Deliverables from '@/components/pages/local-citation-building/Deliverables';
import Marquee from '@/components/pages/local-citation-building/Marquee';
import Monthly from '@/components/pages/local-citation-building/Monthly';
import Process from '@/components/pages/local-citation-building/Process';
import WhoItIsFor from '@/components/pages/local-citation-building/WhoItIsFor';
import Comparison from '@/components/pages/local-citation-building/Comparison';
import Pricing from '@/components/pages/local-citation-building/Pricing';
import Faq from '@/components/pages/local-citation-building/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/local-citation-building/Related';
import Robo from '@/components/sections/Robo';
import BookCall from '@/components/sections/BookCall';

export const metadata: Metadata = {
  title: { absolute: "Local Citation Building Services for Local SEO | RankEmpire" },
  description: "Local citation building and cleanup: consistent name, address and phone on the directories Google, Apple, Bing and AI assistants trust. Free citation audit.",
  alternates: { canonical: "https://www.rankempire.us/local-citation-building/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Local Citation Building Services for Local SEO | RankEmpire", description: "Local citation building and cleanup: consistent name, address and phone on the directories Google, Apple, Bing and AI assistants trust. Free citation audit.", url: "https://www.rankempire.us/local-citation-building/", images: ["https://www.rankempire.us/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "Local Citation Building Services for Local SEO | RankEmpire", description: "Local citation building and cleanup: consistent name, address and phone on the directories Google, Apple, Bing and AI assistants trust. Free citation audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Local SEO\", \"item\": \"https://www.rankempire.us/local-seo/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Local Citation Building\", \"item\": \"https://www.rankempire.us/local-citation-building/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Local citation building\", \"serviceType\": \"Local SEO\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Local businesses\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/local-citation-building/\", \"offers\": {\"@type\": \"Offer\", \"price\": \"599\", \"priceCurrency\": \"USD\", \"description\": \"Local SEO plan with citation building from $599 per month\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What are local citations?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local citations are online mentions of your business name, address and phone number on directories, maps, social platforms and data aggregators such as Google Business Profile, Apple Business Connect, Bing Places, Yelp and the BBB.\"}}, {\"@type\": \"Question\", \"name\": \"Do citations still matter for local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, but as a foundation. Consistent citations help Google and AI assistants trust your details. Quality and accuracy matter far more than the number of listings.\"}}, {\"@type\": \"Question\", \"name\": \"How many citations does a local business need?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most local businesses need 30 to 60 accurate citations: the core platforms, the main data aggregators and the directories for their industry and city. Hundreds of low-quality listings add little.\"}}, {\"@type\": \"Question\", \"name\": \"How long does citation building take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Core listings are usually fixed in 2 to 4 weeks. Some directories take weeks to publish or update, so a full cleanup takes 6 to 12 weeks.\"}}, {\"@type\": \"Question\", \"name\": \"What is NAP consistency?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"NAP stands for name, address and phone number. Consistency means these details match exactly across your website and every listing.\"}}, {\"@type\": \"Question\", \"name\": \"Do you remove duplicate listings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We find duplicate profiles on Google, Yelp, Bing and other directories and merge or remove them through each platform's process.\"}}, {\"@type\": \"Question\", \"name\": \"Do I keep the listings if I stop?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Listings are created under your business with logins handed over to you, so they stay live if you stop working with us.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="local-citation-building" />
        <ProofStrip context="Local Citation Building" />
        <Statement />
        <SearchSurfaces slug="local-citation-building" kind="service" audience="local businesses" kw="local citation building" question="How many citations does a local business need?" />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
        <DeepGuide slug="local-citation-building" />
        <Pricing />
        <BookCall title="Book a free local citation building call" />
        <Faq />
        <Pmq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
