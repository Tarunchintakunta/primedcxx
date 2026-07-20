// Company sub-pages (contact, regulation live; about, careers, sponsorships, white-label dormant)
// plus the standalone Open Account conversion page.
export const pagesCompanySub = {
  "contact": {
    "title": "Contact — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/last3.png')"></div>
    <a class="backlink" href="/company/">BACK TO COMPANY</a>
    <p class="phero__eyebrow mono">COMPANY</p>
    <h1>Talk to PRIME DCX.</h1>
    <p>One inbox, answered around the clock. Whether you're opening an account, verifying documents,
    or have a question about a live position, support@primedcx.com reaches the same desk that watches
    your trades.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">REACH US</p>
      <h2>Support that doesn't sleep</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#9993;</div><h3>Email</h3><p><a href="mailto:support@primedcx.com" style="color:var(--gold)">support@primedcx.com</a><br>The fastest way to reach a human.</p></div>
      <div class="fcard rv"><div class="fcard__ic">24/7</div><h3>Hours</h3><p>Multilingual support available around the clock, every day markets are open.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9873;</div><h3>Registered office</h3><p>Prime DCX Ltd.<br>Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STILL HAVE QUESTIONS</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Write to us first.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We answer before you finish your coffee.</p>
      <a class="btn btn--fill btn--xl" href="mailto:support@primedcx.com">Contact Support</a>
    </div>
  </section>

  `
  },
  "regulation": {
    "title": "Regulation — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/finale.png')"></div>
    <a class="backlink" href="/company/">BACK TO COMPANY</a>
    <p class="phero__eyebrow mono">COMPANY</p>
    <h1>Regulation and compliance.</h1>
    <p>Prime DCX Ltd. operates under a documented compliance program, with clear legal identity and
    published policies covering every stage of the client relationship &mdash; before, during and after
    you trade.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">LEGAL IDENTITY</p>
      <h2>Prime DCX Ltd.</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">N&ordm;</div><h3>Registration</h3><p class="mono">2025-00921</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9873;</div><h3>Registered address</h3><p>Ground Floor, The Sotheby Building, Rodney Village, Rodney Bay, Gros-Islet, Saint Lucia</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9993;</div><h3>Contact</h3><p><a href="mailto:support@primedcx.com" style="color:var(--gold)">support@primedcx.com</a><br>Support available 24/7</p></div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">COMPLIANCE PROGRAM</p>
      <h2>Built on documented controls</h2>
      <p class="sec__sub">An AML/CTF program with a designated Money Laundering Reporting Officer, risk-based transaction monitoring, and a 7-year record retention policy.</p>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#167;</div><h3>AML / KYC Policy</h3><p>Client verification, monitoring and record retention standards.</p><a class="btn btn--ghost" style="margin-top:16px" href="/legal/aml-kyc/">Read the policy &rarr;</a></div>
      <div class="fcard rv"><div class="fcard__ic">!</div><h3>Risk Disclosure</h3><p>What leveraged trading means for your capital.</p><a class="btn btn--ghost" style="margin-top:16px" href="/legal/risk/">Read the disclosure &rarr;</a></div>
      <div class="fcard rv"><div class="fcard__ic">T&amp;C</div><h3>Terms &amp; Conditions</h3><p>The trading platform agreement governing your account.</p><a class="btn btn--ghost" style="margin-top:16px" href="/legal/terms/">Read the terms &rarr;</a></div>
      <div class="fcard rv"><div class="fcard__ic">&#9673;</div><h3>Privacy Policy</h3><p>What data we collect and how it's used.</p><a class="btn btn--ghost" style="margin-top:16px" href="/legal/privacy/">Read the policy &rarr;</a></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">BEFORE YOU DEPOSIT</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Read the risk disclosure.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Trading involves risk and may not be suitable for all investors.</p>
      <a class="btn btn--fill btn--xl" href="/legal/risk/">Read Risk Disclosure</a>
    </div>
  </section>

  `
  },
  "about": {
    "title": "About Us — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/finale.png')"></div>
    <a class="backlink" href="/company/">BACK TO COMPANY</a>
    <p class="phero__eyebrow mono">COMPANY <span class="badge-soon">COMING SOON</span></p>
    <h1>About PRIME DCX.</h1>
    <p>The full story of PRIME DCX &mdash; how the platform was built, who stands behind it, and what
    we're building toward &mdash; is being written. Our legal identity and compliance program are already
    published; the rest of the story is coming.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>The people and the mission</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#9737;</div><h3>Our origin</h3><p>Why PRIME DCX exists and the gap it was built to close.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9670;</div><h3>Leadership</h3><p>The people accountable for the platform and your funds.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8594;</div><h3>Roadmap</h3><p>Where the platform is headed, and when.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to read our story.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment the About page goes live.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20%E2%80%94%20About%20Us">Notify Me When Available</a>
    </div>
  </section>

  `
  },
  "careers": {
    "title": "Careers — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/finale.png')"></div>
    <a class="backlink" href="/company/">BACK TO COMPANY</a>
    <p class="phero__eyebrow mono">COMPANY <span class="badge-soon">COMING SOON</span></p>
    <h1>Careers at PRIME DCX.</h1>
    <p>Open roles and the culture behind the platform will be published here as the team scales.
    In the meantime, write to us directly &mdash; we read every message.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Building the desk behind the platform</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#9670;</div><h3>Open roles</h3><p>Engineering, execution, compliance and client support positions as they open.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9737;</div><h3>Culture</h3><p>How the team works, and what we look for.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9993;</div><h3>Direct applications</h3><p>Reach the team before a role is formally posted.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to see open roles.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment the Careers page goes live.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20%E2%80%94%20Careers">Notify Me When Available</a>
    </div>
  </section>

  `
  },
  "sponsorships": {
    "title": "Sponsorships — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/finale.png')"></div>
    <a class="backlink" href="/company/">BACK TO COMPANY</a>
    <p class="phero__eyebrow mono">COMPANY <span class="badge-soon">COMING SOON</span></p>
    <h1>Sponsorships.</h1>
    <p>PRIME DCX's brand partnerships and sponsorship activity will be documented here as they're
    announced.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Where the brand shows up</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">&#9670;</div><h3>Active partnerships</h3><p>Current sponsorships and brand collaborations, published as they go live.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9737;</div><h3>Selection criteria</h3><p>What PRIME DCX looks for in a sponsorship partner.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9993;</div><h3>Proposals</h3><p>How to reach the team with a partnership proposal.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to see our partnerships.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment this page goes live.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:support@primedcx.com?subject=Notify%20me%20%E2%80%94%20Sponsorships">Notify Me When Available</a>
    </div>
  </section>

  `
  },
  "white-label": {
    "title": "White Label — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/finale.png')"></div>
    <a class="backlink" href="/company/">BACK TO COMPANY</a>
    <p class="phero__eyebrow mono">COMPANY <span class="badge-soon">COMING SOON</span></p>
    <h1>White Label Programme.</h1>
    <p>Infrastructure for brokers who want to launch on PRIME DCX's liquidity and technology stack
    under their own brand &mdash; execution, back office and support, without building it from scratch.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHAT'S COMING</p>
      <h2>Your brand, our infrastructure</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">T1</div><h3>Tier-1 liquidity</h3><p>The same execution and pricing infrastructure that powers PRIME DCX, under your brand.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9635;</div><h3>Back office &amp; support</h3><p>Client onboarding, KYC, reporting and support built in, not bolted on.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9993;</div><h3>Direct enquiries</h3><p>Reach the partnerships desk to discuss a white-label arrangement.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">STAY AHEAD OF THE LAUNCH</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Be first to launch on our stack.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">We'll notify you the moment the White Label programme opens.</p>
      <a class="btn btn--ghost btn--xl" href="mailto:partners@primedcx.com?subject=Notify%20me%20%E2%80%94%20White%20Label">Notify Me When Available</a>
    </div>
  </section>

  `
  },
  "open-account": {
    "title": "Open an Account — PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/last1.png')"></div>
    <a class="backlink" href="/">BACK TO HOME</a>
    <p class="phero__eyebrow mono">OPEN ACCOUNT</p>
    <h1>Open your account.</h1>
    <p>Four asset classes, spreads from 0.0 pips and instant execution &mdash; live in minutes,
    from a $100 deposit.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">HOW IT WORKS</p>
      <h2>Live in three steps</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">01</div><h3>Register</h3><p>Open your account online in minutes. You must be 18 or older; one identity, one account.</p></div>
      <div class="fcard rv"><div class="fcard__ic">02</div><h3>Verify &amp; fund</h3><p>Complete KYC with a government ID and proof of address, then deposit from an account in your own name &mdash; from $100.</p></div>
      <div class="fcard rv"><div class="fcard__ic">03</div><h3>Trade</h3><p>Launch the Web Trader and access 150+ pairs instantly. Withdrawals are processed automatically within 24 hours.</p></div>
    </div>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">WHY PRIME DCX</p>
      <h2>Built for execution</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">FX</div><h3>Four asset classes</h3><p>Forex, crypto, commodities and indices, all from one account.</p></div>
      <div class="fcard rv"><div class="fcard__ic">0.0</div><h3>Spreads from 0.0 pips</h3><p>Straight from aggregated liquidity, with no dealing desk.</p></div>
      <div class="fcard rv"><div class="fcard__ic">12ms</div><h3>Lightning execution</h3><p>Ultra-low-latency order routing with zero requotes.</p></div>
      <div class="fcard rv"><div class="fcard__ic">24/7</div><h3>Always-on support</h3><p>Multilingual support available around the clock.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">START TODAY</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Open a live account today.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Direct market access &middot; Fast withdrawals &middot; Dedicated support</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  }
};
