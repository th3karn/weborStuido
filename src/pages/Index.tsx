import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, DollarSign, Clock, Users, Layers, CheckCircle, Shield, Rocket, Search, Smartphone, Instagram } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import TechTicker from "@/components/TechTicker";
import { services } from "@/lib/services";

const trustBadges = [
  { icon: Rocket, label: "Fast Delivery" },
  { icon: Shield, label: "Secure Code" },
  { icon: Search, label: "SEO Ready" },
  { icon: Smartphone, label: "100% Responsive" },
];

const whyUs = [
  { icon: DollarSign, title: "Low-Cost for Startups", desc: "Premium quality without the premium price tag. Solutions starting at just ₹4,999." },
  { icon: Zap, title: "Premium UI Design", desc: "UI inspired by global brands — clean, modern & conversion-focused." },
  { icon: Clock, title: "On-Time Delivery", desc: "Efficient workflows & transparent communication. Your project launches on time." },
  { icon: Users, title: "Client-Focused", desc: "Your vision drives every decision. We listen, adapt, and deliver." },
  { icon: Layers, title: "Scalable Solutions", desc: "Built to grow with your business — from MVP to enterprise scale." },
  { icon: CheckCircle, title: "Post-Delivery Support", desc: "We don't disappear after launch. Ongoing support to keep you running." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-16 md:pt-36 md:pb-28 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5 bg-primary/5">
            Trusted by Startups & Businesses Worldwide
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            We Build Websites & Apps That{" "}
            <span className="text-gradient">Convert Visitors Into Customers</span>
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            High-quality WordPress, MERN & mobile apps starting at <strong className="text-foreground">₹4,999</strong>. Clean, modern & conversion-focused design with honest pricing.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link
              to="/contact"
              className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2 animate-[pulse_3s_ease-in-out_infinite]"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center"
            >
              View Pricing
            </Link>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {trustBadges.map((b) => (
              <div key={b.label} className="flex items-center gap-2 text-sm text-muted-foreground">
                <b.icon size={16} className="text-primary" />
                <span>{b.label}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>

    {/* Tech Ticker */}
    <TechTicker />

    {/* Services Preview */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="What We Do"
          title="Our Services"
          description="End-to-end digital solutions to bring your vision to life."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
          >
            View All Services & Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="Why Us"
          title="Why Choose Webor Studio?"
          description="Trusted by startups & small businesses. Clean, modern & conversion-focused design at affordable pricing."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl border border-border/40 bg-gradient-card hover:border-primary/40 hover:shadow-glow transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                <item.icon className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-display font-semibold mb-1">{item.title}</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* Social Proof / Instagram */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
            <Instagram className="text-primary-foreground" size={28} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-1">Follow @webor_studio on Instagram</h3>
            <p className="text-muted-foreground text-sm">Watch real projects, demos, reels & exclusive offers.</p>
          </div>
          <a
            href="https://instagram.com/webor_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/40 text-primary px-6 py-2.5 rounded-lg text-sm font-semibold hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
          >
            <Instagram size={16} /> Follow Us
          </a>
        </motion.div>
      </div>
    </section>

    {/* CTA */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-card border border-border/60 rounded-2xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
              Professional quality. Honest pricing. Real results. Get in touch for a free consultation.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Websites starting at <strong className="text-foreground">₹4,999 INR</strong> · <strong className="text-foreground">$799 USD</strong> for global clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
