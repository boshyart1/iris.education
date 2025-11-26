import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import GuideCTA from './components/GuideCTA';
import Features from './components/Features';
import Announcements from './components/Announcements';
import Services from './components/Services';
import Documents from './components/Documents';
import StudentLife from './components/StudentLife';
import Timeline from './components/Timeline';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-right">
      <Navbar />
      <Hero />
      <Announcements />
      <GuideCTA />
      <Features />
      <Services />
      <StudentLife />
      <Documents />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;