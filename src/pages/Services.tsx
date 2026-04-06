import React from "react";
import { Helmet } from "react-helmet-async";

export default function Services() {
  return (
    <main className="relative pt-32">
      <Helmet>
        <title>Web Development & App Services | Webor Studio</title>
        <meta name="description" content="Get high-quality websites and apps at affordable pricing with modern UI and fast delivery." />
      </Helmet>
      {/* Hero Section */}
      <section className="px-12 py-24 max-w-[1920px] mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary/10 border border-secondary/20 text-secondary font-label text-xs tracking-widest uppercase font-bold">Expertise Redefined</span>
            <h1 className="text-[clamp(3.5rem,8vw,5.5rem)] leading-[1.05] font-headline font-extrabold tracking-tighter text-white">
              The <span className="text-primary italic">Webor Studio</span> Agency Core.
            </h1>
            <p className="text-on-surface-variant text-xl max-w-xl leading-relaxed font-light font-body">
              We don't just build products; we curate digital experiences that vibrate with energy. From high-performance web apps to AI-driven intelligence.
            </p>
          </div>
          <div className="relative group">
            <div className="absolute -inset-4 bg-gradient-to-r from-primary to-secondary opacity-10 blur-3xl group-hover:opacity-20 transition-opacity"></div>
            <div className="aspect-[4/3] rounded-xl overflow-hidden glass-panel border border-outline-variant/10 shadow-2xl relative">
              <img alt="Modern workstation" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-3FT7oL1UcRejVD4vsg72YG53a3dSxH9MbBPhFrdUWTz6FV0WO2YFxmLhW2a0eZku4pbM_NPDdVmrM6XI3WKd-4b11SnH0bIavPT9yHIg37fpgne75YKjRXGSyrmbPhteFuN4prqLU_vZqdo20u5LwPviMlH2oY8io5N8_jkecjeMT25_IYz_o9KyhU9OUhCMeiCoueeYUhaslasCROs0TRprk2C7KselOLudASbJXzikzUT1XiGjDG-blzvRSyoJuhuvA564pKr-"/>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid - Bento Style */}
      <section className="px-12 py-32 bg-surface-container-low rounded-t-xl">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex justify-between items-end mb-24">
            <div className="max-w-2xl">
              <h2 className="text-5xl font-headline font-bold tracking-tight mb-6">Our Offerings</h2>
              <p className="text-on-surface-variant font-body">A holistic approach to digital excellence across every touchpoint.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-xs uppercase tracking-widest text-outline-variant font-bold font-label">Scroll to Explore / 08 Services</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Website Development */}
            <div className="md:col-span-8 group magnetic-hover transition-all duration-500">
              <div className="h-[500px] rounded-xl bg-surface-container border border-outline-variant/10 p-12 relative overflow-hidden flex flex-col justify-between">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-primary text-4xl mb-6">language</span>
                  <h3 className="text-4xl font-headline font-bold mb-4">Website Dev</h3>
                  <p className="text-on-surface-variant max-w-md font-body">Precision-engineered marketing sites built for conversion and high-end brand storytelling.</p>
                </div>
                <div className="relative z-10 flex items-center justify-between">
                  <button className="text-primary font-bold flex items-center gap-2 group-hover:gap-4 transition-all font-label">
                    LEARN MORE <span className="material-symbols-outlined">arrow_forward</span>
                  </button>
                  <div className="text-6xl font-black text-outline-variant/10 font-headline">01</div>
                </div>
                <img alt="Browser window" className="absolute top-0 right-0 w-1/2 h-full object-cover opacity-20 group-hover:opacity-40 transition-opacity" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAds9jUORuFEs7RTrxijfdiggwLmwgxc-ZqCytQRerNOb2BnPDFpzOuLzW0R6aJ_qZZRaMrsA8ehhe8casYS4ts61zoVcjKpngv4N-CPfu-z-FzHL10A15eJnURJMbfFF9saslB-MEdsQRV5vvEUtRfI7ysrzBe_BVF65lS1pu5ZYPA0BPgByt3INTBsXsXBFrR2S7NaMUzZ1pgv0CZl_0QmN-CWaHRZ_LcC_Oe2IFQva7GdL6u-Ijc8M5a2N2okNqaBp9jxK-4sfgB"/>
              </div>
            </div>

            {/* Web Apps */}
            <div className="md:col-span-4 group magnetic-hover transition-all duration-500">
              <div className="h-[500px] rounded-xl bg-surface-container-highest/60 border border-outline-variant/10 p-10 relative flex flex-col justify-between">
                <div>
                  <span className="material-symbols-outlined text-secondary text-4xl mb-6">dashboard</span>
                  <h3 className="text-3xl font-headline font-bold mb-4">Web Apps</h3>
                  <p className="text-on-surface-variant text-sm font-body">Complex SaaS platforms and internal tools with seamless interactivity.</p>
                </div>
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-background/50 border border-outline-variant/20 mt-4">
                  <img alt="Dashboard" className="w-full h-full object-cover opacity-50" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuR6Sv8cC2ykPz91AH3oE1jj_g_0ZU8RFN4-O_liqvenP7TnxPzSQMtHztByYkYzghwLY7LJLx9ocC1APu2sIBgxscsgG4Img2putBnoiPx4o6R6xB740VXoqh6ytDU7nxQ9GWgqxDBuvbWWFQuCq9aunsxLXyPTpsJ9CPYksZ6i_3xvHsMepLx1umL4t91FPqXUb5tpLsapR3EXXAaVJmskzeQ7Nmb16Osd7qmCBa7FiVBHniD2I3bYXq1rfhpdyKMYNtltKt8SdG"/>
                </div>
                <button className="mt-8 text-secondary font-bold text-xs tracking-widest uppercase font-label">Get Quote</button>
              </div>
            </div>

            {/* Mobile Apps */}
            <div className="md:col-span-4 group magnetic-hover transition-all duration-500">
              <div className="h-[500px] rounded-xl bg-[#131314] border border-outline-variant/10 p-10 flex flex-col items-center text-center justify-center space-y-6">
                <span className="material-symbols-outlined text-tertiary text-6xl" style={{fontVariationSettings: "'FILL' 1"}}>smartphone</span>
                <h3 className="text-3xl font-headline font-bold">Mobile Apps</h3>
                <p className="text-on-surface-variant text-sm font-body">iOS and Android experiences that feel native and perform beautifully.</p>
                <button className="bg-surface-bright px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-tertiary hover:text-on-tertiary transition-colors font-label">Details</button>
              </div>
            </div>

            {/* UI/UX Design */}
            <div className="md:col-span-8 group magnetic-hover transition-all duration-500">
              <div className="h-[500px] rounded-xl bg-gradient-to-br from-surface-container to-surface-container-low border border-outline-variant/10 p-12 relative overflow-hidden flex flex-col justify-end">
                <div className="absolute top-12 left-12">
                  <span className="material-symbols-outlined text-primary-dim text-4xl mb-6">brush</span>
                  <h3 className="text-4xl font-headline font-bold mb-4">UI/UX Design</h3>
                </div>
                <div className="grid grid-cols-2 gap-12 relative z-10">
                  <p className="text-on-surface-variant leading-relaxed font-body">We focus on the 'The Kinetic Glow' - creating interfaces that feel alive and intuitive to every touch.</p>
                  <div className="flex justify-end items-end pb-2">
                    <button className="w-16 h-16 rounded-full border border-primary text-primary flex items-center justify-center hover:bg-primary hover:text-on-primary transition-all">
                      <span className="material-symbols-outlined">north_east</span>
                    </button>
                  </div>
                </div>
                <div className="absolute -bottom-20 -right-20 w-80 h-80 bg-primary/5 blur-[100px] rounded-full"></div>
              </div>
            </div>

            {/* Desktop Apps */}
            <div className="md:col-span-4 group magnetic-hover transition-all duration-500">
              <div className="h-[400px] rounded-xl bg-surface-container border border-outline-variant/10 p-10 flex flex-col justify-between">
                <span className="material-symbols-outlined text-outline-variant text-3xl">desktop_windows</span>
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-2">Desktop Apps</h3>
                  <p className="text-on-surface-variant text-sm font-body">Robust cross-platform software solutions for heavy lifting.</p>
                </div>
                <div className="h-1 w-12 bg-primary group-hover:w-full transition-all duration-500"></div>
              </div>
            </div>

            {/* Video Editing */}
            <div className="md:col-span-4 group magnetic-hover transition-all duration-500">
              <div className="h-[400px] rounded-xl bg-surface-container border border-outline-variant/10 p-10 flex flex-col justify-between relative overflow-hidden">
                <div className="relative z-10">
                  <span className="material-symbols-outlined text-error text-3xl">movie_edit</span>
                  <h3 className="text-2xl font-headline font-bold mt-4">Video Editing</h3>
                </div>
                <p className="text-on-surface-variant text-sm relative z-10 font-body">High-end color grading and editorial cuts for premium brands.</p>
                <img alt="Editing suite" className="absolute inset-0 w-full h-full object-cover opacity-10 grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbv4JzZMpqgbEAv4MpoUyTtlMKzy8tXqcK8bQX5T4z_fhzKLPFros_MNYECr9ANbj_mDNcPwWn32EZcMirjP_hRSLIcPZSM-HmXRN8eJRIVfY5oFKYP0bCCRr_ZvxCxUGe6pqy-EytBgcDhaQ-8KJFHSjrCGFwRDhEoMGT4cqj4mQbadxh1IItE7ptCd4ykHUI1mJrZ9TgC8SdZgbYk-2vyzqRVah1COJvoWCNQjHSGlhTHdOyDWd05Ftom18zbIQA8NsWBm7IQsvl"/>
              </div>
            </div>

            {/* Graphic Design */}
            <div className="md:col-span-4 group magnetic-hover transition-all duration-500">
              <div className="h-[400px] rounded-xl bg-surface-container border border-outline-variant/10 p-10 flex flex-col justify-between">
                <span className="material-symbols-outlined text-secondary-fixed-dim text-3xl">token</span>
                <div>
                  <h3 className="text-2xl font-headline font-bold mb-2">Graphic Design</h3>
                  <p className="text-on-surface-variant text-sm font-body">Visual identities that command authority and stand the test of time.</p>
                </div>
                <button className="text-xs font-bold tracking-widest text-primary font-label">PORTFOLIO</button>
              </div>
            </div>

            {/* AI Solutions */}
            <div className="md:col-span-12 group transition-all duration-700">
              <div className="rounded-xl bg-surface-container-highest p-1 bg-gradient-to-r from-primary/20 via-secondary/20 to-tertiary/20">
                <div className="bg-background rounded-[inherit] p-16 flex flex-col md:flex-row items-center gap-12">
                  <div className="flex-1">
                    <div className="inline-flex items-center gap-3 px-4 py-1 rounded-full bg-tertiary-container/10 border border-tertiary-container/20 text-tertiary mb-8">
                      <span className="material-symbols-outlined text-lg">auto_awesome</span>
                      <span className="text-xs font-bold uppercase tracking-widest font-label">Next-Gen Technology</span>
                    </div>
                    <h3 className="text-5xl font-headline font-extrabold mb-6 tracking-tighter">AI Solutions</h3>
                    <p className="text-xl text-on-surface-variant mb-8 max-w-xl font-body">Integrating custom Large Language Models and computer vision into your existing ecosystem to automate and elevate.</p>
                    <button className="bg-gradient-to-r from-primary to-secondary text-on-primary font-bold px-10 py-4 rounded-full hover:shadow-[0_0_30px_rgba(151,169,255,0.4)] transition-all font-label">
                      BOOK AI AUDIT
                    </button>
                  </div>
                  <div className="w-full md:w-1/3 aspect-square rounded-xl overflow-hidden glass-panel flex items-center justify-center p-4">
                    <div className="w-full h-full rounded-lg bg-surface-container-low flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
                      <span className="material-symbols-outlined text-9xl text-primary opacity-20">memory</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-12">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h2 className="text-6xl font-headline font-extrabold tracking-tighter text-white">Ready to curate your <span className="text-secondary">digital legacy</span>?</h2>
          <p className="text-on-surface-variant text-xl font-body">Let's build something that doesn't just work, but inspires.</p>
          <div className="flex flex-wrap justify-center gap-6">
            <button className="bg-primary-container text-on-primary-container px-12 py-5 rounded-full font-bold text-lg hover:scale-105 transition-all font-body">Start a Project</button>
            <button className="border border-outline-variant px-12 py-5 rounded-full font-bold text-lg hover:bg-surface-bright transition-all text-white font-body">View All Work</button>
          </div>
        </div>
      </section>
    </main>
  );
}
