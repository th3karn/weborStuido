import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Stars, RoundedBox, PerformanceMonitor, Preload, ContactShadows, MeshReflectorMaterial, Box } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";

// --- Materials ---
const matteBodyMaterial = new THREE.MeshPhysicalMaterial({
  color: "#1e293b", // Slate 800
  roughness: 0.8,
  metalness: 0.2,
  clearcoat: 0.1,
});

const glossyScreenMaterial = new THREE.MeshPhysicalMaterial({
  color: "#020617", // Slate 950
  roughness: 0.1,
  metalness: 0.8,
  clearcoat: 1.0,
  clearcoatRoughness: 0.1,
  envMapIntensity: 2.0,
});

const backgroundShapeMaterial = new THREE.MeshPhysicalMaterial({
  color: "#3B82F6",
  transparent: true,
  opacity: 0.3,
  roughness: 0.4,
  transmission: 0.9,
  thickness: 2,
});

// --- Procedural MacBook ---
const RealisticLaptop = ({ position, rotationInitial }: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Group>(null);

  // GSAP Infinite Loop (Yoyo)
  useEffect(() => {
    if (!meshRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(meshRef.current.position, {
        y: "+=0.3",
        duration: 4,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
      gsap.to(meshRef.current.rotation, {
        y: "+=0.1",
        x: "-=0.05",
        duration: 5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    });
    return () => ctx.revert();
  }, []);

  // Subtle Mouse Parallax
  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 0.5 + position[0], 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.pointer.y * 0.5 + position[1], 0.05);
    // Subtle rotation lean based on mouse
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.pointer.y * 0.1, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.1, 0.05);
  });

  return (
    <group ref={groupRef} position={position} rotation={rotationInitial}>
      <group ref={meshRef}>
        {/* Screen Top Half */}
        <group position={[0, 1.2, -1]} rotation={[0.2, 0, 0]}>
          <RoundedBox args={[3.2, 2.1, 0.08]} radius={0.04} smoothness={4} material={matteBodyMaterial}>
             {/* Glossy Screen inset slightly */}
             <Box args={[3.0, 1.9, 0.01]} position={[0, 0, 0.041]} material={glossyScreenMaterial} />
          </RoundedBox>
        </group>
        {/* Base Bottom Half */}
        <RoundedBox args={[3.2, 0.15, 2.2]} radius={0.05} smoothness={4} position={[0, 0, 0]} material={matteBodyMaterial}>
             {/* Keyboard Indentation (Simulated) */}
             <Box args={[2.8, 0.01, 1.0]} position={[0, 0.076, -0.2]} material={new THREE.MeshStandardMaterial({ color: "#0f172a" })} />
             {/* Trackpad Indentation */}
             <Box args={[1.0, 0.01, 0.6]} position={[0, 0.076, 0.7]} material={new THREE.MeshStandardMaterial({ color: "#1e293b", roughness: 1 })} />
        </RoundedBox>
      </group>
    </group>
  );
};

// --- Procedural iPhone ---
const RealisticPhone = ({ position, rotationInitial }: any) => {
  const groupRef = useRef<THREE.Group>(null);
  const meshRef = useRef<THREE.Group>(null);

  useEffect(() => {
    if (!meshRef.current) return;
    const ctx = gsap.context(() => {
      // Opposite floating direction stagger
      gsap.to(meshRef.current.position, {
        y: "-=0.25",
        duration: 4.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: 0.5
      });
      gsap.to(meshRef.current.rotation, {
        y: "-=0.15",
        z: "+=0.08",
        duration: 5.5,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    });
    return () => ctx.revert();
  }, []);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.position.x = THREE.MathUtils.lerp(groupRef.current.position.x, state.pointer.x * 0.3 + position[0], 0.05);
    groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, state.pointer.y * 0.3 + position[1], 0.05);
    groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, state.pointer.y * 0.15, 0.05);
    groupRef.current.rotation.y = THREE.MathUtils.lerp(groupRef.current.rotation.y, state.pointer.x * 0.15, 0.05);
  });

  return (
    <group ref={groupRef} position={position} rotation={rotationInitial}>
      <group ref={meshRef}>
        <RoundedBox args={[1.2, 2.5, 0.15]} radius={0.15} smoothness={4} material={matteBodyMaterial}>
           {/* Glossy Front Screen */}
           <Box args={[1.1, 2.4, 0.01]} position={[0, 0, 0.076]} material={glossyScreenMaterial} />
           {/* Camera Bump */}
           <RoundedBox args={[0.4, 0.4, 0.05]} radius={0.08} smoothness={2} position={[-0.3, 0.9, -0.08]} material={glossyScreenMaterial} />
        </RoundedBox>
      </group>
    </group>
  );
};

// --- Background Depth Shapes ---
const BackgroundShape = ({ position, scale, rotationInitial }: any) => {
  const meshRef = useRef<THREE.Group>(null);
  
  useEffect(() => {
    if (!meshRef.current) return;
    const ctx = gsap.context(() => {
      gsap.to(meshRef.current.position, {
        y: "+=0.5",
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
        delay: Math.random() * 2
      });
      gsap.to(meshRef.current.rotation, {
        x: "+=0.2",
        y: "-=0.2",
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <group ref={meshRef} position={position} rotation={rotationInitial}>
      {/* Fog handles the depth blur, transmission handles the soft premium look. */}
      <Sphere args={[1, 32, 32]} scale={scale} material={backgroundShapeMaterial} />
    </group>
  );
};

export default function ThreeBackground() {
  const [dpr, setDpr] = useState(1.5);

  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-auto">
      <Canvas camera={{ position: [0, 0, 8], fov: 45 }} dpr={dpr} gl={{ powerPreference: "high-performance", antialias: true }}>
        {/* Depth Fog allows shapes pushed back to naturally "blur" and fade out */}
        <fog attach="fog" args={["#0A0A0A", 5, 20]} />
        
        <PerformanceMonitor onIncline={() => setDpr(2)} onDecline={() => setDpr(1)} />
        
        {/* Lighting: Adds "Glow Effect on edges" using strong positioned rim lights */}
        <ambientLight intensity={0.4} />
        <directionalLight position={[5, 10, 5]} intensity={1.5} color="#ffffff" castShadow />
        <spotLight position={[-10, 10, -5]} intensity={2.5} color="#06B6D4" distance={25} angle={0.5} penumbra={1} /> {/* Cyan Edge Rim */}
        <spotLight position={[10, -10, -10]} intensity={2.5} color="#8B5CF6" distance={25} angle={0.5} penumbra={1} /> {/* Purple Edge Rim */}
        
        {/* Devices */}
        <RealisticLaptop position={[2.5, 0.5, -2]} rotationInitial={[0.2, -0.4, 0]} />
        <RealisticPhone position={[-3, 1.5, -1]} rotationInitial={[0.1, 0.5, -0.1]} />

        {/* Floating Background Depth Bubbles */}
        <BackgroundShape position={[-4, -1, -6]} scale={1.2} />
        <BackgroundShape position={[5, 3, -8]} scale={2.0} />
        
        {/* Soft Floor Shadows & Subtle Reflection Plane */}
        <group position={[0, -2.5, 0]}>
          <ContactShadows opacity={0.6} scale={20} blur={2.5} far={4} color="#000000" />
          <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -0.01, 0]}>
            <planeGeometry args={[50, 50]} />
            <MeshReflectorMaterial
              blur={[300, 100]}
              resolution={1024}
              mixBlur={1}
              mixStrength={15}
              roughness={1}
              depthScale={1.2}
              minDepthThreshold={0.4}
              maxDepthThreshold={1.4}
              color="#0f172a"
              metalness={0.5}
              mirror={0.2}
            />
          </mesh>
        </group>

        {/* Ambient Particles */}
        <Stars radius={50} depth={50} count={1000} factor={2} saturation={0} fade speed={0.5} />
        
        <Preload all />
      </Canvas>
    </div>
  );
}
