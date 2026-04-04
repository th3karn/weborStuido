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
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden selection:bg-primary/30">
      <header className="fixed top-0 w-full z-50 glass-card border-b-0 py-4 px-6 md:px-12 transition-all duration-300">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link to="/" className="text-3xl font-semibold tracking-tighter text-gradient font-heading">
            Webor<span className="text-white">Studio</span>.
          </Link>
          <nav className="hidden md:flex gap-8 text-lg font-medium text-white/70">
            <Link to="/services" className="hover:text-white transition-colors">Services</Link>
            <Link to="/pricing" className="hover:text-white transition-colors">Pricing</Link>
            <Link to="/portfolio" className="hover:text-white transition-colors">Portfolio</Link>
            <Link to="/about" className="hover:text-white transition-colors">About</Link>
          </nav>
          <div className="flex items-center gap-4">
            <Link to="/contact" className="hidden md:flex px-8 py-3 text-lg rounded-full bg-blue-500/20 hover:bg-blue-500/40 text-white border border-blue-500/50 transition-all shadow-[0_0_15px_rgba(59,130,246,0.3)] hover:shadow-[0_0_25px_rgba(59,130,246,0.6)]">
              Let's Talk
            </Link>
          </div>
        </div>
      </header>

      <main className="relative z-10 w-full flex-grow pt-24">
        <Outlet />
      </main>

      <footer className="w-full relative z-10 glass-card border-t border-white/10 pt-32 pb-12 px-6 md:px-12 mt-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-semibold text-gradient mb-4">WeborStudio.</h3>
            <p className="text-white/60 max-w-sm mb-6">
              A premium, futuristic, and highly trustable global digital agency brand transforming ideas into digital reality.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Company</h4>
            <ul className="space-y-2 text-white/60">
              <li><Link to="/about" className="hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link to="/portfolio" className="hover:text-blue-400 transition-colors">Portfolio</Link></li>
              <li><Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link></li>
              <li><Link to="/pricing" className="hover:text-blue-400 transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-medium text-white mb-4">Connect</h4>
            <ul className="space-y-2 text-white/60">
              <li><a href="https://instagram.com/webor_studio" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors">Instagram</a></li>
              <li><a href="https://youtube.com/@webor_studio" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors">YouTube</a></li>
              <li><Link to="/contact" className="hover:text-blue-400 transition-colors">Contact Form</Link></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-white/40 text-sm">
          <p>&copy; {new Date().getFullYear()} Webor Studio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link to="/privacy-policy" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link to="/terms-of-service" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
