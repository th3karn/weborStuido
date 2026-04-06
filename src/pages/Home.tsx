import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full relative bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center pt-24 pb-32 overflow-hidden px-6 md:px-12">
        {/* Refined Particle Background */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1440px]">
            <div className="absolute top-[-10%] left-[10%] w-[500px] h-[500px] bg-primary/20 blur-[140px] rounded-full"></div>
            <div className="absolute bottom-[0%] right-[10%] w-[600px] h-[600px] bg-secondary/15 blur-[160px] rounded-full"></div>
          </div>
        </div>

        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-surface-container-highest/40 border border-white/10 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-tertiary shadow-[0_0_8px_#96f8ff]"></span>
              <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-on-surface-variant font-label">Plans from ₹4,999 / $59</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter">
              We Build <br/><span className="text-transparent bg-clip-text kinetic-glow">Websites</span> <br/>That Convert.
            </h1>
            <p className="text-lg text-on-surface-variant max-w-lg leading-relaxed font-body">
              High-performance digital products engineered for growth. We blend editorial aesthetics with conversion-focused UX.
            </p>
            <div className="flex flex-col sm:flex-row gap-5 pt-4">
              <Link to="/contact">
                <button className="kinetic-glow text-on-primary font-bold px-10 py-5 rounded-full text-lg shadow-[0_20px_40px_rgba(151,169,255,0.2)] hover:scale-105 transition-all font-body">
                  Start Your Project
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="px-10 py-5 rounded-full border border-outline-variant text-white font-semibold hover:bg-surface-variant/50 transition-all font-body">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>

          {/* Refined 3D Mockup Visuals */}
          <div className="lg:col-span-6 relative flex justify-center items-center">
            <div className="relative w-full max-w-2xl group">
              {/* Glow integration */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-secondary/10 blur-[100px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>
              <div className="relative" style={{ perspective: "1000px" }}>
                <img alt="3D Laptop Mockup" className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)] transform rotate-[-4deg] group-hover:rotate-0 transition-all duration-700 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPD0LQb-KFZb6cOHcDC4ot0v1P4DE3bqVz_LwirrHhqLj6kRVzTLchc6JjWx-WaWBAxd76OHQqrHktA7fLf7a7Gu79jKy_2jv5ceEYYlQ68z-W3JTG7qufYJ9xa82ZAdOa9kohIyLoXbAY6PJPCOsyA4oNELDX0gAiua2m8V5BvbEoi_pGSxPnTfOElOxdFCuEzwWvoMH7e-giLpKOH0Y28c-LYqTa1VjZjDA6UJqqjGUz4U3wQyuzOzAqakiu4m15ypS5IdRomNBA" />
                <img alt="3D Mobile Mockup" className="absolute -bottom-10 -right-4 w-[35%] rounded-[2rem] border-[6px] border-surface-container-high drop-shadow-[0_25px_25px_rgba(0,0,0,0.8)] transform rotate-[8deg] group-hover:rotate-0 transition-all duration-700 delay-75 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjF6N_9xTj6sRMMbi7VuWEpoLoCCSVutg0cVcUCXPSNG_U8GiPqeUjUrEhMs-NzIjdUsmi39LRS9Bxh4YmmJznABwTa3usZUrPn6yT731blt-ilptgx3A5i6ErSkAk41f121ygV6b9tJ0JTpr27LYWmKPNfRY6HvPCvP_YGqp5PNIkd0xrldEfHFHRM9FAIuhehJx_4tgi4ycmXrg_EL3CPU29jTcleYSfTuxKKIrO_VjnuxhGn9b4gsxBC00K8Sgk-AuS8fE-FQJ9" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-24 border-y border-white/5 bg-surface-dim/30 hover:bg-surface-dim/50 transition-colors duration-700">
        <div className="max-w-[1440px] mx-auto px-6 md:px-12">
          <p className="text-center text-on-surface-variant text-[10px] font-black uppercase tracking-[0.4em] mb-16 opacity-80 font-label">Trusted by global innovators</p>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-12 items-center justify-items-center opacity-30 hover:opacity-60 transition-opacity duration-500">
            <span className="text-2xl font-black font-headline">AETHER</span>
            <span className="text-2xl font-black font-headline">VORTEX</span>
            <span className="text-2xl font-black font-headline">LUMOS</span>
            <span className="text-2xl font-black font-headline">PRISM</span>
            <span className="text-2xl font-black font-headline">QUARK</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-40 px-6 md:px-12 bg-surface-container-low/20">
        <div className="max-w-[1440px] mx-auto">
          <div className="grid grid-cols-12 gap-8 items-end mb-24">
            <div className="col-span-12 lg:col-span-8 space-y-4">
              <h2 className="text-5xl font-black font-headline tracking-tight">Premium Services</h2>
              <p className="text-on-surface-variant max-w-md text-lg font-body">Tailored solutions for businesses that refuse to settle for mediocrity.</p>
            </div>
            <div className="col-span-12 lg:col-span-4 flex lg:justify-end">
              <Link to="/services" className="text-primary font-bold flex items-center gap-2 group hover:gap-4 transition-all font-label">
                Explore All Services <span className="material-symbols-outlined transition-transform">arrow_forward</span>
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-primary/20 transition-all group cursor-default">
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-primary text-3xl">web</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Web Development</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-body">Lightning-fast, accessible, and conversion-optimized web experiences built with Next.js & Tailwind.</p>
            </div>

            {/* Service Card 2 */}
            <div className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-secondary/20 transition-all group cursor-default">
              <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-secondary text-3xl">smartphone</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Mobile Apps</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-body">Native-feel cross-platform applications that live in your customers' pockets. iOS and Android ready.</p>
            </div>

            {/* Service Card 3 */}
            <div className="glass-panel p-10 rounded-2xl border border-white/5 hover:border-tertiary/20 transition-all group cursor-default">
              <div className="w-14 h-14 rounded-xl bg-tertiary/10 flex items-center justify-center mb-8 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined text-tertiary text-3xl">auto_awesome</span>
              </div>
              <h3 className="text-2xl font-bold font-headline mb-4">Digital Brand</h3>
              <p className="text-on-surface-variant leading-relaxed text-sm font-body">Motion-driven brand identities that stand out in a crowded digital landscape. Design that breathes life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* The Lumina Advantage */}
      <section className="py-40 px-6 md:px-12 relative">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-24 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10 mix-blend-overlay"></div>
              <img alt="Team Collaboration" className="w-full h-[550px] object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBSC95DO00fEFoQlB73vvwiqtplwvC4d8V9EoVbiqaeEN8_nbh2bkZNbi5WoQJhCRDhH4A3yJzhxBeKfDtKP2S94Hc_soCTxuLklYVovRsnbHIZW5vgf8GXY-VT6Z_zM_Ah_TP6Ux7LZFVKFx38-b_x56m3WQUlObeCuNBQ3UBoeX4GoJqMMgQtU4VDJHz-Z83of2BicdRk0SDQCK8oXDfoW21kKsNiAO_PZ_3QSG7CPVwf35654V3YYGVjZx8CErvYthnkTLgBCVZ" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10"></div>
            </div>
            <div className="absolute -bottom-8 -right-8 glass-panel p-8 rounded-2xl border border-white/10 hidden xl:block shadow-2xl hover:-translate-y-2 transition-transform duration-500 z-20">
              <div className="text-6xl font-black text-primary mb-1 font-headline">99%</div>
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant font-label">Client Retention Rate</p>
            </div>
          </div>

          <div className="lg:col-span-6 space-y-12">
            <h2 className="text-5xl font-black font-headline leading-tight">The Lumina Advantage</h2>
            <div className="space-y-10">
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full kinetic-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-primary text-2xl">speed</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-headline">Unmatched Speed</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-md font-body">We ship quality 2x faster than traditional agencies using our modular architecture and agile workflows.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full kinetic-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-primary text-2xl">security</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-headline">Secure by Default</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-md font-body">Enterprise-grade security protocols implemented from the first line of code, ensuring your data remains yours.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <div className="flex-shrink-0 w-14 h-14 rounded-full kinetic-glow flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined text-on-primary text-2xl">monetization_on</span>
                </div>
                <div className="space-y-2">
                  <h4 className="text-xl font-bold font-headline">Transparent Pricing</h4>
                  <p className="text-on-surface-variant text-sm leading-relaxed max-w-md font-body">No hidden fees or surprise invoices. Flat rates for defined projects and clear hourly for retainers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-40 px-6 md:px-12 bg-surface-container">
        <div className="max-w-[1440px] mx-auto text-center mb-24 space-y-6">
          <h2 className="text-5xl font-black font-headline">Invest in Growth</h2>
          <p className="text-on-surface-variant max-w-2xl mx-auto text-lg font-body">Scalable packages designed to evolve with your business from startup to enterprise.</p>
        </div>
        <div className="max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Tier 1 */}
          <div className="bg-background/40 p-10 rounded-2xl border border-white/5 flex flex-col hover:border-primary/20 hover:-translate-y-2 transition-all duration-500">
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4 font-label">Startup Launch</h3>
              <div className="text-4xl font-black font-headline">₹4,999<span className="text-lg text-on-surface-variant font-medium">/mo</span></div>
            </div>
            <ul className="space-y-5 text-sm text-on-surface-variant flex-grow mb-10 font-body">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 3-Page Responsive Website</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> SEO Optimization</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-lg">check_circle</span> 1 Month Support</li>
            </ul>
            <button className="w-full py-4 rounded-full border border-outline-variant font-bold hover:bg-white hover:text-black transition-all font-headline">Get Started</button>
          </div>

          {/* Tier 2 (Most Popular) */}
          <div className="bg-surface-container-highest p-10 rounded-2xl border-2 border-secondary relative flex flex-col shadow-[0_20px_50px_rgba(193,128,255,0.15)] transform md:-translate-y-4 hover:-translate-y-6 transition-transform duration-500">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 kinetic-glow text-on-primary text-[10px] uppercase font-black px-6 py-1.5 rounded-full tracking-[0.25em] font-label">Most Popular</div>
            <div className="mb-8 mt-4">
              <h3 className="text-sm font-bold uppercase tracking-widest text-secondary mb-4 font-label">Business Growth</h3>
              <div className="text-4xl font-black font-headline">₹24,999<span className="text-lg text-on-surface-variant font-medium">/mo</span></div>
            </div>
            <ul className="space-y-5 text-sm text-white flex-grow mb-10 font-body">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Full CMS Integration</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> E-commerce Setup</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Conversion Funnels</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-secondary text-lg">check_circle</span> Advanced Analytics</li>
            </ul>
            <button className="w-full py-4 rounded-full kinetic-glow text-on-primary font-black shadow-lg hover:shadow-[0_0_20px_rgba(193,128,255,0.4)] transition-all font-headline">Select Plan</button>
          </div>

          {/* Tier 3 */}
          <div className="bg-background/40 p-10 rounded-2xl border border-white/5 flex flex-col hover:border-tertiary/20 hover:-translate-y-2 transition-all duration-500">
            <div className="mb-8">
              <h3 className="text-sm font-bold uppercase tracking-widest text-on-surface-variant mb-4 font-label">Enterprise</h3>
              <div className="text-4xl font-black font-headline">$799+<span className="text-lg text-on-surface-variant font-medium">/mo</span></div>
            </div>
            <ul className="space-y-5 text-sm text-on-surface-variant flex-grow mb-10 font-body">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Custom App Development</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Multi-Platform Support</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> Dedicated Manager</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-lg">check_circle</span> 24/7 Priority Support</li>
            </ul>
            <button className="w-full py-4 rounded-full border border-outline-variant font-bold hover:bg-white hover:text-black transition-all font-headline">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-40 px-6 md:px-12 overflow-hidden">
        <div className="max-w-[1440px] mx-auto space-y-20">
          <div className="flex justify-between items-end">
            <h2 className="text-5xl font-black font-headline tracking-tight">Client Stories</h2>
            <div className="flex gap-4">
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-10">
            {/* Testimonial 1 */}
            <div className="flex-shrink-0 w-full md:w-[640px] glass-panel p-12 rounded-2xl border border-white/5 space-y-8 hover:bg-white/5 transition-colors duration-500 cursor-grab active:cursor-grabbing">
              <div className="flex gap-1 text-secondary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-2xl font-medium leading-relaxed italic text-white/90 font-body">"Lumina Noir transformed our outdated platform into a high-converting masterpiece. Our sales increased by 40% within the first month of launch."</p>
              <div className="flex items-center gap-5 pt-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary p-0.5">
                  <div className="w-full h-full rounded-full bg-surface-dim"></div>
                </div>
                <div>
                  <h5 className="font-bold text-lg font-headline">Sarah Chen</h5>
                  <p className="text-sm text-on-surface-variant font-body">CEO, TechFlow Solutions</p>
                </div>
              </div>
            </div>

            {/* Testimonial 2 */}
            <div className="flex-shrink-0 w-full md:w-[640px] glass-panel p-12 rounded-2xl border border-white/5 space-y-8 hover:bg-white/5 transition-colors duration-500 cursor-grab active:cursor-grabbing">
              <div className="flex gap-1 text-secondary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-2xl font-medium leading-relaxed italic text-white/90 font-body">"The speed of execution was incredible. We went from a concept wireframe to a fully functional MVP in just 4 weeks without compromising quality."</p>
              <div className="flex items-center gap-5 pt-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-secondary to-tertiary p-0.5">
                  <div className="w-full h-full rounded-full bg-surface-dim"></div>
                </div>
                <div>
                  <h5 className="font-bold text-lg font-headline">Marcus Thorne</h5>
                  <p className="text-sm text-on-surface-variant font-body">Founder, Urban Pulse</p>
                </div>
              </div>
            </div>
            
            {/* Empty block to allow full scroll padding */}
            <div className="flex-shrink-0 w-12 opacity-0 block pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-40 px-6 md:px-12">
        <div className="max-w-[1440px] mx-auto">
          <div className="kinetic-glow rounded-[2.5rem] p-16 md:p-24 relative overflow-hidden text-center space-y-10 shadow-[0_40px_100px_rgba(151,169,255,0.2)]">
            <div className="absolute inset-0 bg-black/10 mix-blend-overlay"></div>
            <div className="relative z-10">
              <h2 className="text-5xl md:text-7xl font-black font-headline text-on-primary tracking-tighter leading-tight">Ready to Build <br/>Your Legacy?</h2>
              <p className="text-on-primary/90 text-xl max-w-2xl mx-auto leading-relaxed mt-6 font-body">Let's create something remarkable together. Our team is ready to scale your vision into a digital reality.</p>
              <div className="flex justify-center pt-12">
                <Link to="/contact">
                    <button className="bg-white text-on-primary-container font-black px-12 py-6 rounded-full text-xl shadow-2xl hover:scale-105 transition-transform duration-300 font-headline">
                    Book Your Discovery Call
                    </button>
                </Link>
              </div>
            </div>
            {/* Refined Abstract decorative shapes */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] -mr-48 -mt-48 pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-black/5 rounded-full blur-[100px] -ml-48 -mb-48 pointer-events-none"></div>
          </div>
        </div>
      </section>

      {/* Tech Stack Auto-Slider */}
      <section className="py-24 bg-surface-dim/50 overflow-hidden border-t border-white/5">
        <div className="flex items-center gap-16 animate-scroll whitespace-nowrap opacity-50 hover:opacity-100 transition-opacity duration-700">
          {/* Set 1 */}
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="React" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKJCDbMa0yUGye6BB8cm6LhQ9jztFvThXeBpwLhIanZppoPDYc-sPgAKZ__Mmvej9jJL8ZK0gbh2NTR-98an-bPv6C-g5B3OM-oTihbuZwud7qjmw_M5QMcS8pu34dfB7nHffIcAcMRTJyX6L1msNFYPyIbdt2MiyzdvclOP63X48aaQ_5tWFXHkplc87WvwgOXYA6N9x6dLPJmxoAIJvTEi0KUN01D-zludS0PXJz8BtarSs7fRzD65DTr-zcw22tIe-zB8NrlPOb"/> React</div>
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="Node" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmK2eUlvu_pKL0xnS83K1pH1HZD-DF-wX0PIBcXUWSawHWGhjodR9Pzb9UW2lXXgZ8HzIeZhYgm2hBcnE6ZEkqurcTu-CMJpH3G_lxlCEleghOAppgtzPvnqu_7HSjPIq6dP7b_T3eKNJM1x20HqvBUWVmpP9ewnXnr0pZr_Fhu_iDj51CAag4d2sEvrpzTcKml38Zk3OSjfdCKUq-ZoTBeFuEx8gglqiyYnf0BoJCeeYb7nmBcM9IGhqNKTf8Rk1ax-SqwV7-Sw_8"/> Node.js</div>
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="Tailwind" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fIRrOSVPetJyDMMQIyr1Yi5migeRqSHgyRoUCzqq8lDh-02lRAWkh3q9YyyzeXWGeZsva6yvYyWPQGOKxnRgpEE0ie8UpQFk2HgGfIG4xSdqw6T0B2r9jlrnXLBLsqHRiXc4uFf2SEHsni29RLienkASeXVls0sw7VY8MmZqxkPVRJw-Lsf03RF8pBn34-3fP9VegC8l9mwebHHhYRsV584muuRJEF9sJnx4BZ6PE0iB_dyzLYVeXfS9CGlUeZx9A_G0VribizFO"/> Tailwind</div>
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="Python" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTHSQKfoZEvLQFZ7eudQ69oBp1OI8uPMjjbVdA9YromyjWIha6UlKxObea4Qo8ucFlKcHvbihVGIc4w8td13p1OlZc79JAQMa47WHT9rf2FTM1bjGCFO3Ec0q133LstzzbYxYS2himBDaYcWBWBUXC6cEeuBsEqWydv_PyZGWL3D6x2DTdsCsbtRy1opAxD8uh385GNpzMQOgF9rlFwRZTs20ZeG54ZdPDmpKL-LZLlMtrAgRfofRPXPbUCEjqtZxqLK7a76XVj8B-"/> Python</div>
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="AWS" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrjI5Mj7LI5lhv11hdtn7NK3eliC0krbLXdzy122z7ZK3TXW3lJZuWz0X7yJgg4SYBY1IjwSJKxwKoXYbylTcvGj2zQz3N_MC2Nr0oSbw02Qj0Wv9isUtB_Z03qFuanLTVBqBJs9Nd8tHF2tDSdKzoyo_hQBWwYW4CfR2AG1eSyWkV9_A_ysYq9hQjE9WiXCIdzWcgqiY6AhFJfwrTuZ8QpUpM3R_uGb2yKzgyieMk5rONxhTFFL3-0BPtnMki79ccaJvznIRcMZb"/> AWS</div>

          {/* Set 2 */}
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="React" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKJCDbMa0yUGye6BB8cm6LhQ9jztFvThXeBpwLhIanZppoPDYc-sPgAKZ__Mmvej9jJL8ZK0gbh2NTR-98an-bPv6C-g5B3OM-oTihbuZwud7qjmw_M5QMcS8pu34dfB7nHffIcAcMRTJyX6L1msNFYPyIbdt2MiyzdvclOP63X48aaQ_5tWFXHkplc87WvwgOXYA6N9x6dLPJmxoAIJvTEi0KUN01D-zludS0PXJz8BtarSs7fRzD65DTr-zcw22tIe-zB8NrlPOb"/> React</div>
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="Node" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmK2eUlvu_pKL0xnS83K1pH1HZD-DF-wX0PIBcXUWSawHWGhjodR9Pzb9UW2lXXgZ8HzIeZhYgm2hBcnE6ZEkqurcTu-CMJpH3G_lxlCEleghOAppgtzPvnqu_7HSjPIq6dP7b_T3eKNJM1x20HqvBUWVmpP9ewnXnr0pZr_Fhu_iDj51CAag4d2sEvrpzTcKml38Zk3OSjfdCKUq-ZoTBeFuEx8gglqiyYnf0BoJCeeYb7nmBcM9IGhqNKTf8Rk1ax-SqwV7-Sw_8"/> Node.js</div>
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="Tailwind" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fIRrOSVPetJyDMMQIyr1Yi5migeRqSHgyRoUCzqq8lDh-02lRAWkh3q9YyyzeXWGeZsva6yvYyWPQGOKxnRgpEE0ie8UpQFk2HgGfIG4xSdqw6T0B2r9jlrnXLBLsqHRiXc4uFf2SEHsni29RLienkASeXVls0sw7VY8MmZqxkPVRJw-Lsf03RF8pBn34-3fP9VegC8l9mwebHHhYRsV584muuRJEF9sJnx4BZ6PE0iB_dyzLYVeXfS9CGlUeZx9A_G0VribizFO"/> Tailwind</div>
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="Python" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTHSQKfoZEvLQFZ7eudQ69oBp1OI8uPMjjbVdA9YromyjWIha6UlKxObea4Qo8ucFlKcHvbihVGIc4w8td13p1OlZc79JAQMa47WHT9rf2FTM1bjGCFO3Ec0q133LstzzbYxYS2himBDaYcWBWBUXC6cEeuBsEqWydv_PyZGWL3D6x2DTdsCsbtRy1opAxD8uh385GNpzMQOgF9rlFwRZTs20ZeG54ZdPDmpKL-LZLlMtrAgRfofRPXPbUCEjqtZxqLK7a76XVj8B-"/> Python</div>
          <div className="flex items-center gap-4 text-2xl font-bold text-on-surface/40 font-headline"><img alt="AWS" className="w-8 h-8 opacity-40 mix-blend-screen" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrjI5Mj7LI5lhv11hdtn7NK3eliC0krbLXdzy122z7ZK3TXW3lJZuWz0X7yJgg4SYBY1IjwSJKxwKoXYbylTcvGj2zQz3N_MC2Nr0oSbw02Qj0Wv9isUtB_Z03qFuanLTVBqBJs9Nd8tHF2tDSdKzoyo_hQBWwYW4CfR2AG1eSyWkV9_A_ysYq9hQjE9WiXCIdzWcgqiY6AhFJfwrTuZ8QpUpM3R_uGb2yKzgyieMk5rONxhTFFL3-0BPtnMki79ccaJvznIRcMZb"/> AWS</div>
        </div>
      </section>
    </div>
  );
}
