import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-tools__schema-checker/PageHero';
import Section from '@/components/pages/seo-tools__schema-checker/Section';
import How from '@/components/pages/seo-tools__schema-checker/How';
import More from '@/components/sections/More';
import Faq from '@/components/pages/seo-tools__schema-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free Schema Checker: Online SEO Tool | RankEmpire",
  description: "Validate JSON-LD structured data in seconds. Test schema types, required properties, and rich snippet readiness for Google and AI engines.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/schema-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Schema Checker: Online SEO Tool | RankEmpire", description: "Validate JSON-LD structured data in seconds. Test schema types, required properties, and rich snippet readiness for Google and AI engines.", url: "https://www.rankempire.us/seo-tools/schema-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Schema Checker: Online SEO Tool | RankEmpire", description: "Validate JSON-LD structured data in seconds. Test schema types, required properties, and rich snippet readiness for Google and AI engines." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Schema Checker\", \"item\": \"https://www.rankempire.us/seo-tools/schema-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Schema Checker\", \"url\": \"https://www.rankempire.us/seo-tools/schema-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Which schema should a local business use?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"LocalBusiness or a more specific subtype, plus Organization, BreadcrumbList and FAQPage where relevant. Stores need Product and Offer.\"}}, {\"@type\": \"Question\", \"name\": \"Does this replace Google tools?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It is a fast first check. For final validation use Google Rich Results Test as well.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="free" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <Section />
        <How />
        <More />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
