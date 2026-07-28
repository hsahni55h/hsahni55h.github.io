// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { motion } from "framer-motion";
import { education } from "@/content";

export function Education() {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-[2px] uppercase flex items-center gap-5"
        >
          Education
          <span className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-cyber-border p-6 hover:border-cyber-cyan/40 transition-all duration-300 bg-[#050f1f]/80 hover:translate-y-[-4px]"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-white">
                    {edu.degree} — {edu.field}
                  </h3>
                  <p className="text-sm text-cyber-cyan mt-1 font-medium tracking-[1px]">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-mono text-cyber-green border border-cyber-green/30 px-3 py-1 rounded-full tracking-[3px]">
                    {edu.period}
                  </span>
                  <p className="text-xs text-cyber-muted mt-1">
                    {edu.location}
                  </p>
                </div>
              </div>

              {edu.courses && (
                <div className="mt-4 pt-4 border-t border-cyber-border">
                  <p className="text-xs font-mono text-cyber-green uppercase tracking-[3px] mb-3">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-full border border-cyber-border text-[#cce8ff]/70 font-mono tracking-[1px] hover:border-cyber-green hover:text-cyber-green transition-colors"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
