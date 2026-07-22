import { pages } from '../../../lib/pages.mjs';

export const metadata = { title: 'Company - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pages['company'].html }} />;
}
