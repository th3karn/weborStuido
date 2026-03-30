import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { Mail, MapPin, Phone } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";
import { GlassCard } from "../components/ui/GlassCard";

export default function Contact() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".contact-el", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen relative z-10">
      <div className="text-center mb-24 contact-el">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">Let's build <br/><span className="text-gradient hover:drop-shadow-[0_0_20px_rgba(168,85,247,0.5)] transition-all italic pr-2">The Future.</span></h1>
        <p className="text-white/50 text-2xl max-w-3xl mx-auto font-light leading-relaxed">Tell us about your next big idea, and our elite engineering team will coordinate with you within 24 hours.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mt-20 items-center">
        <div className="contact-el order-2 lg:order-1 h-full">
          <GlassCard glow="blue" className="p-10 md:p-16 rounded-[3rem] h-full flex flex-col justify-center">
            <h3 className="text-4xl font-bold mb-10 text-white tracking-tight">Send a Message</h3>
            <form className="space-y-8" onSubmit={e => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-sm text-white/50 font-medium uppercase tracking-widest pl-2">First Name</label>
                  <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/50 transition-all text-lg" placeholder="John" />
                </div>
                <div className="space-y-3">
                  <label className="text-sm text-white/50 font-medium uppercase tracking-widest pl-2">Last Name</label>
                  <input type="text" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/50 transition-all text-lg" placeholder="Doe" />
                </div>
              </div>
              <div className="space-y-3">
                <label className="text-sm text-white/50 font-medium uppercase tracking-widest pl-2">Email Address</label>
                <input type="email" className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/50 transition-all text-lg" placeholder="john@example.com" />
              </div>
              <div className="space-y-3">
                <label className="text-sm text-white/50 font-medium uppercase tracking-widest pl-2">Project Vision</label>
                <textarea rows={5} className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 focus:bg-white/[0.05] focus:ring-1 focus:ring-primary/50 transition-all text-lg resize-none" placeholder="Describe the scale and goals of your digital platform..." />
              </div>
              <MagneticButton className="w-full pt-4 block">
                 <button className="w-full py-5 rounded-2xl bg-primary text-white text-lg font-semibold neon-glow hover:bg-primary/90 transition-all tracking-wide">
                  Submit Request
                 </button>
              </MagneticButton>
            </form>
          </GlassCard>
        </div>

        <div className="contact-el order-1 lg:order-2 space-y-8 flex flex-col justify-center">
          <GlassCard glow="purple" className="p-10 md:p-12 rounded-[2.5rem] flex items-center gap-8 group hover:border-primary/40 transition-colors cursor-pointer">
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-primary shrink-0 group-hover:bg-primary/10 transition-all duration-500">
              <Mail size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Email Us</h4>
              <p className="text-white/50 mb-3 text-lg font-light">For general inquiries and project proposals.</p>
              <a href="mailto:hello@weborstudio.com" className="text-primary text-xl font-medium hover:text-white transition-colors">hello@weborstudio.com</a>
            </div>
          </GlassCard>
          
          <GlassCard glow="blue" className="p-10 md:p-12 rounded-[2.5rem] flex items-center gap-8 group hover:border-blue-500/40 transition-colors cursor-pointer">
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-blue-500 shrink-0 group-hover:bg-blue-500/10 transition-all duration-500">
              <Phone size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Call Us</h4>
              <p className="text-white/50 mb-3 text-lg font-light">Available Mon-Fri, 9am - 6pm EST.</p>
              <a href="tel:+1234567890" className="text-blue-500 text-xl font-medium hover:text-white transition-colors">+1 (234) 567-890</a>
            </div>
          </GlassCard>

          <GlassCard glow="cyan" className="p-10 md:p-12 rounded-[2.5rem] flex items-center gap-8 group hover:border-cyan-500/40 transition-colors cursor-pointer">
            <div className="w-20 h-20 rounded-2xl bg-white/[0.03] border border-white/10 flex items-center justify-center text-cyan-500 shrink-0 group-hover:bg-cyan-500/10 transition-all duration-500">
              <MapPin size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-bold text-white mb-2">Global Headquarters</h4>
              <p className="text-white/50 text-lg font-light leading-relaxed">123 Innovation Drive<br/>Tech Hub, NY 10001<br/>United States</p>
            </div>
          </GlassCard>
        </div>
      </div>
    </div>
  );
}
