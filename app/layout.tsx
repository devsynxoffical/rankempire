import type { ReactNode } from 'react';
import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.rankempire.com'),
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=DM+Sans:opsz,wght@9..40,400;9..40,500;9..40,600;9..40,700&family=Mrs+Saint+Delafield&family=Instrument+Serif&family=Anton&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="stylesheet" href="/assets/site.css?v=31" />
        <script dangerouslySetInnerHTML={{ __html: SEEN }} />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Script src="https://unpkg.com/lenis@1.1.13/dist/lenis.min.js" strategy="beforeInteractive" />
        <Script src="/assets/site.js" strategy="afterInteractive" />
        <Script src="/assets/v3.js?v=30" strategy="afterInteractive" />
      </body>
    </html>
  );
}
