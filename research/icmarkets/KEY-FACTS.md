# IC Markets — key facts

Distilled from the 2 August 2026 scrape of `ic.com`. Every figure below appears on a page in
[`pages/`](pages/); the source page is linked per section.

---

## Entity and regulation

Source: [`company/regulation.md`](pages/company/regulation.md), [`company/insurance.md`](pages/company/insurance.md)

| Item | Value |
|---|---|
| Legal entity | Raw Trading Ltd |
| Jurisdiction | Seychelles |
| Regulator | Financial Services Authority (FSA) |
| Licence | Securities Dealer, No. **SD018** |
| Company registration | 8419879-1 |
| Client funds | Segregated accounts at top-tier banks |
| Insurance | Up to **US$1,000,000** per claimant — covers available balance and open CFD positions, triggered only on insolvency, no opt-in, no cost |

The site brands itself simply as "IC". `icmarkets.com` 301-redirects to `ic.com`.

---

## Account types

Source: [`trading-accounts/overview.md`](pages/trading-accounts/overview.md)

| Account | Platform | Commission (per lot, per side) | Min deposit | Spread from | Max leverage | Server | Instruments |
|---|---|---|---|---|---|---|---|
| **Raw Pro +** *(early access)* | MetaTrader | $1.00 ($2.00 round turn) | $100,000 | 0.0 pips | 1:5000 | New York | 2,250 |
| **Raw Pro** *(early access)* | MetaTrader | $1.50 ($3.00 round turn) | $5,000 | 0.0 pips | 1:5000 | New York | 2,250 |
| **Raw Spread** *(most popular)* | MetaTrader | $3.50 ($7.00 round turn) | $0 | 0.0 pips | 1:5000 | New York | 2,250 |
| **Raw Spread (cTrader)** | cTrader, TradingView | $3.00 per USD 100k | $0 | 0.0 pips | 1:1000 | London | 121 |
| **Standard** | MetaTrader | $0 | not stated | 0.8 pips | 1:5000 | New York | 2,250 |

Shared across all account types:

- Stop out level **50%**
- Micro lot trading from **0.01 lots**, no min or max trade size
- Max open positions: **200** on MetaTrader, **2,000** on cTrader
- All trading styles allowed; no order-distance restriction; freeze level 0; **no FIFO rule**; hedging and scalping permitted
- Swap-free available on all account types
- **10 base currencies**: USD, AUD, EUR, GBP, SGD, NZD, JPY, CHF, HKD, CAD

Standard is Raw pricing with a **0.8 pip markup** instead of commission. Raw Pro and Raw Pro+ are new
tiers not yet generally available — they buy a lower commission with a higher minimum deposit.

**Swap-free / Islamic**: available on request; carries a per-symbol admin charge in USD per lot
instead of swap (full table in [`trading-accounts/islamic-account.md`](pages/trading-accounts/islamic-account.md)).

---

## Execution and pricing infrastructure

Source: [`trading-pricing/trading-conditions.md`](pages/trading-pricing/trading-conditions.md), [`trading-accounts/raw-spread-account.md`](pages/trading-accounts/raw-spread-account.md)

| Item | Value |
|---|---|
| Average execution speed | **under 40 ms** (once order received) |
| MT4/MT5 servers | Equinix **NY4**, New York |
| cTrader servers | Equinix **LD5**, London |
| Latency to major VPS providers | under 1 ms |
| Liquidity providers | **up to 25** aggregated pricing sources |
| Dealing desk | None — no requotes, no price manipulation |
| Depth of market | Level II pricing on all platforms; cTrader fills against full order book at VWAP |
| Average EUR/USD spread | **0.1 pips** on Raw Spread |

---

## Products

Source: [`trading-markets/range-of-markets.md`](pages/trading-markets/range-of-markets.md)

| Asset class | Instruments | Max leverage | Commission | Notes |
|---|---|---|---|---|
| Forex | **61 pairs** | 1:5000 | Per account type | Spreads from 0.0 pips, 24/5 |
| Indices | **25** | 1:200 | None | Spreads from 0.4 points |
| Commodities | **20+** | 1:2000 | Per account type | Energy, agriculture, metals; spot and futures CFDs; from 10c per point |
| Stocks | **2,500+** | 1:20 | Per account type | MT5 only; ASX, NYSE, NASDAQ, LSE, Xetra, Euronext, Tokyo, SIX, HKEX, UAE; dividends paid |
| Bonds | **9+** | 1:200 | None | US, UK, Euro, Japan government bonds |
| Cryptocurrency | **94** | 1:500 (MT4/MT5), 1:300 (cTrader/TradingView) | Per account type | Traded 7 days a week, long or short |
| Futures | **5** | 1:200 | None | DXY, VIX, BRENT, WTI, GC, SI |

Headline total on the homepage: **+2,850 tradable instruments**.

The full stock CFD universe — roughly 3,600 rows across 15 exchange tables with MT5 symbols — is in
[`trading-markets/stocks.md`](pages/trading-markets/stocks.md). 24-hour trading is offered on
selected US stocks ([`trading-markets/stocks/24-hour-stock-markets.md`](pages/trading-markets/stocks/24-hour-stock-markets.md)).

> **Inconsistency worth noting:** the site quotes the forex pair count as 61 (range of markets),
> 60 (trading conditions) and 64 (Raw Spread and cTrader account pages) on different pages, and
> gives crypto leverage as both "up to 1:200" in prose and 1:500/1:300 in the spec bullet on the
> same page. Stocks are "2,500+" in prose and "+2,100" in the bullet beside it.

---

## Leverage tiers

Source: [`trading-pricing/leverage-margin.md`](pages/trading-pricing/leverage-margin.md)

Leverage steps down as position size grows, and drops further during HMR periods (end of day,
major news announcements, weekends).

**Forex CFDs**

| Instrument | 0–25 lots | 25–50 | 50–100 | 100+ | HMR 0–25 | HMR 25–50 | HMR 50–100 | HMR 100+ |
|---|---|---|---|---|---|---|---|---|
| FX Major/Minor | 1:5000 | 1:3000 | 1:1000 | 1:500 | 1:500 | 1:200 | 1:200 | 1:200 |
| FX Exotics | 1:3000 | 1:2000 | 1:1000 | 1:500 | 1:500 | 1:200 | 1:200 | 1:200 |

**Metals CFDs**

| Instrument | 0–25 lots | 25–50 | 50–100 | 100+ | HMR 0–25 | HMR 25–50 | HMR 50–100 | HMR 100+ |
|---|---|---|---|---|---|---|---|---|
| Gold (XAU) | 1:2000 | 1:1000 | 1:500 | 1:100 | 1:500 | 1:200 | 1:100 | 1:50 |
| Silver (XAG) | 1:1000 | 1:500 | 1:200 | 1:100 | 1:200 | 1:100 | 1:50 | 1:20 |

Per-asset-class maximums: Forex 1:5000 · Commodities 1:2000 · Crypto 1:500 · Indices 1:200 ·
Bonds 1:200 · Futures 1:200 · Stocks 1:20.

---

## Spreads and commissions

Source: [`trading-pricing/spreads.md`](pages/trading-pricing/spreads.md)

The page carries min/avg spread tables for forex (major, minor, exotic), metals, indices,
commodities, bonds and cryptocurrency — Raw Spread and Standard side by side.

**Minors and exotics** — Standard is consistently Raw **+ 1.0 pip** on both min and avg, against a
marketed 0.8 pip markup:

| Symbol | Group | Raw min | Raw avg | Standard min | Standard avg |
|---|---|---|---|---|---|
| AUDCAD | Minor | 0 | 0.68 | 1 | 1.68 |
| AUDCHF | Minor | 0 | 0.41 | 1 | 1.41 |
| AUDSGD | Exotic | 0 | 0.97 | 1 | 1.97 |
| EURHKD | Exotic | 0 | 2.17 | 1 | 3.17 |

**Majors** — a different and internally inconsistent pattern. Standard min is a flat 0.8, but
Standard avg sits *below* it, at roughly Raw avg + 0.08:

| Symbol | Raw min | Raw avg | Standard min | Standard avg |
|---|---|---|---|---|
| EURUSD | 0 | 0.01 | 0.8 | 0.1 |
| AUDUSD | 0 | 0.02 | 0.8 | 0.1 |
| USDJPY | 0 | 0.03 | 0.8 | 0.11 |
| GBPUSD | 0 | 0.04 | 0.8 | 0.12 |
| USDCHF | 0 | 0.09 | 0.8 | 0.17 |

Two problems with IC's own published majors data: an average spread cannot be lower than the
minimum, and the Raw EUR/USD average of **0.01 pips** here contradicts the **0.1 pips** their
marketing copy quotes on at least four other pages. The metals table has the same class of defect —
it ships with only five columns (`SYMBOL, DESCRIPTION, MIN, AVG, MIN`), the Standard average column
simply missing, so XAUUSD reads `0.05 | 0.09 | 0.1` with no label for the third figure. These are
faithful reproductions of the source, not extraction errors.

**Raw Spread commission by base currency** (MetaTrader, per standard lot):

| Base | Per side | Round turn | | Base | Per side | Round turn |
|---|---|---|---|---|---|---|
| USD | 3.50 | 7.00 | | JPY | 550 | 1,100 |
| AUD | 4.50 | 9.00 | | CHF | 3.30 | 6.60 |
| EUR | 3.25 | 6.50 | | NZD | 6.00 | 12.00 |
| GBP | 2.75 | 5.50 | | CAD | 4.75 | 9.50 |
| SGD | 4.75 | 9.50 | | HKD | 27.125 | 54.25 |

Micro-lot (0.01) rates are 1/100th of these. cTrader and TradingView charge **$3.00 per USD 100,000**
traded instead.

**Swap** ([`trading-pricing/swap-rates.md`](pages/trading-pricing/swap-rates.md)): triple swap
charged Wednesday night for FX, metals, bonds and commodities; Friday night for energies, indices
and cryptocurrencies.

---

## Platforms

Source: [`pages/forex-trading-platform-metatrader/`](pages/forex-trading-platform-metatrader/), [`pages/forex-trading-platform-ctrader/`](pages/forex-trading-platform-ctrader/)

- **MetaTrader 4 / 5** — Windows, WebTrader, Mac, iPhone/iPad, Android
- **cTrader** — Windows, web, iMac, iPhone/iPad, Android, plus cAlgo (C#) and cTrader Copy Trading
- **TradingView** — integrated for live trading
- **IC mobile app** and **IC Social** (social trading app)
- **VPS** and dedicated trading servers; MT4 advanced trading tools add-on
- Copy/social: **ZuluTrade**, **Signal Start**, cTrader Copy
- Research: **Trading Central**, **IC Insights**, economic calendar, forex calculators

Programming languages: MQL4/MQL5 on MetaTrader, C# on cTrader.

---

## Funding and withdrawals

Source: [`trading-accounts/funding.md`](pages/trading-accounts/funding.md), [`trading-accounts/withdrawal.md`](pages/trading-accounts/withdrawal.md)

**Deposits** — "over 15 flexible funding options", most instant, **no fees charged by IC**:
credit/debit cards, PayPal, Neteller, Skrill, UnionPay, bank wire, Bpay, Poli, FasaPay, Klarna,
Rapidpay, Webmoney, Thai and Vietnamese internet banking, broker-to-broker transfer, and
cryptocurrency.

**Withdrawals** — key terms:

- Requests submitted from the Secure Client Area only; cut-off **12:00 AEST/AEDT** for same-day processing
- No IC fees; third-party bank charges may still apply
- Card withdrawals free, typically **3–5 business days** (up to 10 in rare cases)
- International wires up to **14 days**, may incur intermediary fees
- Funds must return to the original deposit method; e-wallet withdrawals go back to the same e-wallet
- **No third-party payments** — destination must be in the account holder's name
- A processing fee may apply if deposited funds were never traded

---

## Marketing positioning

Source: [`index.md`](pages/index.md), [`company/why-us.md`](pages/company/why-us.md)

Headline claims on the homepage: 0.0 pip spreads · 1:5000 leverage · 0.01 micro lots ·
+2,850 instruments · 24/7 support · under 40ms average execution · 4.8/5 on Trustpilot ·
60% of trades algorithmic · billions of USD in FX processed daily.

Active promotion at time of capture: **100% bonus on first deposit, 50% on every top-up**
([`introduction/deposit-bonus.md`](pages/introduction/deposit-bonus.md)).

Site structure runs: Quickstart · Trading (accounts, products, conditions) · Platforms ·
More (company, education, help). Partners sit on a separate domain, `icmarketspartners.com`,
which is outside this scrape.
