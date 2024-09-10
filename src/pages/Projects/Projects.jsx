import './Projects.css';

import CardProject from '../../components/CardProject/CardProject';
import AOS from 'aos';
import { projectData } from './projectData';
import { useEffect } from 'react';


const Projects = () => {

  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset: 100,   
    });
  }, []);

  return (
    <section className='section-project'>

      <div className='section-project-container_title'>
        <h2 data-aos="fade-up" data-aos-duration="1000">
          Proyectos donde participé
        </h2>
      </div>

      <div
        className='section-project-container_cards'

      >
        {projectData.map((project, index) => (
          <CardProject
            key={index}
            title={project.title}
            description={project.description}
            tech={project.tech}
            imageUrl={project.imageUrl}
            link={project.link}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects