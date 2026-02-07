import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Target, Heart, Lightbulb } from "lucide-react";

const values = [
  { icon: Target, title: "Mission-Driven", desc: "We exist to help businesses of all sizes succeed in the digital world — no gatekeeping, no inflated prices." },
  { icon: Heart, title: "Client-First", desc: "Every project starts with understanding your goals. We don't just build — we partner with you for long-term success." },
  { icon: Lightbulb, title: "Innovation", desc: "We stay ahead of technology trends so your products are built with the best tools and practices available." },
];

const About = () => (
  <div>
    <SEO
      title="About Webor Studio | Affordable Digital Solutions for Everyone"
      description="Learn about Webor Studio's mission to make quality websites & apps accessible to startups and businesses worldwide."
      canonical="https://weborstudio.com/about"
    />
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="About Us"
          title="We're Webor Studio"
          description="A technology and creative services company on a mission to make quality digital solutions accessible to everyone."
        />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <p className="text-muted-foreground leading-relaxed mb-4">
            Webor Studio was founded with a simple belief: every startup, creator, and small business deserves access to world-class digital solutions — without breaking the bank.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            We specialize in end-to-end digital services — from stunning websites and powerful mobile apps to creative design and AI-driven automation. Our team combines technical expertise with creative thinking to deliver products that truly make a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="bg-gradient-card border border-border/60 rounded-xl p-6 text-center"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <v.icon className="text-primary" size={24} />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{v.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  </div>
);

export default About;
