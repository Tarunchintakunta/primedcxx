import Script from 'next/script';
import './home.css';

export const metadata = {
  title: 'PRIME DCX - Trade Without Limits',
  description: 'PRIME DCX. A next-generation CFD trading platform. 0.0 pip spreads, instant execution, 24/5 global markets.',
  icons: { icon: '/assets/brand/icon.png' },
};

export default function HomePage() {
  return (
    <>
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Unbounded:wght@300;400;600;800&family=Archivo:wght@400;500;600&family=IBM+Plex+Mono:wght@400;500;600&display=swap"
        rel="stylesheet"
      />

      {/* ============ LOADER ============ */}
      <div className="loader" id="loader" aria-hidden="true">
        <div className="loader-word">PRIME<i className="lg-div"></i><em>DCX</em></div>
        <div className="loader-bar"><div className="loader-bar-fill" id="loaderFill"></div></div>
        <div className="loader-pct mono" id="loaderPct">00%</div>
      </div>

      {/* ============ FIXED CINEMA STAGE ============ */}
      <div className="stage" id="stage" aria-hidden="true">
        <canvas id="film"></canvas>
        <div className="stage-vignette"></div>
        <div className="stage-grain"></div>
      </div>

      {/* ============ TOP NAV ============ */}
      <header className="nav">
        <a className="nav-brand" href="/" aria-label="PRIME DCX home">
          <span className="nav-word">PRIME<i className="lg-div"></i><em>DCX</em></span>
        </a>
        <nav className="nav-links mono" aria-label="Main">
          <a href="/markets/">MARKETS</a>
          <a href="/accounts/">ACCOUNTS</a>
          <a href="/platform/">PLATFORM</a>
          <a href="/partners/">PARTNERS</a>
          <a href="/blog/">INSIGHTS</a>
          <a href="/company/">COMPANY</a>
          <a href="https://client.primedcx.com/en/auth/sign-in">LOG IN</a>
        </nav>
        <a className="nav-cta mono" href="https://client.primedcx.com/en/auth/sign-up">START TRADING</a>
      </header>

      {/* ============ RIGHT-EDGE HUD / ALTIMETER (signature) ============ */}
      <aside className="hud" id="hud" aria-hidden="true">
        <div className="hud-top mono">
          <span className="hud-dot"></span> LIVE
        </div>

        <div className="hud-zone">
          <div className="hud-zone-label mono">ZONE</div>
          <div className="hud-zone-flap" id="zoneFlap">
            <span className="flap-text mono" id="zoneText">STREET</span>
          </div>
          <div className="hud-zone-index mono" id="zoneIndex">01 / 05</div>
        </div>

        <div className="hud-data mono">
          <div className="hud-row"><span className="k">EUR/USD</span><span className="v" id="tSpread">0.0</span></div>
          <div className="hud-row"><span className="k">EXEC</span><span className="v" id="tExec">38ms</span></div>
          <div className="hud-row"><span className="k">PAIRS</span><span className="v" id="tPairs">0</span></div>
          <div className="hud-row"><span className="k">ALT</span><span className="v" id="tAlt">12m</span></div>
        </div>

        <div className="hud-alti" id="alti">
          <div className="hud-alti-fill" id="altiFill"></div>
          <div className="hud-alti-ticks">
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
            <i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i>
          </div>
        </div>

        <div className="hud-bottom mono" id="hudPct">000</div>
      </aside>

      {/* ============ SCROLL SCENES (fixed, revealed per zone) ============ */}
      <main className="scenes" id="top">

        {/* ZONE 1 · STREET · hero */}
        <section className="scene scene-hero" data-zone="0" aria-label="Hero">
          <div className="scene-inner">
            <p className="eyebrow mono reveal">PRIME DCX - NEXT-GEN CFD PLATFORM</p>
            <h1 className="hero-title">
              <span className="line reveal">TRADE</span>
              <span className="line reveal">WITHOUT</span>
              <span className="line reveal accent gold">LIMITS.</span>
            </h1>
            <p className="hero-sub reveal">Scale with PRIME DCX - 60+ pairs with institutional-grade execution, zero spreads and deep liquidity. From the street to the globe.</p>
            <div className="hero-ctas reveal">
              <a className="btn btn-gold" href="https://client.primedcx.com/en/auth/sign-up" role="button">Start Trading</a>
              <a className="btn btn-dark" href="https://client.primedcx.com/en/auth/sign-in" role="button">Launch Web Trader</a>
            </div>
            <div className="scroll-hint reveal" aria-hidden="true">
              <div className="scroll-hint-line"></div>
              <span className="mono">SCROLL TO ASCEND</span>
            </div>
          </div>
        </section>

        {/* ZONE 2 · RISING · stats */}
        <section className="scene scene-stats" data-zone="1" aria-label="Execution stats">
          <div className="scene-inner">
            <p className="eyebrow mono reveal">02 - RISING</p>
            <h2 className="scene-title reveal">Built for the<br /><span className="accent">speed of the street.</span></h2>
            <div className="stats">
              <div className="stat reveal">
                <div className="stat-num"><span className="count" data-to="0.0" data-dec="1">0.0</span></div>
                <div className="stat-label mono">PIP SPREADS FROM</div>
              </div>
              <div className="stat reveal">
                <div className="stat-num"><span className="count" data-to="38" data-suffix="ms">0</span></div>
                <div className="stat-label mono">AVG. EXECUTION</div>
              </div>
              <div className="stat reveal">
                <div className="stat-num"><span className="count" data-to="99.9" data-dec="1" data-suffix="%">0</span></div>
                <div className="stat-label mono">FILL RATE</div>
              </div>
            </div>
          </div>
        </section>

        {/* ZONE 3 · SKYLINE · multi-asset */}
        <section className="scene scene-assets" data-zone="2" aria-label="Markets">
          <div className="scene-inner">
            <p className="eyebrow mono reveal">03 - BREAKING THE SKYLINE</p>
            <h2 className="scene-title reveal">One account.<br /><span className="accent">Every market.</span></h2>
            <ul className="assets">
              <li className="asset reveal">
                <span className="asset-name">Forex</span>
                <span className="asset-meta mono">60+ PAIRS · EUR/USD 0.0</span>
              </li>
              <li className="asset reveal">
                <span className="asset-name">Crypto</span>
                <span className="asset-meta mono">40+ COINS · 24/7 CFD</span>
              </li>
              <li className="asset reveal">
                <span className="asset-name">Indices</span>
                <span className="asset-meta mono">SPX · NAS · DAX · NIKKEI</span>
              </li>
              <li className="asset reveal">
                <span className="asset-name">Commodities</span>
                <span className="asset-meta mono">GOLD · OIL · SILVER · GAS</span>
              </li>
            </ul>
          </div>
        </section>

        {/* ZONE 4 · ORBIT · global */}
        <section className="scene scene-globe" data-zone="3" aria-label="Global markets">
          <div className="scene-inner">
            <p className="eyebrow mono reveal">04 - ORBIT</p>
            <h2 className="scene-title reveal">The whole planet,<br /><span className="accent gold">on one screen.</span></h2>
            <p className="scene-copy reveal">Liquidity routed through regulated venues in every major session - follow the sun from Sydney open to New York close, 24 hours a day, 5 days a week.</p>
            <div className="cities mono">
              <span className="city reveal">LONDON <em id="ckLON">08:00</em></span>
              <span className="city reveal">NEW YORK <em id="ckNYC">03:00</em></span>
              <span className="city reveal">TOKYO <em id="ckTYO">17:00</em></span>
              <span className="city reveal">DUBAI <em id="ckDXB">12:00</em></span>
            </div>
          </div>
        </section>

        {/* ZONE 5 · GLOBE · CTA */}
        <section className="scene scene-cta" data-zone="4" id="start" aria-label="Start trading">
          <div className="scene-inner center">
            <p className="eyebrow mono reveal">05 - GLOBE</p>
            <h2 className="cta-title">
              <span className="line reveal">YOUR MARKET</span>
              <span className="line reveal accent">AWAITS.</span>
            </h2>
            <a className="cta-btn reveal" href="https://client.primedcx.com/en/auth/sign-up" role="button">
              <span>Start Trading</span>
              <svg viewBox="0 0 24 24" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2"/></svg>
            </a>
            <p className="cta-fine mono reveal">DEMO ACCOUNT · NO DEPOSIT REQUIRED · REGULATED LIQUIDITY</p>
          </div>
        </section>

      </main>

      {/* scroll track: this element's height defines the flight length */}
      <div className="track" id="track" aria-hidden="true"></div>

      {/* ============ FOOTER (after the flight) ============ */}
      <footer className="footer">
        <div className="footer-grid">
          <div className="footer-col footer-brand-col">
            <span className="footer-brand">PRIME<i className="lg-div"></i><em>DCX</em></span>
            <p className="footer-tag">A next-generation CFD trading platform. From the street to the globe - 0.0 pip spreads, instant execution, 24/5 global markets.</p>
            <div className="footer-social">
              <a href="https://x.com/PrimeDCX" aria-label="PRIME DCX on X">X</a>
              <a href="https://www.instagram.com/primedcx/" aria-label="PRIME DCX on Instagram">IG</a>
              <a href="https://www.linkedin.com/company/prime-dcx/" aria-label="PRIME DCX on LinkedIn">IN</a>
            </div>
          </div>
          <div className="footer-col">
            <h4 className="mono">EXPLORE</h4>
            <a href="/markets/">Markets</a>
            <a href="/accounts/">Accounts</a>
            <a href="/platform/">Platform</a>
            <a href="/partners/">Partners</a>
            <a href="/blog/">Insights</a>
            <a href="/company/">Company</a>
          </div>
          <div className="footer-col">
            <h4 className="mono">LEGAL</h4>
            <a href="/legal/terms/">Terms &amp; Conditions</a>
            <a href="/legal/privacy/">Privacy Policy</a>
            <a href="/legal/risk/">Risk Disclosure</a>
            <a href="/legal/aml-kyc/">AML / KYC Policy</a>
          </div>
          <div className="footer-col">
            <h4 className="mono">CONTACT</h4>
            <p className="footer-addr">Prime DCX Ltd.<br />Registration Nº 2025-00921<br />Ground Floor, The Sotheby Building,<br />Rodney Village, Rodney Bay,<br />Gros-Islet, Saint Lucia</p>
            <a href="mailto:support@primedcx.com">support@primedcx.com</a>
          </div>
        </div>
        <div className="footer-inner">
          <span className="mono">© 2026 Prime DCX Ltd. All rights reserved.</span>
          <span className="mono footer-risk">Risk warning: CFDs are leveraged products and carry a high level of risk to your capital. Trade responsibly.</span>
        </div>
      </footer>

      <Script src="https://unpkg.com/lenis@1.1.14/dist/lenis.min.js" strategy="beforeInteractive" />
      <Script src="/app.js" strategy="afterInteractive" />
    </>
  );
}
