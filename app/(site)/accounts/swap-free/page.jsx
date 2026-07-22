import { pagesAccountsSub } from '../../../../lib/pages-accounts-sub.mjs';

export const metadata = { title: 'Swap-Free Account - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesAccountsSub['swap-free'].html }} />;
}
