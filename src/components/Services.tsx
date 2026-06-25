"use client";

import { motion } from "framer-motion";
import {
  Compass,
  Code2,
  ClipboardList,
  Network,
  ShieldCheck,
  ShieldAlert,
  Globe,
  GraduationCap,
  MonitorSmartphone,
  Database,
  Users,
  Mail,
  Wifi,
  Monitor,
  Sun,
  type LucideIcon,
} from "lucide-react";
import Reveal from "./Reveal";
import { services } from "@/lib/content";

const iconMap: Record<string, LucideIcon> = {
  Compass,
  Code2,
  ClipboardList,
  Network,
  ShieldCheck,
  ShieldAlert,
  Globe,
  GraduationCap,
  MonitorSmartphone,
  Database,
  Users,
  Mail,
  Wifi,
  Monitor,
  Sun,
};

export default function Services() {
  return (
    <section id="services" className="relative px-6 py-28">
      <div className="mx-auto max-w-7xl">
        <Reveal className="mx-auto mb-16 max-w-2xl text-center">
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            What We Do
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Products &amp; Services
          </h2>
          <p className="text-slate-400">
            A comprehensive suite of IT services designed to move your
            business forward — securely and efficiently.
          </p>
        </Reveal>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => {
            const Icon = iconMap[service.icon];
            return (
              <Reveal key={service.title} delay={(i % 3) * 0.08}>
                <motion.div
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-colors hover:border-sky-400/40 hover:bg-white/[0.06]"
                >
                  <div className="absolute inset-0 -z-10 bg-gradient-to-br from-sky-500/0 to-indigo-500/0 opacity-0 transition-opacity duration-500 group-hover:from-sky-500/10 group-hover:to-indigo-500/10 group-hover:opacity-100" />
                  <motion.div
                    whileHover={{ rotate: -10, scale: 1.1 }}
                    className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-sky-500/15 text-sky-400"
                  >
                    {Icon && <Icon className="h-5 w-5" />}
                  </motion.div>
                  <h3 className="mb-2 text-base font-semibold text-white">
                    {service.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-400">
                    {service.description}
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
