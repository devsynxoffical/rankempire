import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/seo-company/V0';
import Statement from '@/components/pages/seo-company/Statement';
import InDepth from '@/components/pages/seo-company/InDepth';
import WhyItMatters from '@/components/pages/seo-company/WhyItMatters';
import Deliverables from '@/components/pages/seo-company/Deliverables';
import Marquee from '@/components/pages/seo-company/Marquee';
import Monthly from '@/components/pages/seo-company/Monthly';
import Process from '@/components/pages/seo-company/Process';
import WhoItIsFor from '@/components/pages/seo-company/WhoItIsFor';
import Comparison from '@/components/pages/seo-company/Comparison';
import Pricing from '@/components/pages/seo-company/Pricing';
import Trust from '@/components/sections/Trust';
import Faq from '@/components/pages/seo-company/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-company/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company That Builds Rankings That Compound | RankEmpire",
  description: "RankEmpire is a full-service SEO company for local businesses, e-commerce brands and SaaS teams. Technical SEO, content.",
  alternates: { canonical: "https://www.rankempire.us/seo-company/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company That Builds Rankings That Compound | RankEmpire", description: "RankEmpire is a full-service SEO company for local businesses, e-commerce brands and SaaS teams. Technical SEO, content.", url: "https://www.rankempire.us/seo-company/", images: ["https://www.rankempire.us/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company That Builds Rankings That Compound | RankEmpire", description: "RankEmpire is a full-service SEO company for local businesses, e-commerce brands and SaaS teams. Technical SEO, content." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Company\", \"item\": \"https://www.rankempire.us/seo-company/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO Company\", \"serviceType\": \"SEO Company\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is a full-service SEO company for local businesses, e-commerce brands and SaaS teams. Technical SEO, content, links and Google Business Profile under one roof.\", \"url\": \"https://www.rankempire.us/seo-company/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What makes RankEmpire different from other SEO companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We keep the whole job in one team. The people who audit your site are the same people who fix it, write for it and report on it, so nothing gets lost between agencies or freelancers.\"}}, {\"@type\": \"Question\", \"name\": \"Do you lock clients into long contracts?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Plans run month to month after an initial 3 month onboarding period, because SEO needs that long to show direction.\"}}, {\"@type\": \"Question\", \"name\": \"Who owns the work?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"You do. Every page, account, report and piece of content we create belongs to your business from day one.\"}}, {\"@type\": \"Question\", \"name\": \"How much does an SEO company cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Pricing depends on scope, competition and how much content or technical work is needed. Local businesses in smaller markets usually need less monthly work than a national e-commerce store or a SaaS company competing for software terms. Ask any agency to show exactly which tasks the retainer covers each month, so you can compare proposals on work delivered rather than headline price.\"}}, {\"@type\": \"Question\", \"name\": \"How long does it take to see results from an SEO company?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Technical fixes and on-page improvements can show movement within weeks once Google recrawls the pages. Building authority and ranking for competitive terms usually takes several months of consistent work. The timeline depends on your site's current state, how strong competitors are and how quickly changes get implemented. Be cautious of anyone who promises a specific ranking by a specific date.\"}}, {\"@type\": \"Question\", \"name\": \"Can an SEO company guarantee first page rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No honest SEO company can guarantee rankings, because Google controls its algorithm and results change constantly. What an agency can commit to is a clear scope of work, transparent reporting and sound methods that follow Google's guidelines. Guarantees are often a warning sign of shortcuts such as low quality link schemes that can lead to penalties.\"}}, {\"@type\": \"Question\", \"name\": \"What should I ask before hiring an SEO company?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ask how they will diagnose your site, what they deliver each month, who does the work, how they build links and how they report results. Request examples of their process and ask what they need from you, such as developer access or approvals. A good agency will also tell you when SEO is not the right channel for a goal.\"}}, {\"@type\": \"Question\", \"name\": \"Do I need to sign a long-term SEO contract?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many agencies use month to month agreements or short initial terms. SEO does need several months to show its full effect, so a commitment of at least a few months is reasonable. Make sure the contract states who owns the content, accounts and data created, and what happens to them if you end the engagement.\"}}]}" }} />
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
        <Trust />
        <Faq />
        <Pmq />
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
