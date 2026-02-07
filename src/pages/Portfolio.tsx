import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { ExternalLink } from "lucide-react";

const projects = [
  { title: "E-Commerce Platform", category: "Web Application", description: "Full-stack e-commerce solution with payment integration, inventory management, and analytics dashboard.", color: "from-blue-500/20 to-purple-500/20" },
  { title: "Fitness Tracker App", category: "iOS & Android", description: "Cross-platform mobile app with workout tracking, social features, and real-time health data visualization.", color: "from-green-500/20 to-teal-500/20" },
  { title: "SaaS Dashboard", category: "Web Application", description: "Analytics dashboard for a B2B SaaS company with real-time data, custom reports, and team collaboration.", color: "from-orange-500/20 to-red-500/20" },
  { title: "Restaurant Brand Identity", category: "Graphic Design", description: "Complete brand identity including logo, menu design, packaging, and social media templates.", color: "from-pink-500/20 to-rose-500/20" },
  { title: "AI Chatbot Platform", category: "AI Solution", description: "Custom AI chatbot with natural language processing, multi-channel support, and analytics.", color: "from-violet-500/20 to-indigo-500/20" },
  { title: "Corporate Website", category: "Website", description: "Modern corporate website with CMS, SEO optimization, and lead generation forms.", color: "from-cyan-500/20 to-blue-500/20" },
];

const Portfolio = () => (
  <div className="py-20 md:py-28">
    <SEO
      title="Our Work & Portfolio | Webor Studio Projects"
      description="Explore Webor Studio's portfolio of websites, mobile apps, and digital products built for startups and businesses worldwide."
      canonical="https://weborstudio.com/portfolio"
    />
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
            className="group bg-gradient-card border border-border/60 rounded-2xl overflow-hidden hover:border-primary/40 hover:shadow-glow transition-all duration-500"
          >
            <div className={`h-48 bg-gradient-to-br ${p.color} flex items-center justify-center relative overflow-hidden`}>
              <span className="text-foreground/60 text-sm font-display font-semibold">{p.category}</span>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-background/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="inline-flex items-center gap-2 text-primary text-sm font-semibold border border-primary/40 px-4 py-2 rounded-xl">
                  View Project <ExternalLink size={14} />
                </span>
              </div>
            </div>
            <div className="p-6">
              <h3 className="font-display font-semibold text-lg mb-2 group-hover:text-primary transition-colors">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </div>
);

export default Portfolio;
