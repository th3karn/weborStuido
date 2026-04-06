import React from "react";

export default function Portfolio() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <header className="relative pt-24 pb-32 px-12 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/10 to-transparent blur-[120px]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <span className="inline-block px-4 py-1 rounded-full border border-outline-variant/30 text-secondary font-label text-xs uppercase tracking-widest mb-6">The Curator's Gallery</span>
          <h1 className="font-headline text-7xl md:text-8xl font-extrabold tracking-tighter leading-[0.9] mb-8 max-w-4xl">
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-tr from-[#97a9ff] to-[#c180ff]">Aesthetics</span> Reimagined.
          </h1>
          <p className="text-on-surface-variant text-xl max-w-2xl font-light leading-relaxed">
            We orchestrate high-end digital experiences where code meets curation. Exploring the intersection of human-centric design and technical precision.
          </p>
        </div>
      </header>
      
      {/* Project Filter & Portfolio Grid */}
      <div className="px-12 pb-24 max-w-[1920px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
          <div className="flex flex-wrap gap-4">
            <button className="px-8 py-2 rounded-full bg-secondary-container text-on-secondary-container font-medium transition-all duration-300">All Projects</button>
            <button className="px-8 py-2 rounded-full bg-surface-container-highest/40 text-on-surface-variant hover:text-white transition-all duration-300">Web</button>
            <button className="px-8 py-2 rounded-full bg-surface-container-highest/40 text-on-surface-variant hover:text-white transition-all duration-300">App</button>
            <button className="px-8 py-2 rounded-full bg-surface-container-highest/40 text-on-surface-variant hover:text-white transition-all duration-300">AI</button>
          </div>
          <div className="text-left md:text-right">
            <p className="text-on-surface-variant font-label text-xs uppercase tracking-[0.2em] mb-2">Showing</p>
            <p className="text-4xl font-headline font-bold">12 Selected Works</p>
          </div>
        </div>
        
        {/* Bento Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          {/* Project 1: Featured (Large) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low">
            <div className="aspect-[16/9] w-full overflow-hidden">
              <img alt="Minimalist dashboard for luxury automotive brand" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCD5yRwP_z8Wx-K_1biSFNGDDRchrfNnKCZjPMl49xNQLyniOCtiNw8hRf38xft6aHP5a8RtOd2Cv7tERFavJ51r2YLOvi-9mx9FkzvlL0HudIDYEGkXXQNzntQE3NZ2cqzsGLEE-5dstx0Mb0XX28ElIOxT83smF-Iw_0HrNutQqUWgSzQcQRzkyQsmjRanMDfKfTZXoV2IHVx_Hdj_5VrseGXj88reSJ6aLEinEkGTfjzXIxrl2-Ms5_GvG99SF7Tl5sWHvCVG1UD"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest to-transparent opacity-60"></div>
            <div className="absolute bottom-0 left-0 w-full p-6 md:p-12 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
                <div>
                  <span className="text-primary font-label text-xs uppercase tracking-widest mb-2 block">Web & Branding</span>
                  <h3 className="text-4xl font-headline font-bold mb-4">Aura Mobility</h3>
                  <p className="text-on-surface-variant max-w-sm mb-0 md:mb-6">Redefining the digital presence for high-performance electric vehicles with a focus on immersive kinetic visuals.</p>
                </div>
                <div className="text-left md:text-right">
                  <p className="text-secondary font-headline text-3xl font-bold">42%</p>
                  <p className="text-on-surface-variant text-xs uppercase tracking-wider">Conversion Lift</p>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-outline-variant/10 flex flex-wrap gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-700 hidden md:flex">
                <span className="px-4 py-1 rounded-full border border-outline-variant/30 text-[10px] uppercase">Next.js</span>
                <span className="px-4 py-1 rounded-full border border-outline-variant/30 text-[10px] uppercase">Three.js</span>
                <span className="px-4 py-1 rounded-full border border-outline-variant/30 text-[10px] uppercase">GSAP</span>
              </div>
            </div>
          </div>
          
          {/* Project 2 */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low">
            <div className="aspect-square w-full overflow-hidden">
              <img alt="Sleek mobile app for wealth management" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2pbh8k7QDvOYhC-4cVZGeQTMfHWqAWslc4ywiyktZEn8CuVYvdiPoOqK6XC7WYUwBMZULcUwurrgWK1n-Nu69J1ilXwSfYj9a_Z2_6_Y93oPvX6429ZHY9RgmZx6CYbslUHkRrGSLY7hf89oi-LWkQ5DveBZNawfK4RhXxHUOgpBJTYSWh1ejczuNmUmiz7JXvCO-Cuf7qdd7hVTI_4Bk-rXw02seLV2rb4PobXmpK4DPFNDvuq7H9FSvIBXAvXENQGYYDYwVUCff"/>
            </div>
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <span className="text-secondary font-label text-xs uppercase tracking-widest mb-1 block">App Design</span>
              <h3 className="text-2xl font-headline font-bold mb-2">Vertex Finance</h3>
              <p className="text-on-surface-variant text-sm mb-6">A frictionless mobile experience for modern portfolio diversification.</p>
              <div className="flex justify-between items-center">
                <span className="text-primary font-headline font-bold">$2.4M</span>
                <span className="material-symbols-outlined text-on-surface">arrow_outward</span>
              </div>
            </div>
          </div>
          
          {/* Project 3 */}
          <div className="md:col-span-4 group relative overflow-hidden rounded-xl bg-surface-container-low">
            <div className="aspect-square w-full overflow-hidden">
              <img alt="AI-driven data visualization platform" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAsAbsKu2ZzpxbYQKeGlLvgXprZGXccOsjUBKPpDtL39ilK_4xCuO3J1-Phs7KpKSgEy9iMAPicXkT6OEyyGyMii1JaCRRqFHB8dVQgNwH354ANQgbJXDRcd5Lp7OZ039s7KsJkUendkls5lvk7G5WoKfGeG8yXX9DYT3CrqdaggRvM3f1NyBkRcxMbGkSbG4rG95gd16gtRZpX886BFX0yAXSGsG3J76ga0F-KU0iCfh16250ZwVNZ9dM9hevEPzP9Z03XTPoSSg3z"/>
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-surface-container-lowest/80 p-8 flex flex-col justify-end">
              <h3 className="text-2xl font-headline font-bold">Neuralis AI</h3>
              <p className="text-on-surface-variant text-xs uppercase tracking-widest mt-2">Core Engine & Visualization</p>
            </div>
          </div>
          
          {/* Project 4 (Wide) */}
          <div className="md:col-span-8 group relative overflow-hidden rounded-xl bg-surface-container-low">
            <div className="aspect-[21/9] w-full overflow-hidden">
              <img alt="E-commerce experience for luxury fashion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWjt3_LUg942lj-v2Bj8Ab2cLIn3nyvECET7pQAy1m2y1T_QbVO8UYEZs2o-N1NldiDZhOAybK5DRbsF2VAbmuwwGLcIdNWC9Pvunl5hciZf2V1dYQD9Ndegi1YS2yUo7F1t9ZUxjuGG8KCteHLlIc3vikhaZ5wbEJoT3TJqtKj5yiVqKYPDz0hfBiHFuUpFijFI4dvWDbeNLQIqJtjNYMN_8LN28VuX0AxiZYiNBnoj8NBnh_FyVMxHkVV5RJyNSQyAmXrmbcyYxA"/>
            </div>
            <div className="absolute inset-0 flex items-center justify-center bg-surface-container-lowest/40 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm">
              <div className="text-center">
                <p className="text-primary font-label uppercase tracking-[0.4em] mb-4">View Case Study</p>
                <h3 className="text-5xl font-headline font-extrabold">Onyx Couture</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Parallax Section Divider */}
      <section className="h-[600px] flex items-center justify-center relative my-32 bg-fixed bg-center bg-no-repeat bg-cover" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBqR7U2ELWh0lucZc_8D9FYAqToOOyuBmhud2lL2zM-RFmztt6v0oNS1iYb7M-muzf5NMWrGxo2m4xrAkE3m2PTGz0nhZsX-tgxAU13IjMJR5gUryS08jByh-HnRl7CtSoZTUrY5DaaDPGeIEOQgPFWUiAJuSIpQuNPQyXUUm2ooR4IWxECcZwFs-JB-I9T-LJ4Q-em7Ksv_AAtW3T6wS9OrLI7CorLleo7ps5FxuUbJpkmHm4ivp3SMlI99mYYBZmq4d2yJAW87CyD')"}}>
        <div className="absolute inset-0 bg-background/60 backdrop-blur-[2px]"></div>
        <div className="relative z-10 text-center max-w-3xl px-6">
          <h2 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter mb-8 italic">"Design is not just what it looks like, it's how it moves."</h2>
          <p className="text-on-surface-variant font-label uppercase tracking-widest">Our Creative Philosophy</p>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="px-12 py-32 max-w-7xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-y border-outline-variant/10 py-24">
          <div className="text-center">
            <h4 className="text-6xl font-headline font-black text-primary mb-2">124+</h4>
            <p className="text-on-surface-variant text-sm uppercase tracking-widest font-label">Deliveries</p>
          </div>
          <div className="text-center">
            <h4 className="text-6xl font-headline font-black text-secondary mb-2">14</h4>
            <p className="text-on-surface-variant text-sm uppercase tracking-widest font-label">Design Awards</p>
          </div>
          <div className="text-center">
            <h4 className="text-6xl font-headline font-black text-tertiary mb-2">99%</h4>
            <p className="text-on-surface-variant text-sm uppercase tracking-widest font-label">Client Satisfaction</p>
          </div>
          <div className="text-center">
            <h4 className="text-6xl font-headline font-black text-on-surface mb-2">8yr</h4>
            <p className="text-on-surface-variant text-sm uppercase tracking-widest font-label">Digital Mastery</p>
          </div>
        </div>
      </section>
    </div>
  );
}
