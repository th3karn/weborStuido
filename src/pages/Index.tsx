import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import ServiceCard from "@/components/ServiceCard";
import HeroSection from "@/components/HeroSection";
import TrustSection from "@/components/TrustSection";
import TechTicker from "@/components/TechTicker";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsCarousel from "@/components/TestimonialsCarousel";
import CtaSection from "@/components/CtaSection";
import SEO from "@/components/SEO";
import { services } from "@/lib/services";

const Index = () => (
  <div>
    <SEO
      title="Affordable Website & App Development Company in India | Webor Studio"
      description="Webor Studio offers affordable WordPress, PHP, MERN websites & mobile apps starting at ₹4,999. Trusted by startups & global clients."
      canonical="https://weborstudio.com"
    />
    <HeroSection />
    <TrustSection />
    <TechTicker />

    {/* Services Preview */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="What We Do"
          title="Our Services"
          description="End-to-end digital solutions to bring your vision to life."
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.slice(0, 6).map((s, i) => (
            <ServiceCard key={s.title} icon={s.icon} title={s.title} description={s.description} index={i} />
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/services"
            className="text-primary font-semibold text-sm hover:underline inline-flex items-center gap-1"
          >
            View All Services & Pricing <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>

    <WhyUsSection />

    {/* Testimonials */}
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4 lg:px-8">
        <SectionHeading
          tag="Testimonials"
          title="What Our Clients Say"
          description="Real feedback from startups and businesses we've worked with."
        />
        <TestimonialsCarousel />
      </div>
    </section>

    <CtaSection />
  </div>
);

export default Index;
