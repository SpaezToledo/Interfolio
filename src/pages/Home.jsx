import React  from 'react';
import '../App.css';
import '../Home.css';
import AboutMe from '../assets/mercurio.gif';
import Contact from '../assets/eart.gif';
import Skills from '../assets/volcan.gif';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Ship from '../assets/nave.gif';
import Projects from '../assets/a.gif';     
function Home() {



  return (
    <div>
      <section>
       <article className="ship-container">
           
           <div className="Ship fade-in">
             <img src={Ship} alt="Navegando" />
           </div>
     
       </article>
     <article>
           
           <Link to="/about" >
             <div className="AboutMe fade-in">
               <img src={AboutMe} alt="About Me" />
               <h1 className="titleA">Sobre Mi</h1>
             </div>
           </Link>
        
       </article>

       <article>
            
            <Link to="/contact" >
              <div className="Contact fade-in">
                <img src={Contact} alt="" />
                <h1 className="titleC">Contacto</h1>
              </div>
            </Link>
        
        </article>

        <article>
          
            <Link to="/skills" >
              <div className="Skills fade-in">
                <img src={Skills} alt="" />
                <h1 className="titleS">Habilidades</h1>
              </div>
            </Link>
          
        </article>
        <article>
          <Link to="/projects">
            <div className="Projects fade-in">
              <img src={Projects} alt="Projects" />
              <h1 className="titleP">Proyectos</h1>
            </div>
            </Link>
          </article>
          </section>
         <section>
          <article className='DateHome fade-in'>
          <p>Nacido en 2001</p>
          <p>en San Miguel, Bs As.</p>
          <p>El Universo</p>
          <p>nos brinda inspiración</p>
          <p>e infinitas oportunidades.</p>
         
          <p>Esta creencia</p>
          <p>se extiende al campo</p>
          <p>del desarrollo web,</p>
          <p>donde busco</p>
          <p>nuevas experiencias</p>
          <p>y oportunidades</p>
          <p>de aprendizaje.</p>
          <p></p>

          </article>
           
         </section>


    </div>


  );
}

export default Home;