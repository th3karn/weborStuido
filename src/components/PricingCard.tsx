import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface Props {
  title: string;
  price: string;
  features: string[];
  popular?: boolean;
  index: number;
}

const PricingCard = ({ title, price, features, popular, index }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.4, delay: index * 0.1 }}
    className={`relative bg-gradient-card border rounded-2xl p-6 md:p-8 transition-all duration-500 hover:-translate-y-1 hover:shadow-glow ${
      popular
        ? "border-primary/60 shadow-glow scale-[1.02]"
        : "border-border/60 hover:border-primary/40"
    }`}
  >
    {popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full shadow-glow">
        Most Popular
      </span>
    )}
    <h3 className="font-display font-semibold text-lg mb-1">{title}</h3>
    <p className="font-display text-3xl font-bold text-primary mb-5">{price}</p>
    <ul className="space-y-3 mb-6">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check className="text-primary shrink-0 mt-0.5" size={16} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
    <Link
      to="/contact"
      className={`w-full inline-flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold transition-all duration-300 ${
        popular
          ? "bg-gradient-primary text-primary-foreground hover:opacity-90 shadow-glow"
          : "border border-border hover:border-primary/40 text-foreground hover:text-primary"
      }`}
    >
      Get Started <ArrowRight size={14} />
    </Link>
  </motion.div>
);

export default PricingCard;
