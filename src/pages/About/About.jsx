import './About.css';


import AOS from 'aos';

import iconFrontend from '../../assets/images/icons/frontend.png';
import iconBackend from '../../assets/images/icons/back-end.png';
import iconDatabase from '../../assets/images/icons/data-base.png';

import CardBackground from '../../components/CardBackground/CardBackground';

const About = () => {

  AOS.init();

  return (
    <section className='section-about'>
      <div className='section-about-container_title'>
        <h3>
          Áreas de especialización
        </h3>
      </div>
      <div className='section-about-container_cards'>
        <CardBackground
          title='Frontend'
          description='Desarrollo interfaces de usuario responsivas y atractivas utilizando HTML, CSS, JavaScript, y React.'
          image={iconFrontend}
          alt='Icono Frontend'
        />
        <CardBackground
          title='Backend'
          description='Consumo APIs con Node.js y Express, asegurando eficiencia en la lógica del servidor.'
          image={iconBackend}
          alt='Icono Backend'
        />
        <CardBackground
          title='Bases de datos'
          description='Gestiono bases de datos SQL y NoSQL como MongoDB, asegurando estructuras de datos optimizadas.'
          image={iconDatabase}
          alt='Icono Bases de datos'
        />
      </div>
    </section>
  )
}

export default About