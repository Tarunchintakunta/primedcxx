import { pagesCompanySub } from '../../lib/pages-company-sub.mjs';

export const metadata = { title: 'Open an Account — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesCompanySub['open-account'].html }} />;
}
