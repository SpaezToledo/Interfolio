import React, { useState, useEffect } from 'react';
import Home from '../assets/home.gif';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../Projects.css';
import AboutMe from '../assets/mercurio.gif';
import Contact from '../assets/eart.gif';
import Skills from '../assets/volcan.gif';
import Ship from '../assets/nave.gif';
import '../Home.css';
import Hc from '../assets/Hc.png';
import Meli from '../assets/Meli.png';
import Muniz from '../assets/Muniz.jpg';
import Calculadora from '../assets/Calc.jpg';

function Projects() {
  const [showHome, setShowHome] = useState(true);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.fromHome) {
      setShowHome(false);
    } else if (location.state && location.state.fromAbout) {
      setShowHome(true);
    }
  }, [location]);

  const handleClick = () => {
    navigate('/');
  };

  return (
    <div>
      <section>
      <article className="ship-container">
           
           <div className="ShipP fade-in">
             <img src={Ship} alt="Navegando" />
           </div>
     
       </article>
      <article>
        {showHome && (
          <div className='Home fade-in' onClick={handleClick}>
            <img src={Home} alt='Home' />
            <h1 className='titleH'>Home</h1>
          </div>
        )}
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
      
      </section>
<section>
<ul className="image-list2 fade-in">
      <li className="image-list-items Hc">
        <h1>Handicraft</h1>
        <img  src={Hc} alt="Imagen 1" />
      </li>
      <li className="image-list-items M">
        <h1>Muñiz</h1>
        <img className='muniz' src={Muniz} alt="Imagen 2" />
      </li>
      <li className="image-list-items Mel">
        <h1>Meliebre</h1>
        <img  src={Meli} alt="Imagen 3" />
      </li>
      <li className="image-list-items C">
        <h1>Calculadora</h1>
        <img  src={Calculadora} alt="Imagen 3" />
      </li>
      {/* Agrega más elementos <li> con las imágenes adicionales */}
    </ul>
</section>

    </div>
  );
}

export default Projects;
