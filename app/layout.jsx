import Script from 'next/script';
import './office.css';

export const metadata = {
  title: 'PRIME DCX',
  description: 'PRIME DCX — a next-generation CFD trading platform. 0.0 pip spreads, instant execution, 24/5 global markets.',
  icons: { icon: '/assets/brand/icon.png' },
};

const NAV = [
  ['/markets/', 'MARKETS'],
  ['/accounts/', 'ACCOUNTS'],
  ['/platform/', 'PLATFORM'],
  ['/partners/', 'PARTNERS'],
  ['/blog/', 'INSIGHTS'],
  ['/company/', 'COMPANY'],
];

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="page">
        <header className="bar">
          <a className="bar__logo" href="/">
            <span className="lg-prime">PRIME</span>
            <span className="lg-div"></span>
            <span className="lg-dcx">DCX</span>
          </a>
          <nav className="bar__nav mono" aria-label="Primary">
            {NAV.map(([href, label]) => (
              <a key={href} href={href}>{label}</a>
            ))}
            <a href="https://client.primedcx.com/en/auth/sign-in">LOG IN</a>
            <a className="bar__cta" href="https://client.primedcx.com/en/auth/sign-up">START TRADING</a>
          </nav>
        </header>

        {children}

        <footer className="foot">
          <div className="foot__grid">
            <div>
              <span className="foot__brand">PRIME<span className="lg-div"></span><span className="lg-dcx">DCX</span></span>
              <p className="foot__tag">A next-generation CFD trading platform. From the street to the globe — 0.0 pip spreads, instant execution, 24/5 global markets.</p>
              <div className="foot__social">
                <a href="https://x.com/PrimeDCX" aria-label="PRIME DCX on X">X</a>
                <a href="https://www.instagram.com/primedcx/" aria-label="PRIME DCX on Instagram">IG</a>
                <a href="https://www.linkedin.com/company/prime-dcx/" aria-label="PRIME DCX on LinkedIn">IN</a>
              </div>
            </div>
            <div className="foot__col">
              <h4 className="mono">EXPLORE</h4>
              {NAV.map(([href, label]) => (
                <a key={href} href={href}>{label.charAt(0) + label.slice(1).toLowerCase()}</a>
              ))}
            </div>
            <div className="foot__col">
              <h4 className="mono">LEGAL</h4>
              <a href="/legal/terms/">Terms &amp; Conditions</a>
              <a href="/legal/privacy/">Privacy Policy</a>
              <a href="/legal/risk/">Risk Disclosure</a>
              <a href="/legal/aml-kyc/">AML / KYC Policy</a>
            </div>
            <div className="foot__col">
              <h4 className="mono">CONTACT</h4>
              <p className="foot__addr">Prime DCX Ltd.<br />Registration Nº 2025-00921<br />Ground Floor, The Sotheby Building,<br />Rodney Village, Rodney Bay,<br />Gros-Islet, Saint Lucia</p>
              <a href="mailto:support@primedcx.com">support@primedcx.com</a>
            </div>
          </div>
          <div className="foot__legal">
            <p>© 2026 Prime DCX Ltd. All rights reserved. · Legal Name: Prime DCX Ltd. · Registration Number: 2025-00921 ·
            Registered Address: Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia ·
            <a href="mailto:support@primedcx.com"> support@primedcx.com</a></p>
            <p className="foot__risk">Risk warning: CFDs are leveraged products and carry a high level of risk to your capital. Trade responsibly.</p>
          </div>
        </footer>

        <Script src="/js/site.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}
