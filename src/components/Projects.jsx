import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Github, ExternalLink, MessageSquare, ShoppingBag, ChevronRight } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: 'E-Commerce Web Application',
      description: 'A full-stack e-commerce platform with authentication, product listing, cart, and order management. Built REST APIs and integrated MongoDB database.',
      image: '/assets/project-ecommerce.png',
      tech: ['React', 'Node.js', 'Express', 'MongoDB'],
      github: 'https://github.com/nagaraj1295/ecommerce.git',
      demo: '#',
      icon: <ShoppingBag size={20} />
    },
    {
      title: 'Real-Time Chat Web Application',
      description: 'Built a real-time one-to-one chat application with user authentication and live messaging. Managed online/offline status and message timestamps.',
      image: '/assets/project-todo.png', 
      tech: ['React', 'Socket.io', 'Node.js', 'MongoDB'],
      github: 'https://github.com/nagaraj1295/Modern-Todo.git', 
      demo: '#',
      icon: <MessageSquare size={20} />
    }
  ];

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Featured Projects" 
          subtitle="A showcase of my recent full-stack development work, focusing on real-world utility and performance."
        />

        <div className="relative">
          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex items-center justify-center gap-2 mb-6 text-primary/40 animate-pulse">
            <span className="text-[10px] font-black uppercase tracking-widest">Swipe for more</span>
            <ChevronRight size={14} />
          </div>

          <div className="flex overflow-x-auto gap-12 pb-16 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:grid lg:grid-cols-2 lg:overflow-visible lg:mx-0 lg:px-0">
            {projects.map((project, i) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: i * 0.2 }}
                viewport={{ once: true }}
                className="min-w-[85vw] md:min-w-[450px] lg:min-w-0 snap-center group bg-background rounded-[40px] overflow-hidden border border-gray-50 shadow-sm hover:shadow-2xl transition-all"
              >
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <div className="absolute top-6 left-6 p-3 bg-white/90 backdrop-blur-sm rounded-2xl text-primary shadow-xl">
                    {project.icon}
                  </div>
                </div>

                <div className="p-10">
                  <h3 className="text-2xl font-bold text-secondary mb-4 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-dark/70 mb-8 leading-relaxed h-20 overflow-hidden">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-10">
                    {project.tech.map((t) => (
                      <span key={t} className="px-4 py-1.5 bg-white text-primary text-[10px] font-black uppercase tracking-widest rounded-xl border border-primary/5 shadow-sm">
                        {t}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4">
                    <motion.a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      whileHover={{ y: -5 }}
                      className="flex-1 bg-secondary text-white py-4 rounded-2xl flex items-center justify-center gap-2 font-bold shadow-lg shadow-secondary/20 hover:bg-primary transition-all text-sm"
                    >
                      <Github size={18} /> GitHub
                    </motion.a>
                    <motion.a 
                      href={project.demo} 
                      whileHover={{ y: -5 }}
                      className="flex-1 bg-white text-primary border-2 border-primary/10 py-4 rounded-2xl flex items-center justify-center gap-2 font-bold hover:bg-primary/5 transition-all text-sm"
                    >
                      <ExternalLink size={18} /> Live Demo
                    </motion.a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
