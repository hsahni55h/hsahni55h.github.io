"use client";

import { motion } from "framer-motion";
import { projects } from "@/content";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-16"
        >
          Projects
          <span className="text-blue-500">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project, i) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="group rounded-xl border border-neutral-200 dark:border-neutral-800 p-6 hover:border-blue-500/50 transition-all duration-300 bg-white dark:bg-neutral-900 hover:shadow-lg hover:shadow-blue-500/5 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-start justify-between gap-4 mb-3">
                <div className="text-blue-500 text-2xl">📂</div>
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-neutral-400 hover:text-blue-500 transition-colors"
                    aria-label={`GitHub repo for ${project.title}`}
                  >
                    <svg
                      className="w-5 h-5"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </a>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-foreground group-hover:text-blue-500 transition-colors leading-tight">
                {project.title}
              </h3>

              {/* Period */}
              <p className="text-xs font-mono text-neutral-500 dark:text-neutral-500 mt-1">
                {project.period}
              </p>

              {/* Bullets */}
              <ul className="mt-4 space-y-2 flex-1">
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

              {/* Video embeds */}
              {project.videos && project.videos.length > 0 && (
                <div className={`mt-4 grid gap-3 ${project.videos.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
                  {project.videos.map((video, vi) => (
                    <video
                      key={vi}
                      src={video}
                      controls
                      muted
                      playsInline
                      preload="none"
                      className="w-full rounded-lg border border-neutral-200 dark:border-neutral-800"
                    >
                      <track kind="captions" />
                    </video>
                  ))}
                </div>
              )}

              {/* Tech stack tags */}
              <div className="mt-4 flex flex-wrap gap-2 pt-4 border-t border-neutral-100 dark:border-neutral-800">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="text-xs font-mono px-2.5 py-1 rounded-full bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
