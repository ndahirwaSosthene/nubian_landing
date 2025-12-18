'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const personas = [
  {
    id: 'immigrant',
    title: 'The Immigrant Worker',
    quote: "I needed to speak to my patients, not just read a textbook.",
    story: "Dr. Adebayo moved to London but wanted to connect with his Yoruba roots to serve his community better.",
    color: '#FF6B00'
  },
  {
    id: 'linguist',
    title: 'The Linguist',
    quote: "Finally, a platform that respects the complexity of Bantu grammar.",
    story: "Sarah studies comparative linguistics and found other apps too superficial for serious academic study.",
    color: '#0057B7'
  },
  {
    id: 'enthusiast',
    title: 'The Culture Enthusiast',
    quote: "I fell in love with Afrobeat and wanted to understand the lyrics.",
    story: "Marcus wanted to go beyond the beat and understand the message in the music he loves.",
    color: '#00A86B'
  }
];

export default function Personas() {
  const [active, setActive] = useState(0);

  return (
    <section className="min-h-screen w-full bg-zinc-900 flex flex-col items-center justify-center py-20">
      <h2 className="text-5xl font-bold mb-16">For Everyone</h2>
      
      <div className="flex flex-col md:flex-row w-full max-w-6xl gap-10 px-4">
        <div className="flex-1 flex flex-col gap-4">
          {personas.map((p, i) => (
            <button
              key={p.id}
              onClick={() => setActive(i)}
              className={`text-left p-8 rounded-2xl transition-all duration-300 ${
                active === i ? 'bg-white/10 scale-105' : 'bg-transparent hover:bg-white/5'
              }`}
            >
              <h3 className={`text-2xl font-bold mb-2 ${active === i ? 'text-[#FFD700]' : 'text-gray-400'}`}>
                {p.title}
              </h3>
              <p className="text-gray-500 line-clamp-2">{p.quote}</p>
            </button>
          ))}
        </div>

        <div className="flex-[1.5] relative h-[500px] bg-black rounded-3xl overflow-hidden border border-white/10">
          <AnimatePresence mode="wait">
            <motion.div
              key={active}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 p-12 flex flex-col justify-center"
            >
              <div 
                className="absolute top-0 right-0 w-64 h-64 rounded-full blur-[100px] opacity-50"
                style={{ backgroundColor: personas[active].color }}
              />
              
              <h3 className="text-4xl font-bold mb-8 relative z-10">"{personas[active].quote}"</h3>
              <p className="text-xl text-gray-300 leading-relaxed relative z-10">
                {personas[active].story}
              </p>
              
              <div className="mt-auto flex items-center gap-4 relative z-10">
                <div className="w-12 h-12 rounded-full bg-gray-700" />
                <div>
                  <p className="font-bold">Verified Learner</p>
                  <p className="text-sm text-gray-500">Nubian Pro Member</p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
