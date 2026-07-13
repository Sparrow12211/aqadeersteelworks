"use client";

import { useEffect, useState } from "react";
import { useMobileAnimation } from "@/lib/animations";

export function useMouseParallax(intensity = 20) {
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const isMobile = useMobileAnimation();

  useEffect(() => {
    if (isMobile) {
      setOffset({ x: 0, y: 0 });
      return;
    }

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * intensity;
      const y = (e.clientY / window.innerHeight - 0.5) * intensity;
      setOffset({ x, y });
    };

    window.addEventListener("mousemove", handleMove, { passive: true });
    return () => window.removeEventListener("mousemove", handleMove);
  }, [intensity, isMobile]);

  return isMobile ? { x: 0, y: 0 } : offset;
}
