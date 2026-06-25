"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Quote } from "lucide-react";
import Reveal from "./Reveal";
import { testimonials } from "@/lib/content";

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-3xl text-center">
        <Reveal>
          <span className="mb-4 inline-block text-xs font-semibold uppercase tracking-[0.2em] text-sky-400">
            Client Voices
          </span>
          <h2 className="mb-12 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            What Our Clients Say
          </h2>
        </Reveal>

        <div className="relative min-h-[180px] rounded-2xl border border-white/10 bg-white/[0.03] p-10">
          <Quote className="mx-auto mb-4 h-8 w-8 text-sky-400/60" />
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mb-4 text-lg font-medium leading-relaxed text-white sm:text-xl">
                &ldquo;{testimonials[index].quote}&rdquo;
              </p>
              <p className="text-sm text-slate-400">
                {testimonials[index].author}
              </p>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-6 flex items-center justify-center gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              aria-label={`Show testimonial ${i + 1}`}
              className="group relative h-2.5 w-2.5"
            >
              <span
                className={`absolute inset-0 rounded-full transition-all ${
                  i === index ? "bg-sky-400" : "bg-white/20 group-hover:bg-white/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
