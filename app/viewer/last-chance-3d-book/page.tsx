import dynamic from "next/dynamic";

// Canvas/WebGL cuma bisa jalan di browser, jadi di-load client-side aja
// (ssr: false) supaya tidak error waktu Next.js coba render di server.
const BookViewer = dynamic(() => import("@/components/BookViewer"), {
  ssr: false,
});

export default function BookViewerPage() {
  return <BookViewer />;
}
