import { pagesTools } from '../../../lib/pages-tools.mjs';

export const metadata = { title: 'Economic Calendar — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesTools['economic-calendar'].html }} />;
}
