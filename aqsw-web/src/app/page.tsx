import { AboutAqsw } from "@/components/home/about-aqsw";
import { ClientsMarquee } from "@/components/home/clients-marquee";
import { CtaBanner } from "@/components/home/cta-banner";
import { Expertise } from "@/components/home/expertise";
import { FeaturedProductsSection } from "@/components/home/featured-products-section";
import { Hero } from "@/components/home/hero";
import { IndustriesSection } from "@/components/home/industries-section";
import { WhyAqsw } from "@/components/home/why-aqsw";

export default function HomePage() {
  return (
    <>
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
