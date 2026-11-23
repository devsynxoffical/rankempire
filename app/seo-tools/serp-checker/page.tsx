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
  title: { absolute: "SERP Rank Checker Tool & Free SERP Checker | RankEmpire" },
  description: "Free SERP checker and SERP rank checker tool: preview your Google listing on desktop and mobile, then check where you rank. No sign-up.",
  alternates: { canonical: "https://www.rankempire.us/seo-tools/serp-checker/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SERP Rank Checker Tool & Free SERP Checker | RankEmpire", description: "Free SERP checker and SERP rank checker tool: preview your Google listing on desktop and mobile, then check where you rank. No sign-up.", url: "https://www.rankempire.us/seo-tools/serp-checker/", images: ["https://www.rankempire.us/img/s-tech.webp"] },
  twitter: { card: 'summary_large_image', title: "SERP Rank Checker Tool & Free SERP Checker | RankEmpire", description: "Free SERP checker and SERP rank checker tool: preview your Google listing on desktop and mobile, then check where you rank. No sign-up." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Tools\", \"item\": \"https://www.rankempire.us/seo-tools/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SERP Checker\", \"item\": \"https://www.rankempire.us/seo-tools/serp-checker/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"WebApplication\", \"name\": \"SERP Checker\", \"url\": \"https://www.rankempire.us/seo-tools/serp-checker/\", \"applicationCategory\": \"BusinessApplication\", \"operatingSystem\": \"Any (web browser)\", \"offers\": {\"@type\": \"Offer\", \"price\": \"0\", \"priceCurrency\": \"USD\", \"availability\": \"https://schema.org/InStock\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"description\": \"Preview how your title and description appear in Google search results on desktop and mobile, with pixel width checks.\", \"applicationSubCategory\": \"SEO tool\", \"browserRequirements\": \"Requires JavaScript\", \"isAccessibleForFree\": true, \"inLanguage\": \"en-US\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What is a SERP rank checker tool?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A SERP rank checker tool shows where a page appears in Google's search results for a keyword and how its listing looks. RankEmpire splits this into two free tools: the SERP checker previews your title and description, and the keyword rank checker finds your position.\"}}, {\"@type\": \"Question\", \"name\": \"How do I check my SERP ranking for free?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Search the keyword in a private browser window from the location you serve, copy the result URLs and paste them into our free keyword rank checker. Google Search Console also shows your average position for every query, free.\"}}, {\"@type\": \"Question\", \"name\": \"Does this SERP checker show my exact position?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. The SERP checker previews how your listing looks in Google. To find your position, use the keyword rank checker or the Performance report in Google Search Console.\"}}, {\"@type\": \"Question\", \"name\": \"Why is my ranking different from what I see in Google?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google personalizes results by location, device and search history, so positions vary from person to person. Check in a private window from the location you serve, and use Search Console for an average across all searchers.\"}}, {\"@type\": \"Question\", \"name\": \"How often should I check SERP rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Weekly is enough for most keywords. Positions move a little every day, so look at the trend over several weeks rather than single checks.\"}}, {\"@type\": \"Question\", \"name\": \"Why is my title cut off in Google?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google truncates titles at roughly 580 pixels on desktop. The preview estimates pixel width so you can see where yours will be cut.\"}}, {\"@type\": \"Question\", \"name\": \"Does Google always use my title and description?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Not always. Google may rewrite them if it thinks they do not match the query. Clear, accurate titles are rewritten less often.\"}}]}" }} />
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
