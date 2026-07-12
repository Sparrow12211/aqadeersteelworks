import type { Metadata } from "next";

import { ProductGallery } from "@/components/products/ProductGallery";
import { products } from "@/data/products";

export const metadata: Metadata = {
  title: "Products",
  description: "Explore AQSW premium stainless steel and mild steel fabrication products.",
};

export default function ProductsPage() {
  return <ProductGallery products={products} />;
}
