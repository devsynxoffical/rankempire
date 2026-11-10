import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import PageHero from '@/components/pages/seo-tools__meta-tag-checker/PageHero';
import Section from '@/components/pages/seo-tools__meta-tag-checker/Section';
import How from '@/components/pages/seo-tools__meta-tag-checker/How';
import More from '@/components/sections/More';
import Faq from '@/components/pages/seo-tools__meta-tag-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Free Meta Tag Checker: Title & Description | RankEmpire" },
  description: "Inspect title tags, meta descriptions, robots directives, canonical tags, Open Graph, and Twitter Cards to ensure optimal search ranking and CTR.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/meta-tag-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Meta Tag Checker: Title & Description | RankEmpire", description: "Inspect title tags, meta descriptions, robots directives, canonical tags, Open Graph, and Twitter Cards to ensure optimal search ranking and CTR.", url: "https://www.rankempire.us/seo-tools/meta-tag-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Meta Tag Checker: Title & Description | RankEmpire", description: "Inspect title tags, meta descriptions, robots directives, canonical tags, Open Graph, and Twitter Cards to ensure optimal search ranking and CTR." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Meta Tag Checker\", \"item\": \"https://www.rankempire.us/seo-tools/meta-tag-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Meta Tag Checker\", \"url\": \"https://www.rankempire.us/seo-tools/meta-tag-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any (web browser)\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\", \"availability\": \"https://schema.org/InStock\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"description\": \"Inspect title tags, meta descriptions, robots directives, canonical tags, Open Graph, and Twitter Cards to ensure optimal search ranking and CTR.\", \"applicationSubCategory\": \"SEO tool\", \"browserRequirements\": \"Requires JavaScript\", \"isAccessibleForFree\": true, \"inLanguage\": \"en-US\"}" }} />
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
        <DeepGuide slug="seo-tools/meta-tag-checker" />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
