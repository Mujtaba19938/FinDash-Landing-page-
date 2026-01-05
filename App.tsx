import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import FooterLogos from './components/FooterLogos';

export default function App() {
  return (
    <div className="min-h-screen bg-black p-4 md:p-6 lg:p-8 flex flex-col items-center justify-center font-sans overflow-hidden">
      {/* 
        The design shows a rounded container that looks like a window/card 
        floating in a dark void. 
      */}
      <div className="relative w-full max-w-[1400px] h-[85vh] min-h-[800px] bg-[#050505] rounded-[3rem] overflow-hidden border border-white/5 shadow-2xl flex flex-col">
        
        {/* Background Effects */}
        <div className="absolute inset-0 z-0 pointer-events-none">
          {/* User specified radial gradient background */}
          <div 
            className="absolute inset-0"
            style={{
              background: 'radial-gradient(circle at top right, #9fb6b2 0%, #727d7d 35%, #2b2f33 70%, #0f1113 100%)'
            }}
          ></div>
          
          {/* Noise Texture Overlay - Very subtle to match the smooth fog look */}
          <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] brightness-100 contrast-150 mix-blend-overlay"></div>
        </div>

        {/* Content Layer */}
        <div className="relative z-10 flex flex-col h-full">
          <Navbar />
          <Hero />
          <FooterLogos />
        </div>

      </div>
    </div>
  );
}