import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-tools__seo-score-checker/PageHero';
import Section from '@/components/pages/seo-tools__seo-score-checker/Section';
import How from '@/components/pages/seo-tools__seo-score-checker/How';
import More from '@/components/sections/More';
import Faq from '@/components/pages/seo-tools__seo-score-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free SEO Score Checker: Online SEO Tool | RankEmpire",
  description: "Get a 0 to 100 SEO score for any page based on 14 on-page checks, with a clear fix for every issue.",
  alternates: { canonical: "https://www.rankempire.com/seo-tools/seo-score-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free SEO Score Checker: Online SEO Tool | RankEmpire", description: "Get a 0 to 100 SEO score for any page based on 14 on-page checks, with a clear fix for every issue.", url: "https://www.rankempire.com/seo-tools/seo-score-checker/", images: ["https://www.rankempire.com/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free SEO Score Checker: Online SEO Tool | RankEmpire", description: "Get a 0 to 100 SEO score for any page based on 14 on-page checks, with a clear fix for every issue." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.com/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Score Checker\", \"item\": \"https://www.rankempire.com/seo-tools/seo-score-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"SEO Score Checker\", \"url\": \"https://www.rankempire.com/seo-tools/seo-score-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Why paste the source code instead of a URL?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Browsers block websites from reading other websites directly for security reasons. Pasting the source lets the check run instantly and privately in your browser.\"}}, {\"@type\": \"Question\", \"name\": \"Is my data stored?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Everything runs in your browser and nothing is sent to our servers.\"}}, {\"@type\": \"Question\", \"name\": \"Does a high score guarantee rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. On-page basics are only one part of SEO. Content quality, links, technical health and competition all matter.\"}}]}" }} />
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
