"use client";

import { motion } from "framer-motion";

const SKILLS = [
  { name: "Frontend Development", level: 85 },
  { name: "UI/UX Design", level: 80 },
  { name: "Copywriting", level: 70 },
  { name: "Backend & Database", level: 65 },
];

export default function Skills() {
  return (
    <section
      id="skills"
      className="border-b border-surfaceLine px-6 py-24 sm:px-12"
    >
      <div className="mx-auto grid max-w-4xl gap-10 sm:grid-cols-[140px_1fr]">
        <p className="section-label">02 / skills</p>
        <div className="space-y-6">
          {SKILLS.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -12 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="mb-2 flex items-center justify-between font-mono text-sm">
                <span className="text-paper">{skill.name}</span>
                <span className="text-amber">{skill.level}%</span>
              </div>
              <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.9, ease: "easeOut", delay: i * 0.08 }}
                  className="h-full rounded-full bg-gradient-to-r from-lilac to-amber"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
