import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/aeo/V0';
import Statement from '@/components/pages/aeo/Statement';
import Deliverables from '@/components/pages/aeo/Deliverables';
import Marquee from '@/components/pages/aeo/Marquee';
import Process from '@/components/pages/aeo/Process';
import WhoItIsFor from '@/components/pages/aeo/WhoItIsFor';
import Pricing from '@/components/pages/aeo/Pricing';
import Faq from '@/components/pages/aeo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/aeo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "AEO: Answer Engine Optimization Services | RankEmpire",
  description: "Answer engine optimization that wins featured snippets, People Also Ask, voice answers and AI answer boxes with structured, quotable content.",
  alternates: { canonical: "https://www.rankempire.com/aeo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "AEO: Answer Engine Optimization Services | RankEmpire", description: "Answer engine optimization that wins featured snippets, People Also Ask, voice answers and AI answer boxes with structured, quotable content.", url: "https://www.rankempire.com/aeo/", images: ["https://www.rankempire.com/img/x-ai.webp"] },
  twitter: { card: 'summary_large_image', title: "AEO: Answer Engine Optimization Services | RankEmpire", description: "Answer engine optimization that wins featured snippets, People Also Ask, voice answers and AI answer boxes with structured, quotable content." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.com/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Answer Engine Optimization\", \"item\": \"https://www.rankempire.com/aeo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Answer Engine Optimization\", \"serviceType\": \"Answer Engine Optimization\", \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Answer engine optimization that wins featured snippets, People Also Ask, voice answers and AI answer boxes with structured, quotable content.\", \"url\": \"https://www.rankempire.com/aeo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is AEO different from SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"AEO is a layer on top of SEO. Rankings still matter, but AEO makes your content the one engines extract and show as the answer.\"}}, {\"@type\": \"Question\", \"name\": \"Does AEO reduce clicks to my site?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Winning the answer increases brand visibility and usually increases qualified clicks, because the answer carries your name and link.\"}}, {\"@type\": \"Question\", \"name\": \"Which schema types do you use?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"FAQPage, HowTo, Speakable, Organization, Product and LocalBusiness, chosen per page.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Statement />
        <Deliverables />
        <Marquee />
        <Process />
        <WhoItIsFor />
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
