
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F5F5F0] border-t border-black/5 pt-16 pb-12 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <iconify-icon icon="solar:water-drops-linear" width="28" className="text-black"></iconify-icon>
              <span className="text-lg font-bold tracking-tight text-black uppercase">Risk Solutions</span>
            </a>
            <p className="text-gray-500 text-sm leading-relaxed font-light">
              Pioneering probabilistic reliability research and climate-informed engineering for global infrastructure.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-black mb-4 text-xs uppercase tracking-[0.2em]">Services</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors font-light">Risk Analysis</a></li>
              <li><a href="#" className="hover:text-black transition-colors font-light">Reliability Design</a></li>
              <li><a href="#" className="hover:text-black transition-colors font-light">Climate Adaptation</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4 text-xs uppercase tracking-[0.2em]">Company</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li><a href="#" className="hover:text-black transition-colors font-light">About Us</a></li>
              <li><a href="#" className="hover:text-black transition-colors font-light">Methodology</a></li>
              <li><a href="#" className="hover:text-black transition-colors font-light">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-black mb-4 text-xs uppercase tracking-[0.2em]">Contact</h4>
            <ul className="space-y-3 text-sm text-gray-500">
              <li className="font-light">DIFC, Dubai, UAE</li>
              <li className="font-light">info@risksolutions.ae</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-black/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-[10px] font-mono tracking-widest">© 2025 RISK SOLUTIONS DUBAI. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <a href="#" className="text-gray-400 hover:text-black transition-colors"><iconify-icon icon="brandico:linkedin" width="16"></iconify-icon></a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors"><iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
