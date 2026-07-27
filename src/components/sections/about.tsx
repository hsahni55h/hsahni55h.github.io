"use client";

import { motion } from "framer-motion";
import { about, siteConfig } from "@/content";

export function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12"
        >
          About Me
          <span className="text-blue-500">.</span>
        </motion.h2>

        <div className="grid md:grid-cols-[300px_1fr] gap-12 items-start">
          {/* Profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative group mx-auto md:mx-0"
          >
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-2xl overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 group-hover:border-blue-500 transition-colors duration-300">
              <img
                src={about.image}
                alt={siteConfig.name}
                className="w-full h-full object-cover"
              />
            </div>
            {/* Decorative border offset */}
            <div className="absolute -inset-2 rounded-2xl border border-blue-500/20 -z-10" />
          </motion.div>

          {/* Bio text */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-4"
          >
            {about.bio.map((paragraph, i) => (
              <p
                key={i}
                className="text-neutral-600 dark:text-neutral-400 leading-relaxed"
              >
                {paragraph}
              </p>
            ))}

            <div className="pt-4">
              <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500">
                <span className="text-blue-500">location</span> ={" "}
                <span className="text-green-600 dark:text-green-400">
                  &quot;{siteConfig.location}&quot;
                </span>
              </p>
              <p className="text-sm font-mono text-neutral-500 dark:text-neutral-500">
                <span className="text-blue-500">email</span> ={" "}
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="text-green-600 dark:text-green-400 hover:underline"
                >
                  &quot;{siteConfig.email}&quot;
                </a>
              </p>
            </div>

            {/* CV / Resume download */}
            <div className="pt-6 flex flex-wrap gap-3">
              <a
                href="/Himanshu_CV.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition-colors"
              >
                📄 Download CV
              </a>
              <a
                href="/Himanshu_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-neutral-300 dark:border-neutral-700 text-foreground text-sm font-medium hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                📄 Download Resume
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
