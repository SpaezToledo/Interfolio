import React, {useState, useEffect} from 'react';
import Home from '../assets/home.gif'
import AboutMe from '../assets/mercurio.gif'
import Skills from '../assets/volcan.gif'
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Contact() {
    const [showHome, setShowHome] = useState(true);
    const [showAboutMe, setShowAboutMe] = useState(true);
    const [showSkills, setShowSkills] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
      if (location.state && location.state.fromHome) {
        setShowAboutMe(false);
        setShowHome(false);
        setShowSkills(false);
      } else if (location.state && location.state.fromAbout) {
        setShowAboutMe(true);
        setShowHome(true);
        setShowSkills(true);
      }
    }, [location]);
  
    const handleClick = () => {
      navigate('/');
    };
    const handleClickAbout = () => {
        navigate('/about');
      };
      const handleClickSkills = () => {
        navigate('/skills');
      };

  return (
    <div>
      <article>
          
          {showHome && (
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
          {showSkills && (
       
          <div className='Skills' onClick={handleClickSkills}>
            <img src={Skills} alt="" />
            <h1 className='titleS'>Skills</h1>
          </div>

          )}
        </article>

  
    </div>
  );
}

export default Contact;
