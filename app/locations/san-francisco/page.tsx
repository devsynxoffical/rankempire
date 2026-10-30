import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/locations__san-francisco/V1';
import Statement from '@/components/pages/locations__san-francisco/Statement';
import Considerations from '@/components/pages/locations__san-francisco/Considerations';
import ServiceAreas from '@/components/pages/locations__san-francisco/ServiceAreas';
import Keywords from '@/components/pages/locations__san-francisco/Keywords';
import Marquee from '@/components/pages/locations__san-francisco/Marquee';
import Industries from '@/components/pages/locations__san-francisco/Industries';
import Services from '@/components/pages/locations__san-francisco/Services';
import Pricing from '@/components/pages/locations__san-francisco/Pricing';
import Faq from '@/components/pages/locations__san-francisco/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__san-francisco/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in San Francisco, CA | RankEmpire",
  description: "SEO company in San Francisco: local SEO, Google Business Profile optimization and content for businesses in SoMa, the Mission, Oakland and Berkeley.",
  alternates: { canonical: "https://www.rankempire.us/locations/san-francisco/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in San Francisco, CA | RankEmpire", description: "SEO company in San Francisco: local SEO, Google Business Profile optimization and content for businesses in SoMa, the Mission, Oakland and Berkeley.", url: "https://www.rankempire.us/locations/san-francisco/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in San Francisco, CA | RankEmpire", description: "SEO company in San Francisco: local SEO, Google Business Profile optimization and content for businesses in SoMa, the Mission, Oakland and Berkeley." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in San Francisco\", \"item\": \"https://www.rankempire.us/locations/san-francisco/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in San Francisco\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"San Francisco\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"California\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/san-francisco/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is SEO worth it for a San Francisco business that already has strong word of mouth?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually, yes. Even referred customers often search your name and compare reviews before calling, and newcomers to the city rely almost entirely on search. SEO makes sure your profile, website, and reviews support the reputation you have built, and helps you capture people who do not yet know you.\"}}, {\"@type\": \"Question\", \"name\": \"How do you handle SEO for startups and tech companies in San Francisco?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Tech companies often need national or industry focused SEO rather than local map rankings. We work on technical site health, content that answers buyer questions, and pages targeting product and solution searches. If you also want visibility in the Bay Area, we add local signals where they genuinely make sense.\"}}, {\"@type\": \"Question\", \"name\": \"Can my business in the Richmond or Sunset compete with downtown competitors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Often, yes. In a city this dense, Google gives strong weight to proximity, so residents of the western neighborhoods tend to see nearby businesses first. Strengthening your profile, earning local reviews, and creating content about your neighborhood can make you the obvious choice for customers close by.\"}}, {\"@type\": \"Question\", \"name\": \"Does RankEmpire have a San Francisco office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. We are a remote first agency and work with Bay Area clients through video calls, shared documents, and regular reporting. Since the work that affects rankings happens on your website and online profiles, location does not limit the quality of the service. Your local knowledge helps shape our strategy.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in San Francisco?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="locations/san-francisco" />
        <Statement />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
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
