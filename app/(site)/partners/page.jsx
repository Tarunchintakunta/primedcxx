import { pages } from '../../../lib/pages.mjs';

export const metadata = { title: 'IB Partner Programme - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pages['partners'].html }} />;
}
