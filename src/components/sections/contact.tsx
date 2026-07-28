// © 2024-2026 Himanshu Sahni. Licensed under CC BY-NC 4.0.
// https://github.com/hsahni55h/hsahni55h.github.io — Attribution required.

"use client";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { siteConfig } from "@/content";

type FormStatus = "idle" | "submitting" | "success" | "error";

export function Contact() {
  const [formStatus, setFormStatus] = useState<FormStatus>("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("submitting");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch(`https://formspree.io/f/${siteConfig.formspreeId}`, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });

      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-neutral-900 dark:text-neutral-100 mb-6"
        >
          Contact
          <span className="text-blue-500">.</span>
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-neutral-600 dark:text-neutral-400 leading-relaxed mb-12 max-w-2xl"
        >
          I&apos;m open to new opportunities, freelance projects, and
          collaborations. Fill out the form and I&apos;ll get back to you as
          soon as I can.
        </motion.p>

        <div className="grid md:grid-cols-[1fr_320px] gap-12">
          {/* ── Form ──────────────────────────────────────── */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1.5"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1.5"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1.5"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What is this about?"
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-neutral-900 dark:text-neutral-100 mb-1.5"
              >
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, opportunity, or just say hi..."
                className="w-full px-4 py-2.5 rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-600 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40 focus:border-blue-500 transition-colors resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="px-8 py-3 rounded-lg bg-blue-500 text-white font-medium hover:bg-blue-600 disabled:opacity-60 disabled:cursor-not-allowed transition-colors text-sm"
            >
              {formStatus === "submitting" ? "Sending..." : "Send Message"}
            </button>

            {formStatus === "success" && (
              <p className="text-sm text-green-500 font-medium">
                Message sent! I&apos;ll get back to you soon.
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-sm text-red-500 font-medium">
                Something went wrong. Please try again or email me directly.
              </p>
            )}
          </motion.form>

          {/* ── Contact details sidebar ────────────────────── */}
          <motion.aside
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="space-y-6"
          >
            {/* Location */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
              <h3 className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-3">
                Location
              </h3>
              <p className="text-sm text-neutral-900 dark:text-neutral-100 font-medium">
                {siteConfig.location}
              </p>
              <p className="text-xs text-neutral-500 mt-1">
                Open to remote &amp; hybrid opportunities
              </p>
            </div>

            {/* Email */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
              <h3 className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-3">
                Email
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-neutral-900 dark:text-neutral-100 font-medium hover:text-blue-500 transition-colors break-all"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Socials */}
            <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-5">
              <h3 className="text-xs font-mono text-blue-500 uppercase tracking-wider mb-3">
                Find me on
              </h3>
              <div className="space-y-2">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-100 font-medium hover:text-blue-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-neutral-900 dark:text-neutral-100 font-medium hover:text-blue-500 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                  </svg>
                  GitHub
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="rounded-xl border border-green-200 dark:border-green-900/50 bg-green-50 dark:bg-green-950/20 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <h3 className="text-xs font-mono text-green-600 dark:text-green-400 uppercase tracking-wider">
                  Availability
                </h3>
              </div>
              <p className="text-sm text-green-700 dark:text-green-300 font-medium">
                Open to freelance, contract, part-time &amp; full-time roles
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}