import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/content-seo/V1';
import Statement from '@/components/pages/content-seo/Statement';
import InDepth from '@/components/pages/content-seo/InDepth';
import WhyItMatters from '@/components/pages/content-seo/WhyItMatters';
import Deliverables from '@/components/pages/content-seo/Deliverables';
import Marquee from '@/components/pages/content-seo/Marquee';
import Monthly from '@/components/pages/content-seo/Monthly';
import Process from '@/components/pages/content-seo/Process';
import WhoItIsFor from '@/components/pages/content-seo/WhoItIsFor';
import Comparison from '@/components/pages/content-seo/Comparison';
import Pricing from '@/components/pages/content-seo/Pricing';
import Faq from '@/components/pages/content-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/content-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Content SEO Services | RankEmpire",
  description: "Content SEO that builds topical authority: content strategy, SEO writing, topic clusters, content refreshes and editorial calendars.",
  alternates: { canonical: "https://www.rankempire.us/content-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Content SEO Services | RankEmpire", description: "Content SEO that builds topical authority: content strategy, SEO writing, topic clusters, content refreshes and editorial calendars.", url: "https://www.rankempire.us/content-seo/", images: ["https://www.rankempire.us/img/s-content.webp"] },
  twitter: { card: 'summary_large_image', title: "Content SEO Services | RankEmpire", description: "Content SEO that builds topical authority: content strategy, SEO writing, topic clusters, content refreshes and editorial calendars." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Content SEO\", \"item\": \"https://www.rankempire.us/content-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Content SEO\", \"serviceType\": \"Content SEO\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Content SEO that builds topical authority: content strategy, SEO writing, topic clusters, content refreshes and editorial calendars.\", \"url\": \"https://www.rankempire.us/content-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do you use AI to write content?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We may use AI for research support, but every piece is written or rewritten and fact-checked by a human specialist.\"}}, {\"@type\": \"Question\", \"name\": \"Can you write for regulated industries?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with review by your subject matter experts before publishing.\"}}, {\"@type\": \"Question\", \"name\": \"How often should I publish new content?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Consistency and quality matter more than frequency. Publishing a few well researched pieces each month that target real searches usually outperforms many rushed articles. Balance new content with updates to existing pages, since refreshing articles that already have some visibility often delivers results faster than starting from zero.\"}}, {\"@type\": \"Question\", \"name\": \"Can AI written content rank on Google?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google has said it rewards helpful content regardless of how it is produced, while content created mainly to manipulate rankings violates its spam policies. AI can help with research and drafts, but content still needs human expertise, fact checking, original insight and editing to be genuinely useful and trustworthy for readers.\"}}, {\"@type\": \"Question\", \"name\": \"What is E-E-A-T and does it matter for content?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"E-E-A-T stands for experience, expertise, authoritativeness and trustworthiness. It comes from Google's quality rater guidelines and describes what makes content reliable. It is not a single ranking factor, but showing real author credentials, first hand experience, accurate sourcing and clear business information helps readers and aligns with what Google aims to reward.\"}}, {\"@type\": \"Question\", \"name\": \"Should I update old content or write new articles?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Both have a place. Updating existing pages that already rank on page two or have lost traffic is often a quick win, because they already have history and links. New content fills gaps in your topic coverage. A balanced plan reviews performance data regularly and allocates time to each.\"}}, {\"@type\": \"Question\", \"name\": \"How do you measure content SEO success?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Track organic clicks and impressions in Search Console, rankings for target queries, conversions or leads from organic landing pages and engagement such as time on page. Look at performance by topic cluster as well as individual articles. Content often takes months to reach its potential, so evaluate trends over time.\"}}]}" }} />
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
