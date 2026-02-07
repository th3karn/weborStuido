import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import SectionHeading from "@/components/SectionHeading";
import SEO from "@/components/SEO";
import { Mail, MessageCircle, Instagram, Send } from "lucide-react";
import { toast } from "sonner";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("Thanks for reaching out! We'll get back to you soon.");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="py-20 md:py-28">
      <SEO
        title="Contact Webor Studio | Affordable Website & App Developers"
        description="Looking to build a website or app? Contact Webor Studio today for affordable, high-quality development services."
        canonical="https://weborstudio.com/contact"
      />
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="Contact"
          title="Let's Work Together"
          description="Have a project in mind? We'd love to hear about it. Reach out and we'll get back to you within 24 hours."
        />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Form */}
          <motion.form
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            onSubmit={handleSubmit}
            className="bg-gradient-card border border-border/60 rounded-xl p-6 md:p-8 space-y-5"
          >
            <div>
              <label className="text-sm font-medium mb-1.5 block">Name</label>
              <input
                type="text"
                required
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                placeholder="Your name"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Email</label>
              <input
                type="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label className="text-sm font-medium mb-1.5 block">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full bg-background border border-border rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all resize-none"
                placeholder="Tell us about your project..."
              />
            </div>
            <button
              type="submit"
              className="w-full bg-gradient-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center justify-center gap-2"
            >
              Send Message <Send size={16} />
            </button>
          </motion.form>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex flex-col gap-6 justify-center"
          >
            <div>
              <h3 className="font-display text-xl font-semibold mb-4">Get in Touch</h3>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Whether you have a question, want a quote, or just want to say hello — we're here for you.
              </p>
            </div>

            <a href="mailto:hello@weborstudio.com" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Mail className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">Email</p>
                <p className="text-sm text-muted-foreground">hello@weborstudio.com</p>
              </div>
            </a>

            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <MessageCircle className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">WhatsApp</p>
                <p className="text-sm text-muted-foreground">Chat with us</p>
              </div>
            </a>

            <a href="https://instagram.com/webor_studio" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <Instagram className="text-primary" size={18} />
              </div>
              <div>
                <p className="text-sm font-medium">Instagram</p>
                <p className="text-sm text-muted-foreground">@webor_studio</p>
              </div>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
