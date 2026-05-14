"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const pressLogos = [
  {
    name: "Product Hunt",
    svg: (
      <svg viewBox="0 0 120 28" fill="currentColor" className="h-8 w-auto">
        <circle cx="14" cy="14" r="13" fill="none" stroke="currentColor" strokeWidth="2"/>
        <path d="M10 8h6a5 5 0 0 1 0 10h-6V8zm6 7a2 2 0 0 0 0-4h-3v4h3z"/>
        <text x="32" y="19" fontSize="13" fontWeight="700" fontFamily="system-ui" letterSpacing="0">Product Hunt</text>
      </svg>
    ),
  },
  {
    name: "Forbes",
    svg: (
      <svg viewBox="0 0 80 28" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="21" fontSize="22" fontWeight="800" fontFamily="Georgia, serif" letterSpacing="-0.5">Forbes</text>
      </svg>
    ),
  },
  {
    name: "TechCrunch",
    svg: (
      <svg viewBox="0 0 100 28" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="20" fontSize="13" fontWeight="700" fontFamily="system-ui" letterSpacing="0.5">TC</text>
        <text x="22" y="20" fontSize="13" fontWeight="500" fontFamily="system-ui">TechCrunch</text>
      </svg>
    ),
  },
  {
    name: "Business Insider",
    svg: (
      <svg viewBox="0 0 100 28" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="19" fontSize="11" fontWeight="700" fontFamily="system-ui" letterSpacing="0.8">BUSINESS</text>
        <text x="0" y="28" fontSize="9" fontWeight="400" fontFamily="system-ui" letterSpacing="1.2">INSIDER</text>
      </svg>
    ),
  },
  {
    name: "Y Combinator",
    svg: (
      <svg viewBox="0 0 110 28" fill="currentColor" className="h-8 w-30">
        <rect x="0" y="3" width="22" height="22" rx="4" fill="currentColor" opacity="0.15" stroke="currentColor" strokeWidth="1.5"/>
        <text x="5" y="19" fontSize="13" fontWeight="800" fontFamily="system-ui">YC</text>
        <text x="28" y="19" fontSize="12" fontWeight="600" fontFamily="system-ui">Y Combinator</text>
      </svg>
    ),
  },
  {
    name: "Hacker News",
    svg: (
      <svg viewBox="0 0 120 28" fill="currentColor" className="h-8 w-auto">
        <text x="0" y="19" fontSize="12" fontWeight="700" fontFamily="system-ui" letterSpacing="0.3">Hacker News</text>
      </svg>
    ),
  },
];

export function PressSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-10px" });

  return (
    <section
      ref={ref}
      className="relative bg-[#1f1f1e] py-6 px-6 overflow-hidden"
    >
      {/* Top divider */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />
      {/* Bottom divider */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/[0.07] to-transparent" />

      <div className="max-w-5xl mx-auto">
        {/* Label */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5 }}
          className="text-center text-[10px] font-semibold tracking-[0.22em] uppercase text-white/20 mb-8"
        >
          Featured & trusted by
        </motion.p>

        {/* Logos row */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className="flex flex-row items-center justify-center gap-x-15 gap-y-6"
        >
          {pressLogos.map((logo, i) => (
            <motion.div
              key={logo.name}
              initial={{ opacity: 0 }}
              animate={inView ? { opacity: 1 } : {}}
              transition={{ delay: 0.15 + i * 0.07, duration: 0.5 }}
              className="text-white/25 hover:text-white/50 transition-colors duration-300 cursor-default select-none"
              title={logo.name}
            >
              {logo.svg}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
