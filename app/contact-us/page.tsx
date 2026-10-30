import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Yc from '@/components/pages/contact-us/Yc';
import Next from '@/components/pages/contact-us/Next';
import Faq from '@/components/pages/contact-us/Faq';
import Pmq from '@/components/sections/Pmq';

export const metadata: Metadata = {
  title: "Contact RankEmpire: Get a Free SEO Audit",
  description: "Contact RankEmpire to get a free SEO audit, ask about pricing or start a project. We reply within one business day.",
  alternates: { canonical: "https://www.rankempire.us/contact-us/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Contact RankEmpire: Get a Free SEO Audit", description: "Contact RankEmpire to get a free SEO audit, ask about pricing or start a project. We reply within one business day.", url: "https://www.rankempire.us/contact-us/", images: ["https://www.rankempire.us/img/contact.webp"] },
  twitter: { card: 'summary_large_image', title: "Contact RankEmpire: Get a Free SEO Audit", description: "Contact RankEmpire to get a free SEO audit, ask about pricing or start a project. We reply within one business day." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Contact Us\", \"item\": \"https://www.rankempire.us/contact-us/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ContactPage\", \"name\": \"Contact RankEmpire\", \"url\": \"https://www.rankempire.us/contact-us/\"}" }} />
      <SkipLink />
      <Preloader />
      <Header active="company" />
      <MobileMenu />
      <main id="main">
        <Yc />
        <Next />
        <Faq />
        <Pmq />
      </main>
      <Footer />
    </>
  );
}
