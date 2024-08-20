import profilePicture from '../../assets/images/image-profiles.png';
import AOS from 'aos';
import Typewriter from 'typewriter-effect';

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
                    <h1
                        data-aos='fade-right'
                        data-aos-duration='2500'
                        data-aos-delay='100'
                        data-aos-once='true'
                    >
                        AGUSTIN FRAILE
                    </h1>
                    <h3>
                        <Typewriter
                            options={{
                                strings: ['< Desarrollador web />'],
                                autoStart: true,
                                loop: true,
                                delay: 100,  
                                deleteSpeed: 50,
                            }}
                        />
                    </h3>
                </div>
            </div>
        </section>
    )
}

export default Intro    