import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Terminal from './Terminal';
import { Github, Linkedin, Mail, FileText } from 'lucide-react';

const Hero = () => {
  const [showTerminal, setShowTerminal] = useState(true);
  const [showHeroContent, setShowHeroContent] = useState(false);

  const handleTerminalComplete = () => {
    setShowTerminal(false);
    setTimeout(() => {
      setShowHeroContent(true);
    }, 1000);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingIcons = [
    { icon: '🐍', name: 'Python', delay: 0 },
    { icon: '🧠', name: 'TensorFlow', delay: 0.2 },
    { icon: '📊', name: 'Data Science', delay: 0.4 },
    { icon: '🔬', name: 'Research', delay: 0.6 }
  ];

// const handleDownloadCV = () => {
//   // Ganti YOUR_CV_FILE_ID dengan ID file Google Drive Anda
//   const downloadUrl = 'https://drive.google.com/drive/folders/19dP6sO9-IhtwrPiUoQQ72UjY4yodQOHY?usp=drive_link';
//   // Membuat elemen <a> sementara untuk memicu unduhan
//   const link = document.createElement('a');
//   link.href = downloadUrl;
//   link.download = ''; // Nama file akan diambil dari Google Drive
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// };

  return (
    <section
      id="hero"
      // Gradien vertikal untuk Hero: dari gray-900 ke gray-800
      className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white min-h-screen flex items-center justify-center overflow-hidden"
    >

      {/* Kontainer utama yang membatasi lebar konten */}
      <div className="max-w-7xl mx-auto w-full relative z-10 mt-12 sm:px-6 lg:px-8 flex flex-col items-center">
        <AnimatePresence mode="wait">
          {/* Terminal Section: Tampil pertama */}
          {showTerminal && (
            <motion.div
              key="terminal-initial-display"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="w-full flex justify-center items-center"
            >
              <Terminal onComplete={handleTerminalComplete} />
            </motion.div>
          )}

          {/* Hero Content Section: Tampil setelah terminal hilang */}
          {showHeroContent && (
            <motion.div
              key="hero-main-content-display"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
              className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-24 my-4 w-full"
            >
              {/* Photo Section */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="relative order-1 lg:order-1 flex-shrink-0 lg:w-1/2 -mb-10 flex justify-center"
              >
                <div className="w-64 h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-emerald-500 shadow-2xl relative">
                  <img
                    src="/profile/Aldy.jpg"
                    alt="Aldy Ardiansyah Profile"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-emerald-500/10 to-blue-500/10"></div>
                </div>

                {/* Glowing ring effect */}
                <div className="absolute inset-0 rounded-full border-2 border-emerald-400/30 animate-pulse"></div>

                {/* Enhanced floating ML icons */}
                {floatingIcons.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{
                      opacity: 1,
                      scale: 1,
                      y: [-10, 10, -10],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{
                      opacity: { delay: item.delay, duration: 0.5 },
                      scale: { delay: item.delay, duration: 0.5 },
                      y: { duration: 3 + index, repeat: Infinity },
                      rotate: { duration: 4 + index, repeat: Infinity }
                    }}
                    className={`absolute w-16 h-16 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 rounded-xl backdrop-blur-sm flex items-center justify-center border border-emerald-400/30 shadow-lg hover:scale-110 transition-transform cursor-pointer group ${index === 0 ? 'top-8 right-8' :
                        index === 1 ? 'top-20 left-4' :
                          index === 2 ? 'bottom-20 right-4' :
                            'bottom-8 left-8'
                      }`}
                    whileHover={{ scale: 1.1 }}
                  >
                    <span className="text-2xl">{item.icon}</span>
                    {/* Tooltip */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      {item.name}
                    </div>
                  </motion.div>
                ))}

                {/* Additional decorative elements */}
                <motion.div
                  animate={{
                    scale: [1, 1.1, 1],
                    opacity: [0.3, 0.6, 0.3]
                  }}
                  transition={{ duration: 4, repeat: Infinity }}
                  className="absolute -inset-4 rounded-full bg-gradient-to-r from-emerald-500/10 to-blue-500/10 blur-xl"
                ></motion.div>
              </motion.div>

              {/* Introduction Text and Buttons */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="text-center lg:text-left order-2 lg:order-2 lg:w-1/2 mt-8 lg:mt-0 px-4"
              >
                <p className="text-xl md:text-2xl text-emerald-400 font-semibold mb-4">Hi there! I'm</p>
                <h1 className="text-2xl sm:text-3xl md:text-5xl font-extrabold mb-2 leading-tight gradient-text">
                  Aldy Ardiansyah.
                </h1>
                <motion.h2
                  className="text-lg md:text-xl lg:text-2xl font-bold mb-3 md:mb-5"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.2, duration: 0.8 }}
                >
                  <span className="bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                    Machine Learning Engineer
                  </span>
                </motion.h2>
                <motion.p
                  className="text-lg md:text-lg text-gray-300 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.4, duration: 0.8 }}
                >
                  Passionate about building impactful AI-powered solutions that solve real-world problems.
                  Specialized in computer vision, deep learning, and MLOps with a focus on scalable and efficient systems.
                </motion.p>

                {/* Call to action buttons */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.6, duration: 0.8 }}
                  className="flex flex-col sm:flex-row gap-4 pt-6 justify-center lg:justify-start"
                >
                  <button
                    onClick={() => scrollToSection('projects')}
                    className="px-8 py-3 bg-gradient-to-r from-emerald-500 to-blue-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 text-base"
                  >
                    View My Projects
                  </button>
                  {/* <button
                    onClick={handleDownloadCV}
                    className="px-8 py-3 border-2 border-emerald-500 text-emerald-400 font-semibold rounded-lg hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105 text-base">
                    Download CV
                  </button> */}
                </motion.div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Animated background particles (dikembalikan ke sini) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-emerald-400/30 rounded-full"
            animate={{
              x: [Math.random() * window.innerWidth, Math.random() * window.innerWidth],
              y: [Math.random() * window.innerHeight, Math.random() * window.innerHeight],
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse",
            }}
            style={{
              left: Math.random() * 100 + '%',
              top: Math.random() * 100 + '%',
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;