import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Code2, Database, Layout, Wrench, Terminal, ShieldCheck, ChevronRight } from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: <Layout className="text-primary" />,
      skills: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React.js', 'Tailwind CSS']
    },
    {
      title: 'Backend & Database',
      icon: <Database className="text-primary" />,
      skills: ['Node.js', 'Express.js', 'MongoDB', 'MySQL', 'RESTful APIs']
    },
    {
      title: 'Data & Programming',
      icon: <Terminal className="text-primary" />,
      skills: ['Python (Basic)', 'Basic SQL', 'VBA Macros', 'Excel (Advanced)']
    },
    {
      title: 'Tools & Others',
      icon: <Wrench className="text-primary" />,
      skills: ['Git & GitHub', 'Power BI', 'VS Code', 'Six Sigma (White & Yellow)', 'Mobile/Electronics Resale']
    }
  ];

  return (
    <section id="skills" className="py-24 bg-background relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Technical Expertise" 
          subtitle="A comprehensive toolkit bridging the gap between data logic and user experience."
        />

        <div className="relative">
          {/* Scroll Indicators for mobile */}
          <div className="md:hidden flex items-center justify-center gap-2 mb-6 text-primary/40 animate-pulse">
            <span className="text-[10px] font-black uppercase tracking-widest">Swipe for more</span>
            <ChevronRight size={14} />
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 md:mx-0 md:px-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible">
            {skillCategories.map((cat, i) => (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[300px] md:min-w-0 snap-center"
              >
                <div className="bg-white p-10 rounded-[40px] border border-gray-50 shadow-sm hover:shadow-2xl transition-all h-full group">
                  <div className="w-16 h-16 bg-background rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-primary/5 transition-all">
                    {cat.icon}
                  </div>
                  <h3 className="text-xl font-black text-secondary mb-8 leading-tight h-14 flex items-center">
                    {cat.title}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span 
                        key={skill} 
                        className="px-4 py-2 bg-background text-dark/70 text-xs font-bold rounded-xl border border-gray-50 hover:border-primary/20 hover:text-primary transition-all"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
