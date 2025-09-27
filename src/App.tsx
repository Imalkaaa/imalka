import React from 'react';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-bg-primary">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Certifications />
      <Languages />
      <Footer />
    </div>
  );
}

export default App;