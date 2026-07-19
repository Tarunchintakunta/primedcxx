import { getAllPosts } from '../../../lib/getPosts.mjs';

export function generateStaticParams() {
  return getAllPosts().map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  return { title: post ? post.pageTitle : 'PRIME DCX Insights' };
}

export default async function Post({ params }) {
  const { slug } = await params;
  const post = getAllPosts().find((p) => p.slug === slug);
  if (!post) return null;
  return (
    <main>
      <div className="tape mono" aria-hidden="true"><div className="tape__inner"></div></div>
      <div className="legal-back"><a className="backlink" href="/blog/">BACK TO INSIGHTS</a></div>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </main>
  );
}
