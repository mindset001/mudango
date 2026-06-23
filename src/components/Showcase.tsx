"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Play, Pause, Volume2, Network, Code2, ShieldCheck, GraduationCap } from "lucide-react";
import Reveal from "./Reveal";

const waveform = Array.from({ length: 28 }, (_, i) => 20 + ((i * 37) % 60));

const highlights = [
  {
    title: "Network Infrastructure",
    detail: "Resilient multi-carrier network builds for enterprise clients.",
    icon: Network,
  },
  {
    title: "Custom Software",
    detail: "Bespoke applications and databases built around your workflow.",
    icon: Code2,
  },
  {
    title: "Virtual Network Security",
    detail: "Managed security services protecting business-critical data.",
    icon: ShieldCheck,
  },
  {
    title: "ICT Training",
    detail: "Capacity-building programs for public and private sector teams.",
    icon: GraduationCap,
  },
];

export default function Showcase() {
  const [playing, setPlaying] = useState(false);

  return (
    <section id="showcase" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Showcase
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            See Mudango In Motion
          </h2>
          <p className="text-slate-400">
            An interactive look at how our network operations and delivery
            teams keep clients running.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
          <Reveal direction="left">
            <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c1530] to-[#070b18] shadow-2xl">
              <div className="relative flex aspect-video items-center justify-center overflow-hidden bg-[#080d1f]">
                <div className="absolute inset-0 bg-grid opacity-30" />
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-sky-600/20 via-transparent to-indigo-600/20"
                  animate={{ opacity: playing ? [0.4, 0.8, 0.4] : 0.3 }}
                  transition={{ duration: 2, repeat: playing ? Infinity : 0 }}
                />

                <button
                  onClick={() => setPlaying((p) => !p)}
                  aria-label={playing ? "Pause showcase" : "Play showcase"}
                  className="group relative z-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur transition-transform hover:scale-110"
                >
                  <span className="absolute inset-0 rounded-full bg-sky-400/30 animate-pulse-glow" />
                  <AnimatePresence mode="wait" initial={false}>
                    {playing ? (
                      <motion.span
                        key="pause"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Pause className="h-7 w-7 text-white" />
                      </motion.span>
                    ) : (
                      <motion.span
                        key="play"
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.5, opacity: 0 }}
                      >
                        <Play className="h-7 w-7 text-white" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </button>

                <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end gap-0.5">
                  {waveform.map((h, i) => (
                    <motion.span
                      key={i}
                      className="flex-1 rounded-full bg-sky-400/70"
                      style={{ height: 4 }}
                      animate={{
                        height: playing ? [4, h * 0.5, 4] : 4,
                      }}
                      transition={{
                        duration: 1 + (i % 5) * 0.15,
                        repeat: playing ? Infinity : 0,
                        delay: i * 0.03,
                      }}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-center justify-between px-5 py-4">
                <div>
                  <p className="text-sm font-semibold text-white">
                    Network Operations Walkthrough
                  </p>
                  <p className="text-xs text-slate-400">
                    {playing ? "Now playing" : "Click to preview"} &middot; 02:14
                  </p>
                </div>
                <Volume2 className="h-4 w-4 text-slate-400" />
              </div>

              <motion.div
                className="h-1 w-full bg-white/10"
                initial={false}
              >
                <motion.div
                  className="h-full bg-gradient-to-r from-sky-400 to-indigo-500"
                  initial={{ width: "0%" }}
                  animate={{ width: playing ? "100%" : "0%" }}
                  transition={{ duration: 12, ease: "linear" }}
                />
              </motion.div>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {highlights.map((item, i) => (
              <Reveal key={item.title} delay={i * 0.08} direction="right">
                <motion.div
                  whileHover={{ y: -6, rotate: i % 2 === 0 ? -1 : 1 }}
                  className="group relative h-full overflow-hidden rounded-xl border border-white/10 bg-white/[0.03] p-5"
                >
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: 8 }}
                    className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-500/15 text-indigo-300"
                  >
                    <item.icon className="h-5 w-5" />
                  </motion.div>
                  <h4 className="mb-1.5 text-sm font-semibold text-white">
                    {item.title}
                  </h4>
                  <p className="text-xs leading-relaxed text-slate-400">
                    {item.detail}
                  </p>
                  <div className="absolute inset-x-0 bottom-0 h-0.5 origin-left scale-x-0 bg-gradient-to-r from-sky-400 to-indigo-500 transition-transform duration-300 group-hover:scale-x-100" />
                </motion.div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
