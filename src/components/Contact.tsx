"use client";

import { motion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import Reveal from "./Reveal";
import ChatWidget from "./ChatWidget";
import { company } from "@/lib/content";

export default function Contact() {
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
            <ChatWidget />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
