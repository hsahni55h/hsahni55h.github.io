// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface NeuronNodeProps {
  active: boolean;
  /** Keeps pulsing after activation (e.g. the current role). */
  current?: boolean;
  reduceMotion?: boolean;
  className?: string;
}

/** A timeline node that "fires" (flash + ripple) the first time it becomes active. */
export function NeuronNode({ active, current, reduceMotion, className }: NeuronNodeProps) {
  return (
    <span
      aria-hidden="true"
      className={cn("flex h-4 w-4 items-center justify-center", className ?? "relative")}
    >
      {active && !reduceMotion && (
        <motion.span
          className="absolute inset-0 rounded-full border border-cyber-cyan"
          initial={{ scale: 1, opacity: 0.9 }}
          animate={{ scale: 3.2, opacity: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        />
      )}
      {current && active && (
        <span className="absolute inset-0 rounded-full bg-cyber-green/40 animate-pulse-dot" />
      )}
      <span
        className={cn(
          "relative h-3 w-3 rounded-full border transition-all duration-500",
          active
            ? current
              ? "border-cyber-green bg-cyber-green shadow-[0_0_12px_3px_rgba(0,255,136,0.6)]"
              : "border-cyber-cyan bg-cyber-cyan shadow-[0_0_12px_3px_rgba(0,245,255,0.55)]"
            : "border-cyber-muted/60 bg-background"
        )}
      />
    </span>
  );
}
