import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-tools__robots-txt-checker/PageHero';
import Section from '@/components/pages/seo-tools__robots-txt-checker/Section';
import How from '@/components/pages/seo-tools__robots-txt-checker/How';
import More from '@/components/sections/More';
import Faq from '@/components/pages/seo-tools__robots-txt-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free Robots.txt Checker: Online SEO Tool | RankEmpire",
  description: "Test whether a URL is allowed or blocked for Googlebot and other crawlers based on your robots.txt rules.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/robots-txt-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Robots.txt Checker: Online SEO Tool | RankEmpire", description: "Test whether a URL is allowed or blocked for Googlebot and other crawlers based on your robots.txt rules.", url: "https://www.rankempire.us/seo-tools/robots-txt-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Robots.txt Checker: Online SEO Tool | RankEmpire", description: "Test whether a URL is allowed or blocked for Googlebot and other crawlers based on your robots.txt rules." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Robots.txt Checker\", \"item\": \"https://www.rankempire.us/seo-tools/robots-txt-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Robots.txt Checker\", \"url\": \"https://www.rankempire.us/seo-tools/robots-txt-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Does robots.txt remove pages from Google?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. It blocks crawling, not indexing. To remove a page from results, use a noindex tag and allow crawling.\"}}, {\"@type\": \"Question\", \"name\": \"How are conflicting rules resolved?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The most specific matching rule wins. If an Allow and a Disallow rule have the same length, Allow wins.\"}}]}" }} />
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
