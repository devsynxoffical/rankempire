import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/seo-for-plastic-surgeons/V0';
import Statement from '@/components/pages/seo-for-plastic-surgeons/Statement';
import Searches from '@/components/pages/seo-for-plastic-surgeons/Searches';
import Challenges from '@/components/pages/seo-for-plastic-surgeons/Challenges';
import Pages from '@/components/pages/seo-for-plastic-surgeons/Pages';
import Marquee from '@/components/pages/seo-for-plastic-surgeons/Marquee';
import Strategy from '@/components/pages/seo-for-plastic-surgeons/Strategy';
import Services from '@/components/pages/seo-for-plastic-surgeons/Services';
import Cities from '@/components/pages/seo-for-plastic-surgeons/Cities';
import Pricing from '@/components/pages/seo-for-plastic-surgeons/Pricing';
import Faq from '@/components/pages/seo-for-plastic-surgeons/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-plastic-surgeons/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Plastic Surgeons: Rank Higher | RankEmpire",
  description: "SEO for plastic surgeons that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-plastic-surgeons/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Plastic Surgeons: Rank Higher | RankEmpire", description: "SEO for plastic surgeons that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-plastic-surgeons/", images: ["https://www.rankempire.com/img/i-med.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Plastic Surgeons: Rank Higher | RankEmpire", description: "SEO for plastic surgeons that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Plastic Surgeons\", \"item\": \"https://www.rankempire.com/seo-for-plastic-surgeons/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Plastic Surgeons\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Plastic Surgeons\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-plastic-surgeons/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we post before and after photos on our website and social media?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with written authorization that specifically covers marketing use on each channel. Photos should be unretouched in ways that change results, taken in consistent lighting and angles, and labeled with the procedure. Many practices also explain that individual results vary, which supports both compliance and realistic expectations.\"}}, {\"@type\": \"Question\", \"name\": \"Should we list prices for procedures?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Patients research cost early, and practices that share ranges often receive better qualified consultation requests. Explain what is included, such as surgeon fee, anesthesia, facility, and garments, and what changes the total. Avoid quoting fixed prices online, since every plan depends on the individual consultation.\"}}, {\"@type\": \"Question\", \"name\": \"How do we compete with practices in bigger cities?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Patients will travel for a surgeon they trust, but many prefer a qualified surgeon closer to home for follow up visits. Emphasize credentials, consistent galleries, and personal care, and build pages that address local patients directly. Detailed procedure content often matters more than market size.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth creating content for procedures we rarely perform?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Generally no. Focus content on the procedures you perform often and want to grow, where you can show real galleries and genuine expertise. Thin pages for rare procedures add little value and may give patients the wrong impression about your areas of focus.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for plastic surgeons?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most plastic surgery practices see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for plastic surgeons cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Statement />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
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
