import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import SearchSurfaces from '@/components/sections/SearchSurfaces';
import QuickAnswer from '@/components/seo/QuickAnswer';
import V2 from '@/components/pages/seo-for-veterinarians/V2';
import Statement from '@/components/pages/seo-for-veterinarians/Statement';
import Searches from '@/components/pages/seo-for-veterinarians/Searches';
import Challenges from '@/components/pages/seo-for-veterinarians/Challenges';
import Pages from '@/components/pages/seo-for-veterinarians/Pages';
import Marquee from '@/components/pages/seo-for-veterinarians/Marquee';
import Strategy from '@/components/pages/seo-for-veterinarians/Strategy';
import Services from '@/components/pages/seo-for-veterinarians/Services';
import Cities from '@/components/pages/seo-for-veterinarians/Cities';
import Pricing from '@/components/pages/seo-for-veterinarians/Pricing';
import Faq from '@/components/pages/seo-for-veterinarians/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-veterinarians/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Veterinarians: Rank Higher | RankEmpire",
  description: "SEO for veterinarians: win routine, emergency and specialty pet care searches with service pages, emergency profile hours, reviews and map pack optimization.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-veterinarians/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Veterinarians: Rank Higher | RankEmpire", description: "SEO for veterinarians: win routine, emergency and specialty pet care searches with service pages, emergency profile hours, reviews and map pack optimization.", url: "https://www.rankempire.us/seo-for-veterinarians/", images: ["https://www.rankempire.us/img/i-med.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Veterinarians: Rank Higher | RankEmpire", description: "SEO for veterinarians: win routine, emergency and specialty pet care searches with service pages, emergency profile hours, reviews and map pack optimization." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"founder\": {\"@type\": \"Person\", \"@id\": \"https://www.rankempire.us/our-team/#gaurav\", \"name\": \"Gaurav Kapoor\"}, \"contactPoint\": {\"@type\": \"ContactPoint\", \"contactType\": \"sales\", \"email\": \"hello@rankempire.com\", \"availableLanguage\": \"en\", \"areaServed\": \"US\"}, \"sameAs\": [\"https://www.facebook.com/profile.php?id=61595708086096\", \"https://www.linkedin.com/company/rank-empire-ai-seo-agency\", \"https://www.instagram.com/rankempireaiseoagency/\", \"https://www.youtube.com/@rankempireaiseoagency\"], \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Veterinarians\", \"item\": \"https://www.rankempire.us/seo-for-veterinarians/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Veterinarians\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Veterinarians\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-veterinarians/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"Should we publish prices for common services?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many owners look for costs, especially for dental cleanings and spay or neuter surgery. Publishing ranges with clear explanations of what affects price, such as pet size, bloodwork, and anesthesia monitoring, builds trust. Encourage owners to request a detailed estimate for their pet's specific needs.\"}}, {\"@type\": \"Question\", \"name\": \"How do we rank for emergency vet searches if we are not a 24 hour hospital?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Be honest about your capabilities. Create an urgent care page explaining what you handle during business hours and where owners should go after hours. Accurate information builds trust and helps Google show your clinic for searches you can genuinely serve.\"}}, {\"@type\": \"Question\", \"name\": \"Can blog posts about pet health help us?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, when they answer real questions owners ask, such as what to do if a dog eats chocolate or how often cats need dental care. Keep advice general, encourage contacting the clinic for specific concerns, and link articles to related service pages.\"}}, {\"@type\": \"Question\", \"name\": \"How should we respond to negative reviews about pet loss?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Respond with empathy, acknowledge the owner's grief, and invite them to speak directly with the clinic. Avoid sharing medical details publicly. Thoughtful, compassionate replies show other owners that the clinic cares about both pets and families. If the review contains factual errors, a private conversation is usually more productive than a public correction.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for veterinarians?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most veterinary clinics see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for veterinarians cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V2 />
        <QuickAnswer slug="seo-for-veterinarians" />
        <Statement />
        <SearchSurfaces slug="seo-for-veterinarians" kind="industry" audience="veterinarians" kw="emergency vet open now" question="cat dental cleaning cost" />
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
