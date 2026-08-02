// Trading Conditions: overview hub, spreads, contract-spec cross-links, trading hours,
// leverage and margin (live) + swap rates (dormant).
// Instrument and tier data is imported so these pages cannot drift from the spec tables.
import { GROUPS, COUNTS, UNIVERSAL, SPREAD_NOTE, TIERS } from './instruments.mjs';

const CTA = `
  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Open the terminal.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Trade from $100 on any account type.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>
`;

const tierRows = TIERS.map(t => `
          <tr>
            <td class="sym">${t.name}</td>
            <td class="px">${t.spreadFrom}</td>
            <td class="px">${t.commission}</td>
            <td class="nm">${t.best}</td>
          </tr>`).join('');

// Spread floor per instrument group, split by pricing model.
const spreadGroupRows = GROUPS.map(g => `
          <tr>
            <td class="sym">${g.name}</td>
            <td class="grp">${g.rows.length}</td>
            <td class="px">${g.spread} ${g.unit}</td>
            <td class="px">${g.unit === 'pips'
              ? (Number(g.spread) + 0.8).toFixed(1) + ' pips'
              : 'spread + markup'}</td>
            <td class="px">${g.leverage}</td>
          </tr>`).join('');

const hoursRows = GROUPS.map(g => `
          <tr>
            <td class="sym">${g.name}</td>
            <td class="nm">${g.hours}</td>
            <td class="grp">${g.swap}</td>
          </tr>`).join('');

const leverageRows = GROUPS.map(g => `
          <tr>
            <td class="sym">${g.name}</td>
            <td class="px">${g.leverage}</td>
            <td class="px">${(100 / parseInt(g.leverage.split(':')[1], 10)).toFixed(3).replace(/0+$/, '').replace(/\.$/, '')}%</td>
            <td class="px">${UNIVERSAL.marginCall}</td>
            <td class="px">${UNIVERSAL.stopOut}</td>
          </tr>`).join('');

export const pagesConditions = {
  "overview": {
    "title": "Trading Conditions - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/">BACK TO HOME</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>The terms you trade on.</h1>
    <p>Spreads, contract specifications, hours, leverage and margin - published in full, and
    consistent across every account until you choose to change tier.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">AT A GLANCE</p>
      <h2>The conditions, summarised</h2>
    </div>
    <div class="kv rv">
      <div><dt>SPREADS FROM</dt><dd class="gold">0.0 pips</dd></div>
      <div><dt>MAX LEVERAGE</dt><dd class="gold">1:5000</dd></div>
      <div><dt>INSTRUMENTS</dt><dd class="gold">${COUNTS.total}</dd></div>
      <div><dt>MIN TRADE SIZE</dt><dd>${UNIVERSAL.minLot} lots</dd></div>
      <div><dt>MAX TRADE SIZE</dt><dd>${UNIVERSAL.maxLot} lots</dd></div>
      <div><dt>MARGIN CALL</dt><dd>${UNIVERSAL.marginCall}</dd></div>
      <div><dt>STOP OUT</dt><dd>${UNIVERSAL.stopOut}</dd></div>
      <div><dt>HEDGING</dt><dd>${UNIVERSAL.hedging}</dd></div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">CONDITIONS</p>
      <h2>Explore trading conditions</h2>
    </div>
    <div class="fgrid">
      <a class="fcard rv" href="/conditions/spreads/">
        <div class="fcard__ic">0.0</div><h3>Spreads &amp; Commission</h3>
        <p>From 0.0 pips on majors, with per-tier pricing across ECN, PRO and PRIME and a worked cost example.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View spreads &rarr;</span>
      </a>
      <a class="fcard rv" href="/conditions/contract-specs/">
        <div class="fcard__ic">${COUNTS.total}</div><h3>Contract Specifications</h3>
        <p>Contract size, lot limits, leverage ceiling and spread floor for every instrument on the book.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View specifications &rarr;</span>
      </a>
      <a class="fcard rv" href="/conditions/trading-hours/">
        <div class="fcard__ic">24/7</div><h3>Trading Hours</h3>
        <p>Session windows by asset class in server time, plus the weekend and rollover schedule.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View hours &rarr;</span>
      </a>
      <a class="fcard rv" href="/conditions/leverage/">
        <div class="fcard__ic">1:5000</div><h3>Leverage &amp; Margin</h3>
        <p>Leverage ceilings by asset class, how margin is calculated, and what happens at stop out.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View leverage &rarr;</span>
      </a>
      <a class="fcard rv" href="/conditions/swap-rates/">
        <div class="fcard__ic">SWP</div><h3>Swap Rates <span class="badge-soon">COMING SOON</span></h3>
        <p>Published overnight financing rates for every instrument, long and short.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">View details &rarr;</span>
      </a>
      <a class="fcard rv" href="/accounts/">
        <div class="fcard__ic">A/C</div><h3>Account Types</h3>
        <p>ECN, PRO and PRIME compared side by side, each from a $100 minimum deposit.</p>
        <span class="mono" style="display:inline-block;margin-top:14px;font-size:11.5px;letter-spacing:.16em;color:var(--gold)">Compare accounts &rarr;</span>
      </a>
    </div>
  </section>
${CTA}
  `
  },

  "spreads": {
    "title": "Spreads and Commission - Trading Conditions - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>Spreads and commission.</h1>
    <p>Spreads start from 0.0 pips on majors, straight from aggregated liquidity. Your account tier
    decides whether you pay for that in commission or in the spread itself.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">BY ACCOUNT</p>
      <h2>Two pricing models, one book</h2>
      <p class="sec__sub">ECN and PRIME show the raw spread and charge a separate commission. PRO folds the
      cost into an all-in spread and charges nothing per lot. Same liquidity, same execution, different billing.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>ACCOUNT</th><th style="text-align:right">SPREAD FROM</th><th style="text-align:right">COMMISSION</th><th>BEST FOR</th></tr></thead>
        <tbody>${tierRows}
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">BY INSTRUMENT GROUP</p>
      <h2>Spread floors across the book</h2>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead>
          <tr>
            <th>GROUP</th>
            <th style="text-align:right">INSTRUMENTS</th>
            <th style="text-align:right">ECN / PRIME FROM</th>
            <th style="text-align:right">PRO ALL-IN FROM</th>
            <th style="text-align:right">MAX LEVERAGE</th>
          </tr>
        </thead>
        <tbody>${spreadGroupRows}
        </tbody>
      </table>
    </div>
    <p class="note rv">${SPREAD_NOTE}
    Per-instrument specifications are published on the
    <a href="/conditions/contract-specs/" style="color:var(--gold)">contract specifications</a> page.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WORKED EXAMPLE</p>
      <h2>What one standard lot actually costs</h2>
      <p class="sec__sub">One standard lot of EUR/USD, opened and closed, at a 0.0 pip raw spread. Pip value
      on a standard lot is $10.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>ACCOUNT</th><th style="text-align:right">SPREAD COST</th><th style="text-align:right">COMMISSION</th><th style="text-align:right">TOTAL ROUND TURN</th></tr></thead>
        <tbody>
          <tr><td class="sym">ECN</td><td class="px">$0.00</td><td class="px">$7.00</td><td class="px">$7.00</td></tr>
          <tr><td class="sym">PRO</td><td class="px">$8.00</td><td class="px">$0.00</td><td class="px">$8.00</td></tr>
          <tr><td class="sym">PRIME</td><td class="px">$0.00</td><td class="px">$2.00</td><td class="px">$2.00</td></tr>
        </tbody>
      </table>
    </div>
    <p class="note rv">Illustration only, at the published floor values. Real spreads widen and narrow with
    liquidity, session and volatility, so your actual cost will differ. Commission is charged per lot per
    round turn and is deducted at the point of execution.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHY THEY STAY TIGHT</p>
      <h2>Where the pricing comes from</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#8721;</div><h3>Aggregated liquidity</h3><p>Quotes are sourced from multiple tier-1 venues and aggregated into a single book, so the best available bid and offer is the one you see.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8709;</div><h3>No dealing desk</h3><p>Orders route straight through. No requotes, no price manipulation, no desk sitting between you and the fill.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9776;</div><h3>Depth of market</h3><p>Level II pricing shows the volume available at each price level, so you can size a position against real liquidity.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9889;</div><h3>Low-latency routing</h3><p>Near-instantaneous order routing keeps the gap between the price you click and the price you get as small as the market allows.</p></div>
    </div>
  </section>
${CTA}
  `
  },

  "trading-hours": {
    "title": "Trading Hours - Trading Conditions - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>When the market is open.</h1>
    <p>Forex, metals, energy and indices follow the global session calendar five days a week.
    Crypto never closes.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">BY GROUP</p>
      <h2>Session windows in server time</h2>
      <p class="sec__sub">Server time is GMT+2, shifting to GMT+3 during daylight saving. Hours are also
      shown inside the platform on every instrument.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>GROUP</th><th>TRADING HOURS</th><th>SWAP SCHEDULE</th></tr></thead>
        <tbody>${hoursRows}
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE GLOBAL DAY</p>
      <h2>Four sessions, one continuous market</h2>
      <p class="sec__sub">Forex liquidity follows the sun. Overlaps are where depth is deepest and spreads
      are usually tightest.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>SESSION</th><th>OPENS</th><th>CLOSES</th><th>CHARACTER</th></tr></thead>
        <tbody>
          <tr><td class="sym">Sydney</td><td class="px">22:00</td><td class="px">07:00</td><td class="nm">Thinnest liquidity, wider spreads, AUD and NZD lead</td></tr>
          <tr><td class="sym">Tokyo</td><td class="px">00:00</td><td class="px">09:00</td><td class="nm">JPY crosses active, ranges tend to be contained</td></tr>
          <tr><td class="sym">London</td><td class="px">08:00</td><td class="px">17:00</td><td class="nm">Highest FX volume of the day, majors at their tightest</td></tr>
          <tr><td class="sym">New York</td><td class="px">13:00</td><td class="px">22:00</td><td class="nm">US data releases, the London overlap is the busiest window</td></tr>
        </tbody>
      </table>
    </div>
    <p class="note rv">Session times are indicative local-market conventions expressed in server time and
    move with daylight saving in each region.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT TO EXPECT</p>
      <h2>Rollover, weekends and holidays</h2>
    </div>
    <ul class="notelist rv">
      <li><strong>Daily rollover</strong> happens at the server day boundary. Positions held through it are charged or credited swap.</li>
      <li><strong>Triple swap</strong> applies on Wednesday for forex, metals, energy and bonds, covering the weekend value date. Indices are charged triple on Friday. Crypto accrues every day of the week.</li>
      <li><strong>Around rollover</strong> liquidity thins for a short window and spreads can widen. Size accordingly if you are trading through it.</li>
      <li><strong>Weekends</strong> close every market except crypto, which trades continuously. Positions left open over the weekend carry gap risk into the Monday open.</li>
      <li><strong>Public holidays</strong> shorten or suspend sessions on the affected exchange. Index CFDs follow their underlying cash market, so a US holiday closes the US indices.</li>
      <li><strong>Scheduled changes</strong> to trading hours are published in the platform and on this page ahead of time.</li>
    </ul>
  </section>
${CTA}
  `
  },

  "leverage": {
    "title": "Leverage and Margin - Trading Conditions - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>Leverage and margin.</h1>
    <p>Up to 1:5000 on forex, stepping down by asset class as volatility rises. Margin call at 100%
    equity, stop out at 50%, on every account tier.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">BY ASSET CLASS</p>
      <h2>Leverage ceilings and margin requirement</h2>
      <p class="sec__sub">The ceiling is set by the instrument, not the account. ECN, PRO and PRIME all
      trade to the same limits.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead>
          <tr>
            <th>GROUP</th>
            <th style="text-align:right">MAX LEVERAGE</th>
            <th style="text-align:right">MARGIN REQUIRED</th>
            <th style="text-align:right">MARGIN CALL</th>
            <th style="text-align:right">STOP OUT</th>
          </tr>
        </thead>
        <tbody>${leverageRows}
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE ARITHMETIC</p>
      <h2>How margin is calculated</h2>
      <p class="sec__sub">Margin is the deposit held against an open position. It is returned when
      the position closes.</p>
    </div>
    <div class="kv rv">
      <div><dt>FORMULA</dt><dd style="font-size:15px">Contract size × lots ÷ leverage</dd></div>
      <div><dt>EXAMPLE POSITION</dt><dd style="font-size:15px">1 lot EUR/USD at 1:5000</dd></div>
      <div><dt>NOTIONAL VALUE</dt><dd>$100,000</dd></div>
      <div><dt>MARGIN REQUIRED</dt><dd class="gold">$20</dd></div>
    </div>
    <p class="note rv">The same position at 1:500 would require $200, and at 1:100 it would require $1,000.
    Higher leverage frees capital, and it shrinks the buffer between your equity and a stop out by exactly
    the same factor.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHEN IT GOES WRONG</p>
      <h2>Margin call and stop out</h2>
    </div>
    <div class="rail rv">
      <div class="rail__step">
        <div class="rail__n">01</div>
        <div>
          <h3>Margin level falls to 100%</h3>
          <p>Your equity has dropped to match the margin held against your open positions. The platform flags a margin call. You can deposit, reduce size, or close positions.</p>
        </div>
      </div>
      <div class="rail__step">
        <div class="rail__n">02</div>
        <div>
          <h3>Margin level falls to 50%</h3>
          <p>Stop out triggers automatically. Positions are closed until the margin level is restored, starting with the largest loss first.</p>
        </div>
      </div>
      <div class="rail__step">
        <div class="rail__n">03</div>
        <div>
          <h3>Gaps can move faster than the stop</h3>
          <p>In a fast or gapping market, the stop out may execute below the 50% level. Weekend gaps and news events are the common cause.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">RISK</p>
      <h2>Leverage cuts both ways</h2>
      <p class="sec__sub">Higher leverage means smaller price moves produce larger changes in your equity,
      in either direction. Trading involves risk and may not be suitable for all investors. Read the full
      <a href="/legal/risk/" style="color:var(--gold)">risk disclosure</a> before you trade.</p>
    </div>
  </section>
${CTA}
  `
  },

  "swap-rates": {
    "title": "Swap Rates - Trading Conditions - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS <span class="badge-soon">COMING SOON</span></p>
    <h1>Swap rates.</h1>
    <p>A published long and short financing rate for every instrument on the book. The schedule below
    is live today inside the platform; the public rate table is being prepared.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">HOW IT WORKS</p>
      <h2>What a swap is</h2>
      <p class="sec__sub">Swap, or rollover, is the interest added to or deducted from your account for
      holding a position past the daily rollover. On a currency pair it reflects the overnight interest
      rate differential between the two currencies, and whether you are long or short.</p>
    </div>
    <ul class="notelist rv">
      <li><strong>Swap applies only</strong> to positions still open at rollover. Intraday trades closed before the boundary are never charged.</li>
      <li><strong>Rates are quoted in points</strong> and converted automatically into your account currency by the platform.</li>
      <li><strong>Each instrument has its own rate</strong>, measured against a standard lot, and long and short are priced separately.</li>
      <li><strong>Some pairs carry a negative rate on both sides</strong>, so holding either direction costs you.</li>
      <li><strong>A positive rate is a credit.</strong> Holding the higher-yielding side of a pair can pay you to stay in the position.</li>
    </ul>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE SCHEDULE</p>
      <h2>When triple swap is charged</h2>
      <p class="sec__sub">Settlement runs on a two-day value date, so the weekend has to be paid for during
      the week. This schedule is in force today.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>GROUP</th><th>ACCRUAL</th><th>TRIPLE SWAP DAY</th></tr></thead>
        <tbody>
          <tr><td class="sym">Forex</td><td class="nm">Daily at rollover, Monday to Friday</td><td class="px">Wednesday</td></tr>
          <tr><td class="sym">Metals</td><td class="nm">Daily at rollover, Monday to Friday</td><td class="px">Wednesday</td></tr>
          <tr><td class="sym">Energy</td><td class="nm">Daily at rollover, Monday to Friday</td><td class="px">Wednesday</td></tr>
          <tr><td class="sym">Indices</td><td class="nm">Daily at rollover, Monday to Friday</td><td class="px">Friday</td></tr>
          <tr><td class="sym">Crypto</td><td class="nm">Daily at rollover, 7 days a week</td><td class="nm">Not applicable</td></tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">TODAY</p>
      <h2>Where to find your rate right now</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">01</div><h3>Open the instrument</h3><p>Select any instrument in the Web Trader watchlist and open its specification panel.</p></div>
      <div class="fcard rv"><div class="fcard__ic">02</div><h3>Read long and short</h3><p>The panel shows the current long and short swap rate for that instrument, in points.</p></div>
      <div class="fcard rv"><div class="fcard__ic">03</div><h3>Check before you hold</h3><p>Rates move with funding conditions. Check the panel before carrying a position overnight, not after.</p></div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>The published rate table</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">%</div><h3>Per-instrument rates</h3><p>Long and short swap published for every forex, crypto, commodity and index CFD on the platform.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8635;</div><h3>Daily updates</h3><p>Refreshed as funding conditions move, not left stale between reviews.</p></div>
      <div class="fcard rv"><div class="fcard__ic">0</div><h3>Swap-free eligibility</h3><p>A clear path to a <a href="/accounts/swap-free/" style="color:var(--gold)">swap-free account</a> once that product is live.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Know your overnight costs before you hold.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment the swap rate schedule is published.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Swap%20Rates">Notify Me When Available</a>
    </div>
  </section>

  `
  }
};
