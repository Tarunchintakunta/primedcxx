import { pagesTools } from '../../../lib/pages-tools.mjs';

export const metadata = { title: 'Copy Trading — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesTools['copy-trading'].html }} />;
}
