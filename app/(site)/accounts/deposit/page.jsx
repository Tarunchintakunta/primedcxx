import { pagesAccountsSub } from '../../../../lib/pages-accounts-sub.mjs';

export const metadata = { title: 'How to Deposit - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesAccountsSub['deposit'].html }} />;
}
