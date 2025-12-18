'use client';

import { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export default function Problem() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.problem-card');
      
      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: 'none',
        scrollTrigger: {
          trigger: triggerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          end: () => '+=' + (contentRef.current?.offsetWidth || 0),
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const cards = [
    {
      id: 1,
      title: "The Old Way",
      subtitle: "Generic & Abstract",
      text: "Duolingo taught you to say 'The elephant is blue' 🐘💙",
      image: "https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=1000&auto=format&fit=crop", // Elephant
      filter: "grayscale(100%) blur(2px)",
      opacity: 0.5
    },
    {
      id: 2,
      title: "The Nubian Way",
      subtitle: "Real & Vital",
      text: "We teach you to negotiate rent, order medicine, and joke with colleagues.",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1000&auto=format&fit=crop", // Friends laughing
      filter: "none",
      opacity: 1
    },
    {
      id: 3,
      title: "Context Matters",
      subtitle: "Cultural Fluency",
      text: "Don't just translate words. Understand the soul of the conversation.",
      image: "https://images.unsplash.com/photo-1529359744902-d915c5e9af0f?q=80&w=1000&auto=format&fit=crop", // Cultural scene
      filter: "none",
      opacity: 1
    }
  ];

  return (
    <section ref={sectionRef} className="relative bg-zinc-900 text-white overflow-hidden">
      <div ref={triggerRef} className="flex h-screen w-full items-center overflow-hidden">
        <div ref={contentRef} className="flex gap-20 px-20">
          <div className="flex min-w-[50vw] flex-col justify-center">
            <h2 className="text-6xl font-bold mb-6">The Problem Dissolves</h2>
            <p className="text-xl text-gray-400 max-w-md">
              Most language apps treat African languages like museum artifacts. We treat them like living, breathing tools for connection.
            </p>
          </div>
          
          {cards.map((card) => (
            <div key={card.id} className="problem-card relative flex h-[70vh] w-[40vw] min-w-[40vw] flex-col overflow-hidden rounded-3xl bg-zinc-800 border border-white/10">
              <div className="absolute inset-0 z-0">
                <img 
                  src={card.image} 
                  alt={card.title} 
                  className="h-full w-full object-cover transition-all duration-500"
                  style={{ filter: card.filter, opacity: card.opacity }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-transparent" />
              </div>
              <div className="relative z-10 mt-auto p-10">
                <h3 className="text-sm font-medium uppercase tracking-wider text-[#FFD700]">{card.subtitle}</h3>
                <h4 className="mt-2 text-4xl font-bold">{card.title}</h4>
                <p className="mt-4 text-xl leading-relaxed">{card.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
