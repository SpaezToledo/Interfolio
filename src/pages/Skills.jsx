import React, {useState, useEffect} from 'react';
import Home from '../assets/home.gif'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../Skills.css'
import G from '../assets/git.png'
import GH from '../assets/github.png'
import Html from '../assets/html.png'
import My from '../assets/mysql.png'
import Node from '../assets/NodeJs.png'
import R from '../assets/React.png'

function Skills() {
    const [showHome, setShowHome] = useState(true);
    const [showAboutMe, setShowAboutMe] = useState(true);
      const [showContact, setShowContact] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
      if (location.state && location.state.fromHome) {
        setShowAboutMe(false);
        setShowHome(false);
        setShowContact(false);
      } else if (location.state && location.state.fromAbout) {
        setShowAboutMe(true);
        setShowContact(false);
        setShowHome(true);
      }
    }, [location]);
  
    const handleClick = () => {
      navigate('/');
    };
    const handleClickAbout = () => {
        navigate('/about');
      };

      const handleClickContact = () => {
    navigate('/contact');
}

const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div>


          <section>
          <article>
          
          {showAboutMe && (
            <div className="Home fade-in" onClick={handleClick}>
              <img src={Home} alt="Home" />
              <h1 className="titleH">Home</h1>
            </div>
          )}
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
    
  
    </div>
  );
}

export default Skills;