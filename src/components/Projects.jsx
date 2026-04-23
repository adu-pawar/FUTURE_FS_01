import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/projects';
import { HiOutlineExternalLink, HiOutlineCode, HiOutlineEye } from 'react-icons/hi';
import ProjectModal from './ProjectModal';
import { SectionTitle } from './ScrollReveal';

const Projects = () => {
  const [filter, setFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = ['All', ...new Set(projects.map(p => p.category))];

  const handleOpenModal = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <SectionTitle subtitle="Portfolio">Recent Projects</SectionTitle>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full text-sm font-semibold transition-all ${
                filter === cat 
                ? 'bg-primary-light text-white dark:bg-primary-dark dark:text-background-dark shadow-lg scale-105' 
                : 'glass hover:bg-slate-100 dark:hover:bg-slate-800 opacity-60 hover:opacity-100'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div 
          layout
          className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode='popLayout'>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group relative glass rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500"
              >
                {/* Image Wrap */}
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
                    <div className="flex gap-4">
                      <button 
                        onClick={() => handleOpenModal(project)}
                        className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-primary-light transition-colors"
                        title="View Details"
                      >
                        <HiOutlineEye size={24} />
                      </button>
                      <a href={project.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-primary-light transition-colors" title="GitHub">
                        <HiOutlineCode size={24} />
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-4">
                    <h4 className="text-2xl font-bold">{project.title}</h4>
                    <span className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full bg-primary-light/10 text-primary-light dark:bg-primary-dark/10 dark:text-primary-dark">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-text-secondary-light dark:text-text-secondary-dark mb-6 line-clamp-2">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                      <span key={tag} className="text-xs font-medium px-3 py-1 rounded-lg bg-slate-100 dark:bg-slate-800">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Modal */}
        <ProjectModal 
          project={selectedProject} 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
        />
      </div>
    </section>
  );
};

export default Projects;
