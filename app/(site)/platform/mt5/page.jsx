import { pagesPlatformSub } from '../../../../lib/pages-platform-sub.mjs';

export const metadata = { title: 'MetaTrader 5 - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesPlatformSub['mt5'].html }} />;
}
