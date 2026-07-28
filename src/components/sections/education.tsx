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
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12"
        >
          Education
          <span className="text-blue-500">.</span>
        </motion.h2>

        <div className="space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-blue-500/50 transition-all duration-300 bg-white dark:bg-neutral-900 shadow-sm hover:shadow-md dark:shadow-none"
            >
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                <div>
                  <h3 className="text-lg font-bold text-neutral-900 dark:text-neutral-100">
                    {edu.degree} — {edu.field}
                  </h3>
                  <p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1 font-medium">
                    {edu.institution}
                  </p>
                </div>
                <div className="text-right">
                  <span className="inline-block text-xs font-mono text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
                    {edu.period}
                  </span>
                  <p className="text-xs text-neutral-500 dark:text-neutral-500 mt-1">
                    {edu.location}
                  </p>
                </div>
              </div>

              {edu.courses && (
                <div className="mt-4 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                  <p className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-3">
                    Key Coursework
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {edu.courses.map((course) => (
                      <span
                        key={course}
                        className="text-xs px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-400 font-medium"
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
