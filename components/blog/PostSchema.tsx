import site from '@/content/site.json';
import { personJson, PERSON_ID } from '@/components/seo/PersonSchema';
import type { Post } from './PostHero';

export default function PostSchema({ post, wordCount, faq }: { post: Post; wordCount: number; faq: { q: string; a: string }[] }) {
  const url = `${site.url}/blog/${post.slug}/`;
  const graph: object[] = [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      '@id': `${url}#article`,
      mainEntityOfPage: url,
      headline: post.title,
      description: post.description,
      image: `${site.url}${post.image}`,
      author: { '@id': PERSON_ID },
      publisher: { '@id': `${site.url}/#org` },
      datePublished: post.published,
      dateModified: post.modified,
      wordCount,
      articleSection: post.category,
      inLanguage: 'en-US',
      isAccessibleForFree: true,
    },
    personJson(),
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Home', item: `${site.url}/` },
        { '@type': 'ListItem', position: 2, name: 'Blog', item: `${site.url}/blog/` },
        { '@type': 'ListItem', position: 3, name: post.title, item: url },
      ],
    },
  ];
  if (faq.length) {
    graph.push({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faq.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    });
  }
  return (
    <>
      {graph.map((g, i) => (
        <script key={i} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(g) }} />
      ))}
    </>
  );
}
