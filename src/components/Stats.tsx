"use client";

import Reveal from "./Reveal";
import AnimatedCounter from "./AnimatedCounter";
import { stats } from "@/lib/content";

export default function Stats() {
  return (
    <section className="relative px-6 py-20">
      <div className="mx-auto max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-br from-[#101b3d] to-[#070b18] px-8 py-14">
        <div className="grid grid-cols-2 gap-10 sm:grid-cols-4">
          {stats.map((stat, i) => (
            <Reveal key={stat.label} delay={i * 0.1} className="text-center">
              <div className="mb-2 text-3xl font-bold text-white sm:text-4xl">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-xs text-slate-400 sm:text-sm">{stat.label}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
