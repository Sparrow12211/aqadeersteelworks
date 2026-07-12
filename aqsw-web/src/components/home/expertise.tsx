"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import {
  SectionDivider,
  SectionHeading,
} from "@/components/motion/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/scroll-reveal";
import { expertiseItems } from "@/lib/data/site-content";

export function Expertise() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <Container>
        <SectionHeading
          eyebrow="Our Expertise"
          title="Precision Fabrication Capabilities"
          description="Comprehensive stainless steel and mild steel fabrication services for pharmaceutical, food, commercial, and industrial applications."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {expertiseItems.map((item) => (
            <StaggerItem key={item.id}>
              <Link href={item.href} className="group block h-full">
                <motion.article
                  className="relative h-full overflow-hidden rounded-2xl bg-primary shadow-lg"
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/50 to-transparent opacity-90 transition-opacity group-hover:opacity-80" />
                    <div className="absolute inset-0 bg-gradient-to-br from-secondary/20 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  </div>

                  <div className="absolute inset-x-0 bottom-0 p-5">
                    <h3 className="font-heading text-lg font-bold uppercase leading-tight text-white">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-xs text-white/70">{item.description}</p>
                    <div className="mt-3 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider text-secondary opacity-0 transition-all duration-300 group-hover:opacity-100">
                      Learn More
                      <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </motion.article>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </Container>
      <SectionDivider className="mt-24" />
    </section>
  );
}
