import React, { useEffect, useState } from 'react';
import { Twitter, Linkedin, Facebook, MapPin, Mail, Phone, Users, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById('contact');
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <footer id="contact" className={`bg-xyz-black border-t border-white/10 pt-16 pb-8 relative overflow-hidden transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`}>
      {/* Footer background glow */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-xyz-blue via-xyz-green to-xyz-blue"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div className="col-span-1">
            <div className="flex items-center gap-2 mb-6">
               <div className="w-6 h-6 rounded bg-xyz-blue flex items-center justify-center">
                 <MapPin className="text-black w-4 h-4" />
               </div>
               <span className="font-bold text-lg tracking-wider text-white">
                 XYZ <span className="text-xyz-blue">SOLUTIONS</span>
               </span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Revolutionizing fleet management through secure, intelligent, and scalable GPS technology.
              <br/><br/>
              <span className="text-yellow-500 font-bold flex items-center gap-1 animate-pulse">
                <Zap className="w-3 h-3" /> Built for Hustle Arena
              </span>
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110"><Linkedin className="w-5 h-5" /></a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors hover:scale-110"><Facebook className="w-5 h-5" /></a>
            </div>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-b border-xyz-blue/30 inline-block pb-1">Team Predator</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-center gap-3 group">
                <Users className="w-4 h-4 text-xyz-green group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">Harsh Sawarn</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Users className="w-4 h-4 text-xyz-green group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">Aryan Jayker</span>
              </li>
              <li className="flex items-center gap-3 group">
                <Users className="w-4 h-4 text-xyz-green group-hover:text-white transition-colors" />
                <span className="group-hover:text-white transition-colors">Ranjan Kumar</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-b border-xyz-blue/30 inline-block pb-1">Product</h4>
            <ul className="space-y-3 text-sm text-gray-400">
              <li><a href="#" className="hover:text-xyz-blue transition-colors">GPS Tracking</a></li>
              <li><a href="#" className="hover:text-xyz-blue transition-colors">Fleet Analytics</a></li>
              <li><a href="#" className="hover:text-xyz-blue transition-colors">Asset Protection</a></li>
              <li><a href="#" className="hover:text-xyz-blue transition-colors">Live Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6 border-b border-xyz-blue/30 inline-block pb-1">Contact</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-xyz-blue mt-1 shrink-0" />
                <span>IIT Patna BSc Campus, Bihta,<br/>Patna, Bihar, India</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-xyz-blue shrink-0" />
                <span>+91 8252741567</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-xyz-blue shrink-0" />
                <span>contact@xyzsolutions.tech</span>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-600">
          <p>&copy; {new Date().getFullYear()} XYZ Solutions. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-gray-400">Privacy Policy</a>
            <a href="#" className="hover:text-gray-400">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;