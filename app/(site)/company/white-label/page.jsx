import { pagesCompanySub } from '../../../../lib/pages-company-sub.mjs';

export const metadata = { title: 'White Label - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesCompanySub['white-label'].html }} />;
}
