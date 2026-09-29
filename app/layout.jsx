export const metadata = {
  title: 'PRIME DCX',
  description: 'PRIME DCX - Global Markets. Prime Access. Institutional-grade CFD execution across forex, crypto, commodities and indices.',
  icons: { icon: '/assets/brand/icon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
