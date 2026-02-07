import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Rocket, Shield, Search, Smartphone } from "lucide-react";
import heroLaptop from "@/assets/hero-laptop.png";
import heroPhone from "@/assets/hero-phone.png";
import heroDashboard from "@/assets/hero-dashboard.png";

const trustBadges = [
  { icon: Rocket, label: "Fast Delivery" },
  { icon: Shield, label: "Secure Code" },
  { icon: Search, label: "SEO Ready" },
  { icon: Smartphone, label: "100% Responsive" },
];

const HeroSection = () => (
  <section className="relative bg-gradient-hero overflow-hidden min-h-[90vh] flex items-center">
    {/* Background effects */}
    <div className="absolute inset-0">
      <div className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-primary/15 rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-accent/10 rounded-full blur-[120px]" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[200px]" />
    </div>

    <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24 relative z-10">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
        {/* Left: Copy */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-block text-primary text-xs font-semibold tracking-[0.2em] uppercase mb-5 border border-primary/20 rounded-full px-4 py-1.5 bg-primary/5">
            Trusted by Startups & Businesses Worldwide
          </span>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6">
            We Build Websites, Apps &{" "}
            <span className="text-gradient">Digital Products</span>{" "}
            That Grow Businesses
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-xl mb-8 leading-relaxed">
            Affordable pricing • Premium quality • Trusted by startups worldwide.
            Starting at <strong className="text-foreground">₹4,999</strong>.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 mb-10">
            <Link
              to="/contact"
              className="bg-gradient-primary text-primary-foreground px-8 py-4 rounded-xl font-semibold hover:opacity-90 transition-all inline-flex items-center justify-center gap-2 shadow-glow animate-[pulse_3s_ease-in-out_infinite]"
            >
              Get a Free Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="border border-border text-foreground px-8 py-4 rounded-xl font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-4 md:gap-6">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <b.icon size={14} className="text-primary" />
                </div>
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Right: Floating Mockups */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative hidden lg:block h-[500px]"
        >
          {/* Laptop */}
          <motion.img
            src={heroLaptop}
            alt="Website development mockup"
            className="absolute top-0 left-0 w-80 rounded-2xl shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          />
          {/* Phone */}
          <motion.img
            src={heroPhone}
            alt="Mobile app mockup"
            className="absolute bottom-8 left-16 w-40 rounded-2xl shadow-2xl z-10"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          {/* Dashboard */}
          <motion.img
            src={heroDashboard}
            alt="Dashboard analytics mockup"
            className="absolute top-12 right-0 w-72 rounded-2xl shadow-2xl"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />

          {/* Glow orbs */}
          <div className="absolute -top-8 -right-8 w-32 h-32 bg-primary/20 rounded-full blur-[60px]" />
          <div className="absolute -bottom-8 left-8 w-24 h-24 bg-primary/15 rounded-full blur-[50px]" />
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
