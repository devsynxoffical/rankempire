import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import PageHero from '@/components/pages/seo-tools__seo-score-checker/PageHero';
import Section from '@/components/pages/seo-tools__seo-score-checker/Section';
import How from '@/components/pages/seo-tools__seo-score-checker/How';
import More from '@/components/sections/More';
import Faq from '@/components/pages/seo-tools__seo-score-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Free SEO Checker & SEO Score Checker, No Trial | RankEmpire" },
  description: "Free SEO checker with no trial or sign-up: get an instant 0 to 100 on-page SEO score from 14 checks, with step-by-step fixes to boost Google rankings.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/seo-score-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free SEO Checker & SEO Score Checker, No Trial | RankEmpire", description: "Free SEO checker with no trial or sign-up: get an instant 0 to 100 on-page SEO score from 14 checks, with step-by-step fixes to boost Google rankings.", url: "https://www.rankempire.us/seo-tools/seo-score-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free SEO Checker & SEO Score Checker, No Trial | RankEmpire", description: "Free SEO checker with no trial or sign-up: get an instant 0 to 100 on-page SEO score from 14 checks, with step-by-step fixes to boost Google rankings." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Score Checker\", \"item\": \"https://www.rankempire.us/seo-tools/seo-score-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"SEO Score Checker\", \"url\": \"https://www.rankempire.us/seo-tools/seo-score-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any (web browser)\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\", \"availability\": \"https://schema.org/InStock\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"description\": \"Free SEO checker with no trial or sign-up: get an instant 0 to 100 on-page SEO score from 14 checks, with step-by-step fixes to boost Google rankings.\", \"applicationSubCategory\": \"SEO tool\", \"browserRequirements\": \"Requires JavaScript\", \"isAccessibleForFree\": true, \"inLanguage\": \"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is this SEO checker really free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. There is no trial, no account and no limit on checks. The score is calculated in your browser.\"}}, {\"@type\": \"Question\", \"name\": \"What does the SEO score measure?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It scores 14 on-page checks such as the title, meta description, headings, images, links, canonical tag and structured data, from 0 to 100.\"}}, {\"@type\": \"Question\", \"name\": \"What is a good SEO score?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Aim to fix every issue the checker lists. A high score means the page basics are right, but rankings also depend on content quality, links and competition.\"}}, {\"@type\": \"Question\", \"name\": \"How do I improve my SEO score?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Work through the fixes the checker lists, starting with the title, meta description and headings, then run the check again.\"}}, {\"@type\": \"Question\", \"name\": \"Can I check a whole website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"This checker scores one page at a time. For a whole site, use our website SEO checker or request a free SEO audit.\"}}, {\"@type\": \"Question\", \"name\": \"Why paste the source code instead of a URL?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Browsers block websites from reading other websites directly for security reasons. Pasting the source lets the check run instantly and privately in your browser.\"}}, {\"@type\": \"Question\", \"name\": \"Is my data stored?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Everything runs in your browser and nothing is sent to our servers.\"}}, {\"@type\": \"Question\", \"name\": \"Does a high score guarantee rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. On-page basics are only one part of SEO. Content quality, links, technical health and competition all matter.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="free" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <Section />
        <How />
        <More />
        <DeepGuide slug="seo-tools/seo-score-checker" />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
