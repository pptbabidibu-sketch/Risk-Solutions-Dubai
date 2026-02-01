
import React from 'react';
import '../types';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#0A0A0A] relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="reveal-element text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-8">
             <div className="h-[1px] w-12 bg-white/20"></div>
             <span className="text-[#F5F5F0] font-mono text-xs uppercase tracking-[0.3em]">Founding Vision</span>
             <div className="h-[1px] w-12 bg-white/20"></div>
          </div>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-[#F5F5F0] mb-10 leading-[1.1]">
            Bridging Science <br />
            <span className="text-white/30 font-light">& Strategic Logic.</span>
          </h2>
          <div className="space-y-8 text-xl md:text-2xl text-[#F5F5F0]/70 font-light leading-relaxed max-w-3xl mx-auto">
            <p>
              Founded by <span className="text-[#F5F5F0] font-medium">Dr. Seoungwoo Kim (PhD, Civil & Environmental Engineering)</span>, Risk Solutions Dubai move beyond conventional safety factors.
            </p>
            <p>
              We integrate <span className="text-[#F5F5F0] italic">probabilistic modeling</span> to address the rapid escalation of climate-driven disasters and financial inefficiencies.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-24">
          <div className="reveal-element group border-t border-white/10 pt-8">
            <div className="text-xs font-mono text-[#F5F5F0] mb-4 tracking-[0.2em]">01 / DYNAMIC ANALYSIS</div>
            <p className="text-[#F5F5F0]/50 text-base leading-relaxed group-hover:text-[#F5F5F0] transition-colors">
              Replacing static design codes with performance-oriented stochastic simulations to capture real-world variability.
            </p>
          </div>
          <div className="reveal-element group border-t border-white/10 pt-8">
            <div className="text-xs font-mono text-[#F5F5F0] mb-4 tracking-[0.2em]">02 / UNIFIED LIFECYCLE</div>
            <p className="text-[#F5F5F0]/50 text-base leading-relaxed group-hover:text-[#F5F5F0] transition-colors">
              Integrating design and maintenance into a unified data-driven framework for ultimate resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
