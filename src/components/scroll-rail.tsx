// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import type { RefObject } from "react";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRailProps {
  targetRef: RefObject<HTMLElement | null>;
  reduceMotion: boolean;
  /** Horizontal position classes, e.g. "left-2 sm:left-4". */
  className: string;
}

/** Vertical rail that draws itself (with a glowing signal tip) as the target scrolls past. */
export function ScrollRail({ targetRef, reduceMotion, className }: ScrollRailProps) {
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start 65%", "end 65%"],
  });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });
  const tipTop = useTransform(progress, (v) => `${v * 100}%`);
  const tipOpacity = useTransform(progress, [0, 0.02, 0.98, 1], [0, 1, 1, 0]);

  const base = cn("absolute top-0 bottom-0 -translate-x-1/2 pointer-events-none", className);

  return (
    <>
      <span aria-hidden="true" className={cn(base, "w-px bg-cyber-border")} />
      {reduceMotion ? (
        <span
          aria-hidden="true"
          className={cn(base, "w-[2px] bg-gradient-to-b from-cyber-green via-cyber-cyan to-cyber-cyan/40")}
        />
      ) : (
        <>
          <motion.span
            aria-hidden="true"
            style={{ scaleY: progress }}
            className={cn(
              base,
              "w-[2px] origin-top bg-gradient-to-b from-cyber-green via-cyber-cyan to-cyber-cyan shadow-[0_0_10px_rgba(0,245,255,0.7)]"
            )}
          />
          <motion.span
            aria-hidden="true"
            style={{ top: tipTop, opacity: tipOpacity }}
            className={cn(
              "absolute h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-white shadow-[0_0_14px_4px_rgba(0,245,255,0.8)] pointer-events-none",
              className
            )}
          />
        </>
      )}
    </>
  );
}
