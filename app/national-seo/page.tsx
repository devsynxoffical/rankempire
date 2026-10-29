import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/national-seo/V2';
import Statement from '@/components/pages/national-seo/Statement';
import InDepth from '@/components/pages/national-seo/InDepth';
import WhyItMatters from '@/components/pages/national-seo/WhyItMatters';
import Deliverables from '@/components/pages/national-seo/Deliverables';
import Marquee from '@/components/pages/national-seo/Marquee';
import Monthly from '@/components/pages/national-seo/Monthly';
import Process from '@/components/pages/national-seo/Process';
import WhoItIsFor from '@/components/pages/national-seo/WhoItIsFor';
import Comparison from '@/components/pages/national-seo/Comparison';
import Pricing from '@/components/pages/national-seo/Pricing';
import Faq from '@/components/pages/national-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/national-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "National SEO Services to Rank Across the US | RankEmpire",
  description: "National SEO for brands that sell across the country: competitive keyword strategy, authority building, scalable content and technical SEO.",
  alternates: { canonical: "https://www.rankempire.us/national-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "National SEO Services to Rank Across the US | RankEmpire", description: "National SEO for brands that sell across the country: competitive keyword strategy, authority building, scalable content and technical SEO.", url: "https://www.rankempire.us/national-seo/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "National SEO Services to Rank Across the US | RankEmpire", description: "National SEO for brands that sell across the country: competitive keyword strategy, authority building, scalable content and technical SEO." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"National SEO\", \"item\": \"https://www.rankempire.us/national-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"National SEO\", \"serviceType\": \"National SEO\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"National SEO for brands that sell across the country: competitive keyword strategy, authority building, scalable content and technical SEO.\", \"url\": \"https://www.rankempire.us/national-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How is national SEO different from local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"National SEO targets searches without local intent, so authority and content depth matter more than proximity.\"}}, {\"@type\": \"Question\", \"name\": \"How long does national SEO take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Expect 6 to 12 months for competitive terms, with earlier gains on long-tail keywords.\"}}, {\"@type\": \"Question\", \"name\": \"Can a small business compete nationally?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with focus. Small businesses rarely win the broadest head terms early, but they can rank for specific, high intent phrases and niche topics where they have real expertise. Building depth in a narrow area first, then expanding, is usually more effective than spreading thin across many unrelated topics.\"}}, {\"@type\": \"Question\", \"name\": \"Do multi location businesses need national or local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually both. Each location needs local SEO to compete in its map pack and nearby searches, while the brand needs national SEO for non local terms and informational content. A good structure uses a strong central site with unique, useful location pages that support each branch in its own market.\"}}, {\"@type\": \"Question\", \"name\": \"What role does content play in national SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Content is central to national SEO because it shows search engines and readers that your site covers a topic thoroughly. That means pages that match intent, answer follow up questions and are kept up to date. Publishing many thin articles rarely helps. Fewer, more useful pieces organized into clear topic clusters usually perform better.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="national-seo" />
        <Statement />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
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
