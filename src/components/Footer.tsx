"use client";

import { motion } from "framer-motion";
import { Cpu } from "lucide-react";
import { company } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <div className="flex items-center gap-2">
          <motion.span
            whileHover={{ rotate: 12, scale: 1.08 }}
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-sky-400 to-indigo-600"
          >
            <Cpu className="h-4 w-4 text-white" />
          </motion.span>
          <span className="text-sm font-semibold text-white">{company.shortName}</span>
        </div>

        <p className="text-xs text-slate-500">
          &copy; {new Date().getFullYear()} {company.name}. {company.rc}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
