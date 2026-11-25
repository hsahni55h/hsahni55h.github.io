// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView, useReducedMotion } from "framer-motion";
import { journey, type JourneyMilestone } from "@/content";
import { NeuronNode } from "@/components/neuron-node";
import { ScrollRail } from "@/components/scroll-rail";
import { cn } from "@/lib/utils";

function Milestone({
  m,
  index,
  reduceMotion,
}: {
  m: JourneyMilestone;
  index: number;
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -35% 0px" });
  const active = reduceMotion || inView;
  const right = index % 2 === 1;

  return (
    <li ref={ref} className="relative pl-10 md:pl-0 md:grid md:grid-cols-2 md:gap-16">
      <NeuronNode
        active={active}
        current={m.current}
        reduceMotion={reduceMotion}
        className="absolute left-2 md:left-1/2 top-5 -translate-x-1/2"
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: right ? 24 : -24 }}
        animate={active ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className={cn(right ? "md:col-start-2" : "md:col-start-1 md:text-right")}
      >
        <Link
          href={m.href}
          className={cn(
            "group block rounded-xl border bg-[#050f1f]/80 p-4 sm:p-5 transition-colors duration-500",
            active ? "border-cyber-cyan/25 hover:border-cyber-cyan/60" : "border-cyber-border"
          )}
        >
          <div className={cn("flex items-center gap-3", !right && "md:flex-row-reverse")}>
            <span
              className={cn(
                "font-mono font-bold text-xl sm:text-2xl transition-colors duration-500",
                active
                  ? m.current
                    ? "text-cyber-green [text-shadow:0_0_14px_rgba(0,255,136,0.5)]"
                    : "text-cyber-cyan [text-shadow:0_0_14px_rgba(0,245,255,0.45)]"
                  : "text-cyber-muted"
              )}
            >
              {m.year}
            </span>
            <span
              className={cn(
                "text-xs font-mono uppercase tracking-[2px] px-2 py-0.5 rounded border",
                m.kind === "education"
                  ? "text-cyber-purple border-cyber-purple/40"
                  : "text-cyber-green border-cyber-green/30"
              )}
            >
              {m.kind === "education" ? "Learn" : "Build"}
            </span>
            {m.current && (
              <span className="text-xs font-mono uppercase tracking-[2px] text-cyber-green">● Now</span>
            )}
          </div>
          <h3 className="mt-2 text-base sm:text-lg font-bold text-white">{m.title}</h3>
          <p className="text-sm text-cyber-cyan font-medium tracking-[1px]">{m.org}</p>
          <p className="mt-2 text-sm text-[#cce8ff]/75 leading-relaxed">{m.blurb}</p>
          <span className="mt-3 inline-flex items-center gap-1 text-xs font-mono uppercase tracking-[3px] text-cyber-muted group-hover:text-cyber-cyan transition-colors">
            Details <span aria-hidden="true">→</span>
          </span>
        </Link>
      </motion.div>
    </li>
  );
}

export function Journey() {
  const reduceMotion = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);

  return (
    <section id="journey" aria-labelledby="journey-heading" className="px-4 sm:px-6 py-16 md:py-24">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-10 md:mb-14 md:text-center"
        >
          <p className="text-xs font-mono uppercase tracking-[4px] text-cyber-green mb-3">
            {`// ${journey.length} nodes · ~30 second read`}
          </p>
          <h2
            id="journey-heading"
            className="text-3xl md:text-4xl font-bold text-white tracking-[2px] uppercase"
          >
            My journey
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#cce8ff]/70 max-w-xl md:mx-auto">
            From building robots to shipping enterprise AI. Scroll to fire each node.
          </p>
        </motion.div>

        <div ref={trackRef} className="relative">
          <ScrollRail targetRef={trackRef} reduceMotion={reduceMotion} className="left-2 md:left-1/2" />
          <ol className="space-y-6 md:space-y-10">
            {journey.map((m, i) => (
              <Milestone key={`${m.year}-${m.title}`} m={m} index={i} reduceMotion={reduceMotion} />
            ))}
          </ol>
        </div>

        <div className="mt-12 flex flex-col sm:flex-row gap-3 sm:justify-center">
          <Link
            href="/experience"
            className="min-h-11 inline-flex items-center justify-center px-5 rounded-md bg-cyber-cyan/10 border border-cyber-cyan/40 text-cyber-cyan text-xs font-mono uppercase tracking-[3px] hover:bg-cyber-cyan/20 transition-colors"
          >
            Full experience timeline →
          </Link>
          <Link
            href="/about"
            className="min-h-11 inline-flex items-center justify-center px-5 rounded-md border border-cyber-border text-[#cce8ff]/80 text-xs font-mono uppercase tracking-[3px] hover:border-cyber-cyan/40 transition-colors"
          >
            The longer story →
          </Link>
        </div>
      </div>
    </section>
  );
}
