import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rankempire.us'),
  title: {
    default: 'RankEmpire — SEO, AEO & GEO Agency | Rank #1 on Google & AI',
    template: '%s | RankEmpire',
  },
  description:
    'RankEmpire delivers data-driven SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) to dominate Google search, AI Overviews, Perplexity, and ChatGPT.',
  keywords: [
    'SEO Agency',
    'Answer Engine Optimization',
    'AEO',
    'GEO',
    'Generative Engine Optimization',
    'AI Search Visibility',
    'AI Overviews Optimization',
    'Perplexity SEO',
    'ChatGPT SEO',
    'Local SEO',
    'SaaS SEO',
    'Enterprise SEO',
    'Technical SEO',
    'Google Search Console',
  ],
  authors: [{ name: 'RankEmpire', url: 'https://www.rankempire.us' }],
  creator: 'RankEmpire',
  publisher: 'RankEmpire',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.rankempire.us',
    siteName: 'RankEmpire',
    title: 'RankEmpire — SEO, AEO & GEO Agency | Rank #1 on Google & AI',
    description:
      'RankEmpire delivers data-driven SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) to dominate Google search, AI Overviews, Perplexity, and ChatGPT.',
    images: [
      {
        url: 'https://www.rankempire.us/img/team.webp',
        width: 1200,
        height: 630,
        alt: 'RankEmpire SEO & AI Search Visibility Agency',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'RankEmpire — SEO, AEO & GEO Agency | Rank #1 on Google & AI',
    description:
      'RankEmpire delivers data-driven SEO, Answer Engine Optimization (AEO), and Generative Engine Optimization (GEO) to dominate Google search, AI Overviews, Perplexity, and ChatGPT.',
    images: ['https://www.rankempire.us/img/team.webp'],
  },
  verification: {
    google: '5Ptm68tJx32eJtyqruB7T4rOSsnFGEaxft6XCeDZSFk',
  },
};

// Marks the document as "seen" on same-site navigations so the intro loader only plays on fresh visits and reloads.
const SEEN = `try{if("scrollRestoration" in history)history.scrollRestoration="manual";if(!location.hash)window.scrollTo(0,0);addEventListener("pageshow",function(){if(!location.hash)window.scrollTo(0,0)});}catch(e){}try{var n=performance.getEntriesByType("navigation")[0],t=n?n.type:"navigate",r=document.referrer,same=false;try{same=!!r&&new URL(r).host===location.host}catch(_){}if(t!=="reload"&&same)document.documentElement.classList.add("seen")}catch(e){}`;

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en-US">
      <head>
        <meta name="theme-color" content="#f1f1f0" />
        <link rel="icon" href="/img/favicon.svg" type="image/svg+xml" />
        <link rel="preload" href="/assets/fonts/anton-1Ptgg87LROyAm3Kz-C8.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/assets/fonts/dmsans-rP2Hp2ywxg089UriCZOIHQ.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="alternate" type="application/rss+xml" title="RankEmpire SEO Blog" href="/blog/feed.xml" />
        <link rel="stylesheet" href="/assets/fonts.css?v=1" />
        <link rel="stylesheet" href="/assets/site.css?v=35" />
        <script dangerouslySetInnerHTML={{ __html: SEEN }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="/assets/lenis.min.js?v=1" strategy="beforeInteractive" />
        <Script src="/assets/site.js" strategy="afterInteractive" />
        <Script src="/assets/v3.js?v=32" strategy="afterInteractive" />
      </body>
    </html>
  );
}
