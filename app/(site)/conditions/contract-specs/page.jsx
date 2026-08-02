import { pagesSpecs } from '../../../../lib/pages-specs.mjs';

export const metadata = { title: 'Contract Specifications - Trading Conditions - PRIME DCX' };

export default function Page() {
  return <main dangerouslySetInnerHTML={{ __html: pagesSpecs['contract-specs'].html }} />;
}
