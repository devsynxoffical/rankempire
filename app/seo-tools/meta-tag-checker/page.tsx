import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-tools__meta-tag-checker/PageHero';
import Section from '@/components/pages/seo-tools__meta-tag-checker/Section';
import How from '@/components/pages/seo-tools__meta-tag-checker/How';
import More from '@/components/sections/More';
import Faq from '@/components/pages/seo-tools__meta-tag-checker/Faq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free Meta Tag Checker: Online SEO Tool | RankEmpire",
  description: "Check title, description, robots, canonical, Open Graph and Twitter tags from any page source.",
  alternates: { canonical: "https://www.rankempire.com/seo-tools/meta-tag-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Meta Tag Checker: Online SEO Tool | RankEmpire", description: "Check title, description, robots, canonical, Open Graph and Twitter tags from any page source.", url: "https://www.rankempire.com/seo-tools/meta-tag-checker/", images: ["https://www.rankempire.com/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Meta Tag Checker: Online SEO Tool | RankEmpire", description: "Check title, description, robots, canonical, Open Graph and Twitter tags from any page source." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.com/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Meta Tag Checker\", \"item\": \"https://www.rankempire.com/seo-tools/meta-tag-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Meta Tag Checker\", \"url\": \"https://www.rankempire.com/seo-tools/meta-tag-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Which meta tags matter most for SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The title tag and meta description shape how your page appears in search results. Canonical and robots tags control indexing. Open Graph tags control social previews.\"}}, {\"@type\": \"Question\", \"name\": \"Is my data stored?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. The check runs entirely in your browser.\"}}]}" }} />
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
