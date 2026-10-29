import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V1 from '@/components/pages/google-business-profile-seo/V1';
import Statement from '@/components/pages/google-business-profile-seo/Statement';
import InDepth from '@/components/pages/google-business-profile-seo/InDepth';
import WhyItMatters from '@/components/pages/google-business-profile-seo/WhyItMatters';
import Deliverables from '@/components/pages/google-business-profile-seo/Deliverables';
import Marquee from '@/components/pages/google-business-profile-seo/Marquee';
import Monthly from '@/components/pages/google-business-profile-seo/Monthly';
import Process from '@/components/pages/google-business-profile-seo/Process';
import WhoItIsFor from '@/components/pages/google-business-profile-seo/WhoItIsFor';
import Comparison from '@/components/pages/google-business-profile-seo/Comparison';
import Pricing from '@/components/pages/google-business-profile-seo/Pricing';
import Faq from '@/components/pages/google-business-profile-seo/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/google-business-profile-seo/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "Google Business Profile SEO and Optimization | RankEmpire",
  description: "Google Business Profile optimization that improves map rankings, calls and direction requests: categories, services, photos, posts, reviews and Q&A.",
  alternates: { canonical: "https://www.rankempire.us/google-business-profile-seo/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Google Business Profile SEO and Optimization | RankEmpire", description: "Google Business Profile optimization that improves map rankings, calls and direction requests: categories, services, photos, posts, reviews and Q&A.", url: "https://www.rankempire.us/google-business-profile-seo/", images: ["https://www.rankempire.us/img/w1.webp"] },
  twitter: { card: 'summary_large_image', title: "Google Business Profile SEO and Optimization | RankEmpire", description: "Google Business Profile optimization that improves map rankings, calls and direction requests: categories, services, photos, posts, reviews and Q&A." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"SEO Services\", \"item\": \"https://www.rankempire.us/seo-services/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"Google Business Profile SEO\", \"item\": \"https://www.rankempire.us/google-business-profile-seo/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"Google Business Profile SEO\", \"serviceType\": \"Google Business Profile SEO\", \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"Google Business Profile optimization that improves map rankings, calls and direction requests: categories, services, photos, posts, reviews and Q&A.\", \"url\": \"https://www.rankempire.us/google-business-profile-seo/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can you verify my Google Business Profile?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We guide you through verification and handle the setup once access is granted.\"}}, {\"@type\": \"Question\", \"name\": \"Will you respond to reviews for me?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, using response templates you approve, or we can draft responses for you to post.\"}}, {\"@type\": \"Question\", \"name\": \"What if my profile was suspended?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"We review the cause, fix guideline issues and file a reinstatement request.\"}}, {\"@type\": \"Question\", \"name\": \"How do I rank higher on Google Maps?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google uses relevance, distance and prominence to rank local results. You can improve relevance with accurate categories, services and a strong website, and prominence with reviews, local links and consistent citations. Distance depends on where the searcher is, which you cannot change. Complete, active profiles generally perform better than neglected ones.\"}}, {\"@type\": \"Question\", \"name\": \"Should I put keywords in my business name?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"No. Google's guidelines require your profile name to match your real world business name as it appears on signage and documents. Adding keywords or city names that are not part of your actual business name can lead to suspension. If competitors do this, you can suggest edits or report them through Google's tools.\"}}, {\"@type\": \"Question\", \"name\": \"Why was my Google Business Profile suspended?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Common causes include using a virtual office or ineligible address, keyword stuffing the name, showing an address where you do not serve customers or making many edits at once. Reinstatement requires fixing the violation and submitting an appeal with documentation, such as business licenses, utility bills or photos of your location and signage.\"}}, {\"@type\": \"Question\", \"name\": \"Do Google Business Profile posts help rankings?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google has not stated that posts directly improve rankings. Posts do give searchers current information about offers, events and updates, which can increase engagement with your profile. Keeping the profile active with posts, photos and replies signals that the business is operating, and helps people choose you once they see your listing.\"}}, {\"@type\": \"Question\", \"name\": \"Can you remove negative reviews?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Reviews can only be removed by Google when they violate its policies, such as spam, conflicts of interest, off topic content or harassment. We can flag those reviews and request removal through official channels. Legitimate negative reviews cannot be removed, but a calm, helpful public reply often reassures future customers.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="services" />
      <MobileMenu />
      <main id="main">
        <V1 />
        <QuickAnswer slug="google-business-profile-seo" />
        <Statement />
        <InDepth />
        <WhyItMatters />
        <Deliverables />
        <Marquee />
        <Monthly />
        <Process />
        <WhoItIsFor />
        <Comparison />
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
