"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

function BookModel() {
  const { scene } = useGLTF("/models/BOOKANIMATION2.glb");
  return <primitive object={scene} />;
}

export default function BookViewer() {
  return (
    <div className="relative h-screen w-full bg-ink">
      {/* Tombol kembali */}
      <Link
        href="/#projects"
        className="absolute left-6 top-6 z-10 inline-flex items-center gap-2 rounded-md bg-ink/70 px-3 py-2 font-mono text-sm text-paper backdrop-blur-sm transition hover:text-amber"
      >
        <ArrowLeft className="h-4 w-4" />
        Back
      </Link>

      <Canvas dpr={[1, 1.5]} camera={{ position: [0, 1.2, 2.4], fov: 40 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[3, 5, 2]} intensity={1.4} />
        <directionalLight position={[-3, 2, -2]} intensity={0.5} />

        <Suspense fallback={null}>
          <BookModel />
        </Suspense>

        {/* OrbitControls manual: Pengguna bisa memutar dan mengontrol kamera */}
        <OrbitControls
          enableRotate={true}
          enableZoom={true}
          enablePan={false}
          minDistance={1.2}
          maxDistance={4.5}
        />
      </Canvas>
    </div>
  );
}

useGLTF.preload("/models/BOOKANIMATION2.glb");