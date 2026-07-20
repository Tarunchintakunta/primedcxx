import { pagesCompanySub } from '../../../lib/pages-company-sub.mjs';

export const metadata = { title: 'About Us — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesCompanySub['about'].html }} />;
}
