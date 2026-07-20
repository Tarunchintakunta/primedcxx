import { pagesMarketsSub } from '../../../lib/pages-markets-sub.mjs';

export const metadata = { title: 'Forex — Markets — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesMarketsSub['forex'].html }} />;
}
