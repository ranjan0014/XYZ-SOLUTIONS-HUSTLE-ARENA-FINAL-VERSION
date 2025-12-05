import React, { useEffect, useState } from 'react';
import { Map, Zap, Lock, Truck, BarChart3, Radio } from 'lucide-react';
import { FeatureItem } from '../types';

const featureList: FeatureItem[] = [
  {
    id: '1',
    title: 'Live Route Monitoring',
    description: 'Track every vehicle in real-time with zero latency. Visualize movement on our high-fidelity 3D maps.',
    icon: <Map className="w-8 h-8 text-xyz-blue" />,
  },
  {
    id: '2',
    title: 'Fleet Analytics',
    description: 'Data-driven insights to optimize fuel consumption, mileage, and driver efficiency scores.',
    icon: <BarChart3 className="w-8 h-8 text-xyz-green" />,
  },
  {
    id: '3',
    title: 'Anti-Theft Protocol',
    description: 'Instant geofence alerts and remote engine immobilization triggers in case of unauthorized movement.',
    icon: <Lock className="w-8 h-8 text-red-500" />,
  },
  {
    id: '4',
    title: 'Driver Behavior',
    description: 'Monitor braking, acceleration, and idle times to ensure safety and reduce maintenance costs.',
    icon: <Truck className="w-8 h-8 text-orange-400" />,
  },
  {
    id: '5',
    title: 'Smart Sensors',
    description: 'Integrated IoT sensors for fuel levels, temperature control, and cargo integrity.',
    icon: <Radio className="w-8 h-8 text-purple-400" />,
  },
  {
    id: '6',
    title: 'Instant Alerts',
    description: 'Get notified via SMS, Email, or App Notification the second a critical event occurs.',
    icon: <Zap className="w-8 h-8 text-yellow-400" />,
  },
];

const Features: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('features');
    if (section) observer.observe(section);

    return () => {
      if (section) observer.unobserve(section);
    };
  }, []);

  return (
    <section id="features" className="py-24 bg-xyz-dark relative overflow-hidden">
       {/* Ambient glow for section */}
       <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-xyz-blue/5 rounded-full blur-[100px] pointer-events-none"></div>

       <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="text-center mb-16">
          <h2 className="text-xyz-blue text-sm font-bold uppercase tracking-[0.2em] mb-2">Capabilities</h2>
          <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">ENGINEERED FOR <span className="text-xyz-green">CONTROL</span></h3>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our platform merges hardware precision with software intelligence to give you total command over your assets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featureList.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`glass-panel p-8 rounded-xl hover:bg-white/5 transition-all duration-500 group hover:-translate-y-3 cursor-default hover:shadow-[0_0_30px_rgba(0,243,255,0.15)] hover:border-xyz-blue/50 relative overflow-hidden`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Card hover sheen */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] pointer-events-none"></div>
              
              <div className="w-14 h-14 bg-xyz-black rounded-lg border border-white/10 flex items-center justify-center mb-6 group-hover:border-xyz-blue/50 transition-colors group-hover:scale-110 duration-300 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-white mb-3 group-hover:text-xyz-blue transition-colors">
                {feature.title}
              </h4>
              <p className="text-gray-400 leading-relaxed text-sm group-hover:text-gray-300">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;