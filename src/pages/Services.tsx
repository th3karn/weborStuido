import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import PricingCard from "@/components/PricingCard";
import SEO from "@/components/SEO";
import { services } from "@/lib/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
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
    {/* All Services */}
    <section className="py-20 md:py-28">
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
