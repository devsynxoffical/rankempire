import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/locations__atlanta/V2';
import Statement from '@/components/pages/locations__atlanta/Statement';
import Considerations from '@/components/pages/locations__atlanta/Considerations';
import ServiceAreas from '@/components/pages/locations__atlanta/ServiceAreas';
import Keywords from '@/components/pages/locations__atlanta/Keywords';
import Marquee from '@/components/pages/locations__atlanta/Marquee';
import Industries from '@/components/pages/locations__atlanta/Industries';
import Services from '@/components/pages/locations__atlanta/Services';
import Pricing from '@/components/pages/locations__atlanta/Pricing';
import Faq from '@/components/pages/locations__atlanta/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__atlanta/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Atlanta, GA: Local SEO Services | RankEmpire",
  description: "SEO company in Atlanta: local SEO, Google Business Profile optimization and content for businesses in Buckhead, Midtown, Decatur, Marietta and Alpharetta.",
  alternates: { canonical: "https://www.rankempire.us/locations/atlanta/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Atlanta, GA: Local SEO Services | RankEmpire", description: "SEO company in Atlanta: local SEO, Google Business Profile optimization and content for businesses in Buckhead, Midtown, Decatur, Marietta and Alpharetta.", url: "https://www.rankempire.us/locations/atlanta/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Atlanta, GA: Local SEO Services | RankEmpire", description: "SEO company in Atlanta: local SEO, Google Business Profile optimization and content for businesses in Buckhead, Midtown, Decatur, Marietta and Alpharetta." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Atlanta\", \"item\": \"https://www.rankempire.us/locations/atlanta/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Atlanta\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Atlanta\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Georgia\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/atlanta/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can my business rank both inside and outside the Perimeter?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It takes planning. Google gives strong weight to proximity in map results, so ranking far from your address is difficult. We strengthen your profile around your location, then build distinct pages for other areas you serve, supported by reviews and content that genuinely reflect those communities.\"}}, {\"@type\": \"Question\", \"name\": \"How does Atlanta traffic affect local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Traffic makes customers reluctant to cross town for routine services, so they favor businesses close to home or work. That reinforces the importance of proximity in local results. Focusing on nearby neighborhoods and suburbs, rather than chasing broad Atlanta terms, usually produces better leads for service businesses.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with B2B companies in Atlanta?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Atlanta has many corporate offices and logistics firms that hire vendors after researching online. For B2B clients, we focus on content that answers buyer questions, clear service pages, and technical site quality. Local map visibility matters less than ranking for the specific services and problems your buyers search.\"}}, {\"@type\": \"Question\", \"name\": \"Does RankEmpire have an Atlanta office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. We are remote first and work with Atlanta clients through video calls, shared reports, and online collaboration. We never claim a local office. Everything that affects rankings, from technical improvements to content and Google Business Profile management, is done online, guided by your knowledge of Atlanta customers.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Atlanta?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="locations/atlanta" />
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
