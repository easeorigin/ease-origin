"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";

interface AnimatedCounterProps {
  value: string;
  className?: string;
}

function parseNumericValue(value: string): { number: number; prefix: string; suffix: string } | null {
  const match = value.match(/^([<>~]?)(\d[\d,]*)(\.\d+)?([%+xsms]*)/);
  if (!match) return null;

  const prefix = match[1] || "";
  const number = parseFloat(match[2].replace(/,/g, "") + (match[3] || ""));
  const suffix = match[4] || "";

  return { number, prefix, suffix };
}

function formatNumber(n: number, original: string): string {
  const hasCommas = original.includes(",");
  const rounded = Math.round(n);
  if (hasCommas) {
    return rounded.toLocaleString("en-US");
  }
  return rounded.toString();
}

export function AnimatedCounter({ value, className }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const parsed = parseNumericValue(value);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    duration: 1500,
    bounce: 0,
  });

  useEffect(() => {
    if (isInView && parsed) {
      motionValue.set(parsed.number);
    }
  }, [isInView, parsed, motionValue]);

  useEffect(() => {
    if (!parsed) return;

    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          parsed.prefix + formatNumber(latest, value) + parsed.suffix;
      }
    });

    return unsubscribe;
  }, [springValue, parsed, value]);

  if (!parsed) {
    return <span className={className}>{value}</span>;
  }

  return (
    <span ref={ref} className={className}>
      {parsed.prefix}0{parsed.suffix}
    </span>
  );
}
