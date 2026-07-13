"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { useMobileAnimation } from "@/lib/animations";

export function BlueprintGrid({ className }: { className?: string }) {
  const isMobile = useMobileAnimation();

  return (
    <motion.div
      className={cn("pointer-events-none absolute inset-0", className)}
      animate={isMobile ? { opacity: 0.3 } : { backgroundPosition: ["0px 0px", "60px 60px"] }}
      transition={isMobile ? { duration: 0.2 } : { duration: 20, repeat: Infinity, ease: "linear" }}
      style={{
        backgroundImage:
          "linear-gradient(rgba(29,114,243,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(29,114,243,0.08) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
      }}
    />
  );
}

export function EngineeringLines({ className }: { className?: string }) {
  const isMobile = useMobileAnimation();

  return (
    <svg
      className={cn("pointer-events-none absolute inset-0 h-full w-full opacity-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
    >
      <motion.line
        x1="0"
        y1="30%"
        x2="100%"
        y2="35%"
        stroke="rgba(29,114,243,0.4)"
        strokeWidth="1"
        initial={isMobile ? { pathLength: 1, opacity: 1 } : { pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 1 }}
        transition={isMobile ? { duration: 0.2 } : { duration: 2, delay: 0.5 }}
      />
      <motion.line
        x1="10%"
        y1="0"
        x2="5%"
        y2="100%"
        stroke="rgba(255,255,255,0.15)"
        strokeWidth="1"
        initial={isMobile ? { pathLength: 1 } : { pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={isMobile ? { duration: 0.2 } : { duration: 2, delay: 0.8 }}
      />
      {!isMobile && (
        <motion.circle
          cx="85%"
          cy="20%"
          r="80"
          fill="none"
          stroke="rgba(29,114,243,0.2)"
          strokeWidth="1"
          strokeDasharray="4 8"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        />
      )}
    </svg>
  );
}

export function FloatingParticles({ count = 12 }: { count?: number }) {
  const isMobile = useMobileAnimation();

  if (isMobile) {
    return null;
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: count }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-secondary/40"
          style={{
            left: `${(i * 17 + 5) % 100}%`,
            top: `${(i * 23 + 10) % 100}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: 4 + (i % 3),
            repeat: Infinity,
            delay: i * 0.3,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function FloatingShapes({ className }: { className?: string }) {
  const isMobile = useMobileAnimation();

  if (isMobile) {
    return null;
  }

  return (
    <div className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}>
      <motion.div
        className="absolute -right-20 top-1/4 h-64 w-64 rounded-full border border-secondary/20"
        animate={{ rotate: 360, scale: [1, 1.05, 1] }}
        transition={{ rotate: { duration: 30, repeat: Infinity, ease: "linear" }, scale: { duration: 6, repeat: Infinity } }}
      />
      <motion.div
        className="absolute -left-10 bottom-1/3 h-40 w-40 rotate-45 border border-white/10"
        animate={{ y: [0, -20, 0], rotate: [45, 50, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}
