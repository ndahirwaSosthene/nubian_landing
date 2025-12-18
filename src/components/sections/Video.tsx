'use client';

export default function Video() {
  return (
    <section className="h-screen w-full bg-black flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 opacity-50">
        {/* Placeholder for video background */}
        <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      
      <div className="relative z-10 text-center max-w-4xl px-4">
        <h2 className="text-5xl md:text-7xl font-bold mb-8">More Than Words</h2>
        <p className="text-xl md:text-2xl text-gray-300 mb-12 leading-relaxed">
          Language is the key to culture. Unlock the music, the history, and the soul of Africa.
        </p>
        
        <button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/30 flex items-center justify-center hover:scale-110 transition-transform group">
          <div className="w-0 h-0 border-t-[10px] border-t-transparent border-l-[20px] border-l-white border-b-[10px] border-b-transparent ml-1 group-hover:border-l-[#FFD700] transition-colors" />
        </button>
      </div>
    </section>
  );
}
