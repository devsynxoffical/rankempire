import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/link-building/V1';
import Statement from '@/components/pages/link-building/Statement';
import InDepth from '@/components/pages/link-building/InDepth';
import WhyItMatters from '@/components/pages/link-building/WhyItMatters';
import Deliverables from '@/components/pages/link-building/Deliverables';
import Marquee from '@/components/pages/link-building/Marquee';
import Monthly from '@/components/pages/link-building/Monthly';
import Process from '@/components/pages/link-building/Process';
import WhoItIsFor from '@/components/pages/link-building/WhoItIsFor';
import Comparison from '@/components/pages/link-building/Comparison';
import Pricing from '@/components/pages/link-building/Pricing';
import Faq from '@/components/pages/link-building/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/link-building/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "White Hat Link Building Services | RankEmpire",
  description: "Link building services that earn editorial backlinks from relevant, real websites through outreach, digital PR and linkable assets.",
  alternates: { canonical: "https://www.rankempire.us/link-building/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "White Hat Link Building Services | RankEmpire", description: "Link building services that earn editorial backlinks from relevant, real websites through outreach, digital PR and linkable assets.", url: "https://www.rankempire.us/link-building/", images: ["https://www.rankempire.us/img/s-links.webp"] },
  twitter: { card: 'summary_large_image', title: "White Hat Link Building Services | RankEmpire", description: "Link building services that earn editorial backlinks from relevant, real websites through outreach, digital PR and linkable assets." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Link Building\", \"item\": \"https://www.rankempire.us/link-building/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Link Building\", \"serviceType\": \"Link Building\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Link building services that earn editorial backlinks from relevant, real websites through outreach, digital PR and linkable assets.\", \"url\": \"https://www.rankempire.us/link-building/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Are your links safe?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We only pursue links on real sites with real audiences and avoid networks built for selling links.\"}}, {\"@type\": \"Question\", \"name\": \"Can I approve sites before outreach?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. You can review target lists before we reach out.\"}}, {\"@type\": \"Question\", \"name\": \"Is link building safe?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Link building is safe when it follows Google's guidelines. That means earning links editorially through useful content and genuine outreach, not buying links that pass ranking value, joining link exchanges at scale or using private blog networks. Ask any provider how they acquire links, and be cautious of packages promising a fixed number of high authority links quickly.\"}}, {\"@type\": \"Question\", \"name\": \"How many backlinks do I need to rank?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"There is no fixed number. It depends on how competitive your keywords are and what links the current top pages have. A local service page may need only a few relevant local links, while a national commercial term may need many more. Compare your profile with competitors ranking for the same terms.\"}}, {\"@type\": \"Question\", \"name\": \"What makes a good backlink?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A good backlink comes from a relevant, reputable site with real readers, is placed editorially within useful content and points to a page that matches the context. Links from sites in your industry or local area are usually more valuable than links from general sites with high metrics but no topical connection.\"}}, {\"@type\": \"Question\", \"name\": \"How long does it take for backlinks to work?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Search engines need to find and process new links, which can take a few weeks. The ranking effect often builds gradually over months as more relevant links accumulate. Results depend on competition, the quality of the links and how well the target pages match search intent.\"}}, {\"@type\": \"Question\", \"name\": \"Should I use exact match anchor text?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Use anchor text naturally. Most earned links will use your brand name, the page title or descriptive phrases chosen by the editor. Pushing for exact match keyword anchors on many links looks unnatural and can be a risk signal. A varied, natural anchor profile is safer and reflects how people actually link.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="link-building" />
        <Statement />
        <SearchSurfaces slug="link-building" kind="service" audience="your business" kw="link building services" question="How does RankEmpire build links?" />
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
