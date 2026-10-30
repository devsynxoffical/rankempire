import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-luxury-wedding-businesses/V0';
import Statement from '@/components/pages/seo-for-luxury-wedding-businesses/Statement';
import Searches from '@/components/pages/seo-for-luxury-wedding-businesses/Searches';
import Challenges from '@/components/pages/seo-for-luxury-wedding-businesses/Challenges';
import Pages from '@/components/pages/seo-for-luxury-wedding-businesses/Pages';
import Marquee from '@/components/pages/seo-for-luxury-wedding-businesses/Marquee';
import Strategy from '@/components/pages/seo-for-luxury-wedding-businesses/Strategy';
import Services from '@/components/pages/seo-for-luxury-wedding-businesses/Services';
import Cities from '@/components/pages/seo-for-luxury-wedding-businesses/Cities';
import Pricing from '@/components/pages/seo-for-luxury-wedding-businesses/Pricing';
import Faq from '@/components/pages/seo-for-luxury-wedding-businesses/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-luxury-wedding-businesses/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Luxury Wedding Businesses | RankEmpire",
  description: "SEO for luxury wedding planners, designers, florists and photographers: reach high-budget couples with portfolio pages, editorial features and AI visibility.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-luxury-wedding-businesses/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Luxury Wedding Businesses | RankEmpire", description: "SEO for luxury wedding planners, designers, florists and photographers: reach high-budget couples with portfolio pages, editorial features and AI visibility.", url: "https://www.rankempire.us/seo-for-luxury-wedding-businesses/", images: ["https://www.rankempire.us/img/v3-ring.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Luxury Wedding Businesses | RankEmpire", description: "SEO for luxury wedding planners, designers, florists and photographers: reach high-budget couples with portfolio pages, editorial features and AI visibility." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Luxury Wedding Businesses\", \"item\": \"https://www.rankempire.us/seo-for-luxury-wedding-businesses/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Luxury Wedding Businesses\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Luxury Wedding Businesses\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-luxury-wedding-businesses/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Is SEO worth it for a luxury wedding business with few inquiries a year?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, because each inquiry is worth so much. Ranking for a handful of specific searches, such as luxury wedding planner in your city or destination planner for your region, can be worth more than any other channel.\"}}, {\"@type\": \"Question\", \"name\": \"Should luxury studios publish pricing?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Publishing a starting investment helps. It filters inquiries below your level, tells couples you are transparent and gives search engines and AI assistants a concrete figure to cite when asked what a luxury planner costs.\"}}, {\"@type\": \"Question\", \"name\": \"How do portfolio pages help SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Each featured wedding page can rank for its venue, style and destination, proves experience and earns links when vendors and venues share it. Galleries alone do not rank; pages with written detail do.\"}}, {\"@type\": \"Question\", \"name\": \"How important are editorial features?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Very. Luxury couples trust publications and venue lists, and AI assistants rely on the same sources. A feature in a respected wedding publication is both a referral and an authority signal.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for luxury wedding businesses?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Portfolio and venue searches often move within three months. Competitive city and destination terms take six months or more, because they depend on editorial authority.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for luxury wedding businesses cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most luxury studios start on our Pro plan, because portfolio, destination and editorial work are central. We recommend a plan after a free audit of your market.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-luxury-wedding-businesses" />
        <Statement />
        <SearchSurfaces slug="seo-for-luxury-wedding-businesses" kind="industry" audience="luxury wedding businesses" kw="luxury wedding planner near me" question="cost of a luxury wedding" />
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
