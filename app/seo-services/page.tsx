import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-services/V1';
import Statement from '@/components/pages/seo-services/Statement';
import Core from '@/components/pages/seo-services/Core';
import Specialist from '@/components/pages/seo-services/Specialist';
import InDepth from '@/components/pages/seo-services/InDepth';
import WhyItMatters from '@/components/pages/seo-services/WhyItMatters';
import Marquee from '@/components/pages/seo-services/Marquee';
import Monthly from '@/components/pages/seo-services/Monthly';
import Process from '@/components/pages/seo-services/Process';
import WhoItIsFor from '@/components/pages/seo-services/WhoItIsFor';
import Comparison from '@/components/pages/seo-services/Comparison';
import Pricing from '@/components/pages/seo-services/Pricing';
import Faq from '@/components/pages/seo-services/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-services/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Services: Full-Funnel Search & AI Growth | RankEmpire",
  description: "Explore RankEmpire's comprehensive SEO services: local SEO, technical audits, e-commerce, SaaS, link building, and Answer Engine Optimization (AEO/GEO).",
  alternates: { canonical: "https://www.rankempire.us/seo-services/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Services: Full-Funnel Search & AI Growth | RankEmpire", description: "Explore RankEmpire's comprehensive SEO services: local SEO, technical audits, e-commerce, SaaS, link building, and Answer Engine Optimization (AEO/GEO).", url: "https://www.rankempire.us/seo-services/", images: ["https://www.rankempire.us/img/s-saas.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Services: Full-Funnel Search & AI Growth | RankEmpire", description: "Explore RankEmpire's comprehensive SEO services: local SEO, technical audits, e-commerce, SaaS, link building, and Answer Engine Optimization (AEO/GEO)." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO Services\", \"serviceType\": \"SEO Services\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Explore every SEO service RankEmpire offers: local SEO, technical SEO, e-commerce, SaaS, content, link building, audits, consulting and more.\", \"url\": \"https://www.rankempire.us/seo-services/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can I buy a single SEO service?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many clients start with an SEO audit, technical SEO or link building and add services once they see results.\"}}, {\"@type\": \"Question\", \"name\": \"Which service should I start with?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you are unsure, start with an SEO audit. It shows exactly where you are losing rankings and what to fix first.\"}}, {\"@type\": \"Question\", \"name\": \"Do your services include reporting?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Every service includes monthly reporting and access to a live dashboard.\"}}, {\"@type\": \"Question\", \"name\": \"Which SEO services do I need?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on your business model and where your site is weakest. Local businesses usually benefit most from Google Business Profile and local SEO. Online stores often need technical and category page work. SaaS companies tend to need keyword research and content. An audit or initial review is the best way to decide before committing budget.\"}}, {\"@type\": \"Question\", \"name\": \"Can I buy just one SEO service?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many clients start with a single service, such as an SEO audit, keyword research or link building, and add more later if needed. Standalone services work best when other areas are already in reasonable shape. If a major problem elsewhere limits results, we will tell you before you spend money.\"}}, {\"@type\": \"Question\", \"name\": \"What is included in a monthly SEO services plan?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A monthly plan typically includes technical monitoring, on-page optimization of priority pages, content planning or writing, link building or local work and reporting. The exact mix is set after reviewing your site and goals, and it can shift each month as some areas improve and others become the priority.\"}}, {\"@type\": \"Question\", \"name\": \"How do I know if my SEO services are working?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Look beyond rankings to organic traffic to important pages, leads or sales from organic search and visibility for priority keyword groups. Your provider should show what work was completed each month and connect it to those metrics. Expect gradual change, since many SEO improvements take months to show their full effect.\"}}, {\"@type\": \"Question\", \"name\": \"Are SEO services worth it for small businesses?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For businesses whose customers search online before buying, SEO is often worthwhile because it builds visibility that does not charge per click. Small local businesses can benefit from focused work on their Google Business Profile, reviews and service pages. It is less suitable if you need leads immediately and cannot wait several months.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-services" />
        <Statement />
        <SearchSurfaces slug="seo-services" kind="service" audience="your business" kw="seo services for small business" question="What SEO services does RankEmpire offer?" />
        <Core />
        <Specialist />
        <InDepth />
        <WhyItMatters />
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
