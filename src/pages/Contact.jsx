import React, {useState, useEffect} from 'react';
import Home from '../assets/home.gif'
import AboutMe from '../assets/mercurio.gif'
import Skills from '../assets/volcan.gif'
import { Link, useNavigate, useLocation } from 'react-router-dom';

function Contact() {
    const [showHome, setShowHome] = useState(true);
  
    const navigate = useNavigate();
    const location = useLocation();
    
    useEffect(() => {
      if (location.state && location.state.fromHome) {
    
        setShowHome(false);
 ;
      } else if (location.state && location.state.fromAbout) {
  
        setShowHome(true);
  
      }
    }, [location]);
  
    const handleClick = () => {
      navigate('/');
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


  
    </div>
  );
}

export default Contact;
