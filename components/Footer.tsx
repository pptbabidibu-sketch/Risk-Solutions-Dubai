
import React from 'react';
import '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#0A0A0A] border-t border-white/5 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <iconify-icon icon="solar:water-drops-linear" width="28" className="text-[#0891B2]"></iconify-icon>
              <span className="text-lg font-bold tracking-tight text-[#F5F5F0] uppercase">Risk Solutions</span>
            </a>
            <p className="text-[#F5F5F0]/40 text-sm leading-relaxed">
              Pioneering research and risk analysis for a safer tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-[#F5F5F0] mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-[#F5F5F0]/40">
              <li><a href="#" className="hover:text-[#F5F5F0] transition-colors">Risk Analysis</a></li>
              <li><a href="#" className="hover:text-[#F5F5F0] transition-colors">Ocean Research</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#F5F5F0] mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-[#F5F5F0]/40">
              <li><a href="#" className="hover:text-[#F5F5F0] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#F5F5F0] transition-colors">Careers</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#F5F5F0] mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm text-[#F5F5F0]/40">
              <li><a href="#" className="hover:text-[#F5F5F0] transition-colors">Privacy Policy</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-[#F5F5F0]/20 text-xs">© 2025 Risk Solutions Dubai. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-white/30 hover:text-[#F5F5F0] transition-colors"><iconify-icon icon="brandico:linkedin" width="18"></iconify-icon></a>
            <a href="#" className="text-white/30 hover:text-[#F5F5F0] transition-colors"><iconify-icon icon="brandico:twitter-bird" width="18"></iconify-icon></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
