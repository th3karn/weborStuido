import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { GlassCard } from "../components/ui/GlassCard";

const posts = [
  { title: "The State of Next.js 14 for Enterprise Applications", category: "Engineering", readingTime: "5 min read", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80", date: "Mar 10, 2026", glow: "blue" as const },
  { title: "Designing the Apple Aesthetic: A UI/UX Breakdown", category: "Design", readingTime: "8 min read", img: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80", date: "Mar 05, 2026", glow: "purple" as const },
  { title: "Integrating Three.js with React: Performance Tips", category: "3D Web", readingTime: "6 min read", img: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80", date: "Feb 28, 2026", glow: "cyan" as const },
  { title: "Future-Proofing Your Brand with AI Automation", category: "AI & Business", readingTime: "4 min read", img: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80", date: "Feb 15, 2026", glow: "none" as const }
];

export default function Blog() {
  const ref = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".blog-el", 
        { y: 50, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: "power4.out" }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={ref} className="pt-40 pb-32 px-6 max-w-7xl mx-auto min-h-screen relative z-10">
      <div className="mb-24 blog-el text-center md:text-left">
        <h1 className="text-6xl md:text-8xl font-bold mb-8 tracking-tighter">Thoughts & <span className="text-gradient italic pr-2">Insights</span></h1>
        <p className="text-white/50 text-2xl max-w-3xl font-light leading-relaxed">Read our latest articles on software engineering patterns, premium design philosophies, and global tech trends.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-12">
        {posts.map((post, i) => (
          <GlassCard key={i} glow={post.glow} className="blog-el p-0 rounded-[2.5rem] overflow-hidden group cursor-pointer border border-white/10 flex flex-col h-full hover:-translate-y-2 transition-transform duration-500">
            <div className="relative h-72 overflow-hidden shrink-0">
              <img src={post.img} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 opacity-60 group-hover:opacity-100" />
              <div className="absolute top-6 left-6 bg-black/60 backdrop-blur-xl px-4 py-2 rounded-full text-xs font-bold text-white uppercase tracking-widest border border-white/20 shadow-lg">
                {post.category}
              </div>
            </div>
            <div className="p-10 flex flex-col flex-grow bg-white/[0.01]">
              <div className="flex items-center gap-4 text-xs text-white/40 mb-6 font-bold uppercase tracking-widest">
                <span>{post.date}</span>
                <div className="w-1.5 h-1.5 rounded-full bg-white/20"></div>
                <span>{post.readingTime}</span>
              </div>
              <h2 className="text-3xl font-bold text-white mb-6 group-hover:text-primary transition-colors leading-tight">{post.title}</h2>
              <p className="text-white/50 mb-10 text-lg font-light flex-grow leading-relaxed">Discover the methods and architectural decisions behind building high-scale experiences in today's modern tech ecosystem.</p>
              <div className="font-semibold text-base text-primary group-hover:text-white transition-colors flex items-center gap-3 w-max">
                Read Article <span className="text-xl leading-none group-hover:translate-x-2 transition-transform">→</span>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  );
}
