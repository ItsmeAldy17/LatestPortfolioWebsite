import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { name: 'Home', id: 'hero' },
  { name: 'Tech Stack', id: 'tech-stack' },
  { name: 'Projects', id: 'projects' },
  { name: 'Experience', id: 'experience' },
  { name: 'Achievements', id: 'achievements' },
  { name: 'Organizations', id: 'organizations' },
  { name: 'Gallery', id: 'gallery' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleCVClick = () => {
    window.open('https://drive.google.com/drive/folders/19dP6sO9-IhtwrPiUoQQ72UjY4yodQOHY?usp=drive_link', '_blank');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3, ease: 'easeOut' } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.2, ease: 'easeIn' } },
  };

  const navItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-gray-900/95 backdrop-blur-md border-b border-gray-700/50 shadow-lg'
          : 'bg-gray-900/80 backdrop-blur-sm border-b border-gray-800/30'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <motion.div
            className="flex-shrink-0"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <h1
              className="text-xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent cursor-pointer"
              onClick={() => scrollToSection('hero')}
            >
              ardnsyh
            </h1>
          </motion.div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-4 md:space-x-3 lg:space-x-6">
            {navLinks.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`text-gray-300 hover:text-emerald-400 transition-colors duration-200 text-xs md:text-sm lg:text-base font-medium relative group ${
                  location.hash === `#${item.id}` ? 'text-emerald-400' : ''
                }`}
              >
                {item.name}
                <span
                  className={`absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 transition-all duration-200 group-hover:w-full ${
                    location.hash === `#${item.id}` ? 'w-full' : ''
                  }`}
                ></span>
              </button>
            ))}
          </div>

          {/* CV Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-4">
            <button
              onClick={handleCVClick}
              className="relative overflow-hidden bg-transparent border-2 border-emerald-500 text-emerald-400 py-1.5 px-3 md:py-2 md:px-4 rounded-lg hover:text-white transition-all duration-300 group text-xs md:text-sm font-medium"
            >
              <span className="relative z-10">See My CV</span>
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-500 to-blue-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </button>

            {/* Mobile menu button */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-label="Toggle mobile menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            className="md:hidden bg-gray-900/95 backdrop-blur-md px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-700/50"
            variants={mobileMenuVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navLinks.map((item, index) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.id)}
                className={`block w-full text-left py-2 px-3 rounded-md text-base font-medium transition-colors duration-200 ${
                  location.hash === `#${item.id}` ? 'bg-gray-800 text-emerald-400' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                }`}
                variants={navItemVariants}
                initial="hidden"
                animate="visible"
                transition={{ delay: index * 0.05 }}
              >
                {item.name}
              </motion.button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;