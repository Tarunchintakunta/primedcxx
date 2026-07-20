import { pagesAccountsSub } from '../../../lib/pages-accounts-sub.mjs';

export const metadata = { title: 'Raw Spread Account — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesAccountsSub['raw-spread'].html }} />;
}
