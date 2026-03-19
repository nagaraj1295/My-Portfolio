import React from 'react';
import { motion } from 'framer-motion';

const SectionHeader = ({ title, subtitle }) => {
  return (
    <div className="mb-12 text-center">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-3xl md:text-4xl font-bold text-secondary mb-4"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-dark/60 max-w-2xl mx-auto"
        >
          {subtitle}
        </motion.p>
      )}
      <motion.div 
        initial={{ width: 0 }}
        whileInView={{ width: "80px" }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
        className="h-1 bg-primary mx-auto mt-4 rounded-full"
      />
    </div>
  );
};

export default SectionHeader;
