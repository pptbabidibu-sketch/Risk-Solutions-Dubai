
import React from 'react';
import '../types';

const CapabilityCard = ({ icon, title, description, index }: { icon: string; title: string; description: string; index: number }) => (
  <div className={`reveal-element group relative p-8 transition-all duration-500 border-l border-white/5 hover:border-white/20`} style={{ transitionDelay: `${index * 50}ms` }}>
    <div className="mb-6 group-hover:scale-110 transition-transform flex items-center gap-3">
      <iconify-icon icon={icon} width="24" className="text-[#0891B2]"></iconify-icon>
      <h3 className="text-lg font-semibold text-[#F5F5F0] leading-tight group-hover:text-[#F5F5F0] transition-colors">{title}</h3>
    </div>
    <p className="text-[#F5F5F0]/50 text-sm leading-relaxed font-light group-hover:text-[#F5F5F0]/80 transition-colors">
      {description}
    </p>
  </div>
);

const Services: React.FC = () => {
  const capabilities = [
    {
      icon: "solar:cloud-sun-linear",
      title: "Climate Risk Quantification",
      description: "Quantitative risk assessment frameworks supporting adaptation for major infrastructure."
    },
    {
      icon: "solar:graph-new-linear",
      title: "Reliability-Based Design",
      description: "Probabilistic engineering methodologies (ISO 2394) to quantify safety margins."
    },
    {
      icon: "solar:code-linear",
      title: "Structural Performance Software",
      description: "Proprietary digital platforms for automated engineering analysis and forecasting."
    },
    {
      icon: "solar:chart-linear",
      title: "Cost-Optimal Optimization",
      description: "Balancing safety and efficiency through life-cycle cost analysis algorithms."
    },
    {
      icon: "solar:alarm-linear",
      title: "Emergency Disaster Systems",
      description: "Rapid-response modeling for storm surges, enabling proactive risk mitigation."
    },
    {
      icon: "solar:water-drops-linear",
      title: "Wave & Extreme Event Analysis",
      description: "Numerical and AI frameworks for nearshore wave propagation prediction."
    }
  ];

  return (
    <section id="services" className="py-32 px-6 bg-[#0A0A0A] grid-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-24 reveal-element">
          <div className="flex items-center gap-4 mb-4">
             <div className="h-[1px] w-12 bg-white/20"></div>
             <span className="text-[#F5F5F0]/60 font-mono text-xs uppercase tracking-[0.3em]">Core Engineering Capabilities</span>
          </div>
          <h2 className="text-4xl md:text-6xl font-semibold text-[#F5F5F0] tracking-tight">
            Infrastructure <span className="text-white/30 italic">Intelligence.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilities.map((c, i) => (
            <CapabilityCard key={i} index={i} {...c} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
