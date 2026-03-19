import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

const Education = () => {
  const educations = [
    {
      degree: 'B.Sc. Information Technology',
      school: 'Madurai Institute of Social Sciences College, Madurai',
      period: 'Completed',
      icon: <GraduationCap className="text-primary" />
    },
    {
      degree: 'HSC',
      school: 'Government Boys Higher Secondary School, Alanganallur',
      period: 'Completed',
      icon: <MapPin className="text-primary" />
    },
    {
      degree: 'SSLC',
      school: 'Government High School, Muduvarpatti',
      period: 'Completed',
      icon: <MapPin className="text-primary" />
    }
  ];

  return (
    <section id="education" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Education" 
          subtitle="My academic foundation in Information Technology and beyond."
        />

        <div className="max-w-4xl mx-auto space-y-6">
          {educations.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-6 p-8 bg-background rounded-3xl border border-gray-50 hover:shadow-lg transition-all group"
            >
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                {edu.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-secondary mb-1">{edu.degree}</h3>
                <p className="text-dark/60 font-medium">{edu.school}</p>
              </div>
              <div className="hidden md:block text-right">
                <span className="px-4 py-1.5 bg-primary/10 text-primary rounded-full text-xs font-bold uppercase tracking-wider">
                  {edu.period}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
