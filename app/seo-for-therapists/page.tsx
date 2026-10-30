import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-therapists/V0';
import Statement from '@/components/pages/seo-for-therapists/Statement';
import Searches from '@/components/pages/seo-for-therapists/Searches';
import Challenges from '@/components/pages/seo-for-therapists/Challenges';
import Pages from '@/components/pages/seo-for-therapists/Pages';
import Marquee from '@/components/pages/seo-for-therapists/Marquee';
import Strategy from '@/components/pages/seo-for-therapists/Strategy';
import Services from '@/components/pages/seo-for-therapists/Services';
import Cities from '@/components/pages/seo-for-therapists/Cities';
import Pricing from '@/components/pages/seo-for-therapists/Pricing';
import Faq from '@/components/pages/seo-for-therapists/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-therapists/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Therapists and Counselors: Rank Higher | RankEmpire",
  description: "SEO for therapists and counselors: reach clients searching by concern, insurance and telehealth with concern pages, profile optimization and compliant reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-therapists/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Therapists and Counselors: Rank Higher | RankEmpire", description: "SEO for therapists and counselors: reach clients searching by concern, insurance and telehealth with concern pages, profile optimization and compliant reviews.", url: "https://www.rankempire.us/seo-for-therapists/", images: ["https://www.rankempire.us/img/i-med.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Therapists and Counselors: Rank Higher | RankEmpire", description: "SEO for therapists and counselors: reach clients searching by concern, insurance and telehealth with concern pages, profile optimization and compliant reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Therapists and Counselors\", \"item\": \"https://www.rankempire.us/seo-for-therapists/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Therapists and Counselors\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Therapists and Counselors\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-therapists/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we ask clients for Google reviews?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many professional codes, including those followed by psychologists and counselors, discourage soliciting testimonials from clients because of the power dynamic and confidentiality concerns. Check your licensing board and association guidance. Most practices focus on credentials, helpful content, and directory profiles instead of review campaigns.\"}}, {\"@type\": \"Question\", \"name\": \"How should we respond to an online review from a client?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Responding can confirm a therapeutic relationship, which raises confidentiality concerns. Many practices choose not to respond, or reply with a general statement about their commitment to care without referencing any individual. If a review contains false or harmful claims, consider consulting your professional association.\"}}, {\"@type\": \"Question\", \"name\": \"Should we list fees on our website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, transparency helps people decide whether they can afford care before reaching out. List session rates, insurance accepted, sliding scale availability, and superbill options. Clear fee information reduces hesitation and saves time on calls with people who would not be a fit.\"}}, {\"@type\": \"Question\", \"name\": \"Is telehealth content worth creating?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, if your clinicians provide online sessions. Many people search specifically for virtual therapy. Explain how sessions work, privacy practices, and which states you are licensed in. This helps reach clients outside your immediate area while staying within licensing rules.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for therapists and counselors?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most therapy practices see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for therapists and counselors cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-therapists" />
        <Statement />
        <SearchSurfaces slug="seo-for-therapists" kind="industry" audience="therapists and counselors" kw="therapist near me accepting new clients" question="how much does therapy cost without insurance" />
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
