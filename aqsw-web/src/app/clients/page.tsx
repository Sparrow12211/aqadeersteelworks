import type { Metadata } from "next";

import { ClientsPageContent } from "@/components/clients/clients-page";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Our Clients | Trusted Industrial Fabrication Partners",
  description:
    "A. Qadeer Steel Works serves leading pharmaceutical, industrial, and commercial organizations across Pakistan with custom fabrication and engineered solutions.",
  path: "/clients",
  keywords: ["AQSW clients", "industrial fabrication partners"],
});

export default function ClientsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Clients", url: "/clients" }])} />
      <ClientsPageContent />
    </>
  );
}
