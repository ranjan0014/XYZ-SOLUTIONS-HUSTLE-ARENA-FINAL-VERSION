import React, { useRef, useState, useEffect } from 'react';
import { Play, ShieldAlert, Lock, MapPin } from 'lucide-react';

const VideoSection: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);
    const videoRef = useRef<HTMLVideoElement>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) setIsVisible(true);
            },
            { threshold: 0.2 }
        );
        const el = document.getElementById('video-showcase');
        if (el) observer.observe(el);
        return () => { if (el) observer.unobserve(el); };
    }, []);

    return (
        <section id="video-showcase" className="py-24 bg-xyz-black relative overflow-hidden">
             {/* Decorative Background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[80%] bg-xyz-blue/5 -rotate-6 blur-[100px] pointer-events-none"></div>

            <div className={`max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                <div className="text-center mb-12">
                     <h2 className="text-xyz-green text-sm font-bold uppercase tracking-[0.2em] mb-2">Live Scenario</h2>
                     <h3 className="text-3xl md:text-5xl font-bold text-white mb-6">DON'T LET THIS <span className="text-xyz-blue">BE YOU</span></h3>
                     <p className="text-gray-400 max-w-2xl mx-auto">
                        Watch how the XYZ GPS Security System turns a potential theft into a resolved situation in seconds.
                     </p>
                </div>

                <div className="relative group rounded-2xl overflow-hidden border border-white/10 bg-xyz-panel shadow-[0_0_50px_rgba(0,243,255,0.1)] mb-16">
                    {/* Glow Effect Border */}
                    <div className="absolute inset-0 rounded-2xl ring-1 ring-white/10 group-hover:ring-xyz-blue/50 transition-all duration-500 pointer-events-none z-20"></div>

                    <div className="aspect-video bg-black relative flex items-center justify-center">
                        <video
                            ref={videoRef}
                            className="w-full h-full object-cover"
                            controls
                            playsInline
                            poster="https://images.unsplash.com/photo-1558981403-c5f9899a28bc?q=80&w=2070&auto=format&fit=crop"
                        >
                            {/* Ensure your video file is named 'video.mp4' and placed in the public/ folder */}
                            <source src="/video.mp4" type="video/mp4" />
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>

                {/* Video Info / Transcript Highlights */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                     <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-xyz-blue/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-12 h-12 rounded-full bg-xyz-blue/10 flex items-center justify-center mb-4">
                            <ShieldAlert className="w-6 h-6 text-xyz-blue" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Anti-Theft Alert</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            "Bhai bike chori ho gaya?" Not with XYZ. Get instant notifications the moment your vehicle detects unauthorized movement.
                        </p>
                     </div>

                     <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-xyz-green/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-12 h-12 rounded-full bg-xyz-green/10 flex items-center justify-center mb-4">
                            <Lock className="w-6 h-6 text-xyz-green" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Remote Engine Lock</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Total control in your pocket. Shut down your engine remotely via the app to stop thieves in their tracks.
                        </p>
                     </div>

                     <div className="bg-white/5 p-6 rounded-lg border border-white/5 hover:border-purple-500/50 transition-all hover:-translate-y-1 duration-300">
                        <div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center mb-4">
                            <MapPin className="w-6 h-6 text-purple-500" />
                        </div>
                        <h4 className="text-white font-bold text-lg mb-2">Real-Time Tracking</h4>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Pinpoint location accuracy. Whether you're in the city or on a rural road, know exactly where your assets are.
                        </p>
                     </div>
                </div>
            </div>
        </section>
    );
}

export default VideoSection;