import React, { useEffect, useState } from 'react';
import { Quote, Star } from 'lucide-react';

const testimonials = [
  {
    name: "Aman Verma",
    role: "Fleet Operation Manager",
    feedback: "Latiyal Nexus Solutions has transformed the way we track our delivery vehicles. The real-time monitoring system has reduced delays by almost 40%. Highly reliable services."
  },
  {
    name: "Shristhi Malhotra",
    role: "Logistics Head",
    feedback: "The dashboard insights help us detect route inefficiencies instantly. Our team relies on Latiyal Nexus every day. The accuracy is unmatched."
  },
  {
    name: "Rahul Singh",
    role: "Small Business Owner",
    feedback: "I used to worry about the safety of my transport vehicles but their anti-theft alerts gave me complete peace of mind. Absolutely worth it."
  },
  {
    name: "Neha Prasad",
    role: "Transportation Supervisor",
    feedback: "Fuel usage tracking helped us cut unnecessary expenses significantly. Latiyal Nexus provides real value for money."
  },
  {
    name: "Vikram Rao",
    role: "Delivery Fleet Lead",
    feedback: "The system is simple, modern and very intuitive. Even our drivers found it easy to adapt. Excellent support from the team as well."
  }
];

const Testimonials: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    const el = document.getElementById('testimonials');
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="testimonials" className="py-24 bg-xyz-dark relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-xyz-green/5 rounded-full blur-[100px] pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-xyz-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        
        <div className="text-center mb-16">
          <h2 className="text-xyz-green text-sm font-bold uppercase tracking-[0.2em] mb-2">Client Feedback</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">TRUSTED BY <span className="text-xyz-blue">LEADERS</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            See how industry professionals are optimizing their fleets with our technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item, index) => (
            <div 
              key={index}
              className="glass-panel p-8 rounded-xl relative hover:-translate-y-2 transition-transform duration-300 group border border-white/5 hover:border-xyz-blue/30"
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-100 transition-opacity">
                <Quote className="w-8 h-8 text-xyz-blue" />
              </div>
              
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed relative z-10 text-sm font-light tracking-wide min-h-[80px]">
                "{item.feedback}"
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-xyz-blue to-xyz-green flex items-center justify-center text-black font-bold shadow-[0_0_10px_rgba(0,243,255,0.3)]">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm">{item.name}</h4>
                  <p className="text-xyz-blue text-xs uppercase tracking-wider font-semibold">{item.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Testimonials;