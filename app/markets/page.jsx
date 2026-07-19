import { pages } from '../../lib/pages.mjs';

export const metadata = { title: 'Markets — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pages['markets'].html }} />;
}
