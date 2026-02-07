import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle, Youtube, ArrowRight } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/60">
    <div className="container mx-auto px-4 lg:px-8 py-14">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            <span className="text-gradient">Webor</span>{" "}
            <span className="text-foreground">Studio</span>
          </Link>
          <p className="text-muted-foreground text-sm mt-3 max-w-sm leading-relaxed">
            Professional quality. Honest pricing. Real results. Websites starting at ₹4,999. Trusted by startups & global clients.
          </p>
          <div className="flex gap-4 mt-5">
            {[
              { icon: Instagram, href: "https://instagram.com/webor_studio", label: "Instagram" },
              { icon: Mail, href: "mailto:hello@weborstudio.com", label: "Email" },
              { icon: MessageCircle, href: "https://wa.me/", label: "WhatsApp" },
              { icon: Youtube, href: "#", label: "YouTube" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="w-10 h-10 rounded-xl bg-secondary/50 flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-300"
                aria-label={s.label}
              >
                <s.icon size={18} />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2.5">
            {["Services", "Portfolio", "About", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Get Started</h4>
          <p className="text-sm text-muted-foreground leading-relaxed mb-4">
            Ready to build something amazing? Get a free quote today.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 text-sm text-primary font-semibold hover:underline"
          >
            Contact Us <ArrowRight size={14} />
          </Link>
        </div>
      </div>

      <div className="border-t border-border mt-12 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Webor Studio. All rights reserved.
        </p>
        <p className="text-xs text-muted-foreground">
          Built with ❤️ for startups & businesses worldwide
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
