import { pagesPlatformSub } from '../../../../lib/pages-platform-sub.mjs';

export const metadata = { title: 'MetaTrader 4 - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesPlatformSub['mt4'].html }} />;
}
