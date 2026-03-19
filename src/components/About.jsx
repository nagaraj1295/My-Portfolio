import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { User, Briefcase, GraduationCap, Heart, Zap, Coffee } from 'lucide-react';

const About = () => {
  const stats = [
    { label: 'Experience', value: '6+ Years', icon: <Briefcase size={20} /> },
    { label: 'Education', value: 'B.Sc. IT', icon: <GraduationCap size={20} /> },
    { label: 'Projects', value: '10+ Global', icon: <User size={20} /> },
  ];

  const qualities = [
    { text: "Quick learner & adaptable", icon: <Zap size={16} /> },
    { text: "Friendly & polite professional", icon: <User size={16} /> },
    { text: "Respectful to all seniority levels", icon: <Heart size={16} /> },
    { text: "Enjoys developing new solutions", icon: <Coffee size={16} /> },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Decorative Blur */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
      
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="About Me" 
          subtitle="A blend of data analytical precision and modern web development passion."
        />

        <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="relative group">
              <div className="absolute inset-0 bg-primary/10 rounded-[50px] rotate-3 group-hover:rotate-0 transition-transform duration-500" />
              <img 
                src="/assets/profile.png" 
                alt="Nagaraj C" 
                className="relative z-10 w-full rounded-[50px] shadow-2xl border-8 border-white group-hover:scale-[0.98] transition-transform duration-500"
              />
              <div className="absolute -bottom-6 -right-6 z-20 bg-secondary text-white p-6 rounded-[32px] shadow-xl">
                <p className="text-sm font-black uppercase tracking-widest">Based in</p>
                <p className="text-lg font-bold">Madurai, TN</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-secondary mb-6 leading-tight">
              Entry-level Full Stack (MERN) Developer with <span className="text-primary italic">6+ years background in Inventory and Data Handling.</span>
            </h3>
            
            <p className="text-lg text-dark/70 leading-relaxed mb-8 font-medium">
              I am a quick learner who can adapt and work effectively in any convenient time frame. I speak in a friendly and polite manner, maintaining respect for all colleagues regardless of seniority. I enjoy developing creative solutions and workflows to simplify tasks for myself and my team.
            </p>

            <div className="grid grid-cols-2 gap-4 mb-10">
              {qualities.map((item, i) => (
                <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-2xl border border-gray-50">
                  <div className="text-primary">{item.icon}</div>
                  <span className="text-sm font-bold text-secondary/80">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="grid grid-cols-3 gap-6">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center p-6 bg-background rounded-3xl border border-gray-50 hover:border-primary/20 hover:bg-white hover:shadow-xl transition-all group">
                  <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-sm group-hover:scale-110 transition-transform">
                    <div className="text-primary">{stat.icon}</div>
                  </div>
                  <p className="text-2xl font-black text-secondary mb-1">{stat.value}</p>
                  <p className="text-xs text-dark/40 uppercase font-black tracking-widest">{stat.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
