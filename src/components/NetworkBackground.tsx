"use client";

import { motion } from "framer-motion";

const nodes = [
  { x: 8, y: 18 },
  { x: 28, y: 8 },
  { x: 52, y: 22 },
  { x: 74, y: 10 },
  { x: 92, y: 26 },
  { x: 18, y: 48 },
  { x: 44, y: 58 },
  { x: 68, y: 50 },
  { x: 88, y: 62 },
  { x: 12, y: 80 },
  { x: 38, y: 88 },
  { x: 62, y: 80 },
  { x: 84, y: 92 },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [0, 5],
  [1, 6],
  [2, 6],
  [3, 7],
  [4, 8],
  [5, 6],
  [6, 7],
  [7, 8],
  [5, 9],
  [6, 10],
  [7, 11],
  [8, 12],
  [9, 10],
  [10, 11],
  [11, 12],
];

export default function NetworkBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_0%,#000_40%,transparent_100%)]" />
      <svg
        className="absolute inset-0 h-full w-full opacity-40"
        viewBox="0 0 100 100"
        preserveAspectRatio="none"
      >
        {edges.map(([a, b], i) => {
          const n1 = nodes[a];
          const n2 = nodes[b];
          return (
            <motion.line
              key={`${a}-${b}`}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              stroke="#38bdf8"
              strokeWidth={0.15}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: [0, 0.6, 0.3] }}
              transition={{
                duration: 2.5,
                delay: i * 0.08,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3,
              }}
            />
          );
        })}
        {nodes.map((n, i) => (
          <motion.circle
            key={i}
            cx={n.x}
            cy={n.y}
            r={0.6}
            fill="#38bdf8"
            initial={{ opacity: 0.3, scale: 0.8 }}
            animate={{ opacity: [0.3, 1, 0.3], scale: [0.8, 1.3, 0.8] }}
            transition={{
              duration: 3 + (i % 4),
              repeat: Infinity,
              delay: i * 0.2,
            }}
          />
        ))}
      </svg>
      <div className="absolute -left-40 top-0 h-96 w-96 animate-blob rounded-full bg-blue-600/20 blur-3xl" />
      <div className="animation-delay-2000 absolute right-0 top-40 h-96 w-96 animate-blob rounded-full bg-cyan-500/20 blur-3xl" />
      <div className="animation-delay-4000 absolute bottom-0 left-1/3 h-96 w-96 animate-blob rounded-full bg-indigo-600/20 blur-3xl" />
    </div>
  );
}
