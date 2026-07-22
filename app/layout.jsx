export const metadata = {
  title: 'PRIME DCX',
  description: 'PRIME DCX - a next-generation CFD trading platform. 0.0 pip spreads, instant execution, 24/5 global markets.',
  icons: { icon: '/assets/brand/icon.png' },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
