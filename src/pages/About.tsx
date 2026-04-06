import React from "react";

export default function About() {
  return (
    <main className="pt-32">
      {/* Hero Section: The Genesis */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div>
            <span className="text-primary font-headline uppercase tracking-[0.3em] text-xs font-bold mb-6 block">Our Genesis</span>
            <h1 className="text-5xl md:text-7xl font-headline font-black tracking-tighter mb-8 leading-[0.95]">
              Crafting the <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">Invisible</span> Standard.
            </h1>
            <p className="text-on-surface-variant text-lg md:text-xl leading-relaxed max-w-xl mb-10">
              Founded in the intersection of architectural precision and digital alchemy, Lumina Noir was born to bridge the gap between functional code and editorial elegance.
            </p>
            <div className="flex gap-4">
              <div className="flex flex-col">
                <span className="text-4xl font-headline font-bold text-on-surface">2018</span>
                <span className="text-xs uppercase tracking-widest text-[#767576]">Established</span>
              </div>
              <div className="w-px h-12 bg-outline-variant mx-4"></div>
              <div className="flex flex-col">
                <span className="text-4xl font-headline font-bold text-on-surface">12+</span>
                <span className="text-xs uppercase tracking-widest text-[#767576]">Design Awards</span>
              </div>
            </div>
          </div>
          <div className="relative mt-12 lg:mt-0">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl rounded-xl"></div>
            <img alt="Office setup" className="relative rounded-xl w-full h-[400px] md:h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBZZmRndT3LwgJUgjNfsPdlcX9Ufep32v1fRY5JotmgtKV2UIEmcFO8owv4iXhDMNZDcrtFW1zBdDhr1uHOi0Q46_bQ8RM0enGOtMx8FzdbJsZ8EJ0y4z0yJhH-fEIhxmqu_43H-3N6RujpgEJF5Prq1Nji6slYRW6g8FJ_Gri7mqc5Jop1dhld63g5L17zTJX_H3ZrOUDC1qf8nUcSbfxqP8WkrnRhdesw1hZq1n4sHR1WbjcrYkd39MP5OhukilNEuslzEoxDRL2g" />
          </div>
        </div>
      </section>

      {/* Stats Section: Performance in Numbers */}
      <section className="px-6 md:px-12 py-16 md:py-24 bg-surface-container-low rounded-xl mx-4 mb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 text-center">
          <div className="space-y-2">
            <h3 className="text-5xl font-headline font-black text-primary">240+</h3>
            <p className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">Projects Delivered</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-headline font-black text-secondary">85</h3>
            <p className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">Global Clients</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-headline font-black text-tertiary">14</h3>
            <p className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">Countries Reached</p>
          </div>
          <div className="space-y-2">
            <h3 className="text-5xl font-headline font-black text-white">99%</h3>
            <p className="text-on-surface-variant uppercase text-xs tracking-widest font-bold">Trust Rating</p>
          </div>
        </div>
      </section>

      {/* Mission & Vision: The Curator's Mindset */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glass-panel p-10 md:p-16 rounded-xl border border-white/5 space-y-6">
            <span className="material-symbols-outlined text-4xl text-primary" style={{fontVariationSettings: "'FILL' 1"}}>visibility</span>
            <h2 className="text-4xl font-headline font-bold">The Vision</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              To define the aesthetic of the modern web where every pixel serves a purpose, and every interaction feels like a natural extension of human intent.
            </p>
          </div>
          <div className="bg-surface-container-highest p-10 md:p-16 rounded-xl space-y-6">
            <span className="material-symbols-outlined text-4xl text-secondary" style={{fontVariationSettings: "'FILL' 1"}}>rocket_launch</span>
            <h2 className="text-4xl font-headline font-bold">The Mission</h2>
            <p className="text-on-surface-variant text-lg leading-relaxed">
              Empowering forward-thinking brands through radical simplicity, architectural integrity, and high-performance engineering.
            </p>
          </div>
        </div>
      </section>

      {/* Team Section: The Architects */}
      <section className="px-6 md:px-12 pb-32">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20 text-center">
            <span className="text-secondary font-headline uppercase tracking-[0.3em] text-xs font-bold mb-4 block">The Architects</span>
            <h2 className="text-5xl md:text-6xl font-headline font-black tracking-tighter">Meet the Collective.</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {/* Member 1 */}
            <div className="group relative">
              <div className="overflow-hidden rounded-xl bg-surface-container mb-6">
                <img alt="Julian Thorne" className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC1pTuRfEz_5TD-UFX7-Ng5yQiqxVNV9TfYPUonJ--wktw_MZ1vuTs7kMqY2Rlg2siDPF6YJcP9aca8xh4kcJZ-tqyywpDSgSdUU3lXBfCQUstbGubeAi8PiHr3DvRCN-HRrZwrwKQ07NjkdL5KJyQsjYd163FJiFraLLtXlGszw6VWhXHbi7aaY8XQiSK3TaiLzSbkTldvY1UlL7Dj2cbMCAVOafqLBnvPaMGx6gkriHTR9eaLmunsPWNzvaWy0DbkbUMi9ivQeoH-"/>
              </div>
              <div className="px-2">
                <h4 className="text-2xl font-headline font-bold mb-1">Julian Thorne</h4>
                <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Lead Strategist</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white">language</span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white">share</span>
                </div>
              </div>
            </div>
            
            {/* Member 2 */}
            <div className="group relative">
              <div className="overflow-hidden rounded-xl bg-surface-container mb-6">
                <img alt="Elena Vance" className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBN83oaDvEJKsMMG9t6iP6WEoKXEUYw548jtl9Mq31f7WOz68UwKozPrhT_6_kkItHxwlOZTfopgz6Yl3udw2VhX7PZtt1RdcnkuuuHYIbw-DALqY5J58oWyNTabk3fwW5ks-TRz4kYGtx4-8P7fREzO1PaA_CqnzdNSuhV6JUNcYLQZS9aDf5y4E8UEessxxgsDHYXQOQ844OzHwML5tF33AbNTEycd_S-ZlXSAsTDPzDOotrs2bPHULzOoqqziPJ7O88-7AE5aeQO"/>
              </div>
              <div className="px-2">
                <h4 className="text-2xl font-headline font-bold mb-1">Elena Vance</h4>
                <p className="text-secondary font-medium text-sm uppercase tracking-widest mb-4">Creative Director</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white">brush</span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white">link</span>
                </div>
              </div>
            </div>
            
            {/* Member 3 */}
            <div className="group relative">
              <div className="overflow-hidden rounded-xl bg-surface-container mb-6">
                <img alt="Marcus Kael" className="w-full aspect-[4/5] object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCk3vDjMbzWmEaLVlds12RVHuPdbEgdBROBbQZWBMtA34WaCiiT9YKE7l3Z9MKY9hZ3jcoa6nllOzq56RGnJCnHaRRI9iMZFocfgIo6pX6fiM0itEaU8B49j5tCWYILau38C75EGNBhVTZwkrJEKy7SJK7ECoMBKdRNEM_QwhtVDolGh72kxzpK-ap54d2mfgn-eema21CRx8SUt-FyEOXy-OTyO6oJYTRs6gOV_FSSACI8WZH4Q77eKYmLmrUDCSQBlWDzuF0BxI42"/>
              </div>
              <div className="px-2">
                <h4 className="text-2xl font-headline font-bold mb-1">Marcus Kael</h4>
                <p className="text-tertiary font-medium text-sm uppercase tracking-widest mb-4">Technical Architect</p>
                <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white">terminal</span>
                  <span className="material-symbols-outlined text-on-surface-variant cursor-pointer hover:text-white">hub</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 md:px-12 py-16 md:py-32 text-center">
        <div className="max-w-4xl mx-auto glass-panel py-16 md:py-24 px-8 md:px-12 rounded-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 blur-[120px]"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/10 blur-[120px]"></div>
          <h2 className="text-4xl md:text-5xl font-headline font-black mb-8 relative z-10">Ready to build the future of your brand?</h2>
          <button className="bg-gradient-to-r from-primary to-secondary text-white px-12 py-5 rounded-full font-headline font-extrabold text-lg tracking-tight magnetic-hover transition-all relative z-10">
            Initiate a Project
          </button>
        </div>
      </section>
    </main>
  );
}
