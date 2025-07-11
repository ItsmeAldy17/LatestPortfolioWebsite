import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Terminal = ({ onComplete }) => {
  const [currentLineIndex, setCurrentLineIndex] = useState(0);
  const [currentChar, setCurrentChar] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isFadingOut, setIsFadingOut] = useState(false);

  const terminalSequence = [
    { text: 'ardnsyh@portfolio-system:~$ initiate_persona_scan --optimize', delay: 300, charSpeed: 30, color: 'emerald', prompt: true },
    { text: 'System Check: All contents portofolio. ✅', delay: 250, charSpeed: 10, color: 'green' },
    { text: 'Data Stream: Secure connection established. ✅', delay: 250, charSpeed: 10, color: 'green' },
    { text: '', delay: 100 },

    { text: 'Scanning Personal Data Contents...', delay: 300, charSpeed: 20, color: 'blue' },
    { text: '  > Analyzing Tech Stack... ✅', delay: 150, charSpeed: 10, color: 'gray' },
    { text: '  > Processing Projects... ✅', delay: 150, charSpeed: 10, color: 'gray' },
    { text: '  > Indexing Experience... ✅', delay: 150, charSpeed: 10, color: 'gray' },
    { text: '  > Cross-referencing Certs & Awards... ✅', delay: 150, charSpeed: 10, color: 'gray' },
    { text: 'Data contents fully indexed. [100%] ✅', delay: 250, charSpeed: 10, color: 'green', bold: true },
    { text: '', delay: 100 },

    { text: 'ardnsyh@portfolio-system:~$ launch_portfolio --mode immersive', delay: 350, charSpeed: 30, color: 'emerald', prompt: true },
    { text: 'Welcome to my website portfolio. 🚀', delay: 700, charSpeed: 40, color: 'purple', bold: true },
  ];

  useEffect(() => {
    if (currentLineIndex < terminalSequence.length) {
      const lineData = terminalSequence[currentLineIndex];
      const lineText = lineData.text;
      const charSpeed = lineData.charSpeed || 5;

      if (currentChar < lineText.length) {
        const timer = setTimeout(() => {
          setCurrentChar(currentChar + 1);
        }, charSpeed);

        return () => clearTimeout(timer);
      } else {
        const timer = setTimeout(() => {
          setCurrentLineIndex(currentLineIndex + 1);
          setCurrentChar(0);
        }, lineData.delay || 400);

        return () => clearTimeout(timer);
      }
    } else if (!isComplete) {
      setIsComplete(true);
      setTimeout(() => {
        setIsFadingOut(true);
        setTimeout(() => {
          onComplete && onComplete();
        }, 1000);
      }, 500);
    }
  }, [currentLineIndex, currentChar, terminalSequence, isComplete, isFadingOut, onComplete]);

  const getLineClass = (item) => {
    let className = 'text-gray-300';
    if (item.prompt) className = 'text-emerald-400 font-semibold';
    if (item.color === 'green') className = 'text-green-400';
    if (item.color === 'blue') className = 'text-blue-400';
    if (item.color === 'yellow') className = 'text-yellow-400';
    if (item.color === 'purple') className = 'text-purple-400';
    if (item.color === 'emerald' && !item.prompt) className = 'text-emerald-400';
    if (item.color === 'green-bar') className = 'text-emerald-400';
    if (item.color === 'gray') className = 'text-gray-400';
    if (item.bold) className += ' font-bold';
    if (item.bold && (item.text.includes('compilation complete') || item.text.includes('Welcome to'))) className += ' text-lg';
    return className;
  };

  return (
    <AnimatePresence>
      {!isFadingOut && (
        <motion.div
          key="terminal-content-wrapper"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="relative w-full flex justify-center items-center mt-20 sm:px-4"
          style={{ minHeight: 'min(30vh, 360px)', maxHeight: 'min(50vh, 360px)' }}
        >
          <div
            className="bg-gray-900 border border-gray-600 rounded-lg p-3 sm:p-4 md:p-6 font-mono text-xs sm:text-sm shadow-2xl transform-gpu w-full max-w-sm sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-3xl relative overflow-hidden"
            style={{
              transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg)',
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 0 1px rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* Terminal Header */}
            <div className="flex items-center sm:mb-3 md:mb-4 sm:pb-3 border-b border-gray-700">
              <div className="flex space-x-1 sm:space-x-2">
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-red-500 rounded-full shadow-sm"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-yellow-500 rounded-full shadow-sm"></div>
                <div className="w-2 h-2 sm:w-3 sm:h-3 bg-green-500 rounded-full shadow-sm"></div>
              </div>
              <div className="ml-2 sm:ml-4 text-gray-400 text-xs font-medium truncate min-w-0 flex-1">
                Terminal - ardnsyh@portfolio-system
              </div>
              <div className="ml-2 text-gray-500 text-xs whitespace-nowrap hidden sm:block">
                🐍 Python 3.9.7
              </div>
            </div>

            {/* Terminal Content */}
            <div className="space-y-1 overflow-hidden" style={{ height: 'calc(100% - 40px)', maxWidth: '80%' }}>
              {terminalSequence.slice(0, currentLineIndex + 1).map((lineData, index) => (
                <div key={index} className={`${getLineClass(lineData)} break-words overflow-hidden`} style={{ wordBreak: 'break-word', overflowWrap: 'break-word', maxWidth: '100%' }}>
                  {index === currentLineIndex ? (
                    <span className="block">
                      {lineData.text.slice(0, currentChar)}
                      <span className="bg-emerald-400 w-1.5 h-3 sm:w-2 sm:h-4 inline-block ml-0.5 sm:ml-1 animate-pulse"></span>
                    </span>
                  ) : (
                    <span className="block">{lineData.text}</span>
                  )}
                </div>
              ))}
            </div>

            {/* Terminal glow effect */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-emerald-500/5 to-blue-500/5 pointer-events-none"></div>
          </div>

          {/* 3D Shadow */}
          <div
            className="absolute inset-0 bg-black/20 rounded-lg blur-xl -z-10"
            style={{
              transform: 'perspective(1000px) rotateY(-5deg) rotateX(2deg) translateZ(-50px) scale(1.05)',
            }}
          ></div>

          {/* Ambient glow */}
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-blue-500/10 rounded-lg blur-2xl -z-20 animate-pulse"></div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Terminal;