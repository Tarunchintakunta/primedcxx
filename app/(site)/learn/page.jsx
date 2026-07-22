import { pagesLearn } from '../../../lib/pages-learn.mjs';

export const metadata = { title: 'Learn - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesLearn['hub'].html }} />;
}
