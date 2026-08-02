import { pagesLearn } from '../../../../lib/pages-learn.mjs';

export const metadata = { title: 'Trading Glossary - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesLearn['glossary'].html }} />;
}
