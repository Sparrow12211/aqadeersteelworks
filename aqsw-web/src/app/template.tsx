"use client";

import { motion } from "framer-motion";
import { getMotionTransition, useMobileAnimation } from "@/lib/animations";

export default function Template({
  children,
}: {
  children: React.ReactNode;
}) {
  const isMobile = useMobileAnimation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={getMotionTransition(isMobile, { duration: 0.4, ease: [0.22, 1, 0.36, 1] })}
    >
      {children}
    </motion.div>
  );
}
