import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import { Link, Outlet, useLocation } from "react-router-dom";
import gsapInstance from "gsap";
import { ScrollTrigger as ScrollTriggerInstance } from "gsap/ScrollTrigger";

gsapInstance.registerPlugin(ScrollTriggerInstance);

export const Layout = () => {
  const { pathname } = useLocation();
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });
    lenisRef.current = lenis;

    lenis.on('scroll', ScrollTriggerInstance.update);

    gsapInstance.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsapInstance.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      lenisRef.current = null;
      gsapInstance.ticker.remove((time) => lenis.raf(time * 1000));
    };
  }, []);

  useEffect(() => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return (
    <div className="min-h-screen bg-background text-on-surface overflow-x-hidden selection:bg-primary/30">
      <nav className="fixed top-0 w-full z-50 bg-surface-bright/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(151,169,255,0.06)]">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
          <Link to="/" className="text-2xl font-black tracking-tighter text-[#97a9ff] font-headline">Lumina Noir</Link>
          <div className="hidden md:flex gap-10 font-headline tracking-tight text-sm font-medium uppercase">
            <Link to="/" className="text-[#c180ff] border-b-2 border-[#c180ff] pb-1">Home</Link>
            <Link to="/services" className="text-[#adaaab] hover:text-white transition-colors">Services</Link>
            <Link to="/pricing" className="text-[#adaaab] hover:text-white transition-colors">Pricing</Link>
            <Link to="/portfolio" className="text-[#adaaab] hover:text-white transition-colors">Portfolio</Link>
            <Link to="/about" className="text-[#adaaab] hover:text-white transition-colors">About</Link>
            <Link to="/blog" className="text-[#adaaab] hover:text-white transition-colors">Blog</Link>
          </div>
          <Link to="/contact">
            <button className="bg-primary-container text-on-primary-container font-bold px-8 py-3 rounded-full hover:scale-105 transition-all duration-300 shadow-lg">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 w-full flex-grow pt-24">
        <Outlet />
      </main>

      <footer className="w-full rounded-t-[3rem] mt-24 bg-[#1a191b] pt-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-24 py-20 w-full max-w-[1920px] mx-auto">
          <div className="space-y-6">
            <div className="text-xl font-bold text-white font-headline">Lumina Noir</div>
            <p className="text-[#adaaab] text-sm leading-relaxed font-body">
              Crafting digital experiences that matter. From concept to code, we bring your vision to life with precision and purpose.
            </p>
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center hover:bg-primary transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-white text-xl">share</span>
              </div>
            </div>
          </div>
          <div className="space-y-6">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs font-headline">Services</h6>
            <ul className="space-y-3 font-body text-xs text-[#adaaab]">
              <li className="hover:text-[#c180ff] cursor-pointer"><Link to="/services">Web Development</Link></li>
              <li className="hover:text-[#c180ff] cursor-pointer"><Link to="/services">App Development</Link></li>
              <li className="hover:text-[#c180ff] cursor-pointer"><Link to="/services">UI/UX Design</Link></li>
              <li className="hover:text-[#c180ff] cursor-pointer"><Link to="/services">Digital Strategy</Link></li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs font-headline">Resources</h6>
            <ul className="space-y-3 font-body text-xs text-[#adaaab]">
              <li className="hover:text-[#c180ff] cursor-pointer"><Link to="/portfolio">Portfolio</Link></li>
              <li className="hover:text-[#c180ff] cursor-pointer"><Link to="/about">Case Studies</Link></li>
              <li className="hover:text-[#c180ff] cursor-pointer"><Link to="/blog">Blog</Link></li>
              <li className="hover:text-[#c180ff] cursor-pointer">Tech Stack</li>
            </ul>
          </div>
          <div className="space-y-6">
            <h6 className="text-white font-bold uppercase tracking-widest text-xs font-headline">Contact</h6>
            <ul className="space-y-3 font-body text-xs text-[#adaaab]">
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">mail</span> hello@luminanoir.digital</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">call</span> +1 (555) 000-0000</li>
              <li className="flex items-center gap-2"><span className="material-symbols-outlined text-[14px]">location_on</span> New York, Digital Nomads</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-outline-variant/10 px-6 md:px-24 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="font-body text-xs text-[#adaaab]">© 2024 Lumina Noir Digital. All Rights Reserved.</p>
          <div className="flex gap-8 font-body text-xs text-[#adaaab]">
            <Link className="hover:text-white font-semibold" to="/privacy">Privacy Policy</Link>
            <Link className="hover:text-white" to="/terms">Terms of Service</Link>
            <Link className="hover:text-white" to="/contact">Contact Us</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
