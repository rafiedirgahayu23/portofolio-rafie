"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

// =====================================================================
// Ganti data di bawah ini dengan sertifikat kamu.
// `images` = array/daftar path gambar di /public. Kalau sertifikat
// cuma 1 halaman, isi array-nya cukup 1 item saja. Kalau ada 2 gambar
// (misal 2 halaman atau sertifikat + lampiran), tinggal tambah item
// lagi di array-nya — otomatis jadi slide yang bisa digeser.
// =====================================================================
const CERTIFICATES = [
  {
    title: "Mindset Digital (Micro Skill) Digital Talent Scholarship",
    issuer: "Digital Talent",
    year: "2026",
    images: [
      "/certificates/sertifikat_komdigi1.jpg",
      "/certificates/sertifikat_komdigi2.jpg"
    ],
  },
  {
    title: "Peserta Lomba UI Web Design - DINAMIK 20",
    issuer: "Universitas Pendidikan Indonesia",
    year: "2025",
    images: ["/certificates/sertifikatUPI.jpg"],
  },
  {
    title: "Prompt Engineering untuk Software Developer",
    issuer: "Dicoding Indonesia",
    year: "2026",
    images: [
      "/certificates/sertifikat_promptengineering1.jpg",
      "/certificates/sertifikat_promptengineering2.jpg"
    ],
  },
  {
    title:
      "Pengenalan Pemrograman Python untuk Sekolah Menengah Atas (Intermediate) (Basic Digital Skill)",
    issuer: "Digital Talent Scholarship",
    year: "2026",
    images: [
      "/certificates/sertifikat_pythonkomdigi1.jpg",
      "/certificates/sertifikat_pythonkomdigi2.jpg"
    ],
  },
  {
    title: "Award of Completion - Oracle Academy",
    issuer: "Oracle Academy",
    year: "2025",
    images: ["/certificates/sertif_oracle_page-0001.jpg"],
  },
];

export default function Certificates() {
  const [active, setActive] = useState<number | null>(null);
  const [slide, setSlide] = useState(0);

  function openCertificate(i: number) {
    setActive(i);
    setSlide(0); // selalu mulai dari gambar pertama tiap buka sertifikat baru
  }

  function closeCertificate() {
    setActive(null);
    setSlide(0);
  }

  const current = active !== null ? CERTIFICATES[active] : null;

  function nextSlide() {
    if (!current) return;
    setSlide((s) => (s + 1) % current.images.length);
  }

  function prevSlide() {
    if (!current) return;
    setSlide((s) => (s - 1 + current.images.length) % current.images.length);
  }

  return (
    <section
      id="certificates"
      className="border-b border-surfaceLine px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-6xl">
        <p className="section-label mb-10">05 / certificates</p>

        <div className="flex flex-wrap justify-center gap-4">
          {CERTIFICATES.map((cert, i) => (
            <motion.button
              key={cert.title}
              onClick={() => openCertificate(i)}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.06 }}
              className="group relative aspect-[16/10] w-full overflow-hidden rounded-xl border border-surfaceLine bg-surface text-left transition hover:border-amber sm:w-[calc(50%_-_0.5rem)] lg:w-[calc(33.333%_-_0.667rem)]"
            >
              {/* Preview sertifikat (gambar pertama), dibuat samar */}
              <Image
                src={cert.images[0]}
                alt={cert.title}
                fill
                className="object-cover opacity-40 blur-[2px] transition duration-300 group-hover:scale-105 group-hover:opacity-55 group-hover:blur-[1px]"
              />

              {/* Gradient overlay biar teks tetap terbaca jelas */}
              <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />

              {/* Badge kecil kalau sertifikat punya lebih dari 1 gambar */}
              {cert.images.length > 1 && (
                <span className="absolute right-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-paper backdrop-blur-sm">
                  {cert.images.length} gambar
                </span>
              )}

              {/* Judul + keterangan, ditaruh di bawah card seperti card project */}
              <div className="absolute inset-x-0 bottom-0 p-5">
                <h3 className="font-mono text-base text-paper transition group-hover:text-amber sm:text-lg">
                  {cert.title}
                </h3>
                <p className="mt-1 font-mono text-[11px] uppercase tracking-widest text-body/70">
                  {cert.issuer} · {cert.year}
                </p>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
            className="fixed inset-0 z-[90] flex items-center justify-center bg-ink/90 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-3xl rounded-md border border-surfaceLine bg-surface p-8"
            >
              <p className="section-label mb-3">certificate.view()</p>
              <h3 className="font-mono text-lg text-paper">
                {current.title}
              </h3>
              <p className="mt-2 text-sm text-body">
                {current.issuer} · {current.year}
              </p>

              {/* Slider gambar */}
              <div className="relative mt-4 overflow-hidden rounded-md border border-surfaceLine">
                <AnimatePresence mode="wait" initial={false}>
                  <motion.div
                    key={slide}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -24 }}
                    transition={{ duration: 0.25, ease: "easeOut" }}
                  >
                    <Image
                      src={current.images[slide]}
                      alt={`${current.title} - halaman ${slide + 1}`}
                      width={1600}
                      height={1200}
                      className="h-auto max-h-[65vh] w-full object-contain"
                    />
                  </motion.div>
                </AnimatePresence>

                {/* Tombol panah, cuma muncul kalau gambar lebih dari 1 */}
                {current.images.length > 1 && (
                  <>
                    <button
                      onClick={prevSlide}
                      aria-label="Gambar sebelumnya"
                      className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition hover:bg-amber hover:text-ink"
                    >
                      <ChevronLeft className="h-5 w-5" />
                    </button>
                    <button
                      onClick={nextSlide}
                      aria-label="Gambar berikutnya"
                      className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition hover:bg-amber hover:text-ink"
                    >
                      <ChevronRight className="h-5 w-5" />
                    </button>
                  </>
                )}
              </div>

              {/* Indikator titik, cuma muncul kalau gambar lebih dari 1 */}
              {current.images.length > 1 && (
                <div className="mt-3 flex justify-center gap-1.5">
                  {current.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setSlide(idx)}
                      aria-label={`Lihat gambar ${idx + 1}`}
                      className={`h-1.5 rounded-full transition-all ${idx === slide
                        ? "w-5 bg-amber"
                        : "w-1.5 bg-surfaceLine"
                        }`}
                    />
                  ))}
                </div>
              )}

              <button
                onClick={closeCertificate}
                className="mt-6 rounded-md border border-surfaceLine px-4 py-2 font-mono text-xs text-paper transition hover:border-amber hover:text-amber"
              >
                Tutup
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}