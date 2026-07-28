// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/content";

export function Hero() {
  const [taglineIndex, setTaglineIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = siteConfig.taglines[taglineIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && displayText === current) {
      // Pause before deleting
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      // Move to next tagline — use setTimeout to avoid synchronous setState in effect
      timeout = setTimeout(() => {
        setIsDeleting(false);
        setTaglineIndex((prev) => (prev + 1) % siteConfig.taglines.length);
      }, 0);
    } else {
      // Type or delete one character
      timeout = setTimeout(
        () => {
          setDisplayText(
            isDeleting
              ? current.slice(0, displayText.length - 1)
              : current.slice(0, displayText.length + 1)
          );
        },
        isDeleting ? 40 : 80
      );
    }

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, taglineIndex]);

  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] md:min-h-screen text-center px-6 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10"
      >
        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white"
        >
          {siteConfig.name}
        </motion.h1>

        {/* Typing tagline */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
          className="mt-4 h-8 md:h-10"
        >
          <span className="text-lg md:text-2xl font-mono text-cyber-muted tracking-[3px]">
            {displayText}
            <span className="cursor-blink" />
          </span>
        </motion.div>


      </motion.div>
    </section>
  );
}