"use client";

import Image from "next/image";
import Link from "next/link";
import {
  Building2,
  Factory,
  FlaskConical,
  ShoppingBag,
  UtensilsCrossed,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { SectionHeading } from "@/components/motion/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/scroll-reveal";
import { industries } from "@/lib/data/site-content";

const industryIcons = {
  pharmaceutical: FlaskConical,
  food: UtensilsCrossed,
  commercial: ShoppingBag,
  industrial: Factory,
  chemical: Building2,
};

export function IndustriesSection() {
  return (
    <section className="relative bg-primary py-24">
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Industries"
          title="Industries We Serve"
          description="Delivering hygienic, durable, and precision-engineered solutions across Pakistan's leading industrial sectors."
          light
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {industries.map((industry) => {
            const Icon =
              industryIcons[industry.id as keyof typeof industryIcons];
            return (
              <StaggerItem key={industry.id}>
                <Link href={`/industries#${industry.id}`}>
                  <motion.div
                    className="group relative h-72 overflow-hidden rounded-2xl border border-white/10"
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ duration: 0.4 }}
                  >
                    <Image
                      src={industry.image}
                      alt={industry.name}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, 20vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/70 to-primary/30 transition-colors group-hover:from-primary/90" />

                    <div className="absolute inset-0 flex flex-col items-center justify-end p-6 text-center">
                      <motion.div
                        className="mb-4 rounded-2xl bg-white/10 p-4 text-secondary backdrop-blur-sm transition-colors group-hover:bg-secondary group-hover:text-white"
                        whileHover={{ rotate: [0, -5, 5, 0] }}
                        transition={{ duration: 0.5 }}
                      >
                        <Icon className="h-8 w-8" strokeWidth={1.5} />
                      </motion.div>
                      <h3 className="font-heading text-xl font-bold uppercase text-white">
                        {industry.name}
                      </h3>
                      <p className="mt-2 text-xs leading-relaxed text-white/60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                        {industry.description}
                      </p>
                    </div>
                  </motion.div>
                </Link>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
    </section>
  );
}
