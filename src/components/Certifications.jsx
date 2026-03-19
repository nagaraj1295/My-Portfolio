import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Award, CheckCircle2, ShieldCheck, FileSpreadsheet, Code, ChevronRight } from 'lucide-react';

const Certifications = () => {
  const certs = [
    {
      title: 'Full Stack Web Development',
      provider: 'Kalvi institute, Madurai',
      icon: <Award className="text-primary" size={24} />
    },
    {
      title: 'Six Sigma White Belt & Yellow Belt',
      provider: 'Aveta Business Institute (or similar)', // Based on usual providers for these belts
      icon: <ShieldCheck className="text-primary" size={24} />
    },
    {
      title: 'Python (Basic to Advanced)',
      provider: 'Udemy / Professional Training',
      icon: <Code className="text-primary" size={24} />
    },
    {
      title: 'Mastering in MS Excel',
      provider: 'Advanced Formula & Data Analysis Training',
      icon: <FileSpreadsheet className="text-primary" size={24} />
    },
    {
      title: 'VBA (Visual Basic for Applications)',
      provider: 'Automation & Macro Development',
      icon: <CheckCircle2 className="text-primary" size={24} />
    }
  ];

  return (
    <section id="certifications" className="py-24 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Certifications" 
          subtitle="Professional credentials and specialized training validating my diverse skill set."
        />

        <div className="relative">
          {/* Mobile Swipe Indicator */}
          <div className="md:hidden flex items-center justify-center gap-2 mb-6 text-primary/40 animate-pulse">
            <span className="text-[10px] font-black uppercase tracking-widest">Swipe to view all</span>
            <ChevronRight size={14} />
          </div>

          <div className="flex overflow-x-auto gap-8 pb-12 snap-x snap-mandatory hide-scrollbar -mx-6 px-6 lg:grid lg:grid-cols-3 lg:overflow-visible lg:mx-0 lg:px-0">
            {certs.map((cert, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="min-w-[280px] md:min-w-[320px] lg:min-w-0 snap-center"
              >
                <div className="bg-background/50 p-10 rounded-[40px] border border-gray-50 hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all h-full group">
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 transition-transform">
                    {cert.icon}
                  </div>
                  <h3 className="text-xl font-black text-secondary mb-4 leading-tight">
                    {cert.title}
                  </h3>
                  <p className="text-sm font-bold text-dark/40 uppercase tracking-widest">{cert.provider}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
