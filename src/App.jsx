import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen overflow-x-hidden">
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
        
        {/* Floating background blobs for extra premium feel */}
        <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
          <div className="absolute top-[10%] -left-20 w-96 h-96 bg-primary-light/5 dark:bg-primary-dark/5 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute bottom-[10%] -right-20 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-500/5 rounded-full blur-[120px]" />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
