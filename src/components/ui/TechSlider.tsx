import React from 'react';
import { cn } from '@/lib/utils';
import { Code2, Database, FileJson, Layout, Layers, Server, Globe, Box, Cloud, MonitorSmartphone } from 'lucide-react';

const TECH_STACK = [
  { name: 'HTML', icon: <Layout className="w-8 h-8" />, color: 'text-orange-500' },
  { name: 'CSS', icon: <Layers className="w-8 h-8" />, color: 'text-blue-500' },
  { name: 'JavaScript', icon: <FileJson className="w-8 h-8" />, color: 'text-yellow-400' },
  { name: 'PHP', icon: <Globe className="w-8 h-8" />, color: 'text-indigo-400' },
  { name: 'MERN', icon: <Box className="w-8 h-8" />, color: 'text-green-400' },
  { name: 'React', icon: <Code2 className="w-8 h-8" />, color: 'text-cyan-400' },
  { name: 'Node.js', icon: <Server className="w-8 h-8" />, color: 'text-green-500' },
  { name: 'MongoDB', icon: <Database className="w-8 h-8" />, color: 'text-green-600' },
  { name: 'Firebase', icon: <Cloud className="w-8 h-8" />, color: 'text-yellow-500' },
  { name: 'WordPress', icon: <MonitorSmartphone className="w-8 h-8" />, color: 'text-blue-400' },
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
