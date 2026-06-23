"use client";

import { motion } from "framer-motion";
import { Globe2, Users, Building2 } from "lucide-react";
import Reveal from "./Reveal";
import { company } from "@/lib/content";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28">
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 lg:grid-cols-2">
        <Reveal direction="left">
          <div className="relative mx-auto aspect-square w-full max-w-md">
            <motion.div
              className="absolute inset-6 rounded-[2rem] border border-white/10 bg-gradient-to-br from-[#101b3d] to-[#070b18]"
              animate={{ rotate: [0, 4, 0] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />
            <div className="absolute inset-6 flex items-center justify-center rounded-[2rem] border border-white/10 bg-grid">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
                className="flex h-40 w-40 items-center justify-center rounded-full border border-dashed border-sky-400/30"
              >
                <div className="flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-600 text-2xl font-bold text-white shadow-xl shadow-sky-500/30">
                  MC
                </div>
              </motion.div>
            </div>

            <motion.div
              className="absolute -left-4 top-4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c1530]/90 px-3 py-2 shadow-xl backdrop-blur"
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              whileHover={{ scale: 1.08 }}
            >
              <Building2 className="h-4 w-4 text-sky-400" />
              <span className="text-xs font-medium text-slate-200">
                Est. {company.founded.split(" ").slice(-1)}
              </span>
            </motion.div>

            <motion.div
              className="absolute -right-2 top-1/3 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c1530]/90 px-3 py-2 shadow-xl backdrop-blur"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
              whileHover={{ scale: 1.08 }}
            >
              <Globe2 className="h-4 w-4 text-indigo-400" />
              <span className="text-xs font-medium text-slate-200">Global Reach</span>
            </motion.div>

            <motion.div
              className="absolute -bottom-2 left-1/4 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c1530]/90 px-3 py-2 shadow-xl backdrop-blur"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
              whileHover={{ scale: 1.08 }}
            >
              <Users className="h-4 w-4 text-emerald-400" />
              <span className="text-xs font-medium text-slate-200">Trusted Teams</span>
            </motion.div>
          </div>
        </Reveal>

        <Reveal direction="right" delay={0.1}>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            About Us
          </span>
          <h2 className="mb-6 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Two Decades of Engineering{" "}
            <span className="text-gradient">Reliable Technology</span>
          </h2>
          <p className="text-base leading-relaxed text-slate-300">
            {company.about}
          </p>

          <div className="mt-8 flex flex-wrap gap-x-8 gap-y-4">
            {[`${company.rc}`, "Abuja, Nigeria", "IT Consulting & Networks"].map(
              (item) => (
                <div key={item} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-sky-400" />
                  <span className="text-sm text-slate-400">{item}</span>
                </div>
              )
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
