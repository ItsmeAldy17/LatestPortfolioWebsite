import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Eye } from 'lucide-react';
import { Button } from './ui/button';
import projectsData from '../data/project_details.json';

const Projects = () => {
  const navigate = useNavigate();
  const [activeFilter, setActiveFilter] = useState('All'); // Not used here, kept for consistency
  const [showAllProjects, setShowAllProjects] = useState(false); // Not used here, navigate directly

  // Get all projects from project_details.json
  const allProjects = projectsData;
  const displayedProjects = allProjects.slice(0, 6); // Only first 6 projects for main page

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
      id="projects"
      className="relative py-20 px-4 bg-gradient-to-b from-gray-900 to-gray-800 overflow-hidden"
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
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-8">
            A showcase of my work in machine learning, IoT, and software development
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedProjects.map((project, index) => {
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
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className={`bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-emerald-500/10 h-full`}>
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

                  <div className={`p-6 flex flex-col justify-between`}>
                    <div>
                      <div className="flex justify-between items-start mb-3">
                        <span className="px-3 py-1 bg-emerald-500/20 text-emerald-400 text-xs font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold mb-3 group-hover:text-emerald-400 transition-colors">
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
        </div>

        {allProjects.length > 5 && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-center mt-12"
          >
            <Button
              onClick={() => navigate('/all-projects')}
              className="px-8 py-3 bg-transparent border-2 border-emerald-500 text-emerald-400 hover:bg-emerald-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              View All Projects
            </Button>
          </motion.div>
        )}
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

export default Projects;