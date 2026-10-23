import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/pages/seo-for-plumbers/Hero';
import Statement from '@/components/pages/seo-for-plumbers/Statement';
import Searches from '@/components/pages/seo-for-plumbers/Searches';
import Challenges from '@/components/pages/seo-for-plumbers/Challenges';
import Pages from '@/components/pages/seo-for-plumbers/Pages';
import Marquee from '@/components/pages/seo-for-plumbers/Marquee';
import Strategy from '@/components/pages/seo-for-plumbers/Strategy';
import Services from '@/components/pages/seo-for-plumbers/Services';
import Cities from '@/components/pages/seo-for-plumbers/Cities';
import Pricing from '@/components/pages/seo-for-plumbers/Pricing';
import Faq from '@/components/pages/seo-for-plumbers/Faq';
import Related2 from '@/components/sections/Related2';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Plumbers: More Calls and Customers | RankEmpire",
  description: "SEO for plumbers that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for plumbing companys.",
  alternates: { canonical: "https://www.rankempire.com/seo-for-plumbers/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Plumbers: More Calls and Customers | RankEmpire", description: "SEO for plumbers that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for plumbing companys.", url: "https://www.rankempire.com/seo-for-plumbers/", images: ["https://www.rankempire.com/img/i-home.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Plumbers: More Calls and Customers | RankEmpire", description: "SEO for plumbers that wins the map pack and organic results: keyword research, Google Business Profile, service pages and reviews built for plumbing companys." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.com/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.com\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.com/img/favicon.svg\", \"image\": \"https://www.rankempire.com/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.com/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.com/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Plumbers\", \"item\": \"https://www.rankempire.com/seo-for-plumbers/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Plumbers\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Plumbers\"}, \"provider\": {\"@id\": \"https://www.rankempire.com/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.com/seo-for-plumbers/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we advertise 24/7 service if we only answer calls after hours?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Only advertise what customers will actually experience. If someone answers and dispatches a technician, say so. If calls go to voicemail, listing 24/7 service damages trust and reviews quickly. Accurate hours protect your reputation and help Google show the profile at the right times.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for searches in suburbs farther from our shop?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Map rankings weaken with distance, so organic pages become important. Create area pages with real job examples, local housing types, and water conditions in each suburb. Encourage reviews from customers there. Avoid duplicating the same text across many area pages with only the town name changed.\"}}, {\"@type\": \"Question\", \"name\": \"Do water heater brand pages help?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"They can, especially if you are a certified installer. Customers often search for specific brands when replacing or repairing water heaters. Focus on your installation experience, warranty registration, and service support rather than copying manufacturer product descriptions. Photos of your own installs and reviews that mention the brand make these pages far more convincing.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth writing blog posts about plumbing tips?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Useful articles, such as how to shut off your water main or prevent frozen pipes, attract research traffic and build trust. Link these posts to related service pages so readers who need help can contact you quickly. Keep advice practical and safe.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for plumbers?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most plumbing companys see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for plumbers cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <Hero />
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
        <Related2 />
        <Robo />
      </main>
      <Footer />
    </>
  );
}
