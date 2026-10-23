import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-audit/Hero';
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
import Related from '@/components/pages/seo-audit/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Professional SEO Audit | RankEmpire",
  description: "A complete SEO audit covering technical health, content, backlinks, local SEO and competitors, with a prioritized action plan your team can follow.",
  alternates: { canonical: "https://www.rankempire.com/seo-audit/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Professional SEO Audit | RankEmpire", description: "A complete SEO audit covering technical health, content, backlinks, local SEO and competitors, with a prioritized action plan your team can follow.", url: "https://www.rankempire.com/seo-audit/", images: ["https://www.rankempire.com/img/w2.webp"] },
  twitter: { card: 'summary_large_image', title: "Professional SEO Audit | RankEmpire", description: "A complete SEO audit covering technical health, content, backlinks, local SEO and competitors, with a prioritized action plan your team can follow." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Audit\", \"item\": \"https://www.rankempire.com/seo-audit/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO Audit\", \"serviceType\": \"SEO Audit\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"A complete SEO audit covering technical health, content, backlinks, local SEO and competitors, with a prioritized action plan your team can follow.\", \"url\": \"https://www.rankempire.com/seo-audit/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How long does an SEO audit take?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most audits are delivered within 10 business days. Large sites can take longer.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need to buy ongoing SEO after the audit?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Many clients implement the audit in-house. If you want help, we can do the work for you.\"}}, {\"@type\": \"Question\", \"name\": \"Is there a free version?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"You can run our free SEO Audit Tool for a quick check. The full audit goes much deeper.\"}}, {\"@type\": \"Question\", \"name\": \"What do you need from me to run an SEO audit?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We need access to Google Search Console and Google Analytics, and ideally your CMS or a staging environment. A list of your main products or services, target markets and key competitors helps us focus. If you have had previous SEO work done, any documentation of past changes, migrations or link building is useful context.\"}}, {\"@type\": \"Question\", \"name\": \"Is a free SEO audit worth it?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Free audits are usually automated reports generated by a tool. They can highlight obvious issues like missing titles or broken links, but they rarely prioritize based on your business or explain root causes. They are a starting point for learning, not a substitute for an expert review if your site is important to revenue.\"}}, {\"@type\": \"Question\", \"name\": \"Will the audit fix the problems it finds?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"An audit diagnoses issues and provides a plan to fix them. Implementation is a separate step. Many clients handle fixes in house using our recommendations, while others hire us to implement them or continue into an ongoing SEO program. Either way, the audit document gives you everything needed to act.\"}}, {\"@type\": \"Question\", \"name\": \"How often should I audit my website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most businesses benefit from a full audit once a year, plus a focused review before and after major site changes. Sites that publish frequently, run large catalogs or deploy code often should add monthly monitoring between full audits, so new problems are caught early rather than discovered after traffic falls.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <Hero />
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
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
