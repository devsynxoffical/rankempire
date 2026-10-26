import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V0 from '@/components/pages/locations__chicago/V0';
import Statement from '@/components/pages/locations__chicago/Statement';
import Considerations from '@/components/pages/locations__chicago/Considerations';
import ServiceAreas from '@/components/pages/locations__chicago/ServiceAreas';
import Keywords from '@/components/pages/locations__chicago/Keywords';
import Marquee from '@/components/pages/locations__chicago/Marquee';
import Industries from '@/components/pages/locations__chicago/Industries';
import Services from '@/components/pages/locations__chicago/Services';
import Pricing from '@/components/pages/locations__chicago/Pricing';
import Faq from '@/components/pages/locations__chicago/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/locations__chicago/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO Company in Chicago, IL: Local SEO Services | RankEmpire",
  description: "RankEmpire is an SEO company serving Chicago, Illinois. Local SEO, Google Business Profile, technical SEO and content for businesses across Lincoln Park.",
  alternates: { canonical: "https://www.rankempire.com/locations/chicago/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO Company in Chicago, IL: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Chicago, Illinois. Local SEO, Google Business Profile, technical SEO and content for businesses across Lincoln Park.", url: "https://www.rankempire.com/locations/chicago/", images: ["https://www.rankempire.com/img/city.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO Company in Chicago, IL: Local SEO Services | RankEmpire", description: "RankEmpire is an SEO company serving Chicago, Illinois. Local SEO, Google Business Profile, technical SEO and content for businesses across Lincoln Park." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Locations\", \"item\": \"https://www.rankempire.com/locations/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO Company in Chicago\", \"item\": \"https://www.rankempire.com/locations/chicago/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO services in Chicago\", \"serviceType\": \"Search engine optimization\", \"areaServed\": {\"@type\": \"City\", \"name\": \"Chicago\", \"containedInPlace\": {\"@type\": \"State\", \"name\": \"Illinois\"}}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"url\": \"https://www.rankempire.com/locations/chicago/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should my Chicago business target the city, the suburbs, or both?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"It depends on where your customers come from and where you can realistically serve them. A Loop law firm may focus on downtown and nearby neighborhoods, while a contractor based in Schaumburg may prioritize the northwest suburbs. We review your customer data and competition before recommending where to build pages first.\"}}, {\"@type\": \"Question\", \"name\": \"How do Chicago winters affect my SEO plan?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"For seasonal businesses, winter is often the peak. We schedule content and Google Business Profile updates in advance, such as heating, plumbing, or roofing topics in early fall, so your pages are already ranking when the first cold snap hits. Off season months are used for technical improvements and link building.\"}}, {\"@type\": \"Question\", \"name\": \"Can a remote SEO company really understand Chicago neighborhoods?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Good local SEO relies on research and on your own knowledge of your customers. We study the neighborhoods you serve, the language people use, and the competitors who appear in each map pack. You provide the on the ground insight, and we turn it into pages, profile content, and outreach that fit the area.\"}}, {\"@type\": \"Question\", \"name\": \"What makes Chicago SEO different from smaller Illinois markets?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Competition is denser and more businesses invest in marketing, so basic profile work alone rarely wins. Chicago usually requires a combination of strong on page content, steady reviews, local link building, and attention to technical site health. Smaller markets can sometimes be won with fundamentals, while Chicago tends to reward sustained effort.\"}}, {\"@type\": \"Question\", \"name\": \"How much does local SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your competition in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="locations" />
      <MobileMenu />
      <main id="main">
        <V0 />
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
