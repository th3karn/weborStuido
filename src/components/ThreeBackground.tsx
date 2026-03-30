import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Stars } from "@react-three/drei";
import * as THREE from "three";

const GlassObject = ({ position, scale, speed, rotationIntensity, children }: any) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.pointer.y * Math.PI) / 8, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.pointer.x * Math.PI) / 8, 0.05);
  });

  return (
    <group ref={ref}>
      <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={1.5}>
        <Icosahedron args={[1, 0]} position={position} scale={scale}>
          <meshPhysicalMaterial
            transparent
            opacity={0.8}
            roughness={0.1}
            metalness={0.5}
            clearcoat={1}
            clearcoatRoughness={0.1}
            color="#A855F7"
          />
        </Icosahedron>
        {children}
      </Float>
    </group>
  );
};

export const ThreeBackground = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={[1, 1.5]} gl={{ powerPreference: "high-performance", antialias: false }}>
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} color="#A855F7" />
        <directionalLight position={[-10, -10, -10]} intensity={1} color="#3B82F6" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#06B6D4" distance={10} />
        
        <GlassObject position={[3, 0.5, -3]} scale={1.8} speed={1.5} rotationIntensity={1.2} />
        <GlassObject position={[-4, -1, -5]} scale={1.2} speed={2} rotationIntensity={0.8} />
        <GlassObject position={[0, -3.5, -4]} scale={0.8} speed={1} rotationIntensity={1.5} />

        <Stars radius={50} depth={50} count={1000} factor={3} saturation={0.5} fade speed={0.5} />
      </Canvas>
    </div>
  );
};
