import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-consulting/Hero';
import Statement from '@/components/pages/seo-consulting/Statement';
import InDepth from '@/components/pages/seo-consulting/InDepth';
import WhyItMatters from '@/components/pages/seo-consulting/WhyItMatters';
import Deliverables from '@/components/pages/seo-consulting/Deliverables';
import Marquee from '@/components/pages/seo-consulting/Marquee';
import Monthly from '@/components/pages/seo-consulting/Monthly';
import Process from '@/components/pages/seo-consulting/Process';
import WhoItIsFor from '@/components/pages/seo-consulting/WhoItIsFor';
import Comparison from '@/components/pages/seo-consulting/Comparison';
import Pricing from '@/components/pages/seo-consulting/Pricing';
import Faq from '@/components/pages/seo-consulting/Faq';
import Related from '@/components/pages/seo-consulting/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Consulting for In-House Teams and Founders | RankEmpire",
  description: "SEO consulting for teams that want expert guidance: strategy sessions, audits, migration planning, training and ongoing advisory.",
  alternates: { canonical: "https://www.rankempire.com/seo-consulting/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Consulting for In-House Teams and Founders | RankEmpire", description: "SEO consulting for teams that want expert guidance: strategy sessions, audits, migration planning, training and ongoing advisory.", url: "https://www.rankempire.com/seo-consulting/", images: ["https://www.rankempire.com/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Consulting for In-House Teams and Founders | RankEmpire", description: "SEO consulting for teams that want expert guidance: strategy sessions, audits, migration planning, training and ongoing advisory." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Consulting\", \"item\": \"https://www.rankempire.com/seo-consulting/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO Consulting\", \"serviceType\": \"SEO Consulting\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"SEO consulting for teams that want expert guidance: strategy sessions, audits, migration planning, training and ongoing advisory.\", \"url\": \"https://www.rankempire.com/seo-consulting/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How is consulting billed?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Hourly for one-off sessions, or as a monthly advisory retainer.\"}}, {\"@type\": \"Question\", \"name\": \"Can consulting turn into a full engagement?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, though many clients keep work in-house and use us for guidance only.\"}}, {\"@type\": \"Question\", \"name\": \"What is the difference between an SEO consultant and an SEO agency?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A consultant mainly advises, diagnoses and trains, while your team or other vendors do the implementation. An agency typically handles strategy and hands on work such as content, technical fixes and link building. Some businesses use both, with a consultant overseeing strategy and an agency or in house team executing it.\"}}, {\"@type\": \"Question\", \"name\": \"How are SEO consulting engagements priced?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Consulting is usually priced as an hourly rate, a fixed fee for a defined project such as a migration review, or a monthly advisory retainer with a set number of hours or calls. The right model depends on whether you need help with one decision or ongoing guidance over several months.\"}}, {\"@type\": \"Question\", \"name\": \"Can an SEO consultant help after a Google algorithm update?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. A consultant can compare the timing of traffic changes with known updates, identify which pages and query types lost visibility and assess whether content quality, technical issues or competitor changes are involved. Recovery usually involves improving content and site quality rather than quick fixes, and can take time.\"}}, {\"@type\": \"Question\", \"name\": \"Do you offer one time SEO consultations?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. A one time session works well for specific questions, such as reviewing a redesign plan, evaluating an agency proposal or getting direction on where to start. We review relevant data beforehand so the session focuses on your situation and ends with clear next steps.\"}}, {\"@type\": \"Question\", \"name\": \"What should I prepare before an SEO consultation?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Share access to Google Search Console and Google Analytics, a summary of your business goals and target customers, a list of main competitors and any recent site changes or past SEO work. Write down your most important questions. The more context available in advance, the more specific the advice will be.\"}}]}" }} />
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
