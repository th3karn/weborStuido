import { Link } from "react-router-dom";
import { Instagram, Mail, MessageCircle } from "lucide-react";

const Footer = () => (
  <footer className="border-t border-border bg-card/40">
    <div className="container mx-auto px-4 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-2">
          <Link to="/" className="font-display text-xl font-bold tracking-tight">
            <span className="text-gradient">Webor</span>{" "}
            <span className="text-foreground">Studio</span>
          </Link>
          <p className="text-muted-foreground text-sm mt-3 max-w-sm leading-relaxed">
            Building websites, apps & digital products that grow your business. Quality solutions at affordable prices.
          </p>
          <div className="flex gap-4 mt-4">
            <a href="https://instagram.com/webor_studio" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Instagram">
              <Instagram size={20} />
            </a>
            <a href="mailto:hello@weborstudio.com" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Email">
              <Mail size={20} />
            </a>
            <a href="https://wa.me/" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="WhatsApp">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2">
            {["Services", "Portfolio", "About", "Contact"].map((l) => (
              <Link key={l} to={`/${l.toLowerCase()}`} className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {l}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display font-semibold text-sm mb-4">Services</h4>
          <div className="flex flex-col gap-2">
            {["Web Development", "App Development", "UI/UX Design", "AI Solutions"].map((s) => (
              <Link key={s} to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                {s}
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border mt-10 pt-6 text-center">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Webor Studio. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
