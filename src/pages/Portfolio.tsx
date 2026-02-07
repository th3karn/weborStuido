import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web Application", description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard." },
  { title: "Fitness Tracker App", category: "iOS & Android", description: "Cross-platform mobile app with workout tracking, social features, and real-time health data visualization." },
  { title: "SaaS Dashboard", category: "Web Application", description: "Analytics dashboard for a B2B SaaS company with real-time data, custom reports, and team collaboration." },
  { title: "Restaurant Brand Identity", category: "Graphic Design", description: "Complete brand identity including logo, menu design, packaging, and social media templates." },
  { title: "AI Chatbot Platform", category: "AI Solution", description: "Custom AI chatbot with natural language processing, multi-channel support, and analytics." },
  { title: "Corporate Website", category: "Website", description: "Modern corporate website with CMS, SEO optimization, and lead generation forms." },
];

const Portfolio = () => (
  <div className="py-20 md:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <SectionHeading
        tag="Our Work"
        title="Featured Projects"
        description="A selection of projects that showcase our expertise across different industries and technologies."
      />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="group bg-gradient-card border border-border/60 rounded-xl overflow-hidden hover:border-primary/40 transition-all duration-300"
          >
            <div className="h-44 bg-secondary/30 flex items-center justify-center">
              <span className="text-muted-foreground text-sm font-medium">{p.category}</span>
            </div>
            <div className="p-6">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-display font-semibold text-lg">{p.title}</h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-primary transition-colors" />
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
