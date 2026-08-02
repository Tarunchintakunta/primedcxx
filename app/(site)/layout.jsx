import Script from 'next/script';
import '../office.css';
import SiteNav from './SiteNav.jsx';
import { NAV } from '../../lib/nav.mjs';

// Footer mirrors the header IA, minus the legal column which gets its own row.
const FOOT_COLS = NAV.filter(n => n.label !== 'COMPANY').map(n => ({
  title: n.label,
  links: n.cols.flatMap(c => c.links).slice(0, 6),
}));

const COMPANY = NAV.find(n => n.label === 'COMPANY');

export default function SiteLayout({ children }) {
  return (
    <div className="page">
      <SiteNav />

      {children}

      <footer className="foot">
        <div className="foot__grid">
          <div className="foot__brandcol">
            <span className="foot__brand">
              PRIME<span className="lg-div"></span><span className="lg-dcx">DCX</span>
            </span>
            <p className="foot__tag">
              Global Markets. Prime Access. Institutional-grade execution across forex, crypto,
              commodities and indices, with spreads from 0.0 pips and published trading conditions.
            </p>
            <div className="foot__social">
              <a href="https://x.com/PrimeDCX" aria-label="PRIME DCX on X">X</a>
              <a href="https://www.instagram.com/primedcx/" aria-label="PRIME DCX on Instagram">IG</a>
              <a href="https://www.linkedin.com/company/prime-dcx/" aria-label="PRIME DCX on LinkedIn">IN</a>
            </div>
          </div>

          {FOOT_COLS.map(col => (
            <div className="foot__col" key={col.title}>
              <h4 className="mono">{col.title}</h4>
              {col.links.map(l => (
                <a key={l.href + l.label} href={l.href}>
                  {l.label}{l.soon ? <span className="foot__soon mono">SOON</span> : null}
                </a>
              ))}
            </div>
          ))}

          <div className="foot__col">
            <h4 className="mono">COMPANY</h4>
            {COMPANY.cols[0].links.slice(0, 4).map(l => (
              <a key={l.href + l.label} href={l.href}>
                {l.label}{l.soon ? <span className="foot__soon mono">SOON</span> : null}
              </a>
            ))}
            <a href="/partners/">IB Partner Programme</a>
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
            <p className="foot__addr">
              Prime DCX Ltd.<br />Registration Nº 2025-00921<br />
              Ground Floor, The Sotheby Building,<br />Rodney Village, Rodney Bay,<br />
              Gros-Islet, Saint Lucia
            </p>
            <a href="mailto:support@primedcx.com">support@primedcx.com</a>
            <a href="mailto:partners@primedcx.com">partners@primedcx.com</a>
          </div>
        </div>

        <div className="foot__legal">
          <p>© 2026 Prime DCX Ltd. All rights reserved. · Legal Name: Prime DCX Ltd. · Registration Number: 2025-00921 ·
          Registered Address: Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia ·
          <a href="mailto:support@primedcx.com"> support@primedcx.com</a></p>
          <p className="foot__risk">Risk warning: Trading involves risk and may not be suitable for all investors.
          CFDs are leveraged products and carry a high level of risk to your capital. You can lose more than your
          initial deposit. Read the full <a href="/legal/risk/">risk disclosure</a> before you trade.</p>
        </div>
      </footer>

      <Script src="/js/site.js" strategy="afterInteractive" />
    </div>
  );
}
