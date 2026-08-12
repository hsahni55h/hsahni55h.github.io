// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { motion } from "framer-motion";
import { openSourceProjects } from "@/content/opensource";

function StatusBadge({ status }: { status: "active" | "beta" | "coming-soon" }) {
  const config = {
    active: { label: "ACTIVE", color: "text-cyber-green border-cyber-green/40 bg-cyber-green/10" },
    beta: { label: "BETA", color: "text-cyber-cyan border-cyber-cyan/40 bg-cyber-cyan/10" },
    "coming-soon": { label: "COMING SOON", color: "text-cyber-muted border-cyber-muted/40 bg-cyber-muted/10" },
  };
  const { label, color } = config[status];
  return (
    <span className={`text-[0.6rem] font-mono tracking-[2px] uppercase px-2 py-0.5 rounded border ${color}`}>
      {label}
    </span>
  );
}

export function OpenSource() {
  return (
    <section id="open-source" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-[2px] uppercase flex items-center gap-5"
        >
          Open Source
          <span className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#cce8ff]/65 leading-relaxed mb-12 max-w-2xl"
        >
          Reusable templates, toolkits, and starter repos — built for the community.
          Fork them, customize them, and ship faster.
        </motion.p>

        <div className="space-y-5">
          {openSourceProjects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className={`group relative rounded-xl border p-6 transition-all duration-300 ${
                project.status === "coming-soon"
                  ? "border-cyber-border/50 bg-[#050f1f]/40 opacity-60"
                  : "border-cyber-border bg-[#050f1f]/80 hover:border-cyber-cyan/40 hover:translate-y-[-4px]"
              }`}
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-3 mb-3">
                <h3 className="text-base font-bold text-white font-mono tracking-[1px]">
                  {project.title}
                </h3>
                <StatusBadge status={project.status} />
              </div>

              {/* Description */}
              <p className="text-sm text-[#cce8ff]/65 leading-relaxed mb-4">
                {project.description}
              </p>

              {/* Tech tags */}
              {project.tech.length > 0 && (
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-[0.65rem] font-mono text-cyber-cyan/80 bg-cyber-cyan/5 border border-cyber-cyan/20 px-2 py-0.5 rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}

              {/* Quick start */}
              {project.quickStart && (
                <div className="bg-[#020916] border border-cyber-border rounded px-3 py-2 mb-4">
                  <code className="text-xs font-mono text-cyber-green">
                    $ {project.quickStart}
                  </code>
                </div>
              )}

              {/* CTAs */}
              {project.status !== "coming-soon" && project.repo && (
                <div className="flex gap-3">
                  <a
                    href={project.repo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs font-mono tracking-[2px] uppercase text-cyber-cyan hover:text-white transition-colors"
                  >
                    View Repo →
                  </a>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
