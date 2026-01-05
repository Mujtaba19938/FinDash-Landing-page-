import React from 'react';
import { MoveRight, Play, ArrowUpRight, Triangle, Hexagon, Sparkles, Gem, ChevronDown, Asterisk, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="flex-1 relative flex flex-col items-center justify-center w-full px-4 md:px-20 lg:px-32 z-10">
      
      {/* Floating Spark Badge */}
      <div className="animate-fade-in-up flex items-center gap-2 glass-pill px-4 py-2 rounded-full mb-8 cursor-pointer hover:bg-white/10 transition-all duration-300 border border-white/10">
        <div className="w-4 h-4 rounded-full bg-white text-black flex items-center justify-center">
          <span className="text-[10px] font-bold">G</span>
        </div>
        <span className="text-sm text-gray-300 font-medium">Unlock Your Assets Spark!</span>
        <MoveRight className="w-3 h-3 text-gray-400" />
      </div>

      {/* Main Headline */}
      <h1 className="animate-fade-in-up [animation-delay:100ms] text-5xl md:text-7xl lg:text-8xl font-semibold text-center tracking-tighter mb-6 max-w-5xl z-20">
        <span className="text-white block lg:inline">One-click Dashboard </span>
        <span className="text-white/50 bg-clip-text text-transparent bg-gradient-to-b from-white via-white/80 to-white/20">for all your Assets</span>
      </h1>

      {/* Subheadline */}
      <p className="animate-fade-in-up [animation-delay:200ms] text-center text-gray-400 text-lg max-w-xl mb-12 z-20 leading-relaxed font-light">
        Dive into the art assets, where innovative blockchain technology meets financial expertise
      </p>

      {/* Buttons */}
      <div className="animate-fade-in-up [animation-delay:300ms] flex items-center gap-4 z-20">
        <a 
          href="https://findash-eight.vercel.app/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="glass-pill px-8 py-3.5 rounded-full text-white text-sm font-medium flex items-center gap-2 hover:bg-white/10 transition-all group border border-white/10"
        >
          Open App
          <ArrowUpRight className="w-4 h-4 text-gray-400 group-hover:text-white group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
        </a>
        <button className="bg-white text-black px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors shadow-[0_0_20px_rgba(255,255,255,0.3)]">
          Discover More
        </button>
      </div>

      {/* Background Falling Lines */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden mix-blend-overlay">
        {[1, 2, 3].map((i) => (
            <div 
                key={i}
                className="absolute top-0 w-[1px] bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse-slow"
                style={{ 
                    left: `calc(50% + ${(i - 2) * 80}px)`, 
                    height: '100%',
                    opacity: 0.15,
                    animationDelay: `${i * 1.2}s`
                }} 
            />
        ))}
      </div>

      {/* Floating Nodes & Connectors */}
      <div className="absolute inset-0 pointer-events-none z-10 hidden lg:block">
        {/* SVG Connectors - Horizontal lines fading towards center */}
        <svg className="absolute inset-0 w-full h-full stroke-white/20 stroke-[1px] fill-none">
          <defs>
            <linearGradient id="lineGradientLeft" x1="100%" y1="0%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
            <linearGradient id="lineGradientRight" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgba(255,255,255,0.3)" />
              <stop offset="100%" stopColor="rgba(255,255,255,0)" />
            </linearGradient>
          </defs>
          
          {/* Cortex Line (Left) */}
          <path d="M 280,250 C 350,250 400,280 480,280" stroke="url(#lineGradientRight)" className="opacity-60" />
          
          {/* Aelf Line (Left Bottom) */}
          <path d="M 280,600 C 350,600 400,550 480,550" stroke="url(#lineGradientRight)" className="opacity-60" />

          {/* Quant Line (Right) */}
          <path d="M 1120,220 C 1050,220 1000,250 920,250" stroke="url(#lineGradientLeft)" className="opacity-60" />

          {/* Meeton Line (Right Bottom) */}
          <path d="M 1120,600 C 1050,600 1000,550 920,550" stroke="url(#lineGradientLeft)" className="opacity-60" />
        </svg>

        {/* Node: Cortex (Top Left) */}
        <div className="absolute top-[22%] left-[12%] animate-float">
            <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                   <Triangle className="w-4 h-4 text-white rotate-90 fill-white/20" />
                </div>
                <div className="text-left">
                    <h3 className="text-white text-sm font-medium flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></span>
                        Cortex
                    </h3>
                    <p className="text-gray-500 text-xs ml-3.5 font-mono">20.945</p>
                </div>
            </div>
        </div>

        {/* Node: Quant (Top Right) */}
        <div className="absolute top-[18%] right-[12%] animate-float-delayed">
             <div className="flex items-center gap-4 justify-end">
                 <div className="text-right">
                     <h3 className="text-white text-sm font-medium flex items-center justify-end gap-2">
                         Quant
                         <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></span>
                     </h3>
                     <p className="text-gray-500 text-xs mr-3.5 font-mono">2.945</p>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Asterisk className="w-5 h-5 text-white" />
                 </div>
             </div>
        </div>

        {/* Node: Aelf (Bottom Left) */}
        <div className="absolute bottom-[20%] left-[10%] animate-float-delayed">
             <div className="flex items-center gap-4">
                 <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Hexagon className="w-4 h-4 text-white fill-white/10" />
                 </div>
                 <div className="text-left">
                     <h3 className="text-white text-sm font-medium flex items-center gap-2">
                         <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></span>
                         Aelf
                     </h3>
                     <p className="text-gray-500 text-xs ml-3.5 font-mono">19.346</p>
                 </div>
             </div>
        </div>

         {/* Node: Meeton (Bottom Right) */}
         <div className="absolute bottom-[20%] right-[10%] animate-float">
             <div className="flex items-center gap-4 justify-end">
                 <div className="text-right">
                     <h3 className="text-white text-sm font-medium flex items-center justify-end gap-2">
                         Meeton
                         <span className="w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white]"></span>
                     </h3>
                     <p className="text-gray-500 text-xs mr-3.5 font-mono">440</p>
                 </div>
                 <div className="w-12 h-12 rounded-full border border-white/10 bg-white/5 backdrop-blur-md flex items-center justify-center relative shadow-[0_0_15px_rgba(255,255,255,0.05)]">
                    <Gem className="w-4 h-4 text-white" />
                 </div>
             </div>
        </div>
      </div>

      {/* Bottom Indicators */}
      <div className="absolute bottom-10 left-10 lg:left-14 flex items-center gap-4">
        <div className="w-10 h-10 rounded-full bg-white text-black flex items-center justify-center shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:scale-110 transition-transform cursor-pointer">
            <ArrowDown className="w-5 h-5" />
        </div>
        <span className="text-sm text-gray-400 font-medium tracking-wide">02/03 . Scroll down</span>
      </div>

      <div className="absolute bottom-10 right-10 lg:right-14 flex flex-col items-end gap-3">
        <span className="text-sm text-[#C0C0B0] font-medium tracking-wide">DeFi horizons</span>
        <div className="flex items-center gap-1.5">
            <div className="w-6 h-1 bg-white rounded-full shadow-[0_0_10px_white]"></div>
            <div className="w-2 h-1 bg-white/20 rounded-full"></div>
            <div className="w-2 h-1 bg-white/20 rounded-full"></div>
            <div className="w-2 h-1 bg-white/20 rounded-full"></div>
        </div>
      </div>

    </div>
  );
};

export default Hero;