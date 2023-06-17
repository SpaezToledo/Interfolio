import React, {useState, useEffect} from 'react';
import '../About.css'
import Home from '../assets/home.gif'
import Contact from '../assets/eart.gif'
import Skills from '../assets/volcan.gif'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import Ship from '../assets/nave.gif'




function AboutMe() {
    const [showAboutMe, setShowAboutMe] = useState(true);
    const [showContact, setShowContact] = useState(true);
    const [showSkills, setShowSkills] = useState(true);
  const [showShip, setShowShip] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.state && location.state.fromHome) {
      setShowAboutMe(false);
      setShowContact(false);
      setShowSkills(false);
      setShowShip(true);
  
    } else if (location.state && location.state.fromAbout) {
      setShowAboutMe(true);
      setShowContact(false);
      setShowSkills(true);
      setShowShip(false); ;
    }
  }, [location]);

  const handleClick = () => {
    navigate('/');
  };
  
const handleClickContact = () => {
    navigate('/contact');
}
const handleClickSkills = () => {
    navigate('/skills');
  };

  
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
        {showContact && (
  <div className="Contact"  onClick={handleClickContact}>
    <img src={Contact} alt="" />
    <h1 className="titleC">Contacto</h1>
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


        </section>
      
      



      </div>
    );
  }
  
  export default AboutMe;


