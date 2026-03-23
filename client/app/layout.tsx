import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Space_Grotesk } from "next/font/google";
import "@/styles/globals.css";
import { BackgroundGrid } from "@/components/BackgroundGrid";
import { Navbar } from "@/components/Navbar";
import { SiteFooter } from "@/components/SiteFooter";
import { StructuredData } from "@/components/StructuredData";

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
    default: "Professional Website Development & Engineering Lab | WEB CREST LAB",
    template: "%s | WEB CREST LAB"
  },
  description:
    "Expert website development, custom web engineering, and high-performance UI/UX design. We build production-grade web products and experimental digital interfaces using Next.js and TypeScript.",
  keywords: [
    "website development",
    "custom web design",
    "web engineering",
    "next.js developer",
    "professional web app development",
    "full-stack engineering lab",
    "high-performance websites",
    "digital product studio"
  ],
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-32x32.png",
    apple: "/apple-touch-icon.png",
  },
  openGraph: {
    title: "WEB CREST LAB | Professional Web Development",
    description:
      "I build fast, scalable, and professional web products. Expert web engineering and experimental interface design.",
    url: "https://webcrest.studio",
    siteName: "WEB CREST LAB",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "WEB CREST LAB | Website Development Lab",
    description:
      "High-performance website development and digital product engineering."
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        suppressHydrationWarning
        className={`${inter.variable} ${spaceGrotesk.variable} ${jetbrainsMono.variable} bg-bg text-text antialiased`}
      >
        <StructuredData />
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
