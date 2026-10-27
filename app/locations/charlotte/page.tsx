import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V2 from '@/components/pages/locations__charlotte/V2';
import Statement from '@/components/pages/locations__charlotte/Statement';
import Considerations from '@/components/pages/locations__charlotte/Considerations';
import ServiceAreas from '@/components/pages/locations__charlotte/ServiceAreas';
import Keywords from '@/components/pages/locations__charlotte/Keywords';
import Marquee from '@/components/pages/locations__charlotte/Marquee';
import Industries from '@/components/pages/locations__charlotte/Industries';
import Services from '@/components/pages/locations__charlotte/Services';
import Pricing from '@/components/pages/locations__charlotte/Pricing';
import Faq from '@/components/pages/locations__charlotte/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/sections/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Charlotte, NC | RankEmpire",
  description: "RankEmpire is an SEO company serving Charlotte, North Carolina. Local SEO, Google Business Profile, technical SEO and content for businesses across Uptown.",
  alternates: { canonical: "https://www.rankempire.us/locations/charlotte/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Charlotte, NC | RankEmpire", description: "RankEmpire is an SEO company serving Charlotte, North Carolina. Local SEO, Google Business Profile, technical SEO and content for businesses across Uptown.", url: "https://www.rankempire.us/locations/charlotte/", images: ["https://www.rankempire.us/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Charlotte, NC | RankEmpire", description: "RankEmpire is an SEO company serving Charlotte, North Carolina. Local SEO, Google Business Profile, technical SEO and content for businesses across Uptown." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.us/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Charlotte\", \"item\": \"https://www.rankempire.us/locations/charlotte/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Charlotte\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Charlotte\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"North Carolina\"}}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"url\": \"https://www.rankempire.us/locations/charlotte/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can my Charlotte business rank in South Carolina suburbs like Fort Mill?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, if you genuinely serve those areas. Google treats Fort Mill and Rock Hill as separate locations, so we build dedicated pages with accurate details, collect reviews from customers there, and confirm your service area settings. If your licensing differs by state, we make that clear on the relevant pages.\"}}, {\"@type\": \"Question\", \"name\": \"How can I reach people relocating to Charlotte?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Newcomers search for doctors, schools, contractors, and services without personal referrals. Strong reviews, clear neighborhood and suburb pages, and helpful guides to the areas you serve make it easier for them to choose you. Corporate relocations also bring professionals who expect fast, credible websites.\"}}, {\"@type\": \"Question\", \"name\": \"Do financial and legal firms in Charlotte benefit from SEO?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They do, though the approach focuses on expertise and trust. We build detailed service pages, author profiles, and content that answers client questions accurately. For regulated industries, we work with your compliance team to avoid claims that could create problems, while still improving visibility for relevant searches.\"}}, {\"@type\": \"Question\", \"name\": \"Does RankEmpire have an office in Charlotte?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. We are a remote first agency and work with Charlotte businesses through video calls, shared reports, and online collaboration. We never claim local staff. The work that drives rankings happens on your website and across the web, and your knowledge of local customers guides where we focus.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <Statement />
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
