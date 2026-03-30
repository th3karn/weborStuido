import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Layers, Lightbulb, Code2, Rocket } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const processSteps = [
  {
    number: '01',
    title: 'Discovery & Recon',
    desc: 'Deep-dive analysis of your digital ecosystem, market trajectory, and foundational architecture.',
    icon: <Lightbulb size={32} />,
    color: 'from-purple-500 to-indigo-500',
    align: 'left'
  },
  {
    number: '02',
    title: 'Design Architecture',
    desc: 'Wireframing premium user journeys using the "No-Line" tonal layering protocol for maximum atmospheric depth.',
    icon: <Layers size={32} />,
    color: 'from-cyan-400 to-blue-500',
    align: 'right'
  },
  {
    number: '03',
    title: 'Neural Engineering',
    desc: 'Developing high-performance, edge-rendered React structures. Seamless 3D, zero latency.',
    icon: <Code2 size={32} />,
    color: 'from-fuchsia-500 to-purple-600',
    align: 'left'
  },
  {
    number: '04',
    title: 'Global Launch',
    desc: 'Deploying robust cloud-first backends to global edge networks. Unmatched scalability.',
    icon: <Rocket size={32} />,
    color: 'from-emerald-400 to-cyan-500',
    align: 'right'
  }
];

export const ProcessTimeline = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const cards = gsap.utils.toArray('.process-card');
      
      cards.forEach((card: any, index: number) => {
        gsap.fromTo(card, 
          { 
            opacity: 0, 
            x: processSteps[index].align === 'left' ? -100 : 100,
            y: 50 
          },
          {
            opacity: 1, 
            x: 0,
            y: 0,
            duration: 1.2,
            ease: "power4.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
            }
          }
        );
      });

      // Animate the center line
      gsap.fromTo('.timeline-line',
        { height: 0 },
        {
          height: '100%',
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: '.timeline-container',
            start: "top 70%",
            end: "bottom 80%",
            scrub: 1
          }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section className="py-40 relative px-6 md:px-12 bg-[#0a0a0a] overflow-hidden" ref={containerRef}>
      {/* Background Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-purple-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-0 w-[400px] h-[400px] bg-cyan-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto relative z-10 timeline-container">
        <div className="text-center mb-32">
          <h2 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 italic">Methodology</span></h2>
          <p className="text-white/50 text-xl max-w-2xl mx-auto font-light leading-relaxed">
            The Ethereal Monolith approach. We reject the template. Every line of code, every pixel is curated for atmospheric momentum.
          </p>
        </div>

        <div className="relative">
          {/* Center Glowing Line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[2px] bg-white/5 -translate-x-1/2 hidden md:block">
            <div className="timeline-line w-full bg-gradient-to-b from-purple-500 via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.5)]" />
          </div>

          <div className="flex flex-col gap-24">
            {processSteps.map((step, index) => (
              <div key={index} className={`relative flex flex-col md:flex-row items-center gap-8 md:gap-24 ${step.align === 'right' ? 'md:flex-row-reverse' : ''}`}>
                
                {/* Visual Node */}
                <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 rounded-full glass-card border-white/20 items-center justify-center z-20">
                  <div className={`w-8 h-8 rounded-full bg-gradient-to-br ${step.color} shadow-[0_0_20px_var(--tw-shadow-color)] shadow-cyan-500/50 flex items-center justify-center animate-pulse`}>
                    <span className="text-white font-bold text-xs tracking-widest">{step.number}</span>
                  </div>
                </div>

                {/* Content Card */}
                <div className={`w-full md:w-1/2 process-card ${step.align === 'left' ? 'md:pr-14 text-left md:text-right' : 'md:pl-14 text-left'}`}>
                  <div className="p-8 md:p-10 rounded-[2rem] bg-white/[0.02] backdrop-blur-2xl border border-white/5 hover:border-white/10 transition-colors duration-500 group relative overflow-hidden">
                    {/* Hover Glow */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-0 group-hover:opacity-5 transition-opacity duration-700 pointer-events-none`} />
                    
                    <div className={`mb-6 inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-white/5 text-white/80 group-hover:scale-110 transition-transform duration-500 ${step.align === 'left' ? 'md:ml-auto' : ''}`}>
                      {step.icon}
                    </div>
                    
                    <div className={`text-5xl font-black text-white/5 absolute top-8 ${step.align === 'left' ? 'left-8' : 'right-8'} pointer-events-none transition-all group-hover:text-white/10 group-hover:scale-110 duration-700 font-display`}>
                      {step.number}
                    </div>

                    <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-white/60 transition-all">
                      {step.title}
                    </h3>
                    <p className="text-white/50 text-lg font-light leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>

                {/* Empty Spacer for alternating layout */}
                <div className="w-full md:w-1/2 hidden md:block" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
