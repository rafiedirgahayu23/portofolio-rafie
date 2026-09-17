"use client";

import { motion } from "framer-motion";
import FloatingSkillIcons from "./FloatingSkillIcons";

const SERVICES = [
  {
    n: "01",
    title: "Web Development",
    desc: "Website responsif, cepat, dan mudah dirawat — dari landing page sampai web app dengan database.",
    tags: ["Next.js", "Tailwind", "Supabase"],
  },
  {
    n: "02",
    title: "UI/UX Design",
    desc: "Desain end-to-end: riset ringan, wireframe, hingga hi-fi mockup yang siap dieksekusi jadi kode.",
    tags: ["Figma", "Wireframe", "Prototype"],
  },
  {
    n: "03",
    title: "Database Management",
    desc: "Perancangan struktur data yang efisien, aman, dan teratur — dari pemodelan relasi tabel hingga optimasi kueri untuk mendukung performa aplikasi yang cepat.",
    tags: ["MySQL", "Laravel Migration", "PostgreSQL"],
  },
  {
    n: "04",
    title: "3D Modelling",
    desc: "Aset dan objek 3D interaktif yang siap dipakai untuk gim, web, atau visualisasi produk dengan detail presisi dan performa optimal.",
    tags: ["Blender Assets", "Unity"],
  },
  {
    n: "05",
    title: "Design Graphic",
    desc: "Visual yang kuat dan komunikatif — dari branding, aset media sosial, hingga materi promosi yang konsisten dan menarik perhatian.",
    tags: ["Canva", "Branding Social Media ", "Poster"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden border-b border-surfaceLine px-6 py-24 sm:px-12"
    >
      {/* Layer ikon dekoratif yang melayang pelan di background */}
      <FloatingSkillIcons />

      {/* Konten asli, dikasih z-10 supaya tetap di atas layer ikon */}
      <div className="relative z-10 mx-auto max-w-5xl">
        <p className="section-label mb-4">02 / what i do</p>
        <h2 className="mb-10 font-mono text-3xl text-paper sm:text-4xl">
          Services &amp; <span className="italic text-lilac">capabilities.</span>
        </h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {SERVICES.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ delay: i * 0.07 }}
              className="rounded-lg border border-surfaceLine bg-surface/50 p-5 transition hover:border-amber/60"
            >
              <span className="font-mono text-xs text-body/40">{s.n}</span>
              <h3 className="mt-3 font-mono text-base text-paper">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-body">{s.desc}</p>
              <div className="mt-4 flex flex-wrap gap-1.5">
                {s.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-surfaceLine px-2 py-0.5 font-mono text-[10px] text-lilac"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
