import { legal } from '../../../lib/legal.mjs';

export const metadata = { title: 'AML/KYC Policy — PRIME DCX' };

export default function Page() {
  return (
    <main>
      <div className="legal-back"><a className="backlink" href="/">BACK TO HOME</a></div>
      <div dangerouslySetInnerHTML={{ __html: legal['aml-kyc'].html }} />
    </main>
  );
}
