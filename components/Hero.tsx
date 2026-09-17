"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const ROLES = ["Web Developer.", "UI/UX Designer.", "Problem Solver."];

const SKILLS = [
  { name: "Frontend Dev", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Graphic Design", level: 70 },
  { name: "3D modeling", level: 65 },
];

function useTypewriter(words: string[], typingSpeed = 70, pause = 1400) {
  const [text, setText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIndex % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && text === current) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && text === "") {
      setDeleting(false);
      setWordIndex((i) => i + 1);
    } else {
      timeout = setTimeout(
        () => {
          setText((t) =>
            deleting ? t.slice(0, -1) : current.slice(0, t.length + 1)
          );
        },
        deleting ? typingSpeed / 2 : typingSpeed
      );
    }
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words, typingSpeed, pause]);

  return text;
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};
const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Hero() {
  const typed = useTypewriter(ROLES);
  const [hovered, setHovered] = useState<number | null>(null);
  const activity = hovered !== null ? SKILLS[hovered].level : 100;

  return (
    <section
      id="hero"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-visible border-b border-surfaceLine px-6 pb-12 pt-32 sm:px-12"
    >
      <div className="mx-auto grid w-full max-w-5xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        {/* Kolom Kiri: Teks */}
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p variants={item} className="section-label mb-4">
            based in bandung, indonesia · open for work
          </motion.p>
          <motion.h1 className="font-mono text-4xl font-semibold leading-tight text-paper sm:text-5xl">
            Rafie — a{" "}
            <span className="text-amber">
              {typed}
              <span className="animate-pulse">_</span>
            </span>
          </motion.h1>
          <motion.p
            variants={item}
            className="mt-6 max-w-xl text-base leading-relaxed text-body sm:text-lg"
          >
            Saya <span className="text-paper">Rafie</span>. Mengubah Ide Menjadi Solusi Digital yang Bermakna.

            Seorang Web Developer yang mengombinasikan desain antarmuka yang presisi dengan tampilan visual yang kreatif serta konten yang menarik.
          </motion.p>
          <motion.div variants={item} className="mt-10 flex flex-wrap gap-4">

            <a href="#projects"
              className="rounded-md bg-amber px-5 py-3 font-mono text-sm font-medium text-ink transition hover:brightness-110"
            >
              View Work →
            </a>

            <a href="#contact"
              className="rounded-md border border-surfaceLine px-5 py-3 font-mono text-sm font-medium text-paper transition hover:border-lilac hover:text-lilac"
            >
              Let&apos;s Talk
            </a>
          </motion.div>
        </motion.div>

        {/* Kolom Kanan: Card & Karakter dinaikkan posisinya */}
        <div className="relative flex justify-center overflow-visible -translate-y-4">
          {/* Card Skill Stack */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="relative z-10 w-[340px] rounded-lg border border-surfaceLine bg-surface/90 p-5 backdrop-blur"
          >
            <div className="mb-4 flex items-center justify-between">
              <span className="section-label">skill stack</span>
              <span className="rounded-full border border-surfaceLine px-2 py-0.5 font-mono text-[10px] text-body/60">
                hover to explore
              </span>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {SKILLS.map((skill, i) => (
                <button
                  key={skill.name}
                  onMouseEnter={() => setHovered(i)}
                  onMouseLeave={() => setHovered(null)}
                  className="rounded-md border border-surfaceLine bg-ink/60 p-3 text-left transition hover:border-lilac"
                >
                  <p className="font-mono text-xs text-paper">{skill.name}</p>
                  <div className="mt-2 h-1 w-full overflow-hidden rounded-full bg-surface">
                    <motion.div
                      className="h-full rounded-full bg-gradient-to-r from-lilac to-amber"
                      animate={{ width: hovered === i ? `${skill.level}%` : "35%" }}
                      transition={{ duration: 0.3 }}
                    />
                  </div>
                  <span className="mt-1 block font-mono text-[11px] text-body/60">
                    {skill.level}%
                  </span>
                </button>
              ))}
            </div>
            <div className="mt-4 flex items-center justify-between border-t border-surfaceLine pt-4">
              <span className="font-mono text-[10px] uppercase tracking-widest text-body/50">
                activity
              </span>
              <div className="flex h-4 items-end gap-[2px]">
                {Array.from({ length: 14 }).map((_, i) => (
                  <motion.span
                    key={i}
                    className="w-[2px] rounded-full bg-lilac"
                    animate={{
                      height: [`${20 + (i % 5) * 6}%`, "100%", `${30 + (i % 4) * 10}%`],
                    }}
                    transition={{
                      duration: 1.1,
                      repeat: Infinity,
                      delay: i * 0.05,
                    }}
                  />
                ))}
              </div>
              <span className="font-mono text-xs text-amber">{activity}%</span>
            </div>
          </motion.div>

          {/* Karakter 3D — Diatur ulang posisinya agar naik di atas border line */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="pointer-events-none absolute z-10 hidden sm:block"
            style={{ left: "320px", top: "160px", width: "230px", height: "300px" }}
          >
            <Image
              src="/character-hero.png"
              alt="Rafie Character"
              fill
              priority
              sizes="230px"
              className="object-contain object-bottom drop-shadow-2xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}