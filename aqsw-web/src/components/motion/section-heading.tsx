"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionDividerProps {
  className?: string;
  variant?: "light" | "dark";
}

export function SectionDivider({
  className,
  variant = "light",
}: SectionDividerProps) {
  const isDark = variant === "dark";

  return (
    <div className={cn("relative h-px w-full overflow-hidden", className)}>
      <div
        className={cn(
          "absolute inset-0",
          isDark ? "bg-white/10" : "bg-light-gray"
        )}
      />
      <motion.div
        className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-transparent via-secondary to-transparent"
        initial={{ x: "-100%" }}
        whileInView={{ x: "400%" }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 2.5, ease: "easeInOut", repeat: Infinity, repeatDelay: 3 }}
      />
    </div>
  );
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "center",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <div
      className={cn(
        "mb-12 max-w-3xl",
        align === "center" && "mx-auto text-center",
        align === "left" && "text-left"
      )}
    >
      {eyebrow && (
        <motion.span
          className={cn(
            "mb-3 inline-block text-xs font-semibold uppercase tracking-[0.25em]",
            light ? "text-secondary" : "text-secondary"
          )}
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {eyebrow}
        </motion.span>
      )}
      <motion.h2
        className={cn(
          "font-heading text-3xl font-bold uppercase tracking-tight sm:text-4xl lg:text-5xl",
          light ? "text-white" : "text-primary"
        )}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.1 }}
      >
        {title}
      </motion.h2>
      {description && (
        <motion.p
          className={cn(
            "mt-4 text-base leading-relaxed sm:text-lg",
            light ? "text-white/70" : "text-dark-gray"
          )}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
