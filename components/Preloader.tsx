"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const BOOT_LINES = [
  "$ initializing portfolio...",
  "$ loading assets...",
  "$ compiling sections...",
  "$ ready.",
];

export default function Preloader() {
  const [progress, setProgress] = useState(0);
  const [lineIndex, setLineIndex] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const counter = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.floor(Math.random() * 8) + 3;
        return next >= 100 ? 100 : next;
      });
    }, 90);

    return () => clearInterval(counter);
  }, []);

  useEffect(() => {
    const step = Math.floor((progress / 100) * BOOT_LINES.length);
    setLineIndex(Math.min(step, BOOT_LINES.length - 1));

    if (progress >= 100) {
      const timeout = setTimeout(() => {
        setDone(true);
        document.body.style.overflow = "";
      }, 500);
      return () => clearTimeout(timeout);
    }
  }, [progress]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-ink"
          exit={{ clipPath: "inset(0 0 100% 0)" }}
          transition={{ duration: 0.7, ease: [0.76, 0, 0.24, 1] }}
        >
          <div className="w-full max-w-xs px-6 font-mono">
            <p className="mb-6 h-4 text-xs text-lilac">
              {BOOT_LINES[lineIndex]}
              <span className="animate-pulse">_</span>
            </p>
            <div className="mb-3 flex items-baseline justify-between">
              <span className="text-xs uppercase tracking-widest text-body/60">
                rafie.dev
              </span>
              <span className="text-2xl font-semibold text-amber">
                {progress}%
              </span>
            </div>
            <div className="h-1 w-full overflow-hidden rounded-full bg-surface">
              <motion.div
                className="h-full rounded-full bg-gradient-to-r from-lilac to-amber"
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.15 }}
              />
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
