import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-wedding-venues/V0';
import Statement from '@/components/pages/seo-for-wedding-venues/Statement';
import Searches from '@/components/pages/seo-for-wedding-venues/Searches';
import Challenges from '@/components/pages/seo-for-wedding-venues/Challenges';
import Pages from '@/components/pages/seo-for-wedding-venues/Pages';
import Marquee from '@/components/pages/seo-for-wedding-venues/Marquee';
import Strategy from '@/components/pages/seo-for-wedding-venues/Strategy';
import Services from '@/components/pages/seo-for-wedding-venues/Services';
import Cities from '@/components/pages/seo-for-wedding-venues/Cities';
import Pricing from '@/components/pages/seo-for-wedding-venues/Pricing';
import Faq from '@/components/pages/seo-for-wedding-venues/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-wedding-venues/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Wedding Venues & Event Companies | RankEmpire",
  description: "SEO for wedding venues and event companies: win venue, capacity and pricing searches with map pack optimization, space pages, real events and AI visibility.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-wedding-venues/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Wedding Venues & Event Companies | RankEmpire", description: "SEO for wedding venues and event companies: win venue, capacity and pricing searches with map pack optimization, space pages, real events and AI visibility.", url: "https://www.rankempire.us/seo-for-wedding-venues/", images: ["https://www.rankempire.us/img/v3-ring.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Wedding Venues & Event Companies | RankEmpire", description: "SEO for wedding venues and event companies: win venue, capacity and pricing searches with map pack optimization, space pages, real events and AI visibility." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Wedding Venues & Event Companies\", \"item\": \"https://www.rankempire.us/seo-for-wedding-venues/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Wedding Venues & Event Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Wedding Venues & Event Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-wedding-venues/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can a wedding venue outrank the big venue directories?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For broad terms like wedding venues, directories usually lead. For your area, style and capacity, such as barn wedding venue near a specific town or event space for 200 guests, a venue with detailed pages and a strong profile can rank above them.\"}}, {\"@type\": \"Question\", \"name\": \"Should venues publish prices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Publish starting prices and minimums by season. Couples filter heavily on budget, so transparent guidance improves tour quality and gives search engines and AI assistants specific numbers to show.\"}}, {\"@type\": \"Question\", \"name\": \"Do real wedding pages help a venue?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. They show the space in use, rank for searches that combine your venue name with styles and seasons, and earn links when photographers and planners share them.\"}}, {\"@type\": \"Question\", \"name\": \"Should corporate events have separate pages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Corporate planners search by capacity, AV and catering, not by wedding style. Separate pages for corporate events, galas and holiday parties capture a second revenue stream outside wedding season.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for wedding venues?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map pack and branded searches often improve within 60 to 90 days. Competitive style and city searches take four to six months, depending on reviews, content and vendor links.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for wedding venues and event companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month for one venue; multi-venue groups usually need the Multi-location plan. We recommend a plan after a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-wedding-venues" />
        <Statement />
        <SearchSurfaces slug="seo-for-wedding-venues" kind="industry" audience="wedding venues and event companies" kw="wedding venues near me" question="wedding venue cost" />
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
