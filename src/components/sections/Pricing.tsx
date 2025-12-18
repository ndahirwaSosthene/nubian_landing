'use client';

export default function Pricing() {
  return (
    <section className="min-h-screen w-full bg-zinc-950 py-20 px-4 flex flex-col items-center justify-center">
      <h2 className="text-5xl font-bold mb-20 text-center">Invest in Your Heritage</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl w-full">
        {/* Free Tier */}
        <div className="bg-zinc-900 rounded-3xl p-10 border border-white/10 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-400">Explorer</h3>
          <div className="my-6">
            <span className="text-5xl font-bold">$0</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> First 3 lessons of any language</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Basic vocabulary builder</li>
          </ul>
          <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/5 transition-colors font-bold">
            Start Free
          </button>
        </div>

        {/* Pro Tier */}
        <div className="bg-zinc-800 rounded-3xl p-10 border-2 border-[#FFD700] relative transform md:-translate-y-8 shadow-[0_0_50px_rgba(255,215,0,0.1)] flex flex-col">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#FFD700] text-black px-4 py-1 rounded-full font-bold text-sm">
            MOST POPULAR
          </div>
          <h3 className="text-2xl font-bold text-[#FFD700]">Nubian Pro</h3>
          <div className="my-6">
            <span className="text-5xl font-bold">$12</span>
            <span className="text-gray-500">/month</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3"><span className="text-[#FFD700]">✓</span> Unlimited access to all languages</li>
            <li className="flex items-center gap-3"><span className="text-[#FFD700]">✓</span> Offline mode</li>
            <li className="flex items-center gap-3"><span className="text-[#FFD700]">✓</span> Advanced grammar trees</li>
            <li className="flex items-center gap-3"><span className="text-[#FFD700]">✓</span> Cultural immersion videos</li>
          </ul>
          <button className="w-full py-4 rounded-xl bg-[#FFD700] text-black hover:bg-[#FFC000] transition-colors font-bold">
            Get Pro
          </button>
        </div>

        {/* Lifetime Tier */}
        <div className="bg-zinc-900 rounded-3xl p-10 border border-white/10 flex flex-col">
          <h3 className="text-2xl font-bold text-gray-400">Lifetime</h3>
          <div className="my-6">
            <span className="text-5xl font-bold">$199</span>
            <span className="text-gray-500">/once</span>
          </div>
          <ul className="space-y-4 mb-8 flex-1">
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Everything in Pro</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Future language updates</li>
            <li className="flex items-center gap-3"><span className="text-green-500">✓</span> Priority support</li>
          </ul>
          <button className="w-full py-4 rounded-xl border border-white/20 hover:bg-white/5 transition-colors font-bold">
            Buy Once
          </button>
        </div>
      </div>
    </section>
  );
}
