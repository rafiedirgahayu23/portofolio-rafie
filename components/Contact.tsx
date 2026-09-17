"use client";

import { motion } from "framer-motion";

const LINKS = [
  {
    label: "LinkedIn",
    value: "Let's Connect",
    href: "https://www.linkedin.com/in/muhammad-nur-rafie-dirgahayu-07b789352/",
    color: "text-[#4B7BEC] bg-[#4B7BEC]/10",
    icon: "in",
    isExternal: true,
  },
  {
    label: "Email",
    value: "rafiedirgahayu@gmail.com",
    href: "mailto:rafiedirgahayu@gmail.com",
    color: "text-amber bg-amber/10",
    icon: "@",
    isExternal: false,
  },
  {
    label: "Instagram",
    value: "paiii_dgy",
    href: "https://www.instagram.com/paiii_dgy/",
    color: "text-[#E1306C] bg-[#E1306C]/10",
    icon: "ig",
    isExternal: true,
  },
  {
    label: "GitHub",
    value: "rafiedirgahayu23",
    href: "https://github.com/rafiedirgahayu23",
    color: "text-lilac bg-lilac/10",
    icon: "gh",
    isExternal: true,
  },
];

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-12">
      <div className="mx-auto max-w-2xl text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-4"
        >
          get in touch
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-mono text-3xl text-paper sm:text-4xl"
        >
          Have a project?
          <br />
          <span className="italic text-lilac">Let&apos;s talk.</span>
        </motion.h2>

        <div className="mt-10 grid gap-3 sm:grid-cols-2">
          {LINKS.map((link, i) => (
            <motion.a
              key={link.label}
              href={link.href}
              target={link.isExternal ? "_blank" : undefined}
              rel={link.isExternal ? "noopener noreferrer" : undefined}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex items-center gap-4 rounded-lg border border-surfaceLine bg-surface/50 p-4 text-left transition hover:border-amber/60"
            >
              <span
                className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-md font-mono text-xs font-semibold ${link.color}`}
              >
                {link.icon}
              </span>
              <div>
                <p className="font-mono text-sm text-paper">{link.label}</p>
                <p className="font-mono text-xs text-body/60">{link.value}</p>
              </div>
            </motion.a>
          ))}
        </div>

        <p className="mt-12 border-t border-surfaceLine pt-6 text-center font-mono text-[11px] text-body/40">
          © {new Date().getFullYear()} Rafie. Built with purpose &amp; executed no cap.
        </p>
      </div>
    </section>
  );
}