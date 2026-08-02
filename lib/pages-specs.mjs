// Contract Specifications - rendered from lib/instruments.mjs so the spec
// tables and the spreads page can never drift apart.
import { GROUPS, COUNTS, UNIVERSAL, SPREAD_NOTE, TIERS } from './instruments.mjs';

const pills = GROUPS
  .map(g => `<a href="#${g.id}">${g.name.toUpperCase()}</a>`)
  .join('\n      ');

function groupTable(g) {
  const rows = g.rows.map(([sym, desc]) => `
          <tr>
            <td class="sym">${sym}</td>
            <td class="nm">${desc}</td>
            <td class="px">${g.spread}</td>
            <td class="nm">${g.size}</td>
            <td class="px">${UNIVERSAL.minLot}</td>
            <td class="px">${UNIVERSAL.maxLot}</td>
            <td class="px">${g.leverage}</td>
          </tr>`).join('');

  return `
  <div id="${g.id}">
    <div class="tcap rv">
      <h3>${g.name}</h3>
      <span>${g.rows.length} INSTRUMENTS &nbsp;·&nbsp; ${g.hours.toUpperCase()}</span>
    </div>
    <div class="mtable-wrap rv">
      <table class="mtable">
        <thead>
          <tr>
            <th>SYMBOL</th>
            <th>DESCRIPTION</th>
            <th style="text-align:right">SPREAD FROM (${g.unit.toUpperCase()})</th>
            <th>CONTRACT SIZE</th>
            <th style="text-align:right">MIN LOT</th>
            <th style="text-align:right">MAX LOT</th>
            <th style="text-align:right">MAX LEVERAGE</th>
          </tr>
        </thead>
        <tbody>${rows}
        </tbody>
      </table>
    </div>
    <p class="note rv"><strong>Swap:</strong> ${g.swap}. <strong>Execution:</strong> ${UNIVERSAL.execution}.
    <strong>Margin call:</strong> ${UNIVERSAL.marginCall}. <strong>Stop out:</strong> ${UNIVERSAL.stopOut}.</p>
  </div>`;
}

const tierRows = TIERS.map(t => `
          <tr>
            <td class="sym">${t.name}</td>
            <td class="px">${t.spreadFrom}</td>
            <td class="px">${t.commission}</td>
            <td class="nm">${t.best}</td>
          </tr>`).join('');

export const pagesSpecs = {
  "contract-specs": {
    "title": "Contract Specifications - PRIME DCX",
    "html": `
  <div class="tape mono" aria-hidden="true"><div class="tape__inner"></div></div>

  <section class="phero">
    <div class="phero__bg" style="background-image:url('/assets/stills/hero.png')"></div>
    <a class="backlink" href="/conditions/">BACK TO TRADING CONDITIONS</a>
    <p class="phero__eyebrow mono">TRADING CONDITIONS</p>
    <h1>Contract specifications.</h1>
    <p>Every instrument on the PRIME DCX book, with its contract size, lot limits, leverage ceiling
    and spread floor. ${COUNTS.total} instruments across four asset classes, published in one place.</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">THE BOOK</p>
      <h2>${COUNTS.total} instruments, four asset classes</h2>
    </div>
    <div class="kv rv">
      <div><dt>FOREX</dt><dd class="gold">${COUNTS.forex} pairs</dd></div>
      <div><dt>COMMODITIES</dt><dd class="gold">${COUNTS.commodities}</dd></div>
      <div><dt>INDICES</dt><dd class="gold">${COUNTS.indices}</dd></div>
      <div><dt>CRYPTO</dt><dd class="gold">${COUNTS.crypto}</dd></div>
      <div><dt>MIN TRADE SIZE</dt><dd>${UNIVERSAL.minLot} lots</dd></div>
      <div><dt>MAX TRADE SIZE</dt><dd>${UNIVERSAL.maxLot} lots</dd></div>
      <div><dt>MARGIN CALL</dt><dd>${UNIVERSAL.marginCall}</dd></div>
      <div><dt>STOP OUT</dt><dd>${UNIVERSAL.stopOut}</dd></div>
    </div>
    <p class="note rv">${SPREAD_NOTE}</p>
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">JUMP TO</p>
      <h2>Specifications by group</h2>
    </div>
    <div class="pills mono rv">
      ${pills}
    </div>
    ${GROUPS.map(groupTable).join('\n')}
  </section>

  <section class="sec sec--line">
    <div class="sec__head rv">
      <p class="sec__eyebrow mono">PRICING MODEL</p>
      <h2>How your account tier changes the cost</h2>
      <p class="sec__sub">The spread floors above apply to ECN and PRIME accounts. PRO trades the same
      liquidity with the commission folded into the spread.</p>
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
      <p class="sec__eyebrow mono">RULES OF THE BOOK</p>
      <h2>Trading rules that apply everywhere</h2>
    </div>
    <div class="fgrid">
      <div class="fcard rv"><div class="fcard__ic">0.01</div><h3>Micro lot sizing</h3><p>Trade from ${UNIVERSAL.minLot} lots up to ${UNIVERSAL.maxLot} lots per position, on every instrument and every account tier.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#8644;</div><h3>Hedging allowed</h3><p>Hold long and short positions on the same instrument at once. No first-in-first-out rule.</p></div>
      <div class="fcard rv"><div class="fcard__ic">&#9889;</div><h3>Scalping allowed</h3><p>No minimum order distance and no restriction on holding time. Place orders as close to market as you need.</p></div>
      <div class="fcard rv"><div class="fcard__ic">${UNIVERSAL.stopOut}</div><h3>Margin protection</h3><p>Margin call at ${UNIVERSAL.marginCall} equity, stop out at ${UNIVERSAL.stopOut}. Positions close largest-loss first.</p></div>
    </div>
  </section>

  <section class="sec" style="text-align:center">
    <div class="rv">
      <p class="sec__eyebrow mono">READY?</p>
      <h2 style="font-family:'Unbounded';font-weight:700;font-size:clamp(26px,3.2vw,46px)">Trade the whole book.</h2>
      <p class="sec__sub" style="margin:16px auto 34px">Live account in minutes. Trade from $100 on any account type.</p>
      <a class="btn btn--fill btn--xl" href="https://client.primedcx.com/en/auth/sign-up">Open Live Account</a>
    </div>
  </section>

  `
  }
};
