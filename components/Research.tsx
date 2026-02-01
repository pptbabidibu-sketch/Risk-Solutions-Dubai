
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { t: 'Y0', reliability: 4.2, baseline: 3.5 },
  { t: 'Y10', reliability: 4.1, baseline: 3.2 },
  { t: 'Y20', reliability: 3.9, baseline: 2.8 },
  { t: 'Y30', reliability: 3.8, baseline: 2.5 },
  { t: 'Y40', reliability: 3.7, baseline: 2.1 },
  { t: 'Y50', reliability: 3.5, baseline: 1.8 },
];

const Research: React.FC = () => {
  return (
    <section id="research" className="py-32 px-6 bg-[#0A0A0A] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 reveal-element">
             <div className="p-0">
                <div className="flex items-center justify-between mb-12">
                   <div>
                      <h4 className="text-[#F5F5F0] font-semibold">Reliability Degradation Model</h4>
                      <p className="text-[#F5F5F0]/40 text-xs font-mono uppercase tracking-widest mt-1">Stochastic Lifecycle Prediction</p>
                   </div>
                   <div className="text-[#F5F5F0] text-[10px] font-mono border-b border-white/20 pb-1 italic uppercase">LIVE SIMULATION ENGINE</div>
                </div>

                <div className="h-80 w-full mb-8">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorRel" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#0891B2" stopOpacity={0.2}/>
                          <stop offset="95%" stopColor="#0891B2" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333333" vertical={false} />
                      <XAxis dataKey="t" stroke="#F5F5F0" opacity={0.3} fontSize={10} axisLine={false} tickLine={false} />
                      <YAxis stroke="#F5F5F0" opacity={0.3} fontSize={10} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#1A1A1A', border: '1px solid #333', borderRadius: '8px', fontSize: '12px', color: '#F5F5F0' }}
                        itemStyle={{ color: '#0891B2' }}
                      />
                      <Area type="monotone" dataKey="reliability" stroke="#0891B2" strokeWidth={2} fill="url(#colorRel)" />
                      <Area type="monotone" dataKey="baseline" stroke="#444" strokeDasharray="5 5" fill="transparent" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-8">
                   <div className="py-4 border-t border-white/10">
                      <div className="text-[10px] text-[#F5F5F0]/40 uppercase font-mono mb-1">Target β (Beta)</div>
                      <div className="text-2xl font-bold text-[#F5F5F0] italic">3.80</div>
                   </div>
                   <div className="py-4 border-t border-white/10">
                      <div className="text-[10px] text-[#F5F5F0]/40 uppercase font-mono mb-1">P_f (Failure)</div>
                      <div className="text-2xl font-bold text-[#F5F5F0] italic">0.007%</div>
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 reveal-element">
            <div className="mb-6 flex items-center gap-4">
               <div className="h-[1px] w-12 bg-[#0891B2]"></div>
               <span className="text-[#F5F5F0] font-mono text-xs uppercase tracking-[0.3em]">Scientific Rigor</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-[#F5F5F0] mb-8 leading-[1.1]">
              Performance-Based <br />
              <span className="text-white/30 italic">Engineering.</span>
            </h2>
            <p className="text-xl text-[#F5F5F0]/70 font-light leading-relaxed mb-10">
              Moving beyond static factors, we evaluate infrastructure durability through dynamic design philosophies.
            </p>
            
            <div className="space-y-12">
               {[
                 { t: "Probabilistic Index", d: "Quantifying safety margins with precision statistics." },
                 { t: "Life-cycle Analysis", d: "Optimal design for lifecycle efficiency." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="shrink-0 pt-1">
                       <span className="text-[#0891B2] text-xs font-mono font-bold">0{i+1} —</span>
                    </div>
                    <div>
                       <h5 className="text-[#F5F5F0] font-semibold mb-1 group-hover:text-[#F5F5F0]/60 transition-colors uppercase tracking-tight">{item.t}</h5>
                       <p className="text-[#F5F5F0]/40 text-sm leading-relaxed">{item.d}</p>
                    </div>
                 </div>
               ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
