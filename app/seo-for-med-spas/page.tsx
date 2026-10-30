import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-med-spas/V2';
import Statement from '@/components/pages/seo-for-med-spas/Statement';
import Searches from '@/components/pages/seo-for-med-spas/Searches';
import Challenges from '@/components/pages/seo-for-med-spas/Challenges';
import Pages from '@/components/pages/seo-for-med-spas/Pages';
import Marquee from '@/components/pages/seo-for-med-spas/Marquee';
import Strategy from '@/components/pages/seo-for-med-spas/Strategy';
import Services from '@/components/pages/seo-for-med-spas/Services';
import Cities from '@/components/pages/seo-for-med-spas/Cities';
import Pricing from '@/components/pages/seo-for-med-spas/Pricing';
import Faq from '@/components/pages/seo-for-med-spas/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-med-spas/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Med Spas: More Calls and Customers | RankEmpire",
  description: "SEO for med spas: rank for Botox, filler, laser and body contouring searches with treatment pages, pricing, galleries, provider credentials and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-med-spas/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Med Spas: More Calls and Customers | RankEmpire", description: "SEO for med spas: rank for Botox, filler, laser and body contouring searches with treatment pages, pricing, galleries, provider credentials and reviews.", url: "https://www.rankempire.us/seo-for-med-spas/", images: ["https://www.rankempire.us/img/i-beauty.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Med Spas: More Calls and Customers | RankEmpire", description: "SEO for med spas: rank for Botox, filler, laser and body contouring searches with treatment pages, pricing, galleries, provider credentials and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Med Spas\", \"item\": \"https://www.rankempire.us/seo-for-med-spas/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Med Spas\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Med Spas\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-med-spas/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we use before and after photos on our website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with written client consent that covers marketing use, and without filters or edits that change the result. Label the treatment and number of sessions shown, and avoid implying guaranteed outcomes. A note that results vary sets realistic expectations and protects the practice if a client compares their own results later.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish treatment prices?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many clients look for pricing before booking and skip med spas that share nothing. Publishing per unit, per syringe, or per session starting prices builds trust, as long as you explain that the final cost depends on the treatment area and the plan set during consultation. Transparency also reduces awkward surprises at checkout.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for specific injectables and brand names?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Create a detailed page for each treatment type, covering candidacy, how many units or syringes are typical, results timeline, and safety information. Mention the products you actually use, following manufacturer trademark guidelines. Add the provider's credentials and consented photos to give the page depth that thin competitor pages lack.\"}}, {\"@type\": \"Question\", \"name\": \"Is social media more important than SEO for a med spa?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Both play different roles. Social media sparks interest and shows personality, while search captures people who are actively ready to book a specific treatment nearby. Many clients discover a med spa on Instagram, then search its name on Google to check reviews and credentials, so both channels need to look consistent and trustworthy.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for med spas?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most med spas see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for med spas cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-med-spas" />
        <Statement />
        <SearchSurfaces slug="seo-for-med-spas" kind="industry" audience="med spas" kw="botox near me" question="who can inject botox in my state" />
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
