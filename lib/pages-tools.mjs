// Tools section: hub + Economic Calendar, Calculators, Trading Central/Autochartist, Copy Trading (all dormant - coming soon)
export const pagesTools = {
  "hub": {
    "title": "Tools - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/">BACK TO HOME</a>
    <p class="phero__eyebrow mono">TOOLS <span class="badge-soon">COMING SOON</span></p>
    <h1>Every edge, in one place.</h1>
    <p>PRIME DCX is building a full suite of trading tools alongside the platform - live market data,
    calculators and third-party analysis, designed to the same standard as everything else here.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>The tools suite</h2>
    </div>
    <div class="fgrid">
      <a class="fcard rv" href="/tools/economic-calendar/"><div class="fcard__ic">&#128197;</div><h3>Economic Calendar <span class="badge-soon">COMING SOON</span></h3><p>Live global economic event calendar, filterable by currency and impact.</p></a>
      <a class="fcard rv" href="/tools/calculators/"><div class="fcard__ic">&#8721;</div><h3>Calculators <span class="badge-soon">COMING SOON</span></h3><p>Pip, margin, profit/loss, currency and swap calculators for every instrument.</p></a>
      <a class="fcard rv" href="/tools/trading-central/"><div class="fcard__ic">TC</div><h3>Trading Central &amp; Autochartist <span class="badge-soon">COMING SOON</span></h3><p>Third-party technical analysis and automated pattern recognition.</p></a>
      <a class="fcard rv" href="/tools/copy-trading/"><div class="fcard__ic">&#8644;</div><h3>Copy Trading <span class="badge-soon">COMING SOON</span></h3><p>Follow verified signal providers, or let others follow you.</p></a>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to use the tools suite.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you as each tool goes live on PRIME DCX.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Tools">Notify Me When Available</a>
    </div>
  </section>

  `
  },
  "economic-calendar": {
    "title": "Economic Calendar - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/tools/">BACK TO TOOLS</a>
    <p class="phero__eyebrow mono">TOOLS <span class="badge-soon">COMING SOON</span></p>
    <h1>Economic Calendar</h1>
    <p>A live, filterable calendar of the global economic events that move forex, gold and indices -
    arriving inside the PRIME DCX platform.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Every release that matters</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#128197;</div><h3>Every major release</h3><p>Central bank decisions, employment data, inflation prints and more, updated in real time.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9776;</div><h3>Impact filtering</h3><p>Filter by currency, instrument and expected market impact, so you only see what matters to your book.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9635;</div><h3>Built into the platform</h3><p>No separate tab or third-party feed - the calendar lives inside the same terminal you trade from.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to see the calendar.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment the Economic Calendar goes live on PRIME DCX.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Economic%20Calendar">Notify Me When Available</a>
    </div>
  </section>

  `
  },
  "calculators": {
    "title": "Calculators - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/tools/">BACK TO TOOLS</a>
    <p class="phero__eyebrow mono">TOOLS <span class="badge-soon">COMING SOON</span></p>
    <h1>Calculators</h1>
    <p>A complete calculator suite for sizing and planning trades before you place them - arriving
    alongside the rest of the tools suite.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Size every trade before you place it</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">PIP</div><h3>Pip Calculator</h3><p>Calculate the pip value of any position, in your account currency, before you trade it.</p></div>
      <div class="fcard rv"><div class="fcard__ic">MGN</div><h3>Margin Calculator</h3><p>Work out the margin required to open a position at your chosen leverage.</p></div>
      <div class="fcard rv"><div class="fcard__ic">P&amp;L</div><h3>Profit / Loss Calculator</h3><p>Estimate the profit or loss on a position before or after you open it.</p></div>
      <div class="fcard rv"><div class="fcard__ic">FX</div><h3>Currency Converter</h3><p>Live-rate conversion across every currency pair on the platform.</p></div>
      <div class="fcard rv"><div class="fcard__ic">SWP</div><h3>Swap Calculator</h3><p>Calculate the overnight financing cost of holding a position past rollover.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to use the calculator suite.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment the calculators go live on PRIME DCX.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Calculators">Notify Me When Available</a>
    </div>
  </section>

  `
  },
  "trading-central": {
    "title": "Trading Central & Autochartist - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/tools/">BACK TO TOOLS</a>
    <p class="phero__eyebrow mono">TOOLS <span class="badge-soon">COMING SOON</span></p>
    <h1>Trading Central &amp; Autochartist</h1>
    <p>Professional-grade market analysis, licensed directly into the platform - technical research
    and automated pattern recognition from two established third-party research providers.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Research built into the terminal</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">TC</div><h3>Trading Central</h3><p>In-depth technical and fundamental research, updated throughout the trading day.</p></div>
      <div class="fcard rv"><div class="fcard__ic">AC</div><h3>Autochartist</h3><p>Automated pattern recognition that flags emerging chart setups and volatility events as they form.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to use professional analysis.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment Trading Central and Autochartist go live on PRIME DCX.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Trading%20Central">Notify Me When Available</a>
    </div>
  </section>

  `
  },
  "copy-trading": {
    "title": "Copy Trading - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/tools/">BACK TO TOOLS</a>
    <p class="phero__eyebrow mono">TOOLS <span class="badge-soon">COMING SOON</span></p>
    <h1>Copy Trading</h1>
    <p>Follow verified signal providers, or let other traders follow you - native copy trading, a
    ZuluTrade integration, and a mobile-first social trading app, all arriving on PRIME DCX.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Trade alongside a network, not alone</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#8644;</div><h3>Verified signal providers</h3><p>Replicate the strategies of vetted, track-recorded traders directly on your account.</p></div>
      <div class="fcard rv"><div class="fcard__ic">ZT</div><h3>ZuluTrade integration</h3><p>Connect to one of the largest social trading networks without leaving PRIME DCX.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128241;</div><h3>Mobile social app</h3><p>A dedicated app for following, comparing and managing copied strategies on the move.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to copy trade on PRIME DCX.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment copy trading goes live on PRIME DCX.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Copy%20Trading">Notify Me When Available</a>
    </div>
  </section>

  `
  }
};
