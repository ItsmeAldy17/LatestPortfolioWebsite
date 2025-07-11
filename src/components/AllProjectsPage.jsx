import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Eye, ArrowLeft, Filter } from 'lucide-react';
import { Button } from './ui/button';
import projectsData from '../data/project_details.json';

const AllProjectsPage = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All');
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);

  // Dynamically get all unique categories from projectsData
  const allCategories = ['All', ...new Set(projectsData.map(project => project.category))];

  const filteredProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

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
    for (const key in techIconPaths) {
      if (techName.includes(key)) {
        return techIconPaths[key];
      }
    }
    return techIconPaths['Other'];
  };

  return (
    <section
      id="all-projects-page"
      className="relative py-12 px-4 bg-gradient-to-b from-gray-800 to-gray-900 min-h-screen overflow-hidden"
    >
      <div className="max-w-7xl mx-auto relative z-10">
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
            Back to Featured Projects
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
            All Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            Explore a comprehensive list of all my projects, filtered by category.
          </p>

          {/* Filter Buttons Section */}
          <div className="flex justify-center mb-8">
            {/* Filter Button untuk Desktop/Tablet (Individual Buttons) */}
            <div className="hidden sm:flex flex-wrap justify-center gap-2">
              {allCategories.map((category) => (
                <Button
                  key={category}
                  onClick={() => setActiveFilter(category)}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  className={`
                    ${activeFilter === category
                      ? 'bg-emerald-500 text-white border-emerald-500 shadow-md'
                      : 'border-gray-600 text-gray-300 bg-gray-800/30 hover:bg-gradient-to-r hover:from-emerald-400 hover:via-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20'
                    } transition-all duration-300 transform hover:scale-105 px-4 py-2 rounded-full text-sm font-medium`}
                >
                  {category}
                </Button>
              ))}
            </div>

            {/* Filter Button untuk Mobile (Dropdown Trigger) */}
            <div className="relative sm:hidden inline-flex justify-center w-full">
              <Button
                onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                variant="outline"
                size="lg"
                className="px-6 py-3 border-2 border-emerald-500 text-emerald-400 bg-gray-800/30 hover:bg-gradient-to-r hover:from-emerald-400 hover:via-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-500/20 transition-all duration-300 transform hover:scale-105 flex items-center gap-2 group relative"
              >
                <Filter size={20} className="flex-shrink-0" />
                {activeFilter}
                <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2.5 py-1.5 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap z-20 border border-gray-700 shadow-md pointer-events-none">
                  Filter by Category
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>
              </Button>

              <AnimatePresence>
                {showCategoryDropdown && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full mt-2 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg py-1 z-20"
                  >
                    {allCategories.map((category) => (
                      <button
                        key={category}
                        onClick={() => {
                          setActiveFilter(category);
                          setShowCategoryDropdown(false);
                        }}
                        className={`
                          block w-full text-left px-4 py-2 text-sm transition-all duration-200
                          ${activeFilter === category
                            ? 'bg-emerald-600 text-white'
                            : 'text-gray-300 bg-gray-800/30 hover:bg-gradient-to-r hover:from-emerald-400 hover:via-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text'
                          }`}
                      >
                        {category}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => {
              // Flatten all technologies from technologies_grouped
              const allTechnologies = project.technologies_grouped
                ? Object.values(project.technologies_grouped).flat()
                : [];
              const displayedTechnologies = allTechnologies.slice(0, 4);
              const remainingTechnologiesCount = allTechnologies.length - displayedTechnologies.length;

              return (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -30 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 h-full`}>
                    {/* Project Image (using card_image_src) */}
                    <div className={`w-full h-48 bg-gradient-to-br from-emerald-500/20 to-blue-500/20 relative overflow-hidden`}>
                      {project.card_image_src && (
                        <img src={project.card_image_src} alt={project.name} className="w-full h-full object-cover absolute inset-0" />
                      )}
                      <div className="absolute top-4 right-4 flex space-x-2">
                        {project.github_link && project.github_link !== '#' && (
                          <a
                            href={project.github_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white transition-colors"
                          >
                            <Github size={16} />
                          </a>
                        )}
                        {project.demo_link && project.demo_link !== '#' && (
                          <a
                            href={project.demo_link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 bg-gray-900/50 backdrop-blur-sm rounded-full text-gray-400 hover:text-white transition-colors"
                          >
                            <ExternalLink size={16} />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className={`p-6 flex flex-col justify-between`}>
                      <div>
                        <div className="flex justify-between items-start mb-3">
                          <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                            {project.category}
                          </span>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors text-white">
                          {project.name}
                        </h3>

                        <p className="text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3">
                          {project.overview}
                        </p>

                        <div className="flex flex-wrap gap-2 mb-4">
                          {displayedTechnologies.map((tech) => (
                            <div
                              key={tech}
                              className="group/tech relative px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600 hover:border-emerald-500/50 transition-colors cursor-pointer"
                            >
                              <span className="flex items-center gap-1">
                                <img src={getTechIcon(tech)} alt={tech} className="w-4 h-4 object-contain" />
                                {tech}
                              </span>
                              <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white text-xs px-2 py-1 rounded opacity-0 group-hover/tech:opacity-100 transition-opacity whitespace-nowrap z-10">
                                {tech}
                              </div>
                            </div>
                          ))}
                          {remainingTechnologiesCount > 0 && (
                            <span className="px-3 py-1 bg-gray-700/50 text-gray-300 text-xs rounded-lg border border-gray-600">
                              +{remainingTechnologiesCount} More
                            </span>
                          )}
                        </div>
                      </div>

                      {/* View Detail Button */}
                      <Button
                        onClick={() => navigate(`/project/${project.id}`)}
                        className="w-full bg-gradient-to-r from-emerald-500 to-blue-600 text-white hover:from-emerald-600 hover:to-blue-700 transition-all duration-300 group/btn flex items-center justify-center"
                        size="sm"
                      >
                        <Eye size={16} className="mr-2 group-hover/btn:scale-110 transition-transform" />
                        View Detail
                      </Button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="col-span-full text-center text-gray-400 mt-8"
            >
              No projects found for the selected filter.
            </motion.div>
          )}
        </div>
      </div>

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

export default AllProjectsPage;