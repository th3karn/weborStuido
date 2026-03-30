import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';
import { ArrowUpRight } from "lucide-react";
import { GlassCard } from "../components/ui/GlassCard";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const projects = [
  { title: "NailMuse", category: "E-Commerce", img: "https://images.unsplash.com/photo-1512418490979-92798cec1380?w=800&q=80", glow: "purple" as const },
  { title: "NeoBank App", category: "FinTech", img: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=800&q=80", glow: "blue" as const },
  { title: "Aero Logistics", category: "Enterprise ERP", img: "https://images.unsplash.com/photo-1586528116311-ad8ed745d140?w=800&q=80", glow: "cyan" as const },
  { title: "CryptoDash", category: "Web3", img: "https://images.unsplash.com/photo-1621504450181-5d356f61d307?w=800&q=80", glow: "purple" as const },
  { title: "HealthSync", category: "Healthcare", img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80", glow: "blue" as const }
];

export default function Portfolio() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".port-title", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power4.out" }
      );
      gsap.fromTo(".port-card",
        { y: 80, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen relative z-10 w-full overflow-hidden bg-[#0a0a0a]">
      {/* Background Ambient Glows (Aetheris Flux) */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-[40%] left-[-20%] w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none" />

      <div className="text-center mb-20 max-w-3xl mx-auto relative z-10">
        <h1 className="port-title text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 italic pr-2">Work</span></h1>
        <p className="port-title text-white/50 text-xl font-light leading-relaxed">Award-winning digital experiences crafted for ambitious global brands.</p>
      </div>

      <div className="mb-32 port-title w-full relative z-10">
        <Swiper
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={'auto'}
          autoplay={{ delay: 4000, disableOnInteraction: false }}
          coverflowEffect={{
            rotate: 30, stretch: 0, depth: 100, modifier: 1, slideShadows: false,
          }}
          pagination={{ clickable: true, dynamicBullets: true }}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          className="w-full py-10"
        >
          {projects.map((proj, i) => (
            // Scaled down sizing: max-w-sm -> max-w-[280px], md:max-w-xl -> max-w-md, h-[500px] -> h-[400px]
            <SwiperSlide key={i} className="max-w-[280px] md:max-w-md w-full h-[320px] md:h-[400px]">
              <GlassCard glow={proj.glow} className="w-full h-full rounded-[2rem] overflow-hidden group border border-white/5 p-0 relative">
                {/* Glow Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br from-${proj.glow}-500/0 to-${proj.glow}-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10`} />
                <img src={proj.img} alt={proj.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 opacity-50 group-hover:opacity-100" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a]/90 via-[#0a0a0a]/30 to-transparent flex flex-col justify-end p-8 z-20">
                  <span className={`text-${proj.glow}-400 font-bold tracking-widest text-[10px] mb-2 uppercase drop-shadow-[0_0_10px_currentColor]`}>{proj.category}</span>
                  <div className="flex justify-between items-center">
                    <h3 className="text-2xl font-semibold text-white">{proj.title}</h3>
                    <div className="w-10 h-10 rounded-full bg-white/5 backdrop-blur-xl flex items-center justify-center text-white group-hover:bg-white/10 transition-all border border-white/10">
                      <ArrowUpRight size={18} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    </div>
                  </div>
                </div>
              </GlassCard>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      
      <div className="mt-20 relative z-10 pb-20">
        <h2 className="port-card text-2xl font-semibold mb-12 text-white/90">Featured Case Studies</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.slice(0, 4).map((proj, i) => (
            <div key={`grid-${i}`} className={`port-card group relative rounded-[2rem] overflow-hidden h-[340px] p-0 border border-white/5 cursor-pointer bg-white/[0.02] backdrop-blur-xl hover:border-white/10 transition-all duration-700 ${i % 2 !== 0 ? 'md:translate-y-16' : ''}`}>
              {/* Hover Ambient Glow */}
              <div className={`absolute inset-0 bg-gradient-to-br from-${proj.glow}-500/0 to-${proj.glow}-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-10`} />
              
              <img src={proj.img} alt={proj.title} className="w-full h-full object-cover opacity-40 group-hover:opacity-80 transition-all duration-1000 group-hover:scale-105" />
              <div className="absolute inset-0 bg-[#0a0a0a]/40 group-hover:bg-transparent transition-colors duration-500" />
              
              <div className="absolute bottom-6 left-6 right-6 p-6 bg-white/[0.03] backdrop-blur-2xl border border-white/10 rounded-[1.5rem] flex justify-between items-center translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 shadow-2xl z-20">
                <div>
                  <span className={`text-${proj.glow}-400 text-[10px] tracking-widest uppercase font-bold mb-2 block drop-shadow-[0_0_8px_currentColor]`}>{proj.category}</span>
                  <h4 className="text-xl font-semibold text-white">{proj.title}</h4>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center group-hover:bg-white/10 transition-colors">
                  <ArrowUpRight size={18} className="text-white" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
