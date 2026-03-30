import React from 'react';
import { cn } from '@/lib/utils';
import { Bot, Code2, Database, FileJson, Layout, Layers, Server, Terminal } from 'lucide-react';

const TECH_STACK = [
  { name: 'HTML5', icon: <Layout className="w-8 h-8" />, color: 'text-orange-500' },
  { name: 'CSS3', icon: <Layers className="w-8 h-8" />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FileJson className="w-8 h-8" />, color: 'text-yellow-400' },
  { name: 'React', icon: <Code2 className="w-8 h-8" />, color: 'text-cyan-400' },
  { name: 'Next.js', icon: <Terminal className="w-8 h-8" />, color: 'text-white' },
  { name: 'Node.js', icon: <Server className="w-8 h-8" />, color: 'text-green-500' },
  { name: 'MongoDB', icon: <Database className="w-8 h-8" />, color: 'text-green-600' },
  { name: 'AI Tools', icon: <Bot className="w-8 h-8" />, color: 'text-primary' },
];

export const TechSlider = ({ className }: { className?: string }) => {
  return (
    <div className={cn("w-full overflow-hidden py-10 relative flex items-center bg-background", className)}>
      {/* Gradient Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

      {/* Marquee Container */}
      <div className="flex animate-marquee hover:[animation-play-state:paused] w-max gap-12 pr-12">
        {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center gap-4 group cursor-pointer w-24 shrink-0"
          >
            <div className="w-24 h-24 rounded-2xl glass-card flex items-center justify-center transition-all duration-300 group-hover:neon-glow group-hover:-translate-y-2 group-hover:border-primary/50 relative overflow-hidden">
              <div className={cn("relative z-10 transition-transform duration-300 group-hover:scale-110", tech.color)}>
                {tech.icon}
              </div>
            </div>
            <span className="text-sm font-medium text-white/50 group-hover:text-white transition-colors">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
