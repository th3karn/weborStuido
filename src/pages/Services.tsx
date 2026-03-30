import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Layers, Monitor, Smartphone, Cloud, Shield, Zap } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";

const services = [
  { icon: <Monitor size={32} />, title: "Web Application Development", desc: "We build scalable, high-performance web applications using React, Next.js, and Node.js." },
  { icon: <Smartphone size={32} />, title: "Mobile App Development", desc: "Native and cross-platform mobile experiences that users love, built on React Native and Swift." },
  { icon: <Layers size={32} />, title: "UI/UX Design", desc: "Apple-level aesthetics, focusing on typography, whitespace, and buttery-smooth micro-interactions." },
  { icon: <Cloud size={32} />, title: "Cloud Solutions", desc: "Enterprise-grade cloud architectures on AWS and Google Cloud for maximum reliability." },
  { icon: <Shield size={32} />, title: "Cybersecurity", desc: "Robust security audits and implementations, ensuring your digital assets are impenetrable." },
  { icon: <Zap size={32} />, title: "AI Integration", desc: "Smart AI automation and LLM integrations to give your business a futuristic competitive edge." }
];

export default function Services() {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".page-title", { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: "power3.out" });
      gsap.fromTo(".service-item", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: "power3.out", delay: 0.3 }
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="pt-32 pb-20 px-6 max-w-7xl mx-auto min-h-screen">
      <div className="text-center mb-20 max-w-3xl mx-auto">
        <h1 className="page-title text-5xl md:text-7xl font-bold mb-6">Our <span className="text-gradient">Services</span></h1>
        <p className="page-title text-white/50 text-xl">We provide end-to-end digital solutions, combining futuristic design with robust, scalable engineering.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((srv, i) => (
          <div key={i} className="service-item glass-card p-10 rounded-[2rem] hover:-translate-y-4 transition-transform duration-500 group border border-white/5 hover:border-primary/30">
            <div className="w-16 h-16 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:neon-glow transition-all duration-300">
              {srv.icon}
            </div>
            <h3 className="text-2xl font-semibold mb-3 text-white">{srv.title}</h3>
            <p className="text-white/60 leading-relaxed mb-8">{srv.desc}</p>
            <MagneticButton className="px-6 py-2 border border-white/20 text-white/80 hover:text-white hover:border-white/50 bg-transparent text-sm">
              Learn More
            </MagneticButton>
          </div>
        ))}
      </div>
      
      <div className="mt-32 glass-card p-16 rounded-[3rem] text-center service-item border border-primary/20 neon-glow relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-blue-500/10 pointer-events-none" />
        <h2 className="text-4xl font-bold mb-6 relative z-10">Ready to build something incredible?</h2>
        <p className="text-xl text-white/70 mb-10 max-w-2xl mx-auto relative z-10">Let's discuss how our services can transform your business trajectory.</p>
        <MagneticButton className="px-10 py-5 bg-primary text-white text-lg font-medium neon-glow relative z-10 hover:bg-primary/90">
          Book a Free Consultation
        </MagneticButton>
      </div>
    </div>
  );
}
