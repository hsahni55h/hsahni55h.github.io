// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { motion } from "framer-motion";
import { skills } from "@/content";

function SkillGroup({ title, items }: { title: string; items: string[] }) {
  return (
    <div>
      <h3 className="text-sm font-mono text-blue-500 uppercase tracking-wider mb-4">
        {title}
      </h3>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, i) => (
          <motion.span
            key={skill}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.05, y: -2 }}
            className="px-4 py-2 rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 text-sm text-neutral-800 dark:text-neutral-300 font-medium hover:border-blue-500/50 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-950/20 transition-colors cursor-default shadow-sm"
          >
            {skill}
          </motion.span>
        ))}
      </div>
    </div>
  );
}

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 px-6"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          Skills
          <span className="text-blue-500">.</span>
        </motion.h2>

        <div className="space-y-10">
          <SkillGroup title="Languages" items={skills.languages} />
          <SkillGroup title="ML & AI" items={skills.mlAndAi} />
          <SkillGroup title="Data Engineering & Cloud" items={skills.dataEngineering} />
          <SkillGroup title="DevOps & Tools" items={skills.devOpsAndTools} />
          <SkillGroup title="Robotics" items={skills.robotics} />
          <SkillGroup title="Soft Skills" items={skills.soft} />
        </div>
      </div>
    </section>
  );
}