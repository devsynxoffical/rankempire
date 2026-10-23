import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-doctors/Hero';
import Statement from '@/components/pages/seo-for-doctors/Statement';
import Searches from '@/components/pages/seo-for-doctors/Searches';
import Challenges from '@/components/pages/seo-for-doctors/Challenges';
import Pages from '@/components/pages/seo-for-doctors/Pages';
import Marquee from '@/components/pages/seo-for-doctors/Marquee';
import Strategy from '@/components/pages/seo-for-doctors/Strategy';
import Services from '@/components/pages/seo-for-doctors/Services';
import Cities from '@/components/pages/seo-for-doctors/Cities';
import Pricing from '@/components/pages/seo-for-doctors/Pricing';
import Faq from '@/components/pages/seo-for-doctors/Faq';
import Related from '@/components/pages/seo-for-doctors/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Doctors and Medical Practices | RankEmpire",
  description: "SEO for doctors and medical practices that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-doctors/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Doctors and Medical Practices | RankEmpire", description: "SEO for doctors and medical practices that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.com/seo-for-doctors/", images: ["https://www.rankempire.com/img/i-med.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Doctors and Medical Practices | RankEmpire", description: "SEO for doctors and medical practices that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Doctors and Medical Practices\", \"item\": \"https://www.rankempire.com/seo-for-doctors/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Doctors and Medical Practices\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Doctors and Medical Practices\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-doctors/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we use website tracking pixels on our patient pages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Tracking tools on pages involving appointments or health conditions can raise HIPAA concerns, since they may transmit information to third parties. Review your analytics setup with your compliance team, limit tracking on sensitive pages, and use vendors willing to sign business associate agreements where required.\"}}, {\"@type\": \"Question\", \"name\": \"Should each doctor have their own Google Business Profile?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google allows individual practitioner profiles, which can help patients searching by name. However, they need careful management to avoid duplicates and outdated information when providers leave. Many practices use provider profiles alongside the main practice listing and keep both accurate and consistent.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank when large health systems dominate results?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Focus on what makes the practice accessible and personal, such as same week appointments, specific services, and provider expertise. Detailed provider and condition pages, strong reviews, and accurate listings can help independent practices appear for local searches even near large hospital networks.\"}}, {\"@type\": \"Question\", \"name\": \"Can we write health content without making medical claims?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Educational content explaining conditions, prevention, and when to see a doctor is valuable. Keep it accurate, reviewed by a clinician, dated, and general rather than individualized. Encourage readers to schedule an appointment for personal advice instead of promising specific outcomes.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for doctors and medical practices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most medical practices see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for doctors and medical practices cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <Hero />
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
        <Related />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
