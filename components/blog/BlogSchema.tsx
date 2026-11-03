import posts from '@/content/posts.json';
import site from '@/content/site.json';
import { PERSON_ID } from '@/components/seo/PersonSchema';
import { ORG_ID } from '@/components/seo/OrgSchema';

// Blog entity for /blog/ listing every post, so search engines see the hub and its articles as one unit.
export default function BlogSchema() {
  const ld = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': `${site.url}/blog/#blog`,
    name: 'RankEmpire SEO Blog',
    url: `${site.url}/blog/`,
    description: 'Practical guides on local SEO, technical SEO, AI search and content strategy, written by the team doing the work.',
    inLanguage: 'en-US',
    publisher: { '@id': ORG_ID },
    author: { '@id': PERSON_ID },
    blogPost: posts.map((p) => ({
      '@type': 'BlogPosting',
      '@id': `${site.url}/blog/${p.slug}/#article`,
      headline: p.title,
      url: `${site.url}/blog/${p.slug}/`,
      datePublished: p.published,
      dateModified: p.modified,
      image: `${site.url}${p.image}`,
      author: { '@type': 'Person', '@id': PERSON_ID, name: site.founder.name, url: site.founder.url },
    })),
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(ld) }} />;
}
