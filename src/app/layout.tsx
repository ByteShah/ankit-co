import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/layout/NavBar";
import Footer from "@/components/layout/Footer";
import CookieBanner from "@/components/ui/CookieBanner";
import JsonLd from "@/components/ui/JsonLd";
import WhatsAppFloat from "@/components/ui/WhatsAppFloat";
import MobileStickyBar from "@/components/ui/MobileStickyBar";
import LeadMagnetPopup from "@/components/ui/LeadMagnetPopup";
import Clarity from "@/components/ui/Clarity";
import { FIRM } from "@/lib/constants";

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ankitshahco.com";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: `${FIRM.name} | Chartered Accountants`,
    template: `%s | ${FIRM.name}`,
  },
  description: FIRM.description,
  keywords: [
    "Chartered Accountant Mumbai",
    "CA firm Mumbai",
    "Ankit Shah CA",
    "Audit Assurance India",
    "GST Advisory",
    "Tax Planning India",
    "Corporate Finance CA",
    "FEMA RBI Compliance",
    "Business Valuation India",
    "CA LLP Mumbai",
  ],
  authors: [{ name: FIRM.name, url: BASE_URL }],
  creator: FIRM.name,
  publisher: FIRM.name,
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: `${FIRM.name} | Chartered Accountants`,
    description: FIRM.description,
    url: BASE_URL,
    siteName: FIRM.name,
    type: "website",
    locale: "en_IN",
  },
  twitter: {
    card: "summary_large_image",
    title: `${FIRM.name} | Chartered Accountants`,
    description: FIRM.description,
  },
  alternates: {
    canonical: BASE_URL,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} h-full`}>
      <head>
        {/* Material Symbols */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=block"
          rel="stylesheet"
        />
        {/* JSON-LD Structured Data */}
        <JsonLd />
      </head>
      <body className="min-h-full flex flex-col bg-[#FAFAF8] text-[#1A1C19] antialiased">
        <Clarity />
        <NavBar />
        {/* pb-[68px] on mobile to avoid content hidden behind sticky bar */}
        <main className="flex-1 pb-[68px] md:pb-0">
          {children}
        </main>
        <Footer />
        <CookieBanner />
        <WhatsAppFloat />
        <MobileStickyBar />
        <LeadMagnetPopup />
      </body>
    </html>
  );
}
