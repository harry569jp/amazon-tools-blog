import type { Metadata, Viewport } from "next";
import "./globals.css";
import ClientBody from "./ClientBody";
import { HeaderWrapper, FooterWrapper } from "./components";
// import '../i18n'; // We will initialize i18n in a client component
import I18nProvider from '../components/I18nProvider';

export const metadata: Metadata = {
  title: "Top 50 Best Websites 2025: Get inspired! │ Rimbo Designs",
  description: "Discover a curated list of cutting-edge websites to elevate your UI/UX design skills. Explore top trends and creative web inspiration.",
  authors: [{ name: "Rimbout Bobeldijk" }],
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f3ec" },
    { media: "(prefers-color-scheme: dark)", color: "#1d2137" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body suppressHydrationWarning className="antialiased">
        <I18nProvider>
        <ClientBody>
          <HeaderWrapper />
          {children}
          <FooterWrapper />
        </ClientBody>
        </I18nProvider>
      </body>
    </html>
  );
}
