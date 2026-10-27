import type { MetadataRoute } from 'next';
import routes from '@/content/routes.json';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  return (routes as string[]).map((s) => {
    const url = `https://www.rankempire.us/${s ? s + '/' : ''}`;
    let priority = 0.8;
    let changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] = 'weekly';

    if (!s) {
      // Homepage
      priority = 1.0;
      changeFrequency = 'daily';
    } else if (
      [
        'seo-services',
        'aeo',
        'geo',
        'case-studies',
        'seo-packages',
        'seo-audit',
        'saas-seo',
        'ecommerce-seo',
        'local-seo',
        'b2b-seo',
        'enterprise-seo',
        'technical-seo',
      ].includes(s)
    ) {
      priority = 0.9;
      changeFrequency = 'weekly';
    } else if (['industries', 'locations', 'seo-tools', 'contact-us', 'about-us', 'blog'].includes(s)) {
      priority = 0.85;
      changeFrequency = 'weekly';
    } else if (s.startsWith('locations/') || s.startsWith('seo-for-')) {
      priority = 0.8;
      changeFrequency = 'weekly';
    } else if (s.startsWith('seo-tools/') || s.startsWith('blog/')) {
      priority = 0.75;
      changeFrequency = 'monthly';
    } else if (['privacy-policy', 'terms'].includes(s)) {
      priority = 0.3;
      changeFrequency = 'yearly';
    }

    return {
      url,
      lastModified: now,
      changeFrequency,
      priority,
    };
  });
}

