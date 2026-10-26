import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PageHero from '@/components/pages/seo-tools__serp-checker/PageHero';
import Section from '@/components/pages/seo-tools__serp-checker/Section';
import How from '@/components/pages/seo-tools__serp-checker/How';
import More from '@/components/pages/seo-tools__serp-checker/More';
import Faq from '@/components/pages/seo-tools__serp-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Free SERP Checker: Online SEO Tool | RankEmpire",
  description: "Preview how your title and description appear in Google search results on desktop and mobile, with pixel width checks.",
  alternates: { canonical: "https://www.rankempire.com/seo-tools/serp-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free SERP Checker: Online SEO Tool | RankEmpire", description: "Preview how your title and description appear in Google search results on desktop and mobile, with pixel width checks.", url: "https://www.rankempire.com/seo-tools/serp-checker/", images: ["https://www.rankempire.com/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free SERP Checker: Online SEO Tool | RankEmpire", description: "Preview how your title and description appear in Google search results on desktop and mobile, with pixel width checks." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.com/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SERP Checker\", \"item\": \"https://www.rankempire.com/seo-tools/serp-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"SERP Checker\", \"url\": \"https://www.rankempire.com/seo-tools/serp-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Why is my title cut off in Google?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google truncates titles at roughly 580 pixels on desktop. The preview estimates pixel width so you can see where yours will be cut.\"}}, {\"@type\": \"Question\", \"name\": \"Does Google always use my title and description?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Not always. Google may rewrite them if it thinks they do not match the query. Clear, accurate titles are rewritten less often.\"}}]}" }} />
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
