"use client";

import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls, useGLTF } from "@react-three/drei";
import { Suspense } from "react";
import { motion } from "framer-motion";

type Annotation = {
  label: string;
  position: [number, number, number];
};

const annotations: Annotation[] = [
  { label: "Laser Diode", position: [0.2, 0.4, 0.3] },
  { label: "DOE", position: [-0.2, 0.5, 0.1] },
  { label: "IR Grid", position: [0, -0.1, 0.4] },
  { label: "Camera Module", position: [-0.3, 0.2, -0.2] },
  { label: "Microcontroller", position: [0, -0.4, -0.3] },
];

const PlaceholderModel = () => {
  const { scene } = useGLTF("/model.glb");
  return <primitive object={scene} scale={3} />;
};

const Loader = () => (
  <Html>
    <div className="rounded-full border border-white/20 px-6 py-2 text-xs uppercase tracking-[0.4em] text-white">
      Initializing Hologram…
    </div>
  </Html>
);

const ThreeDViewer = () => {
  return (
    <div className="relative h-[480px] w-full overflow-hidden rounded-3xl border border-white/10 bg-black/60">
      <Canvas camera={{ position: [2, 2, 2], fov: 40 }}>
        <color attach="background" args={["#03030f"]} />
        <ambientLight intensity={0.35} />
        <pointLight position={[4, 4, 2]} intensity={1.2} color="#00eaff" />
        <pointLight position={[-4, -2, -3]} intensity={0.7} color="#b44cff" />
        <Suspense fallback={<Loader />}>
          <PlaceholderModel />
          <OrbitControls enablePan={false} />
          {annotations.map((hotspot) => (
            <Html key={hotspot.label} position={hotspot.position}>
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="rounded-full border border-[#00eaff]/40 bg-[#00eaff]/10 px-3 py-1 text-[10px] uppercase tracking-[0.4em] text-[#00eaff]"
              >
                {hotspot.label}
              </motion.div>
            </Html>
          ))}
        </Suspense>
      </Canvas>
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/40" />
    </div>
  );
};

useGLTF.preload("/model.glb");

export default ThreeDViewer;

