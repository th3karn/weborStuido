import React, { useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, Stars, RoundedBox, PerformanceMonitor, Preload } from "@react-three/drei";
import * as THREE from "three";

// Reusable glass material mapped to the trusted premium blue/cyan tokens
const glassMaterial = new THREE.MeshPhysicalMaterial({
  color: "#3B82F6",
  transparent: true,
  opacity: 0.7,
  roughness: 0.15,
  metalness: 0.6,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  transmission: 0.9,
  ior: 1.5,
  thickness: 2,
});

const glassMaterialCyan = new THREE.MeshPhysicalMaterial({
  color: "#06B6D4",
  transparent: true,
  opacity: 0.7,
  roughness: 0.1,
  metalness: 0.7,
  clearcoat: 1,
  clearcoatRoughness: 0.1,
  transmission: 0.9,
  ior: 1.5,
  thickness: 2,
});

// Abstract Laptop Representation
const AbstractLaptop = ({ position, scale, rotationIntensity }: any) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.pointer.y * Math.PI) / 10, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.pointer.x * Math.PI) / 10, 0.05);
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <Float speed={2} rotationIntensity={rotationIntensity} floatIntensity={2}>
        {/* Screen */}
        <RoundedBox args={[3, 2, 0.1]} radius={0.05} smoothness={4} position={[0, 1, 0]} material={glassMaterialCyan}>
          <meshBasicMaterial color="#ffffff" side={THREE.BackSide} />
        </RoundedBox>
        {/* Base */}
        <RoundedBox args={[3, 0.1, 2]} radius={0.05} smoothness={4} position={[0, -0.05, 1]} material={glassMaterial} />
      </Float>
    </group>
  );
};

// Abstract Phone Representation
const AbstractPhone = ({ position, scale, rotationIntensity }: any) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.pointer.y * Math.PI) / 8 + 0.2, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.pointer.x * Math.PI) / 8 - 0.2, 0.05);
  });

  return (
    <group ref={ref} position={position} scale={scale}>
      <Float speed={2.5} rotationIntensity={rotationIntensity} floatIntensity={1.5}>
        <RoundedBox args={[1.2, 2.4, 0.15]} radius={0.1} smoothness={4} material={glassMaterial}>
           <meshBasicMaterial color="#ffffff" side={THREE.BackSide} />
        </RoundedBox>
      </Float>
    </group>
  );
};

const AbstractShape = ({ position, scale, speed, rotationIntensity }: any) => {
  const ref = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, (state.pointer.y * Math.PI) / 8, 0.05);
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, (state.pointer.x * Math.PI) / 8, 0.05);
  });

  return (
    <group ref={ref} position={position}>
      <Float speed={speed} rotationIntensity={rotationIntensity} floatIntensity={2}>
        <Icosahedron args={[1, 0]} scale={scale} material={glassMaterialCyan} />
      </Float>
    </group>
  );
};

export default function ThreeBackground() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 10], fov: 45 }} dpr={dpr} gl={{ powerPreference: "high-performance", antialias: true }}>
        <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />
        
        <ambientLight intensity={0.8} />
        <directionalLight position={[10, 10, 10]} intensity={2} color="#06B6D4" />
        <directionalLight position={[-10, -10, -10]} intensity={1.5} color="#3B82F6" />
        <pointLight position={[0, 0, 0]} intensity={2} color="#8B5CF6" distance={15} />
        
        {/* Device Mockups */}
        <AbstractLaptop position={[3.5, 0, -2]} scale={1.2} rotationIntensity={0.5} />
        <AbstractPhone position={[-4, 1, -1]} scale={1} rotationIntensity={0.8} />

        {/* Abstract Floating Geometries */}
        <AbstractShape position={[-3, -3, -4]} scale={0.8} speed={1.5} rotationIntensity={1.2} />
        <AbstractShape position={[4, -2, -6]} scale={1.5} speed={1} rotationIntensity={0.8} />
        
        {/* Depth Particles */}
        <Stars radius={50} depth={50} count={1200} factor={3} saturation={0.5} fade speed={0.5} />
        
        <Preload all />
      </Canvas>
    </div>
  );
}
