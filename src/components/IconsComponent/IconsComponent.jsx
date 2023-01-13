import React from 'react';
import AOS from 'aos';
import IconCircle from '../IconCircle/IconCircle';
import github from '../../assets/images/icons/github-logo.png';
import linkedin from '../../assets/images/icons/linkedin-logo.png';
import './IconsComponent.css';


const IconsComponent = () => {

  AOS.init();

  return (
    <div className='icons_cnt'>
      <div
        className='icon-div'
      >
        <div 
          data-aos="fade-right"
          data-aos-duration='2000'
          className='about-animation-div--icon'
        >
        <IconCircle 
          name={'Github'}
          image={github} 
          link='https://github.com/agustinfraile'
        />
      </div>
      </div>

      <div
        className='icon-div'
      >
        <div 
          data-aos="fade-left"
          data-aos-duration='2000'
          className='about-animation-div--icon'
        >
          <IconCircle 
            name={'Linkedin'}
            image={linkedin} 
            link='https://www.linkedin.com/in/agustinfraile/'
          />
        </div>
      </div>
    </div>
  )
}

export default IconsComponent