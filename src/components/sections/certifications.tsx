// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { motion } from "framer-motion";
import { certifications } from "@/content";

export function Certifications() {
  return (
    <section id="certifications" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-12 tracking-[2px] uppercase flex items-center gap-5"
        >
          Certifications
          <span className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </motion.h2>

        <div className="grid sm:grid-cols-2 gap-4">
          {certifications.map((cert, i) => (
            <motion.a
              key={i}
              href={cert.url}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group flex items-start gap-4 p-5 rounded-xl border border-cyber-border bg-[#050f1f]/80 hover:border-cyber-cyan/40 transition-all duration-300 hover:translate-y-[-4px]"
            >
              <div className="text-2xl shrink-0 mt-0.5">🏆</div>
              <div>
                <h3 className="font-semibold text-white group-hover:text-cyber-cyan transition-colors text-sm leading-snug">
                  {cert.name}
                </h3>
                <p className="text-xs text-cyber-muted mt-1 font-mono tracking-[1px]">
                  {cert.issuer}
                </p>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}