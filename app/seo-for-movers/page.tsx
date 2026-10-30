import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-movers/V2';
import Statement from '@/components/pages/seo-for-movers/Statement';
import Searches from '@/components/pages/seo-for-movers/Searches';
import Challenges from '@/components/pages/seo-for-movers/Challenges';
import Pages from '@/components/pages/seo-for-movers/Pages';
import Marquee from '@/components/pages/seo-for-movers/Marquee';
import Strategy from '@/components/pages/seo-for-movers/Strategy';
import Services from '@/components/pages/seo-for-movers/Services';
import Cities from '@/components/pages/seo-for-movers/Cities';
import Pricing from '@/components/pages/seo-for-movers/Pricing';
import Faq from '@/components/pages/seo-for-movers/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-movers/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Moving Companies: Rank Higher | RankEmpire",
  description: "SEO for moving companies: rank for local, long-distance and commercial moving searches with service pages, pricing content, map pack optimization and reviews.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-movers/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Moving Companies: Rank Higher | RankEmpire", description: "SEO for moving companies: rank for local, long-distance and commercial moving searches with service pages, pricing content, map pack optimization and reviews.", url: "https://www.rankempire.us/seo-for-movers/", images: ["https://www.rankempire.us/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Moving Companies: Rank Higher | RankEmpire", description: "SEO for moving companies: rank for local, long-distance and commercial moving searches with service pages, pricing content, map pack optimization and reviews." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Moving Companies\", \"item\": \"https://www.rankempire.us/seo-for-movers/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Moving Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Moving Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-movers/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we display our USDOT number on the website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, if you perform interstate moves. Federal rules require it on advertising, and many customers look it up to check complaint history. Display the number in the footer and on long distance pages. It is a simple trust signal that helps distinguish your company from unregistered operators or brokers.\"}}, {\"@type\": \"Question\", \"name\": \"How do we compete with moving brokers in search results?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Brokers often spend heavily on ads and comparison pages, but customers increasingly want to book directly with the company doing the work. Make it clear that you own your trucks and employ your crews, show real photos, and explain your process. Strong reviews and local partnerships reinforce that message.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth publishing moving price estimates?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Example price ranges and an explanation of what affects cost help customers plan and reduce sticker shock. Avoid presenting examples as fixed quotes. A clear cost guide also positions the company as transparent, which matters in an industry where many customers fear hidden fees.\"}}, {\"@type\": \"Question\", \"name\": \"How do we get more reviews when customers move away?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ask before they leave and follow up quickly with a short, mobile friendly review link. Customers are most willing right after a smooth move. For long distance moves, send the request after delivery, when the customer can confirm everything arrived safely.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for moving companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most moving companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for moving companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-movers" />
        <Statement />
        <SearchSurfaces slug="seo-for-movers" kind="industry" audience="moving companies" kw="movers available this weekend" question="how much do movers cost for 2 bedroom apartment" />
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
