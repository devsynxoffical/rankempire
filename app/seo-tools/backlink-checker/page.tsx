import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import ProofStrip from '@/components/sections/ProofStrip';
import DeepGuide from '@/components/sections/DeepGuide';
import PageHero from '@/components/pages/seo-tools__backlink-checker/PageHero';
import Section from '@/components/pages/seo-tools__backlink-checker/Section';
import How from '@/components/pages/seo-tools__backlink-checker/How';
import More from '@/components/pages/seo-tools__backlink-checker/More';
import Faq from '@/components/pages/seo-tools__backlink-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Free Backlink Checker: Check Backlinks Free | RankEmpire" },
  description: "Free backlink checker tool: check backlinks free with referring domains, anchor text and backlink analysis from your export. Private, no sign-up.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/backlink-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Backlink Checker: Check Backlinks Free | RankEmpire", description: "Free backlink checker tool: check backlinks free with referring domains, anchor text and backlink analysis from your export. Private, no sign-up.", url: "https://www.rankempire.us/seo-tools/backlink-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Backlink Checker: Check Backlinks Free | RankEmpire", description: "Free backlink checker tool: check backlinks free with referring domains, anchor text and backlink analysis from your export. Private, no sign-up." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Backlink Checker\", \"item\": \"https://www.rankempire.us/seo-tools/backlink-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Backlink Checker\", \"url\": \"https://www.rankempire.us/seo-tools/backlink-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any (web browser)\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\", \"availability\": \"https://schema.org/InStock\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"description\": \"Free backlink checker tool: check backlinks free with referring domains, anchor text and backlink analysis from your export. Private, no sign-up.\", \"applicationSubCategory\": \"SEO tool\", \"browserRequirements\": \"Requires JavaScript\", \"isAccessibleForFree\": true, \"inLanguage\": \"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Where do I get a backlink export?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google Search Console, under Links, lets you export top linking sites for free. Paid tools like Ahrefs and Semrush provide fuller exports.\"}}, {\"@type\": \"Question\", \"name\": \"What is a healthy anchor text mix?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most natural profiles are led by brand and URL anchors, with a smaller share of exact match keywords.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="free" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <Section />
        <ProofStrip context="link building" />
        <How />
        <More />
        <DeepGuide slug="seo-tools/backlink-checker" />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
