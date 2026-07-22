// Accounts sub-pages: live, deposit, withdraw, mam (live) + raw-spread, demo, swap-free, pamm (dormant)
export const pagesAccountsSub = {
  "live": {
    "title": "Live Trading Account - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/accounts/">BACK TO ACCOUNTS</a>
    <p class="phero__eyebrow mono">ACCOUNTS</p>
    <h1>Real capital. Full execution.</h1>
    <p>A live account trades with real capital across all four asset classes, with the same execution
    standard and dedicated support on every tier. Compare ECN, PRO and PRIME on the
    <a href="/accounts/" style="color:var(--gold)">account types page</a> to choose your spread and leverage profile.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT LIVE MEANS</p>
      <h2>Nothing simulated</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">FX</div><h3>All four asset classes</h3><p>Forex, crypto, commodities and indices, from one account, from day one.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8644;</div><h3>Instant withdrawal processing</h3><p>Withdrawals are processed automatically within 24 hours, first-come first-served.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9993;</div><h3>Dedicated support</h3><p>Multilingual support available 24/7, reachable at support@primedcx.com.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Open a live account today.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Direct market access &middot; Fast withdrawals &middot; Dedicated support</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "deposit": {
    "title": "How to Deposit - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/accounts/">BACK TO ACCOUNTS</a>
    <p class="phero__eyebrow mono">ACCOUNTS</p>
    <h1>Funding your account.</h1>
    <p>Deposits start from $100. Funds must originate from an account held in your own name -
    third-party deposits are not accepted under our AML/CTF policy.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">HOW IT WORKS</p>
      <h2>Three steps to funded</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">01</div><h3>Verify</h3><p>Complete KYC with a government ID and proof of address before your first deposit.</p></div>
      <div class="fcard rv"><div class="fcard__ic">02</div><h3>Fund</h3><p>Deposit from $100, from an account held in your own name.</p></div>
      <div class="fcard rv"><div class="fcard__ic">03</div><h3>Trade</h3><p>Funds post to your account and you're live - launch the Web Trader and start trading.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Fund your account from $100.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  },

  "withdraw": {
    "title": "How to Withdraw - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/accounts/">BACK TO ACCOUNTS</a>
    <p class="phero__eyebrow mono">ACCOUNTS</p>
    <h1>Getting your funds out.</h1>
    <p>Withdrawals are processed automatically within 24 hours, first-come first-served. Funds return
    only to an account held in your own name - no third-party transfers, under our AML/CTF policy.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE POLICY</p>
      <h2>Straightforward, in your name</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">24h</div><h3>Processed within 24 hours</h3><p>Requests are handled automatically, first-come first-served.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9873;</div><h3>Same-name transfers only</h3><p>Funds return to the account they came from, held in your name.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8709;</div><h3>No third-party transfers</h3><p>Required under our <a href="/legal/aml-kyc/" style="color:var(--gold)">AML/KYC policy</a>.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">QUESTIONS?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Talk to support before you withdraw.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Available 24/7, multilingual.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com">Contact Support</a>
    </div>
  </section>

  `
  },

  "mam": {
    "title": "MAM Accounts - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/accounts/">BACK TO ACCOUNTS</a>
    <p class="phero__eyebrow mono">ACCOUNTS</p>
    <h1>Multi-Account Manager.</h1>
    <p>Trade on behalf of multiple client accounts from a single interface, with allocation handled
    automatically across every account you manage.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">BUILT FOR MANAGERS</p>
      <h2>One order, every client</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#8942;</div><h3>Single interface</h3><p>Place one trade and allocate it across every account under management.</p></div>
      <div class="fcard rv"><div class="fcard__ic">%</div><h3>Configurable allocation</h3><p>Set allocation by lot, ratio or percentage per client account.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9873;</div><h3>Application-gated</h3><p>MAM access is reviewed and approved per manager, not self-serve.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">MANAGE FOR OTHERS</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Apply for MAM access.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Tell us about your book and client base.</p>
      <a class="btn btn--fill btn--xl" href="mailto:support@primedcx.com?subject=MAM%20Account%20Application">Apply as Money Manager</a>
    </div>
  </section>

  `
  },

  "raw-spread": {
    "title": "Raw Spread Account - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/hero2.png')"></div>
    <a class="backlink" href="/accounts/">BACK TO ACCOUNTS</a>
    <p class="phero__eyebrow mono">ACCOUNTS <span class="badge-soon">COMING SOON</span></p>
    <h1>Raw Spread Account</h1>
    <p>An ultra-low raw spread tier is on the roadmap - interbank pricing with a transparent
    per-lot commission, for traders who want the tightest possible spread.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Built for spread-sensitive strategies</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">0.0</div><h3>Raw interbank pricing</h3><p>Spreads as close to zero as the underlying liquidity allows.</p></div>
      <div class="fcard rv"><div class="fcard__ic">$</div><h3>Transparent commission</h3><p>A clear per-lot commission, published alongside the spread.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9889;</div><h3>Built for scalping</h3><p>Tightest available pricing for high-frequency, spread-sensitive strategies.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first onto Raw Spread.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment this account tier goes live.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Raw%20Spread%20Account">Notify Me When Available</a>
    </div>
  </section>

  `
  },

  "demo": {
    "title": "Demo Account - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/hero2.png')"></div>
    <a class="backlink" href="/accounts/">BACK TO ACCOUNTS</a>
    <p class="phero__eyebrow mono">ACCOUNTS <span class="badge-soon">COMING SOON</span></p>
    <h1>Demo Account</h1>
    <p>A risk-free practice account with live spreads and real-time pricing is on the roadmap -
    test strategies against real market conditions before trading with real capital.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Real conditions, no capital at risk</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">0</div><h3>No capital at risk</h3><p>Practice with simulated funds against live market pricing.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8776;</div><h3>Live spreads and pricing</h3><p>The same real-time quotes streaming to live accounts, not delayed or simulated data.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8644;</div><h3>Switch to live anytime</h3><p>Move to a funded account whenever you're ready, without starting over.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first onto the demo account.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment demo trading goes live.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Demo%20Account">Notify Me When Available</a>
    </div>
  </section>

  `
  },

  "swap-free": {
    "title": "Swap-Free Account - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/hero2.png')"></div>
    <a class="backlink" href="/accounts/">BACK TO ACCOUNTS</a>
    <p class="phero__eyebrow mono">ACCOUNTS <span class="badge-soon">COMING SOON</span></p>
    <h1>Swap-Free Account</h1>
    <p>A Sharia-compliant account with no overnight financing fees is on the roadmap -
    the same execution standard, without swap charges on positions held overnight.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Sharia-compliant by design</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">0</div><h3>No overnight fees</h3><p>Hold positions without swap or rollover charges.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9775;</div><h3>Sharia-compliant</h3><p>Structured to meet Islamic finance principles.</p></div>
      <div class="fcard rv"><div class="fcard__ic">FX</div><h3>Full market access</h3><p>All four asset classes, on the same execution standard as every other account.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first onto Swap-Free.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment this account type goes live.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20Swap-Free%20Account">Notify Me When Available</a>
    </div>
  </section>

  `
  },

  "pamm": {
    "title": "PAMM Accounts - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/hero2.png')"></div>
    <a class="backlink" href="/accounts/">BACK TO ACCOUNTS</a>
    <p class="phero__eyebrow mono">ACCOUNTS <span class="badge-soon">COMING SOON</span></p>
    <h1>PAMM Accounts</h1>
    <p>Percentage Allocation Management Module accounts are on the roadmap - proportional profit
    and loss allocation for professional money managers running pooled capital.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Pooled capital, proportional outcomes</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">%</div><h3>Proportional allocation</h3><p>P&amp;L split automatically by each investor's share of the pool.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#128200;</div><h3>Manager performance track record</h3><p>A published track record investors can review before allocating capital.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9873;</div><h3>Application-gated</h3><p>PAMM access is reviewed and approved per manager, alongside MAM.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first onto PAMM.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment PAMM accounts go live.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20-%20PAMM%20Accounts">Notify Me When Available</a>
    </div>
  </section>

  `
  }
};
