import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { HiArrowNarrowRight, HiDownload } from 'react-icons/hi';
import photo from '../assets/photo A.png'

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary-light/10 dark:bg-primary-dark/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark text-sm font-semibold mb-6">
            Aditya Umesh Pawar 🚀
          </span>
          <h1 className="text-5xl md:text-7xl font-display font-bold leading-tight mb-6">
            Aspiring <span className="text-primary-light dark:text-primary-dark">Full-Stack</span> Developer
          </h1>
          <p className="text-lg text-text-secondary-light dark:text-text-secondary-dark max-w-lg mb-10">
            Crafting digital experiences with modern web technologies. Passionate about building scalable applications and intuitive UI/UX.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="projects" smooth={true} duration={500} offset={-70}>
              <button className="btn-primary flex items-center gap-2">
                View My Work <HiArrowNarrowRight />
              </button>
            </Link>
            {/* <a href="/resume.pdf" download className="btn-outline flex items-center gap-2">
              Resume <HiDownload />
            </a> */}
          </div>
        </motion.div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative flex justify-center"
        >
          <div className="relative w-64 h-64 md:w-80 md:h-80">
            {/* Rotating border animation */}
            <div className="absolute inset-0 border-4 border-dashed border-primary-light dark:border-primary-dark rounded-full animate-slow-spin" />
            
            <div className="absolute inset-4 rounded-full overflow-hidden border-4 border-white dark:border-surface-dark shadow-2xl">
              <img 
                src={photo} 
                alt="Aditya Pawar" 
                className="w-full h-full object-cover object-top"
               
              />
            </div>
            
            {/* Floating badges */}
            <motion.div 
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
              className="absolute -top-4 -right-4 glass p-4 rounded-2xl shadow-xl"
            >
              <span className="text-2xl">💻</span>
            </motion.div>
            <motion.div 
              animate={{ y: [0, 10, 0] }}
              transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
              className="absolute -bottom-4 -left-4 glass p-4 rounded-2xl shadow-xl"
            >
              <span className="text-2xl">⚡</span>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50"
      >
        <span className="text-xs uppercase tracking-widest font-semibold">Scroll</span>
        <div className="w-0.5 h-10 bg-gradient-to-b from-primary-light dark:from-primary-dark to-transparent" />
      </motion.div>
    </section>
  );
};

export default Hero;
