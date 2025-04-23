import React from "react";
import { Canvas } from "@react-three/fiber";
import { Html, OrbitControls } from "@react-three/drei";

const Footer = () => {
  return (
    <div className="relative w-full h-[500px]">
      <Canvas camera={{ position: [0, 1, 5], fov: 75 }}>
        <ambientLight intensity={0.4} />

        <spotLight
          position={[0, -3, 2]}
          angle={1.2}
          penumbra={1}
          intensity={2}
          color="#ff6a00"
          castShadow
        />

        <mesh rotation={[Math.PI / 8, 0, 0]} position={[0, -0.5, 0]}>
          <torusGeometry args={[4.5, 0.4, 16, 100, Math.PI]} />
          <meshBasicMaterial color="#ff6a00" transparent opacity={0.4} />
        </mesh>

        <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
          <planeGeometry args={[13, 10]} />
          <meshBasicMaterial color="#ff6a00" transparent opacity={0.2} />
        </mesh>

        <OrbitControls enableZoom={false} enableRotate={false} />

        <Html center>
          <div className="flex flex-col justify-center items-center text-center px-2 ">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white">
              DivyaKatha
            </h1>

            <h2 className="text-lg sm:text-xl font-semibold text-white mt-2">
              Stay Explore
            </h2>
            <p className="text-sm sm:text-base text-white mt-1">
              © 2025 DivyaKatha
            </p>
          </div>
        </Html>
      </Canvas>

      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-[800px] h-[300px] rounded-full bg-gradient-to-t from-orange-600 via-[#C82E2E] to-transparent blur-3xl opacity-80 z-0 pointer-events-none" />
    </div>
  );
};

export default Footer;
