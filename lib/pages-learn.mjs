// Learn section: hub, Help Centre (live FAQ) and Trading Glossary (live).
// Education hub, webinars and tutorials remain dormant until the content team is operational.
import { COUNTS, UNIVERSAL } from './instruments.mjs';

// ── FAQ data ────────────────────────────────────────────────────────
const FAQ = [
  {
    id: 'accounts',
    title: 'Accounts and opening',
    qs: [
      ['What account types does PRIME DCX offer?',
       `<p>Three, all from a $100 minimum deposit and all on the same liquidity:</p>
        <ul>
          <li><strong>ECN</strong> - raw spreads from 0.0 pips with a $7 per lot round-turn commission. Built for scalpers and high-frequency execution.</li>
          <li><strong>PRO</strong> - no commission at all, with the cost folded into an all-in spread from 0.8 pips.</li>
          <li><strong>PRIME</strong> - raw spreads from 0.0 pips with the lowest commission on the platform at $2 per lot round turn.</li>
        </ul>
        <p>Full side-by-side detail is on the <a href="/accounts/">account types</a> page.</p>`],
      ['Which account should I choose?',
       `<p>It comes down to how much you trade. High-frequency and scalping strategies usually cost less on
        ECN or PRIME, because you are paying a small fixed commission rather than a marked-up spread on
        every trade. If you trade less often and prefer a single number with nothing to calculate, PRO
        removes commission entirely.</p>
        <p>The <a href="/conditions/spreads/">spreads and commission</a> page has a worked example showing
        what one standard lot costs on each tier.</p>`],
      ['What is the minimum deposit?',
       `<p>$100 on every account type. There is no higher tier gate at PRIME DCX - the same minimum opens
        ECN, PRO or PRIME.</p>`],
      ['Who can open an account?',
       `<p>You must be 18 or older and able to complete identity verification. One identity, one account.
        Accounts are opened online and verified against a government-issued photo ID and a proof of address
        dated within the last three months.</p>`],
      ['Can I open a corporate account?',
       `<p>Yes. Corporate applications need a certificate of incorporation, articles of association, a board
        resolution, director identity documents and proof of registered address. Subsidiaries of listed
        companies need less. <a href="/company/contact/">Contact support</a> to start one.</p>`],
      ['Is there a demo account?',
       `<p>Not yet. A risk-free demo with live spreads and real-time pricing is on the roadmap - the
        <a href="/accounts/demo/">demo account page</a> has a notify option so we can tell you when it opens.</p>`],
    ],
  },
  {
    id: 'funding',
    title: 'Funding and withdrawals',
    qs: [
      ['How do I fund my account?',
       `<p>Complete KYC first, then deposit from $100 through the Secure Client Area, which lists the
        funding methods available in your region with their current processing times. Funds must come from
        an account held in your own name.</p>
        <p>Full detail is on the <a href="/accounts/deposit/">how to deposit</a> page.</p>`],
      ['How long do withdrawals take?',
       `<p>Requests are processed automatically within 24 hours, first-come first-served. After we process
        it, the time for funds to actually land depends on your bank or wallet provider rather than on us.</p>`],
      ['Does PRIME DCX charge deposit or withdrawal fees?',
       `<p>No. We charge nothing on either. Your bank, card issuer, intermediary bank or wallet provider may
        apply their own charges, and those are outside our control.</p>`],
      ['Why must funds return to the same account?',
       `<p>Anti-money-laundering law requires it. Funds must originate from, and return to, an account held
        in the same name as the trading account. Third-party transfers are not permitted. Joint accounts are
        accepted where the trading account holder is one of the parties.</p>
        <p>The reasoning is set out in our <a href="/legal/aml-kyc/">AML/KYC policy</a>.</p>`],
      ['Can I withdraw more than I deposited?',
       `<p>Yes, but not all through one funding source. A refund back to a given method cannot exceed what
        you originally deposited through it. Profit above that is withdrawn through another verified method
        in your name.</p>`],
      ['Why is my withdrawal delayed?',
       `<p>The usual causes are an expired ID or a proof of address older than three months, a mismatch
        between your trading account name and the destination account name, or insufficient free margin
        because positions are still open. A funding method never used for a deposit may also need a small
        deposit first to activate it.</p>`],
      ['Can I withdraw with positions open?',
       `<p>Only up to your free margin. Open positions hold margin against them, and withdrawing against
        that margin reduces your buffer and can trigger a margin call. Check your free margin before
        requesting.</p>`],
    ],
  },
  {
    id: 'trading',
    title: 'Trading and conditions',
    qs: [
      ['What can I trade?',
       `<p>${COUNTS.total} instruments across four asset classes: ${COUNTS.forex} forex pairs,
        ${COUNTS.commodities} commodities including metals and energy, ${COUNTS.indices} global indices and
        ${COUNTS.crypto} cryptocurrencies. Stocks, bonds and futures CFDs are on the roadmap.</p>
        <p>Every instrument is listed with its contract size, lot limits and leverage on the
        <a href="/conditions/contract-specs/">contract specifications</a> page.</p>`],
      ['What leverage is available?',
       `<p>Up to 1:5000 on forex majors and minors. The ceiling steps down as volatility rises: 1:2000 on
        metals, 1:1000 on forex exotics, 1:500 on energy, 1:200 on indices and 1:100 on crypto. The limit is
        set by the instrument, not by your account tier.</p>
        <p>See <a href="/conditions/leverage/">leverage and margin</a> for the full table and a worked
        margin calculation.</p>`],
      ['What are margin call and stop out?',
       `<p>Margin call triggers when your margin level falls to ${UNIVERSAL.marginCall} - your equity has
        dropped to match the margin held against your positions. Stop out triggers at ${UNIVERSAL.stopOut},
        closing positions automatically, largest loss first, until the margin level is restored.</p>
        <p>In a fast or gapping market the stop out can execute below ${UNIVERSAL.stopOut}.</p>`],
      ['Is scalping allowed? Are EAs allowed?',
       `<p>Yes to both. There is no minimum order distance, no freeze level and no restriction on holding
        time. You can place orders as close to the market price as you need.</p>`],
      ['Can I hedge?',
       `<p>Yes. You can hold long and short positions on the same instrument at the same time. There is no
        first-in-first-out rule.</p>`],
      ['What is the smallest trade I can place?',
       `<p>${UNIVERSAL.minLot} lots - one micro lot - on any instrument and any account tier. The maximum
        is ${UNIVERSAL.maxLot} lots per position.</p>`],
      ['What is swap and when is it charged?',
       `<p>Swap is the interest added or deducted for holding a position past the daily rollover. It
        reflects the overnight interest rate differential between the two sides of the pair, and long and
        short are priced separately.</p>
        <p>Triple swap is charged on Wednesday for forex, metals and energy, and on Friday for indices, to
        cover the weekend value date. Crypto accrues every day. See
        <a href="/conditions/swap-rates/">swap rates</a>.</p>`],
      ['When are the markets open?',
       `<p>Forex, metals, energy and indices run five days a week on the global session calendar. Crypto
        trades 24/7, weekends included. Session windows per group are on the
        <a href="/conditions/trading-hours/">trading hours</a> page.</p>`],
    ],
  },
  {
    id: 'platform',
    title: 'Platform',
    qs: [
      ['What platform does PRIME DCX use?',
       `<p>The PRIME DCX Web Trader, in the browser with nothing to install. It carries fully integrated
        TradingView charting with over 100 technical indicators, one-click execution straight from the
        chart, and real-time balance, equity, margin and P&amp;L.</p>`],
      ['Do you support MetaTrader or cTrader?',
       `<p>Not yet. MetaTrader 5, MetaTrader 4 and cTrader are on the roadmap, each with its own page and a
        notify option: <a href="/platform/mt5/">MT5</a>, <a href="/platform/mt4/">MT4</a>,
        <a href="/platform/ctrader/">cTrader</a>.</p>`],
      ['Can I trade on mobile?',
       `<p>Yes. The Web Trader runs in any modern mobile browser with the same account, the same book and
        the same execution as desktop.</p>`],
      ['What order types can I use?',
       `<p>Market, limit, stop, stop-limit and OCO, plus stop loss and take profit attached to any
        position.</p>`],
      ['Is API access available?',
       `<p>Programmatic access to PRIME DCX liquidity is available on request. Contact support with details
        of your system and expected volume.</p>`],
    ],
  },
  {
    id: 'security',
    title: 'Security and company',
    qs: [
      ['Who is PRIME DCX?',
       `<p>Prime DCX Ltd, registration number 2025-00921, registered at Ground Floor, The Sotheby Building,
        Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia. Detail is on the
        <a href="/company/regulation/">regulation</a> page.</p>`],
      ['How are my funds held?',
       `<p>In segregated client accounts, separate from company operating funds, with bank-level encryption
        across the platform and continuous transaction monitoring.</p>`],
      ['What are your AML obligations?',
       `<p>We run an AML/CTF programme with a designated Money Laundering Reporting Officer, a risk-based
        approach, automated and manual transaction monitoring, and staff training. Records are retained for
        a minimum of seven years after an account closes. Read the
        <a href="/legal/aml-kyc/">full policy</a>.</p>`],
      ['How do I contact support?',
       `<p>Live chat answers around the clock, and our team in Dubai picks up during office hours. Email
        <a href="mailto:support@primedcx.com">support@primedcx.com</a> at any time, or use the
        <a href="/company/contact/">contact page</a>.</p>`],
      ['How do I become an introducing broker?',
       `<p>Apply through the <a href="/partners/">IB Partner Programme</a>. Rates are published per lot by
        tier, payouts run weekly, client attribution is for the life of the account and there are no
        clawbacks. Onboarding is a light KYC and a counter-signed agreement, turned around in 48 hours.</p>`],
      ['Is trading with PRIME DCX risky?',
       `<p>Yes. Trading involves risk and may not be suitable for all investors. CFDs are leveraged
        products - small market moves produce large changes in your equity, and losses can exceed your
        initial deposit. Only trade with capital you are prepared to lose, and read the
        <a href="/legal/risk/">risk disclosure</a> in full first.</p>`],
    ],
  },
];

const faqSections = FAQ.map(cat => `
  <section class="sec sec--line" id="${cat.id}">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">${cat.title.toUpperCase()}</p>
      <h2>${cat.title}</h2>
    </div>
    <div class="faq rv">
      ${cat.qs.map(([q, a]) => `<details>
        <summary>${q}</summary>
        <div class="faq__a">${a}</div>
      </details>`).join('\n      ')}
    </div>
  </section>`).join('\n');

const faqPills = FAQ.map(c => `<a href="#${c.id}">${c.title.toUpperCase()}</a>`).join('\n      ');
const faqCount = FAQ.reduce((n, c) => n + c.qs.length, 0);

// ── Glossary data ───────────────────────────────────────────────────
const GLOSSARY = [
  ['Ask', 'The price at which you can buy an instrument. Always the higher side of the quote.'],
  ['Balance', 'Closed-trade cash in your account, before any unrealised profit or loss on open positions.'],
  ['Base currency', 'The first currency in a pair. In EUR/USD the base is the euro, and the quote tells you how many dollars one euro buys.'],
  ['Bid', 'The price at which you can sell an instrument. Always the lower side of the quote.'],
  ['CFD', 'Contract for difference. An agreement to exchange the difference in an asset price between opening and closing, without owning the asset itself.'],
  ['Commission', 'A fixed charge per lot traded, applied on ECN and PRIME accounts in place of a spread markup.'],
  ['Contract size', 'The notional quantity one full lot represents. A standard forex lot is 100,000 units of the base currency.'],
  ['Drawdown', 'The fall from a peak in account equity to the subsequent trough, usually quoted as a percentage.'],
  ['ECN', 'Electronic communication network. A model where client orders meet aggregated third-party liquidity directly, with no dealing desk in between.'],
  ['Equity', 'Balance plus or minus the unrealised profit and loss on every open position. The number that matters for margin.'],
  ['Exotic pair', 'A currency pair involving one major currency and one from a smaller or emerging economy. Wider spreads, thinner liquidity.'],
  ['Expert Advisor', 'An automated trading program that executes a strategy without manual intervention.'],
  ['Free margin', 'Equity minus the margin currently held against open positions. What you have available to open new trades or withdraw.'],
  ['Gap', 'A jump between one price and the next with no trading in between, most often at a weekend open or on a major news release.'],
  ['Hedging', 'Holding long and short positions on the same instrument simultaneously. Permitted on all PRIME DCX accounts.'],
  ['Leverage', 'The ratio between position size and the margin required to hold it. 1:5000 means $20 of margin controls $100,000 of notional exposure.'],
  ['Limit order', 'An instruction to execute at a specified price or better. It will not fill at a worse price than the one you set.'],
  ['Liquidity', 'How much volume is available to trade at a given price. Deeper liquidity means tighter spreads and cleaner fills.'],
  ['Long', 'A position that profits when the price rises. Buying.'],
  ['Lot', 'The standard unit of trade size. One standard lot is 100,000 base units in forex; the minimum at PRIME DCX is 0.01 lots.'],
  ['Major pair', 'A currency pair involving the US dollar and another highly traded currency. The tightest spreads and deepest books.'],
  ['Margin', 'The deposit held against an open position. Returned when the position closes.'],
  ['Margin call', 'The warning issued when margin level falls to 100%, meaning equity has dropped to match the margin held.'],
  ['Margin level', 'Equity divided by used margin, expressed as a percentage. The figure that drives margin call and stop out.'],
  ['Market order', 'An instruction to execute immediately at the best price currently available.'],
  ['Minor pair', 'A currency pair between two major currencies that does not involve the US dollar, such as EUR/GBP.'],
  ['OCO', 'One cancels the other. A pair of orders where filling one automatically cancels the other.'],
  ['Pip', 'The standard increment of price movement in a currency pair, normally the fourth decimal place. On a standard lot, one pip is about $10.'],
  ['Requote', 'A broker asking you to accept a different price after you have clicked. PRIME DCX does not requote.'],
  ['Rollover', 'The daily point at which open positions move to the next value date and swap is applied.'],
  ['Scalping', 'A strategy of taking many small profits over very short holding periods. Permitted on all PRIME DCX accounts.'],
  ['Short', 'A position that profits when the price falls. Selling.'],
  ['Slippage', 'The difference between the price you expected and the price you were filled at, caused by movement between order and execution.'],
  ['Spread', 'The gap between bid and ask. The primary cost of opening a position.'],
  ['Stop loss', 'An order that closes a position once the price reaches a level you set, to cap the loss.'],
  ['Stop out', 'The automatic closure of positions when margin level falls to 50%, starting with the largest loss.'],
  ['Swap', 'Interest added to or deducted from your account for holding a position through rollover.'],
  ['Take profit', 'An order that closes a position once it reaches a target level of profit.'],
  ['Tick', 'The smallest price change an instrument can make.'],
  ['Volatility', 'The scale and speed of price movement. Higher volatility widens spreads and increases both opportunity and risk.'],
];

const sortedGloss = GLOSSARY.slice().sort((a, b) => a[0].localeCompare(b[0]));
const letters = [...new Set(sortedGloss.map(([t]) => t[0].toUpperCase()))];
const seenLetter = new Set();
const glossRows = sortedGloss.map(([term, def]) => {
  const L = term[0].toUpperCase();
  const anchor = seenLetter.has(L) ? '' : ` id="letter-${L}"`;
  seenLetter.add(L);
  return `
    <div class="gloss__row"${anchor}>
      <dt>${term}</dt>
      <dd>${def}</dd>
    </div>`;
}).join('');

export const pagesLearn = {
  "hub": {
    "title": "Learn - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/finale.png')"></div>
    <a class="backlink" href="/">BACK TO HOME</a>
    <p class="phero__eyebrow mono">LEARN</p>
    <h1>Answers, definitions, market thinking.</h1>
    <p>The Help Centre and Trading Glossary are live now. Structured courses, webinars and video
    tutorials are being built.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">LIVE NOW</p>
      <h2>Start here</h2>
    </div>
    <div class="fgrid">
      <a class="fcard rv" href="/learn/help-centre/"><div class="fcard__ic">${faqCount}</div><h3>Help Centre</h3><p>${faqCount} answers across accounts, funding, trading conditions, platform and compliance.</p></a>
      <a class="fcard rv" href="/learn/glossary/"><div class="fcard__ic">A-Z</div><h3>Trading Glossary</h3><p>${GLOSSARY.length} terms defined in plain language, from ask and bid through to volatility.</p></a>
      <a class="fcard rv" href="/blog/"><div class="fcard__ic">&#9998;</div><h3>Insights</h3><p>Market commentary and platform notes from the PRIME DCX desk.</p></a>
      <a class="fcard rv" href="/conditions/"><div class="fcard__ic">&#167;</div><h3>Trading Conditions</h3><p>Spreads, specifications, hours, leverage and margin, published in full.</p></a>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">IN DEVELOPMENT</p>
      <h2>The education hub</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#127916;</div><h3>Video tutorials <span class="badge-soon">COMING SOON</span></h3><p>Short, practical walkthroughs of the platform and of core trading mechanics.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128250;</div><h3>Webinars <span class="badge-soon">COMING SOON</span></h3><p>Live sessions with the desk, recorded and archived for replay.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128214;</div><h3>Guides and ebooks <span class="badge-soon">COMING SOON</span></h3><p>Longer-form material on strategy, risk management and market structure.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128202;</div><h3>Market analysis <span class="badge-soon">COMING SOON</span></h3><p>Regular technical and fundamental research from our own analysts.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Learn the platform before you scale on it.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you as each part of the education hub goes live.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Education%20Hub">Notify Me When Available</a>
    </div>
  </section>

  `
  },

  "help-centre": {
    "title": "Help Centre - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/finale.png')"></div>
    <a class="backlink" href="/learn/">BACK TO LEARN</a>
    <p class="phero__eyebrow mono">HELP CENTRE</p>
    <h1>Answers, before you have to ask.</h1>
    <p>${faqCount} of the questions traders actually ask us, grouped by topic. If yours is not here,
    live chat answers around the clock.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">JUMP TO</p>
      <h2>Browse by topic</h2>
    </div>
    <div class="pills mono rv">
      ${faqPills}
    </div>
  </section>
${faqSections}

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STILL STUCK?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Talk to a person.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live chat answers around the clock. Our team in Dubai picks up during office hours.</p>
      <a class="btn btn--fill btn--xl" href="/company/contact/">Contact Support</a>
      <a class="btn btn--ghost" style="margin-left:12px" href="/learn/glossary/">Open the glossary</a>
    </div>
  </section>

  `
  },

  "glossary": {
    "title": "Trading Glossary - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/finale.png')"></div>
    <a class="backlink" href="/learn/">BACK TO LEARN</a>
    <p class="phero__eyebrow mono">GLOSSARY</p>
    <h1>The language of the book.</h1>
    <p>${GLOSSARY.length} terms defined in plain language. Every one of them appears somewhere in our
    published trading conditions, so this is the reference for reading them.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">A - Z</p>
      <h2>Terms and definitions</h2>
    </div>
    <div class="gloss__nav mono rv">
      ${letters.map(l => `<a href="#letter-${l}">${l}</a>`).join('\n      ')}
    </div>
    <dl class="gloss rv">${glossRows}
    </dl>
    <p class="note rv">Definitions are written for PRIME DCX conditions specifically. Where a term has a
    figure attached to it - leverage, stop out, minimum lot - the number quoted is the one that applies on
    this platform. See <a href="/conditions/" style="color:var(--gold)">trading conditions</a> for the
    full set.</p>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">NEXT</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Now read the conditions.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Spreads, specifications, hours, leverage and margin, published in full.</p>
      <a class="btn btn--fill btn--xl" href="/conditions/">Trading Conditions</a>
      <a class="btn btn--ghost" style="margin-left:12px" href="/learn/help-centre/">Help Centre</a>
    </div>
  </section>

  `
  }
};
