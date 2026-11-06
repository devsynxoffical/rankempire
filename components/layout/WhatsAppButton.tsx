'use client';
import { usePathname } from 'next/navigation';
import site from '@/content/site.json';
import industries from '@/content/industries.json';
import cities from '@/content/cities.json';
import posts from '@/content/posts.json';

// Floating WhatsApp button. The prefilled first message depends on the page the visitor is on,
// so the conversation starts with the service, industry, city or article they were reading.
const SERVICES: Record<string, string> = {
  'seo-services': 'SEO services', 'seo-company': 'SEO services', 'local-seo': 'local SEO', 'technical-seo': 'technical SEO',
  'content-seo': 'content SEO', 'link-building': 'link building', 'on-page-seo': 'on-page SEO', 'off-page-seo': 'off-page SEO',
  'ecommerce-seo': 'e-commerce SEO', 'saas-seo': 'SaaS SEO', 'b2b-seo': 'B2B SEO', 'enterprise-seo': 'enterprise SEO',
  'national-seo': 'national SEO', 'international-seo': 'international SEO', 'aeo': 'answer engine optimization (AEO)',
  'geo': 'generative engine optimization (GEO)', 'google-business-profile-seo': 'Google Business Profile optimization',
  'keyword-research': 'keyword research', 'competitor-seo-analysis': 'competitor SEO analysis', 'seo-audit': 'an SEO audit',
  'seo-consulting': 'SEO consulting', 'seo-packages': 'your SEO packages', 'case-studies': 'results like your case studies',
};

function message(path: string): string {
  const p = path.replace(/^\/|\/$/g, '');
  const hi = 'Hi RankEmpire, ';
  if (p.startsWith('locations/')) {
    const c = cities.find((x) => x.slug === p.split('/')[1]);
    if (c) return `${hi}I have a business in ${c.name} and I'd like to get more customers from Google. Can we talk about SEO in ${c.name}?`;
    return `${hi}I'd like to talk about local SEO for my business.`;
  }
  const ind = industries.find((x) => x.slug === p);
  if (ind) return `${hi}I'm interested in SEO for ${ind.name}. Can you help my business get more leads from Google?`;
  if (p.startsWith('seo-packages/')) { const k: Record<string, string> = { 'local-seo': 'local SEO', 'ecommerce-seo': 'e-commerce SEO', 'saas-seo': 'SaaS SEO' }; return `${hi}I'm interested in your ${k[p.split('/')[1]] || 'SEO'} packages. Which plan fits my business?`; }
  if (p.startsWith('blog/')) {
    const post = posts.find((x) => x.slug === p.split('/')[1]);
    if (post) return `${hi}I just read "${post.title}" and I have a question about my own website's SEO.`;
    return `${hi}I've been reading your SEO guides and have a question about my website.`;
  }
  if (p.startsWith('seo-tools/')) { const t = p.split('/')[1].replace(/-/g, ' ').replace(/\bseo\b/g, 'SEO'); return `${hi}I used your free ${t} and I'd like help improving my website's rankings.`; }
  if (p === 'seo-tools') return `${hi}I used your free SEO tools and I'd like help improving my website's rankings.`;
  if (SERVICES[p]) return `${hi}I'm interested in ${SERVICES[p]} for my business. Can we talk?`;
  if (p === 'contact-us') return `${hi}I'd like a free SEO audit for my website.`;
  return `${hi}I'd like a free SEO audit and to know how you can help my business rank on Google.`;
}

export default function WhatsAppButton() {
  const path = usePathname() || '/';
  const num = (site.whatsapp || '').replace(/\D/g, '');
  if (!num) return null;
  const href = `https://wa.me/${num}?text=${encodeURIComponent(message(path))}`;
  return (
    <a className="wa-fab" href={href} target="_blank" rel="noopener" aria-label="Chat with RankEmpire on WhatsApp">
      <svg viewBox="0 0 32 32" aria-hidden="true" fill="currentColor">
        <path d="M16.04 3C9.06 3 3.4 8.63 3.4 15.57c0 2.22.59 4.39 1.7 6.3L3.3 28.7l7.03-1.84a12.7 12.7 0 0 0 5.7 1.36h.01c6.97 0 12.64-5.63 12.64-12.57C28.68 8.63 23.01 3 16.04 3Zm0 22.98h-.01a10.5 10.5 0 0 1-5.35-1.46l-.38-.23-4.17 1.09 1.11-4.05-.25-.41a10.36 10.36 0 0 1-1.6-5.53c0-5.78 4.72-10.47 10.65-10.47 5.78 0 10.45 4.7 10.45 10.47 0 5.78-4.71 10.59-10.45 10.59Zm5.74-7.84c-.31-.16-1.86-.91-2.15-1.02-.29-.1-.5-.16-.71.16-.21.31-.82 1.02-1 1.23-.18.21-.37.23-.68.08-.31-.16-1.33-.49-2.53-1.55-.94-.83-1.57-1.86-1.75-2.17-.18-.31-.02-.48.14-.63.14-.14.31-.37.47-.55.16-.18.21-.31.31-.52.1-.21.05-.39-.03-.55-.08-.16-.71-1.7-.97-2.33-.26-.61-.52-.53-.71-.54h-.6c-.21 0-.55.08-.84.39-.29.31-1.1 1.07-1.1 2.62 0 1.54 1.13 3.03 1.28 3.24.16.21 2.22 3.37 5.38 4.73.75.32 1.34.52 1.8.66.75.24 1.44.2 1.98.12.6-.09 1.86-.76 2.12-1.49.26-.73.26-1.36.18-1.49-.08-.13-.29-.21-.6-.36Z" />
      </svg>
      <span>Chat on WhatsApp</span>
    </a>
  );
}
