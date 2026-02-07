import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Instagram } from "lucide-react";

const CtaSection = () => (
  <>
    {/* Instagram strip */}
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 text-center md:text-left"
        >
          <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center shrink-0">
            <Instagram className="text-primary-foreground" size={28} />
          </div>
          <div>
            <h3 className="font-display text-xl font-semibold mb-1">Follow @webor_studio on Instagram</h3>
            <p className="text-muted-foreground text-sm">Watch real projects, demos, reels & exclusive offers.</p>
          </div>
          <a
            href="https://instagram.com/webor_studio"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-primary/40 text-primary px-6 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary/10 transition-colors inline-flex items-center gap-2"
          >
            <Instagram size={16} /> Follow Us
          </a>
        </motion.div>
      </div>
    </section>

    {/* Main CTA */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-card border border-border/60 rounded-3xl p-10 md:p-16 text-center relative overflow-hidden"
        >
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full blur-[100px]" />
          </div>
          <div className="relative z-10">
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Something Amazing?
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto mb-4 leading-relaxed">
              Professional quality. Honest pricing. Real results. Get in touch for a free consultation.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              Websites starting at <strong className="text-foreground">₹4,999 INR</strong> · <strong className="text-foreground">$799 USD</strong> for global clients
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-xl font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2 shadow-glow"
              >
                Contact Us <ArrowRight size={18} />
              </Link>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="border border-border text-foreground px-8 py-3.5 rounded-xl font-semibold hover:bg-secondary transition-colors inline-flex items-center justify-center gap-2"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  </>
);

export default CtaSection;
