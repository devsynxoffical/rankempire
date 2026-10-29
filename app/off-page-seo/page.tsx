import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/off-page-seo/V2';
import Statement from '@/components/pages/off-page-seo/Statement';
import InDepth from '@/components/pages/off-page-seo/InDepth';
import WhyItMatters from '@/components/pages/off-page-seo/WhyItMatters';
import Deliverables from '@/components/pages/off-page-seo/Deliverables';
import Marquee from '@/components/pages/off-page-seo/Marquee';
import Monthly from '@/components/pages/off-page-seo/Monthly';
import Process from '@/components/pages/off-page-seo/Process';
import WhoItIsFor from '@/components/pages/off-page-seo/WhoItIsFor';
import Comparison from '@/components/pages/off-page-seo/Comparison';
import Pricing from '@/components/pages/off-page-seo/Pricing';
import Faq from '@/components/pages/off-page-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/off-page-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Off-Page SEO Services | RankEmpire",
  description: "Off-page SEO that builds real authority: editorial links, brand mentions, digital PR, citations and reputation signals.",
  alternates: { canonical: "https://www.rankempire.us/off-page-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Off-Page SEO Services | RankEmpire", description: "Off-page SEO that builds real authority: editorial links, brand mentions, digital PR, citations and reputation signals.", url: "https://www.rankempire.us/off-page-seo/", images: ["https://www.rankempire.us/img/s-links.webp"] },
  twitter: { card: 'summary_large_image', title: "Off-Page SEO Services | RankEmpire", description: "Off-page SEO that builds real authority: editorial links, brand mentions, digital PR, citations and reputation signals." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Off-Page SEO\", \"item\": \"https://www.rankempire.us/off-page-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Off-Page SEO\", \"serviceType\": \"Off-Page SEO\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Off-page SEO that builds real authority: editorial links, brand mentions, digital PR, citations and reputation signals.\", \"url\": \"https://www.rankempire.us/off-page-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do you buy links?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. We do not use private blog networks or paid link schemes that put your site at risk.\"}}, {\"@type\": \"Question\", \"name\": \"How many links will I get?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We focus on relevance and quality, and agree on monthly targets based on your plan and niche.\"}}, {\"@type\": \"Question\", \"name\": \"What are the main off-page SEO techniques?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The main techniques are earning backlinks through content and outreach, digital PR, reclaiming unlinked brand mentions, building local citations, generating reviews and contributing expert commentary to publications. Guest posting can help when it is on genuinely relevant sites with real audiences. The common thread is earning recognition from sources your customers would trust.\"}}, {\"@type\": \"Question\", \"name\": \"Is off-page SEO still important?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Links and mentions from other sites remain one of the ways search engines assess authority and trust. Content quality and relevance carry great weight, but in competitive markets, sites with similar content are often separated by their reputation across the web. Off-page work is how you build that reputation.\"}}, {\"@type\": \"Question\", \"name\": \"Do social media signals help SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Social shares and likes are not considered direct ranking factors by Google. Social activity can still help indirectly by getting content in front of people who may link to it, mention your brand or search for you by name. Treat social media as a distribution channel that supports off-page goals.\"}}, {\"@type\": \"Question\", \"name\": \"What is a disavow file and do I need one?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A disavow file tells Google to ignore specific links pointing to your site. Google says most sites do not need one, because its systems usually ignore spammy links. It is mainly useful if you have a manual action for unnatural links or a clear history of paid or manipulative link building.\"}}, {\"@type\": \"Question\", \"name\": \"How do I measure off-page SEO results?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Track new referring domains, the relevance and quality of linking sites, brand mentions, referral traffic and review growth. Over time, look for improvements in rankings for pages that received links and for competitive terms overall. Avoid judging success by raw link counts, since quality and relevance matter more than quantity.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="off-page-seo" />
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
