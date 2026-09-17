"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { PROJECTS } from "@/lib/projects";

export default function Projects() {
  return (
    <section
      id="projects"
      className="border-b border-surfaceLine px-6 py-24 sm:px-12"
    >
      <div className="mx-auto max-w-4xl">
        <p className="section-label mb-10">04 / work</p>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          {PROJECTS.map((p, i) => (
            <motion.div
              key={p.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.06 }}
            >
              <Link
                href={`/projects/${p.slug}`}
                className="group relative block aspect-[16/10] overflow-hidden rounded-xl border border-surfaceLine bg-surface"
              >
                {/* Gambar thumbnail */}
                <Image
                  src={p.thumbnail}
                  alt={p.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />

                {/* Gradient overlay biar teks tetap terbaca */}
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/50 to-transparent" />

                {/* Badge tag */}
                <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 font-mono text-[10px] uppercase tracking-widest text-lilac backdrop-blur-sm">
                  {p.tag}
                </span>

                {/* Arrow icon, muncul saat hover */}
                <span className="absolute bottom-4 right-4 flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-ink/70 text-paper opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-amber group-hover:text-ink">
                  <ArrowUpRight className="h-4 w-4" />
                </span>

                {/* Judul + deskripsi singkat */}
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <h3 className="font-mono text-lg text-paper">{p.name}</h3>
                  <p className="mt-1 line-clamp-2 text-xs text-body/70">
                    {p.desc}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
