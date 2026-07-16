"use client";

import Image from "next/image";

import type { ProductItem } from "@/data/products";

type ProductCardProps = {
  product: ProductItem;
  onViewGallery: (product: ProductItem) => void;
};

export function ProductCard({ product, onViewGallery }: ProductCardProps) {
  return (
    <button
      type="button"
      onClick={() => onViewGallery(product)}
      aria-label={`Open gallery for ${product.title}`}
      className="group flex h-full w-full flex-col overflow-hidden rounded-[1.5rem] border border-light-gray/70 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-secondary/10 text-left"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={product.coverImage}
          alt={`${product.title} cover`}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          loading="lazy"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col justify-between p-6">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary/80">
            Manufacturing Category
          </p>
          <h3 className="mt-2 font-heading text-xl font-semibold text-primary">{product.folder}</h3>
          <p className="mt-2 text-sm text-primary/70">{product.images.length} images</p>
        </div>

        <div className="mt-6 inline-flex items-center justify-center rounded-full border border-primary/20 bg-primary px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-300 hover:bg-secondary">
          View Gallery
        </div>
      </div>
    </button>
  );
}
