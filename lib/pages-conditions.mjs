// Trading Conditions section: overview hub, spreads, trading hours, leverage (live) + swap rates (dormant)
export const pagesConditions = {
  "overview": {
    "title": "Trading Conditions — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/">BACK TO HOME</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>The terms you trade on.</h1>
    <p>Spreads, hours and leverage &mdash; published, specific, and consistent across every account until you
    choose to change tier.</p>
  </section>

  <section class="sec">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">CONDITIONS</p>
      <h2>Explore trading conditions</h2>
    </div>
    <div class="fgrid">
      <a class="fcard rv" href="/conditions/spreads/">
        <div class="fcard__ic">0.0</div><h3>Spreads</h3>
        <p>From 0.0 pips on majors and indices, with per-account-tier pricing across ECN, PRO and PRIME.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View spreads &rarr;</span>
      </a>
      <a class="fcard rv" href="/conditions/trading-hours/">
        <div class="fcard__ic">24/7</div><h3>Trading Hours</h3>
        <p>FX runs 24/5, crypto trades around the clock, every day of the week.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View hours &rarr;</span>
      </a>
      <a class="fcard rv" href="/conditions/leverage/">
        <div class="fcard__ic">1:300</div><h3>Leverage</h3>
        <p>Up to 1:300 on PRIME, with margin call at 100% and stop-out at 30% across every account.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View leverage &rarr;</span>
      </a>
      <a class="fcard rv" href="/conditions/swap-rates/">
        <div class="fcard__ic">SWP</div><h3>Swap Rates <span class="badge-soon">COMING SOON</span></h3>
        <p>Published overnight financing rates for every instrument on the book.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View details &rarr;</span>
      </a>
    </div>
  </section>

  `
  },

  "spreads": {
    "title": "Spreads — Trading Conditions — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>Spreads, published by tier.</h1>
    <p>Spreads start from 0.0 pips on majors and indices, straight from aggregated liquidity. Your account
    tier sets the baseline you trade on.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">BY ACCOUNT</p>
      <h2>Spread and commission by tier</h2>
      <p class="sec__sub">The figures below are the baseline for each account tier. Live executable spreads stream inside the platform and move with market conditions.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>ACCOUNT</th><th style="text-align:right">SPREAD FROM</th><th style="text-align:right">COMMISSION</th><th>BEST FOR</th></tr></thead>
        <tbody>
          <tr><td class="sym">ECN</td><td class="px">0.3 pips</td><td class="px">$7 / lot</td><td class="nm">Scalpers and high-frequency execution</td></tr>
          <tr><td class="sym">PRO</td><td class="px">1.5 pips</td><td class="px">$0</td><td class="nm">Zero-commission, straightforward trading</td></tr>
          <tr><td class="sym">PRIME</td><td class="px">0.4 pips</td><td class="px">$0</td><td class="nm">Tight spreads with zero commission</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Open the account built for your spread.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Trade from $100 on any account type.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "trading-hours": {
    "title": "Trading Hours — Trading Conditions — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>When the market is open.</h1>
    <p>Forex, commodities and indices trade five days a week, following the standard global session structure.
    Crypto never closes.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">BY MARKET</p>
      <h2>Two trading calendars</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">24/5</div><h3>Forex, commodities &amp; indices</h3><p>Trading runs continuously from the Monday market open through the Friday close, following the standard global session structure.</p></div>
      <div class="fcard rv"><div class="fcard__ic">24/7</div><h3>Crypto</h3><p>Digital assets trade every hour of every day, weekends included &mdash; the book never closes.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Trade whenever the market moves.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Trade from $100 on any account type.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "leverage": {
    "title": "Leverage — Trading Conditions — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>Leverage, set by account.</h1>
    <p>Leverage scales with account tier, up to 1:300 on PRIME. Margin call triggers at 100% equity, stop-out
    at 30%, on every account.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">BY ACCOUNT</p>
      <h2>Leverage by tier</h2>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>ACCOUNT</th><th style="text-align:right">LEVERAGE</th><th style="text-align:right">MARGIN CALL</th><th style="text-align:right">STOP OUT</th></tr></thead>
        <tbody>
          <tr><td class="sym">ECN</td><td class="px">1:100</td><td class="px">100%</td><td class="px">30%</td></tr>
          <tr><td class="sym">PRO</td><td class="px">1:200</td><td class="px">100%</td><td class="px">30%</td></tr>
          <tr><td class="sym">PRIME</td><td class="px">1:300</td><td class="px">100%</td><td class="px">30%</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">RISK</p>
      <h2>Leverage cuts both ways</h2>
      <p class="sec__sub">Higher leverage means smaller price moves produce larger changes in your equity, in either direction. Read the full <a href="/legal/risk/" style="color:var(--gold)">risk disclosure</a> before you trade.</p>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Choose the leverage that fits your book.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Trade from $100 on any account type.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "swap-rates": {
    "title": "Swap Rates — Trading Conditions — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS <span class="badge-soon">COMING SOON</span></p>
    <h1>Swap Rates</h1>
    <p>Published overnight financing rates for every instrument on the PRIME DCX book, broken out by long and
    short position and updated as market conditions move.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>A transparent swap schedule</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">%</div><h3>Per-instrument rates</h3><p>Long and short swap rates published for every forex, crypto, commodity and index CFD on the platform.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8635;</div><h3>Daily updates</h3><p>Rates refreshed as funding and financing conditions move, not left stale between reviews.</p></div>
      <div class="fcard rv"><div class="fcard__ic">0</div><h3>Swap-free eligibility</h3><p>A clear path to a swap-free account once the product is live.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Know your overnight costs before you hold.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment the swap rate schedule is published.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20%E2%80%94%20Swap%20Rates">Notify Me When Available</a>
    </div>
  </section>

  `
  }
};
