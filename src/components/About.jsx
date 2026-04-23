import React from 'react';
import { SectionTitle, Reveal } from './ScrollReveal';
import { education, experience } from '../data/timeline';
import { HiAcademicCap, HiBriefcase } from 'react-icons/hi';

const About = () => {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Intro">About Me</SectionTitle>

        <div className="grid md:grid-cols-2 gap-16">
          {/* Bio & Intro */}
          <div>
            <Reveal>
              <h3 className="text-2xl font-bold mb-6">Mastering Web & Engineering</h3>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 leading-relaxed text-lg">
                I am an ambitious engineer and developer currently focused on mastering the full-stack ecosystem. 
                My background in Civil Engineering gives me a unique perspective on structure and problem-solving, 
                which I apply to building robust digital architectures.
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed">
                Currently learning HTML, CSS, JavaScript, and diving deep into React and Node.js. My goal is to bridge the gap between 
                complex engineering concepts and elegant web solutions.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="glass p-6 rounded-2xl">
                  <span className="text-4xl font-display font-bold text-primary-light dark:text-primary-dark">5+</span>
                  <p className="text-sm font-medium uppercase tracking-wider mt-2 opacity-70">Projects</p>
                </div>
                <div className="glass p-6 rounded-2xl">
                  <span className="text-4xl font-display font-bold text-primary-light dark:text-primary-dark">10+</span>
                  <p className="text-sm font-medium uppercase tracking-wider mt-2 opacity-70">Skills</p>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Timeline */}
          <div className="space-y-12">
            {/* Experience */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-primary-light/10 dark:bg-primary-dark/10 text-primary-light dark:text-primary-dark">
                  <HiBriefcase className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold">Experience</h4>
              </div>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {experience.map((item, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    <div className="pl-12 relative">
                      <div className="absolute left-0 top-1 w-10 h-10 rounded-full glass border-4 border-background-light dark:border-background-dark z-10" />
                      <div className="glass p-6 rounded-2xl hover:shadow-xl transition-shadow">
                        <span className="text-sm font-semibold text-primary-light dark:text-primary-dark block mb-2">{item.duration}</span>
                        <h5 className="text-xl font-bold mb-1">{item.role}</h5>
                        <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-4">{item.company}</p>
                        <p className="text-sm leading-relaxed opacity-80">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            {/* Education */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  <HiAcademicCap className="w-6 h-6" />
                </div>
                <h4 className="text-2xl font-bold">Education</h4>
              </div>
              <div className="space-y-8 relative before:absolute before:left-[19px] before:top-2 before:h-full before:w-0.5 before:bg-slate-200 dark:before:bg-slate-800">
                {education.map((item, index) => (
                  <Reveal key={index} delay={index * 0.1}>
                    <div className="pl-12 relative">
                      <div className="absolute left-0 top-1 w-10 h-10 rounded-full glass border-4 border-background-light dark:border-background-dark z-10" />
                      <div className="glass p-6 rounded-2xl">
                        <span className="text-sm font-semibold text-blue-500 block mb-2">{item.duration}</span>
                        <h5 className="text-xl font-bold mb-1">{item.degree}</h5>
                        <p className="text-sm font-medium text-text-secondary-light dark:text-text-secondary-dark mb-4">{item.institution}</p>
                        <p className="text-sm leading-relaxed opacity-80">{item.description}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
