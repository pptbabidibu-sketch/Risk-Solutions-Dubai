
import React from 'react';

const CapabilityCard = ({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) => (
  <div className={`reveal-element group relative p-8 transition-all duration-500 border-l border-black/5 hover:border-black/20`} style={{ transitionDelay: `${index * 50}ms` }}>
    <div className="mb-6 group-hover:scale-110 transition-transform flex items-center gap-3">
      <iconify-icon icon={icon} width="24" className="text-black"></iconify-icon>
      <h3 className="text-lg font-semibold text-black leading-tight group-hover:text-gray-600 transition-colors">{title}</h3>
    </div>
    <p className="text-gray-500 text-sm leading-relaxed font-light group-hover:text-black transition-colors">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const capabilities = [
    {
      icon: "solar:cloud-sun-linear",
      title: "Climate Risk Quantification",
      description: "Quantitative risk assessment frameworks supporting adaptation and disaster resilience for major infrastructure."
    },
    {
      icon: "solar:graph-new-linear",
      title: "Reliability-Based Design",
      description: "Probabilistic engineering methodologies (ISO 2394) to quantify safety margins and performance uncertainty."
    },
    {
      icon: "solar:code-linear",
      title: "Structural Performance Software",
      description: "Proprietary digital platforms for automated engineering analysis and real-time structural behavior forecasting."
    },
    {
      icon: "solar:chart-linear",
      title: "Cost-Optimal Optimization",
      description: "Balancing safety, durability, and efficiency through algorithms optimized for life-cycle cost analysis."
    },
    {
      icon: "solar:alarm-linear",
      title: "Emergency Disaster Systems",
      description: "Rapid-response modeling for storm surges and coastal floods, enabling proactive risk mitigation."
    },
    {
      icon: "solar:water-drops-linear",
      title: "Wave & Extreme Event Analysis",
      description: "Numerical, statistical, and AI frameworks for nearshore wave propagation and loading prediction."
    },
    {
      icon: "solar:database-linear",
      title: "Probabilistic Modeling",
      description: "Stochastic methods including Monte Carlo simulations to evaluate asset reliability and operational risk."
    },
    {
      icon: "solar:cpu-linear",
      title: "AI Engineering Applications",
      description: "Integrating machine learning to enhance predictive accuracy in typhoon and structural stability modeling."
    },
    {
      icon: "solar:globus-linear",
      title: "Climate Impact Assessment",
      description: "Long-term sea-level rise projections and adaptive strategy development for coastal urban facilities."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#F5F5F0] grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 reveal-element">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-black"></div>
             <span className="text-black font-mono text-xs uppercase tracking-[0.3em]">Core Engineering Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-black tracking-tight">
            Infrastructure <span className="text-gray-400 italic">Intelligence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((c, i) => (
            <CapabilityCard key={i} index={i} {...c} />
          ))}
        </div>

        <div className="mt-32 reveal-element">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8 py-8 px-0 border-t border-black/10">
             <div className="flex items-center gap-6">
                <div className="text-black font-mono text-sm uppercase tracking-widest">Our DNA</div>
                <div className="flex flex-wrap gap-4">
                  {['Risk-Informed', 'Data-Driven', 'Future-Resilient', 'Climate-Adaptive'].map(v => (
                    <span key={v} className="text-xs text-gray-400 font-medium uppercase tracking-tighter">#{v}</span>
                  ))}
                </div>
             </div>
             <a href="#contact" className="text-black text-sm font-semibold flex items-center gap-2 group border-b border-black/10 pb-1">
                Technical Brochure 
                <iconify-icon icon="solar:download-linear" className="group-hover:translate-y-1 transition-transform"></iconify-icon>
             </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
