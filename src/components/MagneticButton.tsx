import React, { useRef, useState, useEffect } from 'react';
import gsap from 'gsap';

interface MagneticButtonProps {
  children: React.ReactNode;
  className?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

export const MagneticButton = ({ children, className = '', onClick }: MagneticButtonProps) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const xTo = gsap.quickTo(button, "x", { duration: 1, ease: "elastic.out(1, 0.3)" });
    const yTo = gsap.quickTo(button, "y", { duration: 1, ease: "elastic.out(1, 0.3)" });

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = button.getBoundingClientRect();
      const x = clientX - (left + width / 2);
      const y = clientY - (top + height / 2);
      xTo(x * 0.3);
      yTo(y * 0.3);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    button.addEventListener("mousemove", handleMouseMove);
    button.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      button.removeEventListener("mousemove", handleMouseMove);
      button.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <button
      ref={buttonRef}
      onClick={onClick}
      className={`relative overflow-hidden rounded-full font-semibold outline-none group
        bg-white/[0.05] border border-white/10 shadow-[0_4px_20px_0_rgba(0,0,0,0.4)]
        backdrop-blur-xl transition-all duration-300 hover:border-primary/50
        hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:bg-white/[0.1]
        ${className}`}
    >
      <span className="absolute inset-0 z-0 bg-gradient-to-r from-primary/20 to-blue-500/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out pointer-events-none" />
      <span className="relative z-10 pointer-events-none block">{children}</span>
    </button>
  );
};
