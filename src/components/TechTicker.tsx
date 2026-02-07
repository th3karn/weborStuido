import { motion } from "framer-motion";

const techs = [
  "HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js",
  "PHP", "MongoDB", "Firebase", "WordPress", "Next.js", "Python",
  "Flutter", "Swift", "Kotlin", "Figma", "Tailwind CSS", "MySQL", "MERN",
];

const TechTicker = () => (
  <div className="py-8 overflow-hidden border-y border-border/40 bg-card/30 relative group">
    {/* Edge blur masks */}
    <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
    <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

    <motion.div
      className="flex gap-6 whitespace-nowrap"
      animate={{ x: ["0%", "-50%"] }}
      transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      style={{ willChange: "transform" }}
    >
      {[...techs, ...techs].map((tech, i) => (
        <span
          key={i}
          className="text-sm font-medium text-muted-foreground hover:text-primary hover:drop-shadow-[0_0_12px_hsl(var(--primary)/0.6)] transition-all duration-300 cursor-default select-none px-5 py-2.5 border border-border/30 rounded-full bg-secondary/30 hover:border-primary/40 hover:bg-primary/5"
        >
          {tech}
        </span>
      ))}
    </motion.div>
  </div>
);

export default TechTicker;
