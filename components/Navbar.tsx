
import React, { useState, useEffect } from 'react';

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
      scrolled ? 'bg-[#F5F5F0]/80 backdrop-blur-xl border-b border-black/5 py-4' : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3 group">
          <iconify-icon icon="solar:water-drops-linear" width="32" className="text-black group-hover:rotate-12 transition-transform"></iconify-icon>
          <div className="flex flex-col">
            <span className="text-lg font-bold tracking-tighter text-black uppercase">RISK SOLUTIONS</span>
            <span className="text-[10px] text-gray-500 font-mono tracking-[0.2em] leading-none">DUBAI / ENGINEERING</span>
          </div>
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((item) => (
            <a key={item.name} href={item.href} className="text-xs font-mono uppercase tracking-[0.2em] text-gray-500 hover:text-black transition-colors">
              {item.name}
            </a>
          ))}
          <a href="#contact" className="text-black border-b border-black/20 hover:border-black px-2 py-1 text-xs font-bold uppercase tracking-widest transition-all">
            Initiate Contact
          </a>
        </div>

        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-black">
          <iconify-icon icon={isMenuOpen ? "solar:close-linear" : "solar:menu-dots-linear"} width="24"></iconify-icon>
        </button>
      </div>

      <div className={`fixed inset-0 bg-[#F5F5F0] z-[-1] flex flex-col items-center justify-center gap-10 transition-all duration-500 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
      }`}>
        {navLinks.map((item) => (
          <a key={item.name} href={item.href} onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter text-black hover:text-gray-500">
            {item.name}
          </a>
        ))}
        <a href="#contact" onClick={() => setIsMenuOpen(false)} className="text-2xl font-bold tracking-tighter text-black underline underline-offset-8">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
