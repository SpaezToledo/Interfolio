import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import HomePage from './pages/Home';
import AboutPage from './pages/About';
import ContactPage from './pages/Contact';
import SkillsPage from './pages/Skills';
import './App.css';
import './Home.css';
import Projects from './assets/a.gif';
import AboutMe from './assets/mercurio.gif';
import Contact from './assets/eart.gif';
import Skills from './assets/volcan.gif';
import Ship from './assets/nave.gif';


function App() {


 

  return (
    <Router>
      <div>
        <h1 className="Name">Santiago Paez Toledo</h1>
        <p className="subtitle">Desarrollador Web Full Stack</p>

        <section>
          <article className="ship-container">
           
              <div className="Ship">
                <img src={Ship} alt="Navegando" />
              </div>
        
          </article>

          <article>
            <div className="Projects">
              <img src={Projects} alt="Projects" />
              <h1 className="titleP">Proyectos</h1>
            </div>
          </article>

          <article>
           
              <Link to="/about" >
                <div className="AboutMe">
                  <img src={AboutMe} alt="About Me" />
                  <h1 className="titleA">Sobre Mi</h1>
                </div>
              </Link>
           
          </article>

          <article>
            
              <Link to="/contact" >
                <div className="Contact">
                  <img src={Contact} alt="" />
                  <h1 className="titleC">Contacto</h1>
                </div>
              </Link>
          
          </article>

          <article>
            
              <Link to="/skills" >
                <div className="Skills">
                  <img src={Skills} alt="" />
                  <h1 className="titleS">Habilidades</h1>
                </div>
              </Link>
            
          </article>
        </section>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/skills" element={<SkillsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
