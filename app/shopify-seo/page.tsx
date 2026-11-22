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
import V1 from '@/components/pages/shopify-seo/V1';
import Statement from '@/components/pages/shopify-seo/Statement';
import InDepth from '@/components/pages/shopify-seo/InDepth';
import WhyItMatters from '@/components/pages/shopify-seo/WhyItMatters';
import Deliverables from '@/components/pages/shopify-seo/Deliverables';
import Marquee from '@/components/pages/shopify-seo/Marquee';
import Monthly from '@/components/pages/shopify-seo/Monthly';
import Process from '@/components/pages/shopify-seo/Process';
import WhoItIsFor from '@/components/pages/shopify-seo/WhoItIsFor';
import Comparison from '@/components/pages/shopify-seo/Comparison';
import Pricing from '@/components/pages/shopify-seo/Pricing';
import Faq from '@/components/pages/shopify-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/shopify-seo/Related';
import Robo from '@/components/sections/Robo';
import BookCall from '@/components/sections/BookCall';

export const metadata: Metadata = {
  title: { absolute: "Shopify SEO Expert Services: Rank Your Store | RankEmpire" },
  description: "Shopify SEO services from a senior expert: collections, product pages, speed, schema and content that grow organic sales. Free Shopify SEO audit.",
  alternates: { canonical: "https://www.rankempire.us/shopify-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Shopify SEO Expert Services: Rank Your Store | RankEmpire", description: "Shopify SEO services from a senior expert: collections, product pages, speed, schema and content that grow organic sales. Free Shopify SEO audit.", url: "https://www.rankempire.us/shopify-seo/", images: ["https://www.rankempire.us/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "Shopify SEO Expert Services: Rank Your Store | RankEmpire", description: "Shopify SEO services from a senior expert: collections, product pages, speed, schema and content that grow organic sales. Free Shopify SEO audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Ecommerce SEO\", \"item\": \"https://www.rankempire.us/ecommerce-seo/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Shopify SEO\", \"item\": \"https://www.rankempire.us/shopify-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Shopify SEO services\", \"serviceType\": \"Ecommerce SEO\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Shopify store owners\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/shopify-seo/\", \"offers\": {\"@type\": \"Offer\", \"price\": \"799\", \"priceCurrency\": \"USD\", \"description\": \"Ecommerce SEO plan from $799 per month\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What does a Shopify SEO expert do?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They fix what stops a Shopify store ranking, such as duplicate URLs, thin collection pages, slow themes and missing product data, then improve collections, products and content so more searches turn into orders.\"}}, {\"@type\": \"Question\", \"name\": \"Is Shopify good for SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Shopify handles hosting, SSL, sitemaps and mobile themes well. Its weak points are fixed URL prefixes, duplicate product paths, app bloat and thin collection pages, which a Shopify SEO plan fixes.\"}}, {\"@type\": \"Question\", \"name\": \"How much do Shopify SEO services cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most stores spend $800 to $3,000 a month depending on catalog size and competition. RankEmpire's ecommerce plans start at $799 a month and are month to month after onboarding.\"}}, {\"@type\": \"Question\", \"name\": \"How long does Shopify SEO take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Technical fixes and collection improvements often show in Search Console within 4 to 8 weeks. Competitive category terms usually take four to six months.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with Shopify Plus?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We work with Shopify and Shopify Plus stores, including multi-currency and international stores.\"}}, {\"@type\": \"Question\", \"name\": \"Will you change my theme?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only where it helps speed or SEO. Changes are tested on a duplicate theme first and published with your approval.\"}}, {\"@type\": \"Question\", \"name\": \"Do you lock stores into contracts?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. After a three-month onboarding, plans are month to month with 30 days' notice.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="shopify-seo" />
        <ProofStrip context="Shopify SEO" />
        <Statement />
        <SearchSurfaces slug="shopify-seo" kind="service" audience="Shopify stores" kw="shopify seo expert" question="How much do Shopify SEO services cost?" />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
        <DeepGuide slug="shopify-seo" />
        <Pricing />
        <BookCall title="Book a free Shopify SEO call" />
        <Faq />
        <Pmq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
