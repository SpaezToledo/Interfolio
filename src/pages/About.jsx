import React, {useState, useEffect} from 'react';
import '../About.css'
import Home from '../assets/home.gif'
import {  useNavigate, useLocation } from 'react-router-dom';




function AboutMe() {
    const [showHome, setShowHome] = useState(true);

  // const [showShip, setShowShip] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.state && location.state.fromHome) {
      setShowHome(false);

      // setShowShip(true);
  
    } else if (location.state && location.state.fromAbout) {
      setShowHome(true);

      // setShowShip(false); ;
    }
  }, [location]);

  const handleClick = () => {
    setShowHome(false);
  navigate('/', { state: { fromAbout: true } });
  };
  

  
    return (
      <div>
        <section>
          <article>
          
          {showHome && (
            <div className="Home fade-in" onClick={handleClick}>
              <img src={Home} alt="Home" />
              <h1 className="titleH">Home</h1>
            </div>
          )}
        </article>


        </section>
      <section>

        <article className='DateAboutMe fade-in'>
          <p>Naci con internet, 2 megas pero había.</p>
          <p>Tuve la suerte de tener acceso a una PC.</p>
          <p>En 2021, comencé mi viaje en la programación de forma independiente</p>
          <p>En 2022, me uní a Digital House para mejorar mis habilidades.</p>
          <p>Participé en proyectos y experimenté el intenso trabajo práctico.</p>
          <p>Desarrollamos un E-commerce de manera grupal</p>
          <p>atravesando diferentes desafios.</p>
          <p>Terminé exitosamente el curso de programación web full stack.</p>
          <p>Actualmente soy un programador web independiente</p>
          <p>trabajando en proyectos personales, en busca de oportunidades. </p>
          <p></p>
          <p></p>


        </article>

      </section>
      



      </div>
    );
  }
  
  export default AboutMe;


