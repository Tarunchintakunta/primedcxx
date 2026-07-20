import { pagesAccountsSub } from '../../../lib/pages-accounts-sub.mjs';

export const metadata = { title: 'Demo Account — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesAccountsSub['demo'].html }} />;
}
