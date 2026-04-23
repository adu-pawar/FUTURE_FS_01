import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HiX, HiOutlineExternalLink, HiOutlineCode } from 'react-icons/hi';

const ProjectModal = ({ project, isOpen, onClose }) => {
  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-surface-dark rounded-3xl overflow-hidden shadow-2xl overflow-y-auto"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-red-500 hover:text-white transition-all z-10"
            >
              <HiX size={24} />
            </button>

            <div className="grid md:grid-cols-2">
              {/* Image Side */}
              <div className="h-64 md:h-full">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Info Side */}
              <div className="p-8 md:p-12">
                <span className="text-xs font-bold uppercase tracking-widest text-primary-light dark:text-primary-dark mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-3xl md:text-4xl font-display font-bold mb-6">{project.title}</h3>
                
                <p className="text-text-secondary-light dark:text-text-secondary-dark mb-8 leading-relaxed">
                  {project.description}
                  <br /><br />
                  This project demonstrates advanced implementation of {project.tags.join(', ')}. 
                  It focuses on performance, scalability, and user experience.
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {project.tags.map(tag => (
                    <span key={tag} className="px-4 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-sm font-medium">
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t dark:border-slate-800">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex items-center gap-2"
                  >
                    Live Demo <HiOutlineExternalLink />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-outline flex items-center gap-2"
                  >
                    GitHub Code <HiOutlineCode />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ProjectModal;
