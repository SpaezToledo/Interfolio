import React, {useState, useEffect} from 'react';
import Home from '../assets/home.gif'
import AboutMe from '../assets/mercurio.gif'
import Contact from '../assets/eart.gif'
import { Link, useNavigate, useLocation } from 'react-router-dom';

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
  return (
    <div>


          <section>
          <article>
          
          {showAboutMe && (
            <div className="Home" onClick={handleClick}>
              <img src={Home} alt="Home" />
              <h1 className="titleH">Home</h1>
            </div>
          )}
        </article>
<article>
          {showAboutMe && (
          
              <div className="AboutMe" onClick={handleClickAbout}>
                <img src={AboutMe} alt="About Me" />
                <h1 className="titleA">Sobre Mi</h1>
              </div>
      
          )}
        </article>


        <article>
        {showContact && (
  <div className="Contact"  onClick={handleClickContact}>
    <img src={Contact} alt="" />
    <h1 className="titleC">Contacto</h1>
  </div>

)}
        </article>



        </section>
      
    
  
    </div>
  );
}

export default Skills;