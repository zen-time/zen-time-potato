import "@styles/globals.css";

export const metadata = {
  title: "Zen Time Potato",
  description: "Zen Time Potato",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="w-screen h-screen">{children}</body>
    </html>
  );
}
