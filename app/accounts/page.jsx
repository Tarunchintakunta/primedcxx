import { pages } from '../../lib/pages.mjs';

export const metadata = { title: 'Account Types — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pages['accounts'].html }} />;
}
