import type { Metadata } from 'next';
import SkipLink from '@/components/layout/SkipLink';
import Preloader from '@/components/layout/Preloader';
import Header from '@/components/layout/Header';
import MobileMenu from '@/components/layout/MobileMenu';
import Footer from '@/components/layout/Footer';
import V1 from '@/components/pages/seo-for-gyms/V1';
import Statement from '@/components/pages/seo-for-gyms/Statement';
import Searches from '@/components/pages/seo-for-gyms/Searches';
import Challenges from '@/components/pages/seo-for-gyms/Challenges';
import Pages from '@/components/pages/seo-for-gyms/Pages';
import Marquee from '@/components/pages/seo-for-gyms/Marquee';
import Strategy from '@/components/pages/seo-for-gyms/Strategy';
import Services from '@/components/pages/seo-for-gyms/Services';
import Cities from '@/components/pages/seo-for-gyms/Cities';
import Pricing from '@/components/pages/seo-for-gyms/Pricing';
import Faq from '@/components/pages/seo-for-gyms/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-gyms/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: "SEO for Gyms and Fitness Studios: Rank Higher | RankEmpire",
  description: "SEO for gyms and fitness studios that wins the map pack and organic results: keyword research, Google Business Profile.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-gyms/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "SEO for Gyms and Fitness Studios: Rank Higher | RankEmpire", description: "SEO for gyms and fitness studios that wins the map pack and organic results: keyword research, Google Business Profile.", url: "https://www.rankempire.us/seo-for-gyms/", images: ["https://www.rankempire.us/img/i-beauty.webp"] },
  twitter: { card: 'summary_large_image', title: "SEO for Gyms and Fitness Studios: Rank Higher | RankEmpire", description: "SEO for gyms and fitness studios that wins the map pack and organic results: keyword research, Google Business Profile." },
};

export default function Page() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"ProfessionalService\", \"@id\": \"https://www.rankempire.us/#org\", \"name\": \"RankEmpire\", \"url\": \"https://www.rankempire.us\", \"email\": \"hello@rankempire.com\", \"logo\": \"https://www.rankempire.us/img/favicon.svg\", \"image\": \"https://www.rankempire.us/img/team.webp\", \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"description\": \"RankEmpire is an SEO company for local businesses, e-commerce brands and SaaS companies.\", \"knowsAbout\": [\"Search engine optimization\", \"Local SEO\", \"Technical SEO\", \"Link building\", \"Content marketing\"]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Gyms and Fitness Studios\", \"item\": \"https://www.rankempire.us/seo-for-gyms/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Gyms and Fitness Studios\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Gyms and Fitness Studios\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-gyms/\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"How do we compete with large gym chains in search?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Chains win many generic searches on brand strength, but local gyms can win specific ones. Build pages around your coaching, specialty programs, and community, collect detailed reviews, and use authentic photos. Searches like strength coach for beginners or small group training often favor businesses that clearly explain those offerings.\"}}, {\"@type\": \"Question\", \"name\": \"Should we publish membership prices online?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Many people look for pricing before visiting and skip gyms that hide it. Publishing prices or starting rates, along with what is included and any contract terms, builds trust and filters inquiries. If pricing depends on the program, explain the options and invite people to try a free class first.\"}}, {\"@type\": \"Question\", \"name\": \"Is it worth creating individual trainer pages?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. People often search for trainers by name or specialty, such as postnatal training or powerlifting coach. Trainer pages with certifications, experience, coaching style, and real client feedback help people choose and give search engines more specific content to connect with those searches.\"}}, {\"@type\": \"Question\", \"name\": \"How can we rank for class specific searches?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Give each class type its own section or page with a description, intensity level, schedule, and photos. Keep the schedule as text, not an image. Encourage members to mention specific classes in reviews, which helps Google associate your gym with searches like spin class or yoga sculpt nearby.\"}}, {\"@type\": \"Question\", \"name\": \"How long does SEO take for gyms and fitness studios?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Most gyms see early map and ranking movement within 60 to 90 days, with stronger results after 4 to 6 months.\"}}, {\"@type\": \"Question\", \"name\": \"What does SEO for gyms and fitness studios cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Local plans start at $799 per month. We recommend a plan after reviewing your market in a free audit.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V1 />
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
