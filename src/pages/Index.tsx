import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Zap, DollarSign, Clock, Users, Layers, CheckCircle } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";

const whyUs = [
  { icon: DollarSign, title: "Affordable Pricing", desc: "Premium quality without the premium price tag. Solutions for every budget." },
  { icon: Zap, title: "Modern Technologies", desc: "We use cutting-edge tools and frameworks for future-proof solutions." },
  { icon: Clock, title: "Fast Delivery", desc: "Efficient workflows mean your project launches on time, every time." },
  { icon: Users, title: "Client-Focused", desc: "Your vision drives every decision. We listen, adapt, and deliver." },
  { icon: Layers, title: "Scalable Solutions", desc: "Built to grow with your business — from MVP to enterprise scale." },
  { icon: CheckCircle, title: "End-to-End Service", desc: "Design, development, and deployment — all under one roof." },
];

const Index = () => (
  <div>
    {/* Hero */}
    <section className="relative bg-gradient-hero overflow-hidden">
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 pt-24 pb-20 md:pt-36 md:pb-32 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="inline-block text-primary text-sm font-semibold tracking-widest uppercase mb-4 border border-primary/20 rounded-full px-4 py-1.5 bg-primary/5">
            Digital Agency & Software Studio
          </span>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-6">
            Building Websites, Apps &{" "}
            <span className="text-gradient">Digital Products</span>{" "}
            That Grow Your Business
          </h1>
          <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-8 leading-relaxed">
            High-quality digital solutions at affordable prices. From stunning websites to powerful apps — we turn your ideas into reality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Get a Quote <ArrowRight size={18} />
            </Link>
            <Link
              to="/services"
              className="border border-border text-foreground px-8 py-3.5 rounded-lg font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center"
            >
              View Services
            </Link>
          </div>
        </motion.div>
      </div>
    </section>

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
            View All Services <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="Why Us"
          title="Why Choose Webor Studio"
          description="We combine quality, speed, and affordability to help businesses of all sizes succeed online."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex gap-4 p-5 rounded-xl border border-border/40 bg-gradient-card"
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
            <p className="text-muted-foreground max-w-xl mx-auto mb-8 leading-relaxed">
              Let's turn your idea into a powerful digital product. Get in touch for a free consultation.
            </p>
            <Link
              to="/contact"
              className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
            >
              Contact Us <ArrowRight size={18} />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Index;
