// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import Image from "next/image";
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
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-12"
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
            <div className="w-60 h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 group-hover:border-blue-500 transition-colors duration-300">
              <Image
                src={about.image}
                alt={siteConfig.name}
                width={288}
                height={288}
                className="w-full h-full object-cover object-top"
                priority
              />
            </div>
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}