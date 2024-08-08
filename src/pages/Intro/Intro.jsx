import React from 'react';
import profilePicture from '../../assets/images/image-profile.png';
import AOS from 'aos';

import './Intro.css';

const Intro = () => {
  AOS.init();
  return (
    <section className='section-intro'>
        <div className='section-intro_image-container'>
            <img src={profilePicture} alt='Imagen de perfil' className='section-intro_image-container--image' />
        </div>

        <div className='section-intro_title-container'>
            <div className='section-intro_title-container--title'>
                <h1>
                    AGUSTIN FRAILE
                </h1>
                <h3>
                    &lt; Desarrollador web /&gt;
                </h3>
            </div>
        </div>       
    </section>
  )
}

export default Intro    