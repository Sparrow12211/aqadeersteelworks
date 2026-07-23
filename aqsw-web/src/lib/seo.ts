import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";

const metadataBaseUrl = new URL("https://aqadeersteelworks.com");
const defaultImage = "/assets/hero/og-image.png";

export function createPageMetadata({
  title,
  description,
  path = "/",
  openGraphType = "website",
  image = defaultImage,
  keywords = [],
}: {
  title: string;
  description: string;
  path?: string;
  openGraphType?: "website" | "article";
  image?: string;
  keywords?: string[];
}): Metadata {
  const pageTitle = title.includes(siteConfig.shortName)
    ? title
    : `${title} | ${siteConfig.shortName}`;
  const canonicalUrl = new URL(path, metadataBaseUrl).toString();

  return {
    metadataBase: metadataBaseUrl,
    title: pageTitle,
    description,
    keywords: [
      "A. Qadeer Steel Works",
      "steel fabrication Karachi Pakistan",
      "stainless steel fabrication",
      "mild steel fabrication",
      "industrial lockers",
      "laboratory furniture",
      "mobile storage systems",
      "custom fabrication",
      ...keywords,
    ],
    alternates: {
      canonical: canonicalUrl,
    },
    authors: [{ name: siteConfig.name }],
    creator: siteConfig.name,
    publisher: siteConfig.name,
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
    openGraph: {
      type: openGraphType,
      title: pageTitle,
      description,
      url: canonicalUrl,
      siteName: siteConfig.name,
      locale: "en_PK",
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: pageTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: [image],
    },
    icons: {
      icon: "/favicon.ico",
    },
    manifest: "/manifest.webmanifest",
  };
}

export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/favicon.ico`,
    description:
      "A. Qadeer Steel Works provides stainless steel fabrication, mild steel fabrication, laboratory furniture, industrial lockers, mobile storage systems, and custom industrial engineering solutions in Karachi, Pakistan.",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Karachi",
      addressCountry: "PK",
      addressRegion: "Sindh",
    },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+92-314-2118145",
      contactType: "customer service",
      areaServed: "PK",
      availableLanguage: ["English"],
    },
    sameAs: ["https://aqadeersteelworks.com"],
  };
}

export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["LocalBusiness", "ManufacturingBusiness"],
    name: siteConfig.name,
    url: siteConfig.url,
    logo: `${siteConfig.url}/assets/hero/logo.png`,
    image: `${siteConfig.url}/assets/hero/og-image.png`,
    description:
      "Industrial fabrication company specializing in stainless steel fabrication, mild steel fabrication, laboratory furniture, industrial lockers, SS304, SS316, mobile storage systems, and custom fabrication in Karachi, Pakistan.",
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address,
      addressLocality: "Karachi",
      addressRegion: "Sindh",
      addressCountry: "PK",
    },
    areaServed: [
      "Karachi",
      "Pakistan",
      "Sindh",
      "Islamabad",
      "Lahore",
    ],
    serviceArea: {
      "@type": "Place",
      name: "Pakistan",
    },
    priceRange: "$$",
    openingHoursSpecification: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
    makesOffer: [
      "Stainless Steel Fabrication",
      "Mild Steel Fabrication",
      "Laboratory Furniture",
      "Industrial Lockers",
      "SS304",
      "SS316",
      "Mobile Storage Systems",
      "Industrial Engineering",
      "Custom Fabrication",
    ],
    keywords:
      "Industrial Fabrication, Stainless Steel Fabrication, Mild Steel Fabrication, Laboratory Furniture, Industrial Lockers, SS304, SS316, Mobile Storage Systems, Industrial Engineering",
    founder: "Abdul Qadeer",
    industry: "Industrial Fabrication",
    telephone: "+92-314-2118145",
    email: siteConfig.email,
    sameAs: [siteConfig.url],
  };
}

export function getWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    description:
      "A. Qadeer Steel Works offers industrial fabrication solutions including stainless steel, mild steel, lockers, laboratory furniture, and custom engineering in Karachi, Pakistan.",
    inLanguage: "en-PK",
    potentialAction: {
      "@type": "SearchAction",
      target: `${siteConfig.url}/products`,
      "query-input": "required name=search_term_string",
    },
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${siteConfig.url}${item.url}`,
    })),
  };
}
