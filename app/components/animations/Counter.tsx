"use client";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";
import { useEffect, useRef } from "react";

interface CounterProps {
  value: string;
  className?: string;
}

export function AnimatedKPI({ value, label }: { value: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  // Extract number and prefix/suffix
  const match = value.match(/^([+-]?)(\d+)(%?)(.*)$/);
  const prefix = match ? match[1] : "";
  const number = match ? parseInt(match[2]) : null;
  const suffix = match ? match[3] + match[4] : "";
  const isNumber = number !== null && !value.includes("anos");

  const motionVal = useMotionValue(0);
  const spring = useSpring(motionVal, { duration: 1200, bounce: 0 });
  const displayRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (inView && isNumber && number !== null) {
      motionVal.set(0);
      animate(motionVal, number, { duration: 1.2, ease: "easeOut" });
    }
  }, [inView, isNumber, number, motionVal]);

  useEffect(() => {
    return spring.on("change", (v) => {
      if (displayRef.current) {
        displayRef.current.textContent = prefix + Math.round(v) + suffix;
      }
    });
  }, [spring, prefix, suffix]);

  return (
    <div ref={ref} className="border border-gray-100 rounded-2xl p-4 bg-gray-50/50">
      <div className="text-2xl font-bold text-pink-500">
        {isNumber ? (
          <span ref={displayRef}>{prefix}0{suffix}</span>
        ) : (
          <span>{value}</span>
        )}
      </div>
      <div className="text-xs text-gray-500 mt-0.5">{label}</div>
    </div>
  );
}
