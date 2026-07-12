"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowLeft, ArrowRight, X } from "lucide-react";

import type { ProductItem } from "@/data/products";

type LightboxProps = {
  product: ProductItem;
  currentIndex: number;
  onClose: () => void;
  onNavigate: (direction: 1 | -1) => void;
};

export function Lightbox({ product, currentIndex, onClose, onNavigate }: LightboxProps) {
  const [touchStartX, setTouchStartX] = useState<number | null>(null);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        onClose();
      }
      if (event.key === "ArrowRight") {
        onNavigate(1);
      }
      if (event.key === "ArrowLeft") {
        onNavigate(-1);
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose, onNavigate]);

  const currentImage = product.images[currentIndex];

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center bg-primary/85 px-4 py-5 sm:px-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.97 }}
          transition={{ duration: 0.2 }}
          className="relative flex w-full max-w-6xl flex-col overflow-hidden rounded-[2rem] border border-white/20 bg-white/95 shadow-2xl shadow-primary/30"
          onClick={(event) => event.stopPropagation()}
        >
          <div className="flex items-center justify-between border-b border-light-gray/70 bg-white px-4 py-3 sm:px-6">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.32em] text-secondary/80">
                Gallery Preview
              </p>
              <h3 className="font-heading text-lg font-semibold text-primary">{product.folder}</h3>
            </div>

            <button
              type="button"
              aria-label="Close gallery"
              onClick={onClose}
              className="rounded-full border border-primary/10 p-2 text-primary transition-colors duration-300 hover:bg-primary/5"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div
            className="relative flex-1 bg-background/80"
            onTouchStart={(event) => setTouchStartX(event.touches[0]?.clientX ?? null)}
            onTouchEnd={(event) => {
              if (touchStartX === null) {
                return;
              }
              const deltaX = event.changedTouches[0]?.clientX ?? 0;
              const distance = deltaX - touchStartX;
              if (distance > 50) {
                onNavigate(-1);
              }
              if (distance < -50) {
                onNavigate(1);
              }
              setTouchStartX(null);
            }}
          >
            <div className="absolute inset-x-0 top-4 z-10 flex items-center justify-between px-4 sm:px-6">
              <div className="rounded-full border border-white/50 bg-white/80 px-3 py-1 text-sm font-medium text-primary backdrop-blur">
                {currentIndex + 1} / {product.images.length}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  aria-label="Previous image"
                  onClick={() => onNavigate(-1)}
                  className="rounded-full border border-primary/10 bg-white/80 p-2 text-primary backdrop-blur transition-colors duration-300 hover:bg-white"
                >
                  <ArrowLeft className="h-4 w-4" />
                </button>
                <button
                  type="button"
                  aria-label="Next image"
                  onClick={() => onNavigate(1)}
                  className="rounded-full border border-primary/10 bg-white/80 p-2 text-primary backdrop-blur transition-colors duration-300 hover:bg-white"
                >
                  <ArrowRight className="h-4 w-4" />
                </button>
              </div>
            </div>

            <div className="flex min-h-[60vh] items-center justify-center px-4 py-16 sm:px-6 sm:py-20">
              <div className="relative h-[60vh] w-full max-w-4xl">
                <Image
                  src={currentImage}
                  alt={`${product.title} image ${currentIndex + 1}`}
                  fill
                  sizes="(max-width: 768px) 90vw, 70vw"
                  priority
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
