"use client";

import Image from "next/image";
import { motion } from "framer-motion";

import { Container } from "@/components/layout/container";
import { ScrollReveal } from "@/components/motion/scroll-reveal";
import { SectionHeading } from "@/components/motion/section-heading";
import { companyOverview, timeline } from "@/lib/data/site-content";
import { images } from "@/lib/assets";
import { getMotionTransition, useMobileAnimation } from "@/lib/animations";

export function AboutAqsw() {
  const isMobile = useMobileAnimation();

  return (
    <section className="relative bg-background py-24">
      <Container>
        <SectionHeading
          eyebrow="About AQSW"
          title="Built to Perform Since 1990"
          description={companyOverview.headline}
          align="left"
        />

        <div className="grid items-center gap-16 lg:grid-cols-2">
          <ScrollReveal direction="left">
            <div className="space-y-6">
              <p className="text-base leading-relaxed text-dark-gray sm:text-lg">
                {companyOverview.about}
              </p>
              <p className="text-base leading-relaxed text-dark-gray sm:text-lg">
                {companyOverview.extended}
              </p>
              <p className="text-base leading-relaxed text-dark-gray sm:text-lg">
                {companyOverview.familyBusiness}
              </p>
              <p className="border-l-4 border-secondary pl-4 text-base italic leading-relaxed text-primary/80">
                {companyOverview.cnc}
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={0.15}>
            <div className="relative">
              <motion.div
                className="absolute -inset-3 rounded-2xl border-2 border-dashed border-secondary/30"
                animate={isMobile ? { rotate: 0 } : { rotate: [0, 1, 0, -1, 0] }}
                transition={getMotionTransition(isMobile, {
                  duration: isMobile ? 0.2 : 10,
                  ease: "easeInOut",
                })}
              />
              <motion.div
                className="relative aspect-[4/5] overflow-hidden rounded-2xl shadow-2xl shadow-primary/20"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
              >
                <Image
                  src={images.about}
                  alt="AQSW industrial fabrication workshop"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </motion.div>

              <div className="mt-10 space-y-0">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item.year}
                    className="relative flex gap-6 pb-8 last:pb-0"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={getMotionTransition(isMobile, {
                      delay: isMobile ? 0 : index * 0.15,
                      duration: 0.4,
                    })}
                  >
                    {index < timeline.length - 1 && (
                      <div className="absolute left-[23px] top-10 h-[calc(100%-16px)] w-px bg-gradient-to-b from-secondary to-light-gray" />
                    )}
                    <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-secondary bg-white font-heading text-xs font-bold text-secondary">
                      {item.year.replace("+", "")}
                    </div>
                    <div className="pt-1">
                      <h4 className="font-heading text-lg font-bold uppercase text-primary">
                        {item.title}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-dark-gray">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        </div>
      </Container>
    </section>
  );
}
