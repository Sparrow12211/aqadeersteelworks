import { AboutAqsw } from "@/components/home/about-aqsw";
import { ClientsMarquee } from "@/components/home/clients-marquee";
import { CtaBanner } from "@/components/home/cta-banner";
import { Expertise } from "@/components/home/expertise";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { Hero } from "@/components/home/hero";
import { IndustriesSection } from "@/components/home/industries-section";
import { WhyAqsw } from "@/components/home/why-aqsw";
import { JsonLd } from "@/components/seo/json-ld";
import { buildBreadcrumbSchema, createPageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = createPageMetadata({
  title: "Industrial Fabrication Company in Pakistan",
  description:
    "A. Qadeer Steel Works provides stainless steel, mild steel, and industrial fabrication solutions across Pakistan, serving pharmaceutical, food, commercial, and industrial clients since 1990.",
  path: "/",
  keywords: ["industrial fabrication Pakistan", "custom fabrication Karachi"],
});

export default function HomePage() {
  return (
    <>
      <JsonLd data={buildBreadcrumbSchema([{ name: "Home", url: "/" }])} />
      <Hero />
      <WhyAqsw />
      <AboutAqsw />
      <Expertise />
      <IndustriesSection />
      <FeaturedProductsSection />
      <ClientsMarquee />
      <CtaBanner />
    </>
  );
}
