import React from 'react';
import { Github, Linkedin, Instagram, Mail, Facebook, Youtube, Heart } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <Linkedin size={20} />, href: 'https://www.linkedin.com/in/nagarc', name: 'LinkedIn' },
    { icon: <Github size={20} />, href: 'https://github.com/nagaraj1295', name: 'GitHub' },
    { icon: <Instagram size={20} />, href: 'https://www.instagram.com/naga_creations/', name: 'Instagram' },
    { icon: <Facebook size={20} />, href: 'https://www.facebook.com/rjnaga2', name: 'Facebook' },
    { icon: <Youtube size={20} />, href: 'https://www.youtube.com/@naga_creationz', name: 'YouTube' }
  ];

  return (
    <footer className="py-20 bg-secondary text-white relative overflow-hidden">
      {/* Background Decor */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/20 rounded-full blur-[120px] -mb-48 -mr-48 opacity-50" />
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-4 gap-12 pb-16 border-b border-white/10">
          <div className="md:col-span-2">
            <a href="#home" className="text-3xl font-black tracking-tighter mb-6 inline-block">
              NAGARAJ<span className="text-primary">.C</span>
            </a>
            <p className="text-white/60 text-lg max-w-sm leading-relaxed mb-8">
              Analytical thinker, problem solver, and full-stack explorer. Bringing 6+ years of data precision to modern web development.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a 
                  key={social.name}
                  href={social.href} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="w-12 h-12 bg-white/5 rounded-2xl flex items-center justify-center hover:bg-primary hover:scale-110 transition-all shadow-xl"
                  title={social.name}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-8">Quick Links</h4>
            <ul className="space-y-4 font-bold text-white/50">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About</a></li>
              <li><a href="#projects" className="hover:text-white transition-colors">Projects</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-black uppercase tracking-widest text-primary mb-8">Get In Touch</h4>
            <ul className="space-y-4 font-bold text-white/50">
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-white/30" />
                <a href="mailto:nagaraj1295@outlook.com" className="hover:text-white transition-colors text-sm">nagaraj1295@outlook.com</a>
              </li>
              <li className="flex items-center gap-3">
                <div className="w-1.5 h-1.5 bg-primary rounded-full" />
                <span className="text-sm">Madurai, Tamil Nadu</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/20 font-black uppercase tracking-widest">
          <p>© {currentYear} Nagaraj C. All rights reserved.</p>
          <div className="flex items-center gap-2">
            Engineered with <Heart size={16} className="text-primary fill-primary" /> using React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
