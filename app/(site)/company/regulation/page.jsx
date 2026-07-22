import { pagesCompanySub } from '../../../../lib/pages-company-sub.mjs';

export const metadata = { title: 'Regulation - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesCompanySub['regulation'].html }} />;
}
