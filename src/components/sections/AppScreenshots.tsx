'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export default function AppScreenshots() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const mouseX = useSpring(0, { stiffness: 50, damping: 20 });
  const mouseY = useSpring(0, { stiffness: 50, damping: 20 });

  function handleMouseMove(e: React.MouseEvent) {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    const x = (clientX / innerWidth - 0.5) * 50;
    const y = (clientY / innerHeight - 0.5) * 50;
    mouseX.set(x);
    mouseY.set(y);
  }

  return (
    <section 
      ref={containerRef} 
      onMouseMove={handleMouseMove}
      className="min-h-[150vh] w-full bg-zinc-950 relative overflow-hidden flex flex-col items-center py-20"
    >
      <div className="text-center mb-20 z-10">
        <h2 className="text-6xl font-bold mb-4">Watch It Work</h2>
        <p className="text-xl text-gray-400">Experience the interface designed for fluency.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-7xl px-4 relative">
        {/* Column 1 */}
        <motion.div style={{ y: y1, x: mouseX, rotateY: mouseX }} className="flex flex-col gap-10 pt-20">
          <div className="h-[600px] w-full bg-zinc-800 rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black flex items-center justify-center">
                <span className="text-2xl font-bold text-zinc-700">Onboarding</span>
             </div>
          </div>
          <div className="h-[600px] w-full bg-zinc-800 rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black flex items-center justify-center">
                <span className="text-2xl font-bold text-zinc-700">Profile</span>
             </div>
          </div>
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2, x: mouseX, rotateX: mouseY }} className="flex flex-col gap-10">
          <div className="h-[600px] w-full bg-zinc-800 rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-b from-[#FFD700] to-orange-500 flex items-center justify-center">
                <span className="text-2xl font-bold text-black">Lesson 1</span>
             </div>
          </div>
          <div className="h-[600px] w-full bg-zinc-800 rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black flex items-center justify-center">
                <span className="text-2xl font-bold text-zinc-700">Quiz</span>
             </div>
          </div>
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3, x: mouseX, rotateY: mouseY }} className="flex flex-col gap-10 pt-40">
          <div className="h-[600px] w-full bg-zinc-800 rounded-[3rem] border-8 border-zinc-900 shadow-2xl overflow-hidden relative">
             <div className="absolute inset-0 bg-gradient-to-b from-zinc-800 to-black flex items-center justify-center">
                <span className="text-2xl font-bold text-zinc-700">Progress</span>
             </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
