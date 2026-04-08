"use client";
import { motion } from "framer-motion";

export function DotGrid({
  className = "",
  cols = 8,
  rows = 6,
}: {
  className?: string;
  cols?: number;
  rows?: number;
}) {
  const gap = 24;
  const r = 1.5;
  const w = (cols - 1) * gap;
  const h = (rows - 1) * gap;

  return (
    <svg width={w} height={h} viewBox={`0 0 ${w} ${h}`} className={className} aria-hidden>
      {Array.from({ length: rows }).map((_, row) =>
        Array.from({ length: cols }).map((_, col) => (
          <motion.circle
            key={`${row}-${col}`}
            cx={col * gap}
            cy={row * gap}
            r={r}
            fill="currentColor"
            initial={{ opacity: 0.15 }}
            animate={{ opacity: [0.15, 0.4, 0.15] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: (row * cols + col) * 0.04,
              ease: "easeInOut",
            }}
          />
        ))
      )}
    </svg>
  );
}

export function AbstractRings({ className = "" }: { className?: string }) {
  return (
    <svg
      width="320"
      height="320"
      viewBox="0 0 320 320"
      className={className}
      aria-hidden
      fill="none"
    >
      <motion.circle
        cx="160" cy="160" r="140"
        stroke="currentColor" strokeWidth="1"
        initial={{ opacity: 0.08, scale: 1 }}
        animate={{ opacity: [0.08, 0.18, 0.08], scale: [1, 1.03, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "160px", originY: "160px" }}
      />
      <motion.circle
        cx="160" cy="160" r="100"
        stroke="currentColor" strokeWidth="1"
        initial={{ opacity: 0.10 }}
        animate={{ opacity: [0.10, 0.22, 0.10], scale: [1, 1.05, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        style={{ originX: "160px", originY: "160px" }}
      />
      <motion.circle
        cx="160" cy="160" r="60"
        stroke="currentColor" strokeWidth="1"
        animate={{ opacity: [0.08, 0.20, 0.08], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        style={{ originX: "160px", originY: "160px" }}
      />
      <motion.circle
        cx="160" cy="160" r="20"
        fill="currentColor"
        animate={{ opacity: [0.06, 0.14, 0.06] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
      />
    </svg>
  );
}

export function FloatingShapes({ className = "" }: { className?: string }) {
  return (
    <svg
      width="400"
      height="300"
      viewBox="0 0 400 300"
      className={className}
      aria-hidden
      fill="none"
    >
      {/* Dashed arc that draws itself */}
      <motion.path
        d="M 50 250 Q 200 50 350 200"
        stroke="currentColor" strokeWidth="1.5"
        strokeDasharray="6 4"
        initial={{ pathLength: 0, opacity: 0 }}
        animate={{ pathLength: 1, opacity: 0.15 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
      />

      {/* Floating ring top-right */}
      <motion.circle
        cx="340" cy="60" r="30"
        stroke="currentColor" strokeWidth="1"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        opacity={0.12}
      />
      <motion.circle
        cx="340" cy="60" r="12"
        stroke="currentColor" strokeWidth="1.5"
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        opacity={0.18}
      />

      {/* Rotating triangle */}
      <motion.polygon
        points="80,40 110,90 50,90"
        stroke="currentColor" strokeWidth="1"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        style={{ originX: "80px", originY: "65px" }}
        opacity={0.10}
      />

      {/* Floating small squares */}
      <motion.rect
        x="260" y="200" width="16" height="16" rx="2"
        stroke="currentColor" strokeWidth="1"
        animate={{ y: [0, 8, 0], rotate: [15, 30, 15] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        opacity={0.14}
      />
      <motion.rect
        x="120" y="220" width="10" height="10" rx="1"
        stroke="currentColor" strokeWidth="1"
        animate={{ y: [0, -6, 0], rotate: [-10, 10, -10] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        opacity={0.12}
      />
    </svg>
  );
}

export function SpinningRing({ className = "" }: { className?: string }) {
  return (
    <motion.svg
      width="120" height="120"
      viewBox="0 0 120 120"
      className={className}
      aria-hidden
      fill="none"
      animate={{ rotate: 360 }}
      transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
    >
      <circle cx="60" cy="60" r="54" stroke="currentColor" strokeWidth="1"
        strokeDasharray="12 8" opacity={0.20} />
    </motion.svg>
  );
}
