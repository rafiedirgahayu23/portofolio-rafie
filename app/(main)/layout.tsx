import StatusBar from "@/components/StatusBar";
import Preloader from "@/components/Preloader";
import Navbar from "@/components/Navbar";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Preloader />
      <Navbar />
      <StatusBar />
      <main className="pb-10">{children}</main>
    </>
  );
}
