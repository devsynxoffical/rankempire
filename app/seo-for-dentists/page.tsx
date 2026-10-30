import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-dentists/V2';
import Statement from '@/components/pages/seo-for-dentists/Statement';
import Searches from '@/components/pages/seo-for-dentists/Searches';
import Challenges from '@/components/pages/seo-for-dentists/Challenges';
import Pages from '@/components/pages/seo-for-dentists/Pages';
import Marquee from '@/components/pages/seo-for-dentists/Marquee';
import Strategy from '@/components/pages/seo-for-dentists/Strategy';
import Services from '@/components/pages/seo-for-dentists/Services';
import Cities from '@/components/pages/seo-for-dentists/Cities';
import Pricing from '@/components/pages/seo-for-dentists/Pricing';
import Faq from '@/components/pages/seo-for-dentists/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-dentists/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Dentists: More Calls and Customers | RankEmpire",
  description: "SEO for dentists: attract new patients with implant, Invisalign, veneer and emergency dentistry pages, map pack optimization, reviews and insurance content.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-dentists/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Dentists: More Calls and Customers | RankEmpire", description: "SEO for dentists: attract new patients with implant, Invisalign, veneer and emergency dentistry pages, map pack optimization, reviews and insurance content.", url: "https://www.rankempire.us/seo-for-dentists/", images: ["https://www.rankempire.us/img/i-med.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Dentists: More Calls and Customers | RankEmpire", description: "SEO for dentists: attract new patients with implant, Invisalign, veneer and emergency dentistry pages, map pack optimization, reviews and insurance content." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Dentists\", \"item\": \"https://www.rankempire.us/seo-for-dentists/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Dentists\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Dentists\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-dentists/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Can we show before and after photos?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, with written patient authorization that specifically covers marketing use. Show genuine cases without heavy editing, and consider noting that results vary. Before and after galleries are very persuasive for cosmetic and implant patients, so collecting consent as part of the treatment process is worth the effort.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for emergency dentist searches after hours?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Google shows businesses that appear open and relevant, so accurate hours matter. If you offer after hours emergency access, explain it clearly on the profile and website. A dedicated emergency page with call instructions helps, but only claim availability that your practice can reliably provide.\"}}, {\"@type\": \"Question\", \"name\": \"Should we create pages for each insurance plan?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Usually a single, well organized insurance page is better than many thin pages. List accepted plans clearly and explain how out of network benefits work. For major plans with high search volume in your area, a short dedicated section or page can help.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth targeting implant searches if competitors are big?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Implant patients research extensively, so detailed, honest content can win even against larger practices. Explain your process, show real cases, introduce the dentist performing the work, and address cost openly. Specificity and trust often matter more than size for these high value searches.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for dentists?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most dental practices see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for dentists cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-dentists" />
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
