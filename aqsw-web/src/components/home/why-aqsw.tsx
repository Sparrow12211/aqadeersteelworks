"use client";

import {
  Award,
  Clock,
  Cog,
  Shield,
  Users,
  Wrench,
} from "lucide-react";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import { BlueprintGrid } from "@/components/motion/blueprint-effects";
import {
  SectionDivider,
  SectionHeading,
} from "@/components/motion/section-heading";
import {
  StaggerContainer,
  StaggerItem,
} from "@/components/motion/scroll-reveal";
import { whyAqswStats } from "@/lib/data/site-content";
import { cn } from "@/lib/utils";

const icons = [Clock, Users, Award, Shield, Cog, Wrench];

export function WhyAqsw() {
  return (
    <section className="relative overflow-hidden bg-white py-24">
      <BlueprintGrid className="opacity-30" />
      <Container className="relative">
        <SectionHeading
          eyebrow="Why AQSW"
          title="Engineering Excellence You Can Trust"
          description="Three decades of precision fabrication, dependable service, and partnerships built on quality."
        />

        <StaggerContainer className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {whyAqswStats.map((stat, index) => {
            const Icon = icons[index];
            return (
              <StaggerItem key={stat.label}>
                <motion.div
                  className={cn(
                    "group relative overflow-hidden rounded-2xl border border-light-gray bg-background p-8",
                    "shadow-sm transition-all duration-500 hover:-translate-y-2 hover:border-secondary/30 hover:shadow-xl hover:shadow-secondary/10"
                  )}
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="absolute -right-6 -top-6 h-24 w-24 rounded-full bg-secondary/5 transition-transform duration-500 group-hover:scale-150" />

                  <div className="relative">
                    <div className="mb-5 inline-flex rounded-xl bg-primary/5 p-3 text-secondary transition-colors group-hover:bg-secondary group-hover:text-white">
                      <Icon className="h-6 w-6" strokeWidth={1.5} />
                    </div>

                    <p className="font-heading text-4xl font-bold text-primary">
                      {"textValue" in stat && stat.textValue ? (
                        <span>{stat.textValue}</span>
                      ) : (
                        <AnimatedCounter
                          value={stat.value}
                          suffix={stat.suffix}
                        />
                      )}
                    </p>

                    <h3 className="mt-2 font-heading text-lg font-bold uppercase tracking-wide text-primary">
                      {stat.label}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-dark-gray">
                      {stat.description}
                    </p>
                  </div>
                </motion.div>
              </StaggerItem>
            );
          })}
        </StaggerContainer>
      </Container>
      <SectionDivider className="mt-24" />
    </section>
  );
}
