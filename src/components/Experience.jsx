import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Briefcase, Calendar, CheckCircle2, TrendingUp, Mail, Users, Calculator } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      role: 'Inventory Data Executive / Customer Support',
      company: 'TVS Supply Chain Solutions Pvt Ltd',
      period: '2018 - Present (5+ Years)',
      description: 'Leveraging data analytical skills to manage large-scale inventory operations while transitioning into Full Stack Development.',
      achievements: [
        'Generated MIS reports with high accuracy for top-tier management.',
        'Developed interactive Excel dashboards for internal and external performance tracking.',
        'Processed invoices for the "Circle Express" project using the DA system.',
        'Collaborated with Tech Services for engineer allocation and part debriefing.',
        'Maintained precise inventory records including stock counts and location tracking.',
        'Managed high-volume communication (Email/Systems) for inventory and sales coordination.'
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 bg-background overflow-hidden relative">
       {/* Background Decor */}
       <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2" />
       
      <div className="container mx-auto px-6 max-w-5xl relative z-10">
        <SectionHeader 
          title="Professional Journey" 
          subtitle="Over 5 years of excellence in supply chain data operations at TVS SCS."
        />

        <div className="relative">
          {/* Animated Timeline Path */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-primary/30 via-secondary/20 to-transparent rounded-full" />
          
          {experiences.map((exp, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, type: "spring" }}
              viewport={{ once: true }}
              className="relative mb-20 last:mb-0"
            >
              {/* Timeline Center Badge */}
              <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-2xl border-4 border-primary/20 flex items-center justify-center z-10 shadow-xl">
                <TrendingUp size={24} className="text-primary" />
              </div>

              <div className="md:grid md:grid-cols-2 gap-12 pt-2 ml-16 md:ml-0">
                <div className={`md:text-right ${i % 2 === 0 ? 'md:order-1' : 'md:order-2'}`}>
                  <div className="inline-block bg-primary/10 text-primary px-6 py-2 rounded-full text-sm font-bold mb-4 shadow-sm">
                    {exp.period}
                  </div>
                  <h3 className="text-3xl font-black text-secondary leading-tight mb-2">
                    {exp.role}
                  </h3>
                  <p className="text-xl font-bold text-primary mb-6">{exp.company}</p>
                </div>

                <div className={`${i % 2 === 0 ? 'md:order-2' : 'md:order-1'}`}>
                  <div className="bg-white p-10 rounded-[40px] border border-gray-50 shadow-sm hover:shadow-2xl transition-all h-full">
                    <p className="text-dark/70 mb-8 text-lg leading-relaxed font-medium">
                      {exp.description}
                    </p>
                    <div className="space-y-4">
                      {exp.achievements.map((item, idx) => (
                        <motion.div 
                          key={idx} 
                          initial={{ opacity: 0, x: 10 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          className="flex gap-4 items-start p-4 bg-background/30 rounded-2xl border border-gray-100 hover:border-primary/20 transition-colors"
                        >
                          <CheckCircle2 size={18} className="text-primary mt-1 shrink-0" />
                          <p className="text-dark/80 text-sm font-medium">{item}</p>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
