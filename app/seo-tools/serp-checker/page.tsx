import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import PageHero from '@/components/pages/seo-tools__serp-checker/PageHero';
import Section from '@/components/pages/seo-tools__serp-checker/Section';
import How from '@/components/pages/seo-tools__serp-checker/How';
import More from '@/components/pages/seo-tools__serp-checker/More';
import Faq from '@/components/pages/seo-tools__serp-checker/Faq';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Free SERP Rank Checker: Check Google Rankings | RankEmpire" },
  description: "Free SERP rank checker. Preview how your page looks in Google and check where it ranks for any keyword. No sign-up needed.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/serp-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free SERP Rank Checker: Check Google Rankings | RankEmpire", description: "Free SERP rank checker. Preview how your page looks in Google and check where it ranks for any keyword. No sign-up needed.", url: "https://www.rankempire.us/seo-tools/serp-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "Free SERP Rank Checker: Check Google Rankings | RankEmpire", description: "Free SERP rank checker. Preview how your page looks in Google and check where it ranks for any keyword. No sign-up needed." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SERP Checker\", \"item\": \"https://www.rankempire.us/seo-tools/serp-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"SERP Checker\", \"url\": \"https://www.rankempire.us/seo-tools/serp-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any (web browser)\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\", \"availability\": \"https://schema.org/InStock\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"description\": \"Preview how your title and description appear in Google search results on desktop and mobile, with pixel width checks.\", \"applicationSubCategory\": \"SEO tool\", \"browserRequirements\": \"Requires JavaScript\", \"isAccessibleForFree\": true, \"inLanguage\": \"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What is a SERP rank checker?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It is a tool that shows where a page ranks in Google for a keyword and how the result looks in search.\"}}, {\"@type\": \"Question\", \"name\": \"Is this SERP checker free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. It is free to use with no sign-up.\"}}, {\"@type\": \"Question\", \"name\": \"How is this different from paid SERP checkers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Paid suites track thousands of keywords over time. This free checker is for quick checks and previews without an account.\"}}, {\"@type\": \"Question\", \"name\": \"Why does my ranking look different when I search myself?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google personalizes results by location, device and history. Use a private window or a neutral checker for a cleaner view.\"}}, {\"@type\": \"Question\", \"name\": \"How often should I check my rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Weekly is enough for most sites. For long-term trends, Google Search Console is the most reliable source.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="free" />
      <MobileMenu />
      <main id="main">
        <PageHero />
        <Section />
        <How />
        <More />
        <DeepGuide slug="seo-tools/serp-checker" />
        <Faq />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
