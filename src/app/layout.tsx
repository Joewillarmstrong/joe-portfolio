import type { Metadata, Viewport } from "next";
import { Instrument_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono", display: "swap" });

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://joewillarmstrong.github.io";
const BASE = process.env.NEXT_PUBLIC_BASE_PATH || "";
const TITLE = "Joe Armstrong, music marketing";
const DESC = "Music marketing for artists, labels and the people around them. Selected campaigns with Dermot Kennedy, Mae Stephens, Devon and the Sex Pistols.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: TITLE,
  description: DESC,
  openGraph: {
    title: TITLE,
    description: DESC,
    type: "website",
    images: [{ url: `${BASE}/assets/joe-portrait.jpg`, alt: "Portrait of Joe Armstrong" }],
  },
  twitter: { card: "summary", title: TITLE, description: DESC },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#F6F6F4" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-AU" className={`${sans.variable} ${mono.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
