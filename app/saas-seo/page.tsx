import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/saas-seo/V1';
import Statement from '@/components/pages/saas-seo/Statement';
import InDepth from '@/components/pages/saas-seo/InDepth';
import WhyItMatters from '@/components/pages/saas-seo/WhyItMatters';
import Deliverables from '@/components/pages/saas-seo/Deliverables';
import Marquee from '@/components/pages/saas-seo/Marquee';
import Monthly from '@/components/pages/saas-seo/Monthly';
import Process from '@/components/pages/saas-seo/Process';
import WhoItIsFor from '@/components/pages/saas-seo/WhoItIsFor';
import Comparison from '@/components/pages/saas-seo/Comparison';
import Pricing from '@/components/pages/saas-seo/Pricing';
import Faq from '@/components/pages/saas-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/saas-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SaaS SEO Agency for B2B Software Companies | RankEmpire",
  description: "SaaS SEO that builds pipeline: bottom-funnel pages, comparison and alternative pages, integration pages and topical authority content for B2B software.",
  alternates: { canonical: "https://www.rankempire.us/saas-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SaaS SEO Agency for B2B Software Companies | RankEmpire", description: "SaaS SEO that builds pipeline: bottom-funnel pages, comparison and alternative pages, integration pages and topical authority content for B2B software.", url: "https://www.rankempire.us/saas-seo/", images: ["https://www.rankempire.us/img/s-saas.webp"] },
  twitter: { card: 'summary_large_image', title: "SaaS SEO Agency for B2B Software Companies | RankEmpire", description: "SaaS SEO that builds pipeline: bottom-funnel pages, comparison and alternative pages, integration pages and topical authority content for B2B software." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SaaS SEO\", \"item\": \"https://www.rankempire.us/saas-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SaaS SEO\", \"serviceType\": \"SaaS SEO\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"SaaS SEO that builds pipeline: bottom-funnel pages, comparison and alternative pages, integration pages and topical authority content for B2B software.\", \"url\": \"https://www.rankempire.us/saas-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do you write technical SaaS content?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Our writers interview your team and use your product so content is accurate and specific.\"}}, {\"@type\": \"Question\", \"name\": \"How fast can SaaS SEO produce leads?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Bottom-funnel pages often generate signups within the first few months, while authority content compounds over 6 to 12 months.\"}}, {\"@type\": \"Question\", \"name\": \"Can you work with our in-house content team?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We can lead strategy and technical SEO while your team writes, or the other way around.\"}}, {\"@type\": \"Question\", \"name\": \"Should SaaS companies create comparison and alternative pages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, if they are honest and useful. Buyers searching for alternatives to a competitor are close to a decision, and a clear page explaining differences, ideal use cases and pricing models helps them evaluate. Avoid misleading claims about competitors. Accurate, fair comparisons build more trust and are less likely to create legal or reputational problems.\"}}, {\"@type\": \"Question\", \"name\": \"How is SaaS SEO different from regular SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"SaaS SEO focuses on software buying journeys, which often involve long evaluation periods, multiple stakeholders and trials. Content needs to explain workflows and use cases, not just describe features. It also deals with technical issues specific to software companies, such as app subdomains, documentation sites, JavaScript frameworks and frequent product changes that leave old pages outdated.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SaaS SEO take to drive signups?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most SaaS companies see meaningful movement after several months, depending on domain authority, competition and how fast content gets published. Bottom of funnel pages, such as integration and comparison pages, often convert sooner than broad educational content. A newer domain in a crowded category should expect a longer ramp than an established one.\"}}, {\"@type\": \"Question\", \"name\": \"Should our docs be indexed by Google?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Public documentation often ranks for specific how to and error searches and can attract existing and potential users. Index docs that help people understand or use the product, and keep account specific, staging or internal pages out of the index. Make sure docs link back to the marketing site where relevant.\"}}, {\"@type\": \"Question\", \"name\": \"What metrics should we track for SaaS SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Track organic signups, trials or demo requests by landing page, along with assisted conversions where your analytics supports them. Supporting metrics include impressions and clicks in Search Console, rankings for priority terms and indexed page counts. Pageviews alone can be misleading, since educational traffic may convert slowly or not at all.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="saas-seo" />
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
