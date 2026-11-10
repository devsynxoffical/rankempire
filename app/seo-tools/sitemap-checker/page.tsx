import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import PageHero from '@/components/pages/seo-tools__sitemap-checker/PageHero';
import Section from '@/components/pages/seo-tools__sitemap-checker/Section';
import How from '@/components/pages/seo-tools__sitemap-checker/How';
import More from '@/components/sections/More';
import Faq from '@/components/pages/seo-tools__sitemap-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Free XML Sitemap Checker & Validator | RankEmpire" },
  description: "Inspect and validate your XML sitemap for URL count, response codes, format compliance, duplicates, and common crawl errors with our free tool.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/sitemap-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free XML Sitemap Checker & Validator | RankEmpire", description: "Inspect and validate your XML sitemap for URL count, response codes, format compliance, duplicates, and common crawl errors with our free tool.", url: "https://www.rankempire.us/seo-tools/sitemap-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free XML Sitemap Checker & Validator | RankEmpire", description: "Inspect and validate your XML sitemap for URL count, response codes, format compliance, duplicates, and common crawl errors with our free tool." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Sitemap Checker\", \"item\": \"https://www.rankempire.us/seo-tools/sitemap-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Sitemap Checker\", \"url\": \"https://www.rankempire.us/seo-tools/sitemap-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any (web browser)\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\", \"availability\": \"https://schema.org/InStock\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"description\": \"Inspect and validate your XML sitemap for URL count, response codes, format compliance, duplicates, and common crawl errors with our free tool.\", \"applicationSubCategory\": \"SEO tool\", \"browserRequirements\": \"Requires JavaScript\", \"isAccessibleForFree\": true, \"inLanguage\": \"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What should be in an XML sitemap?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only canonical, indexable pages that return a 200 status. Leave out redirects, noindex pages and duplicates.\"}}, {\"@type\": \"Question\", \"name\": \"How large can a sitemap be?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Up to 50,000 URLs or 50 MB uncompressed per file. Larger sites use a sitemap index.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="free" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <Section />
        <How />
        <More />
        <DeepGuide slug="seo-tools/sitemap-checker" />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
