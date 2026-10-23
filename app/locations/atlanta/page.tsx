import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/locations__atlanta/Hero';
import Statement from '@/components/pages/locations__atlanta/Statement';
import Considerations from '@/components/pages/locations__atlanta/Considerations';
import ServiceAreas from '@/components/pages/locations__atlanta/ServiceAreas';
import Keywords from '@/components/pages/locations__atlanta/Keywords';
import Marquee from '@/components/pages/locations__atlanta/Marquee';
import Industries from '@/components/pages/locations__atlanta/Industries';
import Services from '@/components/pages/locations__atlanta/Services';
import Pricing from '@/components/pages/locations__atlanta/Pricing';
import Faq from '@/components/pages/locations__atlanta/Faq';
import Related from '@/components/sections/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Atlanta, GA: Local SEO Services | RankEmpire",
  description: "RankEmpire is an SEO company serving Atlanta, Georgia. Local SEO, Google Business Profile, technical SEO and content for businesses across Buckhead, Midtown.",
  alternates: { canonical: "https://www.rankempire.com/locations/atlanta/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Atlanta, GA: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Atlanta, Georgia. Local SEO, Google Business Profile, technical SEO and content for businesses across Buckhead, Midtown.", url: "https://www.rankempire.com/locations/atlanta/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Atlanta, GA: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Atlanta, Georgia. Local SEO, Google Business Profile, technical SEO and content for businesses across Buckhead, Midtown." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.com/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Atlanta\", \"item\": \"https://www.rankempire.com/locations/atlanta/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Atlanta\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Atlanta\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Georgia\"}}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"url\": \"https://www.rankempire.com/locations/atlanta/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can my business rank both inside and outside the Perimeter?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It takes planning. Google gives strong weight to proximity in map results, so ranking far from your address is difficult. We strengthen your profile around your location, then build distinct pages for other areas you serve, supported by reviews and content that genuinely reflect those communities.\"}}, {\"@type\": \"Question\", \"name\": \"How does Atlanta traffic affect local SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Traffic makes customers reluctant to cross town for routine services, so they favor businesses close to home or work. That reinforces the importance of proximity in local results. Focusing on nearby neighborhoods and suburbs, rather than chasing broad Atlanta terms, usually produces better leads for service businesses.\"}}, {\"@type\": \"Question\", \"name\": \"Do you work with B2B companies in Atlanta?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Atlanta has many corporate offices and logistics firms that hire vendors after researching online. For B2B clients, we focus on content that answers buyer questions, clear service pages, and technical site quality. Local map visibility matters less than ranking for the specific services and problems your buyers search.\"}}, {\"@type\": \"Question\", \"name\": \"Does RankEmpire have an Atlanta office?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. We are remote first and work with Atlanta clients through video calls, shared reports, and online collaboration. We never claim a local office. Everything that affects rankings, from technical improvements to content and Google Business Profile management, is done online, guided by your knowledge of Atlanta customers.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <Hero />
        <Statement />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
        <Pricing />
        <Faq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
