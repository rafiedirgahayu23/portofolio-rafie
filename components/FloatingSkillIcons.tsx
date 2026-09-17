"use client";

import { motion } from "framer-motion";
import {
  Code2,
  PenTool,
  MessageSquareText,
  Box,
  Palette,
  Frame,
  Boxes,
  Sparkles,
} from "lucide-react";

// =====================================================================
// Layer ikon dekoratif yang melayang pelan di belakang konten.
// Taruh komponen ini sebagai child PALING ATAS di dalam <section>,
// sebelum konten card/teks kamu. Section-nya wajib punya class
// "relative overflow-hidden", dan konten asli kamu (card, teks) perlu
// dibungkus div dengan class "relative z-10" supaya tetap di atas layer ini.
//
// Posisi & ukuran tiap ikon sengaja diacak manual (bukan grid rapi)
// biar kesannya abstrak, bukan pola berulang yang kaku.
// =====================================================================

const ICONS = [
  { Icon: Code2, top: "8%", left: "6%", size: 34, duration: 7, delay: 0 },
  { Icon: Frame, top: "18%", left: "88%", size: 28, duration: 8, delay: 0.5 },
  { Icon: PenTool, top: "62%", left: "3%", size: 24, duration: 6.5, delay: 1 },
  { Icon: MessageSquareText, top: "78%", left: "92%", size: 30, duration: 9, delay: 0.2 },
  { Icon: Box, top: "40%", left: "94%", size: 40, duration: 7.5, delay: 1.4 },
  { Icon: Palette, top: "88%", left: "12%", size: 26, duration: 6, delay: 0.8 },
  { Icon: Boxes, top: "6%", left: "48%", size: 22, duration: 8.5, delay: 0.3 },
  { Icon: Sparkles, top: "50%", left: "50%", size: 20, duration: 5.5, delay: 1.2 },
];

export default function FloatingSkillIcons() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      {ICONS.map(({ Icon, top, left, size, duration, delay }, i) => (
        <motion.div
          key={i}
          className="absolute text-lilac/10"
          style={{ top, left }}
          animate={{
            y: [0, -18, 0, 14, 0],
            x: [0, 10, 0, -10, 0],
            rotate: [0, 8, 0, -8, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon size={size} strokeWidth={1.2} />
        </motion.div>
      ))}
    </div>
  );
}
