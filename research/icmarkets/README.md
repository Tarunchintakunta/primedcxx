# IC Markets (ic.com) — full site scrape

Complete text-and-data extraction of the IC Markets public website, captured **2 August 2026**.

`icmarkets.com` now 301-redirects to **`ic.com`**, and the brand is presented as "IC" throughout
the site copy. The entity behind it is unchanged: **Raw Trading Ltd** (Seychelles).

## What's here

- **[KEY-FACTS.md](KEY-FACTS.md)** — the distilled competitive reference: account types, commissions,
  leverage tiers, product counts, funding methods, regulation. Start here.
- **`pages/`** — all 71 unique pages as markdown, mirroring the site's URL structure. Every page keeps
  its source URL and meta description in the header. All pricing and instrument tables are preserved
  as markdown tables.
- **`manifest.json`** — machine-readable page list (path, title, size).

## Coverage

- Crawled from `https://www.ic.com/sitemap.xml` (1,200 URLs = 64 English pages × 19 locale
  translations), plus 9 pages reachable only from the mega-menu.
- 74 pages fetched, 71 unique after dedup. 3 were exact aliases:
  `trading-accounts/swap-free-account` = `islamic-account`,
  `trading-markets/digitalcurrency` = `cryptocurrency`,
  and a duplicate route for the help centre.
- ~575,000 characters of extracted content.

### Notable data captured

| Page | What it holds |
|---|---|
| [`trading-markets/stocks.md`](pages/trading-markets/stocks.md) | Full stock CFD universe — 15 exchange tables (ASX, NYSE, NASDAQ, LSE, Xetra, Euronext, Tokyo, SIX, HKEX, UAE and more), ~3,600 instruments with MT5 symbols |
| [`trading-pricing/spreads.md`](pages/trading-pricing/spreads.md) | Min/avg spreads for forex, metals, indices, commodities, bonds and crypto, split by Raw Spread vs Standard account, plus commission rate tables by base currency |
| [`trading-pricing/leverage-margin.md`](pages/trading-pricing/leverage-margin.md) | Leverage tiers by lot band and asset class, including HMR (holiday/major-news/weekend) margin rates |
| [`trading-pricing/trading-hours.md`](pages/trading-pricing/trading-hours.md) | Server-time trading hours for every asset class |
| [`help-resources/help-centre.md`](pages/help-resources/help-centre.md) | The complete FAQ knowledge base (~90k characters) |
| [`help-resources/forex-glossary.md`](pages/help-resources/forex-glossary.md) | Full trading glossary |
| [`trading-accounts/islamic-account.md`](pages/trading-accounts/islamic-account.md) | Swap-free admin charges per symbol |

### Known gaps

Three pages are client-rendered widgets with no server HTML, so only their surrounding copy was
captured: `open-trading-account/live`, `open-trading-account/demo` (the application forms) and
`help-resources/forex-calculators` (the calculator tool). Live spread and swap values shown inside
the trading terminals are also not on the public site.

## How it was captured

Static HTTP fetch of each URL, then an HTML-to-markdown pass that preserves both real `<table>`
elements and IC's CSS-grid "div tables", merges stacked header rows, drops the duplicate
desktop/mobile renders of each table, and strips navigation and script boilerplate. The scraper
respected `robots.txt` (which allows `/` and only disallows tracking-parameter URLs).

## Note on use

This is competitor research: factual reference material — pricing, specs, product ranges, structure.
Treat the page text as IC's copyright. Use it to compare and inform PRIME DCX's own positioning and
numbers, not as copy to reuse verbatim.

---

## Page index

### Homepage

| Page | Title | Size |
|---|---|---|
| [`index.md`](pages/index.md) | IC \| Forex & CFD Trading Platform \| Trade Currencies, Stocks, Commodities and more | 5,063 ch |

### Accounts

| Page | Title | Size |
|---|---|---|
| [`trading-accounts/ctrader-raw.md`](pages/trading-accounts/ctrader-raw.md) | cTrader Raw Spread Account \| IC | 5,169 ch |
| [`trading-accounts/funding.md`](pages/trading-accounts/funding.md) | Fund Your Account \| Account Deposits \| IC | 4,969 ch |
| [`trading-accounts/islamic-account.md`](pages/trading-accounts/islamic-account.md) | Swap Free Forex Account \| IC | 5,624 ch |
| [`trading-accounts/overview.md`](pages/trading-accounts/overview.md) | Account Overview \| Trading Accounts \| IC | 3,988 ch |
| [`trading-accounts/raw-spread-account.md`](pages/trading-accounts/raw-spread-account.md) | Raw Spread Trading Account \| IC | 5,733 ch |
| [`trading-accounts/standard-account.md`](pages/trading-accounts/standard-account.md) | Standard Forex Trading Account \| IC | 4,351 ch |
| [`trading-accounts/withdrawal.md`](pages/trading-accounts/withdrawal.md) | Withdraw Funds \| Withdrawals \| IC | 6,595 ch |

### Pricing & trading conditions

| Page | Title | Size |
|---|---|---|
| [`trading-pricing/leverage-margin.md`](pages/trading-pricing/leverage-margin.md) | Leverage & Margin \| IC | 13,012 ch |
| [`trading-pricing/spreads.md`](pages/trading-pricing/spreads.md) | Lowest Spreads Forex CFD Provider\| IC | 13,476 ch |
| [`trading-pricing/swap-rates.md`](pages/trading-pricing/swap-rates.md) | Forex Swap Rates \| IC | 2,424 ch |
| [`trading-pricing/trading-conditions.md`](pages/trading-pricing/trading-conditions.md) | Trading Conditions \| IC | 2,597 ch |
| [`trading-pricing/trading-hours.md`](pages/trading-pricing/trading-hours.md) | Forex Trading Hours \| Forex Market | 9,255 ch |

### Markets & instruments

| Page | Title | Size |
|---|---|---|
| [`trading-markets/bonds.md`](pages/trading-markets/bonds.md) | Bonds CFDs Trading Online \| IC | 4,501 ch |
| [`trading-markets/commodities.md`](pages/trading-markets/commodities.md) | Commodities CFDs Trading Online \| IC | 4,760 ch |
| [`trading-markets/cryptocurrency.md`](pages/trading-markets/cryptocurrency.md) | Cryptocurrency Trading \| Cryptocurrency CFDs \| IC | 9,952 ch |
| [`trading-markets/forex.md`](pages/trading-markets/forex.md) | Forex Trading Online \| Forex CFDs \| IC | 8,090 ch |
| [`trading-markets/futures.md`](pages/trading-markets/futures.md) | Futures Trading Online \| Futures CFDs \| IC | 5,350 ch |
| [`trading-markets/indices.md`](pages/trading-markets/indices.md) | Indices Trading Online \| Indices CFDs \| IC | 6,860 ch |
| [`trading-markets/range-of-markets.md`](pages/trading-markets/range-of-markets.md) | Trading Markets \| Range of Markets \| IC | 4,554 ch |
| [`trading-markets/stocks.md`](pages/trading-markets/stocks.md) | Stock Trading Online \| Stock CFDs \| IC | 157,861 ch |
| [`trading-markets/stocks/24-hour-stock-markets.md`](pages/trading-markets/stocks/24-hour-stock-markets.md) | Foreign Exchange CFD Provider | 4,951 ch |

### Platforms — MetaTrader

| Page | Title | Size |
|---|---|---|
| [`forex-trading-platform-metatrader/android.md`](pages/forex-trading-platform-metatrader/android.md) | Metatrader Android \| MetaTrader 4 & MetaTrader 5 \| IC | 2,345 ch |
| [`forex-trading-platform-metatrader/apple-mac.md`](pages/forex-trading-platform-metatrader/apple-mac.md) | Download MetaTrader for Mac \| IC | 3,341 ch |
| [`forex-trading-platform-metatrader/iphone.md`](pages/forex-trading-platform-metatrader/iphone.md) | Metatrader iOS \| iPhone & iPad \| IC | 2,393 ch |
| [`forex-trading-platform-metatrader/metatrader-4.md`](pages/forex-trading-platform-metatrader/metatrader-4.md) | Download MetaTrader 4 \| MetaTrader 4 \| Forex Trading Platform | 7,136 ch |
| [`forex-trading-platform-metatrader/metatrader-5.md`](pages/forex-trading-platform-metatrader/metatrader-5.md) | Download MetaTrader 5 \| MetaTrader 5 Platform \| IC | 6,155 ch |
| [`forex-trading-platform-metatrader/web-trader.md`](pages/forex-trading-platform-metatrader/web-trader.md) | MetaTrader Web Platform \| MetaTrader 4 Web \| IC | 3,712 ch |

### Platforms — cTrader

| Page | Title | Size |
|---|---|---|
| [`forex-trading-platform-ctrader/calgo.md`](pages/forex-trading-platform-ctrader/calgo.md) | cTrader Algo \| Forex Trading Software \| IC | 4,902 ch |
| [`forex-trading-platform-ctrader/ctrader-android.md`](pages/forex-trading-platform-ctrader/ctrader-android.md) | cTrader Android \| Android Mobile App \| IC | 4,969 ch |
| [`forex-trading-platform-ctrader/ctrader-copy-trading.md`](pages/forex-trading-platform-ctrader/ctrader-copy-trading.md) | cTrader Copy Trading \| ctrader Platform Brokers \| IC | 3,128 ch |
| [`forex-trading-platform-ctrader/ctrader-imac.md`](pages/forex-trading-platform-ctrader/ctrader-imac.md) | cTrader iMac Platform \| IC | 5,203 ch |
| [`forex-trading-platform-ctrader/ctrader-iphone.md`](pages/forex-trading-platform-ctrader/ctrader-iphone.md) | cTrader iPhone & iPad \| cTrader iOS App \| IC | 5,123 ch |
| [`forex-trading-platform-ctrader/ctrader-web.md`](pages/forex-trading-platform-ctrader/ctrader-web.md) | cTrader Web Platform \| IC | 4,946 ch |
| [`forex-trading-platform-ctrader/ctrader-windows.md`](pages/forex-trading-platform-ctrader/ctrader-windows.md) | cTrader Windows Platform \| IC | 4,828 ch |

### Platforms — other

| Page | Title | Size |
|---|---|---|
| [`forex-trading-platform/signal-start.md`](pages/forex-trading-platform/signal-start.md) | Signal Start \| IC | 1,905 ch |

### Trading tools

| Page | Title | Size |
|---|---|---|
| [`forex-trading-tools/mt4-advanced-trading-tools.md`](pages/forex-trading-tools/mt4-advanced-trading-tools.md) | Advance Trading Tools \| Online Forex Trading Broker | 3,127 ch |
| [`forex-trading-tools/trading-servers.md`](pages/forex-trading-tools/trading-servers.md) | Forex Trading Servers \| IC | 2,868 ch |
| [`forex-trading-tools/virtual-private-server.md`](pages/forex-trading-tools/virtual-private-server.md) | Forex VPS \| Virtual Private Server \| IC | 3,610 ch |

### Social & copy trading

| Page | Title | Size |
|---|---|---|
| [`social-trading-tools/social-trading-mobile-app.md`](pages/social-trading-tools/social-trading-mobile-app.md) | Foreign Exchange CFD Provider | 9,263 ch |

### Introduction & promos

| Page | Title | Size |
|---|---|---|
| [`introduction/deposit-bonus.md`](pages/introduction/deposit-bonus.md) | Foreign Exchange CFD Provider | 5,976 ch |
| [`introduction/forex-trading.md`](pages/introduction/forex-trading.md) | Forex Trading Accounts \| IC | 5,486 ch |
| [`introduction/icmarkets-mobile-app.md`](pages/introduction/icmarkets-mobile-app.md) | Mobile App page \| IC | 1,678 ch |
| [`introduction/raw-trader-plus.md`](pages/introduction/raw-trader-plus.md) | Raw Trader Plus \| IC | 3,045 ch |

### Account opening

| Page | Title | Size |
|---|---|---|
| [`open-trading-account/demo.md`](pages/open-trading-account/demo.md) | Open a Demo Trading Account \| IC | 404 ch |
| [`open-trading-account/live.md`](pages/open-trading-account/live.md) | Open a Live Trading Account \| IC | 443 ch |

### Company

| Page | Title | Size |
|---|---|---|
| [`company/about-us.md`](pages/company/about-us.md) | About Us \| IC | 3,837 ch |
| [`company/careers.md`](pages/company/careers.md) | Careers \| Jobs at IC | 2,075 ch |
| [`company/contact-us.md`](pages/company/contact-us.md) | Contact Us \| IC | 1,908 ch |
| [`company/insurance.md`](pages/company/insurance.md) | Client Funds Insurance \| IC | 1,315 ch |
| [`company/legal-documents.md`](pages/company/legal-documents.md) | Legal Documents \| IC | 1,182 ch |
| [`company/regulation.md`](pages/company/regulation.md) | Regulations \| Regulated Forex Broker \| IC | 2,566 ch |
| [`company/sponsorship.md`](pages/company/sponsorship.md) | Sponsorship \| IC | 2,837 ch |
| [`company/why-us.md`](pages/company/why-us.md) | Why Use IC? \| IC | 4,165 ch |

### Education

| Page | Title | Size |
|---|---|---|
| [`education/advantages-of-cfds.md`](pages/education/advantages-of-cfds.md) | Advantages of Trading CFDs \| IC | 4,388 ch |
| [`education/advantages-of-forex.md`](pages/education/advantages-of-forex.md) | Advantages of Forex Trading \| IC | 5,443 ch |
| [`education/education-overview.md`](pages/education/education-overview.md) | Education Overview \| IC | 2,096 ch |
| [`education/video-tutorials.md`](pages/education/video-tutorials.md) | Forex Trading Video Tutorials \| IC | 1,378 ch |
| [`education/web-tv.md`](pages/education/web-tv.md) | Web TV Forex Tutorials \| IC | 830 ch |

### Help & resources

| Page | Title | Size |
|---|---|---|
| [`help-resources/economic-calendar.md`](pages/help-resources/economic-calendar.md) | Forex News and Calendar \| IC | 650 ch |
| [`help-resources/forex-calculators.md`](pages/help-resources/forex-calculators.md) | Forex Trading Calculator \| IC | 636 ch |
| [`help-resources/forex-glossary.md`](pages/help-resources/forex-glossary.md) | Forex Glossary \| IC | 34,563 ch |
| [`help-resources/help-centre.md`](pages/help-resources/help-centre.md) | Help Centre \| IC | 89,819 ch |
| [`help-resources/protecting-your-account.md`](pages/help-resources/protecting-your-account.md) | Foreign Exchange CFD Provider | 3,890 ch |
| [`help-resources/teamviewer.md`](pages/help-resources/teamviewer.md) | TeamViewer \| Technical Support \| IC | 1,460 ch |
| [`help-resources/trading-scams.md`](pages/help-resources/trading-scams.md) | Foreign Exchange CFD Provider | 4,885 ch |

### Other

| Page | Title | Size |
|---|---|---|
| [`blog.md`](pages/blog.md) | IC Your Trading Edge \| Official Blog | 5,416 ch |
| [`ic-insights.md`](pages/ic-insights.md) | Foreign Exchange CFD Provider | 3,755 ch |
| [`trading-central.md`](pages/trading-central.md) | Trading Central \| IC | 4,466 ch |
| [`tradingview.md`](pages/tradingview.md) | Foreign Exchange CFD Provider | 4,377 ch |
| [`zulutrade.md`](pages/zulutrade.md) | Zulutrade \| Social Trading Platform \| IC | 1,897 ch |
