import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { Check } from "lucide-react";
import { MagneticButton } from "../components/MagneticButton";
import { GlassCard } from "../components/ui/GlassCard";

const plans = [
  {
    name: "Starter",
    desc: "Perfect for emerging startups establishing a digital presence.",
    priceInr: "₹49,999",
    priceUsd: "$599",
    features: ["Custom Landing Page", "Responsive Design", "Basic SEO Setup", "Contact Form Integration", "1 Month Support"],
    popular: false,
    glow: "none" as const
  },
  {
    name: "Professional",
    desc: "For growing businesses needing robust features and exceptional UX.",
    priceInr: "₹1,49,999",
    priceUsd: "$1,799",
    features: ["Up to 10 Pages", "CMS Integration", "Advanced SEO", "Custom Animations", "Performance Optimization", "3 Months Support"],
    popular: true,
    glow: "purple" as const
  },
  {
    name: "Enterprise",
    desc: "Global scale solutions demanding the absolute industry best.",
    priceInr: "Custom",
    priceUsd: "Custom",
    features: ["Unlimited Pages", "Custom Web Application", "AI Integrations", "Dedicated Account Manager", "24/7 Priority Support", "High-End 3D Graphics"],
    popular: false,
    glow: "blue" as const
  }
];

export default function Pricing() {
  const [currency, setCurrency] = useState<"INR" | "USD">("USD");
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".pricing-header", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, ease: "power4.out" }
      );
      gsap.fromTo(".pricing-card", 
        { y: 60, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: "power3.out", delay: 0.3 }
      );
    }, [currency, containerRef]); 

    return () => ctx.revert();
  }, [currency]);

  return (
    <div ref={containerRef} className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen relative w-full overflow-hidden">
      
      {/* Background Ambient Glows (Aetheris Flux) */}
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none z-0" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 blur-[150px] rounded-full pointer-events-none z-0" />

      <div className="text-center mb-20 pricing-header relative z-10">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 tracking-tighter">Transparent <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-cyan-400 italic pr-2">Pricing</span></h1>
        <p className="text-white/50 text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed">Premium quality at competitive rates. Choose the exact architecture scale for your digital trajectory.</p>
        
        <div className="inline-flex items-center bg-white/[0.03] backdrop-blur-xl p-2 rounded-full border border-white/10 shadow-2xl relative z-20">
          <button 
            onClick={() => setCurrency("USD")}
            className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${currency === "USD" ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "text-white/50 hover:text-white"}`}
          >
            USD ($)
          </button>
          <button 
            onClick={() => setCurrency("INR")}
            className={`px-8 py-3 rounded-full text-sm font-semibold tracking-wide transition-all duration-300 ${currency === "INR" ? "bg-white text-black shadow-[0_0_20px_rgba(255,255,255,0.3)]" : "text-white/50 hover:text-white"}`}
          >
            INR (₹)
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 lg:gap-10 items-center relative z-10 max-w-6xl mx-auto">
        {plans.map((plan, i) => (
          <GlassCard key={i} glow={plan.glow} className={`pricing-card p-8 xl:p-10 relative flex flex-col h-full bg-white/[0.02] backdrop-blur-2xl hover:border-white/10 transition-colors duration-500 group
            ${plan.popular ? 'xl:-translate-y-8 border-white/10 shadow-[0_0_40px_rgba(168,85,247,0.15)] bg-white/[0.04]' : 'border-white/5'}`}>
            
            {/* Hover Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-br from-${plan.glow !== 'none' ? plan.glow : 'white'}-500/0   opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none rounded-[2rem]`} />

            {plan.popular && (
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-full shadow-[0_0_20px_rgba(168,85,247,0.6)] z-20 whitespace-nowrap">
                Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-semibold text-white mb-3 mt-4">{plan.name}</h3>
            <p className="text-white/50 mb-8 h-12 font-light text-sm leading-relaxed">{plan.desc}</p>
            
            <div className="mb-8 pb-8 border-b border-white/10 relative">
              <span className="text-5xl font-bold text-white tracking-tighter block mb-2">
                {currency === "USD" ? plan.priceUsd : plan.priceInr}
              </span>
              <span className="text-white/40 text-xs">One-time payment. No hidden fees.</span>
            </div>
            
            <ul className="space-y-4 mb-10 text-white/80 flex-grow font-light text-sm">
              {plan.features.map((feature, idx) => (
                <li key={idx} className="flex items-center gap-4">
                  <span className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.popular ? 'bg-gradient-to-br from-purple-500/20 to-cyan-500/20 text-cyan-400' : 'bg-white/5 text-white/60'}`}>
                    <Check size={12} strokeWidth={3} />
                  </span>
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-auto">
              <MagneticButton className={`w-full py-4 text-sm font-semibold tracking-wide text-center block rounded-full transition-all duration-300 ${plan.popular ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] hover:shadow-[0_0_30px_rgba(34,211,238,0.6)]' : 'bg-white/5 text-white border border-white/10 hover:bg-white/10'}`}>
                Get Started
              </MagneticButton>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
