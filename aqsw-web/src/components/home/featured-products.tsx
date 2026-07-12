"use client";

import { useCallback, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ZoomIn } from "lucide-react";

import { cn } from "@/lib/utils";

interface LightboxProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ src, alt, isOpen, onClose }: LightboxProps) {
  const handleKey = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    },
    [onClose]
  );

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKey);
    }
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKey);
    };
  }, [isOpen, handleKey]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-primary/95 p-4 backdrop-blur-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <button
            type="button"
            onClick={onClose}
            className="absolute right-6 top-6 rounded-full bg-white/10 p-2 text-white transition-colors hover:bg-white/20"
            aria-label="Close preview"
          >
            <X className="h-6 w-6" />
          </button>
          <motion.div
            className="relative max-h-[85vh] max-w-5xl overflow-hidden rounded-2xl"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={src}
              alt={alt}
              width={1200}
              height={900}
              className="max-h-[85vh] w-auto object-contain"
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

interface ProductTileProps {
  name: string;
  category: string;
  image: string;
  span: "small" | "medium" | "large";
  onOpen: () => void;
}

export function ProductTile({
  name,
  category,
  image,
  span,
  onOpen,
}: ProductTileProps) {
  const spanClasses = {
    small: "sm:col-span-1 sm:row-span-1",
    medium: "sm:col-span-1 sm:row-span-2",
    large: "sm:col-span-2 sm:row-span-2",
  };

  return (
    <motion.button
      type="button"
      className={cn(
        "group relative overflow-hidden rounded-2xl bg-primary text-left",
        spanClasses[span]
      )}
      onClick={onOpen}
      whileHover={{ y: -4 }}
      transition={{ duration: 0.4 }}
    >
      <div className="relative h-full min-h-[220px] w-full sm:min-h-0 sm:h-full">
        <Image
          src={image}
          alt={name}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-80 transition-opacity group-hover:opacity-70" />

        <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="rounded-full bg-white/20 p-3 backdrop-blur-sm">
            <ZoomIn className="h-6 w-6 text-white" />
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0 p-5">
          <span className="text-[10px] font-semibold uppercase tracking-widest text-secondary">
            {category}
          </span>
          <h3 className="mt-1 font-heading text-lg font-bold uppercase text-white sm:text-xl">
            {name}
          </h3>
        </div>
      </div>
    </motion.button>
  );
}
