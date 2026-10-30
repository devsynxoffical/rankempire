import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/locations__phoenix/V0';
import Statement from '@/components/pages/locations__phoenix/Statement';
import Considerations from '@/components/pages/locations__phoenix/Considerations';
import ServiceAreas from '@/components/pages/locations__phoenix/ServiceAreas';
import Keywords from '@/components/pages/locations__phoenix/Keywords';
import Marquee from '@/components/pages/locations__phoenix/Marquee';
import Industries from '@/components/pages/locations__phoenix/Industries';
import Services from '@/components/pages/locations__phoenix/Services';
import Pricing from '@/components/pages/locations__phoenix/Pricing';
import Faq from '@/components/pages/locations__phoenix/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__phoenix/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Phoenix, AZ: Local SEO Services | RankEmpire",
  description: "SEO company in Phoenix: local SEO, Google Business Profile optimization and content for businesses in Scottsdale, Tempe, Mesa, Chandler, Gilbert and Glendale.",
  alternates: { canonical: "https://www.rankempire.us/locations/phoenix/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Phoenix, AZ: Local SEO Services | RankEmpire", description: "SEO company in Phoenix: local SEO, Google Business Profile optimization and content for businesses in Scottsdale, Tempe, Mesa, Chandler, Gilbert and Glendale.", url: "https://www.rankempire.us/locations/phoenix/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Phoenix, AZ: Local SEO Services | RankEmpire", description: "SEO company in Phoenix: local SEO, Google Business Profile optimization and content for businesses in Scottsdale, Tempe, Mesa, Chandler, Gilbert and Glendale." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Phoenix\", \"item\": \"https://www.rankempire.us/locations/phoenix/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Phoenix\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Phoenix\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Arizona\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/phoenix/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can my Phoenix business rank in Scottsdale and Chandler too?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It is possible, but Google heavily weights proximity, so ranking far from your verified address takes work. We build distinct pages for each city you serve, earn reviews from customers there, and reference local details accurately. If you serve the whole Valley, we prioritize the cities that bring the most valuable work.\"}}, {\"@type\": \"Question\", \"name\": \"When should HVAC and pool companies in Phoenix start SEO work?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Ideally well before summer. Pages and profile improvements take time to be indexed and gain trust, so starting in winter or early spring puts you in a strong position when demand peaks. The quieter months are a good time for technical fixes, content creation, and review campaigns.\"}}, {\"@type\": \"Question\", \"name\": \"Do you have a team on the ground in Arizona?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. RankEmpire is a remote first agency with no office in Phoenix. We work with Valley businesses through video calls, shared reports, and online collaboration. Rankings depend on your site, your Google Business Profile, and your reputation, all of which we manage remotely while relying on your knowledge of local customers.\"}}, {\"@type\": \"Question\", \"name\": \"How competitive is SEO in Phoenix compared to other large cities?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends heavily on the category. Home services, real estate, and medical practices are crowded, especially in Scottsdale and the East Valley, while some niche B2B or specialty services have lighter competition. We analyze the actual businesses ranking in your category before recommending a strategy or timeline.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost in Phoenix?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="locations/phoenix" />
        <Statement />
        <SearchSurfaces slug="locations/phoenix" kind="city" audience="businesses in Phoenix" city="Phoenix" kw="seo company phoenix" question="How much does local SEO cost in Phoenix?" />
        <Considerations />
        <ServiceAreas />
        <Keywords />
        <Marquee />
        <Industries />
        <Services />
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
