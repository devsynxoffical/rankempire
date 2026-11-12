import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import PageHero from '@/components/pages/seo-tools__keyword-rank-checker/PageHero';
import Section from '@/components/pages/seo-tools__keyword-rank-checker/Section';
import How from '@/components/pages/seo-tools__keyword-rank-checker/How';
import More from '@/components/pages/seo-tools__keyword-rank-checker/More';
import Faq from '@/components/pages/seo-tools__keyword-rank-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Free Online Keyword Rank Checker: Check Rankings | RankEmpire" },
  description: "Free online keyword rank checker: check SEO ranking for any keyword, see where your site and competitors appear in Google results. No sign-up needed.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/keyword-rank-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free Online Keyword Rank Checker: Check Rankings | RankEmpire", description: "Free online keyword rank checker: check SEO ranking for any keyword, see where your site and competitors appear in Google results. No sign-up needed.", url: "https://www.rankempire.us/seo-tools/keyword-rank-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free Online Keyword Rank Checker: Check Rankings | RankEmpire", description: "Free online keyword rank checker: check SEO ranking for any keyword, see where your site and competitors appear in Google results. No sign-up needed." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Keyword Rank Checker\", \"item\": \"https://www.rankempire.us/seo-tools/keyword-rank-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"Keyword Rank Checker\", \"url\": \"https://www.rankempire.us/seo-tools/keyword-rank-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any (web browser)\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\", \"availability\": \"https://schema.org/InStock\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"description\": \"Free online keyword rank checker: check SEO ranking for any keyword, see where your site and competitors appear in Google results. No sign-up needed.\", \"applicationSubCategory\": \"SEO tool\", \"browserRequirements\": \"Requires JavaScript\", \"isAccessibleForFree\": true, \"inLanguage\": \"en-US\"}" }} />
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
        <DeepGuide slug="seo-tools/keyword-rank-checker" />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
