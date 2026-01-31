
import React from 'react';
import '../types';

const About: React.FC = () => {
  return (
    <section id="about" className="py-32 px-6 bg-[#F5F5F0] relative overflow-hidden">
      {/* Subtle background shadow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-black/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div className="reveal-element text-center mb-16">
          <div className="inline-flex items-center gap-4 mb-8">
             <div className="h-[1px] w-12 bg-black"></div>
             <span className="text-black font-mono text-xs uppercase tracking-[0.3em]">Founding Vision</span>
             <div className="h-[1px] w-12 bg-black"></div>
          </div>
          <h2 className="text-4xl md:text-7xl font-semibold tracking-tight text-black mb-10 leading-[1.1]">
            Bridging Science <br />
            <span className="text-gray-400 font-light">& Strategic Logic.</span>
          </h2>
          <div className="space-y-8 text-xl md:text-2xl text-gray-600 font-light leading-relaxed max-w-3xl mx-auto">
            <p>
              Founded by <span className="text-black font-medium">Dr. Seoungwoo Kim (PhD, Civil & Environmental Engineering)</span>, Risk Solutions Dubai was established to move beyond conventional safety factors.
            </p>
            <p>
              We integrate next-generation <span className="text-black italic">probabilistic modeling</span> and <span className="text-black italic">reliability-based design</span> to address the rapid escalation of climate-driven disasters and financial inefficiencies in offshore construction.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-16 mt-24">
          <div className="reveal-element group border-t border-black/10 pt-8">
            <div className="text-xs font-mono text-black mb-4 tracking-[0.2em]">01 / DYNAMIC ANALYSIS</div>
            <p className="text-gray-500 text-base leading-relaxed group-hover:text-black transition-colors">
              Replacing static design codes with performance-oriented stochastic simulations to capture real-world variability.
            </p>
          </div>
          <div className="reveal-element group border-t border-black/10 pt-8">
            <div className="text-xs font-mono text-black mb-4 tracking-[0.2em]">02 / UNIFIED LIFECYCLE</div>
            <p className="text-gray-500 text-base leading-relaxed group-hover:text-black transition-colors">
              Integrating design, construction, and maintenance into a unified data-driven framework for ultimate resilience.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
