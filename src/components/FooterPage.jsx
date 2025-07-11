import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react'; // Only import icons actually used

const FooterPage = () => {
  // Define social links as a constant outside the component to prevent re-rendering
  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/ItsmeAldy17', icon: Github },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/aldyardiansyah17/', icon: Linkedin },
  ];

  const quickLinks = [
    { name: 'Home', url: '/' },
    { name: 'Tech Stack', url: '#tech-stack' },
    { name: 'Projects', url: '#projects' },
    { name: 'Experience', url: '#experience' },
    { name: 'Achievements', url: '#achievements' },
    { name: 'Organizations', url: '#organizations' },
    { name: 'Gallery', url: '#gallery' },
  ];

  return (
    <footer className="py-12 px-4 border-t border-gray-800/50 bg-gray-900/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* About Section */}
          <div>
            <h3 className="text-xl font-bold text-white mb-4">ardnsyh</h3>
            <p className="text-gray-400 text-sm">
              Machine Learning Engineer and AI Enthusiast
            </p>
          </div>

          {/* Quick Links Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.url} className="hover:text-emerald-400 transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Section */}
          <div>
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-gray-800/50 rounded-lg hover:bg-gray-700/50 text-gray-400 hover:text-white transition-all duration-200"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent size={18} />
                  </motion.a>
                );
              })}
            </div>
            {/* Contact Info */}
            <div className="mt-4 space-y-2 text-gray-400 text-sm">
                <p className="flex items-center gap-2">
                    <Mail size={16} />
                    <a href="mailto:aldyardiansyah628@gmail.com" className="hover:text-emerald-400 transition-colors">aldyardiansyah628@gmail.com</a>
                </p>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-800/50 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} ardnsyh. Crafted with brains, dedication, more coffee, and less sleep. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterPage;