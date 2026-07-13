import { useEffect, useState } from "react";
import { useReducedMotion, type Transition } from "framer-motion";

export const MOBILE_ANIMATION_BREAKPOINT = 768;
export const MOBILE_TRANSITION_DURATION = 0.4;
export const MOBILE_REVEAL_OFFSET = 18;
export const MOBILE_STAGGER = 0.05;

export function useMobileAnimation() {
  const [isMobile, setIsMobile] = useState(false);
  const prefersReducedMotion = useReducedMotion() ?? false;

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return;
    }

    const mediaQuery = window.matchMedia(
      `(max-width: ${MOBILE_ANIMATION_BREAKPOINT - 1}px)`
    );

    const update = () => {
      setIsMobile(mediaQuery.matches);
    };

    update();

    mediaQuery.addEventListener("change", update);

    return () => {
      mediaQuery.removeEventListener("change", update);
    };
  }, []);

  return isMobile || prefersReducedMotion;
}

export function getMotionTransition(
  isMobile: boolean,
  options: Transition = {}
): Transition {
  const duration = isMobile
    ? MOBILE_TRANSITION_DURATION
    : options.duration ?? 0.7;
  const delay = isMobile ? 0 : options.delay ?? 0;
  const { duration: _duration, delay: _delay, ...rest } = options;

  return {
    ...rest,
    duration,
    delay,
    ease: (rest.ease as Transition["ease"]) ?? [0.22, 1, 0.36, 1],
  };
}

export function getRevealVariants(
  direction: "up" | "down" | "left" | "right",
  isMobile: boolean,
  baseOffset = 40
) {
  const offset = isMobile ? MOBILE_REVEAL_OFFSET : baseOffset;
  const directionOffset = {
    up: { y: offset, x: 0 },
    down: { y: -offset, x: 0 },
    left: { x: offset, y: 0 },
    right: { x: -offset, y: 0 },
  } as const;

  return {
    hidden: {
      opacity: 0,
      ...directionOffset[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
    },
  };
}

export function getViewportProps(
  isMobile: boolean,
  once = true,
  margin = "-80px"
) {
  return {
    once: isMobile ? true : once,
    margin: isMobile ? "-40px" : margin,
  };
}

export function getStaggerValue(isMobile: boolean, stagger = 0.1) {
  return isMobile ? MOBILE_STAGGER : stagger;
}
