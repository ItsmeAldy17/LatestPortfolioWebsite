import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Users, Target, TrendingUp, Award, Code, Github, ExternalLink } from 'lucide-react';
import { Button } from '../components/ui/button';
import projectsData from '../data/project_details.json';

const ProjectDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Find project directly from project_details.json
    const project = projectsData.find(p => p.id === id);

    // If project not found, show error message
    if (!project) {
        return (
            <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold mb-4">Projects Not Found Due to Restrictions</h1>
                    <button
                        onClick={() => navigate('/all-projects')}
                        className="bg-emerald-500 hover:bg-emerald-600 flex items-center justify-center mx-auto px-4 py-2 rounded"
                    >
                        <ArrowLeft className="mr-2" size={16} />
                        Back to All Projects
                    </button>
                </div>
            </div>
        );
    }

    // Helper for technology icons
    const getTechIcon = (techName) => {
        const techIconPaths = {
            'Python': '/icons/Python.png',
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
            'Git': '/icons/Git.png',
            'Linux': '/icons/Linux.png',
            'PyTorch': '/icons/Pytorch.png',
            'FastAPI': '/icons/FastAPI.png',
            'Jupyter': '/icons/Jupyter.png',
            'Matplotlib': '/icons/Matplotlib.png',
            'Seaborn': '/icons/Seaborn.png',
            'Keras': '/icons/Keras.png',
            'BERT': '/icons/BERT.png',
            'YOLO': '/icons/YOLO.png',
            'MLflow': '/icons/MLflow.png',
            'Apache Airflow': '/icons/ApacheAirflow.png',
            'Prometheus': '/icons/Prometheus.png',
            'Apache Spark': '/icons/ApacheSpark.png',
            'InfluxDB': '/icons/InfluxDB.png',
            'Grafana': '/icons/Grafana.png',
            'XGBoost': '/icons/XGBoost.png',
            'LightGBM': '/icons/LightGBM.png',
            'Apache Kafka': '/icons/ApacheKafka.png',
            'Elasticsearch': '/icons/Elasticsearch.png',
            'NLTK': '/icons/NLTK.png',
            'Streamlit': '/icons/Streamlit.png',
            'Twitter API': '/icons/TwitterAPI.png',
            'Prophet': '/icons/Prophet.png',
            'ARIMA': '/icons/ARIMA.png',
            'Plotly': '/icons/Plotly.png',
            'Tableau': '/icons/Tableau.png',
            'Flask': '/icons/Flask.png',
            'DICOM': '/icons/DICOM.png',
            'GCP': '/icons/GCP.png',
            'Optuna': '/icons/Optuna.png',
            'Redux Toolkit': '/icons/Redux.png',
            'Google Fit API': '/icons/GoogleFit.png',
            'Apple HealthKit': '/icons/AppleHealth.png',
            'React Native': '/icons/React.png',
            'Expo': '/icons/Expo.png',
            'AWS IoT Core': '/icons/AWS.png',
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
            'AWS ECS': '/icons/AWS.png',
            'AWS Lambda': '/icons/AWSLambda.png',
            'AWS SageMaker': '/icons/AWSSageMaker.png',
            'Detectron2' : '/icons/Detectron2.png',
            'Other': '/icons/default.png',
        };
        for (const key in techIconPaths) {
            if (techName.includes(key)) {
                return techIconPaths[key];
            }
        }
        return techIconPaths['Other'];
    };

    // Map category to emoji for display
    const getCategoryIcon = (category) => {
        const categoryIcons = {
            'Web': '🌐 Web',
            'Mobile': '📱 Mobile',
            'IoT': '📡 IoT',
            'ML': '🧠 ML',
            'UI/UX': '🎨 UI/UX',
            'QA': '🔍 QA',
            'PM': '📋 PM',
            'Other': '💻 Other'
        };
        return categoryIcons[category] || '💻 Other';
    };

    // Filter related projects based on the same category
    const relatedProjects = projectsData
        .filter(p => p.id !== project.id && p.category === project.category)
        .slice(0, 5);

    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white">
            <div className="max-w-7xl mx-auto px-4 pt-8">
                <Button
                    onClick={() => navigate('/all-projects')}
                    variant="ghost"
                    className="text-gray-300 hover:bg-gradient-to-r hover:from-emerald-400 hover:via-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text border border-transparent hover:border-emerald-500 inline-flex items-center justify-center gap-2 transition-all duration-300 px-4 py-2 rounded-full"
                >
                    <ArrowLeft size={16} className="flex-shrink-0 text-gray-300 hover:bg-gradient-to-r hover:from-emerald-400 hover:via-blue-500 hover:to-purple-600 hover:text-transparent hover:bg-clip-text transition-all duration-300" />
                    Back to All Projects
                </Button>
            </div>

            <section className="py-20 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-7xl mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center mb-12"
                    >
                        <div className="flex items-center justify-center gap-4 mb-6">
                            <span className="text-6xl">{getCategoryIcon(project.category).split(' ')[0]}</span>
                            <div>
                                <span className="px-4 py-2 bg-emerald-500/20 text-emerald-400 text-sm font-medium rounded-full border border-emerald-500/30">
                                    {getCategoryIcon(project.category).split(' ')[1] || project.category}
                                </span>
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                            {project.name || 'Untitled Project'}
                        </h1>

                        <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
                            {project.overview || 'No description available.'}
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
                    >
                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                            <Users className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">Role</h3>
                            <p className="text-gray-300">{project.role || 'N/A'}</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                            <Calendar className="w-8 h-8 text-blue-400 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">Timeline</h3>
                            <p className="text-gray-300">{project.timeline || 'N/A'}</p>
                        </div>

                        <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 text-center">
                            <Target className="w-8 h-8 text-purple-400 mx-auto mb-3" />
                            <h3 className="text-lg font-semibold text-white mb-2">Status</h3>
                            <span className={`px-3 py-1 rounded-full text-sm font-medium ${project.status === 'Done'
                                ? 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                : 'bg-yellow-500/20 text-yellow-400 border border-yellow-500/30'
                                }`}>
                                {project.status || 'N/A'}
                            </span>
                        </div>
                    </motion.div>
                </div>
            </section>

            <section className="py-20 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2 space-y-12">
                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Target className="text-emerald-400" />
                                    Project Overview
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {project.overview || 'No overview available.'}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <TrendingUp className="text-blue-400" />
                                    Challenge
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg">
                                    {project.challenge || 'No challenge description available.'}
                                </p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3">
                                    <Award className="text-purple-400" />
                                    Result & Impact
                                </h2>
                                <p className="text-gray-300 leading-relaxed text-lg mb-8">
                                    {project.result || 'No result information available.'}
                                </p>

                                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {Object.entries(project.statistics || {}).map(([key, value]) => (
                                        <div key={key} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-lg p-4 text-center">
                                            <div className="text-2xl font-bold text-emerald-400 mb-1">{value}</div>
                                            <div className="text-sm text-gray-400">{key}</div>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                viewport={{ once: true }}
                            >
                                <h2 className="text-3xl font-bold mb-6">Project Gallery</h2>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    {project.gallery && project.gallery.length > 0 ? (
                                        project.gallery.map((item, index) => (
                                            <div key={item.id || index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl overflow-hidden hover:border-emerald-500/50 transition-all duration-300">
                                                <div className="aspect-video bg-gradient-to-br from-emerald-500/20 to-blue-500/20 flex items-center justify-center">
                                                    <img src={item.src || '/placeholder.png'} alt={item.title || 'Gallery Image'} className="w-full h-full object-cover" />
                                                </div>
                                                <div className="p-4">
                                                    <h3 className="text-lg font-semibold text-white mb-2">{item.title || 'N/A'}</h3>
                                                    <p className="text-gray-400 text-sm">{item.description || 'No description'}</p>
                                                </div>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="col-span-full text-center text-gray-400 text-lg">
                                            No gallery images available for this project.
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>

                        <div className="space-y-8">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-6 flex items-center gap-2">
                                    <Code className="text-emerald-400" />
                                    Technologies Used
                                </h3>

                                <div className="space-y-6">
                                    {Object.entries(project.technologies_grouped || {}).map(([category, techs]) => (
                                        techs.length > 0 && (
                                            <div key={category}>
                                                <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wide mb-3">
                                                    {category}
                                                </h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {techs.map((tech) => (
                                                        <span
                                                            key={tech}
                                                            className="flex items-center gap-1 px-3 py-1 bg-gray-700/50 text-gray-300 text-sm rounded-lg border border-gray-600 hover:border-emerald-500/50 transition-colors"
                                                        >
                                                            <img src={getTechIcon(tech)} alt={tech} className="w-4 h-4 object-contain" />
                                                            {tech}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        )
                                    ))}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.1 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-6">Project Links</h3>
                                <div className="space-y-3">
                                    {project.github_link && project.github_link !== '#' && (
                                        <Button
                                            onClick={() => window.open(project.github_link, '_blank')}
                                            variant="outline"
                                            className="w-full flex items-center justify-center border-gray-600 text-gray-300 hover:border-emerald-500 hover:text-emerald-500 transition-colors"
                                        >
                                            <Github className="mr-2" size={16} />
                                            View Source Code
                                        </Button>
                                    )}
                                    {project.demo_link && project.demo_link !== '#' && (
                                        <Button
                                            onClick={() => window.open(project.demo_link, '_blank')}
                                            className="w-full flex items-center justify-center bg-emerald-500 hover:bg-emerald-600 text-white"
                                        >
                                            <ExternalLink className="mr-2" size={16} />
                                            Live Demo
                                        </Button>
                                    )}
                                </div>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.8, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6"
                            >
                                <h3 className="text-xl font-bold mb-6">Related Projects</h3>
                                <div className="space-y-4">
                                    {relatedProjects.length > 0 ? (
                                        relatedProjects.map(rp => (
                                            <div
                                                key={rp.id}
                                                onClick={() => navigate(`/project/${rp.id}`)}
                                                className="cursor-pointer p-3 bg-gray-700/50 rounded-lg hover:bg-gray-600/50 transition-colors"
                                            >
                                                <h4 className="font-semibold text-white text-sm mb-1">{rp.name || 'Untitled'}</h4>
                                                <p className="text-gray-400 text-xs line-clamp-2">{rp.overview || 'No description'}</p>
                                            </div>
                                        ))
                                    ) : (
                                        <div className="text-gray-400 text-center">
                                            No related projects found in this category.
                                        </div>
                                    )}
                                </div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ProjectDetail;