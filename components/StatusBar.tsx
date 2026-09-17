"use client";

import { useEffect, useState } from "react";

const SECTIONS = [
  { id: "hero", label: "hero.tsx" },
  { id: "about", label: "about.tsx" },
  { id: "services", label: "services.tsx" },
  { id: "projects", label: "projects.tsx" },
  { id: "certificates", label: "certificates.tsx" },
  { id: "contact", label: "contact.tsx" },
];

export default function StatusBar() {
  const [active, setActive] = useState("hero.tsx");
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const match = SECTIONS.find((s) => s.id === entry.target.id);
            if (match) setActive(match.label);
          }
        });
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );

    SECTIONS.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    const onScroll = () => {
      const h = document.documentElement;
      const scrolled = h.scrollTop / (h.scrollHeight - h.clientHeight || 1);
      setProgress(Math.min(100, Math.max(0, scrolled * 100)));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 flex h-8 items-center justify-between border-t border-surfaceLine bg-surface/90 px-4 font-mono text-[11px] text-body backdrop-blur">
      <div className="flex items-center gap-4">
        <span className="flex items-center gap-1.5 text-lilac">
          <span className="h-1.5 w-1.5 rounded-full bg-amber" />
          main
        </span>
        <span className="hidden sm:inline">build: passing</span>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">{Math.round(progress)}% scrolled</span>
        <span className="text-paper">{active}</span>
      </div>
    </div>
  );
}
