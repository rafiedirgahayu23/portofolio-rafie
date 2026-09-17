import type { Metadata } from "next";
import { IBM_Plex_Mono, Inter } from "next/font/google";
import "./globals.css";
import StatusBar from "@/components/StatusBar";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-plex-mono",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Rafie — Web Developer & UI/UX Designer",
  description:
    "Portofolio Rafie: proyek web development, UI/UX design, dan tulisan seputar teknologi.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="id" className={`${plexMono.variable} ${inter.variable}`}>
      <body className="font-sans antialiased">
        <Preloader />
        <Navbar />
        <StatusBar />
        <main className="pb-10">{children}</main>
      </body>
    </html>
  );
}
