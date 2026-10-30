import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-locksmiths/V0';
import Statement from '@/components/pages/seo-for-locksmiths/Statement';
import Searches from '@/components/pages/seo-for-locksmiths/Searches';
import Challenges from '@/components/pages/seo-for-locksmiths/Challenges';
import Pages from '@/components/pages/seo-for-locksmiths/Pages';
import Marquee from '@/components/pages/seo-for-locksmiths/Marquee';
import Strategy from '@/components/pages/seo-for-locksmiths/Strategy';
import Services from '@/components/pages/seo-for-locksmiths/Services';
import Cities from '@/components/pages/seo-for-locksmiths/Cities';
import Pricing from '@/components/pages/seo-for-locksmiths/Pricing';
import Faq from '@/components/pages/seo-for-locksmiths/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-locksmiths/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Locksmiths: More Calls and Customers | RankEmpire",
  description: "SEO for locksmiths: win lockout and rekey searches in a spam-heavy map pack with a verified profile, consistent citations and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-locksmiths/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Locksmiths: More Calls and Customers | RankEmpire", description: "SEO for locksmiths: win lockout and rekey searches in a spam-heavy map pack with a verified profile, consistent citations and reviews.", url: "https://www.rankempire.us/seo-for-locksmiths/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Locksmiths: More Calls and Customers | RankEmpire", description: "SEO for locksmiths: win lockout and rekey searches in a spam-heavy map pack with a verified profile, consistent citations and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Locksmiths\", \"item\": \"https://www.rankempire.us/seo-for-locksmiths/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Locksmiths\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Locksmiths\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-locksmiths/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Why was our locksmith Business Profile suspended?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Locksmith listings get extra scrutiny because of widespread fake listings. Suspensions often follow name changes, address issues, or keyword stuffing in the business name. Make sure the profile reflects your legal business name, real location or service area, and complete Google's advanced verification if requested.\"}}, {\"@type\": \"Question\", \"name\": \"How do we compete with fake listings in our area?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Report clearly fake listings through Google's tools, and focus on making your own listing as complete and trustworthy as possible. Real photos, consistent reviews, accurate details, and a website with genuine local content help customers and Google tell the difference.\"}}, {\"@type\": \"Question\", \"name\": \"Should we show prices on our website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Transparent starting prices or service call fees help counter the bait and switch reputation that affects the industry. Explain what can increase the cost, such as high security locks or after hours service. Clear expectations reduce disputes and build trust before you arrive.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth targeting car key searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, if you have the equipment to program keys and fobs for common vehicles. These searches are urgent and valuable. Create a page listing makes you service and explain the process, so drivers know you can help before they call.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for locksmiths?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most locksmith businesss see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for locksmiths cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-locksmiths" />
        <Statement />
        <SearchSurfaces slug="seo-for-locksmiths" kind="industry" audience="locksmiths" kw="locked out of car near me" question="how much does a locksmith charge for lockout" />
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
