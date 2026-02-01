
import React, { useState, useEffect } from 'react';
import '../types';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Research', href: '#research' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
      scrolled ? 'bg-[#0A0A0A]/80 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <iconify-icon icon="solar:water-drops-linear" width="32" className="text-[#0891B2] group-hover:rotate-12 transition-transform"></iconify-icon>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter text-[#F5F5F0] uppercase">RISK SOLUTIONS</span>
            <span className="text-[10px] text-white/40 font-mono tracking-[0.2em] leading-none uppercase">DUBAI / ENGINEERING</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-xs font-mono uppercase tracking-[0.3em] text-[#F5F5F0]/60 hover:text-[#F5F5F0] transition-colors">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="text-[#F5F5F0] border-b border-[#F5F5F0]/20 hover:border-[#F5F5F0] px-2 py-1 text-xs font-bold uppercase tracking-widest transition-all">
            Initiate Contact
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-[#F5F5F0]">
          <iconify-icon icon={isMenuOpen ? "solar:close-linear" : "solar:menu-dots-linear"} width="24"></iconify-icon>
        </button>
      </div>

      <div className={`fixed inset-0 bg-[#0A0A0A] z-[-1] flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {navLinks.map((item) => (
          <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter text-[#F5F5F0] hover:text-[#F5F5F0]/60 transition-colors uppercase">
            {item.name}
          </a>
        ))}
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter text-[#F5F5F0] underline underline-offset-8 uppercase">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
