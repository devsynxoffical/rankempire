import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import ProofStrip from '@/components/sections/ProofStrip';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-doctors/V1';
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
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-doctors/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Doctor & Medical Practice SEO Services | RankEmpire" },
  description: "Doctor SEO services and medical practice search engine optimization: provider pages, treatment content, Google Maps per office. Free audit.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-doctors/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Doctor & Medical Practice SEO Services | RankEmpire", description: "Doctor SEO services and medical practice search engine optimization: provider pages, treatment content, Google Maps per office. Free audit.", url: "https://www.rankempire.us/seo-for-doctors/", images: ["https://www.rankempire.us/img/i-med.webp"] },
  twitter: { card: 'summary_large_image', title: "Doctor & Medical Practice SEO Services | RankEmpire", description: "Doctor SEO services and medical practice search engine optimization: provider pages, treatment content, Google Maps per office. Free audit." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Doctors and Medical Practices\", \"item\": \"https://www.rankempire.us/seo-for-doctors/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Doctors and Medical Practices\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Doctors and Medical Practices\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-doctors/\", \"description\": \"Medical practice SEO brings in patients searching by specialty, condition, procedure and insurance accepted. It requires accurate provider and location listings, condition and treatment pages reviewed for medical accuracy, strong reviews with compliant responses and a map pack presence per office. RankEmpire builds programs that respect healthcare advertising rules.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we use website tracking pixels on our patient pages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Tracking tools on pages involving appointments or health conditions can raise HIPAA concerns, since they may transmit information to third parties. Review your analytics setup with your compliance team, limit tracking on sensitive pages, and use vendors willing to sign business associate agreements where required.\"}}, {\"@type\": \"Question\", \"name\": \"Should each doctor have their own Google Business Profile?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google allows individual practitioner profiles, which can help patients searching by name. However, they need careful management to avoid duplicates and outdated information when providers leave. Many practices use provider profiles alongside the main practice listing and keep both accurate and consistent.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank when large health systems dominate results?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Focus on what makes the practice accessible and personal, such as same week appointments, specific services, and provider expertise. Detailed provider and condition pages, strong reviews, and accurate listings can help independent practices appear for local searches even near large hospital networks.\"}}, {\"@type\": \"Question\", \"name\": \"Can we write health content without making medical claims?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Educational content explaining conditions, prevention, and when to see a doctor is valuable. Keep it accurate, reviewed by a clinician, dated, and general rather than individualized. Encourage readers to schedule an appointment for personal advice instead of promising specific outcomes.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for doctors and medical practices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most medical practices see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for doctors and medical practices cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-doctors" />
        <ProofStrip context="medical practice SEO" />
        <Statement />
        <SearchSurfaces slug="seo-for-doctors" kind="industry" audience="doctors and medical practices" kw="primary care doctor accepting new patients" question="annual physical exam cost without insurance" />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
        <DeepGuide slug="seo-for-doctors" />
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
