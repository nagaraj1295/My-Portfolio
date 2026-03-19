import React from 'react';
import { motion } from 'framer-motion';
import SectionHeader from './SectionHeader';
import { Mail, Phone, Github, Linkedin, Instagram, Facebook, Youtube, Send, MapPin } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: <Mail className="text-primary" size={24} />,
      label: 'Email',
      value: 'nagaraj1295@outlook.com',
      href: 'mailto:nagaraj1295@outlook.com'
    },
    {
      icon: <Phone className="text-primary" size={24} />,
      label: 'Phone',
      value: '+91 843 893 5218',
      href: 'tel:+918438935218'
    },
    {
      icon: <MapPin className="text-primary" size={24} />,
      label: 'Address',
      value: '3/192, Selvavinayagar street, Muduvarpatti, Madurai - 625503',
      href: 'https://maps.google.com/?q=3/192,+Selvavinayagar+street,+Muduvarpatti,+Madurai+-+625503'
    }
  ];

  const socialLinks = [
    { icon: <Linkedin size={24} />, name: 'LinkedIn', href: 'https://www.linkedin.com/in/nagarc', color: 'hover:text-[#0077B5]' },
    { icon: <Github size={24} />, name: 'GitHub', href: 'https://github.com/nagaraj1295', color: 'hover:text-[#333]' },
    { icon: <Instagram size={24} />, name: 'Instagram', href: 'https://www.instagram.com/naga_creations/', color: 'hover:text-[#E4405F]' },
    { icon: <Facebook size={24} />, name: 'Facebook', href: 'https://www.facebook.com/rjnaga2', color: 'hover:text-[#1877F2]' },
    { icon: <Youtube size={24} />, name: 'YouTube', href: 'https://www.youtube.com/@naga_creationz', color: 'hover:text-[#FF0000]' }
  ];

  const [status, setStatus] = React.useState(''); // '', 'sending', 'success', 'error'

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    
    const formData = new FormData(e.target);
    formData.append("access_key", "YOUR_ACCESS_KEY_HERE"); // Placeholder for user to fill

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setStatus('success');
        e.target.reset();
        setTimeout(() => setStatus(''), 5000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white relative overflow-hidden">
      <div className="container mx-auto px-6">
        <SectionHeader 
          title="Let's Start a Conversation" 
          subtitle="I'm ready to bring my data-analytical background and MERN stack skills to your team."
        />

        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-black text-secondary mb-10">Contact Information</h3>
            <div className="space-y-6 mb-12">
              {contactInfo.map((info) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  target={info.label === 'Address' ? '_blank' : '_self'}
                  rel={info.label === 'Address' ? 'noopener noreferrer' : ''}
                  whileHover={{ x: 10 }}
                  className="flex items-center gap-6 p-8 bg-background/50 rounded-[32px] border border-gray-50 hover:border-primary/20 hover:bg-white hover:shadow-2xl transition-all group"
                >
                  <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform shrink-0">
                    {info.icon}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-xs text-dark/30 uppercase font-black tracking-widest mb-1">{info.label}</p>
                    <p className="text-lg font-bold text-secondary break-words">{info.value}</p>
                  </div>
                </motion.a>
              ))}
            </div>

            <h3 className="text-xl font-bold text-secondary mb-6">Follow My Journey</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className={`p-4 bg-background rounded-2xl text-dark/40 ${social.color} hover:bg-white hover:shadow-xl transition-all`}
                  title={social.name}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-secondary p-10 md:p-14 rounded-[50px] shadow-2xl relative overflow-hidden"
          >
            {/* Form Background Decoration */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl opacity-50" />
            
            <h3 className="text-2xl font-bold text-white mb-8 relative z-10">Send a Direct Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
              <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Name</label>
                  <input name="name" type="text" required placeholder="John Doe" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:bg-white/20 outline-none transition-all" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-white/60 ml-1">Email</label>
                  <input name="email" type="email" required placeholder="john@example.com" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:bg-white/20 outline-none transition-all" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Subject</label>
                <input name="subject" type="text" required placeholder="Project Inquiry" className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:bg-white/20 outline-none transition-all" />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-white/60 ml-1">Message</label>
                <textarea name="message" rows="4" required placeholder="Tell me about your project..." className="w-full px-6 py-4 rounded-2xl bg-white/10 border border-white/10 text-white placeholder:text-white/30 focus:border-primary focus:bg-white/20 outline-none transition-all resize-none"></textarea>
              </div>
              
              <motion.button
                type="submit"
                disabled={status === 'sending'}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-5 rounded-2xl font-black flex items-center justify-center gap-3 shadow-[0_20px_40px_-10px_rgba(37,99,235,0.4)] transition-all uppercase tracking-widest text-sm ${
                  status === 'sending' ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary text-white hover:bg-white hover:text-primary'
                }`}
              >
                {status === 'sending' ? 'Launching...' : status === 'success' ? 'Sent Successfully!' : 'Launch Message'}
                <Send size={18} />
              </motion.button>

              {status === 'success' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-green-400 text-center font-bold mt-4">
                  Thanks for reaching out! I'll get back to you soon.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="text-red-400 text-center font-bold mt-4">
                  Something went wrong. Please try again later.
                </motion.p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
