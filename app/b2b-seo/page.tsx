import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/b2b-seo/V0';
import Statement from '@/components/pages/b2b-seo/Statement';
import Deliverables from '@/components/pages/b2b-seo/Deliverables';
import Marquee from '@/components/pages/b2b-seo/Marquee';
import Process from '@/components/pages/b2b-seo/Process';
import WhoItIsFor from '@/components/pages/b2b-seo/WhoItIsFor';
import Pricing from '@/components/pages/b2b-seo/Pricing';
import Faq from '@/components/pages/b2b-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/b2b-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "B2B SEO Agency: Pipeline From Organic Search | RankEmpire",
  description: "B2B SEO that fills the pipeline: bottom-funnel pages, buyer-intent content, account-based landing pages and attribution from organic search to closed deals.",
  alternates: { canonical: "https://www.rankempire.com/b2b-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "B2B SEO Agency: Pipeline From Organic Search | RankEmpire", description: "B2B SEO that fills the pipeline: bottom-funnel pages, buyer-intent content, account-based landing pages and attribution from organic search to closed deals.", url: "https://www.rankempire.com/b2b-seo/", images: ["https://www.rankempire.com/img/x-ai.webp"] },
  twitter: { card: 'summary_large_image', title: "B2B SEO Agency: Pipeline From Organic Search | RankEmpire", description: "B2B SEO that fills the pipeline: bottom-funnel pages, buyer-intent content, account-based landing pages and attribution from organic search to closed deals." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"B2B SEO\", \"item\": \"https://www.rankempire.com/b2b-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"B2B SEO\", \"serviceType\": \"B2B SEO\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"B2B SEO that fills the pipeline: bottom-funnel pages, buyer-intent content, account-based landing pages and attribution from organic search to closed deals.\", \"url\": \"https://www.rankempire.com/b2b-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How is B2B SEO different from regular SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"B2B searches are lower volume but far higher value. We optimize for intent and buyer role, not raw traffic, and report on pipeline instead of pageviews.\"}}, {\"@type\": \"Question\", \"name\": \"How long until B2B SEO produces leads?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Bottom-funnel pages often produce demo requests within 2 to 4 months. Authority content compounds over 6 to 12 months.\"}}, {\"@type\": \"Question\", \"name\": \"Do you integrate with our CRM?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We connect organic leads to HubSpot, Salesforce or Pipedrive so you can see which pages create pipeline.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Statement />
        <Deliverables />
        <Marquee />
        <Process />
        <WhoItIsFor />
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
