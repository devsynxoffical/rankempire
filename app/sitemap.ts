import type { MetadataRoute } from 'next';
import routes from '@/content/routes.json';

export default function sitemap(): MetadataRoute.Sitemap {
  return (routes as string[]).map((s) => ({ url: `https://www.rankempire.com/${s ? s + '/' : ''}`, lastModified: new Date() }));
}
