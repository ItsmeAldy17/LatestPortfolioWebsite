import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, Calendar, MapPin, Award, ExternalLink, Image as ImageIcon, X, Book, FileText, Globe, Link, Eye } from 'lucide-react';
import { Button } from './ui/button';
import organizationsData from '../data/organizations.json';

const Organizations = ({ setIsAnyModalOpen }) => {
  const [selectedOrganization, setSelectedOrganization] = useState(null);

  const openModal = (org) => {
    setSelectedOrganization(org);
    document.body.style.overflow = 'hidden';
    if (setIsAnyModalOpen) setIsAnyModalOpen(true);
  };

  const closeModal = () => {
    setSelectedOrganization(null);
    document.body.style.overflow = 'unset';
    if (setIsAnyModalOpen) setIsAnyModalOpen(false);
  };

  return (
    <section
      id="organizations"
      className="relative py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-11">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Organizations & Community
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Contributing to the community through leadership, mentorship, and technical expertise
          </p>
        </motion.div>

        {/* Organizations Timeline View (mode default, tanpa toggle) */}
        <div className="relative">
          {/* Timeline line - Posisi di tengah untuk mobile, di kiri untuk desktop */}
          <div className="absolute left-4 md:left-8 md:translate-x-0 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500"></div>

          <div className="space-y-12">
            {organizationsData.map((org, index) => (
              <motion.div
                key={org.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className={`relative pl-12 md:pl-20 pb-12 last:pb-0 text-left`}
              >
                {/* Timeline dot - Posisi di tengah untuk mobile, di kiri untuk desktop */}
                <div className="absolute left-2.5 md:left-6 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg"></div>

                {/* Organization Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Organization Info */}
                    <div className="lg:col-span-2">
                      <div className="flex items-start gap-4 mb-4">
                        {/* Logo Organisasi (emoji atau img) */}
                        <div className="text-4xl p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex-shrink-0">
                          {org.logo.includes('/') ? <img src={org.logo} alt={org.name} className="w-full h-full object-contain" /> : org.logo}
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-xl font-bold text-white mb-1">{org.name}</h3>
                          <p className="text-emerald-400 font-semibold mb-2">{org.role}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {org.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {org.location}
                            </div>
                          </div>
                        </div>
                      </div>

                      <p className="text-gray-300 mb-4 leading-relaxed text-left">{org.description}</p>

                      {/* Tombol View Details - Disesuaikan agar selalu rata kiri */}
                      <Button
                        onClick={(e) => { e.stopPropagation(); openModal(org); }}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors inline-flex items-center justify-center text-left"
                      >
                        <Eye size={16} className="mr-2" /> View Details
                      </Button>
                    </div>

                    {/* Placeholder untuk Documentation/Achievements singkat jika ada di tampilan utama */}
                    {/* Bagian ini dikosongkan karena akan dipindah ke modal */}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Modal for detailed view */}
        {selectedOrganization && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
              onClick={closeModal} // <<< onClick untuk menutup modal saat klik overlay
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-800 rounded-xl border border-gray-700 shadow-2xl"
                onClick={(e) => e.stopPropagation()} // Mencegah klik di dalam modal menutupnya
              >
                {/* Modal content */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className={`text-4xl p-3 rounded-xl bg-gradient-to-br ${selectedOrganization.color || 'from-gray-500 to-gray-600'} bg-opacity-20`}>
                        {selectedOrganization.logo.includes('/') ? <img src={selectedOrganization.logo} alt={selectedOrganization.name} className="w-full h-full object-contain" /> : selectedOrganization.logo}
                      </div>
                      <div>
                        <h2 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                          {selectedOrganization.name}
                        </h2>
                        <p className="text-emerald-400 font-medium">{selectedOrganization.role}</p>
                      </div>
                    </div>
                    <button
                      onClick={closeModal} // <<< onClick untuk menutup modal pada tombol X
                      className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Overview */}
                    <div>
                      <h4 className="text-xl font-semibold text-white mb-2">Overview</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedOrganization.description}</p>
                    </div>

                    {/* Company Info */}
                    {selectedOrganization.companyInfo && (
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-3">Company Info</h4>
                        <div className="bg-gray-700/50 rounded-lg p-4 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Industry:</span>
                            <span className="text-gray-300">{selectedOrganization.companyInfo.industry}</span>
                          </div>
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Size:</span>
                            <span className="text-gray-300">{selectedOrganization.companyInfo.size}</span>
                          </div>
                          {selectedOrganization.companyInfo.website && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Website:</span>
                              <a href={selectedOrganization.companyInfo.website} target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 flex items-center gap-1">
                                Visit Site <Link size={14} />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Achievements (moved to modal) */}
                    {selectedOrganization.achievements && selectedOrganization.achievements.length > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <Award size={18} /> Key Achievements
                        </h4>
                        <ul className="space-y-2">
                          {selectedOrganization.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-300 text-sm">
                              <span className="text-emerald-400 mt-1">•</span>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Photos (from organizations.json) */}
                    {selectedOrganization.photos && selectedOrganization.photos.length > 0 && (
                      <div>
                        <h4 className="text-xl font-semibold text-white mb-4 flex items-center gap-2">
                          <ImageIcon size={18} /> Gallery
                        </h4>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                          {selectedOrganization.photos.map((photo, idx) => (
                            <img key={idx} src={photo} alt={`${selectedOrganization.name} photo ${idx + 1}`} className="rounded-lg object-cover w-full h-28" />
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Animated background particles (untuk halaman ini) */}
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
      </div>
    </section>
  );
};

export default Organizations;