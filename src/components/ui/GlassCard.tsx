import React from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  glow?: "blue" | "purple" | "cyan" | "none";
  liftOnHover?: boolean;
}

export const GlassCard = ({ children, className, glow = "none", liftOnHover = true, ...props }: GlassCardProps) => {
  const glowMap = {
    blue: "hover:shadow-[0_0_40px_rgba(59,130,246,0.3)]",
    purple: "hover:shadow-[0_0_40px_rgba(168,85,247,0.3)]",
    cyan: "hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]",
    none: "",
  };

  return (
    <div
      className={cn(
        "relative rounded-[1.5rem] p-8 overflow-hidden group transition-all duration-500",
        "bg-white/[0.03] backdrop-blur-3xl border border-white/10 shadow-[0_8px_32px_0_rgba(0,0,0,0.5)]",
        liftOnHover ? "hover:-translate-y-2 hover:bg-white/[0.05]" : "",
        glowMap[glow],
        className
      )}
      {...props}
    >
      <div className="absolute inset-0 z-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />
      <div className="relative z-10">{children}</div>
    </div>
  );
};
