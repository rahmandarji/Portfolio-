import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import EngineeringStack from './sections/EngineeringStack';
import HowIBuild from './sections/HowIBuild';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './sections/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0c] text-gray-200">
      <Navbar />
      <main>
        <Hero />
        <Projects />
        <EngineeringStack />
        <HowIBuild />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
