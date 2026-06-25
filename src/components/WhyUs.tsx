"use client";

import { motion } from "framer-motion";
import { CheckCircle2, Headset } from "lucide-react";
import Reveal from "./Reveal";
import { whyUs, certifications } from "@/lib/content";

export default function WhyUs() {
  return (
    <section id="why-us" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-start">
          <Reveal direction="left">
            <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
              Why Our Solutions Work
            </span>
            <h2 className="mb-8 text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Built On Trust, Backed By Expertise
            </h2>

            <ul className="space-y-4">
              {whyUs.map((item, i) => (
                <Reveal key={item} delay={i * 0.06}>
                  <motion.li
                    whileHover={{ x: 6 }}
                    className="flex items-start gap-3 text-sm text-slate-300"
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-sky-400" />
                    {item}
                  </motion.li>
                </Reveal>
              ))}
            </ul>

            <Reveal delay={0.4}>
              <div className="mt-8 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <Headset className="h-5 w-5 flex-shrink-0 text-emerald-400" />
                <p className="text-sm text-slate-300">
                  24/7 Network Operations Center with Online Remote Access
                  support — we&apos;re never far from your infrastructure.
                </p>
              </div>
            </Reveal>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-[#101b3d] to-[#070b18] p-8">
              <h3 className="mb-2 text-sm font-semibold uppercase tracking-wide text-slate-400">
                Certified Expertise
              </h3>
              <p className="mb-6 text-sm text-slate-400">
                A deep bench of certified engineers across the technologies
                that run your business.
              </p>

              <div className="relative overflow-hidden rounded-xl border border-white/5 bg-[#080d1f] py-6">
                <div className="absolute inset-y-0 left-0 z-10 w-12 bg-gradient-to-r from-[#080d1f] to-transparent" />
                <div className="absolute inset-y-0 right-0 z-10 w-12 bg-gradient-to-l from-[#080d1f] to-transparent" />
                <div className="flex w-max animate-marquee gap-3">
                  {[...certifications, ...certifications].map((cert, i) => (
                    <span
                      key={`${cert}-${i}`}
                      className="flex-shrink-0 rounded-full border border-sky-400/20 bg-sky-400/5 px-4 py-2 text-xs font-medium text-sky-300"
                    >
                      {cert}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
