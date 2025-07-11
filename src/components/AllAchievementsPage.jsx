import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, Award, Trophy, ExternalLink, Download, X } from 'lucide-react';
import { Button } from './ui/button';
import achievementsData from '../data/achievements.json';

const AllAchievementsPage = () => {
    const navigate = useNavigate();
    const [selectedItem, setSelectedItem] = useState(null);

    const getIcon = (type) => {
        return type === 'achievement' ? Trophy : Award;
    };

    const getStatusColor = (item) => {
        return 'bg-blue-500/20 text-blue-400 border-blue-500/30';
    };

    const openModal = (item) => {
        setSelectedItem(item);
    };

    const closeModal = () => {
        setSelectedItem(null);
    };

    return (
        <section
            id="all-achievements-page"
            className="relative py-12 px-4 bg-gradient-to-b from-gray-900 to-gray-800 min-h-screen overflow-hidden"
        >
            <div className="max-w-7xl mx-auto relative z-10">
                {/* Back to Achievements Button */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="mb-8 text-center sm:text-left"
                >
                    <Button
                        onClick={() => navigate('/')}
                        variant="ghost"
                        className="text-gray-300 hover:bg-gradient-to-r hover:from-emerald-400 hover:via-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text border border-transparent hover:border-emerald-500 inline-flex items-center justify-center gap-2 transition-all duration-300 px-4 py-2 rounded-full"
                    >
                        <ArrowLeft size={16} className="flex-shrink-0 text-gray-300 hover:bg-gradient-to-r hover:from-emerald-400 hover:via-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all duration-300" />
                        Back to Achievements
                    </Button>
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                        All Achievements
                    </h2>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                        A comprehensive list of my professional achievements and recognition.
                    </p>
                </motion.div>

                {/* Achievements Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {achievementsData.map((item, index) => {
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
                                    <h3 className="text-lg text-white font-bold mb-2 text-center group-hover:text-emerald-400 transition-colors">
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

                                    {/* Additional Info (Date) */}
                                    {item.date && (
                                        <div className="text-center mb-4">
                                            <span className="text-xs text-gray-400">
                                                Date: {item.date}
                                            </span>
                                        </div>
                                    )}

                                    {/* Click Indicator */}
                                    <div className="text-center">
                                        <span className="text-xs text-gray-500 group-hover:text-emerald-400 transition-colors">
                                            Click to view details
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* No Achievements Message */}
                {achievementsData.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="col-span-full text-center text-gray-400 mt-8"
                    >
                        No achievements found.
                    </motion.div>
                )}

                {/* Modal */}
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

                {/* Animated background particles */}
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

export default AllAchievementsPage;