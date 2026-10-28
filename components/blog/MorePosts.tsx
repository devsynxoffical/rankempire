import posts from '@/content/posts.json';
import site from '@/content/site.json';

export default function MorePosts({ exclude, limit = 3, title = 'More SEO guides' }: { exclude?: string; limit?: number; title?: string }) {
  const list = posts.filter((p) => p.slug !== exclude).slice(0, limit);
  return (
    <section className="sec tight">
      <div className="wrap">
        <div className="sh" data-r="">
          <span className="eyb">Keep reading</span>
          <h2 className="h2">{title}</h2>
        </div>
        <div className="posts" data-stagger="">
          {list.map((p) => (
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
      </div>
    </section>
  );
}
