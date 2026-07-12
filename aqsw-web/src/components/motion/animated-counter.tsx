"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useSpring, useTransform } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  textValue?: string;
  className?: string;
}

export function AnimatedCounter({
  value,
  suffix = "",
  textValue,
  className,
}: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const spring = useSpring(0, { duration: 2000, bounce: 0 });
  const display = useTransform(spring, (latest) => Math.round(latest));
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (isInView && !textValue) {
      spring.set(value);
    }
  }, [isInView, spring, textValue, value]);

  useEffect(() => {
    if (textValue) return;
    return display.on("change", (v) => setCurrent(v));
  }, [display, textValue]);

  if (textValue) {
    return (
      <span ref={ref} className={className}>
        {textValue}
      </span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {isInView ? current : 0}
      {suffix}
    </span>
  );
}
