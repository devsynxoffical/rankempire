import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-barbers/V2';
import Statement from '@/components/pages/seo-for-barbers/Statement';
import Searches from '@/components/pages/seo-for-barbers/Searches';
import Challenges from '@/components/pages/seo-for-barbers/Challenges';
import Pages from '@/components/pages/seo-for-barbers/Pages';
import Marquee from '@/components/pages/seo-for-barbers/Marquee';
import Strategy from '@/components/pages/seo-for-barbers/Strategy';
import Services from '@/components/pages/seo-for-barbers/Services';
import Cities from '@/components/pages/seo-for-barbers/Cities';
import Pricing from '@/components/pages/seo-for-barbers/Pricing';
import Faq from '@/components/pages/seo-for-barbers/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-barbers/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Barbershops: More Calls and Customers | RankEmpire",
  description: "SEO for barbershops: win barber near me searches with Google Business Profile optimization, photos, booking links, reviews and a fast services page.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-barbers/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Barbershops: More Calls and Customers | RankEmpire", description: "SEO for barbershops: win barber near me searches with Google Business Profile optimization, photos, booking links, reviews and a fast services page.", url: "https://www.rankempire.us/seo-for-barbers/", images: ["https://www.rankempire.us/img/i-beauty.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Barbershops: More Calls and Customers | RankEmpire", description: "SEO for barbershops: win barber near me searches with Google Business Profile optimization, photos, booking links, reviews and a fast services page." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Barbershops\", \"item\": \"https://www.rankempire.us/seo-for-barbers/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Barbershops\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Barbershops\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-barbers/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Do we need a website if we have Instagram and a booking app?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Instagram and booking apps help, but a website gives Google structured information about your services, barbers, and location. It can rank for searches the profile misses and acts as a stable home if an app or platform changes. It also lets you link everything together in one place.\"}}, {\"@type\": \"Question\", \"name\": \"Should each barber have their own Google profile?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Generally no. Google guidelines favor one profile for the shop location. Individual practitioners can sometimes have listings, but this often splits reviews and confuses customers. Barber pages on the shop's website, plus reviews that name barbers, usually achieve the same visibility without the downside.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for walk in barber searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Mention walk ins clearly on the profile, website, and booking page, and keep hours accurate. Reviews that mention quick walk in service help as well. Google matches these searches based on what it can find about your shop, so state your policy plainly and repeatedly.\"}}, {\"@type\": \"Question\", \"name\": \"Can we rank in a nearby neighborhood where many clients live?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map rankings depend heavily on proximity, so ranking far from your address is difficult. You can still attract those clients through organic results by creating useful content about serving that area, earning local mentions there, and encouraging reviews from clients who travel from that neighborhood.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for barbershops?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most barbershops see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for barbershops cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-barbers" />
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
