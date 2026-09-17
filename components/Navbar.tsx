"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_ITEMS = [
  { id: "hero", label: "Home" },
  { id: "about", label: "About" },
  { id: "services", label: "Services" },
  { id: "projects", label: "Work" },
  { id: "contact", label: "Contact" },
];

export default function Navbar() {
  const [active, setActive] = useState("hero");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );
    NAV_ITEMS.forEach((item) => {
      const el = document.getElementById(item.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="fixed left-0 right-0 top-0 z-40 flex items-center justify-between px-6 py-5 sm:px-12"
    >
      <a href="#hero" className="flex items-center gap-2 font-mono text-sm font-semibold text-paper">
        <span className="h-1.5 w-1.5 rounded-full bg-amber" />
        Rafie Dirgahayu
      </a>

      <nav className="hidden items-center gap-1 rounded-full border border-surfaceLine bg-surface/70 p-1 backdrop-blur sm:flex">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`relative rounded-full px-4 py-1.5 font-mono text-xs transition ${active === item.id ? "text-ink" : "text-body hover:text-paper"
              }`}
          >
            {active === item.id && (
              <motion.span
                layoutId="nav-pill"
                className="absolute inset-0 rounded-full bg-paper"
                transition={{ type: "spring", duration: 0.5 }}
              />
            )}
            <span className="relative z-10">{item.label}</span>
          </a>
        ))}
      </nav>

      <a
        href="#contact"
        className="rounded-full bg-gradient-to-r from-lilac to-amber px-4 py-2 font-mono text-xs font-medium text-ink transition hover:brightness-110"
      >
        Hire Me →
      </a>
    </motion.header>
  );
}
