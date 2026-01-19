import React from 'react';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Experience from './components/sections/Experience';
import BuildingNow from './components/sections/BuildingNow';

function App() {
  return (
    <div className="min-h-screen bg-background text-white selection:bg-primary selection:text-background font-sans">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <BuildingNow />
      </main>
      <Footer />
    </div>
  );
}

export default App;
