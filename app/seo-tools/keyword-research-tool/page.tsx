import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-tools__keyword-research-tool/PageHero';
import Section from '@/components/pages/seo-tools__keyword-research-tool/Section';
import How from '@/components/pages/seo-tools__keyword-research-tool/How';
import More from '@/components/pages/seo-tools__keyword-research-tool/More';
import Faq from '@/components/pages/seo-tools__keyword-research-tool/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free Keyword Research Tool: Online SEO Tool | RankEmpire",
  description: "Generate hundreds of keyword ideas from a seed term, grouped by intent: questions, commercial, local and comparisons.",
  alternates: { canonical: "https://www.rankempire.com/seo-tools/keyword-research-tool/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Keyword Research Tool: Online SEO Tool | RankEmpire", description: "Generate hundreds of keyword ideas from a seed term, grouped by intent: questions, commercial, local and comparisons.", url: "https://www.rankempire.com/seo-tools/keyword-research-tool/", images: ["https://www.rankempire.com/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Keyword Research Tool: Online SEO Tool | RankEmpire", description: "Generate hundreds of keyword ideas from a seed term, grouped by intent: questions, commercial, local and comparisons." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.com/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Keyword Research Tool\", \"item\": \"https://www.rankempire.com/seo-tools/keyword-research-tool/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Keyword Research Tool\", \"url\": \"https://www.rankempire.com/seo-tools/keyword-research-tool/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Where do the keyword ideas come from?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The tool combines your seed keyword with proven search patterns for questions, buying intent, comparisons and local searches. It does not show search volumes.\"}}, {\"@type\": \"Question\", \"name\": \"How do I choose which keywords to target?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Prioritize keywords with clear buying intent that match a page you have or should build, then check volume and competition.\"}}]}" }} />
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
