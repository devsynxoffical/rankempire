import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/seo-for-chiropractors/V1';
import Statement from '@/components/pages/seo-for-chiropractors/Statement';
import Searches from '@/components/pages/seo-for-chiropractors/Searches';
import Challenges from '@/components/pages/seo-for-chiropractors/Challenges';
import Pages from '@/components/pages/seo-for-chiropractors/Pages';
import Marquee from '@/components/pages/seo-for-chiropractors/Marquee';
import Strategy from '@/components/pages/seo-for-chiropractors/Strategy';
import Services from '@/components/pages/seo-for-chiropractors/Services';
import Cities from '@/components/pages/seo-for-chiropractors/Cities';
import Pricing from '@/components/pages/seo-for-chiropractors/Pricing';
import Faq from '@/components/pages/seo-for-chiropractors/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-chiropractors/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Chiropractors: Rank Higher | RankEmpire",
  description: "SEO for chiropractors that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-chiropractors/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Chiropractors: Rank Higher | RankEmpire", description: "SEO for chiropractors that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-chiropractors/", images: ["https://www.rankempire.com/img/i-med.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Chiropractors: Rank Higher | RankEmpire", description: "SEO for chiropractors that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Chiropractors\", \"item\": \"https://www.rankempire.com/seo-for-chiropractors/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Chiropractors\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Chiropractors\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-chiropractors/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we use patient testimonials on our website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with written authorization from the patient, and the testimonial should reflect a genuine experience without implying guaranteed results. Many clinics add a note that results vary. Keep authorizations on file and avoid sharing health details beyond what the patient explicitly approved.\"}}, {\"@type\": \"Question\", \"name\": \"How should we respond to reviews without breaking HIPAA?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Thank the reviewer in general terms without confirming they are a patient or discussing any treatment. For complaints, invite them to contact the office directly. A short, polite template response that avoids specifics protects privacy while still showing future patients that the clinic is attentive.\"}}, {\"@type\": \"Question\", \"name\": \"Should we target personal injury searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you treat auto injuries and can handle the documentation, a dedicated page helps. These searches are competitive and often involve attorneys, so be clear about your process, insurance handling, and timelines. Honest, detailed content works better than aggressive claims in this space.\"}}, {\"@type\": \"Question\", \"name\": \"Do condition pages really bring in new patients?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They often do, because many people search for their symptom rather than for a chiropractor. A clear page explaining sciatica or tension headaches, how the clinic evaluates them, and when to seek care can bring in patients who did not initially search for chiropractic care at all.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for chiropractors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most chiropractic clinics see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for chiropractors cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
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
