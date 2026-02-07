import { motion } from "framer-motion";
import { DollarSign, Zap, Clock, Users, Layers, CheckCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";

const whyUs = [
  { icon: DollarSign, title: "Low-Cost for Startups", desc: "Premium quality without the premium price tag. Solutions starting at just ₹4,999." },
  { icon: Zap, title: "Premium UI Design", desc: "UI inspired by global brands — clean, modern & conversion-focused." },
  { icon: Clock, title: "On-Time Delivery", desc: "Efficient workflows & transparent communication. Your project launches on time." },
  { icon: Users, title: "Client-Focused", desc: "Your vision drives every decision. We listen, adapt, and deliver." },
  { icon: Layers, title: "Scalable Solutions", desc: "Built to grow with your business — from MVP to enterprise scale." },
  { icon: CheckCircle, title: "Post-Delivery Support", desc: "We don't disappear after launch. Ongoing support to keep you running." },
];

const WhyUsSection = () => (
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
            className="flex gap-4 p-5 rounded-2xl border border-border/40 bg-gradient-card hover:border-primary/40 hover:shadow-glow hover:-translate-y-1 transition-all duration-500"
          >
            <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 group-hover:bg-primary/20">
              <item.icon className="text-primary" size={22} />
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
);

export default WhyUsSection;
