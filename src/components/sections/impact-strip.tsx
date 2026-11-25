// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { useEffect, useRef } from "react";
import { animate, motion, useInView, useReducedMotion } from "framer-motion";
import { impactStats, type ImpactStat } from "@/content";

function CountUp({ value, reduceMotion }: { value: number; reduceMotion: boolean }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });

  // Server HTML holds the final value; zero it on mount so the count-up starts from 0.
  useEffect(() => {
    if (!reduceMotion && ref.current && !inView) ref.current.textContent = "0";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [reduceMotion]);

  useEffect(() => {
    if (!inView || reduceMotion || !ref.current) return;
    const el = ref.current;
    const controls = animate(0, value, {
      duration: 1.4,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => {
        el.textContent = String(Math.round(v));
      },
    });
    return () => controls.stop();
  }, [inView, reduceMotion, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {value}
    </span>
  );
}

function Stat({ stat, index, reduceMotion }: { stat: ImpactStat; index: number; reduceMotion: boolean }) {
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay: index * 0.08 }}
      className="relative rounded-xl border border-cyber-border bg-[#050f1f]/80 p-4 sm:p-5"
    >
      <span
        aria-hidden="true"
        className="absolute left-0 top-4 bottom-4 w-[2px] rounded-full bg-gradient-to-b from-cyber-cyan to-cyber-green"
      />
      <p className="font-mono font-bold text-2xl sm:text-4xl text-white [text-shadow:0_0_18px_rgba(0,245,255,0.45)]">
        {stat.prefix}
        {stat.value !== undefined ? (
          <CountUp value={stat.value} reduceMotion={reduceMotion} />
        ) : (
          stat.text
        )}
        {stat.suffix && <span className="text-cyber-cyan">{stat.suffix}</span>}
      </p>
      <p className="mt-2 text-xs sm:text-sm font-medium uppercase tracking-[2px] text-[#cce8ff]/85">
        {stat.label}
      </p>
      {stat.detail && <p className="mt-1 text-xs font-mono text-cyber-muted">{stat.detail}</p>}
    </motion.div>
  );
}

export function ImpactStrip() {
  const reduceMotion = useReducedMotion() ?? false;

  return (
    <section id="impact" aria-labelledby="impact-heading" className="px-4 sm:px-6 py-16">
      <div className="max-w-5xl mx-auto">
        <h2
          id="impact-heading"
          className="mb-6 text-xs font-mono uppercase tracking-[4px] text-cyber-green"
        >
          {"// Signal readout"}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {impactStats.map((stat, i) => (
            <Stat key={stat.label} stat={stat} index={i} reduceMotion={reduceMotion} />
          ))}
        </div>
      </div>
    </section>
  );
}
