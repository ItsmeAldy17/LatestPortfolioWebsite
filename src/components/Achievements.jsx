import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Award, X, Trophy, FileText, Calendar, ExternalLink, Download } from 'lucide-react';
import { Button } from './ui/button';
import achievementsData from '../data/achievements.json';
import certificationsData from '../data/certifications.json';
import { useNavigate } from 'react-router-dom'; // Pastikan useNavigate diimpor

const Achievements = () => {
  const [selectedItem, setSelectedItem] = useState(null);
  const [activeTab, setActiveTab] = useState('achievements'); // 'achievements' or 'certifications'

  // Perbaikan: Inisialisasi useNavigate hook di sini
  const navigate = useNavigate(); // <<< TAMBAHKAN BARIS INI

  // Batasi data yang ditampilkan untuk showcase (3 item pertama)
  const displayedAchievements = achievementsData.slice(0, 3);
  const displayedCertifications = certificationsData.slice(0, 3);

  const currentData = activeTab === 'achievements' ? displayedAchievements : displayedCertifications;

  const openModal = (item) => {
    setSelectedItem(item);
  };

  const closeModal = () => {
    setSelectedItem(null);
  };

  const getIcon = (type) => {
    return type === 'achievement' ? Trophy : FileText;
  };

  const getStatusColor = (item) => {
    if (item.type === 'certification') {
      const isExpired = item.expiryDate !== 'Lifetime' && new Date(item.expiryDate) < new Date();
      return isExpired
        ? 'bg-red-500/20 text-red-400 border-red-500/30'
        : 'bg-green-500/20 text-green-400 border-green-500/30';
    }
    return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
  };

  return (
    <section
      id="achievements"
      className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
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
            Achievements & Certifications
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Recognition and certifications that validate my expertise in machine learning and AI
          </p>

          {/* Toggle Buttons */}
          <div className="flex justify-center mb-8">
            <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-1 flex">
              <Button
                onClick={() => setActiveTab('achievements')}
                variant={activeTab === 'achievements' ? 'default' : 'ghost'}
                className={`flex items-center gap-2 ${activeTab === 'achievements'
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                <Trophy size={18} />
                Achievements
              </Button>
              <Button
                onClick={() => setActiveTab('certifications')}
                variant={activeTab === 'certifications' ? 'default' : 'ghost'}
                className={`flex items-center gap-2 ${activeTab === 'certifications'
                    ? 'bg-emerald-500 text-white'
                    : 'text-gray-300 hover:text-white'
                  }`}
              >
                <FileText size={18} />
                Certifications
              </Button>
            </div>
          </div>
        </motion.div>

        {/* Content Grid */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {currentData.map((item, index) => {
            const IconComponent = getIcon(item.type);
            return (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
                onClick={() => openModal(item)}
              >
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 h-full hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                  {/* Icon */}
                  <div className="flex items-center justify-center w-16 h-16 bg-emerald-500/20 rounded-full mb-4 mx-auto">
                    <IconComponent className="w-8 h-8 text-emerald-400" />
                  </div>

                  {/* Status/Year Badge */}
                  <div className="text-center mb-4">
                    <span className={`px-3 py-1 text-xs font-medium rounded-full border ${getStatusColor(item)}`}>
                      {item.year}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-lg font-bold mb-2 text-center group-hover:text-emerald-400 transition-colors">
                    {item.name}
                  </h3>

                  {/* Organization */}
                  <p className="text-emerald-400 text-sm text-center mb-3 font-medium">
                    {item.organization}
                  </p>

                  {/* Description */}
                  <p className="text-gray-300 text-sm leading-relaxed text-center mb-4 line-clamp-3">
                    {item.description}
                  </p>

                  {/* Additional Info for Certifications */}
                  {item.type === 'certification' && item.expiryDate && (
                    <div className="text-center mb-4">
                      <span className="text-xs text-gray-400">
                        Expires: {item.expiryDate}
                      </span>
                    </div>
                  )}

                  {/* Click indicator */}
                  <div className="text-center">
                    <span className="text-xs text-gray-500 group-hover:text-emerald-400 transition-colors">
                      Click to view details
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* View Full Achievements / Certifications Buttons (dikondisikan) */}
        <div className="flex justify-center gap-4 mt-12">
          {activeTab === 'achievements' && displayedAchievements.length > 0 && ( // Hanya tampil jika tab achievements aktif
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => navigate('/all-achievements')}
                className="px-8 py-3 bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Full Achievements
              </Button>
            </motion.div>
          )}

          {activeTab === 'certifications' && displayedCertifications.length > 0 && ( // Hanya tampil jika tab certifications aktif
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button
                onClick={() => navigate('/all-certifications')}
                className="px-8 py-3 bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                View Full Certifications
              </Button>
            </motion.div>
          )}
        </div>

        {/* Modal - tetap ada dan tidak diubah */}
        {selectedItem && (
          <AnimatePresence>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={closeModal}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-800 rounded-xl border border-gray-700"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal content with full item details */}
                <div className="p-8">
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      {React.createElement(getIcon(selectedItem.type), {
                        className: "w-8 h-8 text-emerald-400"
                      })}
                      <div>
                        <h3 className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-blue-500 bg-clip-text text-transparent">
                          {selectedItem.name}
                        </h3>
                        <p className="text-emerald-400 font-medium">{selectedItem.organization}</p>
                      </div>
                    </div>
                    <button
                      onClick={closeModal}
                      className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-lg transition-colors"
                    >
                      <X size={24} />
                    </button>
                  </div>

                  <div className="space-y-6">
                    {/* Basic Info */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="flex items-center gap-2">
                        <Calendar size={16} className="text-gray-400" />
                        <span className="text-gray-300">Date: {selectedItem.date}</span>
                      </div>
                      {selectedItem.expiryDate && (
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          <span className="text-gray-300">Expires: {selectedItem.expiryDate}</span>
                        </div>
                      )}
                    </div>

                    {/* Description */}
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-2">Description</h4>
                      <p className="text-gray-300 leading-relaxed">{selectedItem.details}</p>
                    </div>

                    {/* Skills (for certifications) */}
                    {selectedItem.skills && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Skills Covered</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedItem.skills.map((skill, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-sm rounded-full border border-emerald-500/30"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Impact (for achievements) */}
                    {selectedItem.impact && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-2">Impact</h4>
                        <p className="text-gray-300">{selectedItem.impact}</p>
                      </div>
                    )}

                    {/* Credential Info (for certifications) */}
                    {selectedItem.credentialId && (
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-3">Credential Information</h4>
                        <div className="bg-gray-700/50 rounded-lg p-4 space-y-2">
                          <div className="flex justify-between items-center">
                            <span className="text-gray-400">Credential ID:</span>
                            <span className="text-gray-300 font-mono">{selectedItem.credentialId}</span>
                          </div>
                          {selectedItem.verificationUrl && (
                            <div className="flex justify-between items-center">
                              <span className="text-gray-400">Verification:</span>
                              <a
                                href={selectedItem.verificationUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
                              >
                                Verify <ExternalLink size={14} />
                              </a>
                            </div>
                          )}
                        </div>
                      </div>
                    )}

                    {/* Certificate/Achievement Image Placeholder */}
                    <div className="bg-gray-700/50 rounded-lg p-8 text-center flex flex-col items-center justify-center">
                      {selectedItem.image && selectedItem.image !== '#' ? (
                        <img src={selectedItem.image} alt={selectedItem.name} className="mx-auto max-w-full h-auto rounded-lg mb-4" />
                      ) : (
                        React.createElement(getIcon(selectedItem.type), {
                          className: "w-16 h-16 text-emerald-400 mx-auto mb-4"
                        })
                      )}
                    </div>
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

export default Achievements;