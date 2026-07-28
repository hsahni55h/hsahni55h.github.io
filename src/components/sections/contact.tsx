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
          className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-[2px] uppercase flex items-center gap-5"
        >
          Contact
          <span className="flex-1 h-px bg-gradient-to-r from-cyber-border to-transparent" />
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-[#cce8ff]/65 leading-relaxed mb-12 max-w-2xl"
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
                  className="block font-mono text-[0.6rem] text-cyber-muted tracking-[3px] uppercase mb-2"
                >
                  {"// Name"}
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  placeholder="Your name"
                  className="w-full px-4 py-3 border border-cyber-border bg-[#07142e]/50 text-[#cce8ff] placeholder:text-cyber-muted/50 text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-sans"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block font-mono text-[0.6rem] text-cyber-muted tracking-[3px] uppercase mb-2"
                >
                  {"// Email"}
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 border border-cyber-border bg-[#07142e]/50 text-[#cce8ff] placeholder:text-cyber-muted/50 text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-sans"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block font-mono text-[0.6rem] text-cyber-muted tracking-[3px] uppercase mb-2"
              >
                {"// Subject"}
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                required
                placeholder="What is this about?"
                className="w-full px-4 py-3 border border-cyber-border bg-[#07142e]/50 text-[#cce8ff] placeholder:text-cyber-muted/50 text-sm focus:outline-none focus:border-cyber-cyan transition-colors font-sans"
              />
            </div>

            <div>
              <label
                htmlFor="message"
                className="block font-mono text-[0.6rem] text-cyber-muted tracking-[3px] uppercase mb-2"
              >
                {"// Message"}
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                placeholder="Tell me about your project, opportunity, or just say hi..."
                className="w-full px-4 py-3 border border-cyber-border bg-[#07142e]/50 text-[#cce8ff] placeholder:text-cyber-muted/50 text-sm focus:outline-none focus:border-cyber-cyan transition-colors resize-none font-sans"
              />
            </div>

            <button
              type="submit"
              disabled={formStatus === "submitting"}
              className="px-10 py-3.5 font-bold text-sm tracking-[2px] uppercase border-none bg-gradient-to-r from-cyber-cyan to-cyber-blue text-[#020916] hover:opacity-90 hover:-translate-y-0.5 disabled:opacity-60 disabled:cursor-not-allowed transition-all"
            >
              {formStatus === "submitting" ? "Transmitting..." : "Transmit Message →"}
            </button>

            {formStatus === "success" && (
              <p className="text-sm text-cyber-green font-mono tracking-[1px]">
                Message transmitted! I&apos;ll get back to you soon.
              </p>
            )}
            {formStatus === "error" && (
              <p className="text-sm text-red-400 font-mono tracking-[1px]">
                Transmission failed. Please try again or email me directly.
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
            <div className="border border-cyber-border bg-[#050f1f]/80 p-5">
              <h3 className="text-xs font-mono text-cyber-green uppercase tracking-[3px] mb-3">
                {"// Location"}
              </h3>
              <p className="text-sm text-[#cce8ff] font-medium">
                {siteConfig.location}
              </p>
              <p className="text-xs text-cyber-muted mt-1">
                Open to remote &amp; hybrid opportunities
              </p>
            </div>

            {/* Email */}
            <div className="border border-cyber-border bg-[#050f1f]/80 p-5">
              <h3 className="text-xs font-mono text-cyber-green uppercase tracking-[3px] mb-3">
                {"// Email"}
              </h3>
              <a
                href={`mailto:${siteConfig.email}`}
                className="text-sm text-[#cce8ff] font-medium hover:text-cyber-cyan transition-colors break-all font-mono tracking-[1px]"
              >
                {siteConfig.email}
              </a>
            </div>

            {/* Socials */}
            <div className="border border-cyber-border bg-[#050f1f]/80 p-5">
              <h3 className="text-xs font-mono text-cyber-green uppercase tracking-[3px] mb-3">
                {"// Links"}
              </h3>
              <div className="space-y-3">
                <a
                  href={siteConfig.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-cyber-muted font-mono tracking-[1px] hover:text-cyber-cyan transition-colors"
                >
                  <span className="w-9 h-9 border border-cyber-border flex items-center justify-center text-base hover:border-cyber-cyan transition-colors">in</span>
                  linkedin.com/in/himanshu-sahni07
                </a>
                <a
                  href={siteConfig.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-cyber-muted font-mono tracking-[1px] hover:text-cyber-cyan transition-colors"
                >
                  <span className="w-9 h-9 border border-cyber-border flex items-center justify-center text-base hover:border-cyber-cyan transition-colors">⌥</span>
                  github.com/hsahni55h
                </a>
              </div>
            </div>

            {/* Availability */}
            <div className="border border-cyber-green/30 bg-cyber-green/5 p-5">
              <div className="flex items-center gap-2 mb-1">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-green animate-pulse-dot" />
                <h3 className="text-xs font-mono text-cyber-green uppercase tracking-[2px]">
                  Available for hire
                </h3>
              </div>
              <p className="text-sm text-cyber-green/80 font-medium">
                Open to freelance, contract, part-time &amp; full-time roles
              </p>
            </div>
          </motion.aside>
        </div>
      </div>
    </section>
  );
}