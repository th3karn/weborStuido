import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="w-full relative bg-background text-on-surface">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden px-12 min-h-screen flex items-center">
        {/* Particle Background Simulation */}
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary blur-[120px] rounded-full"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary blur-[120px] rounded-full"></div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center relative z-10 max-w-7xl mx-auto">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-container-highest/60 border border-outline-variant/15">
              <span className="flex h-2 w-2 rounded-full bg-tertiary shadow-[0_0_10px_#96f8ff]"></span>
              <span className="text-xs font-semibold tracking-widest uppercase text-on-surface-variant font-label">Plans starting from ₹4,999 / $59</span>
            </div>
            <h1 className="text-6xl md:text-8xl font-black font-headline leading-[0.9] tracking-tighter">
              We Build <span className="text-transparent bg-clip-text kinetic-glow">Websites</span> That Convert.
            </h1>
            <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-body">
              High-performance digital products engineered for growth. We blend editorial aesthetics with conversion-focused UX.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 pt-4">
              <Link to="/contact">
                <button className="kinetic-glow text-on-primary font-bold px-10 py-5 rounded-full text-lg shadow-[0_20px_40px_rgba(151,169,255,0.2)] magnetic-hover transition-all font-body">
                  Start Your Project
                </button>
              </Link>
              <Link to="/portfolio">
                <button className="px-10 py-5 rounded-full border border-outline-variant text-white font-semibold hover:bg-surface-variant transition-all font-body">
                  View Portfolio
                </button>
              </Link>
            </div>
          </div>
          
          <div className="relative group w-full">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/20 to-secondary/20 blur-3xl opacity-50"></div>
            {/* 3D Mockup Visuals restored to static exact HTML version */}
            <div className="relative space-y-[-100px]">
              <img alt="3D Laptop Mockup" className="rounded-xl shadow-2xl transform rotate-[-5deg] group-hover:rotate-0 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDPD0LQb-KFZb6cOHcDC4ot0v1P4DE3bqVz_LwirrHhqLj6kRVzTLchc6JjWx-WaWBAxd76OHQqrHktA7fLf7a7Gu79jKy_2jv5ceEYYlQ68z-W3JTG7qufYJ9xa82ZAdOa9kohIyLoXbAY6PJPCOsyA4oNELDX0gAiua2m8V5BvbEoi_pGSxPnTfOElOxdFCuEzwWvoMH7e-giLpKOH0Y28c-LYqTa1VjZjDA6UJqqjGUz4U3wQyuzOzAqakiu4m15ypS5IdRomNBA"/>
              <img alt="3D Mobile Mockup" className="absolute -bottom-12 -right-8 w-64 rounded-[2.5rem] border-[8px] border-surface-container shadow-2xl transform rotate-[10deg] group-hover:rotate-0 transition-transform duration-700 delay-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjF6N_9xTj6sRMMbi7VuWEpoLoCCSVutg0cVcUCXPSNG_U8GiPqeUjUrEhMs-NzIjdUsmi39LRS9Bxh4YmmJznABwTa3usZUrPn6yT731blt-ilptgx3A5i6ErSkAk41f121ygV6b9tJ0JTpr27LYWmKPNfRY6HvPCvP_YGqp5PNIkd0xrldEfHFHRM9FAIuhehJx_4tgi4ycmXrg_EL3CPU29jTcleYSfTuxKKIrO_VjnuxhGn9b4gsxBC00K8Sgk-AuS8fE-FQJ9"/>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Bar */}
      <section className="py-20 border-y border-outline-variant/10">
        <div className="max-w-7xl mx-auto px-12">
          <p className="text-center text-on-surface-variant text-sm font-bold uppercase tracking-[0.3em] mb-12 font-label">Trusted by global innovators</p>
          <div className="flex flex-wrap justify-center items-center gap-16 md:gap-24 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
            <span className="text-2xl font-black font-headline">AETHER</span>
            <span className="text-2xl font-black font-headline">VORTEX</span>
            <span className="text-2xl font-black font-headline">LUMOS</span>
            <span className="text-2xl font-black font-headline">PRISM</span>
            <span className="text-2xl font-black font-headline">QUARK</span>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-32 px-12 bg-surface-container-low">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="space-y-4">
              <h2 className="text-5xl font-black font-headline">Premium Services</h2>
              <p className="text-on-surface-variant max-w-md font-body">Tailored solutions for businesses that refuse to settle for mediocrity.</p>
            </div>
            <Link to="/services" className="text-primary font-bold flex items-center gap-2 group font-label">
              Explore All Services <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Service Card 1 */}
            <div className="glass-panel p-10 rounded-xl space-y-6 hover:translate-y-[-10px] transition-all duration-500 border border-outline-variant/10">
              <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-primary text-4xl" data-icon="web">web</span>
              </div>
              <h3 className="text-2xl font-bold font-headline">Web Development</h3>
              <p className="text-on-surface-variant leading-relaxed font-body">Lightning-fast, accessible, and conversion-optimized web experiences built with Next.js & Tailwind.</p>
            </div>
            {/* Service Card 2 */}
            <div className="glass-panel p-10 rounded-xl space-y-6 hover:translate-y-[-10px] transition-all duration-500 border border-outline-variant/10">
              <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-secondary text-4xl" data-icon="smartphone">smartphone</span>
              </div>
              <h3 className="text-2xl font-bold font-headline">Mobile Apps</h3>
              <p className="text-on-surface-variant leading-relaxed font-body">Native-feel cross-platform applications that live in your customers' pockets. iOS and Android ready.</p>
            </div>
            {/* Service Card 3 */}
            <div className="glass-panel p-10 rounded-xl space-y-6 hover:translate-y-[-10px] transition-all duration-500 border border-outline-variant/10">
              <div className="w-16 h-16 rounded-2xl bg-tertiary/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-tertiary text-4xl" data-icon="auto_awesome">auto_awesome</span>
              </div>
              <h3 className="text-2xl font-bold font-headline">Digital Brand</h3>
              <p className="text-on-surface-variant leading-relaxed font-body">Motion-driven brand identities that stand out in a crowded digital landscape. Design that breathes life.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 px-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="relative">
            <img alt="Team Collaboration" className="rounded-xl object-cover h-[500px] w-full" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBSC95DO00fEFoQlB73vvwiqtplwvC4d8V9EoVbiqaeEN8_nbh2bkZNbi5WoQJhCRDhH4A3yJzhxBeKfDtKP2S94Hc_soCTxuLklYVovRsnbHIZW5vgf8GXY-VT6Z_zM_Ah_TP6Ux7LZFVKFx38-b_x56m3WQUlObeCuNBQ3UBoeX4GoJqMMgQtU4VDJHz-Z83of2BicdRk0SDQCK8oXDfoW21kKsNiAO_PZ_3QSG7CPVwf35654V3YYGVjZx8CErvYthnkTLgBCVZ"/>
            <div className="absolute -bottom-10 -right-10 glass-panel p-8 rounded-xl border border-outline-variant/10 hidden md:block">
              <div className="text-5xl font-black text-primary font-headline">99%</div>
              <p className="text-sm font-bold uppercase tracking-wider text-on-surface-variant font-label">Client Retention Rate</p>
            </div>
          </div>
          <div className="space-y-10">
            <h2 className="text-5xl font-black font-headline">The Lumina Advantage</h2>
            <div className="space-y-8">
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full kinetic-glow flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary">speed</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-headline">Unmatched Speed</h4>
                  <p className="text-on-surface-variant font-body">We ship quality 2x faster than traditional agencies using our modular architecture.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full kinetic-glow flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary">security</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-headline">Secure by Default</h4>
                  <p className="text-on-surface-variant font-body">Enterprise-grade security protocols implemented from the first line of code.</p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full kinetic-glow flex items-center justify-center">
                  <span className="material-symbols-outlined text-on-primary">monetization_on</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold font-headline">Transparent Pricing</h4>
                  <p className="text-on-surface-variant font-body">No hidden fees. Flat rates for defined projects and clear hourly for retainers.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-32 px-12 bg-surface-container">
        <div className="max-w-7xl mx-auto text-center mb-20 space-y-6">
          <h2 className="text-5xl font-black font-headline">Invest in Growth</h2>
          <p className="text-on-surface-variant max-w-xl mx-auto font-body">Scalable packages designed to evolve with your business from startup to enterprise.</p>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Tier 1 */}
          <div className="bg-background p-12 rounded-xl border border-outline-variant/10 space-y-8 flex flex-col hover:border-primary/30 transition-all">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-headline">Startup Launch</h3>
              <div className="text-4xl font-black font-headline">₹4,999<span className="text-lg text-on-surface-variant font-normal">/mo</span></div>
            </div>
            <ul className="space-y-4 text-on-surface-variant flex-grow font-body">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 3-Page Responsive Website</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> SEO Optimization</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-primary text-sm">check_circle</span> 1 Month Support</li>
            </ul>
            <button className="w-full py-4 rounded-full border border-outline-variant font-bold hover:bg-surface-variant transition-all font-body">Get Started</button>
          </div>
          {/* Tier 2 (Most Popular) */}
          <div className="bg-surface-container-highest p-12 rounded-xl border-2 border-secondary relative space-y-8 flex flex-col transform md:scale-105 shadow-[0_0_60px_rgba(193,128,255,0.1)]">
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 kinetic-glow text-on-primary text-[10px] uppercase font-black px-4 py-1 rounded-full tracking-[0.2em] font-label">Most Popular</div>
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-headline">Business Growth</h3>
              <div className="text-4xl font-black font-headline">₹24,999<span className="text-lg text-on-surface-variant font-normal">/mo</span></div>
            </div>
            <ul className="space-y-4 text-on-surface-variant flex-grow font-body">
              <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Full CMS Integration</li>
              <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> E-commerce Setup</li>
              <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Conversion Funnels</li>
              <li className="flex items-center gap-3 text-white"><span className="material-symbols-outlined text-secondary text-sm">check_circle</span> Advanced Analytics</li>
            </ul>
            <button className="w-full py-4 rounded-full kinetic-glow text-on-primary font-bold shadow-lg magnetic-hover transition-all font-body">Select Plan</button>
          </div>
          {/* Tier 3 */}
          <div className="bg-background p-12 rounded-xl border border-outline-variant/10 space-y-8 flex flex-col hover:border-tertiary/30 transition-all">
            <div className="space-y-2">
              <h3 className="text-xl font-bold font-headline">Enterprise</h3>
              <div className="text-4xl font-black font-headline">$799+<span className="text-lg text-on-surface-variant font-normal">/mo</span></div>
            </div>
            <ul className="space-y-4 text-on-surface-variant flex-grow font-body">
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Custom App Development</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Multi-Platform Support</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> Dedicated Project Manager</li>
              <li className="flex items-center gap-3"><span className="material-symbols-outlined text-tertiary text-sm">check_circle</span> 24/7 Priority Support</li>
            </ul>
            <button className="w-full py-4 rounded-full border border-outline-variant font-bold hover:bg-surface-variant transition-all font-body">Contact Sales</button>
          </div>
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="py-32 px-12 overflow-hidden">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="flex justify-between items-center">
            <h2 className="text-5xl font-black font-headline">Client Stories</h2>
            <div className="flex gap-4">
              <button className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="w-14 h-14 rounded-full border border-outline-variant flex items-center justify-center hover:bg-surface-variant transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>
          <div className="flex gap-8 overflow-x-auto no-scrollbar pb-12">
            {/* Testimonial 1 */}
            <div className="flex-shrink-0 w-full md:w-[600px] glass-panel p-12 rounded-xl space-y-8 border border-outline-variant/10">
              <div className="flex gap-1 text-secondary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-2xl font-medium leading-relaxed italic text-white font-body">"Lumina Noir transformed our outdated platform into a high-converting masterpiece. Our sales increased by 40% within the first month of launch."</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-primary to-secondary"></div>
                <div>
                  <h5 className="font-bold font-headline">Sarah Chen</h5>
                  <p className="text-sm text-on-surface-variant font-body">CEO, TechFlow Solutions</p>
                </div>
              </div>
            </div>
            {/* Testimonial 2 */}
            <div className="flex-shrink-0 w-full md:w-[600px] glass-panel p-12 rounded-xl space-y-8 border border-outline-variant/10">
              <div className="flex gap-1 text-secondary">
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
                <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>star</span>
              </div>
              <p className="text-2xl font-medium leading-relaxed italic text-white font-body">"The speed of execution was incredible. We went from a concept wireframe to a fully functional MVP in just 4 weeks."</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-tr from-secondary to-tertiary"></div>
                <div>
                  <h5 className="font-bold font-headline">Marcus Thorne</h5>
                  <p className="text-sm text-on-surface-variant font-body">Founder, Urban Pulse</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Let's Build CTA */}
      <section className="py-32 px-12">
        <div className="max-w-7xl mx-auto kinetic-glow rounded-xl p-20 relative overflow-hidden text-center space-y-8">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="relative z-10">
            <h2 className="text-5xl md:text-7xl font-black font-headline text-on-primary tracking-tighter">Ready to Build Your Legacy?</h2>
            <p className="text-on-primary/80 text-xl max-w-2xl mx-auto leading-relaxed font-body">Let's create something remarkable together. Our team is ready to scale your vision.</p>
            <div className="flex justify-center pt-8">
              <button className="bg-white text-on-primary-container font-black px-12 py-6 rounded-full text-xl shadow-2xl hover:scale-105 transition-transform duration-300 font-headline">
                Book Your Discovery Call
              </button>
            </div>
          </div>
          {/* Abstract decorative shapes */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 rounded-full blur-3xl -ml-32 -mb-32"></div>
        </div>
      </section>

      {/* Tech Stack Slider */}
      <section className="py-20 bg-surface-container-low overflow-hidden">
        <div className="flex items-center gap-12 animate-scroll opacity-30">
          <div className="flex-shrink-0 px-12 flex items-center gap-4 text-3xl font-bold grayscale"><img alt="React" className="w-12 h-12 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKJCDbMa0yUGye6BB8cm6LhQ9jztFvThXeBpwLhIanZppoPDYc-sPgAKZ__Mmvej9jJL8ZK0gbh2NTR-98an-bPv6C-g5B3OM-oTihbuZwud7qjmw_M5QMcS8pu34dfB7nHffIcAcMRTJyX6L1msNFYPyIbdt2MiyzdvclOP63X48aaQ_5tWFXHkplc87WvwgOXYA6N9x6dLPJmxoAIJvTEi0KUN01D-zludS0PXJz8BtarSs7fRzD65DTr-zcw22tIe-zB8NrlPOb"/> React</div>
          <div className="flex-shrink-0 px-12 flex items-center gap-4 text-3xl font-bold grayscale"><img alt="Node" className="w-12 h-12 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBmK2eUlvu_pKL0xnS83K1pH1HZD-DF-wX0PIBcXUWSawHWGhjodR9Pzb9UW2lXXgZ8HzIeZhYgm2hBcnE6ZEkqurcTu-CMJpH3G_lxlCEleghOAppgtzPvnqu_7HSjPIq6dP7b_T3eKNJM1x20HqvBUWVmpP9ewnXnr0pZr_Fhu_iDj51CAag4d2sEvrpzTcKml38Zk3OSjfdCKUq-ZoTBeFuEx8gglqiyYnf0BoJCeeYb7nmBcM9IGhqNKTf8Rk1ax-SqwV7-Sw_8"/> Node.js</div>
          <div className="flex-shrink-0 px-12 flex items-center gap-4 text-3xl font-bold grayscale"><img alt="Tailwind" className="w-12 h-12 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC2fIRrOSVPetJyDMMQIyr1Yi5migeRqSHgyRoUCzqq8lDh-02lRAWkh3q9YyyzeXWGeZsva6yvYyWPQGOKxnRgpEE0ie8UpQFk2HgGfIG4xSdqw6T0B2r9jlrnXLBLsqHRiXc4uFf2SEHsni29RLienkASeXVls0sw7VY8MmZqxkPVRJw-Lsf03RF8pBn34-3fP9VegC8l9mwebHHhYRsV584muuRJEF9sJnx4BZ6PE0iB_dyzLYVeXfS9CGlUeZx9A_G0VribizFO"/> Tailwind</div>
          <div className="flex-shrink-0 px-12 flex items-center gap-4 text-3xl font-bold grayscale"><img alt="Python" className="w-12 h-12 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTHSQKfoZEvLQFZ7eudQ69oBp1OI8uPMjjbVdA9YromyjWIha6UlKxObea4Qo8ucFlKcHvbihVGIc4w8td13p1OlZc79JAQMa47WHT9rf2FTM1bjGCFO3Ec0q133LstzzbYxYS2himBDaYcWBWBUXC6cEeuBsEqWydv_PyZGWL3D6x2DTdsCsbtRy1opAxD8uh385GNpzMQOgF9rlFwRZTs20ZeG54ZdPDmpKL-LZLlMtrAgRfofRPXPbUCEjqtZxqLK7a76XVj8B-"/> Python</div>
          <div className="flex-shrink-0 px-12 flex items-center gap-4 text-3xl font-bold grayscale"><img alt="AWS" className="w-12 h-12 rounded" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBHrjI5Mj7LI5lhv11hdtn7NK3eliC0krbLXdzy122z7ZK3TXW3lJZuWz0X7yJgg4SYBY1IjwSJKxwKoXYbylTcvGj2zQz3N_MC2Nr0oSbw02Qj0Wv9isUtB_Z03qFuanLTVBqBJs9Nd8tHF2tDSdKzoyo_hQBWwYW4CfR2AG1eSyWkV9_A_ysYq9hQjE9WiXCIdzWcgqiY6AhFJfwrTuZ8QpUpM3R_uGb2yKzgyieMk5rONxhTFFL3-0BPtnMki79ccaJvznIRcMZb"/> AWS</div>
          {/* Repeat for infinite scroll effect */}
          <div className="flex-shrink-0 px-12 flex items-center gap-4 text-3xl font-bold grayscale">React</div>
          <div className="flex-shrink-0 px-12 flex items-center gap-4 text-3xl font-bold grayscale">Node.js</div>
        </div>
      </section>
    </div>
  );
}
