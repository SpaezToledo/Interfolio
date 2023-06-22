import React, {useState, useEffect} from 'react';
import Home from '../assets/home.gif'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../Home.css';
import AboutMe from '../assets/mercurio.gif';
import Ship from '../assets/nave.gif';
import '../Skills.css'
import G from '../assets/git.png'
import GH from '../assets/github.png'
import Html from '../assets/html.png'
import My from '../assets/mysql.png'
import Node from '../assets/NodeJs.png'
import R from '../assets/React.png'
import pDF from '../assets/pdf.png'
import PDF from '../assets/CV SANTIAGO PAEZ TOLEDO-.pdf';
import Contact from '../assets/eart.gif';
import Projects from '../assets/a.gif';  

function Skills() {
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

     


const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>


          <section>
          <article className="ship-container">
           
           <div className="ShipS fade-in">
             <img src={Ship} alt="Navegando" />
           </div>
     
       </article>
          <article>
          
          {showHome && (
            <div className="Home fade-in" onClick={handleClick}>
              <img src={Home} alt="Home" />
              <h1 className="titleH">Home</h1>
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
            
            <Link to="/contact " >
              <div className="Contact fade-in">
                <img src={Contact} alt="" />
                <h1 className="titleC">Contacto</h1>
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
        <div className={`image-list ${loaded ? 'loaded' : ''}`}>
      <img className='iconH' src={Html} alt="Imagen 1" />
      <img className='iconN'src={Node} alt="Imagen 2" />
      <img className='iconG'src={G} alt="Imagen 3" />
      <img className='iconGH'src={GH} alt="Imagen 3" />
      <img className='iconM'src={My} alt="Imagen 3" />
      <img className='iconR'src={R} alt="Imagen 3" />
    </div>      
    
    <article className={`download ${loaded ? 'loaded' : ''}`}>
    <a href={PDF} download className="download-link">Descargar CV <img src={pDF} className='pdf' alt="Descargar" /></a>
    </article>
    </div>
  );
}

export default Skills;