// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { skills, type SkillCategory } from "@/content";

const iconPaths: Record<SkillCategory["id"], ReactNode> = {
  data: (
    <>
      <ellipse cx="12" cy="5" rx="8" ry="3" />
      <path d="M4 5v6c0 1.66 3.58 3 8 3s8-1.34 8-3V5" />
      <path d="M4 11v6c0 1.66 3.58 3 8 3s8-1.34 8-3v-6" />
    </>
  ),
  genai: (
    <>
      <path d="M12 3l1.8 4.7L18.5 9.5l-4.7 1.8L12 16l-1.8-4.7L5.5 9.5l4.7-1.8z" />
      <path d="M19 15l.8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8z" />
    </>
  ),
  ml: (
    <>
      <circle cx="5" cy="6" r="2" />
      <circle cx="5" cy="18" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="19" cy="18" r="2" />
      <path d="M7 7l3.3 3.6M7 17l3.3-3.6M13.7 10.6L17 7M13.7 13.4L17 17" />
    </>
  ),
  devops: (
    <>
      <path d="M21 12a9 9 0 0 1-15.5 6.2M3 12A9 9 0 0 1 18.5 5.8" />
      <path d="M18.5 2v3.8h-3.8M5.5 22v-3.8h3.8" />
    </>
  ),
  robotics: (
    <>
      <rect x="5" y="8" width="14" height="11" rx="2" />
      <path d="M12 4v4M9 13h.01M15 13h.01M9.5 16h5M2 13v2M22 13v2" />
      <circle cx="12" cy="3" r="1" />
    </>
  ),
  languages: <path d="M8 7l-5 5 5 5M16 7l5 5-5 5M13.5 4l-3 16" />,
};

function CategoryIcon({ id }: { id: SkillCategory["id"] }) {
  return (
    <svg
      className="w-5 h-5"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      {iconPaths[id]}
    </svg>
  );
}

function CategoryCard({ category, index }: { category: SkillCategory; index: number }) {
  const reduceMotion = useReducedMotion() ?? false;
  return (
    <motion.li
      initial={reduceMotion ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.4, delay: reduceMotion ? 0 : (index % 2) * 0.08 }}
      className="h-full rounded-xl border border-cyber-border bg-[#060d1a]/80 p-5 sm:p-6"
    >
      <div className="flex items-center gap-4">
        <span className="shrink-0 flex items-center justify-center w-10 h-10 rounded-lg border border-cyber-cyan/30 bg-cyber-cyan/5 text-cyber-cyan">
          <CategoryIcon id={category.id} />
        </span>
        <h3 className="min-w-0 text-lg font-semibold text-heading leading-snug">{category.title}</h3>
      </div>
      <p className="mt-3 text-sm text-cyber-muted leading-relaxed">{category.blurb}</p>

      <div className="mt-5 space-y-4">
        {category.groups.map((group) => (
          <div key={group.label ?? category.id}>
            {group.label && (
              <h4 className="mb-2 text-[13px] font-semibold tracking-[0.5px] text-heading">
                {group.label}
              </h4>
            )}
            <ul className="flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="chip px-3 py-1.5 rounded-md font-mono text-xs tracking-[0.5px]"
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </motion.li>
  );
}

export function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-heading mb-12 tracking-[2px] uppercase flex items-center gap-5"
        >
          Skills
          <span className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </motion.h2>

        <ul className="grid gap-5 lg:grid-cols-2">
          {skills.map((category, i) => (
            <CategoryCard key={category.id} category={category} index={i} />
          ))}
        </ul>
      </div>
    </section>
  );
}
