import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-tools__backlink-checker/PageHero';
import Section from '@/components/pages/seo-tools__backlink-checker/Section';
import How from '@/components/pages/seo-tools__backlink-checker/How';
import More from '@/components/pages/seo-tools__backlink-checker/More';
import Faq from '@/components/pages/seo-tools__backlink-checker/Faq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free Backlink Checker: Online SEO Tool | RankEmpire",
  description: "Analyze a backlink export from any tool. Paste URLs to see referring domains, anchor text mix and link patterns.",
  alternates: { canonical: "https://www.rankempire.com/seo-tools/backlink-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Backlink Checker: Online SEO Tool | RankEmpire", description: "Analyze a backlink export from any tool. Paste URLs to see referring domains, anchor text mix and link patterns.", url: "https://www.rankempire.com/seo-tools/backlink-checker/", images: ["https://www.rankempire.com/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Backlink Checker: Online SEO Tool | RankEmpire", description: "Analyze a backlink export from any tool. Paste URLs to see referring domains, anchor text mix and link patterns." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.com/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Backlink Checker\", \"item\": \"https://www.rankempire.com/seo-tools/backlink-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Backlink Checker\", \"url\": \"https://www.rankempire.com/seo-tools/backlink-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Where do I get a backlink export?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google Search Console, under Links, lets you export top linking sites for free. Paid tools like Ahrefs and Semrush provide fuller exports.\"}}, {\"@type\": \"Question\", \"name\": \"What is a healthy anchor text mix?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most natural profiles are led by brand and URL anchors, with a smaller share of exact match keywords.\"}}]}" }} />
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
        <Robo />
      </main>
      <Footer />
    </>
  );
}
