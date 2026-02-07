import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const stats = [
  { value: 100, suffix: "+", label: "Projects Delivered" },
  { value: 50, suffix: "+", label: "Happy Clients" },
  { value: 5, suffix: "+", label: "Countries Served" },
  { value: 98, suffix: "%", label: "Client Satisfaction" },
];

const logos = [
  "TechStart", "GreenLeaf", "DataSync", "BloomCo", "NexaWave", "CloudPeak",
];

const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span ref={ref} className="font-display text-4xl md:text-5xl font-bold text-gradient">
      {count}{suffix}
    </span>
  );
};

const TrustSection = () => (
  <section className="py-16 md:py-20 border-y border-border/30">
    <div className="container mx-auto px-4 lg:px-8">
      {/* Logo strip */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <p className="text-sm text-muted-foreground uppercase tracking-widest mb-6">
          Trusted by startups, creators & global clients
        </p>
        <div className="flex flex-wrap justify-center gap-8 md:gap-12">
          {logos.map((name) => (
            <div
              key={name}
              className="px-6 py-3 rounded-lg border border-border/30 bg-secondary/20 text-muted-foreground font-display font-semibold text-sm hover:border-primary/30 hover:text-primary/80 transition-all duration-300"
            >
              {name}
            </div>
          ))}
        </div>
      </motion.div>

      {/* Stat counters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="text-center"
          >
            <AnimatedCounter value={s.value} suffix={s.suffix} />
            <p className="text-muted-foreground text-sm mt-2">{s.label}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustSection;
