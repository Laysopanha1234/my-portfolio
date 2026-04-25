import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Footer from '../components/Footer';

function Home() {
  return (
    <div className="cv-container">
      <div className="cv-inner">
        <Navbar />
        <div className="main-content">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default Home;