import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import OrgSchema from '@/components/seo/OrgSchema';
import DeepGuide from '@/components/sections/DeepGuide';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-audit/V1';
import Statement from '@/components/pages/seo-audit/Statement';
import InDepth from '@/components/pages/seo-audit/InDepth';
import WhyItMatters from '@/components/pages/seo-audit/WhyItMatters';
import Deliverables from '@/components/pages/seo-audit/Deliverables';
import Marquee from '@/components/pages/seo-audit/Marquee';
import Monthly from '@/components/pages/seo-audit/Monthly';
import Process from '@/components/pages/seo-audit/Process';
import WhoItIsFor from '@/components/pages/seo-audit/WhoItIsFor';
import Comparison from '@/components/pages/seo-audit/Comparison';
import Pricing from '@/components/pages/seo-audit/Pricing';
import Faq from '@/components/pages/seo-audit/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-audit/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Free SEO Audit & Technical Analysis (Action Plan) | RankEmpire" },
  description: "Professional SEO audit for US businesses: technical, content, links, local and AI search, with a prioritized 90-day plan. Free, delivered in 2 days.",
  alternates: { canonical: "https://www.rankempire.us/seo-audit/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Free SEO Audit & Technical Analysis (Action Plan) | RankEmpire", description: "Professional SEO audit for US businesses: technical, content, links, local and AI search, with a prioritized 90-day plan. Free, delivered in 2 days.", url: "https://www.rankempire.us/seo-audit/", images: ["https://www.rankempire.us/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "Free SEO Audit & Technical Analysis (Action Plan) | RankEmpire", description: "Professional SEO audit for US businesses: technical, content, links, local and AI search, with a prioritized 90-day plan. Free, delivered in 2 days." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Audit\", \"item\": \"https://www.rankempire.us/seo-audit/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO Audit\", \"serviceType\": \"SEO Audit\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"A RankEmpire SEO audit covers technical health (crawling, indexing, speed, structured data), content and keyword gaps, backlinks, local SEO signals and competitors, and ends with a prioritized 90-day action plan rather than a list of warnings. The initial audit is free, delivered within two business days, and becomes the roadmap if you go ahead.\", \"url\": \"https://www.rankempire.us/seo-audit/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How long does an SEO audit take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most audits are delivered within 10 business days. Large sites can take longer.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need to buy ongoing SEO after the audit?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Many clients implement the audit in-house. If you want help, we can do the work for you.\"}}, {\"@type\": \"Question\", \"name\": \"Is there a free version?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"You can run our free SEO Audit Tool for a quick check. The full audit goes much deeper.\"}}, {\"@type\": \"Question\", \"name\": \"What do you need from me to run an SEO audit?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We need access to Google Search Console and Google Analytics, and ideally your CMS or a staging environment. A list of your main products or services, target markets and key competitors helps us focus. If you have had previous SEO work done, any documentation of past changes, migrations or link building is useful context.\"}}, {\"@type\": \"Question\", \"name\": \"Is a free SEO audit worth it?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Free audits are usually automated reports generated by a tool. They can highlight obvious issues like missing titles or broken links, but they rarely prioritize based on your business or explain root causes. They are a starting point for learning, not a substitute for an expert review if your site is important to revenue.\"}}, {\"@type\": \"Question\", \"name\": \"Will the audit fix the problems it finds?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"An audit diagnoses issues and provides a plan to fix them. Implementation is a separate step. Many clients handle fixes in house using our recommendations, while others hire us to implement them or continue into an ongoing SEO program. Either way, the audit document gives you everything needed to act.\"}}, {\"@type\": \"Question\", \"name\": \"How often should I audit my website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most businesses benefit from a full audit once a year, plus a focused review before and after major site changes. Sites that publish frequently, run large catalogs or deploy code often should add monthly monitoring between full audits, so new problems are caught early rather than discovered after traffic falls.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-audit" />
        <Statement />
        <SearchSurfaces slug="seo-audit" kind="service" audience="your business" kw="free seo audit" question="What does a RankEmpire SEO audit cover?" />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
        <DeepGuide slug="seo-audit" />
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
