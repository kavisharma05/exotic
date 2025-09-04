import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://zeal-marketing.vercel.app'),
  title: {
    default: "ZEAL MARKETING - Premium Fragrance Solutions",
    template: "%s | ZEAL MARKETING"
  },
  description: "Leading manufacturer of premium fragrance solutions for hotels, retail spaces, and commercial environments. Custom scents, room fresheners, and cleaning products.",
  keywords: ["fragrance", "room freshener", "cleaning products", "premium scents", "commercial fragrances", "hotel amenities"],
  authors: [{ name: "ZEAL MARKETING" }],
  creator: "ZEAL MARKETING",
  publisher: "ZEAL MARKETING",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://zeal-marketing.vercel.app",
    title: "ZEAL MARKETING - Premium Fragrance Solutions",
    description: "Leading manufacturer of premium fragrance solutions for hotels, retail spaces, and commercial environments.",
    siteName: "ZEAL MARKETING",
  },
  twitter: {
    card: "summary_large_image",
    title: "ZEAL MARKETING - Premium Fragrance Solutions",
    description: "Leading manufacturer of premium fragrance solutions for hotels, retail spaces, and commercial environments.",
    creator: "@zealmarketing",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
