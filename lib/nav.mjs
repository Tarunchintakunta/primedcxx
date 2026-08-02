// Single source of truth for site navigation.
// `soon: true` renders a gold COMING SOON badge and marks the page as dormant.
// Consumed by the header mega-menu, the mobile overlay and the footer.

export const NAV = [
  {
    label: 'TRADE',
    href: '/markets/',
    blurb: 'Four asset classes, one book. Published conditions on every instrument.',
    cols: [
      {
        title: 'Markets',
        links: [
          { label: 'Range of Markets', href: '/markets/' },
          { label: 'Forex', href: '/markets/forex/' },
          { label: 'Crypto', href: '/markets/crypto/' },
          { label: 'Commodities', href: '/markets/commodities/' },
          { label: 'Indices', href: '/markets/indices/' },
          { label: 'Stocks CFDs', href: '/markets/stocks/', soon: true },
          { label: 'Bonds CFDs', href: '/markets/bonds/', soon: true },
          { label: 'Futures CFDs', href: '/markets/futures/', soon: true },
        ],
      },
      {
        title: 'Conditions',
        links: [
          { label: 'Trading Conditions', href: '/conditions/' },
          { label: 'Spreads & Commission', href: '/conditions/spreads/' },
          { label: 'Contract Specifications', href: '/conditions/contract-specs/' },
          { label: 'Trading Hours', href: '/conditions/trading-hours/' },
          { label: 'Leverage & Margin', href: '/conditions/leverage/' },
          { label: 'Swap Rates', href: '/conditions/swap-rates/', soon: true },
        ],
      },
      {
        title: 'Accounts',
        links: [
          { label: 'Account Types', href: '/accounts/' },
          { label: 'Live Account', href: '/accounts/live/' },
          { label: 'How to Deposit', href: '/accounts/deposit/' },
          { label: 'How to Withdraw', href: '/accounts/withdraw/' },
          { label: 'MAM Accounts', href: '/accounts/mam/' },
          { label: 'Raw Spread', href: '/accounts/raw-spread/', soon: true },
          { label: 'Demo Account', href: '/accounts/demo/', soon: true },
          { label: 'Swap-Free', href: '/accounts/swap-free/', soon: true },
          { label: 'PAMM', href: '/accounts/pamm/', soon: true },
        ],
      },
    ],
  },
  {
    label: 'PLATFORM',
    href: '/platform/',
    blurb: 'TradingView charting, one-click execution, and the same book on every device.',
    cols: [
      {
        title: 'Live now',
        links: [
          { label: 'Web Trader', href: '/platform/' },
          { label: 'Open Account', href: '/open-account/' },
        ],
      },
      {
        title: 'On the roadmap',
        links: [
          { label: 'MetaTrader 5', href: '/platform/mt5/', soon: true },
          { label: 'MetaTrader 4', href: '/platform/mt4/', soon: true },
          { label: 'cTrader', href: '/platform/ctrader/', soon: true },
          { label: 'VPS Hosting', href: '/platform/vps/', soon: true },
        ],
      },
    ],
  },
  {
    label: 'TOOLS',
    href: '/tools/',
    blurb: 'The analysis layer. In development, arriving tier by tier.',
    cols: [
      {
        title: 'Analysis',
        links: [
          { label: 'All Tools', href: '/tools/' },
          { label: 'Economic Calendar', href: '/tools/economic-calendar/', soon: true },
          { label: 'Trading Central', href: '/tools/trading-central/', soon: true },
          { label: 'Copy Trading', href: '/tools/copy-trading/', soon: true },
        ],
      },
      {
        title: 'Calculators',
        links: [
          { label: 'Calculator Suite', href: '/tools/calculators/', soon: true },
        ],
      },
    ],
  },
  {
    label: 'LEARN',
    href: '/learn/',
    blurb: 'Answers, definitions and market thinking.',
    cols: [
      {
        title: 'Support',
        links: [
          { label: 'Help Centre', href: '/learn/help-centre/' },
          { label: 'Trading Glossary', href: '/learn/glossary/' },
          { label: 'Contact Us', href: '/company/contact/' },
        ],
      },
      {
        title: 'Reading',
        links: [
          { label: 'Insights', href: '/blog/' },
          { label: 'Education Hub', href: '/learn/', soon: true },
        ],
      },
    ],
  },
  {
    label: 'COMPANY',
    href: '/company/',
    blurb: 'Who stands behind the book, and on what terms.',
    cols: [
      {
        title: 'Company',
        links: [
          { label: 'Why PRIME DCX', href: '/company/' },
          { label: 'Regulation', href: '/company/regulation/' },
          { label: 'Contact Us', href: '/company/contact/' },
          { label: 'About Us', href: '/company/about/', soon: true },
          { label: 'Careers', href: '/company/careers/', soon: true },
          { label: 'Sponsorships', href: '/company/sponsorships/', soon: true },
        ],
      },
      {
        title: 'Partnerships',
        links: [
          { label: 'IB Partner Programme', href: '/partners/' },
          { label: 'White Label', href: '/company/white-label/', soon: true },
        ],
      },
      {
        title: 'Legal',
        links: [
          { label: 'Risk Disclosure', href: '/legal/risk/' },
          { label: 'Terms & Conditions', href: '/legal/terms/' },
          { label: 'Privacy Policy', href: '/legal/privacy/' },
          { label: 'AML / KYC Policy', href: '/legal/aml-kyc/' },
        ],
      },
    ],
  },
];

export const SIGN_IN = 'https://client.primedcx.com/en/auth/sign-in';
export const SIGN_UP = 'https://client.primedcx.com/en/auth/sign-up';
