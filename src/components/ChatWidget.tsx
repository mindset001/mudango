"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cpu, Mail, RotateCcw } from "lucide-react";
import { company } from "@/lib/content";

type Message = { from: "user" | "bot"; text: string };

const script: Message[] = [
  { from: "user", text: "Hi! Do you handle network security for small businesses?" },
  { from: "bot", text: "Absolutely — that's one of our specialties. 🔒" },
  { from: "bot", text: "We also handle custom software, web apps, and ICT training." },
  { from: "user", text: "Nice, how do I get started?" },
  { from: "bot", text: "Just reach out below — we usually reply within a day! 👇" },
];

const TYPING_MS = 1100;
const READ_MS = 1700;

function TypingDots() {
  return (
    <span className="flex items-center gap-1 px-1">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="h-1.5 w-1.5 rounded-full bg-slate-400"
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 0.6, repeat: Infinity, delay: i * 0.15 }}
        />
      ))}
    </span>
  );
}

function Conversation({ onReplay }: { onReplay: () => void }) {
  const [visible, setVisible] = useState(0);
  const [typing, setTyping] = useState(false);
  const [done, setDone] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const timers: ReturnType<typeof setTimeout>[] = [];

    function step(i: number) {
      if (cancelled) return;
      if (i >= script.length) {
        setDone(true);
        return;
      }
      setTyping(true);
      timers.push(
        setTimeout(() => {
          if (cancelled) return;
          setTyping(false);
          setVisible(i + 1);
          timers.push(setTimeout(() => step(i + 1), READ_MS));
        }, TYPING_MS)
      );
    }

    timers.push(setTimeout(() => step(0), 500));

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
    };
  }, []);

  return (
    <>
      <div className="flex min-h-[280px] flex-1 flex-col gap-3 px-5 py-6">
        <AnimatePresence initial={false}>
          {script.slice(0, visible).map((msg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 12, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.35 }}
              className={`max-w-[80%] rounded-2xl px-4 py-2.5 text-sm leading-relaxed ${
                msg.from === "user"
                  ? "ml-auto rounded-br-sm bg-gradient-to-r from-sky-500 to-indigo-600 text-white"
                  : "rounded-bl-sm bg-white/10 text-slate-200"
              }`}
            >
              {msg.text}
            </motion.div>
          ))}
        </AnimatePresence>

        {typing && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className={`max-w-[80%] rounded-2xl rounded-bl-sm px-3 py-2.5 ${
              script[visible]?.from === "user"
                ? "ml-auto rounded-br-sm rounded-bl-2xl bg-sky-500/40"
                : "bg-white/10"
            }`}
          >
            <TypingDots />
          </motion.div>
        )}
      </div>

      <AnimatePresence>
        {done && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex flex-wrap items-center gap-3 border-t border-white/10 bg-white/[0.02] px-5 py-4"
          >
            <a
              href={`mailto:${company.contact.email}`}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-sky-500/30 transition-transform hover:scale-105"
            >
              <Mail className="h-4 w-4" />
              Email Us
            </a>
            <button
              onClick={onReplay}
              className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-xs font-medium text-slate-300 transition-colors hover:border-sky-400/50 hover:text-white"
            >
              <RotateCcw className="h-3.5 w-3.5" />
              Replay
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default function ChatWidget() {
  const [round, setRound] = useState(0);

  return (
    <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
      <div className="flex items-center gap-3 border-b border-white/10 bg-white/[0.02] px-5 py-4">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-sky-400 to-indigo-600">
          <Cpu className="h-4 w-4 text-white" />
        </span>
        <div>
          <p className="text-sm font-semibold text-white">{company.shortName} Support</p>
          <p className="flex items-center gap-1.5 text-xs text-emerald-400">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
            </span>
            Online now
          </p>
        </div>
      </div>

      <Conversation key={round} onReplay={() => setRound((r) => r + 1)} />
    </div>
  );
}
