import { motion } from "framer-motion";
import { Check } from "lucide-react";

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
    className={`relative bg-gradient-card border rounded-xl p-6 md:p-8 transition-all duration-300 hover:shadow-glow ${
      popular
        ? "border-primary/60 shadow-glow scale-[1.02]"
        : "border-border/60 hover:border-primary/40"
    }`}
  >
    {popular && (
      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-primary text-primary-foreground text-xs font-semibold px-4 py-1 rounded-full">
        Most Popular
      </span>
    )}
    <h3 className="font-display font-semibold text-lg mb-1">{title}</h3>
    <p className="font-display text-3xl font-bold text-primary mb-5">{price}</p>
    <ul className="space-y-3">
      {features.map((f) => (
        <li key={f} className="flex items-start gap-2 text-sm text-muted-foreground">
          <Check className="text-primary shrink-0 mt-0.5" size={16} />
          <span>{f}</span>
        </li>
      ))}
    </ul>
  </motion.div>
);

export default PricingCard;
