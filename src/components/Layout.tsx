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

  const isActive = (path: string) => pathname === path;

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-container selection:text-on-primary-container min-h-screen flex flex-col overflow-x-hidden">
      {/* TopNavBar */}
      <nav className="fixed top-0 w-full z-50 bg-surface-bright/40 backdrop-blur-2xl shadow-[0_0_40px_rgba(151,169,255,0.06)]">
        <div className="flex justify-between items-center px-6 md:px-12 py-6 max-w-[1920px] mx-auto">
          <Link to="/" className="text-2xl font-black tracking-tighter text-[#97a9ff]">
            Webor Studio
          </Link>
          <div className="hidden md:flex gap-8 font-manrope tracking-tight text-sm font-medium uppercase font-headline">
            <Link to="/" className={`${isActive('/') ? 'text-[#c180ff] border-b-2 border-[#c180ff] pb-1' : 'text-[#adaaab] hover:text-white transition-colors'}`}>Home</Link>
            <Link to="/services" className={`${isActive('/services') ? 'text-[#c180ff] border-b-2 border-[#c180ff] pb-1' : 'text-[#adaaab] hover:text-white transition-colors'}`}>Services</Link>
            <Link to="/pricing" className={`${isActive('/pricing') ? 'text-[#c180ff] border-b-2 border-[#c180ff] pb-1' : 'text-[#adaaab] hover:text-white transition-colors'}`}>Pricing</Link>
            <Link to="/portfolio" className={`${isActive('/portfolio') ? 'text-[#c180ff] border-b-2 border-[#c180ff] pb-1' : 'text-[#adaaab] hover:text-white transition-colors'}`}>Portfolio</Link>
            <Link to="/about" className={`${isActive('/about') ? 'text-[#c180ff] border-b-2 border-[#c180ff] pb-1' : 'text-[#adaaab] hover:text-white transition-colors'}`}>About</Link>
            <Link to="/blog" className={`${isActive('/blog') ? 'text-[#c180ff] border-b-2 border-[#c180ff] pb-1' : 'text-[#adaaab] hover:text-white transition-colors'}`}>Blog</Link>
          </div>
          <Link to="/contact">
            <button className="bg-primary-container text-on-primary-container px-6 py-2 rounded-full text-sm font-bold uppercase tracking-widest hover:scale-105 hover:shadow-lg transition-all duration-300 ease-out font-headline">
              Get a Free Quote
            </button>
          </Link>
        </div>
      </nav>

      <main className="relative z-10 w-full flex-grow pt-8">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="w-full rounded-t-[3rem] mt-24 bg-[#1a191b]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-6 md:px-24 py-20 w-full max-w-[1920px] mx-auto">
          <div className="col-span-1">
            <div className="text-xl font-bold text-white mb-6 font-headline">Webor Studio</div>
            <p className="font-inter text-xs text-[#adaaab] max-w-[200px]">Curating digital experiences that redefine the standards of luxury and performance.</p>
          </div>
          <div className="col-span-1 space-y-4">
            <h5 className="text-white font-semibold text-sm uppercase tracking-widest font-headline">Connect</h5>
            <ul className="space-y-2">
              <li><a className="font-inter text-xs text-[#adaaab] hover:text-[#c180ff] transition-transform hover:translate-y-[-2px] block" href="https://instagram.com/webor_studio" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a className="font-inter text-xs text-[#adaaab] hover:text-[#c180ff] transition-transform hover:translate-y-[-2px] block" href="https://youtube.com/@webor_studio" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a className="font-inter text-xs text-[#adaaab] hover:text-[#c180ff] transition-transform hover:translate-y-[-2px] block" href="#">LinkedIn</a></li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h5 className="text-white font-semibold text-sm uppercase tracking-widest font-headline">Legal</h5>
            <ul className="space-y-2">
              <li><Link className="font-inter text-xs text-[#adaaab] hover:text-[#c180ff] transition-transform hover:translate-y-[-2px] block" to="/privacy">Privacy Policy</Link></li>
              <li><Link className="font-inter text-xs text-[#adaaab] hover:text-[#c180ff] transition-transform hover:translate-y-[-2px] block" to="/terms">Terms of Service</Link></li>
              <li><Link className="font-inter text-xs text-[#adaaab] hover:text-[#c180ff] transition-transform hover:translate-y-[-2px] block" to="/cookie">Cookie Policy</Link></li>
            </ul>
          </div>
          <div className="col-span-1 space-y-4">
            <h5 className="text-white font-semibold text-sm uppercase tracking-widest font-headline">Contact</h5>
            <p className="font-inter text-xs text-[#adaaab]">hello@weborstudio.com</p>
            <p className="font-inter text-xs text-[#adaaab]">New York<br/>Global Agency</p>
          </div>
          <div className="col-span-1 md:col-span-4 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="font-inter text-xs text-[#adaaab]">© 2024 Webor Studio. All Rights Reserved.</p>
            <div className="flex gap-8">
              <button 
                onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}
                className="font-inter text-xs text-[#adaaab] hover:text-white"
              >
                Back to top
              </button>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
