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
            <div className="Home" onClick={handleClick}>
              <img src={Home} alt="Home" />
              <h1 className="titleH">Home</h1>
            </div>
          )}
        </article>


        </section>
      <section>

        <article className='DateAboutMe'>
          <p>Naci con el internet, 2 megas pero había.</p>
          <p>Tuve la suerte de tener acceso a una PC</p>
          <p>En 2021, comencé mi viaje en la programación de forma independiente</p>
          <p> En 2022, decidí llevar mi aprendizaje al siguiente nivel y me uní a Digital House.</p>
          <p>Donde participé en diversos proyectos y experimenté el verdadero aprendizaje práctico.</p>
          <p>desarrollamos un proyecto grupal, un E-commerce que se trabajo durante toda la duración del curso.</p>
          <p>En octubre de ese mismo año, terminé exitosamente el curso de programación web full stack.</p>
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


