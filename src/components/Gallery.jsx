import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ZoomIn, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';
import galleryImages from '../data/gallery.json';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  // Auto-play carousel
  useEffect(() => {
    if (isAutoPlay) {
      const interval = setInterval(() => {
        setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlay, galleryImages.length]);

  const openLightbox = (image) => {
    setSelectedImage(image);
  };

  const closeLightbox = () => {
    setSelectedImage(null);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % galleryImages.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlay(!isAutoPlay);
  };

  const getCategoryColor = (category) => {
    const colors = {
      'Innovation': 'bg-blue-500/20 text-blue-400 border-blue-500/30',
      'Competition': 'bg-green-500/20 text-green-400 border-green-500/30',
      'Team': 'bg-purple-500/20 text-purple-400 border-purple-500/30',
      'Achievement': 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
      'Development': 'bg-emerald-500/20 text-emerald-400 border-emerald-500/30',
      'Mentoring': 'bg-pink-500/20 text-pink-400 border-pink-500/30',
      'Research': 'bg-indigo-500/20 text-indigo-400 border-indigo-500/30',
      'Community': 'bg-orange-500/20 text-orange-400 border-orange-500/30',
      'Product': 'bg-red-500/20 text-red-400 border-red-500/30',
      'Conference': 'bg-cyan-500/20 text-cyan-400 border-cyan-500/30',
      'Volunteer': 'bg-teal-500/20 text-teal-400 border-teal-500/30'
    };
    return colors[category] || 'bg-gray-500/20 text-gray-400 border-gray-500/30';
  };

  return (
    <section
      id="gallery"
      className="relative py-20 px-4 bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 overflow-hidden"
    >
      {/* Animated background particles (untuk halaman ini) - DIPINDAHKAN KE SINI */}
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
      {/* Konten utama Gallery berada di atas partikel (z-10) */}
      <div className="max-w-7xl mx-auto relative z-11">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A visual journey through my professional experiences, achievements, and community involvement
          </p>
        </motion.div>

        {/* Main Carousel */}
        <div className="relative mb-12">
          <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden bg-gray-800 border border-gray-700">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentSlide}
                initial={{ opacity: 0, x: 300 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -300 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                {/* Background Image */}
                <img
                  src={galleryImages[currentSlide].src}
                  alt={galleryImages[currentSlide].title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                {/* Overlay transparan di atas gambar untuk teks */}
                <div className="absolute inset-0 bg-gradient-to-t from-black flex items-end">
                  <div className="p-8 w-full">
                    <div className="max-w-2xl">
                      <div className="mb-4">
                        <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(galleryImages[currentSlide].category)}`}>
                          {galleryImages[currentSlide].category}
                        </span>
                        <span className="ml-3 text-white text-sm">{galleryImages[currentSlide].date}</span>
                      </div>
                      <h3 className="text-3xl font-bold text-white mb-4">
                        {galleryImages[currentSlide].title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {galleryImages[currentSlide].description}
                      </p>
                      {/* Tombol Zoom In */}
                      <button
                        onClick={() => openLightbox(galleryImages[currentSlide])}
                        className="mt-4 bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center"
                      >
                        <ZoomIn size={16} className="mr-2" /> Zoom In
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 hover:scale-110 z-10"
            >
              <ChevronRight size={24} />
            </button>

            {/* Auto-play Toggle */}
            <button
              onClick={toggleAutoPlay}
              className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition-all duration-200 z-10"
            >
              {isAutoPlay ? <Pause size={20} /> : <Play size={20} />}
            </button>

            {/* Slide Counter */}
            <div className="absolute top-4 left-4 bg-black/50 text-white px-3 py-1 rounded-full text-sm z-10">
              {currentSlide + 1} / {galleryImages.length}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentSlide
                    ? 'bg-emerald-500 scale-125'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Lightbox Modal - Disesuaikan untuk menampilkan gambar asli */}
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-hidden bg-gray-800 rounded-lg border border-gray-700 flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeLightbox}
                className="absolute top-4 right-4 z-10 text-white hover:text-gray-300 transition-colors bg-black/50 rounded-full p-2"
              >
                <X size={24} />
              </button>

              {/* Image Container */}
              <div className="relative flex-grow flex items-center justify-center bg-gray-900 overflow-hidden">
                <img src={selectedImage.src} alt={selectedImage.title} className="max-w-full max-h-full object-contain" />
              </div>

              {/* Image Info */}
              <div className="p-6 bg-gray-800 border-t border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getCategoryColor(selectedImage.category)}`}>
                    {selectedImage.category}
                  </span>
                  <span className="ml-3 text-gray-400 text-sm">{selectedImage.date}</span>
                </div>
                <h3 className="text-2xl font-bold text-white mb-3">
                  {selectedImage.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {selectedImage.description}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Gallery;