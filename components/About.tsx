"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

const STATS = [
  { value: "2+", label: "years exp." },
  { value: "6+", label: "projects shipped" },
  { value: "5+", label: "Certificates" },
];

const CV_PATH = "/cv-rafie.pdf";
const CV_DOWNLOAD_NAME = "Rafie-CV.pdf";

export default function About() {
  const [isCvOpen, setIsCvOpen] = useState(false);

  return (
    <section
      id="about"
      className="border-b border-surfaceLine px-6 py-24 sm:px-12"
    >
      <div className="mx-auto grid max-w-5xl items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">

        {/* SISI KIRI: Foto Tanpa Bingkai / Transparan */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ delay: 0.15 }}
          className="flex justify-center"
        >
          <div className="relative aspect-[4/5] w-full max-w-sm">
            <Image
              src="/foto-rafie3.png"
              alt="Muhammad Nur Rafie Dirgahayu"
              fill
              sizes="(max-width: 768px) 100vw, 384px"
              className="object-contain"
              priority
            />
          </div>
        </motion.div>

        {/* SISI KANAN: Teks Informasi */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <p className="section-label mb-4">01 / about me</p>
          <h2 className="font-mono text-3xl text-paper sm:text-4xl">
            Hello, I&apos;m <span className="text-lilac">Rafie</span>
          </h2>
          <p className="mt-4 max-w-md leading-relaxed text-body">
            Siswa Rekayasa Perangkat Lunak yang berfokus pada pengembangan full-stack web menggunakan Laravel, perancangan antarmuka Figma, serta eksplorasi game 3D di Unity. Dengan menerapkan pendekatan problem-first untuk menciptakan solusi nyata, didukung oleh kepemimpinan, disiplin, dan adaptabilitas tinggi dalam mengeksekusi ide menjadi produk berdaya saing.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => setIsCvOpen(true)}
              className="rounded-md bg-gradient-to-r from-lilac to-amber px-5 py-3 font-mono text-sm font-medium text-ink transition hover:brightness-110"
            >
              View CV
            </button>
            <a
              href="#projects"
              className="rounded-md border border-surfaceLine px-5 py-3 font-mono text-sm font-medium text-paper transition hover:border-lilac hover:text-lilac"
            >
              View Projects
            </a>
          </div>

          <div className="mt-12 flex gap-10 border-t border-surfaceLine pt-6">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <p className="font-mono text-2xl text-paper">{stat.value}</p>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-wide text-body/60">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </motion.div>

      </div>

      {/* MODAL: CV Viewer */}
      <AnimatePresence>
        {isCvOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-ink/80 px-4 py-8 backdrop-blur-sm"
            onClick={() => setIsCvOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: 20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 20, scale: 0.98 }}
              transition={{ duration: 0.2 }}
              onClick={(e) => e.stopPropagation()}
              className="flex h-full w-full max-w-3xl flex-col overflow-hidden rounded-lg border border-surfaceLine bg-surface shadow-2xl"
            >
              {/* Header modal */}
              <div className="flex items-center justify-between border-b border-surfaceLine px-5 py-3">
                <p className="font-mono text-sm text-paper">
                  Rafie&apos;s CV
                </p>
                <div className="flex items-center gap-2">
                  <a
                    href={CV_PATH}
                    download={CV_DOWNLOAD_NAME}
                    title="Download CV"
                    className="flex items-center gap-2 rounded-md border border-surfaceLine px-3 py-1.5 font-mono text-xs text-paper transition hover:border-lilac hover:text-lilac"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M12 3v12" />
                      <path d="m7 10 5 5 5-5" />
                      <path d="M5 21h14" />
                    </svg>
                    Download
                  </a>
                  <button
                    type="button"
                    onClick={() => setIsCvOpen(false)}
                    title="Close"
                    className="flex h-8 w-8 items-center justify-center rounded-md border border-surfaceLine text-paper transition hover:border-lilac hover:text-lilac"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-4 w-4"
                    >
                      <path d="M18 6 6 18" />
                      <path d="m6 6 12 12" />
                    </svg>
                  </button>
                </div>
              </div>

              {/* Isi PDF */}
              <div className="flex-1 bg-white">
                <iframe
                  src={CV_PATH}
                  title="Rafie's CV"
                  className="h-full w-full"
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
