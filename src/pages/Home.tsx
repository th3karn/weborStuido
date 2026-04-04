import React, { useEffect, useRef, Suspense, lazy } from "react";
import { Link } from "react-router-dom";
import { ErrorBoundary } from "../components/ErrorBoundary";
import { WebGLFallback } from "../components/WebGLFallback";
const ThreeBackground = lazy(() => import("../components/ThreeBackground"));
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
import { ArrowRight, Star, Code, Layers, Smartphone, Globe, Check } from "lucide-react";

export default function Home() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      try {
        gsap.fromTo(".gsap-fade-up",
          { y: 60, opacity: 0 },
          {
            y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power3.out",
            scrollTrigger: { trigger: ".services-section", start: "top 75%" }
          }
        );
      } catch (error) {
        console.error("GSAP Initialization failed, falling back to static UI:", error);
      }
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
        <ErrorBoundary fallback={<WebGLFallback />}>
          <Suspense fallback={<WebGLFallback />}>
            <ThreeBackground />
          </Suspense>
        </ErrorBoundary>
        
        <div className="relative z-10 text-center px-6 max-w-6xl mx-auto flex flex-col items-center justify-center h-full pointer-events-none pb-20 mt-20">
          <div className="animate-fade-in-up opacity-0 [animation-delay:200ms] mb-8 px-5 py-2 rounded-full border border-blue-500/20 bg-blue-500/10 backdrop-blur-xl text-sm font-semibold tracking-wider text-blue-200 uppercase shadow-[0_0_20px_rgba(59,130,246,0.15)] flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Global Digital Agency
          </div>
          <h1 className="animate-fade-in-up opacity-0 [animation-delay:400ms] text-5xl md:text-7xl lg:text-[6.5rem] font-bold tracking-tighter mb-8 leading-[1.05]">
            We Build Web & Apps That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400 font-display italic pr-2">Convert.</span>
          </h1>
          <p className="animate-fade-in-up opacity-0 [animation-delay:600ms] text-lg md:text-2xl text-white/60 max-w-3xl mx-auto mb-10 font-light">
            At Webor Studio, we don't just design websites — we create high-performing digital products that help businesses grow online.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-8 mb-12 animate-fade-in-up opacity-0 [animation-delay:700ms] text-sm text-white/70 font-medium">
            <span className="flex items-center gap-2"><Check size={16} className="text-blue-400" /> Fast Delivery</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-blue-400" /> Secure Code</span>
            <span className="flex items-center gap-2"><Check size={16} className="text-blue-400" /> SEO Ready</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pointer-events-auto animate-fade-in-up opacity-0 [animation-delay:800ms]">
            <Link to="/contact">
              <MagneticButton>
                <button className="px-10 py-4 bg-gradient-to-r from-blue-600 to-cyan-600 text-white rounded-full text-lg flex items-center gap-3 group transition-colors shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]">
                  Get a Quote <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </MagneticButton>
            </Link>
            <Link to="/pricing">
              <MagneticButton>
                <button className="px-10 py-4 bg-white/5 border border-white/10 rounded-full text-white text-lg hover:bg-white/10 transition-colors">
                  View Pricing
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
      <section className="services-section py-40 md:py-48 px-6 md:px-12 max-w-7xl mx-auto relative z-10">
        <div className="mb-32 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-12">
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
      <div className="my-20">
        <ProcessTimeline />
      </div>

      {/* Testimonials */}
      <section className="py-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blue-500/5 to-transparent pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
          <div className="text-center mb-28">
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

      {/* Ultimate CTA Portal Section */}
      <section className="py-40 px-6 md:px-12 relative z-10 mb-32 cursor-default">
        <div className="max-w-5xl mx-auto relative group">
          {/* External Massive Glow */}
          <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-[4rem] blur-[100px] opacity-20 group-hover:opacity-40 transition-opacity duration-1000 z-0"></div>
          
          <div className="relative text-center py-20 px-6 md:px-16 !rounded-[3rem] bg-[#0a0a0a]/80 backdrop-blur-3xl border border-white/10 overflow-hidden shadow-2xl z-10">
            {/* Internal Animated Nebulas */}
            <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-purple-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>
            <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-cyan-500/20 blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }}></div>

            {/* Decorative Grid/Lines */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:30px_30px] [mask-image:radial-gradient(circle,white,transparent_80%)] opacity-30 pointer-events-none"></div>
            
            <div className="relative z-20">
              <span className="inline-block py-1.5 px-5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md text-blue-400 font-bold tracking-[0.2em] text-[10px] md:text-xs mb-8 uppercase shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                Instagram @webor_studio
              </span>
              <h2 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 tracking-tighter uppercase leading-[1.1] text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
                Grow Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Business</span> <br /> Online
              </h2>
              <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-10 font-light">
                Follow @webor_studio on Instagram for daily website demos, reels & offers. Professional quality, honest pricing, real results.
              </p>
              
              <div className="relative inline-block group/btn cursor-pointer">
                {/* Button Outer Glow */}
                <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-full blur-[15px] opacity-70 group-hover/btn:opacity-100 group-hover/btn:blur-[25px] transition-all duration-500 animate-pulse pointer-events-none"></div>
                
                <Link to="/contact" className="relative z-10 block">
                  <MagneticButton>
                    <button className="px-8 md:px-12 py-4 md:py-5 rounded-full bg-black/90 border border-white/20 text-white font-bold text-base md:text-lg tracking-wide uppercase overflow-hidden relative group-hover/btn:border-white/50 transition-all duration-500">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-cyan-400/20 translate-y-full group-hover/btn:translate-y-0 transition-transform duration-500"></div>
                      <span className="relative z-10 flex items-center justify-center gap-3">
                        Start Your Project 
                        <ArrowRight size={20} className="group-hover/btn:translate-x-2 transition-transform duration-300 shadow-[0_0_15px_currentColor]" />
                      </span>
                    </button>
                  </MagneticButton>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
