import React from "react";

export default function Pricing() {
  return (
    <main className="pt-32 pb-24 px-6 md:px-12 lg:px-24">
      {/* Hero Section */}
      <header className="max-w-4xl mx-auto text-center mb-20">
        <span className="text-[#c180ff] font-label uppercase tracking-[0.3em] text-xs font-bold mb-4 block">Tailored Investment Tiers</span>
        <h1 className="font-headline text-5xl md:text-7xl font-extrabold tracking-tighter mb-8 leading-none">
          Elite Solutions for <span className="text-gradient">Global Scale</span>.
        </h1>
        <p className="text-on-surface-variant text-lg md:text-xl max-w-2xl mx-auto leading-relaxed font-body">
          Whether you're a local startup or a global enterprise, our curated technology stacks are designed for maximum impact and flawless execution.
        </p>
      </header>

      {/* Pricing Switcher/Tabs (Visual Only) */}
      <div className="flex justify-center mb-16">
        <div className="bg-surface-container-highest p-1 rounded-full flex items-center">
          <button className="px-8 py-3 rounded-full bg-primary text-on-primary font-bold text-sm transition-all font-body">Monthly</button>
          <button className="px-8 py-3 rounded-full text-on-surface-variant font-medium text-sm hover:text-white transition-all font-body">Yearly (-20%)</button>
        </div>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24">
        {/* WordPress/CMS Tier */}
        <div className="bg-surface-container rounded-xl p-8 flex flex-col magnetic-hover">
          <div className="mb-8">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">web</span>
            <h3 className="font-headline text-2xl font-bold mb-2">WordPress</h3>
            <p className="text-on-surface-variant text-sm font-body">Best for blogs, portfolios, and marketing sites.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-extrabold font-headline">$1,499</span>
            <span className="text-on-surface-variant text-sm font-body">/start</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Custom Theme Dev
            </li>
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              SEO Optimization
            </li>
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Elementor/Oxygen Ready
            </li>
            <li className="flex items-center gap-3 text-sm opacity-40 font-body">
              <span className="material-symbols-outlined text-lg">cancel</span>
              Headless Integration
            </li>
          </ul>
          <button className="w-full py-4 border border-outline-variant rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all font-label">Choose CMS</button>
        </div>

        {/* MERN/PHP Tier (MOST POPULAR) */}
        <div className="relative bg-surface-container-highest rounded-xl p-8 flex flex-col magnetic-hover ring-2 ring-secondary shadow-[0_0_60px_rgba(193,128,255,0.15)]">
          <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-secondary text-on-secondary px-4 py-1 rounded-full text-[10px] font-black uppercase tracking-widest font-label">Most Popular</div>
          <div className="mb-8">
            <span className="material-symbols-outlined text-secondary text-3xl mb-4">code_blocks</span>
            <h3 className="font-headline text-2xl font-bold mb-2">Professional</h3>
            <p className="text-on-surface-variant text-sm font-body">Custom Full-Stack MERN or PHP/Laravel apps.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-extrabold text-secondary font-headline">$4,999</span>
            <span className="text-on-surface-variant text-sm font-body">/start</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm font-medium font-body">
              <span className="material-symbols-outlined text-secondary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              Full-Stack Dashboard
            </li>
            <li className="flex items-center gap-3 text-sm font-medium font-body">
              <span className="material-symbols-outlined text-secondary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              API Integration
            </li>
            <li className="flex items-center gap-3 text-sm font-medium font-body">
              <span className="material-symbols-outlined text-secondary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              User Authentication
            </li>
            <li className="flex items-center gap-3 text-sm font-medium font-body">
              <span className="material-symbols-outlined text-secondary text-lg" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
              Database Management
            </li>
          </ul>
          <button className="w-full py-4 bg-secondary text-on-secondary rounded-full text-sm font-bold uppercase tracking-wider shadow-lg shadow-secondary/20 hover:scale-105 transition-all font-label">Start Building</button>
        </div>

        {/* Mobile App Tier */}
        <div className="bg-surface-container rounded-xl p-8 flex flex-col magnetic-hover">
          <div className="mb-8">
            <span className="material-symbols-outlined text-primary text-3xl mb-4">smartphone</span>
            <h3 className="font-headline text-2xl font-bold mb-2">Scale</h3>
            <p className="text-on-surface-variant text-sm font-body">Native iOS & Android mobile experiences.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-extrabold font-headline">$8,499</span>
            <span className="text-on-surface-variant text-sm font-body">/start</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              React Native / Flutter
            </li>
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              App Store Deployment
            </li>
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Push Notifications
            </li>
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-primary text-lg">check_circle</span>
              Offline Support
            </li>
          </ul>
          <button className="w-full py-4 border border-outline-variant rounded-full text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-black transition-all font-label">Go Mobile</button>
        </div>

        {/* Foreign/Enterprise Tier */}
        <div className="bg-surface-container-low rounded-xl p-8 flex flex-col magnetic-hover border border-outline-variant/20">
          <div className="mb-8">
            <span className="material-symbols-outlined text-tertiary text-3xl mb-4">language</span>
            <h3 className="font-headline text-2xl font-bold mb-2">Global</h3>
            <p className="text-on-surface-variant text-sm font-body">Multi-region architecture for global firms.</p>
          </div>
          <div className="mb-8">
            <span className="text-4xl font-extrabold font-headline">Custom</span>
            <span className="text-on-surface-variant text-sm font-body">/quote</span>
          </div>
          <ul className="space-y-4 mb-10 flex-grow">
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
              Multi-language Support
            </li>
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
              Compliance & Security
            </li>
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
              Dedicated Support Team
            </li>
            <li className="flex items-center gap-3 text-sm font-body">
              <span className="material-symbols-outlined text-tertiary text-lg">check_circle</span>
              Custom Microservices
            </li>
          </ul>
          <button className="w-full py-4 bg-tertiary text-on-tertiary-container rounded-full text-sm font-bold uppercase tracking-wider hover:brightness-110 transition-all font-label">Talk to Sales</button>
        </div>
      </div>

      {/* Trust Elements Section */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-12 bg-surface-container-low rounded-xl p-12 mb-24 items-center">
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-primary-container/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-primary text-3xl">verified_user</span>
          </div>
          <h4 className="font-headline text-xl font-bold mb-2">Secure Payments</h4>
          <p className="text-on-surface-variant text-sm font-body">Enterprise-grade encryption and global processing via Stripe.</p>
        </div>
        <div className="flex flex-col items-center text-center border-y md:border-y-0 md:border-x border-outline-variant/30 py-12 md:py-0 px-6">
          <div className="w-16 h-16 rounded-full bg-secondary-container/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-secondary text-3xl">speed</span>
          </div>
          <h4 className="font-headline text-xl font-bold mb-2">Performance Guarantee</h4>
          <p className="text-on-surface-variant text-sm font-body">Sub-second load times and 99.9% uptime for every project.</p>
        </div>
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 rounded-full bg-tertiary-container/20 flex items-center justify-center mb-6">
            <span className="material-symbols-outlined text-tertiary text-3xl">support_agent</span>
          </div>
          <h4 className="font-headline text-xl font-bold mb-2">Priority Support</h4>
          <p className="text-on-surface-variant text-sm font-body">Direct Slack channel and monthly strategy calls included.</p>
        </div>
      </section>

      {/* Detailed Comparison Bento */}
      <section className="mb-24">
        <h2 className="font-headline text-3xl font-extrabold mb-12 text-center">In-Depth Comparison</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-outline-variant/30">
                <th className="py-6 font-headline text-lg opacity-60">Feature</th>
                <th className="py-6 font-headline text-lg">WordPress</th>
                <th className="py-6 font-headline text-lg text-secondary">Professional</th>
                <th className="py-6 font-headline text-lg">Scale</th>
                <th className="py-6 font-headline text-lg">Global</th>
              </tr>
            </thead>
            <tbody className="text-sm font-body">
              <tr className="border-b border-outline-variant/10">
                <td className="py-6 font-medium">Responsive Design</td>
                <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
                <td className="py-6"><span className="material-symbols-outlined text-secondary">check</span></td>
                <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
                <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
              </tr>
              <tr className="border-b border-outline-variant/10">
                <td className="py-6 font-medium">Custom API Hooks</td>
                <td className="py-6 opacity-30">—</td>
                <td className="py-6"><span className="material-symbols-outlined text-secondary">check</span></td>
                <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
                <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
              </tr>
              <tr className="border-b border-outline-variant/10">
                <td className="py-6 font-medium">Native iOS App</td>
                <td className="py-6 opacity-30">—</td>
                <td className="py-6 opacity-30">—</td>
                <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
                <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
              </tr>
              <tr className="border-b border-outline-variant/10">
                <td className="py-6 font-medium">Data Replication</td>
                <td className="py-6 opacity-30">—</td>
                <td className="py-6 opacity-30">—</td>
                <td className="py-6 opacity-30">—</td>
                <td className="py-6"><span className="material-symbols-outlined text-primary">check</span></td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Final CTA Card */}
      <div className="relative overflow-hidden bg-gradient-to-br from-primary-dim/20 to-secondary-dim/20 rounded-xl p-12 md:p-24 text-center border border-outline-variant/20">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary blur-[160px] opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary blur-[160px] opacity-10"></div>
        </div>
        <h2 className="font-headline text-4xl md:text-5xl font-extrabold mb-6 relative z-10 text-white">Ready to transform your <br/>digital footprint?</h2>
        <p className="text-on-surface-variant max-w-xl mx-auto mb-10 text-lg relative z-10 font-body">
          Join over 200+ companies that have scaled their operations with Lumina Noir’s premium development ecosystem.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
          <button className="bg-white text-black px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-xl font-label">Get Started Now</button>
          <button className="bg-transparent border border-white/20 text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest hover:bg-white/10 transition-all font-label">Schedule Demo</button>
        </div>
      </div>
    </main>
  );
}
