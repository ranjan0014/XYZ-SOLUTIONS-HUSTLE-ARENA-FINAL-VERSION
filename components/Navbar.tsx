import React, { useState, useEffect } from 'react';
import { Menu, X, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Solutions', href: '#features' },
    { name: 'Demo', href: '#video-showcase' },
    { name: 'Analytics', href: '#dashboard' },
    { name: 'AI Consultant', href: '#ai-assistant' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-xyz-black/90 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo(0,0)}>
            <div className="w-8 h-8 rounded bg-gradient-to-tr from-xyz-blue to-xyz-green flex items-center justify-center">
              <MapPin className="text-black w-5 h-5" />
            </div>
            <span className="font-bold text-xl tracking-wider text-white">
              XYZ <span className="text-xyz-blue">SOLUTIONS</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-xyz-blue hover:scale-105 transition-all duration-200 px-3 py-2 rounded-md text-sm font-medium uppercase tracking-widest"
                >
                  {link.name}
                </a>
              ))}
              <button className="bg-transparent border border-xyz-green text-xyz-green hover:bg-xyz-green hover:text-black transition-all duration-300 px-5 py-2 rounded-full font-bold text-sm uppercase tracking-wider">
                Get Started
              </button>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white focus:outline-none"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-xyz-panel border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="text-gray-300 hover:text-xyz-blue block px-3 py-2 rounded-md text-base font-medium"
              >
                {link.name}
              </a>
            ))}
             <button className="w-full text-left text-xyz-green hover:bg-white/5 px-3 py-2 rounded-md font-bold uppercase tracking-wider">
                Get Started
              </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;