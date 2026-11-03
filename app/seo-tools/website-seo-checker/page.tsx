import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import PageHero from '@/components/pages/seo-tools__website-seo-checker/PageHero';
import Section from '@/components/pages/seo-tools__website-seo-checker/Section';
import How from '@/components/pages/seo-tools__website-seo-checker/How';
import More from '@/components/pages/seo-tools__website-seo-checker/More';
import Faq from '@/components/pages/seo-tools__website-seo-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Free Website SEO Checker: Online SEO Tool | RankEmpire" },
  description: "Analyze title tags, meta descriptions, headings, canonicals, robots directives, and on-page SEO health in seconds with our free website SEO checker tool.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/website-seo-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Website SEO Checker: Online SEO Tool | RankEmpire", description: "Analyze title tags, meta descriptions, headings, canonicals, robots directives, and on-page SEO health in seconds with our free website SEO checker tool.", url: "https://www.rankempire.us/seo-tools/website-seo-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Website SEO Checker: Online SEO Tool | RankEmpire", description: "Analyze title tags, meta descriptions, headings, canonicals, robots directives, and on-page SEO health in seconds with our free website SEO checker tool." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Website SEO Checker\", \"item\": \"https://www.rankempire.us/seo-tools/website-seo-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Website SEO Checker\", \"url\": \"https://www.rankempire.us/seo-tools/website-seo-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any (web browser)\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\", \"availability\": \"https://schema.org/InStock\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"description\": \"Analyze title tags, meta descriptions, headings, canonicals, robots directives, and on-page SEO health in seconds with our free website SEO checker tool.\", \"applicationSubCategory\": \"SEO tool\", \"browserRequirements\": \"Requires JavaScript\", \"isAccessibleForFree\": true, \"inLanguage\": \"en-US\"}" }} />
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
