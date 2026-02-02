import type { Metadata } from "next";
import { Inter, Playfair_Display, Cairo } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
});

import { CookieConsent } from "@/components/CookieConsent";
import { StickyCart } from "@/components/StickyCart";
import { StoreSync } from "@/components/StoreInitializer";

export const metadata: Metadata = {
  title: "ABdattes - L'Authenticité d'Algérie",
  description: "Vente de dattes algériennes de qualité supérieure (Deglet Nour, Ghars) avec livraison 69 wilayas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <head>
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#3E2723" />
        <link rel="apple-touch-icon" href="/products/deglet-nour.png" />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${cairo.variable} antialiased bg-dattes-bg text-dattes-primary`}
      >
        {children}
        <CookieConsent />
        <StoreSync />
      </body>
    </html>
  );
}
