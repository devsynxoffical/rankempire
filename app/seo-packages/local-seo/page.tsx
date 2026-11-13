import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import PageHero from '@/components/pages/seo-packages__local-seo/PageHero';
import Pricing from '@/components/pages/seo-packages__local-seo/Pricing';
import Alt from '@/components/pages/seo-packages__local-seo/Alt';
import Tight from '@/components/pages/seo-packages__local-seo/Tight';
import Faq from '@/components/sections/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Local SEO Packages & Local SEO Pricing | RankEmpire" },
  description: "Local SEO packages and pricing from $599 a month: Google Business Profile optimization, citations, reviews, location pages and map pack tracking.",
  alternates: { canonical: "https://www.rankempire.us/seo-packages/local-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Local SEO Packages & Local SEO Pricing | RankEmpire", description: "Local SEO packages and pricing from $599 a month: Google Business Profile optimization, citations, reviews, location pages and map pack tracking.", url: "https://www.rankempire.us/seo-packages/local-seo/", images: ["https://www.rankempire.us/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "Local SEO Packages & Local SEO Pricing | RankEmpire", description: "Local SEO packages and pricing from $599 a month: Google Business Profile optimization, citations, reviews, location pages and map pack tracking." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Packages\", \"item\": \"https://www.rankempire.us/seo-packages/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Local SEO Packages\", \"item\": \"https://www.rankempire.us/seo-packages/local-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"OfferCatalog\", \"name\": \"Local SEO Packages\", \"url\": \"https://www.rankempire.us/seo-packages/local-seo/\", \"itemListElement\": [{\"@type\": \"Offer\", \"name\": \"Starter\", \"price\": 599, \"priceCurrency\": \"USD\", \"description\": \"One location, one service area\"}, {\"@type\": \"Offer\", \"name\": \"Pro\", \"price\": 1199, \"priceCurrency\": \"USD\", \"description\": \"Up to three locations\"}, {\"@type\": \"Offer\", \"name\": \"Multi-location\", \"price\": 2199, \"priceCurrency\": \"USD\", \"description\": \"Four or more locations\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is there a minimum contract?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Plans include a 3 month onboarding period, then run month to month with 30 days notice.\"}}, {\"@type\": \"Question\", \"name\": \"What does yearly billing include?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Paying yearly saves 10 percent on any plan. Everything else stays the same.\"}}, {\"@type\": \"Question\", \"name\": \"Can I switch plans later?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. You can upgrade or downgrade at the start of any month as your needs change.\"}}, {\"@type\": \"Question\", \"name\": \"Do prices include content and links?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Every deliverable listed in a plan is included. Ad spend and third-party software for your own accounts are not.\"}}, {\"@type\": \"Question\", \"name\": \"Which package should I choose?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Single-location service businesses usually start with the first plan. Multi-location brands and competitive markets need the second or third. We recommend a plan after a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="pricing" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <SearchSurfaces slug="seo-packages/local-seo" kind="hub" audience="your business" kw="local seo packages" question="How much does local SEO cost per month?" />
        <DeepGuide slug="seo-packages/local-seo" />
        <Pricing />
        <Alt />
        <Tight />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
