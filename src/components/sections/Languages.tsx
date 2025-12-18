'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';

const languages = [
  {
    id: 'swahili',
    name: 'Swahili',
    region: 'East Africa',
    color: 'from-blue-600 to-blue-900',
    description: 'The lingua franca of East Africa. Spoken by over 200 million people.',
    greeting: 'Hujambo'
  },
  {
    id: 'yoruba',
    name: 'Yoruba',
    region: 'West Africa',
    color: 'from-orange-500 to-red-700',
    description: 'A tonal language with rich proverbs and cultural depth.',
    greeting: 'Bawo ni'
  },
  {
    id: 'kinyarwanda',
    name: 'Kinyarwanda',
    region: 'Central Africa',
    color: 'from-green-500 to-emerald-800',
    description: 'The poetic language of the Land of a Thousand Hills.',
    greeting: 'Muraho'
  }
];

export default function Languages() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <section className="min-h-screen w-full py-20 px-4 flex flex-col items-center justify-center bg-black">
      <h2 className="text-5xl md:text-7xl font-bold mb-20 text-center">Choose Your Path</h2>
      
      <div className="flex flex-col md:flex-row w-full max-w-7xl h-[80vh] gap-4">
        {languages.map((lang) => (
          <motion.div
            key={lang.id}
            layout
            onHoverStart={() => setHovered(lang.id)}
            onHoverEnd={() => setHovered(null)}
            className={`relative flex-1 rounded-3xl overflow-hidden cursor-pointer transition-all duration-500 ease-out ${
              hovered === lang.id ? 'flex-[2]' : 'flex-1'
            }`}
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${lang.color} opacity-80`} />
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-20 mix-blend-overlay" />
            
            <div className="absolute inset-0 p-10 flex flex-col justify-between z-10">
              <div>
                <h3 className="text-2xl font-medium opacity-80">{lang.region}</h3>
                <h2 className="text-5xl md:text-6xl font-bold mt-2">{lang.name}</h2>
              </div>
              
              <div className={`transition-opacity duration-500 ${hovered === lang.id ? 'opacity-100' : 'opacity-0 md:opacity-100'}`}>
                <p className="text-4xl font-serif italic mb-4">"{lang.greeting}"</p>
                <p className="text-lg max-w-md">{lang.description}</p>
                
                <motion.button 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-8 px-8 py-3 bg-white text-black rounded-full font-bold"
                >
                  Start Learning
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
