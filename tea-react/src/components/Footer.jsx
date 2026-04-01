import React from 'react';
import { Mail, MapPin, Phone, ArrowUpRight, Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';

const Facebook = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
);
const Twitter = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" /></svg>
);
const Instagram = ({ size = 24, className = "" }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" /></svg>
);

const Footer = () => {
  return (
    <footer className="bg-[#121212] text-white pt-32 pb-12 px-[5vw] mt-20 rounded-t-[60px] relative z-20">
      <div className="max-w-[1300px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 border-b border-white/5 pb-24">
          <div className="lg:col-span-5">
            <h2 className="text-5xl font-heading leading-tight uppercase mb-10">The Bir <br /> <span className="text-accent italic">Cooperative</span></h2>
            <p className="text-white/40 max-w-sm mb-10 text-sm leading-relaxed">Preserving the 100-year legacy of Kangra Tea. Supporting local farmers of Himachal Pradesh.</p>
            <div className="flex gap-5">
              {[Instagram, Facebook, Twitter, Mail].map((Icon, i) => (
                <a key={i} href="#" className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-accent transition-all group">
                  <Icon size={18} className="group-hover:text-primary transition-colors" />
                </a>
              ))}
            </div>
          </div>
          <div className="lg:col-span-3 lg:ml-auto">
            <h5 className="uppercase text-[10px] tracking-[4px] font-black text-accent mb-10">Quick Links</h5>
            <ul className="space-y-6">
              {[
                { name: 'Collections', path: '/premium-teas' },
                { name: 'Our Story', path: '/about' },
                { name: 'Wholesale', path: '/premium-teas' },
                { name: 'Factory Tour', path: '/heritage' }
              ].map(link => (
                <li key={link.name}>
                  <Link to={link.path} className="font-heading text-lg hover:text-accent transition-colors flex items-center gap-2 group cursor-pointer w-max">
                    {link.name} <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="lg:col-span-4 lg:ml-auto">
            <h5 className="uppercase text-[10px] tracking-[4px] font-black text-accent mb-10">Contact Us</h5>
            <div className="space-y-10">
              <div className="flex gap-6 items-start">
                <MapPin className="text-accent" size={20} />
                <div><p className="font-heading text-lg uppercase mb-2">Location</p><p className="text-white/40 text-sm">Bir, Distt Kangra, HP - 176077</p></div>
              </div>
              <div className="flex gap-6 items-start">
                <Phone className="text-accent" size={20} />
                <div><p className="font-heading text-lg uppercase mb-2">Reach Out</p><p className="text-white/40 text-sm"><a href="tel:+917018666302" className="hover:text-accent transition-colors">+91 70186 66302</a> <br /> <a href="mailto:thebircoopteafactoryltd@gmail.com" className="hover:text-accent transition-colors lowercase">thebircoopteafactoryltd@gmail.com</a></p></div>
              </div>
            </div>
          </div>
        </div>
        <div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-8 text-[10px] uppercase tracking-[3px] text-white/20 font-bold">
          <p>© 2026 Bir Cooperative Tea Factory.</p>
          <div className="flex items-center gap-3 text-accent font-heading">
            <Mountain size={16} /> <span>Bir Billing</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
