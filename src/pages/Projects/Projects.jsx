import AOS from 'aos';

import './Projects.css';

const Projects = () => {

  AOS.init();

  return (
    <section className='section-project'>
      <div className='section-project-container_title'>
        <h3>
          Mis proyectos
        </h3>
      </div>

    </section>
  )
}

export default Projects