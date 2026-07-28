// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/content";

// ── Icons ───────────────────────────────────────────────────
function GitHubIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  );
}

function VideoIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="5 3 19 12 5 21 5 3" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  );
}

function ExternalLinkIcon() {
  return (
    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
    </svg>
  );
}

// ── Project Detail Modal ────────────────────────────────────
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />

      {/* Modal content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25, ease: "easeOut" }}
        className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="sticky top-0 z-10 flex items-start justify-between gap-4 p-6 pb-4 bg-white dark:bg-neutral-900 border-b border-neutral-100 dark:border-neutral-800">
          <div className="flex-1 min-w-0">
            <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100 leading-tight">
              {project.title}
            </h3>
            <p className="text-xs font-mono text-blue-500 mt-1">
              {project.period}
            </p>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 transition-colors"
              >
                <GitHubIcon />
                Code
                <ExternalLinkIcon />
              </a>
            )}
            <button
              onClick={onClose}
              className="p-2 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              aria-label="Close"
            >
              <CloseIcon />
            </button>
          </div>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6">
          {/* Bullets */}
          <ul className="space-y-3">
            {project.bullets.map((bullet, j) => (
              <li
                key={j}
                className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed flex gap-2"
              >
                <span className="text-blue-500 mt-0.5 shrink-0">▹</span>
                <span>{bullet}</span>
              </li>
            ))}
          </ul>

          {/* Videos */}
          {project.videos && project.videos.length > 0 && (
            <div className="space-y-3">
              <p className="text-xs font-mono text-blue-500 uppercase tracking-wider">
                Demo
              </p>
              <div
                className={`grid gap-3 ${project.videos.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}
              >
                {project.videos.map((video, vi) => (
                  <video
                    key={vi}
                    src={video}
                    controls
                    muted
                    playsInline
                    preload="metadata"
                    className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
                  >
                    <track kind="captions" />
                  </video>
                ))}
              </div>
            </div>
          )}

          {/* Tech stack */}
          <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800">
            <p className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-3">
              Tech Stack
            </p>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Projects Section ────────────────────────────────────────
export function Projects() {
  const [selected, setSelected] = useState<Project | null>(null);

  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-16"
        >
          Projects
          <span className="text-blue-500">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              onClick={() => setSelected(project)}
              className="group cursor-pointer rounded-xl border border-neutral-200 dark:border-neutral-800 p-5 hover:border-blue-500/50 transition-all duration-300 bg-white dark:bg-neutral-900 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col"
            >
              {/* Top row: icons for available content */}
              <div className="flex items-center justify-between mb-3">
                <span className="inline-block text-xs font-mono text-blue-500 bg-blue-50 dark:bg-blue-950/50 px-3 py-1 rounded-full">
                  {project.period}
                </span>
                <div className="flex items-center gap-2 text-neutral-400">
                  {project.videos && project.videos.length > 0 && (
                    <span title="Has demo video">
                      <VideoIcon />
                    </span>
                  )}
                  {project.github && (
                    <span title="Has source code">
                      <GitHubIcon />
                    </span>
                  )}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base font-bold text-neutral-900 dark:text-neutral-100 group-hover:text-blue-500 transition-colors leading-snug flex-1">
                {project.title}
              </h3>

              {/* Preview: first bullet truncated */}
              <p className="mt-3 text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed line-clamp-2">
                {project.bullets[0]}
              </p>

              {/* Tech stack tags */}
              <div className="mt-4 flex flex-wrap gap-1.5 pt-3 border-t border-neutral-100 dark:border-neutral-800">
                {project.techStack.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500"
                  >
                    {tech}
                  </span>
                ))}
                {project.techStack.length > 4 && (
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-500 dark:text-neutral-500">
                    +{project.techStack.length - 4}
                  </span>
                )}
              </div>

              {/* Click hint */}
              <p className="mt-3 text-[11px] text-neutral-400 dark:text-neutral-600 font-mono group-hover:text-blue-500/60 transition-colors">
                Click to view details →
              </p>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selected && (
          <ProjectModal
            project={selected}
            onClose={() => setSelected(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}