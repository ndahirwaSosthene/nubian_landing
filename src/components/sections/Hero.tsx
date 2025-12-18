'use client';

import { useRef, useLayoutEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Stars, Float, Text3D, Center } from '@react-three/drei';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import * as THREE from 'three';

function AnimatedBackground() {
  const meshRef = useRef<THREE.Points>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      meshRef.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <group>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
      <Float speed={2} rotationIntensity={1} floatIntensity={1}>
         {/* Abstract shapes representing "silence" before speech */}
         <points ref={meshRef}>
            <sphereGeometry args={[20, 64, 64]} />
            <pointsMaterial size={0.1} color="#FFD700" transparent opacity={0.6} sizeAttenuation />
         </points>
      </Float>
    </group>
  );
}

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(textRef.current, {
        opacity: 0,
        y: 100,
        duration: 1.5,
        ease: 'power3.out',
        delay: 0.5,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 30], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <AnimatedBackground />
        </Canvas>
      </div>

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h1 ref={textRef} className="max-w-5xl text-6xl font-bold leading-tight tracking-tight md:text-8xl lg:text-9xl mix-blend-difference">
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Your Voice.
          </span>
          <span className="block text-[#FFD700]">
            Your Heritage.
          </span>
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
            Your Fluency.
          </span>
        </h1>
        <p className="mt-8 max-w-2xl text-lg text-gray-400 md:text-xl">
          The journey from silence to speech. Master African languages through an immersive, visual adventure.
        </p>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce text-white/50">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  );
}
