import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Education from './components/Education';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    document.title = "Nagaraj C | Full Stack Web Developer";
  }, []);

  return (
    <div className="min-h-screen bg-background text-dark font-sans selection:bg-primary selection:text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Education />
        <Certifications />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
