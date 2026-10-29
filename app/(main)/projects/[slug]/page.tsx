"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import {
  Code2,
  Layers,
  ExternalLink,
  ArrowLeft,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { PROJECTS, getProjectBySlug } from "@/lib/projects";

export default function ProjectDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const project = getProjectBySlug(params.slug);
  const [slide, setSlide] = useState(0);
  const [imgLoaded, setImgLoaded] = useState(false);

  useEffect(() => {
    setImgLoaded(false);
  }, [slide]);

  if (!project) return notFound();

  // Link internal (diawali "/", misalnya /viewer/...) dibuka di tab yang
  // sama. Link eksternal (https://...) tetap dibuka di tab baru karena
  // memang beda situs.
  const isInternalLink = project.links.live?.startsWith("/");

  function nextSlide() {
    setSlide((s) => (s + 1) % project!.previews.length);
  }

  function prevSlide() {
    setSlide(
      (s) => (s - 1 + project!.previews.length) % project!.previews.length
    );
  }

  return (
    <section className="min-h-screen px-6 py-16 sm:px-12">
      <div className="mx-auto max-w-4xl">
        {/* Tombol kembali */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 rounded-md px-2 py-1.5 -ml-2 font-mono text-sm text-body transition hover:text-amber"
        >
          <ArrowLeft className="h-4 w-4 shrink-0" />
          Back
        </Link>
        {/* Judul + tag */}
        <p className="section-label mt-6">{project.tag}</p>
        <h1 className="mt-2 font-mono text-3xl text-paper sm:text-4xl">
          {project.name}
        </h1>

        {/* Deskripsi lengkap */}
        <p className="mt-4 max-w-2xl leading-relaxed text-body">
          {project.detail}
        </p>

        {/* Stat pills */}
        <div className="mt-6 flex flex-wrap gap-3">
          <div className="flex items-center gap-2 rounded-lg border border-surfaceLine bg-surface px-4 py-2">
            <Code2 className="h-4 w-4 text-lilac" />
            <span className="text-sm text-paper">
              {project.technologies.length}
            </span>
            <span className="text-xs text-body/70">Technologies Used</span>
          </div>
          <div className="flex items-center gap-2 rounded-lg border border-surfaceLine bg-surface px-4 py-2">
            <Layers className="h-4 w-4 text-lilac" />
            <span className="text-sm text-paper">
              {project.keyFeatures.length}
            </span>
            <span className="text-xs text-body/70">Key Features</span>
          </div>
        </div>

        {/* Link live demo */}
        <div className="mt-4 flex flex-wrap gap-3">
          {project.links.live ? (
            <a
              href={project.links.live}
              {...(!isInternalLink && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="flex items-center gap-2 rounded-lg border border-surfaceLine px-4 py-2 font-mono text-xs text-paper transition hover:border-amber hover:text-amber"
            >
              <ExternalLink className="h-3.5 w-3.5" />
              Live Demo
            </a>
          ) : (
            <span className="flex items-center gap-2 rounded-lg border border-surfaceLine px-4 py-2 font-mono text-xs text-body/50">
              <ExternalLink className="h-3.5 w-3.5" />
              No Link
            </span>
          )}
        </div>

        {/* Technologies Used */}
        <div className="mt-10">
          <p className="section-label mb-3">Technologies Used</p>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-md border border-surfaceLine bg-surface px-3 py-1.5 font-mono text-xs text-paper"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Key Features + preview prototype */}
        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.4fr)]">
          <div>
            <p className="section-label mb-3">Key Features</p>
            <ul className="space-y-2">
              {project.keyFeatures.map((feature) => (
                <li
                  key={feature}
                  className="flex items-start gap-2 text-sm text-body"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-amber" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Preview prototype */}
          <div>
            <div className="relative aspect-[16/10] overflow-hidden rounded-xl border border-surfaceLine bg-surface">
              {/* Skeleton shimmer, tampil selagi gambar masih loading */}
              {!imgLoaded && (
                <div className="absolute inset-0 animate-pulse bg-gradient-to-br from-surface via-surfaceLine/40 to-surface" />
              )}

              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={slide}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: imgLoaded ? 1 : 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="h-full w-full"
                >
                  <Image
                    src={project.previews[slide]}
                    alt={`${project.name} - preview ${slide + 1}`}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover"
                    priority={slide === 0}
                    onLoad={() => setImgLoaded(true)}
                  />
                </motion.div>
              </AnimatePresence>

              {/* Tombol panah */}
              {project.previews.length > 1 && (
                <>
                  <button
                    onClick={prevSlide}
                    aria-label="Preview sebelumnya"
                    className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition hover:bg-amber hover:text-ink"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={nextSlide}
                    aria-label="Preview berikutnya"
                    className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-ink/70 text-paper backdrop-blur-sm transition hover:bg-amber hover:text-ink"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}
            </div>

            {/* Indikator titik */}
            {project.previews.length > 1 && (
              <div className="mt-3 flex justify-center gap-1.5">
                {project.previews.map((_: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSlide(idx)}
                    aria-label={`Lihat preview ${idx + 1}`}
                    className={`h-1.5 rounded-full transition-all ${idx === slide ? "w-5 bg-amber" : "w-1.5 bg-surfaceLine"
                      }`}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
