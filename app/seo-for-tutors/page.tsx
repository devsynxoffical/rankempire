import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-tutors/V2';
import Statement from '@/components/pages/seo-for-tutors/Statement';
import Searches from '@/components/pages/seo-for-tutors/Searches';
import Challenges from '@/components/pages/seo-for-tutors/Challenges';
import Pages from '@/components/pages/seo-for-tutors/Pages';
import Marquee from '@/components/pages/seo-for-tutors/Marquee';
import Strategy from '@/components/pages/seo-for-tutors/Strategy';
import Services from '@/components/pages/seo-for-tutors/Services';
import Cities from '@/components/pages/seo-for-tutors/Cities';
import Pricing from '@/components/pages/seo-for-tutors/Pricing';
import Faq from '@/components/pages/seo-for-tutors/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-tutors/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Tutors and Tutoring Centers | RankEmpire",
  description: "SEO for tutors and tutoring centers: rank for subject, SAT and ACT tutoring searches with subject pages, tutor profiles, reviews and map pack optimization.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-tutors/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Tutors and Tutoring Centers | RankEmpire", description: "SEO for tutors and tutoring centers: rank for subject, SAT and ACT tutoring searches with subject pages, tutor profiles, reviews and map pack optimization.", url: "https://www.rankempire.us/seo-for-tutors/", images: ["https://www.rankempire.us/img/i-pro.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Tutors and Tutoring Centers | RankEmpire", description: "SEO for tutors and tutoring centers: rank for subject, SAT and ACT tutoring searches with subject pages, tutor profiles, reviews and map pack optimization." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Tutors and Tutoring Centers\", \"item\": \"https://www.rankempire.us/seo-for-tutors/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Tutors and Tutoring Centers\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Tutors and Tutoring Centers\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-tutors/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we advertise average score increases?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only if you have reliable records that support the claim, and even then describe it carefully and explain how it was measured. Unsupported score claims can mislead parents and create legal risk. Many tutoring businesses focus instead on describing their approach, tutor qualifications, and the experience families can expect.\"}}, {\"@type\": \"Question\", \"name\": \"Should we target online tutoring searches nationwide?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If you offer quality virtual tutoring, national searches can expand your reach. Create strong subject and test prep pages that work for any location, and explain your online format clearly. Keep local pages as well, since many parents still prefer someone nearby for in person sessions.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank before peak test seasons?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Prepare content and pages several months before test dates, update schedules early, and promote upcoming programs on the profile. Rankings take time to build, so pages published right before an exam often miss the families who started planning earlier. Refresh the same pages each year with new test dates instead of creating new ones, so they keep the visibility they have already earned.\"}}, {\"@type\": \"Question\", \"name\": \"Do tutor profiles help with SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Parents search for qualified tutors and want to know who will work with their child. Profiles describing education, experience, and teaching style build trust and give search engines additional content to understand your expertise in specific subjects. Include the subjects and grade levels each tutor covers, and link profiles from the matching subject pages.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for tutors and tutoring centers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most tutoring businesss see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for tutors and tutoring centers cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-tutors" />
        <Statement />
        <SearchSurfaces slug="seo-for-tutors" kind="industry" audience="tutors and tutoring centers" kw="math tutor near me" question="how much does a tutor cost per hour" />
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
