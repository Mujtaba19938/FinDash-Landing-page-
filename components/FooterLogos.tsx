import React from 'react';
import { Sun, DollarSign } from 'lucide-react';

const LogoGroup = () => (
  <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24 text-[#888888]">
    {/* Vercel */}
    <div className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current text-[#CCCCCC] group-hover:text-white transition-colors" shapeRendering="geometricPrecision">
        <path d="M12 1L24 22H0L12 1Z" />
      </svg>
      <span className="font-semibold text-lg tracking-tight text-current font-sans">Vercel</span>
    </div>

    {/* Loom */}
    <div className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
      <Sun className="w-6 h-6 stroke-[2.5] text-[#CCCCCC] group-hover:text-white transition-colors" />
      <span className="font-semibold text-lg tracking-tight text-current font-sans">loom</span>
    </div>

    {/* Cash App */}
    <div className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
      <div className="w-6 h-6 rounded bg-[#222] group-hover:bg-[#333] flex items-center justify-center border border-white/10 transition-colors">
        <DollarSign className="w-4 h-4 text-white" strokeWidth={3} />
      </div>
      <span className="font-semibold text-lg tracking-tight text-current font-sans">Cash App</span>
    </div>

    {/* Loops */}
    <div className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
      <svg viewBox="0 0 24 24" className="w-5 h-5 stroke-current stroke-[2.5] fill-none text-[#CCCCCC] group-hover:text-white transition-colors">
         <circle cx="12" cy="12" r="9" opacity="0.4" />
         <circle cx="12" cy="12" r="5" />
      </svg>
      <span className="font-serif text-lg tracking-tight text-current font-bold">Loops</span>
    </div>

    {/* Zapier */}
    <div className="flex items-center gap-1 hover:text-white transition-colors cursor-pointer group">
      <div className="w-3 h-3 bg-[#FF4F00] group-hover:brightness-110 rounded-sm mt-1 transition-colors"></div>
      <span className="font-bold text-lg tracking-tight text-current font-sans">_zapier</span>
    </div>

    {/* Ramp */}
    <div className="flex items-center gap-2 hover:text-white transition-colors cursor-pointer group">
      <span className="font-semibold text-lg tracking-tight text-current font-sans">ramp</span>
      <svg viewBox="0 0 24 24" className="w-4 h-4 fill-current text-[#CCCCCC] group-hover:text-white transition-colors">
         <path d="M21 4H15V6H19.5L10 18H3V20H11L21 7V4Z" />
      </svg>
    </div>

    {/* Raycast */}
    <div className="flex items-center gap-2.5 hover:text-white transition-colors cursor-pointer group">
      <svg viewBox="0 0 24 24" className="w-5 h-5 fill-none stroke-current stroke-2 text-[#CCCCCC] group-hover:text-white transition-colors">
          <path d="M2 12L12 2L22 12L12 22L2 12Z" />
          <line x1="12" y1="22" x2="12" y2="16" />
          <line x1="12" y1="2" x2="12" y2="8" />
          <line x1="2" y1="12" x2="8" y2="12" />
          <line x1="22" y1="12" x2="16" y2="12" />
      </svg>
      <span className="font-semibold text-lg tracking-tight text-current font-sans">Raycast</span>
    </div>
  </div>
);

const FooterLogos: React.FC = () => {
  return (
    <div className="w-full h-24 border-t border-white/5 bg-black flex items-center relative overflow-hidden z-20">
      
      {/* Fade Masks */}
      <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
      <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

      {/* Marquee Track */}
      <div className="flex w-max hover:[animation-play-state:paused]">
        <div className="animate-marquee flex">
            <LogoGroup />
        </div>
        <div className="animate-marquee flex" aria-hidden="true">
            <LogoGroup />
        </div>
      </div>
      
    </div>
  );
};

export default FooterLogos;