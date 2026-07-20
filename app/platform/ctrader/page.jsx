import { pagesPlatformSub } from '../../../lib/pages-platform-sub.mjs';

export const metadata = { title: 'cTrader — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesPlatformSub['ctrader'].html }} />;
}
