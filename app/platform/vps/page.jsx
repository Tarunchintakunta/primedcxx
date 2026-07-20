import { pagesPlatformSub } from '../../../lib/pages-platform-sub.mjs';

export const metadata = { title: 'VPS Hosting — PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesPlatformSub['vps'].html }} />;
}
