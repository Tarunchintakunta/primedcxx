import { getAllPosts } from '../../lib/getPosts.mjs';

export const metadata = { title: 'Insights — PRIME DCX' };

export default function BlogIndex() {
  const posts = getAllPosts();
  const [lead, ...rest] = posts;
  return (
    <main>
      <div className="tape mono" aria-hidden="true"><div className="tape__inner"></div></div>
      <section className="phero">
        <a className="backlink" href="/">BACK TO HOME</a>
        <p className="phero__eyebrow mono">INSIGHTS</p>
        <h1>The research desk.</h1>
        <p>Education, platform guides and honest risk frameworks — written for traders, not for clicks. New pieces from the PRIME DCX desk every few weeks.</p>
      </section>
      <section className="sec">
        <div className="bgrid">
          {lead && <PostCard post={lead} lead />}
          {rest.map((p) => <PostCard key={p.slug} post={p} />)}
        </div>
      </section>
    </main>
  );
}

function PostCard({ post, lead = false }) {
  return (
    <a className={`bcard${lead ? ' bcard--lead' : ''} rv`} href={`/blog/${post.slug}/`}>
      <span className="bcard__img" style={{ backgroundImage: `url('${post.cover}')` }}></span>
      <span className="bcard__body">
        <span className="bcard__meta">{post.meta}</span>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </span>
    </a>
  );
}
