import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-bakeries/V1';
import Statement from '@/components/pages/seo-for-bakeries/Statement';
import Searches from '@/components/pages/seo-for-bakeries/Searches';
import Challenges from '@/components/pages/seo-for-bakeries/Challenges';
import Pages from '@/components/pages/seo-for-bakeries/Pages';
import Marquee from '@/components/pages/seo-for-bakeries/Marquee';
import Strategy from '@/components/pages/seo-for-bakeries/Strategy';
import Services from '@/components/pages/seo-for-bakeries/Services';
import Cities from '@/components/pages/seo-for-bakeries/Cities';
import Pricing from '@/components/pages/seo-for-bakeries/Pricing';
import Faq from '@/components/pages/seo-for-bakeries/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-bakeries/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Bakeries: More Calls and Customers | RankEmpire",
  description: "SEO for bakeries: rank for custom cake, wedding cake and bread searches with product pages, a photo-rich Google Business Profile, reviews and holiday content.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-bakeries/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Bakeries: More Calls and Customers | RankEmpire", description: "SEO for bakeries: rank for custom cake, wedding cake and bread searches with product pages, a photo-rich Google Business Profile, reviews and holiday content.", url: "https://www.rankempire.us/seo-for-bakeries/", images: ["https://www.rankempire.us/img/i-food.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Bakeries: More Calls and Customers | RankEmpire", description: "SEO for bakeries: rank for custom cake, wedding cake and bread searches with product pages, a photo-rich Google Business Profile, reviews and holiday content." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Bakeries\", \"item\": \"https://www.rankempire.us/seo-for-bakeries/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Bakeries\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Bakeries\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-bakeries/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Our sales are mostly walk in. Do we need a website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"The Business Profile drives many walk ins, but a website supports it by giving Google more information about your products, hosting your custom order details, and capturing occasion searches the profile alone may miss. It also gives you a place to send customers who find you on social media.\"}}, {\"@type\": \"Question\", \"name\": \"Should our menu be a PDF?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A PDF is harder for search engines and phone users to read. Put menu items on a regular web page as text, with short descriptions. You can still offer a printable version, but the main menu should be readable content that helps you rank for specific item searches.\"}}, {\"@type\": \"Question\", \"name\": \"How can we show up for wedding cake searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Create a detailed wedding cake page with photos, tasting information, and service areas, and get listed on venue vendor pages and wedding directories. Ask couples to leave reviews after the event. Wedding buyers research thoroughly, so detailed content and third party mentions carry real weight.\"}}, {\"@type\": \"Question\", \"name\": \"Do social media posts help our Google rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Social posts do not directly raise rankings, but they build awareness that leads to branded searches, reviews, and mentions. Reusing your best social photos on the Business Profile and website is an easy way to keep those channels fresh and consistent.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for bakeries?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most bakerys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for bakeries cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-bakeries" />
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
