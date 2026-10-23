import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-tools__keyword-rank-checker/PageHero';
import Section from '@/components/pages/seo-tools__keyword-rank-checker/Section';
import How from '@/components/pages/seo-tools__keyword-rank-checker/How';
import More from '@/components/pages/seo-tools__keyword-rank-checker/More';
import Faq from '@/components/pages/seo-tools__keyword-rank-checker/Faq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free Keyword Rank Checker: Online SEO Tool | RankEmpire",
  description: "Find where a domain appears in a results list. Paste the result URLs for a keyword and we show the position of your domain and competitors.",
  alternates: { canonical: "https://www.rankempire.com/seo-tools/keyword-rank-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Keyword Rank Checker: Online SEO Tool | RankEmpire", description: "Find where a domain appears in a results list. Paste the result URLs for a keyword and we show the position of your domain and competitors.", url: "https://www.rankempire.com/seo-tools/keyword-rank-checker/", images: ["https://www.rankempire.com/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Keyword Rank Checker: Online SEO Tool | RankEmpire", description: "Find where a domain appears in a results list. Paste the result URLs for a keyword and we show the position of your domain and competitors." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.com/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Keyword Rank Checker\", \"item\": \"https://www.rankempire.com/seo-tools/keyword-rank-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Keyword Rank Checker\", \"url\": \"https://www.rankempire.com/seo-tools/keyword-rank-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Why do I paste the results?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Search engines do not allow automated scraping from browsers, and results vary by location. Pasting results from your own search gives the most accurate local position.\"}}, {\"@type\": \"Question\", \"name\": \"Can you track rankings automatically?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Our SEO plans include rank tracking across your whole service area.\"}}]}" }} />
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
