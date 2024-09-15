import './About.css';
import AOS from 'aos';
import CardBackground from '../../components/CardBackground/CardBackground';
import { skills } from './skills';
import { useEffect } from 'react';

const About = () => {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
    });
  }, []);

  return (
    <section className="skills-section">
      <div className="skills-section-container">
        <h2 data-aos="fade-up" data-aos-duration="1000">Lo que hago</h2>
        <div className="skills-grid">
          {skills.map((item, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <CardBackground
                title={item.category}
                description={item.description}
                icon={item.icon}
                skills={item.skills}
                highlight={item.highlight}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default About;
