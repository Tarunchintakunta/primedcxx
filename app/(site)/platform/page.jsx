import { pages } from '../../../lib/pages.mjs';

export const metadata = { title: 'Web Trader Platform - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pages['platform'].html }} />;
}
