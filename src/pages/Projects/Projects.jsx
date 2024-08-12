import AOS from 'aos';

import './Projects.css';
import CardProject from '../../components/CardProject/CardProject';

const Projects = () => {

  AOS.init();

  return (
    <section className='section-project'>
      <div className='section-project-container_title'>
        <h3>
          Mis proyectos
        </h3>
      </div>
      <div className='section-project-container_cards'>
        <CardProject />
        <CardProject />
        <CardProject />
      </div>
    </section>
  )
}

export default Projects