import React from 'react';
import { Link } from 'react-scroll';
import { FaGithub, FaLinkedin, FaInstagram, FaRegCopyright } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="py-12 border-t dark:border-slate-800 bg-white dark:bg-background-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
        {/* Logo/Brand */}
        <div className="text-center md:text-left">
          <Link to="home" smooth={true} duration={500} className="cursor-pointer">
            <span className="text-3xl font-display font-bold text-primary-light dark:text-primary-dark tracking-tighter">
              AP.
            </span>
          </Link>
          <p className="mt-4 text-text-secondary-light dark:text-text-secondary-dark text-sm max-w-xs">
            Designing and developing digital solutions with passion and precision.
          </p>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-sm font-semibold opacity-70">
          <Link to="about" smooth={true} className="hover:text-primary-light transition-colors cursor-pointer">About</Link>
          <Link to="projects" smooth={true} className="hover:text-primary-light transition-colors cursor-pointer">Projects</Link>
          <Link to="contact" smooth={true} className="hover:text-primary-light transition-colors cursor-pointer">Contact</Link>
        </div>

        {/* Social & Copyright */}
        <div className="flex flex-col items-center md:items-end gap-4">
          <div className="flex gap-6 text-xl text-text-secondary-light dark:text-text-secondary-dark">
            <a href="https://github.com/adu-pawar" className="hover:text-primary-light transition-colors"><FaGithub /></a>
            <a href="https://www.linkedin.com/in/aditya-pawar-b66b5b383/" className="hover:text-primary-light transition-colors"><FaLinkedin /></a>
            <a href="https://www.instagram.com/0_0___aadu_/" className="hover:text-primary-light transition-colors"><FaInstagram /></a>
          </div>
          <p className="flex items-center gap-1 text-xs opacity-60">
            <FaRegCopyright /> {new Date().getFullYear()} Aditya Pawar. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
