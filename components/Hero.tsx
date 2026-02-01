
import React from 'react';
import '../types';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen min-h-[800px] flex items-center justify-center overflow-hidden bg-[#0A0A0A]">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=2070&auto=format&fit=crop" 
          className="w-full h-full object-cover opacity-[0.05] scale-105 grayscale invert" 
          alt="Modern Infrastructure" 
        />
        <div className="absolute inset-0 grid-bg"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0A0A0A]/50 to-[#0A0A0A]"></div>
      </div>

      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-[120px] animate-pulse"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <h1 className="reveal-element text-5xl md:text-8xl lg:text-[7rem] leading-[0.95] font-semibold text-[#F5F5F0] tracking-tighter mb-8">
          Engineering <br />
          <span className="text-gradient-cyan italic">Resilience.</span>
        </h1>

        <p className="reveal-element text-lg md:text-2xl text-[#F5F5F0]/70 max-w-3xl mx-auto font-light leading-relaxed mb-12">
          Transforming complex uncertainty into actionable engineering intelligence. Founded by <span className="text-[#F5F5F0] font-medium">Dr. Seoungwoo Kim</span> to redefine infrastructure safety through probabilistic reliability.
        </p>

        <div className="reveal-element flex flex-col sm:flex-row gap-6 justify-center items-center">
          <a href="#contact" className="group relative bg-[#F5F5F0] text-black px-10 py-5 rounded-full font-semibold text-base overflow-hidden transition-all hover:pr-14">
            <span className="relative z-10">Technical Consultation</span>
            <iconify-icon icon="solar:arrow-right-linear" class="absolute right-6 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all"></iconify-icon>
          </a>
          <a href="#about" className="px-10 py-5 rounded-full font-medium text-base text-[#F5F5F0] border border-white/10 hover:bg-white/5 transition-all flex items-center gap-2">
            View Philosophy
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
