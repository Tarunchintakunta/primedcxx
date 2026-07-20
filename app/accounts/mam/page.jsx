import { pagesAccountsSub } from '../../../lib/pages-accounts-sub.mjs';

export const metadata = { title: 'MAM Accounts — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesAccountsSub['mam'].html }} />;
}
