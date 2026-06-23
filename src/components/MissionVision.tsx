"use client";

import { motion } from "framer-motion";
import { Target, Eye, CheckCircle2 } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "@/lib/content";

export default function MissionVision() {
  return (
    <section id="mission" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Our Purpose
          </span>
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Mission &amp; Vision
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
          <Reveal direction="left">
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#101b3d] to-[#070b18] p-8"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-sky-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400"
              >
                <Target className="h-6 w-6" />
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold text-white">Our Mission</h3>
              <ul className="space-y-3">
                {company.mission.map((line, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm leading-relaxed text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-sky-400" />
                    {line}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Reveal>

          <Reveal direction="right" delay={0.1}>
            <motion.div
              whileHover={{ y: -6 }}
              className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#101b3d] to-[#070b18] p-8"
            >
              <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-indigo-500/10 blur-2xl transition-all duration-500 group-hover:scale-150" />
              <motion.div
                whileHover={{ rotate: 12, scale: 1.1 }}
                className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/15 text-indigo-400"
              >
                <Eye className="h-6 w-6" />
              </motion.div>
              <h3 className="mb-4 text-xl font-semibold text-white">Our Vision</h3>
              <p className="text-sm leading-relaxed text-slate-300">{company.vision}</p>
            </motion.div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
