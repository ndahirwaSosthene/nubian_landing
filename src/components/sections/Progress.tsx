'use client';

import { motion } from 'framer-motion';

export default function Progress() {
  return (
    <section className="min-h-[80vh] w-full bg-black flex flex-col items-center justify-center py-20">
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">Visualized Progress</h2>
        <p className="text-xl text-gray-400">See your journey from silence to speech.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl w-full px-4">
        <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6">Daily Streak</h3>
          <div className="flex gap-2 justify-between">
            {[...Array(7)].map((_, i) => (
              <div key={i} className="flex flex-col items-center gap-2">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${i < 5 ? 'bg-[#FFD700] text-black' : 'bg-zinc-800 text-gray-500'}`}>
                  {i < 5 ? '✓' : ''}
                </div>
                <span className="text-xs text-gray-500">Day {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-zinc-900 rounded-3xl p-8 border border-white/10">
          <h3 className="text-2xl font-bold mb-6">Fluency Arc</h3>
          <div className="relative h-40 bg-zinc-800 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: 0 }}
              whileInView={{ width: '65%' }}
              transition={{ duration: 1.5, ease: "easeOut" }}
              className="absolute top-0 left-0 h-full bg-gradient-to-r from-[#FFD700] to-[#FF6B00]"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <span className="text-4xl font-bold mix-blend-difference">65% Fluent</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
