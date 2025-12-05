import React, { useEffect, useState } from 'react';
import { 
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  BarChart, Bar, Legend
} from 'recharts';

const data = [
  { name: '00:00', speed: 40, fuel: 90 },
  { name: '04:00', speed: 30, fuel: 85 },
  { name: '08:00', speed: 65, fuel: 78 },
  { name: '12:00', speed: 55, fuel: 65 },
  { name: '16:00', speed: 70, fuel: 55 },
  { name: '20:00', speed: 45, fuel: 45 },
  { name: '23:59', speed: 20, fuel: 40 },
];

const efficiencyData = [
  { name: 'Vehicle A', efficiency: 92 },
  { name: 'Vehicle B', efficiency: 78 },
  { name: 'Vehicle C', efficiency: 85 },
  { name: 'Vehicle D', efficiency: 65 },
];

const DashboardPreview: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    const el = document.getElementById('dashboard');
    if (el) observer.observe(el);
    return () => { if (el) observer.unobserve(el); };
  }, []);

  return (
    <section id="dashboard" className="py-24 bg-xyz-black relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-xyz-blue/5 to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          
          <div className={`w-full lg:w-1/2 space-y-8 transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <h2 className="text-4xl md:text-5xl font-bold text-white">
              INTELLIGENT <br />
              <span className="text-xyz-blue">DATA VISUALIZATION</span>
            </h2>
            <p className="text-gray-400 text-lg leading-relaxed">
              Make informed decisions with our crystal-clear analytics dashboard. 
              Track fuel efficiency, monitor driver speeds, and predict maintenance needs before they happen.
            </p>
            
            <ul className="space-y-4 mt-8">
              {[
                "Real-time Telemetry Stream",
                "Predictive Maintenance AI",
                "Historical Route Playback",
                "Customizable Reports"
              ].map((item, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300 group hover:text-white transition-colors cursor-pointer" style={{ transitionDelay: `${idx * 100}ms` }}>
                  <div className="w-2 h-2 bg-xyz-green rounded-full shadow-[0_0_10px_rgba(57,255,20,0.8)] group-hover:scale-125 transition-transform"></div>
                  {item}
                </li>
              ))}
            </ul>

            <button className="mt-8 bg-white text-black hover:bg-gray-200 px-8 py-3 rounded-full font-bold transition-all hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
              Request Demo
            </button>
          </div>

          <div className={`w-full lg:w-1/2 transition-all duration-1000 ease-out delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            <div className="glass-panel rounded-xl p-6 border border-xyz-blue/20 shadow-[0_0_50px_rgba(0,243,255,0.05)] hover:shadow-[0_0_70px_rgba(0,243,255,0.1)] transition-all duration-500 relative">
              
              {/* Fake Dashboard Header */}
              <div className="flex justify-between items-center mb-6 border-b border-white/10 pb-4">
                <div>
                  <h4 className="text-white font-bold">Fleet Overview</h4>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-xyz-green opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-xyz-green"></span>
                    </span>
                    <span className="text-xs text-xyz-green">Live Data Stream</span>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-500">Total Active Units</div>
                  <div className="text-xl font-mono text-xyz-blue">142/150</div>
                </div>
              </div>

              {/* Charts */}
              <div className="space-y-6">
                <div className="h-48 w-full group">
                  <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide group-hover:text-xyz-blue transition-colors">Avg Fleet Speed vs Fuel Level</p>
                  <ResponsiveContainer width="100%" height="100%">
                    <AreaChart data={data}>
                      <defs>
                        <linearGradient id="colorSpeed" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#00f3ff" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#00f3ff" stopOpacity={0}/>
                        </linearGradient>
                        <linearGradient id="colorFuel" x1="0" y1="0" x2="0" y2="1">
                          <stop offset="5%" stopColor="#39ff14" stopOpacity={0.3}/>
                          <stop offset="95%" stopColor="#39ff14" stopOpacity={0}/>
                        </linearGradient>
                      </defs>
                      <CartesianGrid strokeDasharray="3 3" stroke="#333" />
                      <XAxis dataKey="name" stroke="#666" tick={{fontSize: 10}} />
                      <YAxis stroke="#666" tick={{fontSize: 10}} />
                      <Tooltip 
                        contentStyle={{ backgroundColor: '#111', borderColor: '#333', color: '#fff' }}
                        itemStyle={{ fontSize: '12px' }}
                      />
                      <Area isAnimationActive={isVisible} type="monotone" dataKey="speed" stroke="#00f3ff" fillOpacity={1} fill="url(#colorSpeed)" strokeWidth={2} />
                      <Area isAnimationActive={isVisible} type="monotone" dataKey="fuel" stroke="#39ff14" fillOpacity={1} fill="url(#colorFuel)" strokeWidth={2} />
                    </AreaChart>
                  </ResponsiveContainer>
                </div>

                <div className="h-40 w-full pt-4 border-t border-white/10 group">
                   <p className="text-xs text-gray-500 mb-2 uppercase tracking-wide group-hover:text-xyz-green transition-colors">Efficiency Score by Vehicle</p>
                   <ResponsiveContainer width="100%" height="100%">
                     <BarChart data={efficiencyData} layout="vertical">
                        <XAxis type="number" hide />
                        <YAxis dataKey="name" type="category" width={80} stroke="#888" tick={{fontSize: 10}} />
                        <Tooltip cursor={{fill: 'rgba(255,255,255,0.05)'}} contentStyle={{ backgroundColor: '#111', borderColor: '#333' }} />
                        <Bar isAnimationActive={isVisible} dataKey="efficiency" fill="#00f3ff" radius={[0, 4, 4, 0]} barSize={12} />
                     </BarChart>
                   </ResponsiveContainer>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default DashboardPreview;