import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
  prefix?: string;
  className?: string;
}

export const AnimatedCounter = ({ 
  end, 
  duration = 2, 
  suffix = '', 
  prefix = '', 
  className = '' 
}: AnimatedCounterProps) => {
  const nodeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    let obj = { val: 0 };
    
    ScrollTrigger.create({
      trigger: node,
      start: "top 85%",
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration: duration,
          ease: "power2.out",
          onUpdate: () => {
            node.innerHTML = prefix + Math.ceil(obj.val).toString() + suffix;
          }
        });
      },
      once: true
    });
  }, [end, duration, prefix, suffix]);

  return <span ref={nodeRef} className={className}>0</span>;
};
