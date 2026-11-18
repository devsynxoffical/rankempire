import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import DeepGuide from '@/components/sections/DeepGuide';
import OrgSchema from '@/components/seo/OrgSchema';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V0 from '@/components/pages/seo-for-car-accident-lawyers/V0';
import Statement from '@/components/pages/seo-for-car-accident-lawyers/Statement';
import Searches from '@/components/pages/seo-for-car-accident-lawyers/Searches';
import Challenges from '@/components/pages/seo-for-car-accident-lawyers/Challenges';
import Pages from '@/components/pages/seo-for-car-accident-lawyers/Pages';
import Marquee from '@/components/pages/seo-for-car-accident-lawyers/Marquee';
import Strategy from '@/components/pages/seo-for-car-accident-lawyers/Strategy';
import Services from '@/components/pages/seo-for-car-accident-lawyers/Services';
import Cities from '@/components/pages/seo-for-car-accident-lawyers/Cities';
import Pricing from '@/components/pages/seo-for-car-accident-lawyers/Pricing';
import Faq from '@/components/pages/seo-for-car-accident-lawyers/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-car-accident-lawyers/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Car Accident Lawyer SEO & MVA Landing Pages | RankEmpire" },
  description: "SEO and landing pages for car accident (MVA) lawyers: case-type pages, free case review landers, Google Maps, reviews and intake-ready pages that convert.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-car-accident-lawyers/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Car Accident Lawyer SEO & MVA Landing Pages | RankEmpire", description: "SEO and landing pages for car accident (MVA) lawyers: case-type pages, free case review landers, Google Maps, reviews and intake-ready pages that convert.", url: "https://www.rankempire.us/seo-for-car-accident-lawyers/", images: ["https://www.rankempire.us/img/i-legal.webp"] },
  twitter: { card: 'summary_large_image', title: "Car Accident Lawyer SEO & MVA Landing Pages | RankEmpire", description: "SEO and landing pages for car accident (MVA) lawyers: case-type pages, free case review landers, Google Maps, reviews and intake-ready pages that convert." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Car Accident Lawyers\", \"item\": \"https://www.rankempire.us/seo-for-car-accident-lawyers/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Car Accident Lawyers\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Car Accident Lawyers\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-car-accident-lawyers/\", \"description\": \"SEO for car accident lawyers is the work that puts an MVA practice in Google's map pack and organic results when injured people search for help: case-type pages for car, truck, rideshare and motorcycle crashes, a mobile free case review lander, a complete Google Business Profile, reviews collected within bar rules and local links. RankEmpire builds the pages and landers and tracks results through to signed cases.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What is an MVA landing page?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"An MVA (motor vehicle accident) landing page is a single-purpose page for people injured in a crash, usually with one offer such as a free case review, a short intake form, click-to-call and trust signals. Firms use it for paid ads and for organic searches, and it converts better than sending visitors to the home page.\"}}, {\"@type\": \"Question\", \"name\": \"Should car accident landers be separate from the main website?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually they should live on the firm's own domain, so every review, link and conversion builds the firm's authority. Separate microsites split that authority and are harder to keep compliant.\"}}, {\"@type\": \"Question\", \"name\": \"How do we compete with lead generation sites for car accident searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Lead sites rank on scale, but they cannot show a real office, real attorneys or local reviews. Strong case-type pages, a complete Google Business Profile and steady reviews help a firm outrank them for local searches.\"}}, {\"@type\": \"Question\", \"name\": \"Can we show settlement amounts on our MVA pages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many states allow past results with specific disclaimers and some restrict them. Results must not imply future outcomes, so review your state bar rules before publishing them.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for car accident lawyers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map and long-tail rankings often move within 60 to 90 days. Competitive car accident terms in large cities usually take six months or more.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for car accident lawyers cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $599 per month. Competitive metros usually need a larger plan; we recommend one after a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-car-accident-lawyers" />
        <Statement />
        <SearchSurfaces slug="seo-for-car-accident-lawyers" kind="industry" audience="car accident lawyers" kw="car accident lawyer near me" question="what to do after a car accident not my fault" />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
        <DeepGuide slug="seo-for-car-accident-lawyers" />
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
