import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-home-builders/V2';
import Statement from '@/components/pages/seo-for-home-builders/Statement';
import Searches from '@/components/pages/seo-for-home-builders/Searches';
import Challenges from '@/components/pages/seo-for-home-builders/Challenges';
import Pages from '@/components/pages/seo-for-home-builders/Pages';
import Marquee from '@/components/pages/seo-for-home-builders/Marquee';
import Strategy from '@/components/pages/seo-for-home-builders/Strategy';
import Services from '@/components/pages/seo-for-home-builders/Services';
import Cities from '@/components/pages/seo-for-home-builders/Cities';
import Pricing from '@/components/pages/seo-for-home-builders/Pricing';
import Faq from '@/components/pages/seo-for-home-builders/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-home-builders/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Home Builders: Rank Higher | RankEmpire",
  description: "SEO for home builders: reach buyers searching communities, floor plans and custom homes with community pages, process content, reviews and local visibility.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-home-builders/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Home Builders: Rank Higher | RankEmpire", description: "SEO for home builders: reach buyers searching communities, floor plans and custom homes with community pages, process content, reviews and local visibility.", url: "https://www.rankempire.us/seo-for-home-builders/", images: ["https://www.rankempire.us/img/i-realestate.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Home Builders: Rank Higher | RankEmpire", description: "SEO for home builders: reach buyers searching communities, floor plans and custom homes with community pages, process content, reviews and local visibility." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Home Builders\", \"item\": \"https://www.rankempire.us/seo-for-home-builders/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Home Builders\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Home Builders\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-home-builders/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should each community have its own Business Profile?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"If a community has a staffed sales office or model home with posted hours, a separate profile can help buyers find it on maps. Avoid profiles for unstaffed lots, since Google guidelines require a real location serving customers. Keep all profiles consistent with the website and sales team information.\"}}, {\"@type\": \"Question\", \"name\": \"How do we keep inventory pages from going stale?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Connect inventory pages to the actual sales system or update them on a fixed schedule. Remove or redirect sold homes promptly, and keep plan pages permanent so they continue ranking. Stale listings frustrate buyers and can hurt trust before they ever visit a model home.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth writing about the building process?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Many buyers have never built a home and search for timelines, design center steps, inspections, and what happens at closing. Clear process content reduces anxiety, answers questions sales staff hear repeatedly, and helps the builder rank for early research searches.\"}}, {\"@type\": \"Question\", \"name\": \"Can we rank for searches in towns where we have no community yet?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It is difficult and often not useful, since searchers want homes they can buy. If you are planning a new community, a coming soon page with genuine information about the location and interest list can build early visibility before construction begins.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for home builders?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most home building companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for home builders cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-home-builders" />
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
