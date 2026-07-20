import { pagesConditions } from '../../../lib/pages-conditions.mjs';

export const metadata = { title: 'Spreads — Trading Conditions — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesConditions['spreads'].html }} />;
}
