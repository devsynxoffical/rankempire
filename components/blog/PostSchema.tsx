import site from '@/content/site.json';
import { personJson, PERSON_ID } from '@/components/seo/PersonSchema';
import { ORG_ID, orgJson } from '@/components/seo/OrgSchema';
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
      image: [{ '@type': 'ImageObject', url: `${site.url}${post.image}`, width: post.imageWidth, height: post.imageHeight, caption: post.imageAlt }],
      author: [{ '@type': 'Person', '@id': PERSON_ID, name: site.founder.name, url: site.founder.url, jobTitle: site.founder.jobTitle }],
      publisher: { '@type': 'OnlineBusiness', '@id': ORG_ID, name: site.name, url: `${site.url}/`, logo: { '@type': 'ImageObject', url: site.logo.url, width: site.logo.width, height: site.logo.height } },
      datePublished: post.published,
      dateModified: post.modified,
      wordCount,
      articleSection: post.category,
      inLanguage: 'en-US',
      isAccessibleForFree: true,
      keywords: post.category,
      isPartOf: { '@type': 'Blog', '@id': `${site.url}/blog/#blog`, name: 'RankEmpire SEO Blog', url: `${site.url}/blog/` },
    },
    personJson(),
    orgJson(),
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
