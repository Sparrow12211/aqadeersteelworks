"use client";

import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

import { Container } from "@/components/layout/container";
import { Button } from "@/components/ui/button";
import { AnimatedCounter } from "@/components/motion/animated-counter";
import {
  BlueprintGrid,
  EngineeringLines,
  FloatingParticles,
  FloatingShapes,
} from "@/components/motion/blueprint-effects";
import { useMouseParallax } from "@/hooks/use-mouse-parallax";
import { siteConfig } from "@/lib/constants";
import { images } from "@/lib/assets";
import { getMotionTransition, useMobileAnimation } from "@/lib/animations";

const headlineWords = ["Precision.", "Quality.", "Reliability."];

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const mouse = useMouseParallax(24);
  const isMobile = useMobileAnimation();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.2]);
  const contentY = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden"
      aria-label="Hero"
    >
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: isMobile ? 0 : imageY,
          scale: isMobile ? 1 : imageScale,
          x: isMobile ? 0 : mouse.x * 0.5,
        }}
      >
        <motion.div
          animate={isMobile ? { scale: 1.02 } : { scale: [1.1, 1.12, 1.1] }}
          transition={getMotionTransition(isMobile, {
            duration: isMobile ? 0.4 : 20,
            ease: "easeInOut",
          })}
          className="relative h-full w-full"
        >
          <Image
            src={images.hero}
            alt="Industrial steel fabrication facility"
            fill
            priority
            className="object-cover object-center"
            sizes="100vw"
          />
        </motion.div>
      </motion.div>

      <div className="absolute inset-0 z-[1] bg-gradient-to-r from-primary/95 via-primary/82 to-primary/45" />
      <div className="absolute inset-0 z-[1] bg-gradient-to-t from-primary/70 via-transparent to-primary/25" />

      <motion.div
        className="absolute inset-0 z-[1] bg-gradient-to-br from-secondary/20 via-transparent to-transparent"
        animate={isMobile ? { opacity: 0.55 } : { opacity: [0.4, 0.7, 0.4] }}
        transition={getMotionTransition(isMobile, {
          duration: isMobile ? 0.4 : 6,
          ease: "easeInOut",
        })}
      />

      <BlueprintGrid className="z-[1] opacity-60" />
      <EngineeringLines className="z-[1]" />
      <FloatingParticles count={16} />
      <FloatingShapes className="z-[1]" />

      <motion.div
        className="relative z-10 w-full pt-24 pb-32"
        style={{ y: isMobile ? 0 : contentY, opacity: isMobile ? 1 : opacity }}
      >
        <Container>
          <div className="grid items-end gap-12 lg:grid-cols-[1fr_auto]">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getMotionTransition(isMobile, { duration: 0.4, delay: isMobile ? 0 : 0.2 })}
              >
                <span className="mb-6 inline-block rounded-full border border-white/20 bg-white/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-white/80 backdrop-blur-sm">
                  Est. {siteConfig.since}
                </span>
              </motion.div>

              <h1 className="font-heading text-5xl font-bold uppercase leading-[0.95] tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
                {headlineWords.map((word, i) => (
                  <motion.span
                    key={word}
                    className={`block ${word === "Quality." ? "text-secondary" : ""}`}
                    initial={{ opacity: 0, y: 50, filter: "blur(8px)" }}
                    animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                    transition={getMotionTransition(isMobile, {
                      duration: 0.4,
                      delay: isMobile ? 0 : 0.35 + i * 0.15,
                      ease: [0.22, 1, 0.36, 1],
                    })}
                  >
                    {word}
                  </motion.span>
                ))}
              </h1>

              <motion.p
                className="mt-6 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getMotionTransition(isMobile, { duration: 0.4, delay: isMobile ? 0 : 0.85 })}
              >
                Premium Industrial &amp; Cleanroom Engineering Solutions Since{" "}
                {siteConfig.since}
              </motion.p>

              <motion.div
                className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={getMotionTransition(isMobile, { duration: 0.4, delay: isMobile ? 0 : 1 })}
              >
                <Button asChild size="lg" variant="default">
                  <Link href="/products">
                    View Products
                    <motion.span
                      animate={{ x: [0, 4, 0] }}
                      transition={getMotionTransition(isMobile, {
                        duration: isMobile ? 0.8 : 1.5,
                        ease: "easeInOut",
                      })}
                      className="inline-flex"
                    >
                      <ArrowRight className="h-5 w-5" />
                    </motion.span>
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href="/contact">Request Quote</Link>
                </Button>
              </motion.div>
            </div>

            <motion.div
              className="glass-panel grid grid-cols-3 gap-4 rounded-2xl p-6 sm:gap-6 sm:p-8 lg:min-w-[420px]"
              initial={{ opacity: 0, x: 40, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={getMotionTransition(isMobile, { duration: 0.4, delay: isMobile ? 0 : 1.1 })}
              style={{ x: mouse.x * -0.3, y: mouse.y * -0.3 }}
            >
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
                  <AnimatedCounter value={30} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/60 sm:text-xs">
                  Years
                </p>
              </div>
              <div className="border-x border-white/10 text-center">
                <p className="font-heading text-3xl font-bold text-secondary sm:text-4xl">
                  <AnimatedCounter value={200} suffix="+" />
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/60 sm:text-xs">
                  Clients
                </p>
              </div>
              <div className="text-center">
                <p className="font-heading text-3xl font-bold text-white sm:text-4xl">
                  <AnimatedCounter value={1990} />
                </p>
                <p className="mt-1 text-[10px] font-semibold uppercase tracking-widest text-white/60 sm:text-xs">
                  Since
                </p>
              </div>
            </motion.div>
          </div>
        </Container>
      </motion.div>

      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={getMotionTransition(isMobile, { delay: isMobile ? 0 : 1.5, duration: isMobile ? 0.3 : 1 })}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={getMotionTransition(isMobile, {
            duration: isMobile ? 0.6 : 2,
            ease: "easeInOut",
          })}
          className="flex flex-col items-center gap-2 text-white/50"
        >
          <span className="text-[10px] font-semibold uppercase tracking-[0.3em]">
            Scroll
          </span>
          <ChevronDown className="h-5 w-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
