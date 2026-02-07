import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import { services } from "@/lib/services";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Services = () => (
  <div>
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="Our Services"
          title="Everything You Need to Go Digital"
          description="From concept to launch, we handle every aspect of your digital presence. Choose from our comprehensive range of services."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
      </div>
    </section>

    <section className="pb-20 md:pb-28">
      <div className="container mx-auto px-4 lg:px-8 text-center">
        <div className="bg-gradient-card border border-border/60 rounded-2xl p-10 md:p-14">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            Need a custom solution?
          </h3>
          <p className="text-muted-foreground mb-6">
            We'll build exactly what your business needs. Let's discuss your project.
          </p>
          <Link
            to="/contact"
            className="bg-gradient-primary text-primary-foreground px-8 py-3.5 rounded-lg font-semibold hover:opacity-90 transition-opacity inline-flex items-center gap-2"
          >
            Get a Quote <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Services;
