// Markets sub-pages: forex, crypto, commodities, indices (live) + stocks, bonds, futures (dormant)
export const pagesMarketsSub = {
  "forex": {
    "title": "Forex — Markets — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/markets/">BACK TO MARKETS</a>
    <p class="phero__eyebrow mono">MARKETS</p>
    <h1>Forex &mdash; 150+ pairs.</h1>
    <p>Majors, minors and exotics with raw interbank pricing, spreads from 0.0 pips and no requotes.
    The deepest book on the platform.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE BOOK</p>
      <h2>A representative slice of the book</h2>
      <p class="sec__sub">150+ pairs stream inside the platform. A sample of what you'll find across majors, minors and exotics.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>PAIR</th><th>NAME</th><th style="text-align:right">CLASS</th></tr></thead>
        <tbody>
          <tr><td class="sym">EUR/USD</td><td class="nm">Euro / US Dollar</td><td class="px">Major</td></tr>
          <tr><td class="sym">GBP/USD</td><td class="nm">Pound / US Dollar</td><td class="px">Major</td></tr>
          <tr><td class="sym">USD/JPY</td><td class="nm">US Dollar / Yen</td><td class="px">Major</td></tr>
          <tr><td class="sym">AUD/USD</td><td class="nm">Aussie / US Dollar</td><td class="px">Major</td></tr>
          <tr><td class="sym">USD/CAD</td><td class="nm">US Dollar / Loonie</td><td class="px">Major</td></tr>
          <tr><td class="sym">EUR/GBP</td><td class="nm">Euro / Pound</td><td class="px">Minor</td></tr>
          <tr><td class="sym">EUR/JPY</td><td class="nm">Euro / Yen</td><td class="px">Minor</td></tr>
          <tr><td class="sym">GBP/JPY</td><td class="nm">Pound / Yen</td><td class="px">Minor</td></tr>
          <tr><td class="sym">USD/TRY</td><td class="nm">US Dollar / Lira</td><td class="px">Exotic</td></tr>
          <tr><td class="sym">USD/ZAR</td><td class="nm">US Dollar / Rand</td><td class="px">Exotic</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHY FOREX HERE</p>
      <h2>Built for the pair you trade most</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">0.0</div><h3>Spreads from 0.0 pips</h3><p>Raw interbank pricing on majors, straight from aggregated liquidity.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8734;</div><h3>No requotes</h3><p>Direct market access with no dealing desk between your order and the book.</p></div>
      <div class="fcard rv"><div class="fcard__ic">150+</div><h3>Full currency coverage</h3><p>Majors, minors and exotics in one account, one interface.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Trade forex from $100.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Spreads from 0.0 pips on majors.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "crypto": {
    "title": "Crypto — Markets — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/markets/">BACK TO MARKETS</a>
    <p class="phero__eyebrow mono">MARKETS</p>
    <h1>Crypto, traded as CFDs.</h1>
    <p>BTC, ETH and major altcoins &mdash; long or short, 24/7, with no wallets and no custody risk.
    Up to 100x on flagship pairs.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHY CFDs</p>
      <h2>Exposure without custody</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#8645;</div><h3>Long or short</h3><p>Take a position either direction &mdash; crypto CFDs don't require you to hold the underlying asset.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128274;</div><h3>No wallets, no custody risk</h3><p>No private keys to manage and no exchange counterparty risk to carry.</p></div>
      <div class="fcard rv"><div class="fcard__ic">24/7</div><h3>Always open</h3><p>Crypto never closes on PRIME DCX &mdash; trade weekends and holidays alike.</p></div>
      <div class="fcard rv"><div class="fcard__ic">100x</div><h3>Up to 100x on flagship pairs</h3><p>Leverage available on BTC and ETH, sized to your risk tolerance.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Trade BTC and ETH today.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Trade from $100.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "commodities": {
    "title": "Commodities — Markets — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/markets/">BACK TO MARKETS</a>
    <p class="phero__eyebrow mono">MARKETS</p>
    <h1>Gold, silver, oil.</h1>
    <p>Tight spreads and reliable depth on the classic hedge &mdash; one click away from your FX book.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE BOOK</p>
      <h2>Metals and energy</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">Au</div><h3>Gold (XAU/USD)</h3><p>The reference hedge, traded on the same tight spreads as your FX positions.</p></div>
      <div class="fcard rv"><div class="fcard__ic">Ag</div><h3>Silver (XAG/USD)</h3><p>Higher-beta exposure to the metals complex.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128293;</div><h3>Oil &amp; energy</h3><p>Crude and energy CFDs alongside the metals book, in the same account.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Add the classic hedge.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Trade from $100.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "indices": {
    "title": "Indices — Markets — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/markets/">BACK TO MARKETS</a>
    <p class="phero__eyebrow mono">MARKETS</p>
    <h1>Whole economies, one CFD.</h1>
    <p>Trade global market indices through index CFDs, from micro size upward &mdash; a single position
    on the direction of an entire market.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHY INDICES</p>
      <h2>Breadth, not a single stock</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">IX</div><h3>Global index coverage</h3><p>Leading indices from the world's major exchanges, in one account.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8645;</div><h3>Long or short</h3><p>Position on an entire market's direction without picking individual names.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8981;</div><h3>Micro sizing</h3><p>Scale a position from micro size upward to match your account and risk tolerance.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Trade the index, not just the stock.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Trade from $100.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "stocks": {
    "title": "Stocks CFDs — Markets — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/last2.png')"></div>
    <a class="backlink" href="/markets/">BACK TO MARKETS</a>
    <p class="phero__eyebrow mono">MARKETS <span class="badge-soon">COMING SOON</span></p>
    <h1>Stocks &amp; Equities CFDs</h1>
    <p>CFD trading on global stocks and shares is coming to PRIME DCX &mdash; the same execution
    standard you trade forex and crypto on, extended to headline names.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Headline names, familiar execution</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#8645;</div><h3>Long or short</h3><p>Position on individual equities without holding the underlying shares.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128202;</div><h3>Global coverage</h3><p>Headline names across major exchanges, in the same account as your other markets.</p></div>
      <div class="fcard rv"><div class="fcard__ic">0</div><h3>Zero custody overhead</h3><p>No brokerage account transfers, no settlement delays &mdash; a CFD, not a share purchase.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to trade stock CFDs.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment Stocks CFDs go live on PRIME DCX.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20%E2%80%94%20Stocks%20CFDs">Notify Me When Available</a>
    </div>
  </section>

  `
  },

  "bonds": {
    "title": "Bonds CFDs — Markets — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/last2.png')"></div>
    <a class="backlink" href="/markets/">BACK TO MARKETS</a>
    <p class="phero__eyebrow mono">MARKETS <span class="badge-soon">COMING SOON</span></p>
    <h1>Bonds CFDs</h1>
    <p>Government and corporate bond CFDs are on the roadmap &mdash; a way to position on interest-rate
    direction alongside your existing markets.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Rate exposure, without the bond desk</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#127970;</div><h3>Government bonds</h3><p>CFDs on major sovereign issuance, tracking price and yield direction.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128188;</div><h3>Corporate bonds</h3><p>Exposure to corporate credit markets through the same account you already trade.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8645;</div><h3>Long or short</h3><p>Position on rate moves in either direction.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to trade bond CFDs.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment Bonds CFDs go live on PRIME DCX.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20%E2%80%94%20Bonds%20CFDs">Notify Me When Available</a>
    </div>
  </section>

  `
  },

  "futures": {
    "title": "Futures CFDs — Markets — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/last2.png')"></div>
    <a class="backlink" href="/markets/">BACK TO MARKETS</a>
    <p class="phero__eyebrow mono">MARKETS <span class="badge-soon">COMING SOON</span></p>
    <h1>Futures CFDs</h1>
    <p>Commodity and financial futures CFDs are on the roadmap &mdash; term exposure to the markets
    you already trade spot, in the same account.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Term structure, not just spot</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#9203;</div><h3>Commodity futures</h3><p>Term exposure to energy and metals markets alongside spot commodities.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128200;</div><h3>Financial futures</h3><p>Index and rate futures CFDs, extending the indices book you already trade.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8645;</div><h3>Long or short</h3><p>Position on term direction in either direction, same execution standard.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to trade futures CFDs.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment Futures CFDs go live on PRIME DCX.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20%E2%80%94%20Futures%20CFDs">Notify Me When Available</a>
    </div>
  </section>

  `
  }
};
