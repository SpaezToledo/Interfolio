import React, {useState, useEffect} from 'react';
import Home from '../assets/home.gif'
import {  useNavigate, useLocation } from 'react-router-dom';
import '../Contact.css'
import '../Home.css';
import AboutMe from '../assets/mercurio.gif';
import Skills from '../assets/volcan.gif';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useForm } from '@formspree/react';
import Ship from '../assets/nave.gif';
import Projects from '../assets/a.gif';  

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
    const [formData, setFormData] = useState({
      name: '',
      email: '',
      subject: '',
      message: '',
    });

    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    };

    const [state, handleSubmit] = useForm("xrgvnwrk");
    if (state.succeeded) {
        return <p className='Msg'>Gracias por su Mensaje!</p>;
    }
    

  
  return (
    <div>
      <section>

      <article className="ship-container">
           
           <div className="ShipC fade-in">
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
        <form
        action="https://formspree.io/f/xrgvnwrk"
        method="POST"
        onSubmit={handleSubmit}
        className="contact-form fade-in">
      <label className='request' htmlFor="name">Nombre:</label>
      <input
        type="text"
        id="name"
        name="name"
        value={formData.name}
  onChange={handleChange}
  className="custom-input"
      />

      <label className='request' htmlFor="email">Email:</label>
      <input
        type="email"
        id="email"
        name="email"
        value={formData.email}
  onChange={handleChange}
  className="custom-input"
      />

      <label className='request' htmlFor="subject">Asunto:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        value={formData.subject}
  onChange={handleChange}
  className="custom-input"
      />

      <label className='request' htmlFor="message">Mensaje:</label>
      <textarea
        id="message"
        name="message"
        value={formData.message}
        onChange={handleChange}
        className="custom-input"
      ></textarea>

      <button className='request' type="submit">Enviar</button>
    </form>
  
    </div>
  );
}

export default Contact;
