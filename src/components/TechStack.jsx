import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const TechStack = () => {
  const filteredAndEnhancedTechStack = [
    // Machine Learning & AI Core
    { name: 'Python', icon: '/icons/Python.png', category: 'Programming', color: 'from-yellow-400 to-blue-500' },
    { name: 'TensorFlow', icon: '/icons/Tensorflow.png', category: 'Deep Learning', color: 'from-orange-400 to-red-500' },
    { name: 'PyTorch', icon: '/icons/Pytorch.png', category: 'Deep Learning', color: 'from-red-400 to-orange-500' },
    { name: 'Scikit-learn', icon: '/icons/Scikit-learn.png', category: 'Machine Learning', color: 'from-blue-400 to-purple-500' },
    { name: 'Pandas', icon: '/icons/Pandas.png', category: 'Data Analysis', color: 'from-green-400 to-blue-500' },
    { name: 'NumPy', icon: '/icons/NumPy.png', category: 'Scientific Computing', color: 'from-blue-400 to-indigo-500' },
    { name: 'OpenCV', icon: '/icons/OpenCV.png', category: 'Computer Vision', color: 'from-green-400 to-teal-500' },

    // Development & Tools
    { name: 'Git', icon: '/icons/Git.png', category: 'Version Control', color: 'from-red-400 to-pink-500' },
    { name: 'Docker', icon: '/icons/Docker.png', category: 'DevOps', color: 'from-blue-400 to-cyan-500' },
    { name: 'Linux', icon: '/icons/Linux.png', category: 'Operating System', color: 'from-yellow-400 to-orange-500' },
    { name: 'Node.js', icon: '/icons/Node.js.png', category: 'Backend', color: 'from-green-400 to-emerald-500' },

    // Database
    { name: 'MySQL', icon: '/icons/MySQL.png', category: 'Relational Database', color: 'from-orange-400 to-yellow-500' },
    { name: 'SQLite', icon: '/icons/SQLite.png', category: 'Embedded Database', color: 'from-gray-400 to-slate-500' },
    { name: 'MongoDB', icon: '/icons/MongoDB.png', category: 'NoSQL Database', color: 'from-green-400 to-teal-500' },
    { name: 'Azure SQL DB', icon: '/icons/AzureSQLDatabase.png', category: 'Cloud Database', color: 'from-blue-400 to-indigo-500' },

    // Komunikasi Real-time
    { name: 'Socket.IO', icon: '/icons/Socket.io.png', category: 'Real-time Communication', color: 'from-gray-300 to-gray-500' },
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section
      id="tech-stack"
      // Gradien vertikal untuk Tech Stack: dari gray-800 ke gray-900 (melanjutkan dari Hero)
      className="relative py-20 px-8 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10 py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Tech Stack
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My core expertise in Computer Vision, Machine Learning, Deep Learning, and essential development tools.
          </p>
        </motion.div>

        {/* Tech Stack Compact List (Tag Cloud Style) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 px-4 py-8 bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl shadow-lg relative z-10"
        >
          {filteredAndEnhancedTechStack.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              viewport={{ once: true, amount: 0.5 }}
              whileHover={{ scale: 1.15 }}
              className="group relative cursor-pointer flex-shrink-0"
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 mx-auto flex items-center justify-center relative z-10 p-1">
                <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
              </div>

              {/* Tooltip */}
              <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 border border-gray-700 shadow-md">
                <div className="font-semibold text-sm mb-0.5">{tech.name}</div>
                <div className="text-gray-300 text-xs">{tech.category}</div>
                {/* Tooltip arrow */}
                <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
              </div>
            </motion.div>
          ))}
        </motion.div>
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

export default TechStack;