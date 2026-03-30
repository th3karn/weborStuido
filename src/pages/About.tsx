import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { AnimatedCounter } from "../components/ui/AnimatedCounter";
import { GlassCard } from "../components/ui/GlassCard";

export default function About() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-el", 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen relative z-10">
      <div className="text-center mb-24 max-w-5xl mx-auto">
        <h1 className="about-el text-6xl md:text-8xl font-bold mb-8 tracking-tighter">We don't follow trends. <br/><span className="text-gradient italic pr-2">We design them.</span></h1>
        <p className="about-el text-white/50 text-2xl leading-relaxed font-light mt-10">
          Webor Studio was founded with a singular vision: to bring Apple-tier aesthetics and highly scalable engineering to emerging startups and global enterprises. We believe that software shouldn't just work—it should be an experience.
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-40 about-el">
        {[
          { label: "Projects Delivered", num: 250, suffix: "+" },
          { label: "Global Clients", num: 50, suffix: "+" },
          { label: "Design Awards", num: 12, suffix: "" },
          { label: "Years Experience", num: 10, suffix: "+" },
        ].map((stat, i) => (
          <GlassCard key={i} className="p-10 rounded-[2.5rem] text-center hover:-translate-y-2 transition-transform duration-500">
            <h3 className="text-5xl md:text-6xl font-bold text-gradient mb-4">
              <AnimatedCounter end={stat.num} suffix={stat.suffix} />
            </h3>
            <p className="text-white/50 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
          </GlassCard>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center about-el">
        <div>
          <h2 className="text-5xl font-bold mb-8 tracking-tight">Our <span className="text-gradient">Philosophy</span></h2>
          <p className="text-white/50 text-xl leading-relaxed mb-10 font-light">
            In a digital world crowded with templates and mediocrity, standing out requires 
            more than just functionality. It requires an emotional connection. We focus on smooth animations, deep interactive 3D elements, and zero latency.
          </p>
          <ul className="space-y-6 text-white/80 font-medium text-lg">
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 bg-primary/10 rounded-full border border-primary/30 flex items-center justify-center neon-glow shrink-0">
                <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              </span>
              Total Transparency & Partnership
            </li>
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 bg-blue-500/10 rounded-full border border-blue-500/30 flex items-center justify-center neon-glow shrink-0">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse" />
              </span>
              Uncompromised Web Performance
            </li>
            <li className="flex items-center gap-4">
              <span className="w-12 h-12 bg-purple-500/10 rounded-full border border-purple-500/30 flex items-center justify-center neon-glow shrink-0">
                <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
              </span>
              Aesthetic Dominance Globally
            </li>
          </ul>
        </div>
        
        <GlassCard className="rounded-[3rem] overflow-hidden h-[600px] border border-white/10 relative group p-0 hidden lg:block">
          <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1000&q=80" alt="Team collaborating" className="w-full h-full object-cover opacity-50 group-hover:scale-105 transition-transform duration-1000" />
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/30 to-blue-500/10 mix-blend-overlay"></div>
          <div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-[3rem] pointer-events-none" />
        </GlassCard>
      </div>
    </div>
  );
}
