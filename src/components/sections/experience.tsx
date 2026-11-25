// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { useId, useRef, useState } from "react";
import { AnimatePresence, motion, useInView, useReducedMotion } from "framer-motion";
import { experiences, type Experience as ExperienceItem } from "@/content";
import { NeuronNode } from "@/components/neuron-node";
import { ScrollRail } from "@/components/scroll-rail";
import { cn } from "@/lib/utils";

function BulletList({ bullets }: { bullets: string[] }) {
  return (
    <ul className="space-y-2">
      {bullets.map((bullet, j) => (
        <li key={j} className="text-sm text-[#cce8ff]/70 leading-relaxed flex gap-2">
          <span className="text-cyber-cyan mt-0.5 shrink-0" aria-hidden="true">
            ▸
          </span>
          <span>{bullet}</span>
        </li>
      ))}
    </ul>
  );
}

function TimelineItem({
  exp,
  index,
  expanded,
  onToggle,
  reduceMotion,
}: {
  exp: ExperienceItem;
  index: number;
  expanded: boolean;
  onToggle: () => void;
  reduceMotion: boolean;
}) {
  const ref = useRef<HTMLLIElement>(null);
  const inView = useInView(ref, { once: true, margin: "0px 0px -15% 0px" });
  const active = reduceMotion || inView;
  const panelId = useId();
  const current = /present/i.test(exp.period);
  const detailCount =
    (exp.bullets?.length ?? 0) +
    (exp.projects?.reduce((n, p) => n + p.bullets.length, 0) ?? 0);

  return (
    <li ref={ref} className="relative pl-10 sm:pl-14">
      <NeuronNode
        active={active}
        current={current}
        reduceMotion={reduceMotion}
        className="absolute left-2 sm:left-4 top-6 -translate-x-1/2"
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: 16 }}
        animate={active ? { opacity: 1, x: 0 } : undefined}
        transition={{ duration: 0.45, ease: "easeOut" }}
        className={cn(
          "rounded-xl border bg-[#050f1f]/80 transition-colors duration-500",
          expanded
            ? "border-cyber-cyan/50 shadow-[0_0_24px_-8px_rgba(0,245,255,0.35)]"
            : active
              ? "border-cyber-cyan/25 hover:border-cyber-cyan/45"
              : "border-cyber-border"
        )}
      >
        <button
          type="button"
          onClick={onToggle}
          aria-expanded={expanded}
          aria-controls={panelId}
          className="w-full min-h-11 text-left p-5 sm:p-6 rounded-xl"
        >
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
            <div className="min-w-0">
              <p className="text-xs font-mono text-cyber-muted tracking-[3px] uppercase mb-1">
                Node {String(index + 1).padStart(2, "0")}
                {current && <span className="text-cyber-green"> · Active</span>}
              </p>
              <h3 className="text-base sm:text-lg font-bold text-white">{exp.role}</h3>
              <p className="text-sm text-cyber-cyan mt-0.5 font-medium tracking-[1px]">
                {exp.company} · {exp.location}
              </p>
            </div>
            <span className="self-start inline-block text-xs font-mono text-cyber-green border border-cyber-green/30 px-3 py-1 rounded-full sm:whitespace-nowrap tracking-[2px]">
              {exp.period}
            </span>
          </div>

          {exp.summary && (
            <p className="mt-3 text-sm text-[#cce8ff]/80 leading-relaxed">{exp.summary}</p>
          )}

          <span className="mt-4 flex items-center gap-2 text-xs font-mono uppercase tracking-[3px] text-cyber-muted">
            <span
              aria-hidden="true"
              className={cn(
                "inline-flex h-5 w-5 items-center justify-center rounded border border-cyber-cyan/30 text-cyber-cyan transition-transform duration-300",
                expanded && "rotate-45"
              )}
            >
              +
            </span>
            {expanded ? "Collapse" : `Expand · ${detailCount} ${detailCount === 1 ? "detail" : "details"}`}
          </span>
        </button>

        <AnimatePresence initial={false}>
          {expanded && (
            <motion.div
              id={panelId}
              key="panel"
              initial={reduceMotion ? false : { height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={reduceMotion ? { opacity: 0, transition: { duration: 0 } } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="overflow-hidden"
            >
              <div className="mx-5 sm:mx-6 pb-6 border-t border-cyber-border/60">
                <div className="pt-4 space-y-6">
                  {exp.bullets && <BulletList bullets={exp.bullets} />}
                  {exp.projects?.map((project) => (
                    <div key={project.title}>
                      <h4 className="text-sm font-bold text-cyber-green font-mono tracking-[1px] mb-3">
                        {project.title}
                      </h4>
                      <BulletList bullets={project.bullets} />
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </li>
  );
}

export function Experience() {
  const reduceMotion = useReducedMotion() ?? false;
  const trackRef = useRef<HTMLDivElement>(null);
  const [open, setOpen] = useState<Set<number>>(() => new Set());
  const allOpen = open.size === experiences.length;

  const toggle = (i: number) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(i)) next.delete(i);
      else next.add(i);
      return next;
    });

  return (
    <section id="experience" className="py-24 px-4 sm:px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-[2px] uppercase flex items-center gap-5"
        >
          Experience
          <span className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </motion.h2>
        <div className="mb-10 flex flex-wrap items-center justify-between gap-3">
          <p className="text-xs sm:text-sm font-mono text-cyber-muted tracking-[2px]">
            {experiences.length} nodes · newest first · tap a node to expand
          </p>
          <button
            type="button"
            onClick={() =>
              setOpen(allOpen ? new Set() : new Set(experiences.map((_, i) => i)))
            }
            className="min-h-11 px-4 text-xs font-mono uppercase tracking-[3px] text-cyber-cyan border border-cyber-cyan/30 rounded-md hover:bg-cyber-cyan/10 transition-colors"
          >
            {allOpen ? "Collapse all" : "Expand all"}
          </button>
        </div>

        <div ref={trackRef} className="relative">
          <ScrollRail targetRef={trackRef} reduceMotion={reduceMotion} className="left-2 sm:left-4" nodeOffset={32} />

          <ol className="space-y-5">
            {experiences.map((exp, i) => (
              <TimelineItem
                key={`${exp.role}-${exp.period}`}
                exp={exp}
                index={i}
                expanded={open.has(i)}
                onToggle={() => toggle(i)}
                reduceMotion={reduceMotion}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
