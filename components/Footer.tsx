
import React from 'react';
import '../types';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#F8FAFC] border-t border-slate-200 pt-16 pb-8 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <a href="#" className="flex items-center gap-3 mb-6">
              <iconify-icon icon="solar:water-drops-linear" width="28" className="text-[#0F172A]"></iconify-icon>
              <span className="text-lg font-bold tracking-tight text-[#0F172A]">Risk Solutions</span>
            </a>
            <p className="text-slate-500 text-sm leading-relaxed">
              Pioneering wave research and environmental risk analysis for a safer tomorrow.
            </p>
          </div>
          
          <div>
            <h4 className="font-medium text-[#0F172A] mb-4 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#0891B2] transition-colors">Risk Analysis</a></li>
              <li><a href="#" className="hover:text-[#0891B2] transition-colors">Ocean Research</a></li>
              <li><a href="#" className="hover:text-[#0891B2] transition-colors">Coastal Consulting</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#0F172A] mb-4 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#0891B2] transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-[#0891B2] transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-[#0891B2] transition-colors">Newsroom</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-medium text-[#0F172A] mb-4 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3 text-sm text-slate-500">
              <li><a href="#" className="hover:text-[#0891B2] transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-[#0891B2] transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-400 text-xs">© 2025 Risk Solutions Dubai. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#" className="text-slate-400 hover:text-[#0F172A] transition-colors"><iconify-icon icon="brandico:linkedin" width="18"></iconify-icon></a>
            <a href="#" className="text-slate-400 hover:text-[#0F172A] transition-colors"><iconify-icon icon="brandico:twitter-bird" width="18"></iconify-icon></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
