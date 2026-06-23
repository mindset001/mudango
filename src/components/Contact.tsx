"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "@/lib/content";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section id="contact" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Get In Touch
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Let&apos;s Build Something Reliable
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-5">
          <Reveal direction="left" className="lg:col-span-2">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-white/10 bg-gradient-to-br from-[#101b3d] to-[#070b18] p-8">
              <div>
                <h3 className="mb-6 text-lg font-semibold text-white">
                  Contact Information
                </h3>
                <div className="space-y-5">
                  <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
                    <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <span className="text-sm text-slate-300">
                      {company.contact.address}
                    </span>
                  </motion.div>
                  <motion.div whileHover={{ x: 4 }} className="flex items-start gap-3">
                    <Mail className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                    <div className="text-sm text-slate-300">
                      <a href={`mailto:${company.contact.email}`} className="hover:text-sky-400">
                        {company.contact.email}
                      </a>
                      <br />
                      <a href={`mailto:${company.contact.altEmail}`} className="hover:text-sky-400">
                        {company.contact.altEmail}
                      </a>
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="mt-10 overflow-hidden rounded-xl border border-white/10">
                <div className="relative flex h-40 items-center justify-center bg-[#080d1f] bg-grid">
                  <motion.div
                    animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2.5, repeat: Infinity }}
                  >
                    <MapPin className="h-8 w-8 text-sky-400" />
                  </motion.div>
                  <span className="absolute bottom-3 left-1/2 -translate-x-1/2 text-xs text-slate-500">
                    Wuse Zone 6, Abuja
                  </span>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal direction="right" delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={handleSubmit}
              className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <AnimatePresence>
                {submitted && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="absolute inset-0 z-20 flex flex-col items-center justify-center gap-3 bg-[#070b18]/95 backdrop-blur"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 200, damping: 12 }}
                    >
                      <CheckCircle2 className="h-12 w-12 text-emerald-400" />
                    </motion.div>
                    <p className="text-sm font-medium text-white">
                      Message received — we&apos;ll be in touch shortly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setSubmitted(false)}
                      className="text-xs text-sky-400 hover:underline"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <FloatingField label="Full Name" type="text" required />
                <FloatingField label="Email Address" type="email" required />
              </div>
              <div className="mt-5">
                <FloatingField label="Subject" type="text" />
              </div>
              <div className="mt-5">
                <FloatingTextarea label="Message" required />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-sky-500/30"
              >
                Send Message
                <Send className="h-4 w-4" />
              </motion.button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function FloatingField({
  label,
  type,
  required,
}: {
  label: string;
  type: string;
  required?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}</span>
      <input
        type={type}
        required={required}
        className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-sky-400/60 focus:bg-white/10"
      />
    </label>
  );
}

function FloatingTextarea({ label, required }: { label: string; required?: boolean }) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-xs font-medium text-slate-400">{label}</span>
      <textarea
        required={required}
        rows={4}
        className="w-full resize-none rounded-lg border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white outline-none transition-colors focus:border-sky-400/60 focus:bg-white/10"
      />
    </label>
  );
}
