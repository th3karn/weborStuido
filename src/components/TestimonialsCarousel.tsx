import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Rahul Sharma",
    role: "Founder, TechStart India",
    quote: "Webor Studio delivered our website in just 5 days. The quality was on par with agencies charging 10x more. Absolutely worth it!",
    rating: 5,
  },
  {
    name: "Sarah Mitchell",
    role: "CEO, GreenLeaf Co.",
    quote: "Professional, responsive, and incredibly affordable. Our new website boosted conversions by 40% in the first month.",
    rating: 5,
  },
  {
    name: "Amit Patel",
    role: "Creator & YouTuber",
    quote: "I needed a portfolio site fast and on budget. Webor Studio nailed it — clean design, mobile-friendly, and SEO-ready.",
    rating: 5,
  },
  {
    name: "Jessica Wong",
    role: "Owner, Bloom Boutique",
    quote: "From concept to launch, the team was transparent and delivered exactly what was promised. Highly recommend for small businesses!",
    rating: 4,
  },
  {
    name: "Vikram Desai",
    role: "CTO, DataSync Labs",
    quote: "Their MERN stack expertise is top-notch. Built us a custom dashboard that handles thousands of users flawlessly.",
    rating: 5,
  },
];

const TestimonialsCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const prev = () => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length);
  const next = () => setCurrent((c) => (c + 1) % testimonials.length);

  const t = testimonials[current];

  return (
    <div className="relative max-w-2xl mx-auto">
      <div className="absolute -top-6 left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
        <Quote className="text-primary" size={20} />
      </div>

      <div className="bg-gradient-card border border-border/40 rounded-2xl p-8 md:p-10 text-center min-h-[260px] flex flex-col justify-center">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex justify-center gap-1 mb-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={16}
                  className={i < t.rating ? "text-yellow-400 fill-yellow-400" : "text-muted-foreground/30"}
                />
              ))}
            </div>
            <p className="text-foreground/90 text-lg leading-relaxed italic mb-6">
              "{t.quote}"
            </p>
            <p className="font-display font-semibold">{t.name}</p>
            <p className="text-sm text-muted-foreground">{t.role}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="flex items-center justify-center gap-4 mt-6">
        <button
          onClick={prev}
          className="w-9 h-9 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          aria-label="Previous testimonial"
        >
          <ChevronLeft size={18} />
        </button>
        <div className="flex gap-2">
          {testimonials.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                i === current ? "bg-primary w-6" : "bg-muted-foreground/30"
              }`}
              aria-label={`Go to testimonial ${i + 1}`}
            />
          ))}
        </div>
        <button
          onClick={next}
          className="w-9 h-9 rounded-full border border-border/40 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/40 transition-colors"
          aria-label="Next testimonial"
        >
          <ChevronRight size={18} />
        </button>
      </div>
    </div>
  );
};

export default TestimonialsCarousel;
