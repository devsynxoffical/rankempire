import posts from '@/content/posts.json';
import site from '@/content/site.json';

export default function X() {
  const [featured, ...rest] = posts;
  return (
    <section className="x">
      <div className="wrap">
        <a className="yfeat" href={`/blog/${featured.slug}/`} data-r="">
          <div className="im">
            <img src={featured.image} alt={featured.imageAlt} loading="lazy" />
          </div>
          <div>
            <span className="eyb">{`Featured · ${featured.category}`}</span>
            <h2>{featured.title}</h2>
            <p>{featured.description}</p>
            <span className="go">
              Read article{' '}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </span>
          </div>
        </a>
        <div className="posts" data-stagger="">
          {rest.map((p) => (
            <a className="post" href={`/blog/${p.slug}/`} key={p.slug}>
              <div className="im">
                <img src={p.image} alt="" loading="lazy" />
                <em>{p.category}</em>
              </div>
              <div className="tx">
                <span className="meta">{`${p.readTime} min read · ${site.founder.name}`}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                <span className="tlink">Read article</span>
              </div>
            </a>
          ))}
        </div>
        <p className="blog-feed">
          Get new guides by RSS: <a href="/blog/feed.xml">rankempire.us/blog/feed.xml</a>
        </p>
      </div>
    </section>
  );
}
