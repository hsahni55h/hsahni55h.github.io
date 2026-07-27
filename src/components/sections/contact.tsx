"use client";

import { motion } from "framer-motion";
import { siteConfig } from "@/content";

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 px-6 bg-neutral-50 dark:bg-neutral-950/50"
    >
      <div className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-6"
        >
          Get In Touch
          <span className="text-blue-500">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-10"
        >
          I&apos;m open to new opportunities and collaborations. Whether you have
          a question, a project idea, or just want to connect — feel free to
          reach out.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href={`mailto:${siteConfig.email}`}
            className="px-8 py-3 rounded-full bg-blue-500 text-white font-medium hover:bg-blue-600 transition-colors"
          >
            Say Hello
          </a>
          <a
            href={siteConfig.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full border border-neutral-300 dark:border-neutral-700 text-foreground font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
          >
            LinkedIn
          </a>
        </motion.div>

        {/* Location & links as code style */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 inline-block text-left font-mono text-xs text-neutral-500 bg-white dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800 rounded-lg p-4"
        >
          <p>
            <span className="text-neutral-400">{"// "}</span>
            <span className="text-blue-500">contact</span>
            {".info"}
          </p>
          <p className="mt-1">
            {"  "}📍 {siteConfig.location}
          </p>
          <p>
            {"  "}📧{" "}
            <a
              href={`mailto:${siteConfig.email}`}
              className="text-blue-500 hover:underline"
            >
              {siteConfig.email}
            </a>
          </p>
          <p>
            {"  "}🔗{" "}
            <a
              href={siteConfig.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              LinkedIn
            </a>
            {" · "}
            <a
              href={siteConfig.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:underline"
            >
              GitHub
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
