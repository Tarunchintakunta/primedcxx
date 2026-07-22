import fs from 'node:fs';
import path from 'node:path';
import { marked } from 'marked';
import { posts as legacyPosts } from './posts.mjs';

// New posts: drop a .md file in content/posts/ with a frontmatter block:
// ---
// title: My post title
// date: JUL 20, 2026
// category: EDUCATION
// readTime: 5 MIN
// cover: /assets/blog/cover-my-post.jpg
// excerpt: One-sentence teaser for the blog index card.
// ---
// Markdown body follows.
const CONTENT_DIR = path.join(process.cwd(), 'content', 'posts');

function parseFrontmatter(raw) {
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return [{}, raw];
  const meta = {};
  for (const line of m[1].split('\n')) {
    const i = line.indexOf(':');
    if (i > 0) meta[line.slice(0, i).trim()] = line.slice(i + 1).trim();
  }
  return [meta, m[2]];
}

export function getAllPosts() {
  const mdPosts = [];
  if (fs.existsSync(CONTENT_DIR)) {
    for (const file of fs.readdirSync(CONTENT_DIR)) {
      if (!file.endsWith('.md')) continue;
      const slug = file.replace(/\.md$/, '');
      const [meta, body] = parseFrontmatter(fs.readFileSync(path.join(CONTENT_DIR, file), 'utf8'));
      mdPosts.push({
        slug,
        title: meta.title || slug,
        meta: [meta.category, meta.date, meta.readTime].filter(Boolean).join(' · '),
        cover: meta.cover || '',
        excerpt: meta.excerpt || '',
        pageTitle: `${meta.title || slug} - PRIME DCX Insights`,
        html:
          (meta.cover ? `<article class="sec"><div class="prose__cover rv"><img src="${meta.cover}" alt="" /></div>` : '<article class="sec">') +
          `<div class="prose"><p class="prose__meta">${[meta.category, meta.date, meta.readTime].filter(Boolean).join(' · ')}</p>` +
          `<h1>${meta.title || slug}</h1>` + marked.parse(body) + '</div></article>',
      });
    }
  }
  // markdown posts first (newest additions), then the legacy set in original order
  return [...mdPosts, ...legacyPosts];
}
