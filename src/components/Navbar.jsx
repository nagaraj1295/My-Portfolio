import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Instagram, Facebook, Youtube } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/nagarc' },
    { icon: <Github size={20} />, href: 'https://github.com/nagaraj1295' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/naga_creations/' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled ? 'bg-white/90 backdrop-blur-xl shadow-lg border-b border-gray-100 py-3' : 'bg-transparent py-6'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <motion.a 
          href="#home"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-black tracking-tighter text-secondary group"
        >
          NAGARAJ<span className="text-primary group-hover:text-secondary mb-1">.C</span>
        </motion.a>

        {/* Desktop Nav */}
        <div className="hidden lg:flex items-center space-x-8">
          {navLinks.map((link, i) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="text-dark/70 hover:text-primary font-bold text-sm uppercase tracking-widest transition-all relative group"
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full" />
            </motion.a>
          ))}
          
          <div className="flex items-center gap-4 ml-4 pl-8 border-l border-gray-200">
            {socialLinks.map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8 + (i * 0.1) }}
                className="text-dark/40 hover:text-primary transition-colors"
              >
                {social.icon}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="p-2 text-secondary bg-background rounded-xl">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="fixed inset-0 z-40 lg:hidden bg-white/95 backdrop-blur-2xl"
          >
            <div className="flex flex-col h-full p-10 pt-32 space-y-8 items-center">
              {navLinks.map((link, i) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-black text-secondary hover:text-primary transition-colors uppercase tracking-tight"
                >
                  {link.name}
                </motion.a>
              ))}
              <div className="flex gap-8 pt-10 border-t border-gray-100 w-full justify-center">
                {socialLinks.map((social, i) => (
                  <a key={i} href={social.href} target="_blank" rel="noopener noreferrer" className="text-secondary hover:text-primary transition-colors">
                    {social.icon}
                  </a>
                ))}
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-8 right-8 p-4 bg-background rounded-full text-secondary"
              >
                <X size={32} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
