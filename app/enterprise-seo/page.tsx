import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/enterprise-seo/V0';
import Statement from '@/components/pages/enterprise-seo/Statement';
import InDepth from '@/components/pages/enterprise-seo/InDepth';
import WhyItMatters from '@/components/pages/enterprise-seo/WhyItMatters';
import Deliverables from '@/components/pages/enterprise-seo/Deliverables';
import Marquee from '@/components/pages/enterprise-seo/Marquee';
import Monthly from '@/components/pages/enterprise-seo/Monthly';
import Process from '@/components/pages/enterprise-seo/Process';
import WhoItIsFor from '@/components/pages/enterprise-seo/WhoItIsFor';
import Comparison from '@/components/pages/enterprise-seo/Comparison';
import Pricing from '@/components/pages/enterprise-seo/Pricing';
import Faq from '@/components/pages/enterprise-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/enterprise-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Enterprise SEO Services for Large Websites | RankEmpire",
  description: "Enterprise SEO for large and complex websites: governance, technical SEO at scale, international setups, programmatic content and stakeholder reporting.",
  alternates: { canonical: "https://www.rankempire.com/enterprise-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Enterprise SEO Services for Large Websites | RankEmpire", description: "Enterprise SEO for large and complex websites: governance, technical SEO at scale, international setups, programmatic content and stakeholder reporting.", url: "https://www.rankempire.com/enterprise-seo/", images: ["https://www.rankempire.com/img/i-pro.webp"] },
  twitter: { card: 'summary_large_image', title: "Enterprise SEO Services for Large Websites | RankEmpire", description: "Enterprise SEO for large and complex websites: governance, technical SEO at scale, international setups, programmatic content and stakeholder reporting." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Enterprise SEO\", \"item\": \"https://www.rankempire.com/enterprise-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Enterprise SEO\", \"serviceType\": \"Enterprise SEO\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Enterprise SEO for large and complex websites: governance, technical SEO at scale, international setups, programmatic content and stakeholder reporting.\", \"url\": \"https://www.rankempire.com/enterprise-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do you work with in-house SEO teams?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We often act as an extension of an internal team for technical depth or extra capacity.\"}}, {\"@type\": \"Question\", \"name\": \"Can you support security and procurement reviews?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. We work with NDAs, access controls and vendor onboarding processes.\"}}, {\"@type\": \"Question\", \"name\": \"What makes enterprise SEO different?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Scale and complexity. Enterprise sites have more pages, more templates, more teams and more risk. Strategies focus on changes that apply across page types, automation for monitoring and reporting, and processes that keep many contributors aligned. Communication and stakeholder management often take as much effort as the technical and content work itself.\"}}, {\"@type\": \"Question\", \"name\": \"Which tools are used for enterprise SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Enterprise programs typically combine a scalable crawler, log file analysis, Google Search Console data exported through the API, rank tracking across large keyword sets and a business intelligence tool for reporting. Platforms such as Botify, Lumar, Conductor or seoClarity are common, though the right stack depends on your site and existing systems.\"}}, {\"@type\": \"Question\", \"name\": \"How do you get SEO work prioritized by engineering?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"By framing it in the same terms as other product work. That means clear problem statements, affected page types, estimated impact on traffic or revenue, effort estimates and acceptance criteria. Working within existing sprint processes, rather than sending ad hoc requests, makes it far easier for engineering leaders to schedule SEO tasks.\"}}, {\"@type\": \"Question\", \"name\": \"Can enterprise SEO work alongside our in house team?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, and that is common. Many large companies have internal SEO staff who own day to day work. An external partner can add specialist skills, extra capacity for audits or migrations, an outside perspective on priorities and support for building business cases. Responsibilities should be defined clearly at the start.\"}}, {\"@type\": \"Question\", \"name\": \"How do you manage SEO risk during large migrations?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Through detailed planning and testing. That includes full URL mapping, redirect testing in staging, crawl comparisons between old and new sites, checks on canonicals and structured data, and close monitoring after launch. Large migrations are often phased by section so issues can be found and fixed before the whole site moves.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V0 />
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
