import { motion } from "framer-motion";

interface Props {
  tag?: string;
  title: string;
  description?: string;
}

const SectionHeading = ({ tag, title, description }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-50px" }}
    transition={{ duration: 0.5 }}
    className="text-center mb-12"
  >
    {tag && (
      <span className="text-primary text-sm font-semibold tracking-widest uppercase mb-2 block">
        {tag}
      </span>
    )}
    <h2 className="font-display text-3xl md:text-4xl font-bold">{title}</h2>
    {description && (
      <p className="text-muted-foreground mt-3 max-w-2xl mx-auto leading-relaxed">
        {description}
      </p>
    )}
  </motion.div>
);

export default SectionHeading;
