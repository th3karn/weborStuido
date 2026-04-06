import React from "react";
import { Helmet } from "react-helmet-async";

export default function Contact() {
  return (
    <main className="pt-24 pb-20 px-6 md:px-24">
      <Helmet>
        <title>Contact | Webor Studio</title>
        <meta name="description" content="Reach out to Webor Studio for professional website and app development services." />
      </Helmet>
      {/* Hero Section */}
      <section className="max-w-6xl mx-auto mb-24 text-center md:text-left">
        <span className="text-secondary font-manrope font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Initiate Contact</span>
        <h1 className="text-5xl md:text-8xl font-headline font-extrabold tracking-tighter leading-[0.9] mb-8">
          Let's architect your <br className="hidden md:block"/>
          <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">digital legacy</span>.
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl leading-relaxed font-light mx-auto md:mx-0">
          We don't build websites; we curate digital experiences that define industry standards. Share your vision, and let's manifest it into reality.
        </p>
      </section>

      {/* Bento Contact Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 max-w-7xl mx-auto">
        {/* Left: Minimalist Form (Main Canvas) */}
        <div className="lg:col-span-7 bg-surface-container rounded-xl p-8 md:p-16 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <form className="space-y-12 relative z-10" onSubmit={(e) => e.preventDefault()}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-3 group-focus-within:text-primary transition-colors">Full Name</label>
                <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary text-xl font-light placeholder:text-on-surface-variant/30 transition-all outline-none" placeholder="Johnathan Sterling" type="text" />
              </div>
              <div className="group">
                <label className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-3 group-focus-within:text-primary transition-colors">Company</label>
                <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary text-xl font-light placeholder:text-on-surface-variant/30 transition-all outline-none" placeholder="Nexus Industries" type="text" />
              </div>
            </div>
            
            <div className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-3 group-focus-within:text-primary transition-colors">Email Address</label>
              <input className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary text-xl font-light placeholder:text-on-surface-variant/30 transition-all outline-none" placeholder="visionary@agency.com" type="email" />
            </div>
            
            <div className="group">
              <label className="block text-[10px] uppercase tracking-[0.2em] text-on-surface-variant font-bold mb-3 group-focus-within:text-primary transition-colors">The Brief</label>
              <textarea className="w-full bg-transparent border-0 border-b border-outline-variant py-4 focus:ring-0 focus:border-primary text-xl font-light placeholder:text-on-surface-variant/30 transition-all resize-none outline-none" placeholder="Tell us about the digital empire you wish to build..." rows={4}></textarea>
            </div>
            
            <button className="group relative inline-flex items-center gap-4 bg-primary px-12 py-6 rounded-full text-on-primary font-manrope font-extrabold uppercase tracking-widest text-sm hover:scale-[1.02] transition-transform overflow-hidden">
              <span className="relative z-10">Deploy Message</span>
              <span className="material-symbols-outlined relative z-10" style={{fontVariationSettings: "'FILL' 1"}}>send</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full duration-1000 transition-transform"></div>
            </button>
          </form>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-5 space-y-8">
          {/* Studio Details */}
          <div className="bg-surface-container-high rounded-xl p-8 md:p-10 border border-outline-variant/10">
            <h3 className="font-manrope text-2xl font-bold mb-8">Studio Details</h3>
            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0">
                  <span className="material-symbols-outlined">alternate_email</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">Direct Inquiries</p>
                  <a className="text-lg md:text-xl font-medium hover:text-primary transition-colors break-all" href="mailto:hello@weborstudio.com">hello@weborstudio.com</a>
                </div>
              </div>
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 rounded-full bg-surface-container-highest flex items-center justify-center text-secondary shrink-0">
                  <span className="material-symbols-outlined">phone_iphone</span>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-1">HQ Connect</p>
                  <a className="text-lg md:text-xl font-medium hover:text-secondary transition-colors block" href="tel:+18005550192">+1 (800) 555-0192</a>
                </div>
              </div>
            </div>
            
            <div className="mt-12 pt-10 border-t border-outline-variant/10">
              <p className="text-[10px] uppercase tracking-widest text-on-surface-variant font-bold mb-6">Social Terminal</p>
              <div className="flex gap-4">
                <a className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:-translate-y-1" href="https://instagram.com/webor_studio" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">camera</span>
                </a>
                <a className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:-translate-y-1" href="https://youtube.com/@webor_studio" target="_blank" rel="noopener noreferrer">
                  <span className="material-symbols-outlined">play_circle</span>
                </a>
                <a className="w-14 h-14 rounded-2xl bg-surface-container-highest flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all hover:-translate-y-1" href="#">
                  <span className="material-symbols-outlined">terminal</span>
                </a>
              </div>
            </div>
          </div>

          {/* Map Component */}
          <div className="relative h-64 md:h-80 bg-surface-container-lowest rounded-xl overflow-hidden group">
            <div className="absolute inset-0 z-10 bg-gradient-to-t from-background via-transparent to-transparent opacity-80"></div>
            <div className="absolute inset-0 z-10 bg-primary/10 mix-blend-overlay"></div>
            <img alt="New York City map" className="w-full h-full object-cover grayscale opacity-40 group-hover:scale-110 transition-transform duration-1000" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDScw0TcW9JYqT8W6LpcAd8WOW45MAFgB7pkq_NwM9dc_xebbMYR2ecLy8b8GOZAZxa04_9_-_nCn1jnaScep2EHy_Ki3UcDokCWO54IrxCM8KrbnbJ8enrMJ5sajlJrsRjOEHLEex58OmclX20yRg00ohcUy-Ug3w0qMTNM0utqrGmDH2UcSyy4ogZVM1l2XL5TvX8lpo2u3AajpocYB58M7BHFPcEC8zXFNZhtuJ6Rqr5noEel7Dy_LtOMLL_rYG1CatcWqKqjFmS" />
            <div className="absolute bottom-6 left-6 z-20">
              <div className="glass-panel p-4 rounded-xl border border-white/5">
                <p className="text-[10px] uppercase tracking-widest font-bold text-primary mb-1">Global HQ</p>
                <p className="text-sm font-medium">72 Madison Ave, New York, NY</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
