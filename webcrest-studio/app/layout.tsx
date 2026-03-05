import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap"
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space",
  display: "swap"
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap"
});

export const metadata: Metadata = {
  metadataBase: new URL("https://webcrest.studio"),
  title: {
    default: "WEB CREST LAB | Web Engineering Lab",
    template: "%s | WEB CREST LAB"
  },
  description:
    "A digital engineering laboratory where production-grade web projects and experimental interfaces are engineered.",
  keywords: [
    "web engineering",
    "developer portfolio",
    "next.js",
    "typescript",
    "framer motion",
    "digital laboratory"
  ],
  openGraph: {
    title: "WEB CREST LAB",
    description:
      "I build fast, scalable, and experimental web products in a high-tech engineering lab format.",
    url: "https://webcrest.studio",
    siteName: "WEB CREST LAB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WEB CREST LAB",
    description:
      "I build fast, scalable, and experimental web products in a high-tech engineering lab format."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-bg text-text antialiased`}
      >
        <BackgroundGrid />
        <div className="relative z-10 min-h-screen">
          <Navbar />
          <main className="mx-auto w-full max-w-7xl px-4 pb-20 pt-28 sm:px-8">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
