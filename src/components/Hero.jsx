import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Github, MousePointer2 } from 'lucide-react';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const titles = [
    "Full Stack Web Developer (MERN)",
    "Real-world Solution Builder",
    "Data Analysis Expert"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % titles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-background">
      {/* Dynamic Background */}
      <div className="absolute top-0 right-0 w-full h-full -z-10">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], rotate: [0, 5, 0] }}
          transition={{ duration: 20, repeat: Infinity }}
          className="absolute top-[10%] right-[5%] w-[400px] h-[400px] bg-primary/5 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], rotate: [0, -10, 0] }}
          transition={{ duration: 15, repeat: Infinity }}
          className="absolute bottom-[10%] left-[5%] w-[300px] h-[300px] bg-secondary/5 rounded-full blur-[80px]"
        />
      </div>

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="flex items-center gap-2 mb-6">
            <span className="px-4 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-semibold border border-primary/10">
              Open to Full Stack Developer roles
            </span>
            <motion.div
              animate={{ x: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 1.5 }}
            >
              <MousePointer2 size={16} className="text-primary/50" />
            </motion.div>
          </motion.div>
          
          <motion.h1 variants={itemVariants} className="text-5xl md:text-8xl font-bold leading-tight mb-6">
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Nagaraj C</span>
          </motion.h1>
          
          <div className="h-10 md:h-12 mb-8 overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.h2
                key={textIndex}
                initial={{ y: 40, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -40, opacity: 0 }}
                className="text-2xl md:text-3xl font-medium text-secondary"
              >
                {titles[textIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>
          
          <motion.p variants={itemVariants} className="text-lg text-dark/70 mb-10 max-w-xl leading-relaxed">
            Building scalable web applications with real-world impact. Transitioning from 6+ years in Data Analysis to the MERN stack.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 25px -5px rgb(37 99 235 / 0.2)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-primary text-white px-8 py-4 rounded-2xl flex items-center gap-2 font-bold transition-all"
            >
              View Projects <ArrowRight size={20} />
            </motion.a>
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.05)" }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-primary border-2 border-primary/20 px-8 py-4 rounded-2xl font-bold flex items-center gap-2 transition-all"
            >
              Contact Me
            </motion.a>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring", bounce: 0.4 }}
          className="relative"
        >
          <div className="relative z-10 w-full max-w-md mx-auto aspect-[4/5] rounded-[40px] overflow-hidden border-8 border-white shadow-[0_50px_100px_-20px_rgba(37,99,235,0.15)] group">
            <img 
              src="assets/profile.png" 
              alt="Nagaraj C" 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-secondary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
          </div>
          
          {/* Decorative Floaties */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-10 -right-10 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center -rotate-12 z-20"
          >
            <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary font-bold">M</div>
          </motion.div>
          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
            className="absolute -bottom-10 -left-10 w-24 h-24 bg-white rounded-3xl shadow-xl flex items-center justify-center rotate-12 z-20"
          >
            <div className="w-12 h-12 bg-secondary/10 rounded-xl flex items-center justify-center text-secondary font-bold">R</div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
