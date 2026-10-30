import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-private-jet-charter/V0';
import Statement from '@/components/pages/seo-for-private-jet-charter/Statement';
import Searches from '@/components/pages/seo-for-private-jet-charter/Searches';
import Challenges from '@/components/pages/seo-for-private-jet-charter/Challenges';
import Pages from '@/components/pages/seo-for-private-jet-charter/Pages';
import Marquee from '@/components/pages/seo-for-private-jet-charter/Marquee';
import Strategy from '@/components/pages/seo-for-private-jet-charter/Strategy';
import Services from '@/components/pages/seo-for-private-jet-charter/Services';
import Cities from '@/components/pages/seo-for-private-jet-charter/Cities';
import Pricing from '@/components/pages/seo-for-private-jet-charter/Pricing';
import Faq from '@/components/pages/seo-for-private-jet-charter/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-private-jet-charter/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Private Jet Charter Companies | RankEmpire",
  description: "SEO for private jet charter companies: rank for charter, empty leg and route searches with route pages, aircraft pages, trust signals and AI search visibility.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-private-jet-charter/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Private Jet Charter Companies | RankEmpire", description: "SEO for private jet charter companies: rank for charter, empty leg and route searches with route pages, aircraft pages, trust signals and AI search visibility.", url: "https://www.rankempire.us/seo-for-private-jet-charter/", images: ["https://www.rankempire.us/img/i-auto.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Private Jet Charter Companies | RankEmpire", description: "SEO for private jet charter companies: rank for charter, empty leg and route searches with route pages, aircraft pages, trust signals and AI search visibility." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Private Jet Charter Companies\", \"item\": \"https://www.rankempire.us/seo-for-private-jet-charter/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Private Jet Charter Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Private Jet Charter Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-private-jet-charter/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can a small charter operator outrank the big marketplaces?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"On broad terms like private jet charter, rarely at first. On specific routes, airports and aircraft types, yes, because marketplaces publish thin pages for thousands of routes. A detailed page for the 20 routes you actually fly most often can outrank them within a few months.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish prices on our website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Publish ranges, not quotes. Hourly ranges by aircraft category and typical price ranges for popular routes help buyers self-qualify and give search engines and AI assistants specific numbers to cite. Explain what changes the final price so the range is trusted.\"}}, {\"@type\": \"Question\", \"name\": \"Do empty leg pages help SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Empty leg searches are frequent and urgent, and a page that is updated regularly gives search engines a reason to crawl your site often. Keep expired legs off the list and explain the booking rules clearly.\"}}, {\"@type\": \"Question\", \"name\": \"How do AI assistants choose charter companies to recommend?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They lean on sources that describe operators consistently: aviation directories, rating agencies, travel publications and your own site. Clear safety information, transparent pricing and mentions in those sources raise the odds of being named.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for private jet charter companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Route and airport pages often show movement within 60 to 90 days because competition is thin. Competitive national terms take six months or more and depend on authority from aviation and luxury travel sites.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for private jet charter companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Programs usually start at our Pro level because route and aircraft pages are the core of the work. We recommend a plan after a free audit of your routes, competitors and current visibility.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-private-jet-charter" />
        <Statement />
        <SearchSurfaces slug="seo-for-private-jet-charter" kind="industry" audience="private jet charter companies" kw="private jet charter near me" question="private jet cost per hour" />
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
