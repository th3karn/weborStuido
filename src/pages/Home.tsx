import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ThreeBackground } from "../components/ThreeBackground";
import { MagneticButton } from "../components/MagneticButton";
import { TechSlider } from "../components/ui/TechSlider";
import { GlassCard } from "../components/ui/GlassCard";
import { ProcessTimeline } from "../components/ui/ProcessTimeline";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Pagination } from 'swiper/modules';
import gsap from "gsap";
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/pagination';
import { ArrowRight, Star, Code, Layers, Smartphone, Globe } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Scroll triggers
      gsap.fromTo(".gsap-fade-up",
        { y: 60, opacity: 0 },
        {
          y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: ".services-section", start: "top 75%" }
        }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const services = [
    { title: "UI/UX Design", desc: "Apple-tier digital aesthetics and intuitive user journeys.", icon: <Layers size={28}/>, glow: "blue" as const },
    { title: "Web Engineering", desc: "High-performance React & Next.js architectures.", icon: <Code size={28}/>, glow: "cyan" as const },
    { title: "Mobile Apps", desc: "Native scalable solutions for global audiences.", icon: <Smartphone size={28}/>, glow: "purple" as const },
    { title: "Enterprise Systems", desc: "Robust cloud-first backends and AI integrations.", icon: <Globe size={28}/>, glow: "none" as const },
  ];

  return (
    <div className="w-full relative bg-background" ref={containerRef}>
      {/* Hero Section */}
      <section className="relative h-screen min-h-[800px] w-full flex items-center justify-center overflow-hidden">
        <ThreeBackground />
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center justify-center h-full pointer-events-none pb-20 mt-20">
          <div className="animate-fade-in-up opacity-0 [animation-delay:200ms] mb-8 px-5 py-2 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl text-sm font-semibold tracking-wider text-white/80 uppercase shadow-[0_0_20px_rgba(255,255,255,0.05)]">
            <span className="w-2 h-2 rounded-full bg-primary inline-block mr-3 animate-pulse"></span>
            Global Digital Agency
          </div>
          <h1 className="animate-fade-in-up opacity-0 [animation-delay:400ms] text-6xl md:text-8xl lg:text-[7.5rem] font-bold tracking-tighter mb-8 leading-[1.05]">
            Crafting <span className="text-gradient font-display italic pr-2">Futuristic</span> <br />
            Digital Realities.
          </h1>
          <p className="animate-fade-in-up opacity-0 [animation-delay:600ms] text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-12 font-light">
            We build premium, highly trustable web and mobile applications for global enterprises. Seamless 3D, buttery smooth animations, and zero compromise.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto animate-fade-in-up opacity-0 [animation-delay:800ms]">
            <Link to="/contact">
              <MagneticButton>
                <button className="px-10 py-5 bg-primary text-white hover:bg-primary/90 rounded-2xl text-lg flex items-center gap-3 group transition-colors neon-glow">
                  Start a Project <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticButton>
            </Link>
            <Link to="/portfolio">
              <MagneticButton>
                <button className="px-10 py-5 bg-white/5 border border-white/10 rounded-2xl text-white text-lg hover:bg-white/10 transition-colors">
                  View Portfolio
                </button>
              </MagneticButton>
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce pointer-events-none">
          <span className="text-xs uppercase tracking-widest">Scroll</span>
          <div className="w-[1px] h-8 bg-gradient-to-b from-white to-transparent" />
        </div>
      </section>

      {/* Tech Stack Slider */}
      <TechSlider />

      {/* Services Section */}
      <section className="services-section py-32 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="mb-24 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-10">
          <div className="max-w-2xl">
            <h2 className="gsap-fade-up text-5xl md:text-7xl font-bold mb-6 tracking-tight">World-Class <br/><span className="text-gradient">Capabilities.</span></h2>
            <p className="gsap-fade-up text-white/50 text-xl font-light leading-relaxed">We deliver end-to-end digital excellence. From concept to deployment, we build highly scalable and visually stunning solutions.</p>
          </div>
          <Link to="/services" className="shrink-0 hidden md:block">
            <MagneticButton>
              <button className="gsap-fade-up px-8 py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors">
                View All Services
              </button>
            </MagneticButton>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {services.map((srv, i) => (
            <GlassCard key={i} glow={srv.glow} className="gsap-fade-up p-8 md:p-10 group cursor-pointer">
              <div className="w-16 h-16 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary mb-8 group-hover:scale-110 group-hover:bg-primary/10 transition-all duration-500">
                {srv.icon}
              </div>
              <h3 className="text-2xl font-semibold mb-4 text-white group-hover:text-primary transition-colors">{srv.title}</h3>
              <p className="text-white/50 text-lg font-light leading-relaxed">{srv.desc}</p>
            </GlassCard>
          ))}
        </div>
      </section>

      {/* Our Process Timeline */}
      <ProcessTimeline />

      {/* Testimonials */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-5xl md:text-6xl font-bold mb-6 tracking-tight">Trusted <span className="text-gradient italic pr-2">Globally</span></h2>
            <p className="text-white/50 text-xl">Don't just take our word for it.</p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <Swiper
              modules={[Autoplay, EffectFade, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              autoplay={{ delay: 6000, disableOnInteraction: false }}
              pagination={{ clickable: true, dynamicBullets: true }}
              loop={true}
              effect="fade"
              className="w-full pb-16"
            >
              {[1, 2, 3].map((_, i) => (
                <SwiperSlide key={i}>
                  <GlassCard className="p-8 md:p-12 !rounded-[2rem] text-center flex flex-col items-center">
                    <div className="flex justify-center gap-2 text-primary mb-8">
                      {[1,2,3,4,5].map(s => <Star key={s} fill="currentColor" size={20} className="drop-shadow-[0_0_10px_rgba(168,85,247,0.5)]" />)}
                    </div>
                    <p className="text-xl md:text-3xl text-white/90 font-medium leading-normal mb-10 max-w-3xl">
                      "Webor Studio fundamentally transformed our digital presence. The 3D integration and UI aesthetics are simply unmatched in the industry today."
                    </p>
                    <div className="flex items-center gap-6">
                      <div className="w-14 h-14 rounded-full bg-white/10 overflow-hidden border border-white/20">
                        <img src={`https://i.pravatar.cc/150?img=${i+10}`} alt="Avatar" className="w-full h-full object-cover" />
                      </div>
                      <div className="text-left">
                        <h4 className="text-lg font-semibold text-white">Sarah Jenkins</h4>
                        <p className="text-sm text-white/50">CTO, GlobalTech Innovations</p>
                      </div>
                    </div>
                  </GlassCard>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative z-10 mb-20 cursor-default">
        <GlassCard glow="purple" className="max-w-6xl mx-auto text-center py-24 px-6 md:px-20 !rounded-[4rem] bg-gradient-to-br from-primary/10 to-blue-500/10 border-primary/20">
          <h2 className="text-5xl md:text-7xl font-bold mb-8">Ready to <span className="text-gradient">Innovate?</span></h2>
          <p className="text-xl text-white/60 max-w-2xl mx-auto mb-12">Join industry leaders who trust us to build their next-generation digital platforms.</p>
          <Link to="/contact">
            <MagneticButton>
              <button className="px-12 py-6 rounded-2xl bg-primary text-white text-xl neon-glow hover:bg-primary/90 transition-colors">
                Start Your Project Now
              </button>
            </MagneticButton>
          </Link>
        </GlassCard>
      </section>
    </div>
  );
}
