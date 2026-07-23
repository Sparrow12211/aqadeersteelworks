import type { Metadata } from "next";

import { JsonLd } from "@/components/seo/json-ld";
import { ProductGallery } from "@/components/products/ProductGallery";
import { products } from "@/data/products";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";

export const metadata: Metadata = createPageMetadata({
  title: "Products | Stainless Steel & Industrial Fabrication",
  description:
    "Explore AQSW products built with SS 304 and SS 316 stainless steel, including laboratory furniture, industrial lockers, mobile storage systems, sinks, almirahs, and custom fabrication solutions.",
  path: "/products",
  keywords: ["stainless steel products", "industrial lockers", "mobile storage systems"],
});

export default function ProductsPage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", url: "/" }, { name: "Products", url: "/products" }])} />
      <ProductGallery products={products} />
    </>
  );
}
