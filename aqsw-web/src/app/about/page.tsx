import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

import { AboutPageContent } from "./about-page-content";

export const metadata: Metadata = createPageMetadata({
  title: "About A. Qadeer Steel Works",
  description:
    "Learn about A. Qadeer Steel Works, a trusted industrial fabrication company serving Pakistan with stainless steel, mild steel, and custom engineering solutions since 1990.",
  path: "/about",
  keywords: ["about AQSW", "industrial fabrication company Pakistan"],
});

export default function AboutPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "About", url: "/about" }])} />
      <AboutPageContent />
    </>
  );
}
