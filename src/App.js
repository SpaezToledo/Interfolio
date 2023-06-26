import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import SkillsPage from './pages/Skills';
import ProjectsPage from './pages/Projects';
import './Home.css';
import './App.css';


function App() {

  return (
    <Router>
      <div>
        <h1 className="Name">Santiago Paez Toledo</h1>
        <p className="subtitle">Desarrollador Web Full Stack</p>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
          <Route path="/projects" element={<ProjectsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
