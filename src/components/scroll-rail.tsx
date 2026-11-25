// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { useEffect, useRef, useState, type RefObject } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface ScrollRailProps {
  /** Wrapper around the timeline's <ol>; the rail spans its first to last node. */
  targetRef: RefObject<HTMLElement | null>;
  reduceMotion: boolean;
  /** Horizontal position classes, e.g. "left-2 sm:left-4". */
  className: string;
  /** Distance in px from the top of each <li> to the centre of its node. */
  nodeOffset: number;
}

/** Vertical rail that runs from the first to the last node and draws itself as you scroll. */
export function ScrollRail({ targetRef, reduceMotion, className, nodeOffset }: ScrollRailProps) {
  const railRef = useRef<HTMLSpanElement>(null);
  const [bottom, setBottom] = useState(0);

  useEffect(() => {
    const track = targetRef.current;
    if (!track) return;
    const measure = () => {
      const last = track.querySelector<HTMLElement>("ol > li:last-child");
      if (last) setBottom(Math.max(0, track.offsetHeight - (last.offsetTop + nodeOffset)));
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(track);
    return () => ro.disconnect();
  }, [targetRef, nodeOffset]);

  // Same 85% viewport line the nodes use to fire, so the glow reaches each node as it lights up.
  const { scrollYProgress } = useScroll({ target: railRef, offset: ["start 85%", "end 85%"] });
  const progress = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.4 });

  return (
    <span
      ref={railRef}
      aria-hidden="true"
      style={{ top: nodeOffset, bottom }}
      className={cn("absolute w-[2px] -translate-x-1/2 pointer-events-none", className)}
    >
      <span className="absolute inset-y-0 left-1/2 w-px -translate-x-1/2 bg-cyber-border" />
      {reduceMotion ? (
        <span className="absolute inset-0 bg-gradient-to-b from-cyber-green via-cyber-cyan to-cyber-cyan/40" />
      ) : (
        <motion.span
          style={{ scaleY: progress }}
          className="absolute inset-0 origin-top bg-gradient-to-b from-cyber-green via-cyber-cyan to-cyber-cyan shadow-[0_0_10px_rgba(0,245,255,0.7)]"
        />
      )}
    </span>
  );
}
