"use client";

import { motion, type Variants } from "framer-motion";
import { cn } from "@/lib/utils";
import {
  getMotionTransition,
  getRevealVariants,
  getStaggerValue,
  getViewportProps,
  useMobileAnimation,
} from "@/lib/animations";

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  direction = "up",
  once = true,
}: ScrollRevealProps) {
  const isMobile = useMobileAnimation();
  const revealBase = getRevealVariants(direction, isMobile, 40);
  const variants: Variants = {
    hidden: {
      ...revealBase.hidden,
      opacity: 0,
    },
    visible: {
      ...revealBase.visible,
      opacity: 1,
      transition: getMotionTransition(isMobile, {
        duration: 0.7,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }),
    },
  };

  return (
    <motion.div
      className={cn(className)}
      initial="hidden"
      whileInView="visible"
      viewport={getViewportProps(isMobile, once, "-80px")}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

export function StaggerContainer({
  children,
  className,
  stagger = 0.1,
}: {
  children: React.ReactNode;
  className?: string;
  stagger?: number;
}) {
  const isMobile = useMobileAnimation();

  return (
    <motion.div
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={getViewportProps(isMobile, true, "-60px")}
      variants={{
        hidden: {},
        visible: {
          transition: { staggerChildren: getStaggerValue(isMobile, stagger) },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const isMobile = useMobileAnimation();

  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: isMobile ? 16 : 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: getMotionTransition(isMobile, {
            duration: 0.7,
            ease: [0.22, 1, 0.36, 1],
          }),
        },
      }}
    >
      {children}
    </motion.div>
  );
}
