import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, Calendar, MapPin, Users, Trophy, ExternalLink, Building, Award, TrendingUp, Code, X } from 'lucide-react';
import experienceData from '../data/experience.json'; // Impor data pengalaman

const Experience = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  const openModal = (experience) => {
    setSelectedExperience(experience);
    document.body.style.overflow = 'hidden';
    setIsAnyModalOpen(true);
  };

  const closeModal = () => {
    setSelectedExperience(null);
    document.body.style.overflow = 'unset';
    setIsAnyModalOpen(false);
  };

  const getTechIcon = (techName) => {
    const techIconPaths = {
      'Python': '/icons/Python.png',
      'PyTorch': '/icons/Pytorch.png',
      'TensorFlow': '/icons/Tensorflow.png',
      'React': '/icons/React.png',
      'C++': '/icons/C Plus Plus.png',
      'COCO': '/icons/COCO.png',
      'Excel': '/icons/Excel.png',
      'SD Card': '/icons/SD Card.png',
      'Android Studio': '/icons/Android Studio.png',
      'Kotlin': '/icons/Kotlin.png',
      'Firebase': '/icons/Firebase.png',
      'Google Cloud': '/icons/Google Cloud.png',
      'Google Maps': '/icons/Gmaps.png',
      'Laravel': '/icons/Laravel.png',
      'Bootstrap': '/icons/Bootstrap.png',
      'Trello': '/icons/Trello.png',
      'Arduino': '/icons/Arduino.png',
      'Node.js': '/icons/Node.js.png',
      'Docker': '/icons/Docker.png',
      'Kubernetes': '/icons/Kubernetes.png',
      'AWS EC2': '/icons/AWS.png',
      'MongoDB': '/icons/MongoDB.png',
      'PostgreSQL': '/icons/PostgresSQL.png',
      'Redis': '/icons/Redis.png',
      'MySQL': '/icons/MySQL.png',
      'SQLite': '/icons/SQLite.png',
      'Azure SQL DB': '/icons/AzureSQLDatabase.png',
      'Socket.IO': '/icons/Socket.io.png',
      'Scikit-learn': '/icons/Scikit-learn.png',
      'Pandas': '/icons/Pandas.png',
      'NumPy': '/icons/NumPy.png',
      'OpenCV': '/icons/OpenCV.png',
      'Redux Toolkit': '/icons/Redux.png',
      'Google Fit API': '/icons/GoogleFit.png',
      'Apple HealthKit': '/icons/AppleHealth.png',
      'React Native': '/icons/React.png',
      'Expo': '/icons/Expo.png',
      'AWS IoT Core': '/icons/AWS.png',
      'Flask': '/icons/Flask.png',
      'InfluxDB': '/icons/InfluxDB.png',
      'MQTT': '/icons/Mqtt.png',
      'Raspberry Pi': '/icons/RaspberryPi.png',
      'Figma': '/icons/Figma.png',
      'PyQt5': '/icons/PyQt5.png',
      'YOLOv8': '/icons/YoloV8.png',
      'Re-Detr': '/icons/ReDetr.png',
      'Adobe XD': '/icons/AdobeXD.png',
      'InVision': '/icons/InVision.png',
      'WAVE': '/icons/WAVE.png',
      'Axe': '/icons/Axe.png',
      'Jest': '/icons/Jest.png',
      'Cypress': '/icons/Cypress.png',
      'Selenium': '/icons/Selenium.png',
      'Cucumber': '/icons/Cucumber.png',
      'Maven': '/icons/Apache Maven.png',
      'Next.js': '/icons/Next.js.png',
      'Tailwind CSS': '/icons/Tailwind CSS.png',
      'Puppeteer': '/icons/Puppeteer.png',
      'Jenkins': '/icons/Jenkins.png',
      'GitHub Actions': '/icons/GithubActions.png',
      'Express.js': '/icons/Express.png',
      'FastAPI': '/icons/FastAPI.png',
      'AWS ECS': '/icons/AWS.png',
      'Keras': '/icons/Keras.png',
      'NLTK': '/icons/NLTK.png',
      'AWS Lambda': '/icons/AWSLambda.png',
      'AWS SageMaker': '/icons/AWSSageMaker.png',
      'Other': '/icons/default.png',
    };
    return techIconPaths[techName] || techIconPaths['Other'];
  };

  return (
    <section
      id="experience" // Tambahkan ID untuk navigasi navbar
      // Gradien background melanjutkan dari Projects: dari gray-800 (akhir Projects) ke gray-900
      className="relative py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            My Experience
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Journey through my professional growth and key milestones.
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="relative">
          {/* Timeline line - Posisi disesuaikan agar selalu di kiri (dengan margin) */}
          <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-gradient-to-b from-emerald-500 to-blue-500 md:left-6"></div>

          <div className="space-y-12">
            {experienceData.map((exp, index) => (
              <motion.div
                key={exp.id}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="relative pl-12 md:pl-20 pb-12 last:pb-0" // Padding kiri disesuaikan
              >
                {/* Timeline dot - Posisi disesuaikan agar selalu di kiri (dengan margin) */}
                <div className="absolute left-2.5 top-0 w-4 h-4 bg-emerald-500 rounded-full border-4 border-gray-900 shadow-lg md:left-4.5"></div> {/* Adjusted for md breakpoint */}

                {/* Experience Card */}
                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10">
                  <div className="grid grid-cols-1 lg:grid-cols-4 gap-8"> {/* Grid layout untuk card */}
                    {/* Main Info (left column) */}
                    <div className="lg:col-span-4"> {/* Mengambil seluruh lebar di desktop */}
                      <div className="flex items-start gap-4 mb-6">
                        {/* Logo Perusahaan (emoji atau bisa diganti img) */}
                        <div className="text-4xl p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex-shrink-0">
                          {exp.logo}
                        </div>
                        <div className="flex-1 text-left">
                          <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 mb-3">
                            <h4 className="text-xl text-emerald-400 font-semibold">{exp.company}</h4>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium border ${exp.typeColor}`}>
                              {exp.type}
                            </span>
                          </div>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                            <div className="flex items-center gap-1">
                              <Calendar size={14} />
                              {exp.period} ({exp.duration})
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin size={14} />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Users size={14} />
                              Team of {exp.teamSize}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Deskripsi singkat di kartu utama */}
                      <p className="text-gray-300 mb-6 leading-relaxed text-left line-clamp-3">{exp.description}</p> {/* line-clamp-3 agar ringkas */}

                      {/* Technologies di kartu utama */}
                      <div className="mb-6 text-left">
                        <h5 className="text-lg font-semibold text-white mb-3">Technologies</h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.slice(0, 6).map((tech) => ( // Batasi tampilan tech di kartu utama
                            <span
                              key={tech}
                              className="flex items-center gap-1 px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600"
                            >
                              <img src={getTechIcon(tech)} alt={tech} className="w-4 h-4 object-contain" />
                              {tech}
                            </span>
                          ))}
                          {exp.technologies.length > 6 && (
                            <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-sm rounded-lg border border-gray-600">
                              +{exp.technologies.length - 6} more
                            </span>
                          )}
                        </div>
                      </div>

                      {/* Tombol View Full Details */}
                      <button
                        onClick={() => openModal(exp)}
                        className="bg-emerald-500 hover:bg-emerald-600 text-white px-4 py-2 rounded-lg transition-colors text-left inline-flex items-center justify-center"
                      >
                         <ExternalLink size={16} className="mr-2" /> View Full Details
                      </button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for detailed view - tetap ada dan tidak diubah */}
      {selectedExperience && (
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full max-h-[90vh] overflow-y-auto bg-gray-800 rounded-xl border border-gray-700"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal content with full experience details */}
              <div className="p-8">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedExperience.role}</h2>
                    <h3 className="text-xl text-emerald-400">{selectedExperience.company}</h3>
                  </div>
                  <button
                    onClick={closeModal}
                    className="text-gray-400 hover:text-white p-2 hover:bg-gray-700 rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                <div className="space-y-8">
                  {/* Detailed Description */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Role Overview</h4>
                    <p className="text-gray-300 leading-relaxed">{selectedExperience.detailedDescription}</p>
                  </div>

                  {/* All Projects */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Major Projects</h4>
                    <div className="space-y-4">
                      {selectedExperience.mainProjects.map((project, idx) => (
                        <div key={idx} className="bg-gray-700/30 rounded-lg p-6">
                          <h5 className="text-lg font-semibold text-emerald-400 mb-3">{project.name}</h5>
                          <p className="text-gray-300 mb-3">{project.description}</p>
                          <p className="text-gray-400 mb-4">{project.impact}</p>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech) => (
                              <span key={tech} className="px-2 py-1 bg-gray-600/50 text-gray-300 text-xs rounded">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* All Achievements */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">All Achievements</h4>
                    <ul className="space-y-2">
                      {selectedExperience.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-gray-300">
                          <Award size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* All Technologies */}
                  <div>
                    <h4 className="text-xl font-semibold mb-4">Technologies & Tools</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedExperience.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="flex items-center gap-1 px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600"
                        >
                          <img src={getTechIcon(tech)} alt={tech} className="w-4 h-4 object-contain" />
                          {tech}
                        </span>
                      ))}
                    </div>
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
    </section>
  );
};

export default Experience;