import React from "react";

export const WebGLFallback = () => {
  return (
    <div className="absolute inset-0 z-0 h-full w-full pointer-events-none overflow-hidden bg-[#0A0A0A]">
      <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-blue-600/10 blur-[150px] rounded-full" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyan-400/10 blur-[130px] rounded-full" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#8B5CF6]/5 blur-[200px] rounded-full" />
    </div>
  );
};
