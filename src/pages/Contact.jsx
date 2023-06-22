import React, {useState, useEffect} from 'react';
import Home from '../assets/home.gif'
import { Link, useNavigate, useLocation } from 'react-router-dom';
import '../Contact.css'
import { useForm } from '@formspree/react';

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
      <article>
          
          {showHome && (
            <div className="Home fade-in" onClick={handleClick}>
              <img src={Home} alt="Home" />
              <h1 className="titleH">Home</h1>
            </div>
          )}
        </article>

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
