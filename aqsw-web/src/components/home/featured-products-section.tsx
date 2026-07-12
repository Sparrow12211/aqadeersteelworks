"use client";

import { useState } from "react";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/motion/section-heading";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import {
  featuredProducts,
} from "@/lib/data/site-content";

import { Lightbox, ProductTile } from "./featured-products";

export function FeaturedProductsSection() {
  const [lightbox, setLightbox] = useState<{
    src: string;
    alt: string;
  } | null>(null);

  return (
    <section className="bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Featured Products"
          title="Engineered for Performance"
          description="A selection of our sheet metal fabrication work — undertaken as per customer drawing, design, and specification."
        />

        <ScrollReveal>
          <div className="grid auto-rows-[220px] grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductTile
                key={product.id}
                name={product.name}
                category={product.category}
                image={product.image}
                span={product.span}
                onOpen={() =>
                  setLightbox({ src: product.image, alt: product.name })
                }
              />
            ))}
          </div>
        </ScrollReveal>
      </Container>

      {lightbox && (
        <Lightbox
          src={lightbox.src}
          alt={lightbox.alt}
          isOpen={!!lightbox}
          onClose={() => setLightbox(null)}
        />
      )}
    </section>
  );
}
