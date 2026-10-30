import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import PersonSchema from '@/components/seo/PersonSchema';
import V0 from '@/components/pages/our-team/V0';
import Fd5 from '@/components/sections/Fd5';
import Xtm from '@/components/pages/our-team/Xtm';
import Rules from '@/components/pages/our-team/Rules';
import Pmq from '@/components/sections/Pmq';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Meet Our Team of SEO & AI Specialists | RankEmpire",
  description: "Meet the RankEmpire team of SEO strategists, technical specialists and content writers who run every client program.",
  alternates: { canonical: "https://www.rankempire.us/our-team/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Meet Our Team of SEO & AI Specialists | RankEmpire", description: "Meet the RankEmpire team of SEO strategists, technical specialists and content writers who run every client program.", url: "https://www.rankempire.us/our-team/", images: ["https://www.rankempire.us/img/team.webp"] },
  twitter: { card: 'summary_large_image', title: "Meet Our Team of SEO & AI Specialists | RankEmpire", description: "Meet the RankEmpire team of SEO strategists, technical specialists and content writers who run every client program." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Our Team\", \"item\": \"https://www.rankempire.us/our-team/\"}]}" }} />
      <PersonSchema />
      <SkipLink />
      <Preloader />
      <Header active="company" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <Fd5 />
        <Xtm />
        <Rules />
        <Pmq />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
