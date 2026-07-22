import { pagesLearn } from '../../../../lib/pages-learn.mjs';

export const metadata = { title: 'Help Centre - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesLearn['help-centre'].html }} />;
}
