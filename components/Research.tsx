
import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { t: 'Year 0', reliability: 4.2, baseline: 3.5 },
  { t: 'Year 10', reliability: 4.1, baseline: 3.2 },
  { t: 'Year 20', reliability: 3.9, baseline: 2.8 },
  { t: 'Year 30', reliability: 3.8, baseline: 2.5 },
  { t: 'Year 40', reliability: 3.7, baseline: 2.1 },
  { t: 'Year 50', reliability: 3.5, baseline: 1.8 },
];

const Research: React.FC = () => {
  return (
    <section id="research" className="py-32 px-6 bg-[#F5F5F0] relative">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
          <div className="order-2 lg:order-1 reveal-element">
             <div className="p-0">
                <div className="flex items-center justify-between mb-12">
                   <div>
                      <h4 className="text-black font-semibold">Reliability Degradation Model</h4>
                      <p className="text-gray-500 text-xs font-mono uppercase tracking-widest mt-1">Stochastic Lifecycle Prediction</p>
                   </div>
                   <div className="text-black text-[10px] font-mono border-b border-black/30 pb-1 italic">LIVE SIMULATION ENGINE</div>
                </div>

                <div className="h-80 w-full mb-8 grayscale">
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorRel" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#000000" stopOpacity={0.1}/>
                          <stop offset="95%" stopColor="#000000" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#e2e2e2" vertical={false} />
                      <XAxis dataKey="t" stroke="#1a1a1a" fontSize={10} axisLine={false} tickLine={false} />
                      <YAxis stroke="#1a1a1a" fontSize={10} axisLine={false} tickLine={false} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#ffffff', border: '1px solid #e2e2e2', borderRadius: '0px', fontSize: '12px', boxShadow: 'none' }}
                      />
                      <Area type="monotone" dataKey="reliability" stroke="#000000" strokeWidth={2} fill="url(#colorRel)" />
                      <Area type="monotone" dataKey="baseline" stroke="#999999" strokeDasharray="5 5" fill="transparent" />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="grid grid-cols-2 gap-8">
                   <div className="py-4 border-t border-black/10">
                      <div className="text-[10px] text-gray-500 uppercase font-mono mb-1">Target β (Beta)</div>
                      <div className="text-2xl font-bold text-black italic">3.80</div>
                   </div>
                   <div className="py-4 border-t border-black/10">
                      <div className="text-[10px] text-gray-500 uppercase font-mono mb-1">P_f (Failure)</div>
                      <div className="text-2xl font-bold text-black italic">0.007%</div>
                   </div>
                </div>
             </div>
          </div>

          <div className="order-1 lg:order-2 reveal-element">
            <div className="mb-6 flex items-center gap-4">
               <div className="h-[1px] w-12 bg-black"></div>
               <span className="text-black font-mono text-xs uppercase tracking-[0.3em]">Scientific Rigor</span>
            </div>
            <h2 className="text-4xl md:text-6xl font-semibold text-black mb-8 leading-[1.1]">
              Performance-Based <br />
              <span className="text-gray-400 italic">Engineering.</span>
            </h2>
            <p className="text-xl text-gray-600 font-light leading-relaxed mb-10">
              Moving beyond static factors, we evaluate infrastructure durability through dynamic, probabilistic design philosophies that account for climate variability.
            </p>
            
            <div className="space-y-12">
               {[
                 { t: "Probabilistic Index", d: "Quantifying safety margins with precision statistics." },
                 { t: "Life-cycle Analysis", d: "Optimal design for construction and maintenance efficiency." },
                 { t: "Hazard Simulation", d: "Multi-scenario storm surge and flood forecasting." }
               ].map((item, i) => (
                 <div key={i} className="flex gap-6 group">
                    <div className="shrink-0 pt-1">
                       <span className="text-black text-xs font-mono font-bold">0{i+1} —</span>
                    </div>
                    <div>
                       <h5 className="text-black font-semibold mb-1 group-hover:text-gray-500 transition-colors">{item.t}</h5>
                       <p className="text-gray-500 text-sm">{item.d}</p>
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
