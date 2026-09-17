// =====================================================================
// Data semua project. Grid di Projects.tsx dan halaman detail di
// app/projects/[slug]/page.tsx sama-sama ambil data dari sini.
//
// slug       -> dipakai di URL: /projects/[slug]
// thumbnail  -> gambar untuk card di grid (taruh di /public/projects/)
// previews   -> daftar gambar/screenshot untuk halaman detail (bisa 1
//               atau lebih; kalau lebih dari 1, otomatis jadi slide)
// links      -> isi null kalau belum ada link ("No Link" akan tampil otomatis)
// =====================================================================

export type Project = {
  slug: string;
  name: string;
  tag: string;
  desc: string;
  detail: string;
  technologies: string[];
  keyFeatures: string[];
  links: {
    live: string | null;
  };
  thumbnail: string;
  previews: string[];
};

export const PROJECTS: Project[] = [
  {
    slug: "laksana",
    name: "LAKSANA",
    tag: "Web Platform · Competition",
    desc: "Platform manajemen sampah berbasis web yang menghubungkan warga, petugas kolektor, dan admin lokal.",
    detail:
      "Modul utama: penjadwalan & tracking kapasitas TPS, bank sampah digital dengan sistem poin, dan integrasi mitra daur ulang. Dibangun untuk kompetisi Creanova dengan fokus MVP yang bisa langsung dipakai komunitas.",
    technologies: ["Next.js", "Tailwind CSS", "Supabase"],
    keyFeatures: [
      "Penjadwalan & tracking kapasitas TPS",
      "Bank sampah digital dengan sistem poin",
      "Integrasi mitra daur ulang",
      "Role-based access: warga, petugas, admin",
    ],
    links: {
      live: "https://laksana-app.vercel.app/",
    },
    thumbnail: "/laksana.jpg",
    previews: [
      "/fulllandingpage.png",
      "/laksanalogin.jpg",
      "/homeuserlaksana.jpg",
    ],
  },
  {
    slug: "aixel-design-copywriting",
    name: "Aixel — Design & Carousel Copywriting",
    tag: "Design & Copywriting",
    desc: "Design konten carousel untuk brand Aixel dengan identitas tipografi monospace.",
    detail:
      "Membahas pergeseran ekspektasi peran junior developer — dari sekadar menulis kode menjadi kemandirian, judgment, dan penggunaan AI tool secara kritis. Gaya penulisan: hook naratif, nada percakapan, tanpa bahasa template.",
    technologies: ["Content Strategy", "Visual Identity"],
    keyFeatures: [
      "Hook naratif, bukan pernyataan generik",
      "Tipografi monospace sebagai identitas brand",
      "Copywriting bahasa Inggris dengan nada percakapan",
    ],
    links: {
      live: "https://www.instagram.com/aixel_id/"
    },
    thumbnail: "/aixellogo.jpg",
    previews: ["/aixelpost.png"],
  },
  {
    slug: "last-chance-3d-book",
    name: "Last Chance – Interactive 3D Book Model & Animation",
    tag: "3D MODELING",
    desc: "Perancangan aset 3D interaktif model buku dengan animasi sampul dan halaman presisi untuk integrasi game engine.",
    detail:
      "Proyek ini berfokus pada perancangan aset 3D interaktif berupa model buku dengan mekanik sampul dan lembaran halaman yang teranimasi secara presisi. Dibangun menggunakan hirarki empty node sebagai engsel rotasi, aset ini dioptimalkan khusus untuk kebutuhan visual storytelling dan integrasi langsung ke dalam game engine.",
    technologies: ["Blender 4.5", "Unity (URP)"],
    keyFeatures: ["Rigging & Hierarchical Pivot: Struktur engsel presisi untuk interaksi buka-tutup buku dan lembaran halaman.",
      "Custom Flip-Page Animations: Sequence animasi pergerakan 19 lembar halaman yang halus dan responsif.",
      "Low-Poly & Engine-Ready Optimization: Geometry yang efisien dan siap diintegrasikan langsung ke game engine."],
    links: { live: "/viewer/last-chance-3d-book" },
    thumbnail: "/blender.jfif",
    previews: ["/bookblander.jpg"],
  },
  {
    slug: "ruangq-marketplace-app",
    name: "RuangQ – Full Mobile E-Commerce & Marketplace App Design",
    tag: "UI/UX DESIGN & PROTOTYPING",
    desc: "Desain antarmuka marketplace mobile end-to-end yang komprehensif, mencakup alur belanja lengkap dan design system yang konsisten.",
    detail:
      "RuangQ adalah aplikasi marketplace berbasis mobile end-to-end yang dirancang dengan sistem antarmuka komprehensif. Mencakup alur dari halaman utama, fitur pencarian multi-kategori, sistem filter produk, alur belanja dan checkout, manajemen akun, hingga pustaka komponen (design system) yang konsisten.",
    technologies: ["Figma Mobile", "UI/UX Design"],
    keyFeatures: ["Comprehensive E-Commerce Architecture: Cakupan alur aplikasi lengkap mulai dari Onboarding, Discovery (Pencarian & Kategori), Cart, Checkout, hingga Profil Pengguna.",
      "Component-Based Design System: Pemanfaatan komponen reusabel, varian warna/ikon, serta aset tombol yang terstruktur untuk efisiensi skalabilitas UI.",
      "Structured Search & Filtering: Fitur rekomendasi pencarian, pencarian populer, dan filter kategori spesifik (Makanan, Fashion, Alat Mandi, Bahan Pokok)."],
    links: { live: "https://www.figma.com/proto/qUlRMqZLtu37oHmhPbvh7n/RuangQ?node-id=623-7&t=qMnbZNdbkCEQtRxd-1&scaling=scale-down&content-scaling=fixed&page-id=606%3A4&starting-point-node-id=606%3A8&show-proto-sidebar=1" },
    thumbnail: "/ruqilogo.jpg",
    previews: ["/tampilanruqi.jpg"],
  },
  {
    slug: "personal-tech-blog",
    name: "Personal Tech & Software Engineering Blog",
    tag: "WEB DEVELOPMENT & TECHNICAL WRITING",
    desc: "Platform berbagi artikel teknis dan dokumentasi software engineering yang bersih dan cepat.",
    detail:
      "Platform web blog pribadi yang dirancang untuk membagikan artikel teknis, catatan pengembangan perangkat lunak, opini pemrograman, serta dokumentasi pembelajaran seputar dunia software engineering. Dibangun dengan antarmuka yang responsif, fokus pada readability (kenyamanan membaca), dan performa pemuatan yang cepat.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Vercel"],
    keyFeatures: ["Clean & Readable Article Layout: Tipografi rapi dengan dukungan syntax highlighting untuk kode program dan navigasi intuitif.",
      "Dynamic Article Filtering & Search: Sistem kategorisasi tag dan pencarian artikel dinamis untuk memudahkan eksplorasi topik.",
      "Fast Static & SSR Delivery: Dioptimalkan untuk performa pemuatan yang cepat dan SEO-friendly di semua perangkat."],
    links: { live: "https://blog-rafie.vercel.app/" },
    thumbnail: "/logoblog.jpg",
    previews: ["/bloglandingpage.jpg", "/blogtampilantugas.jpg",],
  },
  {
    slug: "eduverse-learning-web",
    name: "EduVerse – Interactive Educational Web Platform Design",
    tag: "UI/UX DESIGN",
    desc: "Platform berbagi artikel teknis dan dokumentasi software engineering yang bersih dan cepat.",
    detail:
      "EduVerse adalah prototype platform web edukasi interaktif versi desktop yang dirancang untuk memberikan pengalaman belajar yang terstruktur. Antarmukanya mencakup navigasi modul pembelajaran, tampilan kuis, serta dasbor pemantauan progres belajar yang responsif di layar komputer.",
    technologies: ["Figma", "Prototype UI/UX Design"],
    keyFeatures: ["Structured Desktop Dashboard: Layout dasbor lebar untuk modul dan pemantauan progres belajar.",
      "Interactive Module & Quiz UI: Antarmuka kuis dan materi yang dioptimalkan untuk navigasi desktop.",
      "Student-Centric Web Navigation: Alur eksplorasi materi yang bersih untuk fokus belajar."],
    links: { live: "https://www.figma.com/proto/WDb5jqeHxluhIizNWwEtrq/Project-UI-lomba?node-id=42-16&t=Sj5my0fn5XLJ5Y4l-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1" },
    thumbnail: "/eduversethumbnail.jpg",
    previews: ["/prototypeeduverse.jpg"],
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((p) => p.slug === slug);
}
