import { motion } from "framer-motion";

const techs = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js",
  "PHP", "MongoDB", "Firebase", "WordPress", "Next.js", "Python",
  "Flutter", "Swift", "Kotlin", "Figma", "Tailwind CSS",
];

const TechTicker = () => (
  <div className="py-8 overflow-hidden border-y border-border/40 bg-card/30">
    <motion.div
      className="flex gap-8 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
    >
      {[...techs, ...techs].map((tech, i) => (
        <span
          key={i}
          className="text-sm font-medium text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_8px_hsl(var(--primary)/0.5)] transition-all duration-300 cursor-default select-none px-4 py-2 border border-border/30 rounded-full bg-secondary/30"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  </div>
);

export default TechTicker;
