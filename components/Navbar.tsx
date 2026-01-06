import React, { useState } from 'react';
import { Shield, ArrowUpRight, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="w-full px-8 py-6 flex items-center justify-between relative">
      {/* Left: Logo */}
      <div className="flex items-center gap-2 cursor-pointer group">
         {/* Replicated Logo SVG */}
         <div className="w-10 h-10 relative filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)] transition-all group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.4)]">
            <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                <defs>
                    {/* Metallic Gradient for the Crescent */}
                    <linearGradient id="crescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="45%" stopColor="#E0E0E0" />
                        <stop offset="100%" stopColor="#9CA3AF" />
                    </linearGradient>
                    
                    {/* Soft Gradient for the Sphere */}
                    <linearGradient id="sphereGrad" x1="20%" y1="20%" x2="85%" y2="85%">
                        <stop offset="0%" stopColor="#FFFFFF" />
                        <stop offset="100%" stopColor="#6B7280" />
                    </linearGradient>
                    
                    {/* Mask to create the crescent shape */}
                    <mask id="crescentMask">
                        <rect x="0" y="0" width="100" height="100" fill="black" />
                        {/* The outer circle */}
                        <circle cx="50" cy="50" r="45" fill="white" />
                        {/* The inner circle cutout, shifted right to make a crescent */}
                        <circle cx="62" cy="50" r="34" fill="black" />
                    </mask>
                </defs>
                
                {/* Crescent Shape */}
                <circle cx="50" cy="50" r="45" fill="url(#crescentGrad)" mask="url(#crescentMask)" />
                
                {/* Inner Sphere */}
                <circle cx="62" cy="50" r="20" fill="url(#sphereGrad)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
            </svg>
         </div>
      </div>

      {/* Center: Navigation Pill - Desktop Only */}
      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center glass-pill rounded-full px-1 py-1 pl-6">
        <ul className="flex items-center gap-6 text-sm font-medium text-gray-400 mr-6">
          <li className="text-white cursor-pointer hover:text-white transition-colors">Home</li>
          <li className="cursor-pointer hover:text-white transition-colors">FinDash App</li>
          <li className="cursor-pointer hover:text-white transition-colors">Assets</li>
          <li className="cursor-pointer hover:text-white transition-colors">Features</li>
          <li className="cursor-pointer hover:text-white transition-colors">Pricing</li>
          <li className="cursor-pointer hover:text-white transition-colors">FAQ</li>
        </ul>
        
        {/* Protection Button Group */}
        <div className="flex items-center gap-1.5">
          {/* Protection Text Button */}
          <div className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-full px-5 py-2 cursor-pointer border border-white/5 group">
            <span className="text-gray-300 text-sm font-medium">Protection</span>
            <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
          </div>

          {/* Shield Icon Button */}
          <div className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-white/10">
            <Shield className="w-4 h-4 fill-current stroke-2" />
          </div>
        </div>
      </div>

      {/* Right: Burger Menu Button - Mobile Only */}
      <button
        onClick={toggleMenu}
        className="md:hidden w-10 h-10 rounded-full glass-pill flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all z-50"
        aria-label="Toggle menu"
      >
        {isMenuOpen ? (
          <X className="w-5 h-5 text-white" />
        ) : (
          <Menu className="w-5 h-5 text-white" />
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-40 md:hidden"
            onClick={closeMenu}
          />
          
          {/* Mobile Menu */}
          <div className="fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-[#0a0a0a] border-l border-white/10 shadow-2xl z-50 md:hidden transform transition-transform duration-300 ease-in-out">
            <div className="flex flex-col h-full p-6">
              {/* Menu Header */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 relative filter drop-shadow-[0_0_8px_rgba(255,255,255,0.2)]">
                    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                      <defs>
                        <linearGradient id="mobileCrescentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="45%" stopColor="#E0E0E0" />
                          <stop offset="100%" stopColor="#9CA3AF" />
                        </linearGradient>
                        <linearGradient id="mobileSphereGrad" x1="20%" y1="20%" x2="85%" y2="85%">
                          <stop offset="0%" stopColor="#FFFFFF" />
                          <stop offset="100%" stopColor="#6B7280" />
                        </linearGradient>
                        <mask id="mobileCrescentMask">
                          <rect x="0" y="0" width="100" height="100" fill="black" />
                          <circle cx="50" cy="50" r="45" fill="white" />
                          <circle cx="62" cy="50" r="34" fill="black" />
                        </mask>
                      </defs>
                      <circle cx="50" cy="50" r="45" fill="url(#mobileCrescentGrad)" mask="url(#mobileCrescentMask)" />
                      <circle cx="62" cy="50" r="20" fill="url(#mobileSphereGrad)" stroke="rgba(255,255,255,0.5)" strokeWidth="0.5" />
                    </svg>
                  </div>
                  <span className="text-white font-semibold text-lg">FinDash</span>
                </div>
                <button
                  onClick={closeMenu}
                  className="w-8 h-8 rounded-full glass-pill flex items-center justify-center border border-white/10 hover:bg-white/10 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-4 h-4 text-white" />
                </button>
              </div>

              {/* Navigation Links */}
              <nav className="flex-1">
                <ul className="flex flex-col gap-1">
                  {['Home', 'FinDash App', 'Assets', 'Features', 'Pricing', 'FAQ'].map((item) => (
                    <li key={item}>
                      <a
                        href="#"
                        onClick={closeMenu}
                        className="block px-4 py-3 rounded-lg text-gray-300 hover:text-white hover:bg-white/5 transition-all text-base font-medium"
                      >
                        {item}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Protection Section */}
              <div className="mt-auto pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 bg-[#1a1a1a] hover:bg-[#252525] transition-colors rounded-full px-5 py-3 cursor-pointer border border-white/5 group mb-3">
                  <span className="text-gray-300 text-sm font-medium">Protection</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-white transition-colors" />
                </div>
                <div className="w-full h-12 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:scale-105 transition-transform shadow-lg shadow-white/10">
                  <Shield className="w-5 h-5 fill-current stroke-2" />
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </nav>
  );
};

export default Navbar;