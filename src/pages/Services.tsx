import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import SEO from "@/components/SEO";
import { services } from "@/lib/services";
import { Link } from "react-router-dom";
import { ArrowRight, Server, Headphones } from "lucide-react";
import { motion } from "framer-motion";

const wordpressPricing = [
  {
    title: "Starter",
    price: "₹4,999",
    features: ["1–3 Pages", "Mobile Responsive", "Basic SEO", "Contact Form", "Fast Delivery"],
  },
  {
    title: "Professional",
    price: "₹9,999",
    popular: true,
    features: ["5–7 Pages", "Premium UI Design", "SEO Optimized", "Speed Optimized", "WhatsApp Integration"],
  },
  {
    title: "Business / Premium",
    price: "₹19,999",
    features: ["10+ Pages", "Custom Design", "Advanced SEO", "Security Setup", "Payment Integration"],
  },
];

const otherPricing = [
  {
    title: "PHP / MERN Stack Websites",
    price: "From ₹19,999",
    features: ["Custom Backend", "Secure APIs", "Admin Panel", "Database Integration", "Fully Scalable Architecture"],
  },
  {
    title: "Mobile Apps (Android / iOS)",
    price: "From ₹29,999",
    features: ["Modern UI/UX", "API Integration", "Authentication", "Play Store Ready", "Performance Optimized"],
  },
];

const globalPricing = [
  {
    title: "Websites",
    price: "From $799",
    features: ["WordPress or Custom Stack", "Premium UI Design", "SEO & Speed Optimized", "Responsive on All Devices", "Post-Delivery Support"],
  },
  {
    title: "Custom Web Apps & SaaS",
    price: "On Request",
    features: ["Custom Architecture", "Scalable Backend", "Admin Dashboard", "API Development", "Dedicated Project Manager"],
  },
  {
    title: "Mobile Apps",
    price: "From $1,199",
    features: ["Android & iOS", "Modern UI/UX", "API Integration", "App Store Deployment", "Performance Optimized"],
  },
];

const Services = () => (
  <div>
    <SEO
      title="WordPress, MERN & App Development Services | Webor Studio"
      description="Get high-quality WordPress websites, MERN stack apps & mobile applications at low cost. Prices start from ₹4,999 INR."
      canonical="https://weborstudio.com/services"
    />
    {/* Free Hosting & Support Features */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="🎁 What You Get Free"
          title="Unmatched Value with Every Project"
          description="We don't just build — we support. Every project comes with free hosting and long-term customer support."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {[
            {
              icon: Server,
              title: "3 Years Free Hosting",
              subtitle: "WordPress Websites",
              description: "Every WordPress website comes with 3 years of free, fast & secure hosting — no hidden charges.",
              highlight: "3 Years",
            },
            {
              icon: Server,
              title: "2 Years Free Hosting",
              subtitle: "MERN / Django / Custom Sites",
              description: "All custom-built websites (MERN, Django, PHP) include 2 years of free reliable hosting.",
              highlight: "2 Years",
            },
            {
              icon: Headphones,
              title: "3 Years Customer Support",
              subtitle: "All Projects",
              description: "Get 3 years of dedicated customer support for every project — bug fixes, updates & guidance included.",
              highlight: "3 Years",
            },
          ].map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="relative bg-gradient-card border border-border/60 rounded-2xl p-6 md:p-8 hover:border-primary/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-500 text-center"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <item.icon className="text-primary" size={26} />
              </div>
              <span className="inline-block bg-primary/10 text-primary text-xs font-bold px-3 py-1 rounded-full mb-3">
                {item.highlight}
              </span>
              <h3 className="font-display font-bold text-lg mb-1">{item.title}</h3>
              <p className="text-xs text-primary/70 font-semibold mb-2">{item.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    {/* All Services */}
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="Our Services"
          title="Everything You Need to Go Digital"
          description="From concept to launch, we handle every aspect of your digital presence. Choose from our comprehensive range of services."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* WordPress Pricing */}
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="💻 WordPress Websites"
          title="Website Development Pricing"
          description="Perfect for businesses, portfolios, landing pages & blogs. Get started with affordable plans."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {wordpressPricing.map((p, i) => (
            <PricingCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Custom & App Pricing */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="🚀 Custom Solutions"
          title="Custom Web & Mobile App Pricing"
          description="Best for custom dashboards, SaaS, portals & scalable platforms."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
          {otherPricing.map((p, i) => (
            <PricingCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* Global Pricing */}
    <section className="py-20 md:py-28 bg-card/30">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="🌍 For Global Clients"
          title="Pricing for USA / UK / International"
          description="World-class quality at competitive global rates. All prices in USD."
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {globalPricing.map((p, i) => (
            <PricingCard key={p.title} {...p} index={i} />
          ))}
        </div>
      </div>
    </section>

    {/* CTA */}
    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-card border border-border/60 rounded-2xl p-10 md:p-14"
        >
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Need a custom solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            We'll build exactly what your business needs. Let's discuss your project.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </motion.div>
      </div>
    </section>
  </div>
);

export default Services;
