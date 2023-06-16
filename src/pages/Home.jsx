import React from 'react';
import '../Home.css'
import Projects from '../assets/a.gif'
import AboutMe from '../assets/mercurio.gif'
import Contact from '../assets/eart.gif'
import Skills from '../assets/volcan.gif'
import Ship from '../assets/nave.gif'


function Home() {
  return (
    <div>
      <h1 className="Name">
        Santiago Paez Toledo
      </h1>
      <p className='subtitle'>Desarrollador Web Full Stack</p>

      <section>

        <article>
          <div className='Ship'>
            <img src={Ship} alt="Navegando" />
          </div>
        </article>



        <article>
          <div className="Projects">
            <img src={Projects} alt="Projects" />
            <h1 className='titleP'>Projectos</h1>
          </div>
        </article>


        <article>
          <div className='AboutMe'>
            <img src={AboutMe} alt="About Me" />
            <h1 className='titleA'>Sobre Mi</h1>
          </div>
        </article>


        <article>
          <div className='Contact'>
            <img src={Contact} alt="" />
            <h1 className='titleC'>Contacto</h1>
          </div>
        </article>


        <article>
          <div className='Skills'>
            <img src={Skills} alt="" />
            <h1 className='titleS'>Skills</h1>
          </div>
        </article>
        
         </section>

         <section>
          <article className='DateHome'>
          <p>Nacido en 2001</p>
          <p>en San Miguel, Bs As.</p>
          <p>El Universo</p>
          <p>nos brinda inspiración</p>
          <p>e infinitas oportunidades.</p>
         
          <p>Esta creencia</p>
          <p>se extiende al campo</p>
          <p>del desarrollo web,</p>
          <p>donde busco</p>
          <p>nuevas experiencias</p>
          <p>y oportunidades</p>
          <p>de aprendizaje.</p>
          <p></p>

          </article>
         </section>


    </div>


  );
}

export default Home;