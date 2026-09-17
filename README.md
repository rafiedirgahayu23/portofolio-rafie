# Portofolio — Rafie

Website portofolio personal brand. Stack: Next.js 14 (App Router) + Tailwind CSS + Framer Motion.

## Cara menjalankan di Antygrafity IDE

1. Ekstrak/upload seluruh folder ini ke workspace IDE.
2. Install dependency:
   ```
   npm install
   ```
3. Jalankan development server:
   ```
   npm run dev
   ```
4. Buka `http://localhost:3000`.

## Struktur

- `app/layout.tsx` — root layout, font (IBM Plex Mono + Inter), memuat StatusBar
- `app/page.tsx` — menyusun semua section
- `components/StatusBar.tsx` — signature element: status bar ala IDE yang melacak section aktif & progress scroll
- `components/Hero.tsx`, `About.tsx`, `Skills.tsx`, `Projects.tsx`, `Blog.tsx`, `Contact.tsx` — tiap section

## Yang masih perlu kamu isi (ditandai `[...]` di kode)

- `components/About.tsx` — cerita singkat tentang dirimu
- `components/Skills.tsx` — sesuaikan daftar & persentase skill
- `components/Projects.tsx` — proyek ketiga, dan detail proyek SIKLUS/Aixel jika ingin diperbarui
- `components/Blog.tsx` — isi tulisan blog asli, atau ganti `href="#"` dengan link artikel
- `components/Contact.tsx` — email, GitHub, LinkedIn asli

## Deploy

Push ke GitHub lalu deploy ke [Vercel](https://vercel.com) (gratis untuk project personal, otomatis kompatibel dengan Next.js).

## Catatan desain

- Palet: `#0B0E14` (ink), `#1A1F2B` (surface), `#E8A33D` (amber, accent utama), `#8B9EFF` (lilac, accent sekunder)
- Tipografi: IBM Plex Mono (heading/label), Inter (body)
- Signature element: status bar bawah yang meniru status bar IDE (VS Code-style), melacak section aktif secara real-time
