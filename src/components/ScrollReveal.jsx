import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

export const SectionTitle = ({ children, subtitle }) => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8 }}
      className="text-center mb-16"
    >
      {subtitle && (
        <span className="text-primary-light dark:text-primary-dark font-semibold tracking-widest uppercase text-sm mb-2 block">
          {subtitle}
        </span>
      )}
      <h2 className="text-4xl md:text-5xl font-display font-bold title-underlined">
        {children}
      </h2>
    </motion.div>
  );
};

export const Reveal = ({ children, width = "fit-content", delay = 0.2 }) => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 50 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay }}
      style={{ width }}
    >
      {children}
    </motion.div>
  );
};
