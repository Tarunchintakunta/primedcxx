import { pagesTools } from '../../lib/pages-tools.mjs';

export const metadata = { title: 'Tools — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesTools['hub'].html }} />;
}
