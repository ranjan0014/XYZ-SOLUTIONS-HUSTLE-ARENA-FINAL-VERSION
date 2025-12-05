import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import DashboardPreview from './components/DashboardPreview';
import Testimonials from './components/Testimonials';
import AiAssistant from './components/AiAssistant';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-xyz-black text-white selection:bg-xyz-blue selection:text-black">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <DashboardPreview />
        <Testimonials />
      </main>
      <Footer />
      <AiAssistant />
    </div>
  );
};

export default App;