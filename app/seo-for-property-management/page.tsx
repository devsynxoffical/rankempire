import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/seo-for-property-management/V1';
import Statement from '@/components/pages/seo-for-property-management/Statement';
import Searches from '@/components/pages/seo-for-property-management/Searches';
import Challenges from '@/components/pages/seo-for-property-management/Challenges';
import Pages from '@/components/pages/seo-for-property-management/Pages';
import Marquee from '@/components/pages/seo-for-property-management/Marquee';
import Strategy from '@/components/pages/seo-for-property-management/Strategy';
import Services from '@/components/pages/seo-for-property-management/Services';
import Cities from '@/components/pages/seo-for-property-management/Cities';
import Pricing from '@/components/pages/seo-for-property-management/Pricing';
import Faq from '@/components/pages/seo-for-property-management/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-property-management/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Property Management Companies | RankEmpire",
  description: "SEO for property management companies: win owner searches by property type and city with service pages, fee transparency, reviews and local rankings.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-property-management/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Property Management Companies | RankEmpire", description: "SEO for property management companies: win owner searches by property type and city with service pages, fee transparency, reviews and local rankings.", url: "https://www.rankempire.us/seo-for-property-management/", images: ["https://www.rankempire.us/img/i-realestate.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Property Management Companies | RankEmpire", description: "SEO for property management companies: win owner searches by property type and city with service pages, fee transparency, reviews and local rankings." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Property Management Companies\", \"item\": \"https://www.rankempire.us/seo-for-property-management/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Property Management Companies\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Property Management Companies\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-property-management/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do we handle negative reviews from tenants?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Respond calmly and factually, without revealing private information or arguing. Acknowledge the concern, describe the general process for resolving issues, and invite the tenant to contact the office. Owners read these responses, so a professional tone often matters more than the original complaint.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish our management fees?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many owners filter out companies that hide pricing. Publishing management, leasing, and renewal fees, plus what each covers, builds trust and saves time on calls with owners who are not a fit. Explain any additional costs clearly so owners can compare firms fairly.\"}}, {\"@type\": \"Question\", \"name\": \"Can we rank for owner searches in cities where we manage only a few properties?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It is possible if you genuinely serve that area. Create area pages with real knowledge of the local rental market, managed property examples, and response times. Avoid claiming a strong presence where you have none, since owners will check before signing.\"}}, {\"@type\": \"Question\", \"name\": \"Do rental listings on our website help SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Listings can attract tenant traffic, but they change frequently and rarely build lasting owner leads. Use them to serve tenants and support occupancy, while investing most SEO effort in owner focused service pages, area guides, and educational content for landlords.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for property management companies?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most property management companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for property management companies cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="seo-for-property-management" />
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
