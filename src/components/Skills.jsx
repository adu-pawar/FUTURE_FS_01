import React from 'react';
import { motion } from 'framer-motion';
import { SectionTitle, Reveal } from './ScrollReveal';
import { skills } from '../data/skills';
import { useInView } from 'react-intersection-observer';

const SkillBar = ({ name, icon: Icon, level, index }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className="mb-6">
      <div className="flex justify-between items-center mb-2">
        <div className="flex items-center gap-2">
          {Icon && <Icon className="text-primary-light dark:text-primary-dark w-5 h-5" />}
          <span className="font-semibold">{name}</span>
        </div>
        <span className="text-sm font-medium opacity-60">{level}%</span>
      </div>
      <div className="h-2 w-full bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : {}}
          transition={{ duration: 1.5, delay: index * 0.1, ease: "easeOut" }}
          className="h-full bg-gradient-to-r from-primary-light to-purple-500 dark:from-primary-dark dark:to-cyan-400"
        />
      </div>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-surface-dark/30">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Competencies">Expertise & Skills</SectionTitle>

        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((group, groupIndex) => (
            <Reveal key={group.category} delay={groupIndex * 0.2}>
              <div className="glass p-8 rounded-3xl h-full border border-slate-100 dark:border-slate-800 hover:border-primary-light transition-colors">
                <h4 className="text-2xl font-bold mb-8 text-center">{group.category}</h4>
                <div className="space-y-2">
                  {group.items.map((skill, index) => (
                    <SkillBar 
                      key={skill.name} 
                      {...skill} 
                      index={index} 
                    />
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
