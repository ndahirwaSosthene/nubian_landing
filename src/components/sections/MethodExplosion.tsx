'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function MethodExplosion() {
  const containerRef = useRef<HTMLDivElement>(null);
  const centerRef = useRef<HTMLDivElement>(null);
  const satellitesRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=200%",
          pin: true,
          scrub: 1,
        }
      });

      // Initial state
      tl.to(centerRef.current, { scale: 1.5, duration: 1 })
        .to(centerRef.current, { opacity: 0, duration: 0.5 }, ">-0.2")
        .from(satellitesRef.current!.children, { 
          scale: 0, 
          opacity: 0, 
          x: 0, 
          y: 0, 
          stagger: 0.1,
          duration: 1 
        }, "<");

      // Orbit animation simulation (expanding outward)
      const satellites = gsap.utils.toArray('.satellite');
      satellites.forEach((sat: any, i) => {
        const angle = (i / satellites.length) * Math.PI * 2;
        const radius = 300; // px
        
        tl.to(sat, {
          x: Math.cos(angle) * radius,
          y: Math.sin(angle) * radius,
          duration: 2,
          ease: "power2.out"
        }, "<");
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  const methods = [
    "Grammar", "Vocabulary", "Pronunciation", "Culture", 
    "Listening", "Speaking", "Reading", "Writing"
  ];

  return (
    <section ref={containerRef} className="h-screen w-full bg-black flex items-center justify-center overflow-hidden relative">
      <div ref={centerRef} className="absolute z-20 w-64 h-64 rounded-full bg-gradient-to-br from-[#FFD700] to-[#FF6B00] flex items-center justify-center shadow-[0_0_100px_rgba(255,215,0,0.3)]">
        <h2 className="text-3xl font-bold text-black text-center px-4">Complete Mastery</h2>
      </div>

      <div ref={satellitesRef} className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {methods.map((method, i) => (
          <div key={i} className="satellite absolute w-32 h-32 rounded-full bg-zinc-800 border border-white/20 flex items-center justify-center backdrop-blur-md">
            <span className="font-bold text-sm">{method}</span>
          </div>
        ))}
      </div>
      
      <div className="absolute bottom-10 text-center w-full opacity-50">
        <p>Scroll to deconstruct the method</p>
      </div>
    </section>
  );
}
