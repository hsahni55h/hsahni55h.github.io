// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { motion } from "framer-motion";
import { experiences } from "@/content";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950/50">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-16"
        >
          Experience
          <span className="text-blue-500">.</span>
        </motion.h2>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-neutral-200 dark:bg-neutral-800" />

          <div className="space-y-12">
            {experiences.map((exp, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative pl-12 md:pl-16"
              >
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-1.5 w-3 h-3 rounded-full bg-blue-500 ring-4 ring-white dark:ring-neutral-950" />

                {/* Card */}
                <div className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-blue-500/50 transition-colors duration-300 bg-white dark:bg-neutral-900">
                  {/* Period badge */}
                  <span className="inline-block text-xs font-mono text-blue-500 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full mb-3">
                    {exp.period}
                  </span>

                  <h3 className="text-lg font-bold text-foreground">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
                    {exp.company} · {exp.location}
                  </p>

                  <ul className="mt-4 space-y-2">
                    {exp.bullets.map((bullet, j) => (
                      <li
                        key={j}
                        className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-2"
                      >
                        <span className="text-blue-500 mt-1 shrink-0">▹</span>
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}