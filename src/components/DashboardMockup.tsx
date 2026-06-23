"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Wifi, ShieldCheck, Activity, Server } from "lucide-react";

const bars = [38, 62, 45, 80, 55, 70, 90, 48, 66];

export default function DashboardMockup() {
  const ref = useRef<HTMLDivElement>(null);
  const mx = useMotionValue(0);
  const my = useMotionValue(0);

  const rotateX = useSpring(useTransform(my, [-0.5, 0.5], [10, -10]), {
    stiffness: 150,
    damping: 18,
  });
  const rotateY = useSpring(useTransform(mx, [-0.5, 0.5], [-10, 10]), {
    stiffness: 150,
    damping: 18,
  });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    mx.set((e.clientX - rect.left) / rect.width - 0.5);
    my.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    mx.set(0);
    my.set(0);
  }

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 900 }}
      className="relative mx-auto w-full max-w-lg cursor-pointer select-none"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3 }}
    >
      <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-[#0c1530] to-[#070b18] p-1 shadow-2xl shadow-sky-500/10">
        <div className="flex items-center gap-1.5 rounded-t-xl bg-[#0a1024] px-4 py-2.5">
          <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          <span className="ml-3 flex items-center gap-1.5 text-[11px] text-slate-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            mudango-network-ops.live
          </span>
        </div>

        <div className="relative overflow-hidden rounded-b-xl bg-[#080d1f] p-5">
          <div className="pointer-events-none absolute inset-0 z-10 h-1/3 w-full bg-gradient-to-b from-sky-400/10 to-transparent animate-scanline" />

          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-medium text-sky-300">
              <Activity className="h-3.5 w-3.5" />
              Network Throughput
            </div>
            <span className="rounded-full bg-emerald-500/10 px-2 py-0.5 text-[10px] font-semibold text-emerald-400">
              SECURE
            </span>
          </div>

          <div className="mb-5 flex h-24 items-end gap-1.5">
            {bars.map((h, i) => (
              <motion.div
                key={i}
                className="flex-1 rounded-sm bg-gradient-to-t from-sky-500/70 to-indigo-400/70"
                initial={{ height: "10%" }}
                animate={{ height: [`${h * 0.5}%`, `${h}%`, `${h * 0.7}%`] }}
                transition={{
                  duration: 2.4,
                  repeat: Infinity,
                  delay: i * 0.12,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[
              { icon: Wifi, label: "Uptime", value: "99.9%" },
              { icon: ShieldCheck, label: "Threats Blocked", value: "1.2K" },
              { icon: Server, label: "Nodes Online", value: "48/48" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="rounded-lg border border-white/5 bg-white/5 p-3"
              >
                <stat.icon className="mb-1.5 h-4 w-4 text-sky-400" />
                <div className="text-sm font-semibold text-white">{stat.value}</div>
                <div className="text-[10px] text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <motion.div
        className="absolute -right-6 -top-6 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c1530]/90 px-3 py-2 shadow-xl backdrop-blur"
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      >
        <ShieldCheck className="h-4 w-4 text-emerald-400" />
        <span className="text-xs font-medium text-slate-200">Network Secured</span>
      </motion.div>

      <motion.div
        className="absolute -bottom-6 -left-6 flex items-center gap-2 rounded-xl border border-white/10 bg-[#0c1530]/90 px-3 py-2 shadow-xl backdrop-blur"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
      >
        <Activity className="h-4 w-4 text-sky-400" />
        <span className="text-xs font-medium text-slate-200">Live Monitoring</span>
      </motion.div>
    </motion.div>
  );
}
