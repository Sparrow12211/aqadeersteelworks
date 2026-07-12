"use client";

import { useMemo, useState } from "react";

import { Container } from "@/components/layout/container";
import { Lightbox } from "@/components/products/Lightbox";
import { ProductCard } from "@/components/products/ProductCard";
import type { ProductItem } from "@/data/products";

type ProductGalleryProps = {
  products: ProductItem[];
};

export function ProductGallery({ products }: ProductGalleryProps) {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleOpenGallery = (product: ProductItem) => {
    setSelectedProduct(product);
    setCurrentImageIndex(0);
  };

  const handleNavigate = (direction: 1 | -1) => {
    if (!selectedProduct) {
      return;
    }

    setCurrentImageIndex((previousIndex) => {
      const nextIndex = previousIndex + direction;
      if (nextIndex < 0) {
        return selectedProduct.images.length - 1;
      }
      if (nextIndex >= selectedProduct.images.length) {
        return 0;
      }
      return nextIndex;
    });
  };

  const heroStats = useMemo(() => {
    return [
      { label: "Categories", value: products.length.toString() },
      { label: "Project Views", value: "∞" },
      { label: "Fabrication Range", value: "Premium" },
    ];
  }, [products.length]);

  return (
    <section className="bg-background py-24">
      <Container>
        <div className="mb-16 overflow-hidden rounded-[2rem] border border-light-gray/70 bg-gradient-to-br from-primary via-primary/95 to-secondary/90 p-8 shadow-lg shadow-primary/10 md:p-12">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-2xl">
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-blue-100">
                AQSW Manufacturing
              </p>
              <h1 className="mt-3 font-heading text-4xl font-semibold text-white sm:text-5xl">
                Premium products, engineered for every industry.
              </h1>
              <p className="mt-4 max-w-xl text-base leading-7 text-blue-50/90 sm:text-lg">
                Browse our curated fabrication categories through immersive image galleries built from the repository assets.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-3 lg:min-w-[360px]">
              {heroStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
                  <p className="text-2xl font-semibold text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-blue-50/90">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} onViewGallery={handleOpenGallery} />
          ))}
        </div>
      </Container>

      {selectedProduct ? (
        <Lightbox
          product={selectedProduct}
          currentIndex={currentImageIndex}
          onClose={() => setSelectedProduct(null)}
          onNavigate={handleNavigate}
        />
      ) : null}
    </section>
  );
}
