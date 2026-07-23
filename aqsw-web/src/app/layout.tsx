import type { Metadata } from "next";
import { Barlow_Condensed, Inter } from "next/font/google";

import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { JsonLd } from "@/components/seo/json-ld";
import { siteConfig } from "@/lib/constants";
import { createPageMetadata, getLocalBusinessSchema, getOrganizationSchema, getWebsiteSchema } from "@/lib/seo";

import "./globals.css";

const barlowCondensed = Barlow_Condensed({
  variable: "--font-heading",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = createPageMetadata({
  title: `${siteConfig.name} | Premium Steel Fabrication Since ${siteConfig.since}`,
  description: siteConfig.description,
  path: "/",
  keywords: [
    "steel fabrication",
    "stainless steel",
    "mild steel",
    "industrial equipment",
    "cleanroom furniture",
    "pharmaceutical fabrication",
    "Karachi",
    "Pakistan",
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${barlowCondensed.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-background font-body text-foreground antialiased">
        <JsonLd data={[getOrganizationSchema(), getLocalBusinessSchema(), getWebsiteSchema()]} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
