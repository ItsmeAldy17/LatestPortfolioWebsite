import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import Projects from './components/Projects'
import ProjectDetail from './components/ProjectDetail'
import AllProjectsPage from './components/AllProjectsPage'
import Experience from './components/ExperiencePage'
import Achievements from './components/Achievements'
import AllAchievementsPage from './components/AllAchievementsPage' // Import komponen baru
import AllCertificationsPage from './components/AllCertificationsPage' // Import komponen baru
import Organizations from './components/Organizations'
import Gallery from './components/Gallery'
import Footer from './components/FooterPage'
import './App.css'

// Home Page Component
const HomePage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
      <Experience />
      <Achievements />
      <Organizations />
      <Gallery />
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/project/:id" element={<ProjectDetail />} />
        <Route path="/all-projects" element={<AllProjectsPage />} />
        <Route path="/all-achievements" element={<AllAchievementsPage />} />
        <Route path="/all-certifications" element={<AllCertificationsPage />} />
      </Routes>
    </Router>
  )
}

export default App