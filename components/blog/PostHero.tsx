import site from '@/content/site.json';

export type Post = {
  slug: string; title: string; metaTitle: string; description: string; category: string;
  image: string; imageAlt: string; published: string; modified: string; readTime: number;
};

const fmt = (d: string) => new Date(d + 'T12:00:00Z').toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });

export default function PostHero({ post }: { post: Post }) {
  return (
    <>
      <section className="ph" style={{ paddingBottom: '30px' }}>
        <div className="bgd"></div>
        <div className="wrap" style={{ maxWidth: '980px' }}>
          <nav className="crumb" aria-label="Breadcrumb">
            <a href="/">Home</a>
            <span className="sep">/</span>
            <a href="/blog/">Blog</a>
            <span className="sep">/</span>
            <span aria-current="page">{post.title}</span>
          </nav>
          <span className="eyb pill" data-r="">
            <i></i>
            {post.category}
          </span>
          <h1 data-r="">{post.title}</h1>
          <p className="lead" data-r="">{post.description}</p>
          <p className="byline" data-r="">
            <img src="/img/gaurav-sit.webp" alt="" width="36" height="36" loading="lazy" />
            <span>
              By <a href="/our-team/#gaurav" rel="author">{site.founder.name}</a>, {site.founder.jobTitle}
              <br />
              <time dateTime={post.published}>{fmt(post.published)}</time>
              {post.modified !== post.published && (
                <>
                  {' · Updated '}
                  <time dateTime={post.modified}>{fmt(post.modified)}</time>
                </>
              )}
              {` · ${post.readTime} min read`}
            </span>
          </p>
        </div>
      </section>
      <div className="wrap" style={{ maxWidth: '1100px' }}>
        <div className="phimg" style={{ aspectRatio: '21/9' }} data-r="s">
          <img src={post.image} alt={post.imageAlt} />
        </div>
      </div>
    </>
  );
}
