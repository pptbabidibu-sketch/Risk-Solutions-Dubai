
import React from 'react';
import '../types';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-32 px-6 bg-[#F5F5F0]">
      <div className="max-w-4xl mx-auto text-left mb-16">
        <div className="flex items-center gap-4 mb-4">
           <div className="h-[1px] w-12 bg-black"></div>
           <span className="text-black font-mono text-xs uppercase tracking-[0.3em]">Inquiry Protocol</span>
        </div>
        <h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-[#1A1A1A] mb-4">Initiate Technical <br/><span className="text-gray-400">Consultation.</span></h2>
        <p className="text-gray-500 text-lg font-light">Direct channel to our Dubai headquarters for reliability engineering and risk assessment.</p>
      </div>

      <div className="max-w-4xl mx-auto">
        <form className="space-y-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-2 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Principal Name</label>
              <input type="text" placeholder="FULL NAME" className="w-full bg-transparent border-none px-0 py-2 outline-none text-black placeholder:text-gray-300 font-medium" />
            </div>
            <div className="space-y-2 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
              <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Organization</label>
              <input type="text" placeholder="ENTITY" className="w-full bg-transparent border-none px-0 py-2 outline-none text-black placeholder:text-gray-300 font-medium" />
            </div>
          </div>
          
          <div className="space-y-2 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
            <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Communications Link</label>
            <input type="email" placeholder="EMAIL ADDRESS" className="w-full bg-transparent border-none px-0 py-2 outline-none text-black placeholder:text-gray-300 font-medium" />
          </div>

          <div className="space-y-2 border-b border-black/10 pb-2 focus-within:border-black transition-colors">
            <label className="text-[10px] font-mono uppercase tracking-widest text-gray-400">Scope of Requirement</label>
            <textarea rows={3} placeholder="PROJECT SPECIFICATIONS..." className="w-full bg-transparent border-none px-0 py-2 outline-none text-black placeholder:text-gray-300 font-medium resize-none"></textarea>
          </div>

          <div className="pt-8 flex justify-between items-center flex-wrap gap-8">
            <button type="button" className="bg-black text-white font-semibold px-12 py-5 rounded-full hover:bg-gray-800 transition-all flex items-center justify-center gap-3 group shadow-xl shadow-black/5">
              Transmit Inquiry
              <iconify-icon icon="solar:plain-3-linear" class="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"></iconify-icon>
            </button>
            
            <div className="flex gap-12 text-gray-400 text-xs font-mono">
                <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                    INFO@RISKSOLUTIONS.AE
                </div>
                <div className="flex items-center gap-2">
                    <iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                    DIFC, DUBAI
                </div>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
