'use client';

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const cards = [
  {
    id: 1,
    title: "Pimsleur-style Dialogue",
    description: "Learn through listening and speaking, not just reading.",
    color: "#FFD700", // Gold
    icon: "🎙️"
  },
  {
    id: 2,
    title: "Grammar Mastery",
    description: "Understand the structure without getting lost in rules.",
    color: "#FF6B00", // Orange
    icon: "🌳"
  },
  {
    id: 3,
    title: "Cultural Immersion",
    description: "Video snippets that transport you to the streets of Lagos or Nairobi.",
    color: "#0057B7", // Blue
    icon: "🌍"
  },
  {
    id: 4,
    title: "Spaced Repetition",
    description: "Review at the perfect moment to lock knowledge in long-term memory.",
    color: "#00A86B", // Green
    icon: "📅"
  },
  {
    id: 5,
    title: "AI-Powered Curriculum",
    description: "A path that adapts to your pace and learning style.",
    color: "#9C27B0", // Purple
    icon: "🧠"
  },
  {
    id: 6,
    title: "Real-World Application",
    description: "Scenarios that prepare you for the market, office, or hospital.",
    color: "#E91E63", // Pink
    icon: "🏥"
  }
];

function Card({ card, index, range, targetScale }: { card: any, index: number, range: number[], targetScale: number }) {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start end', 'start start']
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [2, 1]);
  const scale = useTransform(scrollYProgress, range, [1, targetScale]);

  return (
    <div ref={container} className="h-screen flex items-center justify-center sticky top-0">
      <motion.div 
        style={{ scale, backgroundColor: card.color, top: `calc(-5vh + ${index * 25}px)` }} 
        className="flex flex-col relative -top-[25%] h-[500px] w-[1000px] rounded-[25px] p-12 origin-top border border-white/10 shadow-2xl"
      >
        <div className="flex h-full gap-12">
          <div className="w-[40%] flex flex-col justify-center">
            <div className="text-6xl mb-4">{card.icon}</div>
            <h2 className="text-4xl font-bold text-black mb-4">{card.title}</h2>
            <p className="text-xl text-black/80">{card.description}</p>
          </div>
          <div className="relative w-[60%] h-full rounded-[25px] overflow-hidden bg-black/20">
             <motion.div style={{scale: imageScale}} className="w-full h-full flex items-center justify-center">
                {/* Placeholder for 3D/Video content */}
                <div className="text-9xl opacity-20 font-bold text-black">{index + 1}</div>
             </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default function Methods() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  });

  return (
    <section ref={container} className="relative mt-[50vh] mb-[50vh]">
      <div className="sticky top-0 h-screen flex items-center justify-center mb-20">
         <h2 className="text-6xl font-bold text-center">The Nubian Difference</h2>
      </div>
      {cards.map((card, i) => {
        const targetScale = 1 - ((cards.length - i) * 0.05);
        return <Card key={i} card={card} index={i} range={[i * 0.25, 1]} targetScale={targetScale} />;
      })}
    </section>
  );
}
