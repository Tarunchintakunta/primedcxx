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
      <div class="fcard rv"><div class="fcard__ic">&#9993;</div><h3>Dedicated support</h3><p>Live chat answers around the clock. Our team in Dubai picks up during office hours, and support@primedcx.com is monitored daily.</p></div>
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
      <p class="sec__eyebrow mono">AT A GLANCE</p>
      <h2>Deposit terms</h2>
    </div>
    <div class="kv rv">
      <div><dt>MINIMUM DEPOSIT</dt><dd class="gold">$100</dd></div>
      <div><dt>PRIME DCX FEES</dt><dd class="gold">None</dd></div>
      <div><dt>ACCOUNT NAME</dt><dd>Must match yours</dd></div>
      <div><dt>KYC</dt><dd>Required before first deposit</dd></div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">HOW IT WORKS</p>
      <h2>Three steps to funded</h2>
    </div>
    <div class="rail rv">
      <div class="rail__step">
        <div class="rail__n">01</div>
        <div>
          <h3>Verify</h3>
          <p>Complete KYC before your first deposit. You will need a valid government-issued photo ID and a proof of address dated within the last three months.</p>
        </div>
      </div>
      <div class="rail__step">
        <div class="rail__n">02</div>
        <div>
          <h3>Fund</h3>
          <p>Deposit from $100, from an account held in your own name. Select your funding method inside the Secure Client Area, where the methods available in your region are listed with their current processing times.</p>
        </div>
      </div>
      <div class="rail__step">
        <div class="rail__n">03</div>
        <div>
          <h3>Trade</h3>
          <p>Funds post to your trading account and you are live. Open cTrader and the market is already on your screen.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">VERIFICATION</p>
      <h2>Documents you will need</h2>
      <p class="sec__sub">Requirements follow our <a href="/legal/aml-kyc/" style="color:var(--gold)">AML/KYC policy</a>. Getting these right first time is the single biggest factor in how fast your account opens.</p>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead><tr><th>DOCUMENT</th><th>ACCEPTED</th><th>NOTES</th></tr></thead>
        <tbody>
          <tr><td class="sym">Photo ID</td><td class="nm">Passport, driving licence or national ID card</td><td class="nm">Must be valid and unexpired, with all four corners visible</td></tr>
          <tr><td class="sym">Proof of address</td><td class="nm">Utility bill or bank statement</td><td class="nm">Dated within the last 3 months, showing your name and address</td></tr>
          <tr><td class="sym">Personal details</td><td class="nm">Full name, date of birth, country of origin, residential address</td><td class="nm">Must match your submitted documents exactly</td></tr>
          <tr><td class="sym">Translations</td><td class="nm">Notarized English translation</td><td class="nm">Required for any document in non-Latin characters</td></tr>
        </tbody>
      </table>
    </div>
    <p class="note rv"><strong>Corporate accounts</strong> require additional documentation: certificate of
    incorporation, articles of association, board resolution, director identity documents and proof of
    registered address. Subsidiaries of listed companies need less. Contact support to start a corporate
    application.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE RULES</p>
      <h2>What applies to every deposit</h2>
    </div>
    <ul class="notelist rv">
      <li><strong>Same name only.</strong> Funds must originate from an account, card or wallet held in the same name as your trading account. Third-party deposits are rejected and returned.</li>
      <li><strong>PRIME DCX charges no deposit fee.</strong> Your bank, card issuer or wallet provider may apply their own charges, which are outside our control.</li>
      <li><strong>Your first withdrawal method is set by your deposit.</strong> Funds return to the source they came from, so deposit from an account you can also receive into.</li>
      <li><strong>Refunds cannot exceed the original deposit</strong> per funding source. Profit is withdrawn through your other verified methods.</li>
      <li><strong>Deposits are for trading.</strong> Funding an account and withdrawing without trading may attract a processing fee.</li>
      <li><strong>Transaction monitoring is continuous.</strong> We may request supporting documentation on any deposit before releasing funds for trading.</li>
    </ul>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">NEXT</p>
      <h2>After you're funded</h2>
    </div>
    <div class="fgrid">
      <a class="fcard rv" href="/accounts/withdraw/"><div class="fcard__ic">24h</div><h3>How to withdraw</h3><p>Processed within 24 hours, first-come first-served.</p></a>
      <a class="fcard rv" href="/conditions/contract-specs/"><div class="fcard__ic">SPEC</div><h3>Contract specifications</h3><p>Every instrument, with its size, limits and leverage.</p></a>
      <a class="fcard rv" href="/platform/ctrader/"><div class="fcard__ic">&#9889;</div><h3>Trade on cTrader</h3><p>Depth of market, cAlgo automation and copy trading on the live platform.</p></a>
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
      <p class="sec__eyebrow mono">AT A GLANCE</p>
      <h2>Withdrawal terms</h2>
    </div>
    <div class="kv rv">
      <div><dt>PROCESSING</dt><dd class="gold">Within 24 hours</dd></div>
      <div><dt>PRIME DCX FEES</dt><dd class="gold">None</dd></div>
      <div><dt>QUEUE</dt><dd>First-come, first-served</dd></div>
      <div><dt>DESTINATION</dt><dd>Same name as the account</dd></div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">HOW IT WORKS</p>
      <h2>Three steps to paid</h2>
    </div>
    <div class="rail rv">
      <div class="rail__step">
        <div class="rail__n">01</div>
        <div>
          <h3>Request from the Client Area</h3>
          <p>Submit the withdrawal from inside your Secure Client Area. Requests are queued in the order they arrive.</p>
        </div>
      </div>
      <div class="rail__step">
        <div class="rail__n">02</div>
        <div>
          <h3>Automated processing</h3>
          <p>Requests are processed automatically within 24 hours. You do not need to email or chase the desk.</p>
        </div>
      </div>
      <div class="rail__step">
        <div class="rail__n">03</div>
        <div>
          <h3>Settlement to your provider</h3>
          <p>Once processed, the time to land depends on your bank or wallet provider, not on PRIME DCX.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE POLICY</p>
      <h2>Terms that apply to every withdrawal</h2>
    </div>
    <ul class="notelist rv">
      <li><strong>Processed within 24 hours</strong>, automatically and first-come first-served. Requests submitted at a weekend or holiday still enter the same queue.</li>
      <li><strong>Funds return to their source.</strong> Withdrawals go back to the method used to deposit, held in the same name as the trading account.</li>
      <li><strong>No third-party transfers.</strong> Payment to an account in anyone else's name is not permitted under applicable AML/CTF law. Joint accounts are accepted where the account holder is one of the parties.</li>
      <li><strong>Refunds cannot exceed the original deposit</strong> per funding source. To withdraw profit above the amount you deposited by a given method, use another verified method.</li>
      <li><strong>PRIME DCX charges no withdrawal fee.</strong> Intermediary banks and wallet providers may deduct their own charges, which are outside our control.</li>
      <li><strong>Untraded funds may attract a processing fee.</strong> Trading accounts are for trading; depositing and withdrawing without market activity is treated differently.</li>
      <li><strong>Open positions reduce what you can withdraw.</strong> Only free margin is available. Withdrawing against margin can trigger a margin call.</li>
      <li><strong>Supporting documents may be requested</strong> before funds are released, including where a card has expired, been replaced, or was lost or cancelled.</li>
    </ul>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">COMMON HOLD-UPS</p>
      <h2>Why a withdrawal gets delayed</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">KYC</div><h3>Verification incomplete</h3><p>An expired ID or a proof of address older than three months will pause the request until replaced.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8800;</div><h3>Name mismatch</h3><p>The destination account name must match your trading account exactly. Middle names and initials matter.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9878;</div><h3>Insufficient free margin</h3><p>Open positions hold margin. Close or reduce exposure to release the funds you want to withdraw.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8635;</div><h3>New funding method</h3><p>A method not yet used for a deposit may need a small deposit first to activate it for withdrawals.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">QUESTIONS?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Talk to support before you withdraw.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live chat answers around the clock. Our team in Dubai picks up during office hours.</p>
      <a class="btn btn--fill btn--xl" href="/company/contact/">Contact Support</a>
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
