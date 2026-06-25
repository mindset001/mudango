"use client";

import { motion } from "framer-motion";
import {
  BadgeCheck,
  Lightbulb,
  Sparkles,
  Anchor,
  Star,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { coreValues } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  BadgeCheck,
  Lightbulb,
  Sparkles,
  Anchor,
  Star,
};

export default function Values() {
  return (
    <section className="relative px-6 py-16">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-12 max-w-xl text-center">
          <span className="mb-3 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            What Drives Us
          </span>
          <h2 className="text-2xl font-bold tracking-tight text-white sm:text-3xl">
            Our Core Values
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {coreValues.map((value, i) => {
            const Icon = iconMap[value.icon];
            return (
              <Reveal key={value.title} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -6, scale: 1.03 }}
                  className="group flex h-full flex-col items-center rounded-2xl border border-white/10 bg-white/[0.03] p-5 text-center transition-colors hover:border-sky-400/40"
                >
                  <motion.div
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                    className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-sky-500/20 to-indigo-500/20 text-sky-400"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </motion.div>
                  <h3 className="mb-1 text-sm font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {value.description}
                  </p>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
