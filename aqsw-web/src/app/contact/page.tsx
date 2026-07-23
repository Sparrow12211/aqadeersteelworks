import type { Metadata } from "next";

import { ContactPageContent } from "@/components/contact/contact-page";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Contact A. Qadeer Steel Works",
  description:
    "Get in touch with A. Qadeer Steel Works for stainless steel fabrication, mild steel fabrication, laboratory furniture, and custom industrial engineering projects in Karachi.",
  path: "/contact",
  keywords: ["contact AQSW", "fabrication inquiry Karachi"],
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Contact", url: "/contact" }])} />
      <ContactPageContent />
    </>
  );
}
