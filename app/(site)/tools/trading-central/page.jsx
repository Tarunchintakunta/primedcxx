import { pagesTools } from '../../../../lib/pages-tools.mjs';

export const metadata = { title: 'Trading Central & Autochartist - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesTools['trading-central'].html }} />;
}
