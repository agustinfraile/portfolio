import React from 'react';
import AOS from 'aos';
import IconTech from '../../components/IconTech/IconTech';
import IconEducation from '../../components/IconEducation/IconEducation';
import htmlLogo from '../../assets/images/icons/tech-logos/html.png'
import cssLogo from '../../assets/images/icons/tech-logos/css.png';
import jsLogo from '../../assets/images/icons/tech-logos/js.png'
import nodeLogo from '../../assets/images/icons/tech-logos/node.png'
import expressLogo from '../../assets/images/icons/tech-logos/express.png'
import sqlLogo from '../../assets/images/icons/tech-logos/sql.png'
import coderLogo from '../../assets/images/icons/formacion-logos/coder.png'
import henryLogo from '../../assets/images/icons/formacion-logos/henry.png'
import utnLogo from '../../assets/images/icons/formacion-logos/utn.png'
import udemyLogo from '../../assets/images/icons/formacion-logos/udemy.png'


import './About.css';

const About = () => {

  AOS.init();

  return (
    <div className='about-cnt'  id='sobre-mi'>

      <div className='about-cnt-first'>

        <div 
          className='about-cnt-text'
        >
          <div 
            data-aos="fade-right"
            data-aos-duration='2000'
            className='about-animation-div'
          >
            <h2>Conocimientos</h2>
            
            <div className='about-cnt-tech'>
              <IconTech 
                className='iconTech' 
                img={ htmlLogo } 
                name={'HTML'}
              />
              <IconTech 
                className='iconTech' 
                img={ cssLogo } 
                name={'CSS'}
              />
              <IconTech 
                className='iconTech' 
                img={ jsLogo } 
                name={'JS'}
              />
              <IconTech 
                className='iconTech' 
                img={ nodeLogo } 
                name={'Node'}
              />
              <IconTech 
                className='iconTech' 
                img={ expressLogo } 
                name={'Express'}
              />
              <IconTech 
                className='iconTech' 
                img={ sqlLogo } 
                name={'SQL'}
              />
            </div>
          </div>
        </div>

      </div>

      <div className='about-cnt-sec'>
        
        <div 
          className='about-cnt-text'
        >
          <div 
            data-aos="fade-right"
            data-aos-duration='2000'
            className='about-animation-div'
          >
            <h2>Formacion</h2>
            <div className='about-cnt-education'>
              <IconEducation 
                img={ coderLogo } 
                name={'CoderHouse'}
              />
              <IconEducation 
                img={ henryLogo } 
                name={'Henry'}
              />
              <IconEducation 
                img={ utnLogo } 
                name={'UTN'}
              />
              <IconEducation 
                img={ udemyLogo } 
                name={'Udemy'}
              />
          </div>
          </div>
        </div>

      </div>
      
    </div>
  )
}

export default About