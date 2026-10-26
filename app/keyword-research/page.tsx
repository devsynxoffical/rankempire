import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/keyword-research/V1';
import Statement from '@/components/pages/keyword-research/Statement';
import InDepth from '@/components/pages/keyword-research/InDepth';
import WhyItMatters from '@/components/pages/keyword-research/WhyItMatters';
import Deliverables from '@/components/pages/keyword-research/Deliverables';
import Marquee from '@/components/pages/keyword-research/Marquee';
import Monthly from '@/components/pages/keyword-research/Monthly';
import Process from '@/components/pages/keyword-research/Process';
import WhoItIsFor from '@/components/pages/keyword-research/WhoItIsFor';
import Comparison from '@/components/pages/keyword-research/Comparison';
import Pricing from '@/components/pages/keyword-research/Pricing';
import Faq from '@/components/pages/keyword-research/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/keyword-research/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Keyword Research Services and Search Intent Mapping",
  description: "Keyword research that maps real search demand to the pages you need: intent analysis, keyword clustering, difficulty scoring and content planning.",
  alternates: { canonical: "https://www.rankempire.com/keyword-research/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Keyword Research Services and Search Intent Mapping", description: "Keyword research that maps real search demand to the pages you need: intent analysis, keyword clustering, difficulty scoring and content planning.", url: "https://www.rankempire.com/keyword-research/", images: ["https://www.rankempire.com/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "Keyword Research Services and Search Intent Mapping", description: "Keyword research that maps real search demand to the pages you need: intent analysis, keyword clustering, difficulty scoring and content planning." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Keyword Research\", \"item\": \"https://www.rankempire.com/keyword-research/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Keyword Research\", \"serviceType\": \"Keyword Research\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Keyword research that maps real search demand to the pages you need: intent analysis, keyword clustering, difficulty scoring and content planning.\", \"url\": \"https://www.rankempire.com/keyword-research/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What do I receive?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A keyword map spreadsheet, a prioritized content plan and a walkthrough call.\"}}, {\"@type\": \"Question\", \"name\": \"Can I try a free tool first?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Our free Keyword Research Tool generates keyword ideas you can explore.\"}}, {\"@type\": \"Question\", \"name\": \"Which keyword research tools do you use?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We use a combination of Ahrefs, Semrush, Google Search Console, Google Keyword Planner and manual review of search results. Each tool estimates volume differently, so we compare sources rather than relying on one number. Search Console data is especially valuable for existing sites because it shows real queries already bringing impressions.\"}}, {\"@type\": \"Question\", \"name\": \"Should I target high volume keywords?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only if they match your business and you can realistically compete. High volume terms are usually more competitive and often have broader intent. More specific long tail phrases tend to have lower volume, clearer intent and easier competition. A balanced strategy includes both, with priority on terms most likely to produce customers.\"}}, {\"@type\": \"Question\", \"name\": \"What is keyword difficulty?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Keyword difficulty is a score from SEO tools that estimates how hard it would be to rank for a term, usually based on the links pointing to current top pages. It is a useful guide but not exact. Always review the actual search results to see who ranks and whether your site could compete.\"}}, {\"@type\": \"Question\", \"name\": \"How often should keyword research be updated?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Revisit your research at least once a year, and whenever you launch new products, enter new markets or notice changes in search behavior. Search Console data should be reviewed more often, since it reveals new queries your pages are already appearing for and may deserve dedicated content.\"}}, {\"@type\": \"Question\", \"name\": \"What is a long tail keyword?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A long tail keyword is a more specific, usually longer search phrase with lower volume, such as emergency water heater repair in Phoenix instead of water heater. These terms often have clearer intent and less competition, making them easier to rank for and more likely to convert visitors into customers.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <Statement />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
        <Pricing />
        <Faq />
        <Pmq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
