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
import V0 from '@/components/pages/seo-for-mass-tort-lawyers/V0';
import Statement from '@/components/pages/seo-for-mass-tort-lawyers/Statement';
import Searches from '@/components/pages/seo-for-mass-tort-lawyers/Searches';
import Challenges from '@/components/pages/seo-for-mass-tort-lawyers/Challenges';
import Pages from '@/components/pages/seo-for-mass-tort-lawyers/Pages';
import Marquee from '@/components/pages/seo-for-mass-tort-lawyers/Marquee';
import Strategy from '@/components/pages/seo-for-mass-tort-lawyers/Strategy';
import Services from '@/components/pages/seo-for-mass-tort-lawyers/Services';
import Cities from '@/components/pages/seo-for-mass-tort-lawyers/Cities';
import Pricing from '@/components/pages/seo-for-mass-tort-lawyers/Pricing';
import Faq from '@/components/pages/seo-for-mass-tort-lawyers/Faq';
import Pmq from '@/components/sections/Pmq';
import Related from '@/components/pages/seo-for-mass-tort-lawyers/Related';
import Robo from '@/components/sections/Robo';

export const metadata: Metadata = {
  title: { absolute: "Mass Tort Marketing: SEO & Landing Pages | RankEmpire" },
  description: "Mass tort marketing for law firms: SEO and landing pages for each tort, claimant qualification forms, compliant content and case acquisition tracking.",
  alternates: { canonical: "https://www.rankempire.us/seo-for-mass-tort-lawyers/" },
  robots: "index,follow,max-image-preview:large,max-snippet:-1",
  openGraph: { type: 'website', siteName: 'RankEmpire', locale: 'en_US', title: "Mass Tort Marketing: SEO & Landing Pages | RankEmpire", description: "Mass tort marketing for law firms: SEO and landing pages for each tort, claimant qualification forms, compliant content and case acquisition tracking.", url: "https://www.rankempire.us/seo-for-mass-tort-lawyers/", images: ["https://www.rankempire.us/img/i-legal.webp"] },
  twitter: { card: 'summary_large_image', title: "Mass Tort Marketing: SEO & Landing Pages | RankEmpire", description: "Mass tort marketing for law firms: SEO and landing pages for each tort, claimant qualification forms, compliant content and case acquisition tracking." },
};

export default function Page() {
  return (
    <>
      <OrgSchema />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"BreadcrumbList\", \"itemListElement\": [{\"@type\": \"ListItem\", \"position\": 1, \"name\": \"Home\", \"item\": \"https://www.rankempire.us/\"}, {\"@type\": \"ListItem\", \"position\": 2, \"name\": \"Industries\", \"item\": \"https://www.rankempire.us/industries/\"}, {\"@type\": \"ListItem\", \"position\": 3, \"name\": \"SEO for Mass Tort Lawyers\", \"item\": \"https://www.rankempire.us/seo-for-mass-tort-lawyers/\"}]}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"Service\", \"name\": \"SEO for Mass Tort Lawyers\", \"serviceType\": \"Search engine optimization\", \"audience\": {\"@type\": \"BusinessAudience\", \"audienceType\": \"Mass Tort Lawyers\"}, \"provider\": {\"@id\": \"https://www.rankempire.us/#org\"}, \"areaServed\": {\"@type\": \"Country\", \"name\": \"United States\"}, \"url\": \"https://www.rankempire.us/seo-for-mass-tort-lawyers/\", \"description\": \"Mass tort marketing is how law firms find and sign claimants harmed by the same product, drug or exposure. RankEmpire builds the organic side: a hub page and an eligibility landing page for each tort, dated lawsuit updates, compliant content and tracking from page to signed case, so firms lower their cost per qualified claimant compared with paid media alone.\"}" }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: "{\"@context\": \"https://schema.org\", \"@type\": \"FAQPage\", \"mainEntity\": [{\"@type\": \"Question\", \"name\": \"What is mass tort marketing?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Mass tort marketing is how law firms find and sign people harmed by the same product, drug or exposure. It combines paid media, SEO and landing pages for each tort with screening so intake receives qualified claimants.\"}}, {\"@type\": \"Question\", \"name\": \"What is a mass tort landing page?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"A mass tort landing page is a single-purpose page for one tort with a short explanation, qualifying questions such as product use and diagnosis, consent language and a fast form or click-to-call, built to send qualified claimants to intake.\"}}, {\"@type\": \"Question\", \"name\": \"Can SEO work for mass torts that move quickly?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes, if pages are published early and updated often. Search demand rises with litigation news, so a current hub and update page can rank for update and eligibility searches throughout the life of the tort.\"}}, {\"@type\": \"Question\", \"name\": \"Should each tort have its own page?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. Each tort has different products, injuries, eligibility criteria and litigation status. One page per tort answers claimants' questions accurately and lets you track results by tort.\"}}, {\"@type\": \"Question\", \"name\": \"Is mass tort advertising regulated?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Yes. State bar rules, consumer protection law and rules on calls and texts apply. Pages must avoid misleading claims about risks or compensation, and forms need clear consent.\"}}, {\"@type\": \"Question\", \"name\": \"What does mass tort SEO cost?\", \"acceptedAnswer\": {\"@type\": \"Answer\", \"text\": \"Plans are scoped by the number of torts and the depth of content. We recommend a plan after a free audit; our published plans start at $599 a month.\"}}]}" }} />
      <SkipLink />
      <Preloader />
      <Header active="industries" />
      <MobileMenu />
      <main id="main">
        <V0 />
        <QuickAnswer slug="seo-for-mass-tort-lawyers" />
        <Statement />
        <SearchSurfaces slug="seo-for-mass-tort-lawyers" kind="industry" audience="mass tort lawyers" kw="mass tort lawsuit" question="am i eligible for a mass tort lawsuit" />
        <Searches />
        <Challenges />
        <Pages />
        <Marquee />
        <Strategy />
        <Services />
        <Cities />
        <DeepGuide slug="seo-for-mass-tort-lawyers" />
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
