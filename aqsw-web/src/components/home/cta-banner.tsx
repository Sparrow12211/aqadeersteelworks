"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { BlueprintGrid, FloatingShapes } from "@/components/motion/blueprint-effects";
import { ScrollReveal } from "@/components/motion/scroll-reveal";

export function CtaBanner() {
  return (
    <section className="relative overflow-hidden bg-primary py-24">
      <BlueprintGrid className="opacity-40" />
      <FloatingShapes />

      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-secondary/20 via-transparent to-secondary/10"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      <Container className="relative">
        <ScrollReveal>
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-heading text-4xl font-bold uppercase tracking-tight text-white sm:text-5xl lg:text-6xl">
              Let&apos;s Build Your Next Project
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-white/70">
              Partner with AQSW for precision-engineered fabrication solutions.
              Share your drawings and specifications — we&apos;ll deliver quality
              you can depend on.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg">
                <Link href="/contact">
                  Request Quote
                  <motion.span
                    animate={{ x: [0, 4, 0] }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="inline-flex"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </motion.span>
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/products">Explore Products</Link>
              </Button>
            </div>
          </div>
        </ScrollReveal>
      </Container>
    </section>
  );
}
