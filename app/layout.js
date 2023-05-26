import '@styles/global';

export const metadata = {
  title: 'Zen Time Potato',
  description: 'Zen Time Potato',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body>{children}</body>
    </html>
  );
}
