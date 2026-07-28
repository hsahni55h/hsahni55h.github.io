// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { motion } from "framer-motion";
import { experiences } from "@/content";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-16 tracking-[2px] uppercase flex items-center gap-5"
        >
          Experience
          <span className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </motion.h2>

        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-xl border border-cyber-border p-6 hover:border-cyber-cyan/40 transition-all duration-300 bg-[#050f1f]/80 hover:translate-y-[-4px]"
            >
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {exp.role}
                  </h3>
                  <p className="text-sm text-cyber-cyan mt-0.5 font-medium tracking-[1px]">
                    {exp.company} · {exp.location}
                  </p>
                </div>
                <span className="inline-block text-xs font-mono text-cyber-green bg-transparent border border-cyber-green/30 px-3 py-1 rounded-full whitespace-nowrap tracking-[3px]">
                  {exp.period}
                </span>
              </div>

              <ul className="space-y-2">
                {exp.bullets.map((bullet, j) => (
                  <li
                    key={j}
                    className="text-sm text-[#cce8ff]/65 leading-relaxed flex gap-2"
                  >
                    <span className="text-cyber-cyan mt-0.5 shrink-0">▸</span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}